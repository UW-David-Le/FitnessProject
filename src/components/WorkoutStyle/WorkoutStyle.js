import "./WorkoutStyle.scss";
import SquareCard from "../SquareCard/SquareCard"
import Muscle from "../../assets/muscle.png"
import WeightLoss from "../../assets/lose-weight.png"
import Endurance from "../../assets/patience.png"

export default function WorkoutStyle () {
    return (
        <div className="WorkoutStyle__container">
        <SquareCard
          image={Muscle}
          title="Build Muscle"
          description="Build Muscle"
        />
        <SquareCard
          image = {WeightLoss}
          title="Lose Weight"
          description={WeightLoss}
        />
        <SquareCard
          image={Endurance}
          title="Improve Athleticism"
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
      )
}