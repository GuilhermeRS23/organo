import { AiTwotoneCloseCircle } from "react-icons/ai";
import { TbHeartPlus, TbHeartFilled } from "react-icons/tb"; //não favorito & favorito

import { GiFullMotorcycleHelmet } from "react-icons/gi"; ///Piloto
import { GrUserManager } from "react-icons/gr";  ///Chefe
import "./Membro.css";

//USANDO PROPS COM OBJETO
const Membro = (props) => {

  function favoritar() {
    props.aoFavoritar(props.id)
  }

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
        {props.posicao != "Chefe de Equipe" ?
          <h5><GiFullMotorcycleHelmet size={20} />{props.posicao}</h5> :
          <h5><GrUserManager size={20} />{props.posicao}</h5>
        }
        <div className="favoritar">
          {props.favorito ?
            <TbHeartFilled size={20} onClick={favoritar} /> :
            <TbHeartPlus size={20} onClick={favoritar} />}
        </div>
      </div>
    </div>
  );
};

export default Membro;
