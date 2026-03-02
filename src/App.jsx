import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import './App.css';

import DefaultPage from "./views/DefaultPage";
import MyPlantsPage from "./views/MyPlantsPage";
import AboutPage from "./views/AboutPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <DefaultPage />
        },
        {
          path: "/MyPlants",
          element: <MyPlantsPage />
        },
        {
          path: "/About",
          element: <AboutPage />
        }
      ]
    }
  ],
  {
    basename: "/FlowerPlant"
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;