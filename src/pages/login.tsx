import React, { useState } from 'react';
import { useNavigate , Outlet, Route, Routes } from 'react-router-dom';
import { Box, Input, TextField, Button, Alert, AlertTitle, AlertColor } from '@mui/material';
import {Typography, Switch } from '@mui/joy';
import { Container, height } from '@mui/system';
import { useDispatch } from 'react-redux';
import { userLogin } from '../store/userCache';
import '../App.css';
import { AlertComponent } from './Alert';
import { AlertType, localStorageType } from '../types/commonTypes';
import { user, userEmpty } from '../types/loginTypes';



export let Login = () : JSX.Element => {
    let dispatch = useDispatch();
    let navigate = useNavigate();

    // ID , PW 변경값
    let [id, setId] = React.useState<string>('');
    let [pw, setPw] = React.useState<string>('');
    
    // ID Check 
    let [idCheck, setIdCheck] = useState<AlertType>({'message' : '', 'type' : "success"})
    

    // 로그인시도
    const LoginTry = () => {
        let userJSONStr : localStorageType  =  localStorage.getItem('user');
        let userJSON : user = userEmpty;
        if (typeof userJSONStr === 'string') {
            userJSON = JSON.parse(userJSONStr);
        } 

        if (id.trim() == '') {
            setIdCheck({'message' : '아이디를 입력하세요.', 'type' : 'error'})
            return;
        }
        else if (pw.trim() == '') {
            setIdCheck({'message' : '비밀번호를 입력하세요.', 'type' : 'error'})
            return;
        }

        if (userJSON.id == id && userJSON.pw == pw) {
            alert('로그인 되었습니다')
            navigate('/home');
        }
        else {
            setIdCheck({'message' : '아이디와 비밀번호를 확인하세요.', 'type' : 'error'})
        }
    }

    return (
        <div>
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#ffffff', height: '100vh', gap:2 }} >
                    <div className='main logo'>
                        <h2>Formabal</h2>
                    </div>
                    {/* / */}
                    <TextField size="small" label="ID" variant='standard' className='main input' onChange={(e) => { setId(e.target.value)}} />
                    <TextField type="password" label="PW" variant='standard' className='main input' onChange={(e) => { setPw(e.target.value)}} />

                    {idCheck.type == "success" ? null : <AlertComponent message={idCheck.message} type={idCheck.type} cssClass="main alert" /> }
                    <Button variant="contained" className='main button' onClick={() => {LoginTry()}}  >Sign In</Button>   
                    <Button variant="outlined" className='main button' onClick={() => {navigate('/register')}}  >Register</Button> 
                    
                </Box>
            </Container>
        </div>
        
    )
} 

