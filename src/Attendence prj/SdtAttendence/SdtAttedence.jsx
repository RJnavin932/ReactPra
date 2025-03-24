import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { AddAttedentceList, getAtdlist, updateAttendence } from "../slice/adtslice";

export default function SdtAttendence(){
    let attentdence=useSelector((state)=>state.AdtInfo.AttendenceList);
    let [sAttendece,setSAttendece]=useState({
        id:'',
        topicname:"",
        outtime:'',
        intime:'',
        Date:'',
        status:""
    })
let handlechange=(e)=>{
    const{name,value}=e.target;
    setSAttendece({...sAttendece,[name]:value})
}
    console.log(attentdence);
    let dispatch=useDispatch();

    let edit=(data)=>{
        setSAttendece({
            id:data.id,
            intime:data.intime,
            topicname:data.topicname,
            outtime:data.outtime,
            status:data.status,
            Date:data.Date

        })
    }
let hadlesumbit=(e)=>{
    e.preventDefault();
    if(sAttendece.id){
        dispatch(updateAttendence(sAttendece))
    }
   else{
    const {id,...attendencelist}=sAttendece;
    dispatch(AddAttedentceList(attendencelist));
   }
    setSAttendece({
        topicname:"",
        outtime:'',
        intime:'',
        Date:'',
        status:""
    })
}
    useEffect(()=>{
        dispatch(getAtdlist())
    },[])
   return <>
   <form onSubmit={hadlesumbit}>
    <p><label htmlFor="tname">Topice Name</label>
    <input type="text" name="topicname" onChange={handlechange} value={sAttendece.topicname}/></p>

    <p><label htmlFor="date">Date</label>
    <input type="date" name="Date" onChange={handlechange} value={sAttendece.Date}/></p>

    <p><label htmlFor="intime">In Time</label>
    <input type="time" name="intime" onChange={handlechange} value={sAttendece.intime}/></p>

    <p><label htmlFor="outTime">Out Time</label>
    <input type="time" name="outtime" onChange={handlechange} value={sAttendece.outtime}/></p>

    <p><label htmlFor="status">Status<select name="status" onChange={handlechange} value={sAttendece.status}>
        <option value="">None</option>
        <option value="present">Present</option>
        <option value="absent">Absent</option>
        <option value="holiday">Holiday</option>
        </select></label></p>

     <p><input type="submit" value="add"/></p>   
   </form>

     <table>
        <thead>
            <th>Id</th>
            <th>Topic</th>
            <th>Date</th>
            <th>InTime</th>
            <th>OutTime</th>
            <th>Status</th>
            <th>Update</th>
        </thead>

        <tbody>
            
                {
                    attentdence.map(data=> 
                        
                    <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.topicname}</td>
                    <td>{data.Date}</td>    
                    <td>{data.intime}</td>
                    <td>{data.outtime}</td>
                   <td>{data.status}</td>
                   <button onClick={()=>edit(data)}>Update</button> </tr>)
                }
        </tbody>

        <tfoot></tfoot>
     </table>
   </>
}