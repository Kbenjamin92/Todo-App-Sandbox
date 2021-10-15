import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

interface IProps {
    title: string | undefined;
    description: string | undefined;
    handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    valueArr: any[] | undefined;
}

const Form: React.FC<IProps> = ({ 
    title,
    description,
    valueArr,
    handleTitleChange,
    handleDesChange,
    handleSubmit,
 }) => {


    console.log(valueArr);
return (
    <div>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <form onSubmit={handleSubmit}>
                    <TextField 
                        type='text'
                        name='title'
                        variant='filled'
                        placeholder='Title...'
                        onChange={handleTitleChange}
                        required
                        id='title'
                    />
                    <TextField 
                        type='text'
                        name='description'
                        variant='filled'
                        placeholder='Description...'
                        onChange={handleDesChange}
                        required
                        id='description'
                    />
                    <Button variant='contained' type="submit">Add Todo</Button>
                </form>
            </Grid>
        </Grid>
    {
        title && description ?
        <>
        <ol>
           <Card variant="outlined">{title}</Card>
           <Card variant="outlined">{description}</Card>
       </ol>
        </>
        :
        null
    }
       
    </div>
    )
}
 
export default Form;
