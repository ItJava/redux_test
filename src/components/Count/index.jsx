import React, {Component} from 'react';

class Count extends Component {


    state={count:0}


    increment=()=>{
        //函数体
        const {value}=this.selectNumber
        const {count}=this.state
        this.setState({count: count+value*1})


          }
    decrement=()=>{
        //函数体
        const {value}=this.selectNumber
        const {count}=this.state
        this.setState({count: count-value*1})
    }
    incrementIfOdd=()=>{
        //函数体
        const {value}=this.selectNumber
        const {count}=this.state
        if(count%2!=0){
            this.setState({count: count+value*1})
        }

    }
    incrementAsync=()=>{
        //函数体
        const {value}=this.selectNumber
        const {count}=this.state
            setTimeout(()=>{
                this.setState({count: count+value*1})
            },2000)
    }


    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
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