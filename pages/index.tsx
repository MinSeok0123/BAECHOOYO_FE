import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <h1 className="text-5xl font-bold underline">Hello world!</h1>
      </Layout>
    </>
  );
};

export default Home;
