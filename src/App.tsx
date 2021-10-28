import React, { useState } from 'react';
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import './App.css';


const initialValues = {
  title: '',
  description: '',
}

const App: React.FC = () => {

  const [valueArr, setValueArr] = useState<any[]>([]);
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
    const items = [];
    items.push(inputValues);
    const newArr = [...items, ...valueArr];
    setValueArr(newArr);
    setInputValues({
      title: '',
      description: '',
    });
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
