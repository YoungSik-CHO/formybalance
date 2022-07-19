import { AppBar, Toolbar, IconButton, Icon, Typography, Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { localStorageType, WorkInterF } from '../types/commonTypes';
import { register, registerEmpty } from '../types/loginTypes';
import { DateFormat } from '../common/date';
import { getGoWork, getLeaveWork, goWork, leaveWork } from '../common/writeWork';
import { useSelector } from 'react-redux';
import { EqualityFn } from 'reselect';

export const Home = () : JSX.Element => {
    let storeState = useSelector((state ) => state);


    useEffect(() => {
        // localstorage에 출근데이터가 없다면 생성
        if(!localStorage.getItem('goWork')) {
            localStorage.setItem('goWork', '[]');
        }
        // localstorage에 퇴근데이터가 없다면 생성
        if(!localStorage.getItem('leaveWork')) {
            localStorage.setItem('leaveWork', '[]');
        }
    }, [localStorage]);

    const localData : localStorageType = localStorage.getItem('user');
    let localDataJSON : register  = registerEmpty;
    if (typeof localData === 'string') {
        localDataJSON = JSON.parse(localData);
    } 

    const date :Date = new Date();
    const currDate : string = DateFormat(date, 'MM월 dd일');
    const currDate2 : string = DateFormat(date, 'yyyy-MM-dd');
    const fullDate : string = DateFormat(date,'yyyy-MM-dd HH:mm:ss E');




    return (
        <>
            <Box sx={{ bgcolor: '#ffffff', height: '100vh'}} >
                <AppBar position="static">
                    <Toolbar sx={{backgroundColor : 'black'}}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label='menu'
                            sx={{ mr : 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow : 1}}>
                            Formabal
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Typography variant="h5" gutterBottom component="div" className='home mainlabel'>
                    { } 님 환영합니다! 
                    <div>
                         의 { currDate } 출근 데이터
                    </div>

                    <div>
                        출근 : 
                    </div>

                    <div>
                        퇴근 : 
                    </div>
                    
                    
                </Typography>
                
                <div className='home'>
                    <Button variant="contained" className='home button' onClick={() => { goWork();}}> 출근 </Button>
                    
                    <Button variant="outlined" className='home button' onClick={() => { leaveWork();}}> 퇴근 </Button>
                </div>                
            </Box>
        </>
    )
}

export default Home;