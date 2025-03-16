import {createSlice} from "@reduxjs/toolkit"

let initialState={
    carts:[],
    total:0
}
export const Cartslice=createSlice({
    name:"cartdetails",
    initialState,
    reducers:{
        addproduct:(state,action)=>{
            state.carts=[...state.carts,action.payload]
        },
        removeproduct:(state,action)=>{
            state.carts=state.carts.filter((data)=> data.id!= action.payload)
        },
        increproduct:(state,action)=>{
            let qtyincr=state.carts.filter((data)=> data.id == action.payload)[0];
                if(qtyincr){
                    qtyincr.qty +=1 
                }
        },
        decreproduct:(state,action)=>{
            let qtydecr=state.carts.filter((data)=>data.id == action.payload)[0];
            if(qtydecr){
                qtydecr.qty -=1
            }
        },
        updateTotal:(state,action)=>{
              state.total =action.payload
        }
    }
})
export const {addproduct,removeproduct,increproduct,decreproduct,updateTotal}=Cartslice.actions;
export default Cartslice.reducer