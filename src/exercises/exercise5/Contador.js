import { useEffect, useState } from "react";

export const Contador = ()=>{

    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        document.title = `Contador: ${counter}`;
    },[counter])

    const decrement = ()=>{
        counter >0 && setCounter(counter -1)
    }

    return(
        <article>
            <h2>{counter}</h2>
            <button onClick={()=>setCounter(counter +1)}>INCREMENTAR</button>
            <button onClick={decrement}>DECREMENTAR</button>
        </article>
    )
}