import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';

import DefaultPageTransitionWrapper from '../components/page-transition-wrappers/default';

const PostLink: React.FC<{ id: string; label: string }> = ({ id, label }) => (
  <li>
    <Link href="/post/[id]" as={`/post/${id}`}>
      <a>{label}</a>
    </Link>
  </li>
);

PostLink.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const posts = [
  {
    id: 'test-a',
    label: 'Article A',
  },
  {
    id: 'test-b',
    label: 'Article B',
  },
];

const Home: React.FC<{}> = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <DefaultPageTransitionWrapper>
      <div className="w-full text-gray-700">
        <h1 className="m-0 w-fullleading-tight text-5xl text-center">Next.js template</h1>
        <p className="text-center">Just a little help to get started with all the right stuff.</p>
      </div>

      <nav>
        <ul>
          {posts.map((p) => (
            <PostLink {...p} key={`home-post-link${p.id}`} />
          ))}
        </ul>
      </nav>
    </DefaultPageTransitionWrapper>
  </>
);

export default Home;
