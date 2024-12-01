import { useState } from "react";
import Greeting from "./Greeting";

const Exercise1 = ()=>{

    const [saludo, setSaludo] = useState(null);

    const handleClick = (e)=>{
        const inputValue = e.target.previousSibling.value;
        setSaludo(<Greeting name={inputValue}/>)
    }

    return (
        <div>
            <h2>Ejercicio 1</h2>
            <p>Escribe tu nombre y te saludo</p>
            <p>Si no escribes nada, te daré un saludo genérico</p>
            <input type="text" placeholder="Escribe tu nombre"/>
            <button onClick={handleClick}>Saludar</button>
            {saludo}
        </div>
    )
}

export default Exercise1;