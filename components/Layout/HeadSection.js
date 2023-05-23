import Head from "next/head";

function HeadSection({ pageDetails }) {
  return (
    <Head>
      <title>{pageDetails?.title || "SMS Dashboard"}</title>
      <meta
        name="description"
        content={pageDetails?.description || "SMS dashboard description"}
      />
      <meta
        name="keywords"
        content={pageDetails?.keywords || "SMS dashboard keywords"}
      />
    </Head>
  );
}

export default HeadSection;
