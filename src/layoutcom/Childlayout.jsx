import ChildLayout2 from "./Childlayout2";

export default function ChildLayout({columndata}){
    return <>
      <tr>
        {
           columndata.map((data,i)=><ChildLayout2 key={i} {...data}/>)
        }
      </tr>
     </>
 }