import "./CampoText.css"

const CampoText = (props) => {
    return (
        <div className="campo-text">
            <label>{props.label}</label>
            <input type="text" placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoText;
