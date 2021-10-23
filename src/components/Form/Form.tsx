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

 const valueData = valueArr.map((item, key) => {
    return (
        <div key={key}>
            <ol>
                <Grid item xs={2}>
                    <Card variant="outlined">
                        <div>
                            <h2>Todo's</h2>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <Button variant='outlined'>Remove</Button>
                        </div>
                    </Card>
                </Grid>
            </ol>
        </div>
        )
    }
)

return (
    <div>
        <Grid container spacing={2}>
            <Grid item xs={10}>
                <form onSubmit={handleSubmit}>
                <Grid item xs={12}>

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
                </Grid>
                <Grid item xs={12}>

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
                </Grid>

                </form>
            </Grid>
        </Grid>

        { valueData }
    </div>
    )
}
 
export default Form;
