import { AiTwotoneCloseCircle } from "react-icons/ai";
import { GiFullMotorcycleHelmet } from "react-icons/gi"; ///Piloto
import { GrUserManager } from "react-icons/gr";  ///Chefe
import "./Membro.css";
//USANDO PROPS COM OBJETO
const Membro = ({ nome, foto, posicao, corDeFundo, aoDeletar }) => {
  return (
    <div className="membro">
      <AiTwotoneCloseCircle size={20} className="excluir-membro" onClick={aoDeletar} />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={foto} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        {posicao != "Chefe de Equipe" ? <h5><GiFullMotorcycleHelmet size={20} />{posicao}</h5> :
          <h5><GrUserManager size={20} />{posicao}</h5>
        }

      </div>
    </div>
  );
};

export default Membro;
