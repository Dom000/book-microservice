import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "../error-page";
import User from "./pages/User/MyBooks";
import UserDetails from "./pages/User/UserDeatils";
import Books from "./pages/Books/index";
import BooksDetails from "./pages/Books/BookDetails";
import CreateBook from "./pages/Books/CreateBook";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/Register";
import { SnackbarProvider } from "notistack";
import Index from "./pages/User/MyBooks";
import AllUsers from "./pages/User/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AllUsers />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/userDetails",
        element: <UserDetails />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/userDetails",
            element: <Index />,
          },
          {
            path: "/userDetails/createbook",
            element: <CreateBook />,
          },
        ],
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/books/:id",
        element: <BooksDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <RouterProvider router={router} />
    </SnackbarProvider>
  </React.StrictMode>
);
