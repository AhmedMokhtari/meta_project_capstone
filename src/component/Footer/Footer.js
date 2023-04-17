import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: "#495E57" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h3>Little Lemon</h3>
            <p>Chicago, IL</p>
            <p><FontAwesomeIcon icon={faPhone} /> (123) 456-7890</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> info@littlelemon.com</p>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Main St, Chicago, IL</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h3>Follow Us</h3>
            <p><FontAwesomeIcon icon={faFacebook} /> <a href="https://www.facebook.com/">Facebook</a></p>
            <p><FontAwesomeIcon icon={faTwitter} /> <a href="https://twitter.com/">Twitter</a></p>
            <p><FontAwesomeIcon icon={faInstagram} /> <a href="https://www.instagram.com/">Instagram</a></p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h3>Subscribe</h3>
            <p>Sign up for our newsletter to get the latest news and updates.</p>
            <form>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
              <button type="submit" className="btn btn-light fooot_btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">All Rights Reserved. &copy; Little Lemon</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
