import { useEffect, useState } from "react"

export default function  ApiPract(){
    let [studets,setStudents]=useState({
        name:'',
        class:'',
    });
    let [allstudents,setAllstudentds]=useState([]);
    let url="http://localhost:3000/students";
    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>setAllstudentds(data))
        .catch((err)=>console.log(err))
    },[allstudents]);

    let handelchange=(e)=>{
      const {name,value}=e.target;
      setStudents({...studets,[name]:value});
    };
    let handelSumbit=(e)=>{
        e.preventDefault()
        console.log(studets);
        if(studets.id){
           fetch(`${url}/${studets.id}`,{
             method:"PUT",
             headers:{"Content-Type":"application/json"},
             body:JSON.stringify(studets)
           })
           .then((response)=>response.json())
            .then((data)=>setStudents({
                name:'',
                class:''
            }))
            .catch((error)=>console.log(error))
      }
      else{
        fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(studets)
          })
          .then((response)=>response.json())
           .then((data)=>setStudents({
               name:'',
               class:''
           }))
           .catch((error)=>console.log(error))
      }
    };
    let deletestudent=(id)=>{
      fetch(`${url}/${id}`,{
        method:"DELETE"
      })
      .then((response)=>response.json())
      .then((data)=>console.log(data))
      .catch((error)=>console.log(error))
    };

    let editstudent=(e)=>{
        setStudents(e)
    }
    return <>
    <form action="" onSubmit={handelSumbit}>
        <p>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={studets.name} onChange={handelchange}/>
        </p>
        <p>
            <label htmlFor="class">Class:</label>
            <input type="text" name="class" value={studets.class}  onChange={handelchange}/>
        </p>
        <input type="submit" value="Addstudent"/>
    </form>
     <div>
        <ul>
            {
                allstudents.map((data)=><li key={data.id}>{data.name} - {data.class}
                <button onClick={()=>editstudent(data)}>Edit</button>
                <button onClick={()=>deletestudent(data.id)}>Delete</button></li>)
            }
        </ul>
     </div>
    </>
}