import Link from "next/link";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";
export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>CODE</h1>
          <h1>WITH JOY</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Piyush Agrawal</h1>
            <h6 className={styles.bio}>Full Stack Web Developer</h6>
            <a
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1gFYaxu-xdJ3QfySJtPubrL-_D0zQtN6-/view?usp=share_link"
                )
              }
            >
              <button className={styles.button}>Resume</button>
            </a>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
