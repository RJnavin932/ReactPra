import { useDispatch } from "react-redux"
import { addproduct } from "../slice/Cartslice";

export default function SingleProduct({data}) {
    let dispatch = useDispatch();
    let addcart=(value)=>{
        dispatch(addproduct(value))    
    }

    return <>
        <div style={{width:'300px', display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <img src={data.thumbnail} style={{ width: '250px', height: '250px' }} />
            <p>{data.title}</p>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <p>{data.qty}</p>
            <button onClick={()=>addcart(data)}>Add Cart</button>
        </div>
    </>
}