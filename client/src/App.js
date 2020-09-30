import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextContextProvider from './contexts/text';
import Textarea from './components/textarea';
import CheckButton from './components/checkbutton';

function App() {
  return (
    <TextContextProvider>
    <div className="columns is-centered">
      <div className="column is-one-third">
      <Textarea/>
      <CheckButton/>
      </div>
    </div>
    </TextContextProvider>
  );
}

export default App;
