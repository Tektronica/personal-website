import 'tailwindcss/tailwind.css'
import '../styles/index.css'
import '../themes/prism-xonokai.css'
import App from 'next/app'

// import Layout from '../components/templates/Layout'
// https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const Layout = Component.layout || (children => <>{children}</>)
    return (
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    )
  }
}

export default MyApp
