import * as ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import {Provider} from 'react-redux'


ReactDOM.render(

/*
    检测dom的改变
*/
     <Provider store={store}>
        <App/>
    </Provider>
,document.getElementById('root'))

