import { useReducer, useState } from "react"

function todofun(state,action){
     switch(action.type){
         case "add":
            return {todo:[...state.todo,action.payload]};
        case "edit":
            return {todo:state.todo.map((d,i)=>{ i==action.payload
                return d
            })}
         case 'delete':
            return{todo:state.todo.filter((d,i)=> i!==action.payload)};
         case 'check':
            return{todo:state.todo.map((d,i)=>{
                if(i==action.payload){
                    return{
                        ...d,
                        isCheck:!d.isCheck
                    }
                }
                return d;
            })}   
     } 
}
export default function ReducerTodo(){
    let [state,dispatch]=useReducer(todofun,{todo:[]})
    let [getinput,setGetinput]=useState('')
    let add_todo=()=>{
        if(getinput !==''){
           let obj={
            name:getinput,
            isCheck:false

           }
           dispatch({type:'add',payload:obj})
        } 
        else{
            alert('please fill the name');
        } 
    }
    let del_todo=(id)=>{
        dispatch({type:'delete',payload:id})
    }
    let check_todo=(id)=>{
        dispatch({type:'check',payload:id})
    }
    let edit_todo=(id)=>{
        dispatch({type:"edit",payload:id})
    }
    return <>
    Name:<input type="text" onChange={(e)=>setGetinput(e.target.value)}/><button onClick={add_todo}>Add</button>
    {
        state.todo.map((d,i)=><li key={i} style={{textDecoration:d.isCheck?'line-through':'none'}}>
        <input type="checkbox" onChange={()=>check_todo(i) } checked={d.isCheck}/>
        {d.name}<button onClick={()=>edit_todo(i)}>Edit</button><button onClick={()=>del_todo(i)}>Delete</button></li>)
    }
 ////   </>
}