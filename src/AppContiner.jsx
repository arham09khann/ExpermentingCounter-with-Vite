import React from "react";
import CounterComponent from "./Components/CounterComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoApp from "./Components/TodoApp";

const AppContiner = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CounterComponent />,
    },
    { path: "/Todo", element: <TodoApp /> },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default AppContiner;
