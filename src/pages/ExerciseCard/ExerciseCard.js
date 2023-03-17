import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MuscleCard from "../../components/MuscleCard/MuscleCard";

export default function ExerciseCard() {
  const { muscle } = useParams();

  //   const [quadricepsList, setQuadricepList] = useState([])
  // const [chestList, setChestList] = useState([])
  // const [lowerBackList, setLowerBackList] = useState([])
  // const [armsList, setArmsList] = useState([])
  // const [trapList, setTrapList] = useState([])
  // const [hamstringsList, setHamstringsList] = useState([])
  // const SingleLegPressImage = quadricepsList[0]
  const [muscleList, setMuscleList] = useState([]);

  useEffect(() => {
    const api_key = "SPUBuUKj6jx/6U9l20fpSA==J1kULQQdV8bdG1OX";
    const url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`;

    axios
      .get(url, { headers: { "X-Api-Key": api_key } })
      .then((response) => {
        console.log(response.data[0].name);
        setMuscleList(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  }, [muscle]);

  return (
    <div>
      {muscleList.map((muscle) => (
        <MuscleCard
          image={""}
          title={muscle.name}
          description={muscle.instructions}
        />
      ))}
    </div>
  );
}
