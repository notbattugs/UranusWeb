import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://www.astronomy.com/wp-content/uploads/sites/2/2021/09/ASYSM1017_01.jpg"
          sizes="any"
        />
        <title>Uranus - Your best friend</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
