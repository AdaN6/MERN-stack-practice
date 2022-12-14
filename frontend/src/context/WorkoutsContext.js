import React, {createContext, useReducer} from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUTS':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        default:
            return state
    }
}

export const WorkoutsContextProvider = ({ children }) => {
 const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null
 });

//   dispatch({type: 'SET_WORKOUT', playload: [{},{}]})

  return (
    // <WorkoutsContext.Provider value={{workouts: []}}>
    <WorkoutsContext.Provider value={{state, dispatch}}>
        { children }
    </WorkoutsContext.Provider>
  )
}


