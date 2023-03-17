import './HomePage.scss';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Dropdown from '../../components/DropDown/DropDown';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

export default function HomePage() {
  return (
    <>
      <Header/>
        <Hero/>
        <Dropdown/>
        <ExerciseCard/>
    </>
  );
}
