export default function Todolist({todo,deleteitem,Checkdata}){
    return <>
     {
        todo.map((data,i)=> <li key={i} style={{textDecoration:data.isCheck === true?'line-through':'none'}}>
            <input type="checkbox" onChange={()=>Checkdata(i)} checked={data.isCheck}/>
        {data.iname}
        <button onClick={()=>deleteitem(i)}>Delelte</button></li>)
     }
    </>
}