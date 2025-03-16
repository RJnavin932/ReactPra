import {configureStore} from "@reduxjs/toolkit";
import  Productslice  from "../slice/Productslice";
import  Cartslice  from "../slice/Cartslice";

const store=configureStore({
    reducer:{
        productinfo:Productslice,
        cartinfo:Cartslice
    }
})
export default store ;