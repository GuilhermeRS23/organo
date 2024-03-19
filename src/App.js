import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Equipe from "./components/Equipe";
import Rodape from "./components/Rodape";

function App() {

  const [equipes, setEquipes] = useState([
    { nome: "Mercedes", corPrimaria: "#27f4d2" },
    { nome: "Alpine", corPrimaria: "#FF87BC" },
    { nome: "Hass F1 Team", corPrimaria: "#B6BABD" },
    { nome: "Red Bull Racing", corPrimaria: "#3671C6" },
    { nome: "McLaren", corPrimaria: "#FF8000" },
    { nome: "Aston Martin", corPrimaria: "#229971" },
    { nome: "RB", corPrimaria: "#6692FF" },
    { nome: "Ferrari", corPrimaria: "#E8002D" },
    { nome: "Kick Sauber", corPrimaria: "#52E252" },
    { nome: "William", corPrimaria: "#64C4FF" },
  ]);

  //USANDO LOCALSTORE PARA MANTER OS DADOS
  const [membros, setMembros] = useState(
    JSON.parse(localStorage.getItem('listaEquipes')) || []);

  useEffect(() => {
    localStorage.setItem('listaEquipes', JSON.stringify(membros));
  }, [membros]);

  const aoNovoMembroAdd = (membro) => {
    setMembros([...membros, membro])
  };

  const deletarMembro = () => {
    console.log('Excluindo Membro...');
  }

  const mudarCorEquipe = (cor, nome) => {
    setEquipes(equipes.map(equipe => {
      if (equipe.nome === nome) {
        equipe.corPrimaria = cor;
      }
      return equipe;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        nomeDasEquipes={equipes.map((equipe) => equipe.nome)}
        aoMembroCadastrado={(membro) => aoNovoMembroAdd(membro)}
      />
      <h1 className="titulo">F1 Drivers 2024</h1>
      {equipes.map((equipe) => (
        <Equipe
          mudarCor={mudarCorEquipe}
          key={equipe.nome}
          nome={equipe.nome}
          corFundo={equipe.corPrimaria}
          corPrimaria={equipe.corPrimaria}
          membros={membros.filter((membro) => membro.equipe === equipe.nome)}
          aoDeletar={deletarMembro}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
