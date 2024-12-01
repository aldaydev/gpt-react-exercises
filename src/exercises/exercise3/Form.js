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
        const isNameValid = nameValue.length > 2;
        isNameValid
            ? setNameError(null)
            : setNameError(<p>Formato de nombre incorrecto</p>);

        const emailValue = e.target.previousSibling.previousSibling.firstElementChild.value;
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
        isEmailValid
            ? setMailError(null)
            : setMailError(<p>Formato de email incorrecto</p>);

        const passValue = e.target.previousSibling.firstElementChild.value;
        const isPassValid = passValue.length > 2;
        isPassValid
            ? setPassError(null)
            : setPassError(<p>Formato de nombre incorrecto</p>);
        
        if(isNameValid && isEmailValid && isPassValid){
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