import React from'react';
import Slider from '../../Components/Slider';
import PopularToys from '../../Components/AllToys';
import AllToys from '../../Components/AllToys';
import GlobalLoader from '../../Components/GlobalLoader';

const Home = () => {

return (
  <div>
    <GlobalLoader/>
    <Slider />
    <AllToys/>
  </div>
);
     
};

export default Home;