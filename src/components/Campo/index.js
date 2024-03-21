//import { useState } from "react"
import "./Campo.css"
//USANDO OBJETO COMO PARAMETRO
const Campo = ({label, valor, tipo, obrigatorio, placeholder, aoAlterado}) => {

    // const [valor, setValor] = useState("");

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
        // setValor(evento.target.value)
        // console.log(valor)
    }

    return (
        <div className={`campo campo-${tipo}`}>
            <label>{label}</label>
            <input value={valor}
                onChange={aoDigitado}
                type={tipo}
                required={obrigatorio}
                placeholder={placeholder}>
            </input>
        </div>
    )
}

export default Campo;
