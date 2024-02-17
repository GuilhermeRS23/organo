//import { useState } from "react"
import "./CampoText.css"

const CampoText = (props) => {

    // const [valor, setValor] = useState("");

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
        // setValor(evento.target.value)
        // console.log(valor)
    }

    return (
        <div className="campo-text">
            <label>{props.label}</label>
            <input value={props.valor}
                onChange={aoDigitado}
                type={props.tipo}
                required={props.obrigatorio}
                placeholder={props.placeholder}>
            </input>
        </div>
    )
}

export default CampoText;
