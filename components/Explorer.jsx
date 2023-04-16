import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ChevronRight from "../components/icons/ChevronRight";
import styles from "../styles/Explorer.module.css";

const explorerItems = [
  {
    name: "Home.jsx",
    path: "/",
    icon: "react_icon.svg",
  },
  {
    name: "about.html",
    path: "/about",
    icon: "html_icon.svg",
  },
  {
    name: "skills.css",
    path: "/skills",
    icon: "css_icon.svg",
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: "js_icon.svg",
  },
  {
    name: "github.md",
    path: "/github",
    icon: "markdown_icon.svg",
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: "css_icon.svg",
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: "rotate(90deg)" } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: "block" } : { display: "none" }}
        >
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className={styles.file}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />{" "}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
          <a
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1gFYaxu-xdJ3QfySJtPubrL-_D0zQtN6-/view?usp=share_link"
              )
            }
          >
            <div className={styles.file}>
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
    </div>
  );
};

export default Explorer;
