import "./Card.scss"

export default function Card({ image, title, description, item1, item2, item3,item4 }) {
  return (
    <div className="cards">
    <div className="card">
      <div className="card__image">
        <img src={image} alt="Card 2" />
      </div>
      <div className="card-text">
        <h2>{title}</h2>
        <ul>
        {description}
         <li className="card__item"> {item1} </li> 
         <li className="card__item"> {item2} </li > 
         <li className="card__item"> {item3} </li > 
         <li className="card__item"> {item4} </li > 
        </ul>
      </div>
      <button className="card__button">I'm ready!</button>
    </div>
    </div>
  );
}
