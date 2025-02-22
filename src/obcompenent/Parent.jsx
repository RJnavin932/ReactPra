import Child2 from "./Chiild2";
import ChildCom from "./Child";
 let data=
    {
        sname:'Raja',
        age:22,
        Eduction:'B.sc',
        marriedstatus:'Unmarried' 
    }
    
let data2=[
    {
        sname:'Raja',
        age:22,
        Eduction:'B.sc',
        marriedstatus:'Unmarried' 
    },
    {
        sname:'Ram',
        age:22,
        Eduction:'B.A',
        marriedstatus:'Married' 
    },
    {
        sname:'Ramesh',
        age:22,
        Eduction:'B.sc',
        marriedstatus:'Unmarried' 
    }

]
export default function Parentcom(){
    return <> <h1>parent</h1>
    <ChildCom {...data}/>
    {
    // data2.map((value,i)=> <Child2 key={i} {...value}/>)
    }
    <Child2 details={data2}/>
   
    </>
}