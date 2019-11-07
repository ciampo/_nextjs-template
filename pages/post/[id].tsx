import React from 'react';

import { useRouter } from 'next/router';
import Head from 'next/head';

import DefaultPageTransitionWrapper from '../../components/page-transition-wrappers/default';

const Post: React.FC<{}> = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Post {router.query.id}</title>
      </Head>

      <DefaultPageTransitionWrapper>
        <h1>{router.query.id}</h1>
        <p>This is the blog post content.</p>
      </DefaultPageTransitionWrapper>
    </>
  );
};

export default Post;
