import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';


function App() {

  const [membros, setMembros] = useState([]);
  const aoNovoMembroAdd = (membro) => {
    console.log(membro)
    setMembros([...membros, membro])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoMembroCadastrado={membro => aoNovoMembroAdd(membro)} />
    </div>
  );
}

export default App;
