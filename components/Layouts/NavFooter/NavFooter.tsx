import React from "react";
import TopBar from "../../AdPost/TopBar";
import Footer from "../../molecules/Footer/Footer";
import BottomMenu from "../../molecules/BottomMenu/BottomMenu";

interface Props { 
    children: React.ReactNode
}

export default function NavFooterLayout ({children}:Props) {
  return (
    <>
      <TopBar />
      {children}
      <Footer/>
      <BottomMenu  />
    </>
  )
}