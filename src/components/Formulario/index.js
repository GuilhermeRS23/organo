import CampoText from '../CampoText';
import "./Formulario.css"

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoText label='Nome' placeholder="Digite seu nome..." />
                <CampoText label='Cargo' placeholder="Digite seu cargo..." />
                <CampoText label='Imagem' placeholder="Informe o endereço da imagem..." />
                <CampoText label='Time' />
            </form>
        </section>
    )
}

export default Formulario;