import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NextComponentType } from 'next';
import Head from 'next/head';

import DefaultPageTransitionWrapper from '../components/page-transition-wrappers/default';

type AboutPageProps = {
  title: string;
};

type AboutAPIs = {
  title: string;
  id: string;
  bio: object;
};

const About: NextComponentType<{}, {}, AboutPageProps> = ({ title }) => {
  const [exampleState] = useState('Example');

  function aboutFullTitle(exampleState: string): string {
    return `${exampleState} — ${title}`;
  }

  return (
    <>
      <Head>
        <title>{aboutFullTitle(exampleState)}</title>
      </Head>

      <DefaultPageTransitionWrapper>
        <div>{aboutFullTitle(exampleState)}</div>
      </DefaultPageTransitionWrapper>
    </>
  );
};

About.getInitialProps = async (): Promise<AboutPageProps> => {
  const about: AboutAPIs[] = await import('../data/about.json').then((m) => m.default);

  return { title: about[0].title };
};

About.propTypes = {
  title: PropTypes.string.isRequired,
};

export default About;
