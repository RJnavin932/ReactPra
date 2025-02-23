export default function ObjChild({datahandel,darr,add,data}){
return <>
<p>
      <label htmlFor="Fname">FirstName:</label>
      <input type="text" name="Fname" id="" onChange={datahandel} value={data.Fname}/>
      </p>
      <p>
      <label htmlFor="Lname">LastName:</label>
      <input type="text" name="Lname" id="" onChange={datahandel} value={data.Lname}/>
      </p>
      <p>
      <label htmlFor="Email">Email:</label>
      <input type="text" name="Email" id="" onChange={datahandel} value={data.Email}/>
      </p>
      <button onClick={add}>Click</button>
      {
        darr.map((d,i)=><div key={i}>
           <p>FirstName:{d.Fname} </p>
           <p>LastName:{d.Lname}</p>
           <p>Email:{d.Email}</p>
        </div>)
      }

</>
}