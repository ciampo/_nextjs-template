import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title test'>Welcome to Next.js!</h1>
      <p className='description'>
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div className='row'>
        <a
          href='https://nextjs.org/docs'
          className='pt-4 px-4 pb-5 w-56 text-left no-underline border border-solid border-gray-500 hover:border-primary'
        >
          <h3 className="m-0 text-lg text-primary">
            Documentation &rarr;
          </h3>
          <p className="m-0 pt-2 text-sm text-gray-700">
            Learn more about Next.js in the documentation.
          </p>
        </a>
        <a
          href='https://nextjs.org/learn'
          className='pt-4 px-4 pb-5 w-56 text-left no-underline border border-solid border-gray-500 hover:border-primary'
        >
          <h3 className="m-0 text-lg text-primary">
            Next.js Learn &rarr;
          </h3>
          <p className="m-0 pt-2 text-sm text-gray-700">
            Learn about Next.js by following an interactive tutorial!
          </p>
        </a>
        <a
          href='https://github.com/zeit/next.js/tree/master/examples'
          className='pt-4 px-4 pb-5 w-56 text-left no-underline border border-solid border-gray-500 hover:border-primary'
        >
          <h3 className="m-0 text-lg text-primary">
            Examples &rarr;
          </h3>
          <p className="m-0 pt-2 text-sm text-gray-700">
            Find other example boilerplates on the Next.js GitHub.
          </p>
        </a>
      </div>
    </div>
  </div>
)

export default Home
