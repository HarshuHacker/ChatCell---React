import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './Assets/Styles/index.css';
import App from './Components/App';
import configStore from './Store';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { ErrorPage, Home, Navbar, Login } from './Components';

const SignUp = () => <div>Sign Up</div>;

const store = configStore();
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />,
        <Route path="/signup" element={<SignUp />} />,
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
