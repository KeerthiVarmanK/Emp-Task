import React from 'react';
import Home from './Home';
import './App.css';
import{ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;