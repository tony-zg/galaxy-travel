import './styles/FooterStyles.css';
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: '#fff', marginRight: '2rem' }}
            />
            <div>
              <p>222 George St</p>
              <h4>Sydney NSW 2000</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              13 14 16
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              <a href="mailto:trips@galaxy.com">trips@galaxy.com</a>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quos ipsa excepturi facilis non atque doloribus sit
            corrupti dolores quidem labore ut ad sapiente eligendi nisi, veniam
            reiciendis explicabo sunt.
          </p>
          <div className="social">
            <a href="https://www.facebook.com" target="blank">
              <FaFacebook
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </a>
            <a href="https://www.twitter.com" target="blank">
              <FaTwitter
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </a>
            <a href="https://www.linkedin.com" target="blank">
              <FaLinkedin
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
