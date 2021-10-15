import React, { useState } from 'react';
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import './App.css';


const App: React.FC = () => {

  const [title, setTitle] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const [fieldTitle, setFieldTitle] = useState<string | undefined>();
  const [fieldDescription, setFieldDescription] = useState<string | undefined>();
  const [valueArr, setValueArr] = useState<any[] | undefined>();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldTitle(e.currentTarget.value);
  }

  const handleDesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldDescription(e.currentTarget.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTitle(fieldTitle);
    setDescription(fieldDescription);
    const valueObj = {
      title: title,
      description: description
    }
    setValueArr([valueObj]);

  }
  
  return (
    <div className="App">
      <Header />
      <Form 
        title={title}
        description={description}
        handleTitleChange={handleTitleChange}
        handleDesChange={handleDesChange}
        handleSubmit={handleSubmit}
        valueArr={valueArr}
      />

    </div>
  );
}

export default App;
