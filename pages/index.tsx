import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Snippets from "../components/snippets";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Snippets</title>
        <meta name="description" content="My code snippets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Snippets</h2>
        <Snippets />
      </main>
    </div>
  );
};

export default Home;
