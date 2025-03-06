import { useEffect, useState } from "react"


export default function Api(){
    let [data,setData]=useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((respons)=>respons.json())
        .then((data)=>setData(()=>data.filter((d,i)=> (i>=10 && i<20) ?d:null)
        ))
    },[])
    return <>
    <h1>Welcome</h1>
    {
        data.map((d,i)=><div key={i}><p><b>{d.id}.</b>
        {d.title}</p></div>)
    }
    </>
}