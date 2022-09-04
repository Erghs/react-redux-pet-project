import { useSelector } from 'react-redux';
import './App.css';
import Likes from './Likes';
import Title from './Title';
import Comments from './Comments';
import { appReducer } from './Redux/appReducer';

function App() {
  const error=useSelector(state=>state.appReducer.error)
  return (
      <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./eyes.jpg" alt="eye"/>
            <Title/>
            <Likes/>
          </div>
          <Comments/>
        </div>
      </div>
    </div>
  );
}

export default App;
