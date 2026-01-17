import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import HomePage from "./pages/HomePage";

function App() {
  const theme = {
    color: {
      primary: "#8C00FF",
      secondary: "#FBE580",
      tetiary: "rgba(0,0,0,0.7)",

      bigTextColor: "rgba(0,0,0,0.95)",
      smallTextColor: "rgba(37, 37, 37,0.8)",
      buttonTextColor: "#D9D9D9",
    },
    size: {
      smallTextDesktop: "18px",
      mediumTextDesktop: "32px",
      largeTextDesktop: "42px",
      logoText: "32px",
      buttonText: "24px",
    },
    gap: {
      smallGapDesktop: "22px",
      mediumGapDesktop: "44px",
      largeGapDesktop: "88px",
    },
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
      </Route>
    )
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
