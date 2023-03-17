import "./MuscleCard.scss"

export default function MuscleCard({ image, title, description }) {
  return (
    <div className="cards">
    <div className="card">
      <div className="card__image">
        <img src={image} alt="Card 2" />
      </div>
      <div className="card-text">
        <h2>{title}</h2>
        <p>
          {description}
        </p>
      </div>
      <button className="card__button">I'm ready!</button>
    </div>
    </div>
  );
}