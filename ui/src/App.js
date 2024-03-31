
import "./App.css";
import Manage from "./features/Manage/Manage";
import Light from "./features/Light/Light";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Error from "./features/Error/Error";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <div className="App">
      {/* <Menu/> */}

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Manage />
              </Layout>
            }
          />
          <Route
            path="/light"
            element={
              <Layout>
                <Light />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <Error />
              </Layout>
            }
          />
        </Routes>
      </LocalizationProvider>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
