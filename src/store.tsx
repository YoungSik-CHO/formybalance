// redux 설치방법
// 1. npm install @reduxjs/toolkit react-redux
// 2. store.js 생성 (state 보관통)
// 3. index.js 가서 <Provider store={store} 쓰기>

import { configureStore, createSlice} from '@reduxjs/toolkit';
import { user }   from './store/user';
import { goWorks, leaveWorks } from './store/works';
//import  userCache  from './store/userCache';

export default configureStore ({
    reducer : {
        // 선언한 createSlice + .reducer
        // userCache : userCache.reducer
        user : user.reducer,
        goWorks : goWorks.reducer,
        leaveWorks : leaveWorks.reducer
    }
})