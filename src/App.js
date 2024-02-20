import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Equipe from './components/Equipe';


function App() {

const equipes = [
  {nome: "Mercedes",
    corFundo: "#27f4d210",
    corPrimaria:"#27f4d2"
  },
  {nome: "Alpine",
    corFundo: "#FF87BC10",
    corPrimaria:"#FF87BC"
  },
  {nome: "Hass F1 Team",
    corFundo: "#B6BABD10",
    corPrimaria:"#B6BABD"
  },
  {nome: "Red Bull Racing",
    corFundo: "#3671C615",
    corPrimaria:"#3671C6"
  },
  {nome: "McLaren",
    corFundo: "#FF800010",
    corPrimaria:"#FF8000"
  },
  {nome: "Aston Martin",
    corFundo: "#22997110",
    corPrimaria:"#229971"
  },
  {nome: "RB",
    corFundo: "#6692FF10",
    corPrimaria:"#6692FF"
  },
  {nome: "Ferrari",
    corFundo: "#E8002D10",
    corPrimaria:"#E8002D"
  },
  {nome: "Kick Sauber",
    corFundo: "#52E25210",
    corPrimaria:"#52E252"
  },
  {nome: "William",
    corFundo: "#64C4FF10",
    corPrimaria:"#64C4FF"
  }
]

  const [membros, setMembros] = useState([]);
  const aoNovoMembroAdd = (membro) => {
    console.log(membro)
    setMembros([...membros, membro])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoMembroCadastrado={membro => aoNovoMembroAdd(membro)} />
      {equipes.map(equipe => <Equipe key={equipe.nome} nome={equipe.nome} corFundo={equipe.corFundo} corPrimaria={equipe.corPrimaria}/>)}

    </div>
  );
}

export default App;
