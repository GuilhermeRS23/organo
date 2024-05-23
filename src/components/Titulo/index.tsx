import { LuCopyPlus } from "react-icons/lu";
import './Titulo.css'

interface TituloProps{
    titulo: string
    esconderForm:() => void
}

const Titulo = ({ titulo, esconderForm}:TituloProps) => { 

    return (
        <section className="titulo">
            <h1 className="titulo-h1">F1 Drivers 2024 </h1>
        <LuCopyPlus className="icone" size={45} onClick={esconderForm} 
        title={titulo} />
        </section>
    )
};

export default Titulo;
