import { ADD_CONTACT_US_RED, DELETE_CONTACT_US_RED, GET_CONTACT_US_RED, UPDATE_CONTACT_US_RED } from "../Constants"
export function ContactUsReducer(state = [], action) {
    let newState, index
    switch (action.type) {
        case ADD_CONTACT_US_RED:
            newState = state.push(action.payload)
            return newState
        case GET_CONTACT_US_RED:
            return action.payload
        case UPDATE_CONTACT_US_RED:
            newState = state
            index = state.findIndex((x) => x.id === Number(action.payload.id))
            newState[index].name = action.payload.name
            return newState
        case DELETE_CONTACT_US_RED:
            newState = state
            index = state.find((x) => x.id === action.payload.id)
            newState.splice(index, 1)
            return newState
        default:
            return state
    }
}