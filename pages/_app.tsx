import '../styles/index.css';

import React from 'react';
import App from 'next/app';

import MainLayout from '../components/layouts/main';

export default class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    );
  }
}
