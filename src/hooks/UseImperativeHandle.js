import React , {} from "react";
import Button from "../components/ui/button"

// Link child compnents to Parent
// Link functions based in one component


function ImperativeExample(){
    const buttonRef =   useRef(null);

    return(
        <div>
            <button
                onClick={()=>{
                    buttonRef.current.alterToggle();
                }}
            >Button from Parent</button>
            <Button ref={buttonRef}/>
        </div>
    )
}

export default ImperativeExample;
