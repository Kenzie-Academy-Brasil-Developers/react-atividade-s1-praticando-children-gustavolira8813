import "./style.css";

function CenteredCard({ person: { name, age, country } }) {
  return (
    <div className="box">
      <span>Nome: {name}</span>
      <span>Idade: {age}</span>
      <span>Nacionalidade: {country}</span>
    </div>
  );
}

export default CenteredCard;
