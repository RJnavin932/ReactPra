import { useEffect, useState } from "react"
import { data, dnum } from "./arrayofobj"

export default function Pagenation3(){
    let [state,steState]=useState(data);
    let [getstate,setGetstate]=useState([]);
    let [btn,setBtn]=useState([])

    useEffect(()=>{
        setGetstate(()=>state.filter((d,i)=> i>=0 && i<dnum ? d : null));

        let arrbtn=[];
        for(let i=1;i<=state.length/dnum;i++){
            arrbtn.push(i);
            setBtn(()=>arrbtn);
        }
    },[state]);

    let onhandleclick=(i)=>{
        setGetstate(()=>state.filter((d,index)=>index>=(i*dnum)-dnum && index <(i*dnum) ? d:null))
    }
    return <>
    <div>
      {
        getstate.map((data,i)=><h2 key={i}>
          ID:{data.id} Name:{data.name} Age:{data.age} City:{data.city} Work:{data.work}
        </h2>)
      }
      {
          btn.map((data,i)=><button key={i} onClick={()=>onhandleclick(data)}>{data}</button>)
      }
      </div>
    </>
}