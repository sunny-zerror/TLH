import PageTransition from "@/components/common/PageTransition";
import Layout from "@/components/Layout";
import LenisScroll from "@/components/LenisScroll";
import "@/styles/globals.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);



export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 600);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router]);
  return (
    <LenisScroll>
      <Layout>
        <PageTransition>
          <Component {...pageProps} />
        </PageTransition>
      </Layout>
    </LenisScroll>
  );
}
