import React from "react";
import './App.css';
import Manage from './features/Manage/Manage';
import RootLayout from "./layouts/RootLayout";
import {
  Route, 
  Routes,
  RouterProvider,
  createBrowserRouter,
  BrowserRouter as Router,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/manage",
        element: <Manage />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
