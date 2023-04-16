import Tab from "./Tab";
import styles from "../styles/Tabsbar.module.css";

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="Home.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/css_icon.svg" filename="skills.css" path="/skills" />
      <Tab icon="/js_icon.svg" filename="projects.js" path="/projects" />
      <Tab icon="/markdown_icon.svg" filename="github.md" path="/github" />
      <Tab icon="/css_icon.svg" filename="contact.css" path="/contact" />
      <div className="resumeCon">
        <a
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1gFYaxu-xdJ3QfySJtPubrL-_D0zQtN6-/view?usp=share_link"
            )
          }
        >
          <div className="resume">
            <img
              src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
              alt="resume"
              height={18}
              width={18}
            />{" "}
            <p>Resume.pdf</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Tabsbar;
