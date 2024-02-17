import Botao from '../Botao';
import CampoText from '../CampoText';
import ListaSuspensa from '../ListaSuspensa';
import "./Formulario.css"

const Formulario = () => {
    const equipes = [
        "Mercedes",
        "Alpine",
        "Hass F1 Team",
        "Red Bull Racing",
        "McLaren",
        "Aston Martin",
        "RB",
        "Ferrari",
        "Kick Sauber",
        "Williams"
    ]

    const posicaoNaEquipe = [
        'Piloto N° 1',
        'Piloto N° 2',
        'Piloto Reserva',
        'Chefe de Equipe'
    ]

    const aoSalvar = (event) => {
        event.preventDefault()
        console.log('Formulario enviado')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do membros:</h2>
                <CampoText obrigatorio={true} tipo='text' label='Nome' placeholder="Digite o nome do membro da equipe..." />
                <ListaSuspensa obrigatorio={true} label='Posição na Equipe' itens={posicaoNaEquipe} />
                <CampoText tipo='link' label='Foto' placeholder="Informe o endereço da imagem..." />
                <ListaSuspensa obrigatorio={true} label='Equipes' itens={equipes} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;