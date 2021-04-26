/*
该文件专门用于暴露一个store对象,整个应用只有一个store 对象
 */

//引入createStore,专门用于创建redux最核心的store对象         applyMiddleware:执行中间件
import  {createStore,applyMiddleware} from 'redux'
//引入count组件服务的reducer
import countReducer from './count_reducer'
//引入redux-thunk 用于支持异步的action

import thunk from 'redux-thunk'

//暴露store   //applyMiddleware(thunk)  这个参数必须这么写，不然不支持异步
export  default createStore(countReducer,applyMiddleware(thunk))