import "@/styles/variables.module.scss";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />;
}
