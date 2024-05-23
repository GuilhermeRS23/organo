import { AiTwotoneCloseCircle } from "react-icons/ai";
import { TbHeartPlus, TbHeartFilled } from "react-icons/tb"; //não favorito & favorito

import { GiFullMotorcycleHelmet } from "react-icons/gi"; ///Piloto
import { GrUserManager } from "react-icons/gr";  ///Chefe
import "./Membro.css";

interface MembroProps {
  id: string
  nome: string
  posicao: string
  foto: string
  favorito: boolean
  aoFavoritar: (id: string) => void
  aoDeletar: (id: string) => void
  corDeFundo: string
}

const Membro = ({ aoFavoritar, aoDeletar, corDeFundo, id, nome, posicao, foto, favorito }: MembroProps) => {

  function favoritar() {
    aoFavoritar(id)
  }

  return (
    <div className="membro">
      <AiTwotoneCloseCircle
        size={20}
        className="excluir-membro"
        onClick={() => aoDeletar(id)}
      />

      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={foto} alt={nome} />
      </div>

      <div className="rodape">
        <h4>{nome}</h4>
        {posicao != "Chefe de Equipe" ?
          <h5><GiFullMotorcycleHelmet size={20} />{posicao}</h5> :
          <h5><GrUserManager size={20} />{posicao}</h5>
        }
        <div className="favoritar">
          {favorito ?
            <TbHeartFilled size={20} onClick={favoritar} /> :
            <TbHeartPlus size={20} onClick={favoritar} />}
        </div>
      </div>
    </div>
  );
};

export default Membro;
