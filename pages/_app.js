import Layout from '../component/Layout';
import '../styles/globals.css';
import {AuthProvider} from "../component/AuthContext"
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <title>
          JokerHack
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
    <Component {...pageProps} />
  </Layout>
    </AuthProvider>
  )}

export default MyApp
