import React, { Fragment, useState } from "react";
import Home from "./components/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./components/Root";
import Addnetwork from "./components/AddNetwork/Addnetwork";
export default function App() {
  const [provider, setProvider] = useState();
  const addProvider = (provider) => {
    setProvider(provider);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root addProvider={addProvider} provider={provider} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "addnet", element: <Addnetwork /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
