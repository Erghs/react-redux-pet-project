import {LIKE,
     DISLIKE,
    INPUT_TEXT,
    COMMENT_CREATE, 
    COMMENT_UPDATE,
    COMMENT_DELETE,
    COMMENTS_LOAD,
    ERROR_DISPLAY_ON,
    ERROR_DISPLAY_OFF
   

} from "./types";

export function incrementLikes(){
    return{
        type:LIKE
    }
}
export function incrementDislikes(){
    return{
        type:DISLIKE
    }
}
export function inputText(text){
    return{
        type:INPUT_TEXT,
        text
    }
}
export function commentCreate(text,id){
    return{
        type:COMMENT_CREATE,
        data:{text,id}
    }
}
export function commentUpdate(text,id){
    return{
        type:COMMENT_UPDATE,
        data:{text,id}
    }
}
export function commentDelete(id){
    return{
        type:COMMENT_DELETE,
        id
    }
}
export function errorOn(text){
    return{
        type:ERROR_DISPLAY_ON,
        text:text
    }
}
export function errorOff(){
    return{
        type:ERROR_DISPLAY_OFF
    }
}

export function commentsLoad(){
    return async dispatch =>{
        try{
        const response= await fetch('http://jsonplaceholder.typicode.com/comments?_limit=10');
        const jsonData = await response.json();
        dispatch({
            type: COMMENTS_LOAD,
            data:jsonData
        })
    }catch(err){
        dispatch(errorOn('Ошибка API'))
    }
       
    }
}
