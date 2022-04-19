import React, {useReducer} from "react"


// Handling Multiple states


const reducer = (state, action) =>{
    switch(action.type){
        case "increase":
            return{
                count:state.count + 1,
                showText:state.showText
            }
        case "toggle":
            return {
                count:state.count,
                showText: !state.showText
            }            
        default:
            return state;
    }
}

const ReducerExample = () =>{
    const [state, dispatch] = useReducer(
        reducer,
        {
            count: 0 ,
            showText: true,
        }
    )
    return(
        <div>
            <h1>{state.count}</h1>
            <button 
            onClick={()=>{
               dispatch({ type: "increase"});
               dispatch({ type: "toggle"})
            }}>
                Click here
            </button>

            {state.showText && <p>Hello There</p>}
        </div>
    )
}

export default ReducerExample;