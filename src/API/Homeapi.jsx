import { useEffect, useState } from "react"

export default function HomeApi(){

    let [state,setState]=useState({
        name:'',
        class:''
    });
    let [studentarr,setStudentArr]=useState([]);

    let url="http://localhost:3000/students";
    
    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>setStudentArr(data))
        .catch((error)=>console.log(error))
    },[studentarr]);

    let handelchange=(e)=>{
        const {name,value}=e.target;
        setState({...state,[name]:value});
    }

    let handelSumbit=(e)=>{
        e.preventDefault();
        console.log(state);
        if(state.id){
            fetch(`${url}/${state.id}`,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(state)
            })
            .then((response)=>response.json())
            .then((data)=>setState({
                name:'',
                class:''
            }))
            .catch((error)=>console.log(error))
        }
        else{
            fetch(url,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({...state,id:crypto.randomUUID()})
            })
            .then((response)=>response.json())
            .then((data)=>setState({
                name:'',
                class:''
            }))
            .catch((error)=>console.log(error))
        }
    }

    let deletestudent=(id)=>{
        fetch(`${url}/${id}`,{
            method:"DELETE",
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data))
        .catch((err)=>console.log(err))
    }
    let editstudent=(e)=>{
        setState(e)
    }
    return <>
     <form onSubmit={handelSumbit}>
           <p>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={state.name} onChange={handelchange}/>
            </p>
            <p>
             <label htmlFor="class">Class:</label>
            <input type="text" name="class" value={state.class} onChange={handelchange}/>
            </p>
            <input type="submit" value="Addstudent"/>
        
     </form>
        <ul>
            {
               studentarr.map((data)=><li key={data.id}>{data.name} - {data.class} 
               <button onClick={()=>editstudent(data)}>Edit</button>
               <button onClick={()=>deletestudent(data.id)}>Delete</button></li>)
            }
        </ul>
    </>
}