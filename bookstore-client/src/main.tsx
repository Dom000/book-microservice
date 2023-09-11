import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "../error-page";
import User from "./pages/User";
import UserDetails from "./pages/User/UserDeatils";
import Books from "./pages/Books/index";
import BooksDetails from "./pages/Books/BookDetails";
import CreateBook from "./pages/Books/CreateBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <User />,
      },
      {
        path: "/user/:id",
        element: <UserDetails />,
        // children: [
        //   {
        //     path: "/user/:id",
        //     element: <User />,
        //   },
        // ],
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/books/:id",
        element: <BooksDetails />,
      },
      {
        path: "/create_book",
        element: <CreateBook />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
