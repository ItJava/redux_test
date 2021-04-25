import React, {Component} from 'react';
//引入store,用于获取redux中保存的状态
import  store from '../../redux/store'
//引入actionCreator，专门用于创建 action对象
import  {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction

} from '../../redux/count_action'


class Count extends Component {


    state={carName:'奔驰c63'}


    componentDidMount() {
       /* //检测redux中状态的变化，只要变化就调用render
        store.subscribe(()=>{            //只要redux 中任何一个状态的改变，都会回调这个函数
            console.log('redux','redux 订阅了消息，store任何状态变更都收到了回调')
            this.setState({})
        })*/
    }


    //加法
    increment=()=>{
        //函数体
        const {value}=this.selectNumber
        store.dispatch(createIncrementAction(value*1))
        }

    //减法
    decrement=()=>{
        //函数体
         const {value}=this.selectNumber
        store.dispatch(createDecrementAction(value*1))
    }

    //奇数再加
    incrementIfOdd=()=>{
        //函数体
        const {value}=this.selectNumber
        const  count=store.getState()
        if(count%2!=0){
          //  this.setState({count: count+value*1})
           // const {value}=this.selectNumber
            store.dispatch(createIncrementAction(value*1))

        }
    }

    //异步再加
    incrementAsync=()=>{
        //函数体
        const {value}=this.selectNumber
        store.dispatch(createIncrementAsyncAction(value*1,500))

     }


    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
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

export default Count;