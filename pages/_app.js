import '../styles/globals.css'
import WebWrapper from '../components/MainContent/WebWrapper'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <WebWrapper>
        <Component {...pageProps} />
      </WebWrapper>
    </>
  )
}

export default MyApp
