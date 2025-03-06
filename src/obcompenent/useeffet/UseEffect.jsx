import { useEffect, useState } from "react"

export default function UseEffect(){
    let [isDark,setIsdark]=useState(false);
    
   
      
      
    useEffect(()=>{
        console.log(isDark);
        if(isDark){
            document.body.style.backgroundColor='black';
            document.body.style.color='white'
        }
        else{
            document.body.style.backgroundColor='white';
            document.body.style.color='black'
        }
        return ()=> {
            setIsdark(false)
            console.log('cleaning')
        }
    },[isDark]) 
    let darkmode=()=>{
    setIsdark((isDark)=>!isDark)
//    console.log(isDark);
   }
//    console.log('commet render');
   
   
    return <>
    <h1>darkmode</h1>
     <button onClick={darkmode}>click</button>
    </>
}