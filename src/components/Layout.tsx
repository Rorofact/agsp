
import { ReactNode } from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <TopHeader />
        <Navbar />
      </div>
      <main className="flex-grow relative">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
