import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Banner from './components/Banner'
import Formulario from "./components/Formulario";
import Equipe from "./components/Equipe";
import Rodape from "./components/Rodape";
import Titulo from "./components/Titulo";
import { IMembro } from "./shared/types/IMembros";
import { IEquipe } from "./shared/types/IEquipe";

const App = () => {


  const [equipes, setEquipes] = useState([
    { id: uuidv4(), nome: "Mercedes", corPrimaria: "#27f4d2" },
    { id: uuidv4(), nome: "Alpine", corPrimaria: "#FF87BC" },
    { id: uuidv4(), nome: "Hass F1 Team", corPrimaria: "#B6BABD" },
    { id: uuidv4(), nome: "Red Bull Racing", corPrimaria: "#3671C6" },
    { id: uuidv4(), nome: "McLaren", corPrimaria: "#FF8000" },
    { id: uuidv4(), nome: "Aston Martin", corPrimaria: "#229971" },
    { id: uuidv4(), nome: "RB", corPrimaria: "#6692FF" },
    { id: uuidv4(), nome: "Ferrari", corPrimaria: "#E8002D" },
    { id: uuidv4(), nome: "Kick Sauber", corPrimaria: "#52E252" },
    { id: uuidv4(), nome: "William", corPrimaria: "#64C4FF" },
  ]);

  const [exibirFormulario, setExibirFormulario] = useState(true);

  //USANDO LOCALSTORE PARA MANTER OS DADOS

  const [membros, setMembros] = useState<IMembro[]>(
    JSON.parse(localStorage.getItem('listaEquipes') ?? '[]'));

  useEffect(() => {
    localStorage.setItem('listaEquipes', JSON.stringify(membros));
  }, [membros]);

  const aoNovoMembroAdd = (membro: IMembro) => {
    // setMembros((membros) => [...membros, membro]) Para sempre pegar estado mais atual
    setMembros([...membros, membro])
  };

  const deletarMembro = (id: string) => {
    setMembros(membros.filter(equipe => equipe.id !== id));
  }

  const mudarCorEquipe = (cor: string, id: string) => {
    setEquipes(equipes.map(equipe => {
      if (equipe.id === id) {
        equipe.corPrimaria = cor;
      }
      return equipe;
    }));
  }

  const cadastrarEquipe = (novaEquipe: IEquipe) => {
    setEquipes([...equipes, { ...novaEquipe, id: uuidv4() }])
  };

  const esconderForm = () => {
    setExibirFormulario((prevState) => prevState ? false : true);
  }

  const favoritoOuNao = (id: string) => {
    setMembros(membros.map(membro => {
      if (membro.id === id) membro.favorito = !membro.favorito;
      return membro
    }))
  }

  return (
    <div className="App">
      <Banner endercoImagem="\imgs\banner.png" altTexto="Banner da tela Principal"/>

      {exibirFormulario && (
        <Formulario
          cadastrarEquipe={cadastrarEquipe}
          nomeDasEquipes={equipes.map((equipe) => equipe.nome)}
          aoMembroCadastrado={(membro) => aoNovoMembroAdd(membro)}
        />
      )}

      <Titulo esconderForm={esconderForm}
        titulo="Exibir/Esconder formulario" />

      {equipes.map((equipe) => (
        <Equipe
          aoFavoritar={favoritoOuNao}
          mudarCor={mudarCorEquipe}
          id={equipe.id}
          key={equipe.id}
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
