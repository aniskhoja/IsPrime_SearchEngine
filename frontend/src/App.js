import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Main } from './components/Main';

function App() {
//setState to store data related to component
  const [getInput, setInput] = useState("");
  const [apiResult, setApiResult] = useState("");
  const [error, setError] = useState("");
  

//function to post and get result from nodejs
  async function onSubmit(event) {
    event.preventDefault(); // stoping default behaviour of submit button
    setApiResult("")
    try {
      const obj = { value: getInput }
      const { data: post } = await axios.post('http://localhost:9000/', obj)
      const result = JSON.stringify(post)
      setApiResult(result)
      setError('')
    } catch (e){
      setError(e.response.data)
    }
  };

  //main Component with form / error / result
  return <Main onSubmit={onSubmit}
    error={error} getInput={getInput} setInput={setInput} apiResult={apiResult} />;
};

export default App;
