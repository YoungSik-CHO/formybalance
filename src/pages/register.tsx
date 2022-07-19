import React from 'react';
import { useNavigate } from 'react-router';
import { Box, Input, TextField, Button } from '@mui/material';
import {Typography, Switch } from '@mui/joy';
import { Container, height } from '@mui/system';
import { register } from '../types/loginTypes';

export let Register = () : JSX.Element => {
    let navigate = useNavigate();

    // ID , PW 변경값
    let [name, setName] = React.useState<string>('');
    let [id, setId] = React.useState<string>('');
    let [pw, setPw] = React.useState<string>('');

    const register = () => {
        let register : register = {
            'name' : name,
            'id' : id,
            'pw' : pw
        }
        localStorage.setItem('user', JSON.stringify(register));
        navigate('/');
    };

    return (
        <>
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#ffffff', height: '100vh', gap:2 }} >
                <div className='main logo'>
                    <h2>Register</h2>
                </div>
                {/* / */}
                <TextField size="small" label="Name" variant='standard' className='main input' onChange={(e) => {setName(e.target.value)}} />
                <TextField size="small" label="ID" variant='standard' className='main input' onChange={(e) => {setId(e.target.value)}} />
                <TextField type="password" label="PW" variant='standard' className='main input' onChange={(e) => {setPw(e.target.value)}} />
                
                <Button variant="contained" className='main button' onClick={() => { register()}}  >SignUp</Button>   
                
                </Box>
            </Container>
        </>
    )
}