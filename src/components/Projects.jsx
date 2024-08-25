import Cards from "./subcomponents/Cards";
import "./Projects.css";
const Projects = () => {
  return (
    <div id="project" className="outerContainer">
      <p>My latest Projects</p>
      <div className="innerContainer">
        <Cards
          img="./chat.png"
          heading="Mess Buddy"
          about="Web application connecting students with mess owners.
          Authenticated users can comment and ask questions."
          link="https://github.com/Devdeep0109/MERN_Mess_Buddy"
        />
        <Cards
          img="./mess.png"
          heading="VartaLaap"
          about="Real time chat with timing betwenn two user.
          Chats are stored and online status can be seen."
          link="https://github.com/Devdeep0109/MERN_VartaLaap"
        />
        <Cards
          img="./joke.png"
          heading="Fun Finder"
          about="A fun website to explore various joke genres.
          Users can search for jokes by a specific genre."
          link="https://github.com/Devdeep0109/React_Fun-Finder"
        />
        <Cards
          img="./blogify.png"
          heading="Blogify"
          about="A user can see various blog and comments. Authenticated user can create and comment on blog."
          link="https://github.com/Devdeep0109/Blogging_App"
        />
      </div>
    </div>
  );
};

export default Projects;
