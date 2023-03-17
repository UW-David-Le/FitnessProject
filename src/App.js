import './App.scss';
import DifficultyCard from './pages/DifficultyCard/DifficultyCard.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';


export default function App() {
  return (

     <BrowserRouter>
       <Routes>
        <Route path="/" element={<DifficultyCard/>}/>
        <Route path="home" element={<HomePage/>}/>
        {/* <Route path="chest" element={<Chest/>}/>
        <Route path="legs" element={<Legs/>}/>
        <Route path="arms" element={<Arms/>}/>
        <Route path="traps" element={<Traps/>}/> */}
      </Routes>
    </BrowserRouter> 
  );
}
