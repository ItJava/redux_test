/*
该文件用于汇总所有的reducer 为一个总的reducer
 */

//引入count组件服务的reducer
import count from './count'
import persons from "./person";

//引入Persont组件服务的reducer
import {combineReducers} from "redux";



//得汇总所有的reducer,变为一个总的reducer
export default  combineReducers({  //combineReducers 传入的对象，就是Redux 中保存的总状态对象
    count,
    persons
})

