import Layout from "@/components/Layout";
import LenisScroll from "@/components/LenisScroll";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(
    <>
      <LenisScroll>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LenisScroll>
    </>
  )
}
