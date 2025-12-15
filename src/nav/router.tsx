import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import LogMatch from "../pages/LogMatch";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/log-match",
    element: <LogMatch /> 
  },
]);