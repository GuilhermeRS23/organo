import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import "./Formulario.css"
import { IMembro } from '../../shared/types/IMembros';
import { IEquipe } from '../../shared/types/IEquipe';


interface FormularioProps {
    aoMembroCadastrado: (membro: IMembro) => void
    nomeDasEquipes: string[]
    cadastrarEquipe: (equipe: IEquipe) => void
}

const Formulario = ({ aoMembroCadastrado, nomeDasEquipes, cadastrarEquipe }: FormularioProps) => {

    const posicaoNaEquipe = [
        'Piloto N° 1',
        'Piloto N° 2',
        'Piloto Reserva',
        'Chefe de Equipe'
    ]

    const [nome, setNome] = useState("");
    const [posicao, setPosicao] = useState("");
    const [foto, setFoto] = useState("");
    const [equipe, setEquipe] = useState("");
    const [novaEquipe, setNovaEquipe] = useState("");
    const [novaEquipeCor, setNovaEquipeCor] = useState("");


    function aoSalvar(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        aoMembroCadastrado({ nome, posicao, foto, equipe, id: uuidv4(), favorito: false });

        setNome('');
        setPosicao('');
        setFoto('');
        setEquipe('');
    }

    return (
        <section className='formulario-container'>
            <form className="formulario" onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do membros:</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome' tipo='text'
                    placeholder="Digite o nome do membro da equipe..."
                    valor={nome}
                    aoAlterado={setNome}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label='Posição na Equipe'
                    itens={posicaoNaEquipe}
                    valor={posicao}
                    aoAlterado={valor => setPosicao(valor)}
                />

                <Campo
                    tipo='link' label='Foto'
                    placeholder="Informe o endereço da imagem..."
                    valor={foto}
                    aoAlterado={setFoto}
                />

                <ListaSuspensa
                    obrigatorio={true} label='Equipe'
                    itens={nomeDasEquipes}
                    valor={equipe}
                    aoAlterado={valor => setEquipe(valor)}
                />

                <Botao>Criar Card</Botao>
            </form>

            <form className='formulario_addEquipe' onSubmit={(evento) => {
                evento.preventDefault()
                cadastrarEquipe({ nome: novaEquipe, corPrimaria: novaEquipeCor })
            }}>
                <h2>Preencha os dados para adicionar uma nova equipe:</h2>
                <Campo
                    obrigatorio
                    label='Nome' tipo='text'
                    placeholder="Digite o nome da equipe..."
                    valor={novaEquipe}
                    aoAlterado={setNovaEquipe}
                />

                <Campo
                    obrigatorio
                    tipo='color' label='Cor'
                    placeholder="Informe a cor da equipe... (#0000)"
                    valor={novaEquipeCor}
                    aoAlterado={setNovaEquipeCor}
                />

                <Botao>Adicionar Equipe</Botao>
            </form>
        </section>
    )
}

export default Formulario;