import { createBrowserRouter } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import ReportPage from "./pages/ReportPage";
import FoodPage from "./pages/FoodPage";
import OrderPage from "./pages/OrderPage";
import UserPage from "./pages/UserPage";
import CreateFoodPage from "./pages/CreateFoodPage";
import CreateUserPage from "./pages/CreateUserPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <CheckoutPage />,
  },
  {
    path: "/report",
    element: <ReportPage />,
  },
  {
    path: "/order",
    element: <OrderPage />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/food",
    element: <FoodPage />,
  },
  {
    path: "food/create",
    element: <CreateFoodPage />,
  },
  {
    path: "food/edit/:id",
    element: <CreateFoodPage />,
  },
  {
    path: "/user/create",
    element: <CreateUserPage />,
  },
  {
    path: "/user/edit/:id",
    element: <CreateUserPage />,
  }
]);

export default router;
