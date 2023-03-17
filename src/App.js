import './App.scss';
import DifficultyCard from './pages/DifficultyCard/DifficultyCard.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import ExerciseCard from './pages/ExerciseCard/ExerciseCard';


export default function App() {
  return (

     <BrowserRouter>
       <Routes>
        <Route path="/" element={<DifficultyCard/>}/>
        <Route path="home" element={<HomePage/>}/>
        <Route path="/:muscle" element={<ExerciseCard/>}/>

  

      </Routes>
    </BrowserRouter> 
  );
}
