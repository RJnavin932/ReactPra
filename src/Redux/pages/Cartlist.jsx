import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { decreproduct, increproduct, removeproduct, updateTotal } from "../slice/Cartslice";

export default function Cart(){

    
    const getcart=useSelector((state)=>state.cartinfo.carts);
    const getTotal=useSelector((state)=>state.cartinfo.total)
    console.log(getcart);
    
    let dispatch=useDispatch();
    let removedata=(e)=>{
        dispatch(removeproduct(e))
    }
    let incr=(e)=>{
        dispatch(increproduct(e))
    }
    let decr=(e)=>{
        dispatch(decreproduct(e))
    }
    useEffect(()=>{
        let totalshow=getcart.reduce((accumlator,data)=>{
            return  accumlator=accumlator+(data.qty * data.price)
        },0)
        dispatch(updateTotal(totalshow))
    },[getcart])
    return <>
    <h1>Total Price:{getTotal}</h1>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "center" }}>
        {
            getcart.map((data)=> <div  key={data.id} style={{width:'300px', display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <img src={data.thumbnail} style={{ width: '250px', height: '250px' }} />
            <p>{data.title}</p>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <p><button onClick={()=>incr(data.id)}disabled={data.qty == data.stock} >Increment</button>{data.qty}
            <button onClick={()=>decr(data.id)} disabled={data.qty <1}>Decrement</button></p>
            <button onClick={()=>removedata(data.id)}>Remove</button></div>)
        }
        </div>
    </>
}