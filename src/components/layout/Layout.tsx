import { Box } from "@chakra-ui/react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface LayoutProps<T> {
  children: T;
}

export function Layout<T>({ children }: LayoutProps<T>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
