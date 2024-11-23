import { MainLayout } from "@/components";
import React from "react";

const Home = React.lazy(() => import("@/pages/Home"));

export const routers = [
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
    ],
  },
];
