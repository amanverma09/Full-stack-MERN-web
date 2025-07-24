import "./App.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import CreateUser from "./components/CreateUser/CreateUser";
import GetAllUser from "./components/GetUser.jsx/GetAllUser";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import Getsingleuser from "./components/Getsingleuser/Getsingleuser";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <GetAllUser />,
    },
    {
      path: "/create",
      element: <CreateUser />,
    },
    {
      path: "/update/:id",
      element: <UpdateUser />,
    },
    {
      path: "/delete/:id",
      element: <GetAllUser />,
    },
    {
      path: "/view/:id",
      element: <Getsingleuser />,
    },
  ]);
  return (
    <>
      <div>
        <RouterProvider router={route}></RouterProvider>
      </div>
    </>
  );
}

export default App;
