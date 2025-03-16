import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from "./Home"
import Product from "./Productlist"
import Cart from "./Cartlist"
import Navbar from "./Navbar"

export default function Reduxpage(){
    return <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}>Home</Route>
        <Route path="/product" element={<Product/>}>Product</Route>
        <Route path="/cart" element={<Cart/>}>Cart</Route>
      </Routes>
    </BrowserRouter>
    </>
}