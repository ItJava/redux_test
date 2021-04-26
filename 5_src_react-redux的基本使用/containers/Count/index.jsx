//当前这个文件其实是一个容器组件，让UI组件和redux建立关系，连接起来

//引入CountUI组件
import  CountUI from '../../components/Count'   //引入的其实是一个UI组件
//引入redux
//引入connect 用于连接UI组件和redux
import {connect} from "react-redux";
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'


// 1、mapStateToProps 返回的是一个对象
// 2、返回对象中的key 作为传递给UI组件的props的key,value就作为传递个UI组件props的value
// 3、mapStateToProps 用于传递状态
function mapStateToProps(state) {
    return {count:state}
}

// 1、mapDispatchToProps 返回的是一个对象
// 2、返回对象中的key 作为传递给UI组件的props的key,value就作为传递个UI组件props的value
// 3、mapStateToProps 用于传递操作对象的方法
function mapDispatchToProps(dispatch) {

    return{
        jia:(number)=>{dispatch(createIncrementAction(number)) },
        jian:(number)=>{dispatch(createDecrementAction(number)) },
        jiaAsync:(number,time)=>{dispatch(createIncrementAsyncAction(number,time)) },


    }
}


//使用connect()（） 创建并暴露一个Count的容器组件
export  default  connect(mapStateToProps,mapDispatchToProps)(CountUI)


