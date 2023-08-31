import React from 'react';
import { useState} from 'react';


const Counter=()=>{
    const [counter,setCounter]=useState(0);
    function incrmeent(){
        setCounter(counter+1);
    }
return(
    <div>
        <div>{counter}</div>
        <button onClick={incrmeent}>+</button> <button>-</button>
    </div>
)
}
export default Counter