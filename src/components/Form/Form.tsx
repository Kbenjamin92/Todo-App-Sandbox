import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface IProps {
    data: string | undefined;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<IProps> = ({ 
    handleChange,
    data
 }) => {

    console.log(data);
    
return (
        <form onSubmit{}>
            <TextField 
                type='text'
                name='title'
                variant='filled'
                placeholder='Title...'
                onChange={handleChange}
                required
                id='title'
            />
            <TextField 
                type='text'
                name='description'
                variant='filled'
                placeholder='Description...'
                onChange={handleChange}
                required
                id='description'
            />
            <Button variant='container'>Add Todo</Button>
        </form>
    )
}
 
export default Form;
