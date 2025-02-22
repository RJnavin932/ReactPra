import { useState } from "react";
import Addbtn from "./Addbtn";
import Todolist from "./Todolist";


export default function Todo(){
    let [todo,setTodo]=useState([]);
    let [todoArray,setTodoarray]=useState({});

let array=(e)=>{
    let data={
        iname:e.target.value,
        isCheck:false

    }
    setTodoarray(()=> data)   
}
let additem =()=>{
    setTodo([...todo,todoArray])
    console.log(todoArray);
}
let deleteItem = (i)=>{

    let updateArray = todo.filter((data,index) => index !== i )
    setTodo(updateArray);
 }
 let Checkdata=(i)=>{
    let updateArray = todo.map((data,index)=>{
        if(index === i){
            return{
                ...todoArray,
                isCheck:!data.isCheck
            }
                
        }
        return data
    })
    setTodo(updateArray);
 }
    return<>
     <input type="text" placeholder="Enter Your Todo..."  onChange={array}/>
     <Addbtn Add={additem}/>
     <ul><Todolist todo={todo} deleteitem={deleteItem}  Checkdata={Checkdata}/></ul>
    </>
}