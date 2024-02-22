import './App.css';
import FotterSection from './Component/FotterSection';
import Navigation2 from './Component/Navigation2';
import Navigationbar from './Component/Navigationbar';
import SlideShow from './Component/SlideShow';
import { useState } from 'react';
import Login from './Component/Login';

function App() {
  const [login, setLogin] = useState(false);

  const handlelogin = () => {
    setLogin(true);
  }

  return (
    <>
      {login ? (
        <>
          <Navigationbar />
          <Navigation2 />
          <SlideShow />
          <FotterSection />
        </>
      ) : (
        <Login handlelogin={handlelogin} />
      )}
    </>
  );
}

export default App;
