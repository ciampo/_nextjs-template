import React, { useState } from 'react';

const About = (): JSX.Element => {
  const [name] = useState('Example');

  function aboutName(name: string): string {
    return `About ${name}`;
  }

  return <div>{aboutName(name)}</div>;
};

export default About;
