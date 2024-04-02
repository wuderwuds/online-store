import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from './layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Home } from './pages/Home/home';
import { SignIn } from './pages/SignIn/signIn';
import { SignUp } from './pages/SignUp/signUp';
import { CardUserInfo } from './pages/CardUserInfo/cardUserInfo';

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    
    children: [
      {
        index: 'true',
        element: <Home/>
      },
      {
        path: 'userinfo',
        element: <CardUserInfo/>
      },
      {
        path: 'signin',
        element: <SignIn/>
      },
      {
        path: 'signup',
        element: <SignUp/>
      }    
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

