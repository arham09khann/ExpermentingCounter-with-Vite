import React from "react";
import CounterComponent from "./Components/CounterComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OptimizedTodoApp from "./Components/OptimizedTodo";

const AppContiner = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CounterComponent />,
    },
    { path: "/Todo", element: <OptimizedTodoApp /> },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default AppContiner;
