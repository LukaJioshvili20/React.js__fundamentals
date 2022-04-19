import React, {useState, useEffect} from "react";
import axios from "axios";

// Prevent unnessesary actions on certain functions
function EffectExample(){
    const [data, setData ] = useState("");
    const [count, setCount ] = useState(0);

    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.tpicode.com/comments")
        .then((response)=>{
            setData(response.data[0].email);
            console.log("API Called");
        })           
        

    }, [])
    
    return(
        <div>
            Hello There {data[0].email}
            <h1>{data}</h1>
            <h3>{count}</h3>
            <button onClick={
                setCount(count + 1)
            }>
                Click
            </button>
        </div>
    )
}

export default EffectExample;