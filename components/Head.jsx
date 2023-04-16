import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="I'm creative full stack web developer based in India."
      />
      <meta
        name="keywords"
        content="piyush agrawal, piyush, agrawal, web developer portfolio, piyush web developer, piyush developer, next-js , piyush agrawal portfolio, vscode-themed-portfolio , vscode-portfolio"
      />
      <meta property="og:title" content="Piyush Agrawal's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="" />
      <meta property="og:url" content="" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Piyush Agrawal",
};
