import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import GlobalLoader from '../Components/GlobalLoader';

const MainLayout = () => {
     return (
          <div>
               <GlobalLoader/>
               <Navbar></Navbar>
               <main className='min-h-screen'>
                    <Outlet></Outlet>
               </main>
               <Footer></Footer>
          </div>
     );
};

export default MainLayout;