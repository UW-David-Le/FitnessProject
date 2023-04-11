import './App.scss';
import DifficultyCard from './pages/DifficultyCard/DifficultyCard.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import ExerciseCard from './pages/ExerciseCard/ExerciseCard';
import LoginPage from './pages/LoginPage/LoginPage';
import PersonalWorkout from './pages/PersonalWorkout/PersonalWorkout';
import { useState } from 'react';


export default function App() {
  const [workoutPage, setWorkoutPage] = useState([])
  const addWorkout = (title) => {
    console.log(title)
  }
  return (

     <BrowserRouter>
       <Routes>
       <Route path="/" element={<LoginPage/>}/>

        <Route path="/1" element={<DifficultyCard/>}/>
        <Route path="home/:difficulty" element={<HomePage/>}/>
        <Route path="/:muscle" element={<ExerciseCard addWorkout = {addWorkout}/>}/>
        <Route path="/personal" element={<PersonalWorkout/>}/>

  

      </Routes>
    </BrowserRouter> 
  );
}
