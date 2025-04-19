import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      { path: "/", element: <h1>Home</h1> },
      {
        path: "/about",
        element: (
          <div>
            <h2>About</h2>
          </div>
        ),
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
