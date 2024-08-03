import { Link } from "react-router-dom";
import './index.css'; 

function Card({ name, city, description, photo_url }) {
  let friendlyName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  friendlyName = friendlyName.toLowerCase().replace(/ /g, "+").replace(/[^\w-+]+/g, '')

  return (
    <div className="card">
      <img src={photo_url} alt={`${name} imagem`} className="card-img" />
      <h3 className="card-name">{name}</h3>
      <span className="card-city">{city}</span>
      <p className="card-description">{description}</p>
      <Link to={`/${friendlyName}`} className="card-button-link">Saiba mais</Link>
    </div>
  );
};

export default Card;
