import { Link } from "react-router-dom";

export default function Navbar(){
    return <>
    <Link to="/">Home</Link>
    <Link to="/product">Product</Link>
    <Link to="/cart">Cart</Link>
    </>
}