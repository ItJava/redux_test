import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {createAddPersonAction} from "../../redux/actions/person";          //createAddPersonAction  引入的是action

 class Person extends Component {


    addPerson=()=>{
        const name=this.nameNode.value
        const age=this.ageNode.value
        const  personObj={id:nanoid(),name,age}
        //console.log(personObj)
        this.props.jiaYiRen(personObj)

    }

    render() {
        return (
            <div>
                <h2> 我是Person 组件,上方组件求和为{this.props.count}</h2>
              <input  ref={c=>this.nameNode=c} type="text" placeholder="输入名字"/>
              <input  ref={c=>this.ageNode=c} type="text" placeholder="输入年龄"/>
              <button onClick={this.addPerson}>添加</button>

                <ul>
                    {
                     this.props.persons.map((p)=>{

                      return   <li key={p.id}>{p.name}---{p.age}</li>

                     })
                    }

                </ul>


            </div>
        );
    }
}


//使用connect()（） 创建并暴露一个Count的容器组件
export  default  connect(
    state=>({
        persons:state.persons,
        count:state.count
    }),       //映射状态
    {jiaYiRen:createAddPersonAction}   //映射操作状态的方法，传递给UI了

)(Person)
