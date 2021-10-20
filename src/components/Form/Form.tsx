import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

interface IProps {
    title: string | undefined;
    description: string | undefined;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    valueArr: any[];
}

const Form: React.FC<IProps> = ({ 
    title,
    description,
    valueArr,
    handleChange,
    handleSubmit,
 }) => {


return (
    <div>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <form onSubmit={handleSubmit}>
                    <TextField 
                        type='text'
                        name='title'
                        value={title}
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
                        value={description}
                        placeholder='Description...'
                        onChange={handleChange}
                        required
                        id='description'
                    />
                    <Button variant='contained' type="submit">Add Todo</Button>
                </form>
            </Grid>
        </Grid>

        {
            valueArr.map((item, key) => {
                return (
                    <div key={key}>
                        <ol>
                            <Card variant="outlined">{item.title}</Card>
                            <Card variant="outlined">{item.description}</Card>
                        </ol>
                    </div>
                    
                )
            }
          )
        }
    
    </div>
    )
}
 
export default Form;
