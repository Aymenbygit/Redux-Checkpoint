import {ADD_TASK, DELETE_TASK, EDIT_TASK, COMPELTE_TASK, UPDATE_TASK} from './type'

export const add_task = newTask => {
    return {
        type : ADD_TASK,
        payload : newTask
    }
}
export const delete_task = id => {
    return {
        type : DELETE_TASK,
        payload : id
    }
}
export const edit_task = id => {
    return {
        type : EDIT_TASK,
        payload : id
    }
}
export const update_task = updatedTask => {
    return {
        type : UPDATE_TASK,
        payload : updatedTask
    }
}
export const complete_task = completeTask => {
    return {
        type : COMPELTE_TASK,
        payload : completeTask
    }
}
