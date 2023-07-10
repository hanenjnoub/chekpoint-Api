import { Get_Medcontact } from "./actiontype";
const initState={
    medcontacts:[]
}
export const medReducer=(state=initState,action)=>{
    switch(action.type){
        case Get_Medcontact:
            return{
                ...state,
                medcontacts:action.payload
            };
            default:
                return state
    }
    }
