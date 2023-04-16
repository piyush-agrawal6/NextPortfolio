import styles from "../styles/About.module.css";

const skills = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <div className={styles.infoDiv}></div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Skills" },
  };
}

export default skills;
