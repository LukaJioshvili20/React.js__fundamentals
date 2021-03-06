import React, { forwardRef , useImperativeHandle, useState } from "react"

const Button = forwardRef((props, ref) =>{
    const [toggle , setToggle] = useState(false);


    useImperativeHandle(ref, ()=>(
        {
            alterToggle(){
                setToggle(!toggle)
            }
        }
    ))

    return(
        <React.Fragment>
            <button >
                Button From child
            </button>
            {Toggle && <span>Toggle</span>}
        </React.Fragment>
    )
}
)
export default Button;