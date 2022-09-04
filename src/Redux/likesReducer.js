import { LIKE,DISLIKE } from "./types"
const initialState={
    likes:0,
    dislikes:0
}

export const likesReducer=(state=initialState,action)=>{
    switch(action.type){
        case LIKE:
            return{
                ...state,
                likes:state.likes+1
            }
        case DISLIKE:
            return{
                ...state,
                dislikes:state.dislikes+1
            }
        default:
            return state;
    }
}