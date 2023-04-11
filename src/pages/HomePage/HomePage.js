import './HomePage.scss';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Dropdown from '../../components/DropDown/DropDown';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import Footer from "../../components/Footer/Footer"
import { useParams } from 'react-router-dom';
import WorkoutStyle from '../../components/WorkoutStyle/WorkoutStyle';

export default function HomePage() {
  const { difficulty } = useParams();
  return (
    <>
      <Header/>
      <h1 className='Homepage__header'> Small Steps. Big Changes</h1>
      <h1 className='Homepage__header'> Begin by selecting a goal</h1>

        <WorkoutStyle/>
        <Hero difficulty = {difficulty}/>
        {/* <Dropdown/> */}
        <ExerciseCard/>
        <Footer/>
    </>
  );
}
