import React from 'react';
import HomePage from '../HomePage/HomePage';
import './DifficultyCard.scss';
import { Link } from 'react-router-dom';
import Beginner from '../../assets/beginner.avif';
import Intermediate from '../../assets/intermediate.avif';
import Advanced from '../../assets/advanced.png';

const DifficultyCard = () => {
  return (
    <Link to = "/home" className="link-class">
       <h1> Choose your monkey: </h1>
    <div className="cards">
     
      <div className="card">
      <div className= "card__image">
        <img src= {Beginner} alt="Card 1" />
        </div>
        <div className="card-text">
          <h2>Beginner</h2>
          <p> You are brand new to weightlifting and would like to learn
            fundamental workouts. The exercises are beginnier friendly. 
          </p>
        </div>
        <button className= "card__button">
            I'm ready!
          </button>
      </div>
      <div className="card">
      <div className= "card__image">
        <img src= {Intermediate} alt="Card 2" />
        </div>
        <div className="card-text">
          <h2>Intermediate</h2>
          <p>You have have some experience with weightlifting and have developed a basic foundation of strength. 
            You will be pushed outside your comfort zone.
          </p>
        </div>
        <button className= "card__button">
            I'm ready!
          </button>
      </div>
      <div className="card">
        <div className= "card__image">
        <img src= {Advanced} alt="Card 3" />
        </div>
        <div className="card-text">
          <h2>Advanced</h2>
          <p>You have have a significant amount of experience with weightlifting and have developed a high level of strength and muscle mass</p>
        </div>
        <button className= "card__button">
            I'm ready!
          </button>
      </div>
    </div>
    </Link>
  );
};

export default DifficultyCard;