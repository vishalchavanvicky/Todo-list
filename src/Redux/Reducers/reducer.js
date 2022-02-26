import Actions from "../Actions/Actions"

const initialState = {
    tasks:[
        {
            "taskName": "Business Meeting",
            "date" : "2022-04-09",
            "startTime": "15:00",
            "endTime": "12:00"
        },
        {
            "taskName": "Jane Pickup",
            "date" : "2022-03-09",
            "startTime": "14:00",
            "endTime": "11:00"
        },
        
    ]
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case Actions.ADD_TASK :
            return {...state, tasks: [...state.tasks,action.payload]}
        case Actions.FETCH_TASKS :
            return state;
        default :
            return state;
    }
}