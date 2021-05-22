/*
该文件专门用于暴露一个store对象,整个应用只有一个store 对象
 */

//引入createStore,专门用于创建redux最核心的store对象         applyMiddleware:执行中间件   combineReducers: 组合
import  {createStore,applyMiddleware,combineReducers} from 'redux'
//引入count组件服务的reducer
import countReducer from './reducers/count'

//引入Persont组件服务的reducer
import personReducer from './reducers/person'

//引入redux-thunk 用于支持异步的action

import thunk from 'redux-thunk'

//引入redux-devtools-extension
import {composeWithDevTools} from "redux-devtools-extension";


//得汇总所有的reducer,变为一个总的reducer
const allReducer=combineReducers({  //combineReducers 传入的对象，就是Redux 中保存的总状态对象
    count:countReducer,
    persons:personReducer
})


//暴露store   //applyMiddleware(thunk)  这个参数必须这么写，不然不支持异步
//export  default createStore(allReducer,applyMiddleware(thunk))

//暴露store  主要引入redux-devtools-extension 方案实现
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
