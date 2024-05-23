import './ListaSuspensa.css'

interface ListaSuspensaProps {
    label: string
    required: boolean
    valor: string
    aoAlterado: (valor: string) => void
    itens: string[]
}

const ListaSuspensa = ({ label, required, valor, aoAlterado, itens }:ListaSuspensaProps ) => {
    return (
        <div className='lisa-suspensa'>
            <label>{label}</label>
            <select
                required={required}
                value={valor}
                onChange={evento => aoAlterado(evento.target.value)}>
                <option value={''}></option>
                {itens.map(item => <option key={item}> {item} </option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;
