'use client'
import Header from "@/components/Header";
import SearchEngine from "@/components/SearchEngine";
import Footer from "@/components/Footer";
import Packages from "@/components/Packages";
import HomeAbout from "@/components/HomeAbout";
import HomeDetails from "@/components/HomeDetails";
import TopDestinations from "@/components/TopDestinations";
import CustomerHelp from "@/components/CustomerHelp";
import ExpediaModal from "@/components/Modal/Popup";
import { React, useState } from "react";
import CustomerCard from "@/components/CustomerCard";

export default function Home() {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      {/* <section style={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
        ,
      }}> */}

        {/* <CustomerCard /> */}
      {/* </section> */}
      <Header />

      <SearchEngine />
      <TopDestinations />
      <HomeAbout />
      <CustomerHelp />

      {/* <ExpediaModal show={showModal} onClose={() => setShowModal(false)} /> */}
      <Packages />

      <Footer />

    </>
  );
}
