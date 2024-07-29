"use client";

import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import "@/styles/styles.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import BootstrapClient from "@/components/BootstrapClient";
import BeforeFooter from "@/components/BeforeFooter";
import { usePathname } from "next/navigation";
import { SearchProvider } from "@/context/SearchContext";

const Layout = ({ children, pageProps }) => {
  useEffect(() => {
    document.title = "Doorstep";
  }, []);

  const pathname = usePathname();
  const hideNavPaths = ["/auth/login", "/auth/signup"];
  // console.log(pathname);

  return (
    <SearchProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8"></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
        </head>
        <body className="">
          <BootstrapClient />
          {!hideNavPaths.includes(pathname) && <Nav  />}
          <main className="w-full flex-1" {...pageProps}>{children}</main>
          {!hideNavPaths.includes(pathname) && <BeforeFooter />}
          {!hideNavPaths.includes(pathname) && <Footer />}
        </body>
      </html>
    </SearchProvider>
  );
};

export default Layout;
