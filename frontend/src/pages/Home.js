import React, {useEffect} from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from "../hooks/useAuthContext"

// --- Components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForms from "../components/WorkoutForm";

const Home = () => {
// ---> phase one useState
  // const [workouts, setWorkouts] = useState(null)
// ---> phase two using useContext
const {workouts, dispatch} = useWorkoutsContext();
const {user} = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts', {
        headers: {
          'Authorization' : `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        // ---> phase one for local state
        // setWorkouts(json)
        // ---> phase two for the useContext
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }
      if (user) {

        fetchWorkouts()
      }
  }, [dispatch, user])

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
