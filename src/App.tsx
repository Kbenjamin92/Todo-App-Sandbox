import React, { useState } from 'react';
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import './App.css';


const initialValues = {
  title: '',
  description: '',
}

const App: React.FC = () => {

  const [valueArr, setValueArr] = useState<any[] | undefined>();
  const [inputValues, setInputValues] = useState<any | string>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setInputValues({
      ...inputValues,
      [name]: value
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // figure out handle submit logic
    // setValueArr(valueArr, [inputValues]);

  }

  return (
    <div className="App">
      <Header />
      <Form 
        title={inputValues.title}
        description={inputValues.description}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        valueArr={valueArr}
      />

    </div>
  );
}

export default App;
