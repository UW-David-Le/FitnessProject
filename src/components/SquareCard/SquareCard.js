import "./SquareCard.scss"

export default function SquareCard  ({ image, title }) {
    return (
      <div className="square">
        <img src={image} alt="" className="square__image" />
        <h2 className="square__title">{title}</h2>
        {/* <p className="square__description">{description}</p> */}
      </div>
    );
  };