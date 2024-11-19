import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Layouts/Home';
import Auth from './Layouts/Auth';
import Login from './Components/Login';
import Register from './Components/Register';
import MyProfile from './Layouts/MyProfile';
import AuthProvider from './Providers/AuthProvider';
import ConsultantInfo from './Components/ConsultantInfo';
import Root from './Layouts/Root';
import PrivateRoute from './PrivateRoutes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/consultant/:id",
        element: <PrivateRoute>
          <ConsultantInfo></ConsultantInfo>
        </PrivateRoute>,
        loader: () => fetch('/counselingData.json'),
      },
      {
        path: "/myprofile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth></Auth>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </StrictMode>,
)
