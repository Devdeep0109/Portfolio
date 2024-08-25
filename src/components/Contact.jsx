import "./Contact.css";
const Contact = () => {
  return (
    <div id="contact" className="contactUsContainer">
      <h1>You can contact me </h1>
      <p>Feel free to reach out for collaborations or just a friendly hello</p>
      <h3>devdeepgoyal@gmail.com</h3>
      <div className="contactIcon">
        <a href="https://github.com/Devdeep0109">
          <img src="./github.png" alt="" className="github" />
        </a>
        <a href="https://www.linkedin.com/in/devdeep-goyal-357b5124b/">
          <img src="./linkedin (1).png" alt="" className="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
