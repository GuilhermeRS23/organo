import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Equipe from "./components/Equipe";
import Rodape from "./components/Rodape";

function App() {

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

  // const MembrosEquipes = [
  //   {
  //     id: uuidv4(),
  //     nome: "Charles Leclerc",
  //     posicao: "Piloto N° 1",
  //     foto: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/leclerc.jpg.img.1024.medium.jpg/1708344558637.jpg",
  //     equipe: "Ferrari"
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Lewis Hamilton",
  //     osicao:"Piloto N° 1",
  //     foto: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/hamilton.jpg.img.1024.medium.jpg/1708362076344.jpg",
  //     equipe: "Mercedes"
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Max Verstappen",
  //     posicao: "Piloto N° 1",
  //     foto: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/verstappen.jpg.img.1024.medium.jpg/1708344264039.jpg",
  //     equipe: "Red Bull Racing"
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Sergio Perez",
  //     posicao: "Piloto N° 2",
  //     foto: "https://media.formula1.com/content/dam/fom-website/drivers/2024Drivers/perez.jpg.img.1024.medium.jpg/1708344497222.jpg",
  //     equipe: "Red Bull Racing"
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Liam Lawson",
  //     posicao: "Piloto Reserva",
  //     foto: "https://res.cloudinary.com/prod-f2f3/image/upload/v1647009946/f2/global/drivers/2022/05_Lawson.jpg",
  //     equipe: "Red Bull Racing"
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Christian Horner",
  //     posicao: "Chefe de Equipe",
  //     foto: "https://i2-prod.liverpoolecho.co.uk/sport/uk-sport-news/article28575480.ece/ALTERNATES/s615/0_red-bull-team-principal-christian-horner-is-under-investigation-tim-goodepa.jpg",
  //     equipe: "Red Bull Racing"
  //   }
  // ]
  // const [membros, setMembros] = useState(MembrosEquipes);

  //USANDO LOCALSTORE PARA MANTER OS DADOS

  const [membros, setMembros] = useState(
    JSON.parse(localStorage.getItem('listaEquipes')) || []);

  useEffect(() => {
    localStorage.setItem('listaEquipes', JSON.stringify(membros));
  }, [membros]);

  const aoNovoMembroAdd = (membro) => {
    setMembros([...membros, membro])
  };

  const deletarMembro = (id) => {
    setMembros(membros.filter(equipe => equipe.id !== id));
  }

  const mudarCorEquipe = (cor, id) => {
    setEquipes(equipes.map(equipe => {
      if (equipe.id === id) {
        equipe.corPrimaria = cor;
        console.log(cor, id)
      }
      return equipe;
    }));
  }

  const cadastrarEquipe = (novaEquipe) => {
    setEquipes([...equipes, { ...novaEquipe, id: uuidv4() }])
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarEquipe={cadastrarEquipe}
        nomeDasEquipes={equipes.map((equipe) => equipe.nome)}
        aoMembroCadastrado={(membro) => aoNovoMembroAdd(membro)}
      />
      <h1 className="titulo">F1 Drivers 2024</h1>
      {equipes.map((equipe) => (
        <Equipe
          mudarCor={mudarCorEquipe}
          id={equipe.id}
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
