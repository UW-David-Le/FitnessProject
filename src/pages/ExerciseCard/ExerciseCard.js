import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MuscleCard from "../../components/MuscleCard/MuscleCard";
import Chest1 from "../../assets/Chest/1-Dumbbell-Press.gif";
import Chest2 from "../../assets/Chest/2-Forearm-Push-up.gif";
import Chest3 from "../../assets/Chest/3-Close-Grip-Bench-Press.gif";
import Chest4 from "../../assets/Chest/4-Dumbbell-Fly.gif";
import Chest5 from "../../assets/Chest/5-Incline-Dumbbell-Press.gif";
import Chest6 from "../../assets/Chest/6-Low-Cable-Crossover.gif";
import Chest7 from "../../assets/Chest/7-barbell-bench-press.gif";
import Chest8 from "../../assets/Chest/8-Chest-Dips.gif";
import Chest9 from "../../assets/Chest/9-Decline-Dumbbell-Fly.gif";
import Chest10 from "../../assets/Chest/10-Bodyweight Flyes.gif";

import Trap1 from "../../assets/Trap/1-smith-machine-shrug1.gif";
import Trap2 from "../../assets/Trap/2-barbell-shrug-muscles2.gif";
import Trap3 from "../../assets/Trap/3-dumbbell-shrug3.gif";
import Trap4 from "../../assets/Trap/4-Dumbbell-Upright-Row4.gif";
import Trap5 from "../../assets/Trap/5-Kettlebell sumo deadlift high pull5CR.gif";
import Trap6 from "../../assets/Trap/6-Lever-Standing-Calf-Raise-Calf6CR.gif";
import Trap7 from "../../assets/Trap/7-Kettlebell sumo deadlift high pull7CR.gif";
import Trap8 from "../../assets/Trap/8-Lever-Standing-Calf-Raise-Calf8.gif";
import Trap9 from "../../assets/Trap/9-Barbell-Shrug9.gif";
import Trap10 from "../../assets/Trap/10-Behind-The-Back-Barbell-Shrug-Reverse-Barbell-Shrug10.gif";

const chestImages = [
  Chest1,
  Chest2,
  Chest3,
  Chest4,
  Chest5,
  Chest6,
  Chest7,
  Chest8,
  Chest9,
  Chest10,
];


const trapsImages = [
   Trap1,
    Trap2,
    Trap3,
    Trap4,
    Trap5,
    Trap6,
    Trap7,
    Trap8,
    Trap9,
    Trap10,
  ];

console.log(chestImages[0]);

export default function ExerciseCard() {
  const { muscle } = useParams();
  const [muscleList, setMuscleList] = useState([]);

  useEffect(() => {
    const api_key = "SPUBuUKj6jx/6U9l20fpSA==J1kULQQdV8bdG1OX";
    const url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`;

    axios
      .get(url, { headers: { "X-Api-Key": api_key } })
      .then((response) => {
        console.log(response.data);
        const muscle = response.data.map((muscle, index) => {
          return { ...muscle, image: chestImages[index] };
        });
         setMuscleList(muscle);
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  }, [muscle]);

  return (
    <div>
      {muscleList.map((muscleItem, index) => (
        (muscle === "chest") 
        ? 
        <MuscleCard
          image={chestImages[index]}
          title={muscleItem.name}
          description={muscleItem.instructions}
        /> 
        :
        <MuscleCard
          image={trapsImages[index]}
          title={muscleItem.name}
          description={muscleItem.instructions}
        />
      ))}
    </div>
  );
}
