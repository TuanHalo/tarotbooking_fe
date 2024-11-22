import { Footer, Header } from "@/components";
import { Outlet } from "react-router-dom";

type MainLayoutProps = {};

export const MainLayout = ({}: MainLayoutProps) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
