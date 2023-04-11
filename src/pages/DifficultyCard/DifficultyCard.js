import React from "react";
import "./DifficultyCard.scss";
import { Link } from "react-router-dom";
import Beginner from "../../assets/beginner.jpg";
import Intermediate from "../../assets/intermediate.jpg";
import Advanced from "../../assets/weight-lifting.jpg";
import Header from "../../components/Header/Header.js";
import Card from "../../components/Card/Card";
import Logo from "../../assets/FitnessLogo.png"

const DifficultyCard = () => {
  
  return (
    <>
      <div className="difficulty__header">
        {/* <img src = {Logo} alt = "" width={200} height = {100} /> */}
      </div>
       <h1> Start your fitness journey today! </h1>
    <div className="difficulty__cards">
    <Link to = "/home/beginner" className="link-class">
     <Card 
      image = {Beginner}
      title = "Beginner"
      description = "You are brand new to weightlifting and would like to learn fundamental workouts" 
      item1= "Have never been in a gym before"
      item2 = "Template workouts at the touch of a button!" 
      item3 = "Proper guidance to build strong workout fundamentals" 
      item4 =" Accessibility"
       />
        </Link>
        <Link to = "/home/intermediate" className="link-class">
       <Card 
      image = {Intermediate}
      title = "Intermediate"
      description = "You have some experience with weightlifting and have developed a basic foundation of strength. You will be pushed outside your comfort zone."
      item1= "You're familiar around a gym" 
      item2 = "Customizablility"
      item3 = "Fitness is somewhat a part of your life"
      item4 ="You have a solid strength foundation"
       />
      </Link>
       <Card
        image = {Advanced}
        title = "Advanced"
        description= "You have have a significant amount of experience with weightlifting and have developed a high level of strength and muscle mass."
        item1= "You're comfortable around a gym"
        item2 = "True Freedom to cater this app how'd you like"
        item3 = "Your strength foundation is amazing"
        item4 ="Harder workouts that are a little technical"
        />
        
    </div>
   
    </>
  );
};

export default DifficultyCard;