import '../styles/index.css';

import React from 'react';
import App, { AppContext, AppInitialProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

import MainLayout from '../components/layouts/Main';
import Analytics from '../components/utils/Analytics';
import routesConfig from '../routes-config';
import { ContentfulApiPageGeneric, UiLink } from '../typings';

type CustomAppProps = AppInitialProps & {
  navLinks: UiLink[];
};

export default class MyApp extends App<CustomAppProps> {
  static async getInitialProps({ Component, ctx }: AppContext): Promise<CustomAppProps> {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const navLinks: UiLink[] = [];
    for (const { route, contentfulPageData } of routesConfig) {
      if (contentfulPageData) {
        const routeData: ContentfulApiPageGeneric = await import(
          `../data/${contentfulPageData}.json`
        ).then((m) => m.default);

        if (routeData && routeData.navTitle) {
          navLinks.push({
            href: route,
            label: routeData.navTitle,
          });
        }
      }
    }

    return { pageProps, navLinks };
  }

  scrollToTop(): void {
    if (process.browser) {
      window.scrollTo(0, 0);
    }
  }

  componentDidMount(): void {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }

  componentWillUnmount(): void {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }
  }

  render(): JSX.Element {
    const { Component, pageProps, router, navLinks } = this.props;

    return (
      <>
        <Analytics />

        <MainLayout navLinks={navLinks}>
          <AnimatePresence initial={false} exitBeforeEnter onExitComplete={this.scrollToTop}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </MainLayout>
      </>
    );
  }
}
