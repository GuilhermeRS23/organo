import { AiTwotoneCloseCircle } from "react-icons/ai";
import { GiFullMotorcycleHelmet } from "react-icons/gi"; ///Piloto
import { GrUserManager } from "react-icons/gr";  ///Chefe
import "./Membro.css";

//USANDO PROPS COM OBJETO
const Membro = (props) => {
  return (
    <div className="membro">
      <AiTwotoneCloseCircle
        size={20}
        className="excluir-membro"
        onClick={() => props.aoDeletar(props.id)}
      />

      <div className="cabecalho" style={{ backgroundColor: props.corDeFundo }}>
        <img src={props.foto} alt={props.nome} />
      </div>

      <div className="rodape">
        <h4>{props.nome}</h4>
        {props.posicao != "Chefe de Equipe" ? <h5><GiFullMotorcycleHelmet size={20} />{props.posicao}</h5> :
          <h5><GrUserManager size={20} />{props.posicao}</h5>
        }

      </div>
    </div>
  );
};

export default Membro;
