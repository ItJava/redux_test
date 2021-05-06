//当前这个文件其实是一个容器组件，让UI组件和redux建立关系，连接起来

//引入CountUI组件
import  CountUI from '../../components/Count'   //引入的其实是一个UI组件
//引入redux
//引入connect 用于连接UI组件和redux
import {connect} from "react-redux";
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'


//映射状态
/*function mapStateToProps(state) {
    return {count:state}
}*/
//上面的一个函数可以直接优化成下面的：其中({count:state})  代表一个函数只有一个retun 的对象，直接用括号包含对象的简写方式
/*
const  mapStateToProps=state=>({count:state})
*/

// 1、mapDispatchToProps 返回的是一个对象
// 2、返回对象中的key 作为传递给UI组件的props的key,value就作为传递个UI组件props的value
// 3、mapStateToProps 用于传递操作对象的方法
/*const mapDispatchToProps=dispatch =>({

        jia:(number)=>{dispatch(createIncrementAction(number)) },
        jian:(number)=>{dispatch(createDecrementAction(number)) },
        jiaAsync:(number,time)=>{dispatch(createIncrementAsyncAction(number,time)) },

})*/


//使用connect()（） 创建并暴露一个Count的容器组件
export  default  connect(
    state=>({count:state}),

    /*
    mapStateToProps 的一般写法
    dispatch =>({
        jia:(number)=>{dispatch(createIncrementAction(number)) },
        jian:(number)=>{dispatch(createDecrementAction(number)) },
        jiaAsync:(number,time)=>{dispatch(createIncrementAsyncAction(number,time)) },

    })*/
    /* mapStateToProps 的简写方式
    * react-redux 自动简化编码：这个地方是通过react-redux 底层 做了判断，如果传递是一个对象，然后自动dispatch
    *
    * */
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction,

    }

)(CountUI)


