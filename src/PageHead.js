import Head from "next/head";
const PageHead = ({ page }) => {
  return (
    <Head>
      <title>Jeff Uchoa | {page}</title>
    </Head>
  );
};

export default PageHead;
