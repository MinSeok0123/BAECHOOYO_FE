//import "../styles/globals.css";
import Header from "./Header";
import Footer from "./Footer";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div>레이아웃</div>
      {children}
      <Footer />
    </>
  );
}
