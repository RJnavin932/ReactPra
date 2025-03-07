export default function Childval({onhandlesumbit,state,erros,onhandlechange}){
    return<>
        <form action="" onSubmit={onhandlesumbit}>
     <p>
        <label htmlFor="name">Name:</label>
        <input type="text"  name="uname" id="name" onChange={onhandlechange} value={state.uname}/>
        <span style={{color:'red'}}>{erros.uname}</span>
     </p>
     <p>
        <label htmlFor="phn">PhonNo:</label>
        <input type="number"  name="uphn" id="phn" onChange={onhandlechange} />
        <span style={{color:'red'}}>{erros.uphn}</span>
     </p>
     <p>
        <label htmlFor="gender">Gender:</label>
        <input type="radio"  name="ugender" id="gender" onChange={onhandlechange} value="Male" />Male:
        <input type="radio"  name="ugender" id="gender" onChange={onhandlechange} value="Female"/>FeMale:
        <span style={{color:'red'}}>{erros.ugender}</span>
     </p>
     <p>
        <label htmlFor="city">City:</label>
        <select name="ucity" id="city" onChange={onhandlechange} >
            <option value="">none</option>
            <option value="tuty">tuty</option>
            <option value="others">others</option>
        </select>
        <span style={{color:'red'}}>{erros.ucity}</span>
    </p>
    <p>
        <label htmlFor="study">Eduction:</label>
        <input type="checkbox" name="ustudy" id="study" onChange={onhandlechange} value="UG"/>UG: 
        <input type="checkbox" name="ustudy" id="study" onChange={onhandlechange} value="PG"/>PG: 
        <input type="checkbox" name="ustudy" id="study" onChange={onhandlechange} value="Phd"/>Phd: 
        <span style={{color:'red'}}>{erros.ustudy}</span>
    </p>
 
    <p>
        <label htmlFor="add">Address:</label>
        <textarea name="uadd" id="add" onChange={onhandlechange} ></textarea>
        <span style={{color:'red'}}>{erros.uadd}</span>
    </p>
     <p>
        <input type="submit" value="Sumbit" />
     </p>
     </form>
    </>
}