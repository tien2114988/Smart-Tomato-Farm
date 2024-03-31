import { Box } from "@mui/material";
import React from "react";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ height: "100%" }}>
        <Menu>
          <Outlet />
        </Menu>
      </Box>
      <Footer />
    </Box>
  );
};

export default RootLayout;
