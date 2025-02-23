import { useEffect, useState } from "react"

export default function UseEffect(){
    let [isDark,setIsdark]=useState(false);
    
//    let darkmode=()=>{
//     useEffect(()=>{
//         if(!isDark){
//             document.body.style.backgroundColor='black';
//             document.body.style.color='white'
//         }
//         else{
//             document.body.style.backgroundColor='white';
//             document.body.style.color='black'
//         }
//     },[isDark]) 
//    }
//    setIsdark((data)=>{!data})
   console.log(data);
    return <>
    <h1>darkmode</h1>
     <button onClick={darkmode}>click</button>
    </>
}