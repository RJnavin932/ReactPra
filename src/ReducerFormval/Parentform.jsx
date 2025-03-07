import { useReducer, useState } from "react"
import { validation } from "./errormsg";
import Childval from "./ChildForm";

function Formfun(fstate,action){
   switch (action.type){
    case 'input':
        return {...fstate,[action.payload.name]:action.payload.value}
    default :
    return fstate;   
   }
  
     
}
export default function Formval(){

    let [state,dispatch]=useReducer(Formfun,{
        uname:'',
        ustudy:'',
        uphn:'',
        ugender:'',
        uadd:'',
        ucity:'',
    });
     
    let onhandlechange =(e)=>{
       dispatch({type:'input',payload:e.target})
       console.log(e.target.value);
       
    }
    let [erros,setErros]=useState({});
    let onhandlesumbit=(e)=>{
        e.preventDefault();
        let newerrors=validation(state);
        setErros(newerrors)
    }
    return <>
    <Childval onhandlechange={onhandlechange} onhandlesumbit={onhandlesumbit} erros={erros} state={state}/>
    </>
}