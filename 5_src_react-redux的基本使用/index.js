import * as ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";


ReactDOM.render(<App/>,document.getElementById('root'))

//检测Redux 中 状态的改变，如果redux的状态发生了改变，那么重新渲染组件
store.subscribe(()=>{
    ReactDOM.render(<App/>,document.getElementById('root'))
})