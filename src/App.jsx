import './App.css';
import FotterSection from './Component/FotterSection';
import Navigation2 from './Component/Navigation2';
// import Navigationbar from './Component/Navigationbar';
import SlideShow from './Component/SlideShow';
import { useState } from 'react';
import Login from './Component/Login';
import Slidebar from './Component/Slidebar'
import Fottersignin from './Component/Fottersignin';
import Cardparent from './Component/Cardparent';
import SlideShowrectangle from './Component/SlideShowrectangle';
import Cardbox2 from './Component/Cardbox2';
import Navigationbar from './Component/Navigationbar';
// import Ordersection from './Component/Ordersection';


function App() {

  const [login, setLogin] = useState(false);


  const handleLogin = () => {
    setLogin(true);
  }


  return (


    <>
      {login ?

        <>
          <Navigationbar />
          <Navigation2 />
          <SlideShow />
          <Cardparent />
          <SlideShowrectangle />
          <Slidebar />
          <Cardbox2 />
          <Fottersignin />
          <FotterSection />
        </>

        : <Login handleLogin={handleLogin} />
      }

    </>
  );
}

export default App;
