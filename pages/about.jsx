import styles from "../styles/About.module.css";

const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <div className={styles.infoDiv}>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/100460788?v=4"
            alt="image"
          />
        </div>
        <div>
          <ul>
            <li>
              I often describe myself as a web developer with a specialization
              in the MERN stack.
            </li>
            <li>
              With a degree in Bachelor of Science (Physics honours) and skills
              in Full-stack development, I find out that I love solving
              problems, doesn't matter if it's a problem of physics or data
              structures.
            </li>
            <li>
              I joined Masai School, a coding Bootcamp, where I got some
              hands-on experience learning frontend and backend technologies.
            </li>
            <li>
              With more than 1800+ hours of coding, and 800+ hours of DSA and
              after months of rigorous training, I have built more than 30 small
              projects, and 5 Industrial level projects and have executed 4
              group projects as the team lead.
            </li>
            <li>
              Observant and curious, with a keen interest in building
              user-centric designs and translating business requirements into
              technical solutions. Looking forward to sharpening my skills in a
              demanding workplace.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
