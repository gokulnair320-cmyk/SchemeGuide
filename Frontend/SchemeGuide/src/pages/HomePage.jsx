import "./HomePage.css";
import { useNavigate } from "react-router-dom";



function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="homepage">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">

          {/* LEFT: IMAGE */}
          <div className="hero-image">
            <img
              src="/hero-image.jpg"
              alt="Eligibility checklist illustration"
            />
          </div>

          {/* RIGHT: TEXT */}
          <div className="hero-text">
            <h1 className="title">SchemeGuide</h1>

            <h2 className="subtitle">
              Find government schemes you may be eligible for
            </h2>

            <p className="description">
              Answer a few simple questions and get clear information with official
              application links.
            </p>

            <button
              className="primary-btn"
              onClick={() => navigate("/check-eligibility")}
            >
              Check Eligibility
            </button>
          </div>

        </div>
      </section>

      <hr />


      {/* HOW IT WORKS */}
      <section className="section">
        <h3>How it works</h3>
        <ol>
          <li>Answer basic details (age range, income range, state)</li>
          <li>View eligibility results</li>
          <li>Apply through official websites</li>
        </ol>
      </section>

      <hr />

      {/* WHAT WE DO / DO NOT */}
      <section className="section">
        <h3>What SchemeGuide does</h3>
        <ul>
          <li>Explains eligibility rules clearly</li>
          <li>Shows why a scheme applies to you</li>
          <li>Provides official application links</li>
        </ul>

        <h3>What SchemeGuide does not do</h3>
        <ul>
          <li>Collect documents</li>
          <li>Process applications</li>
          <li>Guarantee approval</li>
        </ul>
      </section>

      <hr />

      {/* FOOTER */}
      <footer className="footer">
        <p>
          Information is indicative and sourced from official government portals.
          Final eligibility is decided by authorities.
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
