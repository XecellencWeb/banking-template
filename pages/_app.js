import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/layout";
import "../styles/globals.scss";
import { motto, site_name } from "../data/names";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Head>
          <title>{site_name}-{motto}</title>
          <meta name="description" content="Trusted for banking services" />
          <link rel="icon" href="/icon.jpeg" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <>
      <Head><title>{site_name}-{motto}</title>
          <meta name="description" content="Trusted for banking services" />
          <link rel="icon" href="/icon.jpeg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
