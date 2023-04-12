import { useState } from "react"
import MuscleCard from "../../components/MuscleCard/MuscleCard"

export default function PersonalWorkout () {
    const [currentWorkout, setCurrentWorkout] = useState([])
    
    const personal = () => {
        setCurrentWorkout()
    }
    
    
    return (
        <>
        <div> {currentWorkout}</div>
        
      </>
    )   
}
