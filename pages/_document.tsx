import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
  DocumentProps,
} from 'next/document';

// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

interface File {
  url: string;
  details: {
    size: number;
    image: { width: number; height: number };
  };
  fileName: string;
  contentType: string;
}

interface Media {
  fields: {
    title: string;
    description?: string;
    file: File;
  };
}

type GlobalMetaAPIs = {
  previewImage: Media;
};

interface CustomDocumentInitialProps extends DocumentInitialProps {
  previewSharingImage: string;
}

interface CustomDocumentProps extends DocumentProps {
  previewSharingImage: string;
}

class CustomDocument extends Document<CustomDocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<CustomDocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    const globalMeta: GlobalMetaAPIs[] = await import('../data/globalMeta.json').then(
      (m) => m.default
    );

    return {
      previewSharingImage: globalMeta[0].previewImage.fields.file.url,
      ...initialProps,
    };
  }

  render(): JSX.Element {
    const previewSharingImage = this.props.previewSharingImage.startsWith('//')
      ? `https:${this.props.previewSharingImage}`
      : this.props.previewSharingImage;
    return (
      <Html>
        <Head>
          <meta name="twitter:card" content="summary" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={previewSharingImage} />

          {/* Manifests */}
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-config" content="/browserconfig.xml" />

          {/* Icons & theme colors */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff"></meta>

          {/* This allows styles based on JS being supported or not */}
          <script
            dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('js-app')` }}
          ></script>

          {/* Perf improvements */}
          <link
            rel="preconnect dns-prefetch"
            href="https://www.google-analytics.com"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
