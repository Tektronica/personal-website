import 'tailwindcss/tailwind.css'
import '../styles/index.css'
import '../themes/prism-xonokai.css'
import Head from 'next/head'

// import Layout from '../components/templates/Layout'
// https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/

export default function App({ Component, pageProps }) {
  const Layout = Component.layout || (children => <>{children}</>)
  return (
    <Layout>
      <Head>
        <meta name="google-site-verification" content="vJTVQgr-m2CikpQgrZ9vP9Aw09qtCSaBe-eAIGHMmpk" />
      </Head>
      <Component {...pageProps} />
    </Layout>

  )
}

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };
