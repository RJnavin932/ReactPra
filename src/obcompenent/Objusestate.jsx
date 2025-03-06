import { useState } from "react"
import ObjChild from "./ObjChild";

export default function ObjParent(){
    let [darr,setDarr]=useState([])
    let [data,setData]=useState({
        Fname:'',
        Lname:'',
        Email:''
    });

    let datahandel =(e)=>{
      let{name,value}=e.target
      setData({...data,[name]:value})
      console.log(data);
    }
    let adddata =()=>{
       setDarr([...darr,data])
       setData({Email:'',Lname:'',Fname:''})
    }
    return <>
      <ObjChild datahandel={datahandel} darr={darr} add={adddata} data={data}/>
    </>
    }