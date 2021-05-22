import {ADD_PERSON} from "../constant";

//初始化人的列表
const initState=[{id:'001',name:'tom',age:28}]

export  default function  personReducer (preState=initState,action) {

    console.log('personReducer @@@')
    const {type,data}=action
    switch (type){
        //若是添加一个人
        case ADD_PERSON:
           return [data,...preState]      // 这个地方是重点：就是把最后一个数据，往前加，放到第一位，注意这种语法|   返回的是一个新数组的
          //用另外一种语法实现:语法是可以的，但是只是一个浅copy，不起作用的。| 也不能够这样写的，这样写会导致preState被改写了，personReducer 就不是纯函数了
          //  preState.unshift(data)
          //  return preState
            break;

        default:

            return preState

    }

}