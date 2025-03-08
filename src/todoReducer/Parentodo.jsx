import { useReducer, useState } from "react"

function Todofun(state,action){
    switch(action.type){
        case 'add_todo':
            return{todo:[...state.todo,action.payload]};
        case "del_todo":
            return{todo:state.todo.filter((d,i)=> i!=action.payload )};
        case'check_todo' :
            return {todo:state.todo.map((d,i)=>{
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
export default function ParentTodoReducer(){
 
  let [state,dispatch]=useReducer(Todofun,{todo:[]})
  let [getinput,setGetinput]=useState('');

  let Add_todo=()=>{
    if(getinput !== ''){
        let obj={  
            name:getinput,
            isCheck:false      
        }
        dispatch({type:'add_todo',payload:obj})
    }
    else{
        alert('please enter todo message')
    }
  }
  let del_todo=(id)=>{
      dispatch({type:"del_todo",payload:id})
  }
  let check_todo=(id)=>{
    dispatch({type:"check_todo",payload:id})
}
     return <>
     <input type="text" onChange={(e)=>setGetinput(e.target.value)}/><button onClick={Add_todo}>Add</button>
     <ul>
       {
        state.todo.map((d,i)=> <li key={i} style={{textDecoration: d.isCheck?'line-through':'none'}}> <input type="checkbox" onChange={()=>check_todo(i)} checked={d.isCheck}/>{d.name} <button onClick={()=>del_todo(i)}>Delete</button></li>)
       }
     </ul>
     </>
}