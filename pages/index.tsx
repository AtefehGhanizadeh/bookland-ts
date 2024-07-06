import { Inter } from "next/font/google";
import HomePage from "@/src/components/homepage";
import Navbar from "@/src/components/navbar/Navbar";
import Head from "next/head";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
    <Head>
      <title>Bookland</title>
    </Head>
    <main>
      <Navbar/>
      <HomePage />
    </main>
    </>
  );
}
