import React, {useState} from "react";

// Updating states 

// EXAMPLE 1

// const StateExample = () =>{
//     const [ counter, setCounter ] = useState(0);


//     const increase = () => {
//         // counter = counter + 1;
//         // console.log(counter);
//         setCounter(counter + 1);
//     };
    
//     return (
//     <div>
//         {counter}    
//         <button onClick={increase}>Increase</button>
//     </div>
//     )
// }


// EXAMPLE 2

const StateExample = () =>{
    const [inputValue, setInputValue] = useState("Luke Skywalker")

    let onChange = (event) => {
        const newValue = event.target.event;
        setInputValue(newValue)
    };

    return(
        <div>
            <input placeholder="Enter text" onChange={onChange}/>
            {inputValue}
        </div>
    )
}

export default StateExample;