import Membro from "../Membro";
import "./Equipe.css";

const Equipe = ({ corFundo, corPrimaria, membros, nome, aoDeletar }) => {
  const cssBackground = { backgroundColor: corFundo, borderColor: corPrimaria };
  return (
    //CONDIÇÃO EM JSX  
    //condição ? valor1 : valor2 
    //condição && valor1 
    (membros.length > 0) &&
    <section className="equipe" style={cssBackground}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>

      <div className="membros">
        {membros.map(membro => {

          return <Membro
            nome={membro.nome}
            corDeFundo={corPrimaria}
            key={membro.nome}
            posicao={membro.posicao}
            foto={membro.foto}
            aoDeletar={aoDeletar}
          />
        })}
        
      </div>
    </section>
  )
};

export default Equipe;
