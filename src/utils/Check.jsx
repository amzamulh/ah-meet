import { useState } from "react";
import { ahToggle } from "./toggle";

const Check=()=>{
    const [check, setCheck]= useState(false);

    return(
        <span className="text-white cursor-pointer"  onClick={() => ahToggle(check, setCheck)} >{check? 'show': 'hide'}</span>
    )

}
export default Check;