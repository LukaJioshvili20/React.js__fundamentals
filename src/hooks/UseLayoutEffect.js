import React, {useLayoutEffect , useEffect, useRef } from "react";

function LayoutExample() {
    const inputRef  = useRef(null)

    useLayoutEffect(()=>{
        // console.log("UseLayoutEffect")
        console.log(inputRef.current.value)
    }, []);

    useEffect(()=>{
        // console.log("UseEffect")
        inputRef.current.value = "SkyWalker"
    }, []);

    
    return(
        <div className="App">
            <input ref={inputRef} value="Luke" style={{width:400, height:400}}/>
        </div>
    )
}

export default LayoutExample