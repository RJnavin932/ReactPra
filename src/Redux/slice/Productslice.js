import {createSlice} from "@reduxjs/toolkit";

const initialState={
    products:[]
}
export const Productslice=createSlice({
    name:'Productdetails',
    initialState,
    reducers:{
        setAllProducts:(state,action)=>{
            state.products=action.payload
        }
    }
})
export const {setAllProducts}=Productslice.actions;
export default Productslice.reducer;