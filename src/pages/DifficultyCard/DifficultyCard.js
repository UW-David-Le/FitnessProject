import React from "react";
import "./DifficultyCard.scss";
import { Link } from "react-router-dom";
import Beginner from "../../assets/beginner.avif";
import Intermediate from "../../assets/intermediate.avif";
import Advanced from "../../assets/advanced.png";
import Header from "../../components/Header/Header.js";
import Card from "../../components/Card/Card";

const DifficultyCard = () => {
  return (
    <>
    <Header /> 
    <Link to = "/home" className="link-class">
       <h1> Choose your monkey: </h1>
    <div className="cards">
     <Card 
      image = {Beginner}
      title = "Beginner"
      description = "You are brand new to weightlifting and would like to learn fundamental workouts. The exercises are beginnier friendly." 
       />
       <Card 
      image = {Intermediate}
      title = "Intermediate"
      description = "You have some experience with weightlifting and have developed a basic foundation of strength. You will be pushed outside your comfort zone."
       />
       <Card
        image = {Advanced}
        title = "Advanced"
        description= "You have have a significant amount of experience with weightlifting and have developed a high level of strength and muscle mass."
        />
    </div>
    </Link>
    </>
  );
};

export default DifficultyCard;