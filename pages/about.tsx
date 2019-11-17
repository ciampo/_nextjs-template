import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NextComponentType } from 'next';

import DefaultPageTransitionWrapper from '../components/page-transition-wrappers/Default';
import PageMeta from '../components/PageMeta';
import { ContentfulApiAbout } from '../typings';

type PageAboutProps = {
  title: string;
};

const About: NextComponentType<{}, PageAboutProps, PageAboutProps> = ({ title }) => {
  const [exampleState] = useState('Example');

  function aboutFullTitle(exampleState: string): string {
    return `${exampleState} — ${title}`;
  }

  return (
    <>
      <PageMeta
        key="page-meta"
        title={aboutFullTitle(exampleState)}
        description="Sample descripion"
        path="/"
      />

      <DefaultPageTransitionWrapper>
        <div>{aboutFullTitle(exampleState)}</div>
      </DefaultPageTransitionWrapper>
    </>
  );
};

About.getInitialProps = async (): Promise<PageAboutProps> => {
  const about: ContentfulApiAbout[] = await import('../data/about.json').then((m) => m.default);

  return { title: about[0].title };
};

About.propTypes = {
  title: PropTypes.string.isRequired,
};

export default About;
