//Без Redux-toolkit
// import { createStore} from 'redux';
// import { rootReduser } from './reducers/index'
// import { devToolsEnhancer } from 'redux-devtools-extension';

// const store = createStore(rootReduser, devToolsEnhancer());

// export default store;


import {configureStore } from '@reduxjs/toolkit'
import { rootReduser } from './reducers/index'

const store = configureStore({
    reducer: rootReduser,
    devTools: process.env.NODE_ENV!== 'prodaction',
});

export default store;

 

