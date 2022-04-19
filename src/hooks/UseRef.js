import React , {useRef} from "react";

// Manually accessing DOM 

function RefExample(){
    const inputRef = useRef(null);

    const onClick = () =>{
        // console.log(inputRef.current.value);
        inputRef.current.focus();
    }
    return(
        <div>
            <h1>Luke</h1>
            <input type="text" placeholder="enter text" ref={inputRef}/>
            <button onClick={onClick}>Change Name</button>
        </div>
    )
}

export default RefExample;