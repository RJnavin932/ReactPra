import { configureStore } from "@reduxjs/toolkit";
import AttendencSlice  from "../slice/adtslice";

const AdtStore=configureStore({
    reducer:{
        AdtInfo:AttendencSlice
    }
    
})
export default AdtStore;