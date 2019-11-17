import React from 'react';
import { useRouter } from 'next/router';
import { NextComponentType } from 'next';
import { usePrevious } from 'react-use';

import PageMeta from '../../components/PageMeta';
import DefaultPageTransitionWrapper from '../../components/page-transition-wrappers/Default';

const Post: NextComponentType<{}, {}, {}> = () => {
  const router = useRouter();
  const prevRouter = usePrevious(router);

  // When the page is transitioning out, the router will have the value for the new page.
  // This allows to use the correct value for this page
  const correctRouter = prevRouter && router.route !== '/post/[id]' ? prevRouter : router;

  return (
    <>
      <PageMeta
        title={`Post ${correctRouter.query.id}`}
        description="A blog post"
        path={correctRouter.asPath}
      />

      <DefaultPageTransitionWrapper>
        <h1>{correctRouter.query.id}</h1>
        <p>This is the blog post content.</p>
      </DefaultPageTransitionWrapper>
    </>
  );
};

export default Post;
