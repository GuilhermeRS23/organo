import "./Campo.css"

interface CampoProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    tipo: string
    obrigatorio?: boolean
}

//USANDO OBJETO COMO PARAMETRO
const Campo = (
    { label, valor, tipo, placeholder, aoAlterado, obrigatorio = false }: CampoProps) => {
    // const [valor, setValor] = useState("");

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value);
        // setValor(evento.target.value)
        // console.log(valor)
    }

    return (
        <div className={`campo campo-${tipo}`}>
            <label>{label}</label>
            <input value={valor}
                onChange={aoDigitado}
                type={tipo}
                required={obrigatorio}
                placeholder={placeholder}>
            </input>
        </div>
    )
}

export default Campo;
