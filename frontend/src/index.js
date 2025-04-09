import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from './App';
import HomeScreen from './screens/HomeScreen';
import HelpScreen from './screens/HelpScreen';
import AboutScreen from './screens/AboutScreen';
import SignupScreen from './screens/SignupScreen';
import AuthenticationScreen from './screens/AuthenticationScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Contains Header + <Outlet />
    children: [
      { index: true, element: <HomeScreen /> },
      { path: "login", element: <AuthenticationScreen /> },
      { path: "about", element: <AboutScreen /> },
      { path: "help", element: <HelpScreen /> },
      { path: "signup", element: <SignupScreen /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
