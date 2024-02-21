import "./Membro.css";
//USANDO PROPS COM OBJETO
const Membro = ({nome, foto, posicao}) => {
  return (
    <div className="membro">
      <div className="cabecalho">
        <img src={foto} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{posicao}</h5>
      </div>
    </div>
  );
};

export default Membro;
