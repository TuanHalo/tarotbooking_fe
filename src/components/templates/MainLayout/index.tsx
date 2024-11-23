import { Footer, Header } from "@/components";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

type MainLayoutProps = {};

export const MainLayout = ({}: MainLayoutProps) => {
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
