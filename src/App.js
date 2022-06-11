import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const url = "https://dog.ceo/api/breeds/image/random";

  const [dog, setDog] = useState(null);

  const getDog = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setDog(data);
  };

  useEffect(() => {
    getDog();
  }, []);

  const handleClick = (event) => {
    getDog(event);
  };

  return (
    <div className="App">
      <h1>Random Dog Photo Generator</h1>
      <button onClick={()=>handleClick()}>New Dog!</button>
      <div className='image'>
      <img src={dog.message} alt="" width="500px"/>
      </div>
    </div>
  );
}

export default App;
