import { LuCopyPlus } from "react-icons/lu";
import './Titulo.css'

const Titulo = (props) => {
     

    return (
        <section className="titulo">
            <h1 className="titulo-h1">F1 Drivers 2024 </h1>
        <LuCopyPlus className="icone" size={45} onClick={props.esconderForm} 
        title={props.titulo} />
        </section>
    )
};

export default Titulo;
