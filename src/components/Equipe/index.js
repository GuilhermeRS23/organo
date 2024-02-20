import "./Equipe.css";

const Equipe = (props) => {
  const cssBackground = {backgroundColor: props.corFundo, borderColor:props.corPrimaria};
  return(
    <section className="equipe" style={cssBackground}>
        <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
    </section>
  )
};

export default Equipe;
