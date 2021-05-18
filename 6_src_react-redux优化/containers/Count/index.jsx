//当前这个文件其实是一个容器组件，让UI组件和redux建立关系，连接起来


//引入redux
//引入connect 用于连接UI组件和redux
import {connect} from "react-redux";
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction} from '../../redux/count_action'
import React, {Component} from "react";


class Count extends Component {


    state={carName:'奔驰c63'}


    componentDidMount() {

    }


    //加法
    increment=()=>{
        //函数体
        const {value}=this.selectNumber
        //store.dispatch(createIncrementAction(value*1))
        this.props.jia(value*1)

    }

    //减法
    decrement=()=>{
        //函数体
        const {value}=this.selectNumber
        //store.dispatch(createDecrementAction(value*1))
        this.props.jian(value*1)
    }

    //奇数再加
    incrementIfOdd=()=>{
        //函数体
        const {value}=this.selectNumber
        const  count=this.props.count
        if(count%2!=0){

            this.props.jia(value*1)


        }
    }

    //异步再加
    incrementAsync=()=>{
        //函数体
        const {value}=this.selectNumber
        //store.dispatch(createIncrementAsyncAction(value*1,500))
        this.props.jiaAsync(value*1,500)

    }


    render() {
        console.log('UI接收到的props是',this.props)
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={c=>this.selectNumber=c}>  {/*把当前select节点存在组件自身实例selectNumber上*/}
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>&nbsp;&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;&nbsp;&nbsp;
            </div>
        );
    }
}





//使用connect()（） 创建并暴露一个Count的容器组件
export  default  connect(
    state=>({count:state}),
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction,

    }

)(Count)


