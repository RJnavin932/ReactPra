import {createSlice , createAsyncThunk} from "@reduxjs/toolkit"
const initialState={
 AttendenceList:[],
 error:"",
 isLoading:false
}
const url="http://localhost:3000/Attendence";
export const getAtdlist=createAsyncThunk("attendence/getAtdlist",async(data,{rejectWithValue})=>{
    const response=await fetch(url);
    if(response.ok){
        let responseJson=response.json();
        return responseJson;
    }
    else {
        return rejectWithValue({error:"Attedence data not found"})
    }
});
export const AddAttedentceList=createAsyncThunk("attendence/AddAttedentceList",async(data,{rejectWithValue})=>{
    let option={
        method:"POST",
        headers:{
            "Content-Type":"appication/json"
        },
        body:JSON.stringify(data)
    };
    const response =await fetch(url,option);
    if(response.ok){
        let responseJson=response.json();
        return responseJson;
    }
    else{
        return rejectWithValue({error:"Attendence data not add"})
    };
});
export const updateAttendence=createAsyncThunk("attendence/updateAttendence",async(data,{rejectWithValue})=>{
    let option ={
        method:"PUT",
        headers:{
              "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }
    const response=await fetch (`${url}/${data.id}`,option)
    if(response.ok){
        let responseJson=response.json();
        return responseJson;
    }
    else{
        return rejectWithValue({error:"Attendence data not Updated"})
    }
});

export const AttendencSlice=createSlice({
   name:"Attentdence Detail",
   initialState,
   reducers:{},
   extraReducers:(builder)=>{
    builder.addCase(getAtdlist.pending,(state,action)=>{
        state.isLoading=true;
    }).addCase(getAtdlist.fulfilled,(state,action)=>{
        state.error='';
        state.isLoading=false;
        state.AttendenceList=action.payload;
    }).addCase(getAtdlist.rejected,(state,action)=>{
        state.AttendenceList=[];
        state.isLoading=false;
        state.error=action.payload.error;
    })

    .addCase(AddAttedentceList.pending,(state,action)=>{
        state.isLoading=true;
    }).addCase(AddAttedentceList.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.error='';
        state.AttendenceList=[...state.AttendenceList,action.payload];
    }).addCase(AddAttedentceList.rejected,(state,action)=>{
        state.AttendenceList=[];
        state.error=action.payload.error;
        state.isLoading=false;
    })

    .addCase(updateAttendence.pending,(state,action)=>{
        state.isLoading=true;
    }).addCase(updateAttendence.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.error='';
        state.AttendenceList=state.AttendenceList.map((data)=> data.id === action.payload.id ? action.payload : data)
    }).addCase(updateAttendence.rejected,(state,action)=>{
        state.AttendenceList=[];
        state.isLoading=false;
        state.error=action.payload.error;
    })
   }
});  

export default AttendencSlice.reducer;