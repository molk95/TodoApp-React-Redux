import {ADD_TASK, DELETE_TASK,COMPLETE_TASK, EDIT_TASK} from "../constants/actionTypes"

export const addTask=(payload)=>{
    return ({type:ADD_TASK,payload})
}

export const deleteTask=(payload)=>{
    return ({type:DELETE_TASK,payload})
}

export const completeTask=(payload)=>{
    return ({type:COMPLETE_TASK,payload})
}
export const editTask=(payload)=>{
    return ({type:EDIT_TASK,payload})
}