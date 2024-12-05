import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="containts">
          <div className="lists">
            <p>About Us</p>
            <p>FAQs</p>
            <p>Contact Us</p>
          </div>
          <div className="lists">
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
            <p>Help</p>
          </div>
          <div className="list">
            <h3>ScholarsCreators</h3>
            <p style={{fontSize: "18px"}}>Scholars Creators is a Not-just-for-Profit organization and India's Largest Education Finance Platform assisting students with scholarships and education loans to study abroad and study in India.</p>
          </div>
        </div>
        <div className="icon">
        Follow Us
        <a href="#"><img className="social" alt='' src="fb.png"></img></a>
        <a href="#"><img className="social" alt='' src="in.png"></img></a>
        <a href="#"><img className="social" alt='' src="is.png"></img></a>
        <a href="#"><img className="social" alt='' src="x.png"></img></a>
        <a href="#"><img className="social" alt='' src="wa.png"></img></a>
        </div>

        <div className="tag">
          © 2024 Scholars Creators
        </div>
    </div>
    </>
  )
}

export default Footer;
