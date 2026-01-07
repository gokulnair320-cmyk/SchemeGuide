import "./About.css";

function About() {
  return (
    <div className="about-page">
      <main className="about-container">
        <h1 className="about-title">About SchemeGuide</h1>

        <p className="about-text">
          SchemeGuide is a citizen-friendly platform designed to help Indians
          discover government schemes they may be eligible for.
        </p>

        <p className="about-text">
          Our mission is to bridge the information gap between government welfare
          programs and the citizens who need them most.
        </p>

        <p className="about-text">
          We do not collect documents or process applications — we simply guide
          you to the right resources.
        </p>
      </main>
    </div>
  );
}

export default About;
