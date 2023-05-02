import Navigation from "@/components/Navigation";
import Head from "next/head";
import variable from "../../styles/variables.module.scss";
import OurDoctor from "@/components/OurDoctor";
import OurDocHero from "@/components/OurDocHero";
import Footer from "@/components/Footer";
import NavOtherPage from "@/components/NavOtherPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Our Doctor</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={variable.main}>
        <NavOtherPage />
        <OurDoctor />
        <Footer />
      </main>
    </>
  );
}
