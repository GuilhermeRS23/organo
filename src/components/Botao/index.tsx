import { ReactElement } from "react";
import "./Botao.css"

interface BotaoProps{
    children: ReactElement | string
}

//USANDO PROPS NOMALMENTE
const Botao = ({ children }: BotaoProps) => {
    return (
        <button className="botao">
            {children}
        </button>
    )
}

export default Botao;
