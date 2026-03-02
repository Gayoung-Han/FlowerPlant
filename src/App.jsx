import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import './App.css';

import DefaultPage from "./views/DefaultPage";
import MyPlantsPage from "./views/MyPlantsPage";
import AboutPage from "./views/AboutPage";
import EditPage from "./views/EditPage";

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
          path: "/About",
          element: <AboutPage />
        },
        {
          path: "/MyPlants",
          element: <MyPlantsPage />
        },
        {
          path: "/EditPage/:id",
          element: <EditPage />
        },
        
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