import { RouterProvider } from "react-router-dom";

import Routes from "./router";
import { AppContextProvider } from "./context/appContext";
function App() {
  return (
    <AppContextProvider>
      <RouterProvider router={Routes} />
    </AppContextProvider>
  );
}
export default App;
