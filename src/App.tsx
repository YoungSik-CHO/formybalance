import React from 'react';
import { styled, useTheme, Box,  Drawer, CssBaseline, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Login } from './pages/login';
import { userLogin} from './store/userCache'
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Register} from './pages/register';
import { Home } from './pages/home';

let App = () : JSX.Element =>  {
  // 첫 mount시 local storage에 userCache 생성
  React.useEffect(() => {
    localStorage.setItem('userCache', '');
  }, [])
  // 세션 존재여부 state ( 0 이면 로그인정보가 없는것으로 간주하고 로그인창으로 던진다)

  return (
    <div>
        <Routes>
          <Route path='/' element={
            <Login/>
          }></Route>
          <Route path='/register' element={
            <Register/>
          }>
          </Route>
          <Route path='/home' element={
            <Home/>
          }>
          </Route>
        </Routes>
    </div>
  )
}

export default App;