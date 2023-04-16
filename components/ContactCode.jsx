import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "portfolio",
    link: "codewithjoy",
    href: "https://piyush-agrawal6.github.io/",
  },
  {
    social: "email",
    link: "agrawaljoy1@gmail.com",
    href: "mailto:agrawaljoy1@gmail.com",
  },
  {
    social: "phone",
    link: "+91-8144110261",
    href: "tel:8144110261",
  },
  {
    social: "github",
    link: "piyush-agrawal6",
    href: "https://github.com/piyush-agrawal6",
  },
  {
    social: "linkedin",
    link: "piyushagrawal",
    href: "https://www.linkedin.com/in/piyush-agrawal-me/",
  },
  {
    social: "instagram",
    link: "joy_agrawal_",
    href: "https://www.instagram.com/joy_agrawal_/",
  },
  {
    social: "medium",
    link: "codewithjoy",
    href: "https://medium.com/@CodeWithJoyy",
  },
  {
    social: "codesandbox",
    link: "agrawaljoy1",
    href: "https://codesandbox.io/u/agrawaljoy1",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
