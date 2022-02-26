import Actions from "./Actions"

export const addTask = (data) =>{
    return {
        type : Actions.ADD_TASK,
        payload: data
    }
}

export const fetchTasks = () =>{
    return {
        type : Actions.FETCH_TASKS,
    }
}