import Head from "next/head";

const PageHead = ({ page }) => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta property="og:image" content="/img/logo/banner.webp" />
      <meta property="og:title" content="Jeff Uchoa" />
      <meta property="og:description" content="Site Profissional" />
      <meta property="og:url" content="https://jeffuchoa.com.br/" />
      <meta property="og:type" content="website" />
      <link rel="icon" type="image/webp" href="/img/logo/icon.webp" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Jeff Uchoa | {page}</title>
    </Head>
  );
};

export default PageHead;
