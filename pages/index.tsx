import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Body from "../components/Body";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="bg-blue-500 flex h-full flex-col justify-center items-center">
      <h1 className="text-4xl mb-5 font-bold">Home</h1>
    </div>
  );
};

export default Home;
