import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      {/* <FloatingCTA /> */}
    </div>
  );
};

export default Layout;
