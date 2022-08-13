import './App.css';
import Homepage from './components/pages/home/homepage';
import Lottie from "lottie-react";
import { useEffect, useState } from 'react';
import animationData from './components/lottie/semicolonloader.json'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000)
  }, [])

  return (
    <div>
      {
        loading ? <div className='App'><Lottie animationData={animationData} /></div>:
       <Homepage />}
    </div>
  );
}

export default App;
