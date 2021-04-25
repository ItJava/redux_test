/*
1.该文件是用于创建一个为Count组件服务的reducer,reducer的本质就是一个函数
2.reducer函数会接到两个参数，分别为：之前的状态（preState),动作对象(action)
 */

const initState=99;
export  default  function countReducer(preState=initState,action){    //直接默认值initState  第一次默认初始化

    console.log(preState,action)
    //if(preState===undefined) preState=0
    const {type,data}=action    //拿到类型和数据
    //根据type决定如何加工数据
    switch(type){
        case 'increment':                //如果是加
            console.log('increment',data)
            return preState+data
        case 'decrement':                //如果是减
            return preState-data

        default :
            return initState


    }


    
}