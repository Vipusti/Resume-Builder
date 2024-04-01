import type { NextPage } from 'next';
import Head from 'next/head';
import BuilderLayout from 'src/modules/builder/BuilderLayout';

const BuilderPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CLA Resume Builder</title>
        <meta name="description" content="Resume Builder" />
        <link rel="icon" type="image/png" href="/resume.jpg" />
      </Head>
      <BuilderLayout />
    </div>
  );
};

export default BuilderPage;
