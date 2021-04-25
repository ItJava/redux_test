//当前这个文件其实是一个容器组件，让UI组件和redux建立关系，连接起来

//引入CountUI组件
import  CountUI from '../../components/Count'   //引入的其实是一个UI组件
//引入redux
import store from '../../redux/store'
//引入connect 用于连接UI组件和redux
import {connect} from "react-redux";


// a 函数的返回值作为状态传递给UI组件props的key,value 就作为传递给UI组件的props的value  ---状态
function a(state) {
    return {count:state}
}

// b 函数的返回值作为状态传递给UI组件props的key,value 就作为传递给UI组件的props的value  --- 操作状态的方法
function b() {

    return{jia:()=>{console.log(1)}}
}


//使用connect()（） 创建并暴露一个Count的容器组件
export  default  connect(a,b)(CountUI)


