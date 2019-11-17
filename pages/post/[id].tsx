import React from 'react';
import { useRouter } from 'next/router';
import { NextComponentType } from 'next';

import PageMeta from '../../components/PageMeta';
import DefaultPageTransitionWrapper from '../../components/page-transition-wrappers/Default';

const Post: NextComponentType<{}, {}, {}> = () => {
  const router = useRouter();

  return (
    <>
      <PageMeta title={`Post ${router.query.id}`} description="A blog post" path={router.asPath} />

      <DefaultPageTransitionWrapper>
        <h1>{router.query.id}</h1>
        <p>This is the blog post content.</p>
      </DefaultPageTransitionWrapper>
    </>
  );
};

export default Post;
