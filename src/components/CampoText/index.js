import "./CampoText.css"

const CampoText = (props) => {
    return (
        <div className="campo-text">
            <label>{props.label}</label>
            <input type={props.tipo} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoText;
