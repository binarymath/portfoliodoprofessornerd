'use client';
import Footer from "@/components/footer";
import Navbar from "../components/navbar";
import Body from "@/components/body";
import './page.css';

export default function Home() {
  return (
    <div id="container">
      <Navbar />
      <main>
        <Body />
      </main>
      <Footer />
    </div>
  );
}
