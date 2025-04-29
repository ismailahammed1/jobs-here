import { RouterProvider } from "react-router-dom";
import route from "./routers/router";
import AuthProvider from "./Contexts/authProvider";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  );
}

export default App;
