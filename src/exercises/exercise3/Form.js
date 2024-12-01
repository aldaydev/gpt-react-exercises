import { useState } from "react";

export const Form = ()=>{

    const [nameError, setNameError] = useState('');
    const [mailError, setMailError] = useState('');
    const [passError, setPassError] = useState('');
    const [data, setData] = useState([]);
    const [succed, setSucced] = useState(null);


    const handleClick = (e)=>{
        e.preventDefault();

        const nameValue = e.target.parentElement.firstElementChild.firstElementChild.value;
        nameValue.length <= 2 
            ? setNameError(<p>Formato de nombre incorrecto</p>)
            : setNameError(null);

        const emailValue = e.target.previousSibling.previousSibling.firstElementChild.value;
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)
            ? setMailError(null)
            : setMailError(<p>Formato de email incorrecto</p>);

        const passValue = e.target.previousSibling.firstElementChild.value;
        passValue.length <= 2 
            ? setPassError(<p>Formato de nombre incorrecto</p>)
            : setPassError(null);
        
        if(nameError === null && mailError === null && passError === null){
            const finalData = [nameValue, emailValue, passValue]
            setData(finalData);
            setSucced(<h2>INFORMACIÓN ENVIADA CON ÉXITO</h2>)
        }
    }

    return (
        <form className="form">
            <label>
                Nombre
                <input type="text" placeholder="Nombre"/>
                {nameError}
            </label>
            <label>
                Email
                <input type="text" placeholder="Email"/>
                {mailError}
            </label>
            <label>
                Contraseña
                <input type="password" placeholder="Contraseña"/>
                {passError}
            </label>
            <input type="submit" value='Enviar' onClick={handleClick}/>
            {succed}
        </form>
        
    )
}