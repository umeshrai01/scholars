import React from "react";
import { Link } from "react-router-dom";
import "@fontsource/poppins/400-italic.css";
import Footer from "./Footer";

const Home = () => {

  return (
    <>
    <div className="body">
      <div className="head">
        <div className="head1">
          <div className="titl">
            <h1>Optimal funding solutions for your Study Abroad program</h1>
            <p>
              Uncover and apply for a wide range of international scholarships,
              and secure the most suitable education loan for your profile
            </p>
          </div>
          <div className="scel">
            <a href="/scholarships"><button
              style={{marginRight: "20px",
                fontSize: "1rem", width: "auto",  color: "#fff", borderRadius: "0.5rem",
                fontWeight: "700", border: "none",
                padding: "0.5rem 4.5rem", background: "green",}}
              color="success"
              variant="contained"
              component={Link}
            >
              Find scholarships worldwide
            </button></a>
            <a href="/user/Education"><button
              style={{marginRight: "20px",
                fontSize: "1rem", width: "auto", textAlign: "justify", color: "#fff", borderRadius: "0.5rem",
                fontWeight: "700", border: "none",
                padding: "0.5rem 4.5rem", background: "green",}}
              variant="contained"
              component={Link}
            >
              Apply for a student loan
            </button></a>
          </div>
        </div>
        <img className="glo" src="glo.png" alt="global" />
      </div>

      <div className="new">
        <h6>About Our Scholarship Program</h6>
        <p>The Scholarship Program is designed to support Students by providing financial assistance for higher education. Our goal is to help talented and deserving individuals achieve their academic and professional dreams.</p>
        <h4>Eligibility Criteria</h4>
        <p>To be eligible for the Scholarship, applicants must meet the following criteria:</p>
        <li>[Specify age, education, or demographic requirements, e.g., must be a high school senior, undergraduate, etc.]</li>
        <li>[Specific academic achievements, e.g., GPA requirement]</li>
        <li>[Any specific field of study, e.g., engineering, arts, medicine]</li>
        <li>[Special qualifications or community involvement if applicable]</li>
        <h4>Award Details</h4>
        <li>A total award of INR 50,000</li>
        <h4>Application Process</h4>
        <li>Complete the online application form available at <a href="https://application-ruddy.vercel.app/">Scholarship Test Application</a></li>
      </div>

      <div className="body1">
        <h6>Linked Loan Partners</h6>
        <p>Let nothing stand in the way of your dreams. Apply for a study abroad education loan online</p>
        <div className="car">
          <div className="card-img">
            <img className="img" src="boi.png" alt="BOI" />
          </div>
          <div className="card-img">
            <img className="img" src="pnb.png" alt="PNB" />
          </div>
          <div className="card-img">
            <img className="img" src="sbi.png" alt="SBI" />
          </div>
          <div className="card-img">
            <p>And many more others</p>
          </div>
        </div>
      </div>

      <div className="bank">
        <div className="car">
          <div className="card-img">
            <img className="img" src="boi.png" alt="BOI" />
          </div>
          <div className="card-img">
            <img className="img" src="pnb.png" alt="PNB" />
          </div>
          <div className="card-img">
            <img className="img" src="sbi.png" alt="SBI" />
          </div>
          <div className="card-img">
            <p>And many more others</p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default Home;