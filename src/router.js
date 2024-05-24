import { createBrowserRouter } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import ReportPage from "./pages/ReportPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CheckoutPage />,
  },
  {
    path: "/report",
    element: <ReportPage />,
  },
]);

export default router;
