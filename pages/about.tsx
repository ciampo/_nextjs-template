import React, { useState } from 'react';
import Head from 'next/head';

import DefaultPageTransitionWrapper from '../components/page-transition-wrappers/default';

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

      <DefaultPageTransitionWrapper>
        <div>{aboutName(name)}</div>
      </DefaultPageTransitionWrapper>
    </>
  );
};

export default About;
