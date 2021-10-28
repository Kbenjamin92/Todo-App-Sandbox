import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

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

    const useStyles = makeStyles((theme) => ({
        addTodoBtn: { 
            padding: '10px !important',
        },
        cardStyle: {
            padding: '30px !important',
        }
    }));

    const classes = useStyles();


    const valueData = valueArr.map((item, key) => {
        return (
            <div key={key}>
                <ol>
                    <Grid item xs={4} direction='row'>
                        <Card variant="outlined">
                            <div className={classes.cardStyle}>
                                <h2>{item.title}</h2>
                                <hr/>
                                <p>{item.description}</p>
                                <Button variant='outlined' color='error'>Remove</Button>
                            </div>
                        </Card>
                    </Grid>
                </ol>
            </div>
            )
        }
    )

return (
    <form onSubmit={handleSubmit}>
        <Grid container spacing={3} direction='column'>
            <Grid item xs={4}>
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
            <Grid item xs={4}>
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
            </Grid>
            <Grid item xs={2}>
                <Button 
                    variant='contained' 
                    color="success" 
                    type="submit"
                    className={classes.addTodoBtn}
                >Add Todo</Button>
            </Grid>
        </Grid>

        { valueData }
    </form>
    )
}
 
export default Form;
