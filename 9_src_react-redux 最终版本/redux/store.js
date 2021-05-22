/*
该文件专门用于暴露一个store对象,整个应用只有一个store 对象
 */

//引入createStore,专门用于创建redux最核心的store对象         applyMiddleware:执行中间件   combineReducers: 组合
import  {createStore,applyMiddleware} from 'redux'

//引入redux-thunk 用于支持异步的action

import thunk from 'redux-thunk'

//引入redux-devtools-extension
import {composeWithDevTools} from "redux-devtools-extension";
import allReducer from "./reducers";


//暴露store  主要引入redux-devtools-extension 方案实现
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
