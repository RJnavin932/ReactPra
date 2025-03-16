import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import db from "../../../db.2.json"
import SingleProduct from "../singleproduct/Singleproduct"
import { setAllProducts } from "../slice/Productslice"

export default function Product() {
    let dispatch = useDispatch()
    console.log(db);

    let getProducts = useSelector((state) => state.productinfo.products)
    useEffect(() => {
        dispatch(setAllProducts(db.products))
    }, [])
    return <>
        <h1>Product List</h1>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: "center" }}>
            {
                getProducts.map((data) => <SingleProduct key={data.id} data={data} />)
            }
        </div>
    </>
}