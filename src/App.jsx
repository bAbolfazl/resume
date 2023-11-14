// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import AddForm from "./pages/addForm";
import { useState } from "react";

function App() {
  const [appData, setAppData] = useState(
    JSON.parse(localStorage.getItem("appData")) || []
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home appData={appData} />,
    },
    {
      path: "/add",
      element: <AddForm appData={appData} setAppData={setAppData} />,
    },
    {
      path: "/edit/:id",
      element: <AddForm appData={appData} setAppData={setAppData} isEdit />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
