import React, { useState } from 'react';
import Head from 'next/head';

const About: React.FC<{}> = () => {
  const [name] = useState('Example');

  function aboutName(name: string): string {
    return `About ${name}`;
  }

  return (
    <>
      <Head>
        <title>{aboutName(name)}</title>
      </Head>

      <div>{aboutName(name)}</div>
    </>
  );
};

export default About;
