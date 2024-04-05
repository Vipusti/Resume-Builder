import type { NextPage } from "next";
import Head from "next/head";
import HomeLayout from "src/modules/home/HomeLayout";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CLA Resume Builder</title>
        <meta name="description" content="CLA Resume Builder" />
        <link rel="icon" type="image/png" href="/resume.jpg" />
      </Head>
      <HomeLayout />
    </div>
  );
};

export default HomePage;
