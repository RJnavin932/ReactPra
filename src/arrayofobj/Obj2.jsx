import { useEffect, useState } from "react"
import { data, dnum } from "./arrayofobj"

export default function ArrayObject(){

    let [adata,setAdata]=useState(data);
    let [getdata,setGetdata]=useState([]);
    let [btn,setbtn]=useState([]);

    useEffect(()=>{
        setGetdata(()=>adata.filter((value,index)=> index >=0 && index <dnum ? value :null));
       let arr=[]
        for(let i=1;i<=adata.length/dnum;i++){
            arr.push(i)
            setbtn(()=>arr)
        }
    },[adata]);

    
    let onhandleclick=(e)=>{
        setGetdata(()=>adata.filter((d,i)=> i>=(e*dnum)-dnum && i<(e*dnum) ? d :null));
    }
    return <>
      <div>
        {
            getdata.map((data,index)=> <h2 key={index}>
                ID:{data.id} Name:{data.name} Age:{data.age} City:{data.city} Work:{data.work}
                </h2>)
        }

        {
            btn.map((d,i)=><button key={i} onClick={()=>onhandleclick(d)}>{d}</button>)
        }
      </div>
    </>
}