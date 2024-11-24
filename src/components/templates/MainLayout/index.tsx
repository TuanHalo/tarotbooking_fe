import { Footer, Header } from "@/components";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

interface IMainLayoutProps {}

export const MainLayout = ({}: IMainLayoutProps) => {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
