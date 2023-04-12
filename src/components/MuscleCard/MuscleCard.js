import "./MuscleCard.scss"
import backgroundImg from"../../assets/rusty-weights-on-a-rack.jpg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MuscleCard({addWorkout, image, title, description }) {
  const [showText, setShowText] = useState(false)

  const navigate = useNavigate()

  
  return (
    <>
    <div className="muscle-card">
      <div className="muscle-card__image">
        <img src={image} alt="Card 2" />
      </div>
      <div className="muscle-card__text">
        <h2>{title}</h2>
        <button 
        className="muscle-card__button"
        onClick={() => setShowText(!showText)}>Exercise Instructions</button>
      </div>
      <button onClick = {addWorkout} className="muscle-card__button">Add to workout!</button>
    </div>
    <div className></div>
    {showText && 
     <div className="modal-overlay">
     <div className="modal">
      <h2> Instructions for {title} </h2>
       <p>{description}</p>
       <button onClick={() => setShowText(false)} type= "button"> Close</button> 
     </div> 
   </div>}
        </>
  );
}