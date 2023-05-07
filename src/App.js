
import { Axios } from 'axios';
import './App.css';
import { useEffect, useState } from 'react';



function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState({});

  const fetchData = () => {
    // Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
    //   console.log(res.data);
    // });

    fetch(`https://api.agify.io/?name=${name}`)
    .then(response => response.json())
    .then(data => setAge(data));
  };
  
  return (
    <div className="App">
      <input placeholder='Ex. Samuel...' onChange={(event) => {
        setName(event.target.value);
      }}/>
      <button onClick={fetchData}>Predict age</button>
      <h1>name: {age.name} </h1>
      <h1>count: {age.count} </h1>
      <h1>Predicted age: {age.age} </h1>
    </div>
  );
}

export default App;
