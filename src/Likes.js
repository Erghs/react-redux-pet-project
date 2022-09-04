import {connect} from 'react-redux';
import {incrementLikes, incrementDislikes} from "./Redux/actions";
function Likes(props){
    return(
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
            <button onClick={props.onIncrementDislikes}>👎{props.dislikes}</button>
        </div>
    )
}

function mapStateToProps(state){
    console.log('mapStateToProps > ', state);
    const{likesReducer}=state;
    return{
        likes:likesReducer.likes,
        dislikes:likesReducer.dislikes
    }
}
function mapDispatchToProps(dispatch){
    return{
        onIncrementLikes:()=>dispatch(incrementLikes()),
        onIncrementDislikes:()=> dispatch(incrementDislikes())
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Likes);