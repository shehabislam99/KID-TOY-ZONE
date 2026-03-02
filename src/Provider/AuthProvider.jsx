import { createUserWithEmailAndPassword,
      GoogleAuthProvider, 
      onAuthStateChanged, 
      sendPasswordResetEmail, 
      signInWithEmailAndPassword, 
      signInWithPopup, 
      signOut,
      updateProfile} from 'firebase/auth';
import React, { createContext, useContext, 
     useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import GlobalLoader from '../Components/GlobalLoader';

  const OrderContext = createContext();
  export const useOrders = () => useContext(OrderContext);

  export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    const addOrder = (toy) => {
      const newOrder = {
        id: toy.id,
        toyId: toy.toyId,
        toyName: toy.toyName,
        sellerName: toy.sellerName,
        sellerEmail: toy.sellerEmail,
        price: toy.price,
        rating: toy.rating,
        availableQuantity: toy.availableQuantity,
        quantity: 1,
        status: toy.status,
        orderDate: new Date().toISOString().split("T")[0],
        deliveryDate: null,
        trialStart: null,
        trialEnd: null,
        description: toy.description,
        pictureURL: toy.pictureURL,
        subCategory: toy.subCategory,
      };
      setOrders((prev) => [...prev, newOrder]);
    };

    const removeOrder = (orderId) => {
      setOrders((prev) => prev.filter((order) => order.id !== orderId));
    };

    const updateOrderStatus = (orderId, status) => {
      setOrders((prev) =>
        prev.map((order) =>
          order.id === orderId ? { ...order, status } : order
        )
      );
    };

    return (
      <OrderContext.Provider
        value={{ orders, addOrder, removeOrder, updateOrderStatus }}
      >
        {children}
      </OrderContext.Provider>
    );
  };


 const AuthContext = createContext();
 export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

const signIn = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      auth.currentUser.reload().then(() => {
        setUser(auth.currentUser);
      });
      return result; 
    })
};
  

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

    const updateUserProfile = (user, profileData) => {
      updateProfile(user, {
        displayName: profileData.displayName,
        photoURL: profileData.photoURL,
      });

      const updatedUser = {
        ...user,
        displayName: profileData.displayName,
        photoURL: profileData.photoURL,
        phone: profileData.phone,
        address: profileData.address,
      };

      return updatedUser;
    };


    const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
    const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  
  const value = {
    user,
    loading,
    createUser,
    signIn,
    logout,
    signInWithGoogle,
    updateUserProfile,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <div className='p-10'><GlobalLoader/></div>}
    </AuthContext.Provider>
  );
};
export const AppProvider = ({ children }) => {
  return (
    <OrderProvider>
      <AuthProvider>{children}</AuthProvider>
    </OrderProvider>
  );
};
export default AuthProvider;