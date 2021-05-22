import * as ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import {Provider} from 'react-redux'


ReactDOM.render(

/*
    通过Provider 批量的传递store 组件：目的是让App所有的后台容器组件都能够接收到store
*/
     <Provider store={store}>
        <App/>
    </Provider>
,document.getElementById('root'))

