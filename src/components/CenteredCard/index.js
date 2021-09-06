import "./style.css";

function CenteredCard(props) {
  return (
    <div className="box">
      {/* <span>Nome: {name}</span>
      <span>Idade: {age}</span>
      <span>Nacionalidade: {country}</span> */}
      <div>{props.children}</div>
    </div>
  );
}

export default CenteredCard;
