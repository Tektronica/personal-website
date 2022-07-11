import 'tailwindcss/tailwind.css'
import '../styles/index.css'
import '../themes/prism-xonokai.css'
import App from 'next/app'

// import Layout from '../components/templates/Layout'
// https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/


export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
