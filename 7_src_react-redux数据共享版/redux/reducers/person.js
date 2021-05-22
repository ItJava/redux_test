import {ADD_PERSON} from "../constant";

//初始化人的列表
const initState=[{id:'001',name:'tom',age:28}]

export  default function  personReducer (preState=initState,action) {

    console.log('personReducer @@@')
    const {type,data}=action
    switch (type){
        //若是添加一个人
        case ADD_PERSON:
            return [data,...preState]
            break;

        default:

            return preState

    }

}