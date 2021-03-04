import { v4 as uuidv4 } from "uuid";
import {ADD_TASK, DELETE_TASK, COMPELTE_TASK,EDIT_TASK, UPDATE_TASK} from "../Actions/type"


const initialeState = [
    {
        id: uuidv4(),
        text: "learn react",
        complete: false,
        isEdited: false
    },
    {
        id: uuidv4(),
        text: "learn redux",
        complete: false,
        isEdited: false
    }
]

const todoReducer = (state = initialeState, action) => {
    switch (action.type) {
        case ADD_TASK: return state.concat(action.payload)
        // case ADD_TASK: return [...state, action.payload]
        case DELETE_TASK: return state.filter(el => el.id !== action.payload)
        case EDIT_TASK: return state.map(el => el.id === action.payload ? {...el, isEdited: !el.isEdited} : el )
        case UPDATE_TASK: return state.map(el => el.id === action.payload.id ? action.payload : el )
        case COMPELTE_TASK: return state.map(el => el.id === action.payload ? {...el, complete: !el.complete} : el )
    
        default: return state
    }
}

export default todoReducer;