import React, {useEffect} from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

// --- Components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForms from "../components/WorkoutForm";

const Home = () => {
// ---> phase one useState
  // const [workouts, setWorkouts] = useState(null)
// ---> phase two using useContext
const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
        // ---> phase one for local state
        // setWorkouts(json)
        // ---> phase two for the useContext
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout)=>(
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForms />
    </div>
  )
}

export default Home
