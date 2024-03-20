import Membro from "../Membro";
import "./Equipe.css";
import hexToRgba from 'hex-to-rgba';

const Equipe = ({id, corPrimaria, membros, nome, aoDeletar, mudarCor }) => {
  const cssBackground = { backgroundColor: hexToRgba(corPrimaria, '0.45'), borderColor: corPrimaria };
  return (
    //CONDIÇÃO EM JSX  
    //condição ? valor1 : valor2 
    //condição && valor1 
    (membros.length > 0) &&
    <section className="equipe" style={cssBackground}>
      <input value={corPrimaria} type="color" className="input-color"
        onChange={evento => {
          mudarCor(evento.target.value, id);
        }}
      />
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>

      <div className="membros">
        {membros.map(membro => {

          return <Membro
            nome={membro.nome}
            corDeFundo={corPrimaria}
            id={membro.id}
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
