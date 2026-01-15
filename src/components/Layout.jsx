import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { usePathname } from "next/navigation";
import BookNowDrawer from "./common/BookNowDrawer";

const Layout = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <BookNowDrawer />
      <header>
        <Header />
      </header>
      <main>{children}</main>
      {pathname !== "/contact" && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
};

export default Layout;
