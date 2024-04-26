import React from "react";
import "./App.css";
import Login from "./features/Login/Login";
import Manage from "./features/Manage/Manage";
import Light from "./features/Light/Light";
// import Water from "./features/Water/Water";
import Static from "./features/Static/Static";
import RootLayout from "./layouts/RootLayout";
import Error from "./features/Error/Error";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter as Router,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "manage/*",
        element: <Manage />,
      },
      {
        path: "/light",
        element: <Light />,
      },
      // {
      //   path: "/water",
      //   element: <Water/>
      // },
      {
        path: "/static",
        element: <Static/>
      },
      {
        path: "*",
        element: <Error />,
      }
    ],
  },
]);

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router} />
    </LocalizationProvider>
  );
}

export default App;
