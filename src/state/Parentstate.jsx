import { useState } from "react"
import Child from "./decbtn"
import Child2 from "./Increbtn";
import Reset from "./Resetbtn";
import Changeclr from "./Txtclr";
import Backgrountclr from "./Boxclr";
export default function Parentstate(){
    let [x,setX]=useState(0);
    let incre=()=>{
        setX(()=>x+1)
    }
    let decre=()=>{
        setX(()=>x-1)
    }
    let Res=()=>{
        setX(()=>0)
    }
    let [color,setcolor]=useState('')
    let txtclr = (e)=>{
        setcolor(()=>e.target.value)
        console.log(e.target.value);
        
    }
    let [bgclr,setBgclr]=useState('')
    let backgroundColor=((e)=>{
        setBgclr(()=>e.target.value)
    })
    return <>
    <h1>{x}</h1>
    <Child decrbtn={decre}/>
    <Child2 incrbtn={incre}/>
    <Reset resetbtn={Res}/><br />
    <Changeclr clrchnage={txtclr}/>
    <p style={{color:color}}>{color}</p>
    <Backgrountclr Boxclr={bgclr} clr={backgroundColor}/>
   
    </>
    
}