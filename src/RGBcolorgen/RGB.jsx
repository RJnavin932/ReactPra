import { useReducer } from "react"

function Rgbfun(state,action){
    switch (action.type){
      case "color":
          return {...state,[action.payload.name]:action.payload.value}
    }
}

export default function RGBColor(){
    let [state,dispatch]=useReducer(Rgbfun,{
        red:0,
        green:0,
        blue:0
    })
    let onhandlechange=(e)=>{
       dispatch({type:'color',payload:e.target})
    }
    return<>
     <p>
        <label htmlFor="">Red:</label>
        <input type="range" name="red"  min={0} max={255} onChange={onhandlechange} value={state.red}/>
     </p>
     <p>
        <label htmlFor="">Green:</label>
        <input type="range" name="green"  min={0} max={255} onChange={onhandlechange} value={state.green}/>
     </p>
     <p>
        <label htmlFor="">Blue:</label>
        <input type="range" name="blue"  min={0} max={255} onChange={onhandlechange} value={state.blue}/>
     </p>
     <div style={{width:"300px",height:"200px",backgroundColor:`rgb(${state.red} ${state.green} ${state.blue})`}}>
     {
        `rgb( ${state.red} ${state.green} ${state.blue})`
     }
     </div>
    </>
}