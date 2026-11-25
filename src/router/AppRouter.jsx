
import Header from "../component/Header";
import Footer from "../component/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Club from "../pages/Club";
import Entradas from "../pages/Entradas";
import Galeria from "../pages/Galeria";
import Inicio from "../pages/Inicio";
import Lineup from "../pages/Lineup";
import Mapa from "../pages/Mapa";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />,
  },
  {
    path: '/entradas',
    element: <Entradas />,
  },
  {
    path: '/club',
    element: <Club />,
  },
  {
    path: '/lineup',
    element: <Lineup />,
  },
  {
    path: '/mapa',
    element: <Mapa />,
  }
])