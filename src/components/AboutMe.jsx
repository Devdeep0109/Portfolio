/* eslint-disable react/no-unescaped-entities */
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="AboutContainer">
      <div className="leftAboutUs">
        <h3>Hello! I'm Devdeep Goyal </h3>
        <h5>LeetCoder and MERN Developer</h5>
        <p>
          Always learning and exploring new tech, I stay ahead in the
          ever-evolving landscape.
        </p>
      </div>
      <div className="rightAboutUs">
        <img src="./devdeep.jpeg" alt="not found" />
      </div>
    </div>
  );
};

export default AboutMe;
