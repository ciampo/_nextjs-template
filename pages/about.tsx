import React, { useState } from 'react'

export default () => {
  const [name, setName] = useState('Example');

  function aboutName(name: string): string {
    return `About ${name}`;
  }

  return <div>{aboutName(name)}</div>;
};
