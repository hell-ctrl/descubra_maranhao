import Scarecrow from '../../assets/Scarecrow.png';
import { Link } from "react-router-dom";
import './index.css';

function NotFound() {
  return (
    <div className='page-container'>
      <h3>404 NOT FOUND</h3>
      <div className="page-content">
        <div className="image-container">
          <img src={Scarecrow} alt="Scarecrow" />
        </div>
        <div class="page-details">
          <h1 class="page-title">I have bad news for you</h1>
          <p class="page-description">
            The page you are looking for might be removed or is temporarily unavailable
          </p>
          <Link to="/" className="to-home">BACK TO HOMEPAGE</Link>
        </div>
      </div>
      <p className="credit">
        Created bt <span>IsraelBeni</span>
      </p>
    </div>
  );
};

export default NotFound;