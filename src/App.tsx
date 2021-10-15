import React, { useState } from 'react';
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import './App.css';


const App: React.FC = () => {

  const [input, setInput] = useState<string | undefined>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);

  }
  
  return (
    <div className="App">
      <Header />
      <Form 
        data={input}
        handleChange={handleChange}
      />

    </div>
  );
}

export default App;
