import { useState } from "react"

export const Counter = ()=>{

    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1)
    }

    function decrement(){
        if (count>0) setCount(count - 1);
    }

    return (
        <div>
            <p>Puedes incrementar el contador todo lo que quieras y decrementarlo hasta 0</p>
            <h2>{count}</h2>
            <button onClick={decrement} style={{padding: '10px 20px', margin: '5px'}}>-</button>
            <button onClick={increment} style={{padding: '10px 20px', margin: '5px'}}>+</button>
        </div>
    )
}