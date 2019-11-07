import '../styles/index.css';

import React from 'react';
import App from 'next/app';
import { AnimatePresence } from 'framer-motion';

import MainLayout from '../components/layouts/main';

export default class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps, router } = this.props;

    return (
      <MainLayout>
        <AnimatePresence initial={false} exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    );
  }
}
