import React from 'react';

import { useRouter } from 'next/router';
import Head from 'next/head';

const Post: React.FC<{}> = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Post {router.query.id}</title>
      </Head>

      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </>
  );
};

export default Post;
