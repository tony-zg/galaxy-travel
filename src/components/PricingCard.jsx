import { Link } from 'react-router-dom';
import './styles/PricingCardStyles.css';

const PricingCart = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>Basic</h3>
          <span className="bar"></span>
          <p className="btc">1 BTC</p>
          <p>2 days</p>
          <p>Views</p>
          <p>No featured</p>
          <p>No Private Quarters</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>Suite</h3>
          <span className="bar"></span>
          <p className="btc">2 BTC</p>
          <p>4 days</p>
          <p>Views</p>
          <p>Featured</p>
          <p>No private Quarters</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
        <div className="card">
          <h3>VIP</h3>
          <span className="bar"></span>
          <p className="btc">3 BTC</p>
          <p>6 days</p>
          <p>Views</p>
          <p>Featured</p>
          <p>Private Quarters</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCart;
