import './styles/TrainingContentStyles.css';
import Pod from '../assets/pod.jpg';
import Moon from '../assets/moon.jpg';
import { Link } from 'react-router-dom';

const TrainingContent = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
          repellat saepe exercitationem est libero minus, sunt consectetur at
          repellendus placeat esse delectus labore sapiente earum!
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Moon} className="img" alt="moon" />
          </div>
          <div className="image-stack bottom">
            <img src={Pod} className="img" alt="pod" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingContent;
