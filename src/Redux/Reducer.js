import { combineReducers } from "redux"
const initialState = {
    list:[]
}

export function reducer (state=initialState, action){
    console.log(action)
    switch(action.type){
        case 'ADDITEMTOLIST':{
            const list = [...state?.list]
            list.push(action.payload)
            return({...state,list:list})
        }
        case 'DELETEITEMFROMLIST':{
            return ({...state,list:action.payload})
        }
        default :{
            return state
        }
    }
}

export function stateManagement (state=initialState, action){
    console.log(action)
    switch(action.type){
        case 'JSONDATA':{
            return ({...state,data:action.payload})
        }
        default :{
            return state
        }
    }
}
export default combineReducers({reducer,stateManagement})