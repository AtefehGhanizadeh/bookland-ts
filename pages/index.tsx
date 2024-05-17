import { Inter } from "next/font/google";
import HomePage from "@/src/components/homepage";
import Navbar from "@/src/components/navbar/Navbar";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main>
      <Navbar/>
      <HomePage />
    </main>
  );
}
