import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './Assets/Styles/index.css';
import App from './Components/App';
import configStore from './Store';
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { ErrorPage, Home, Navbar, Login, SignUp, Settings } from './Components';
import { action as loginAction } from './Components/Login';
import { action as signUpAction } from './Components/SignUp';

function PrivateRoute({ children }) {
  console.log(store.getState())
  return (store.getState().auth.isLoggedin) ? <>{children}</> : <Navigate to="/login" />;
}

const store = configStore();
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Navbar />}>
        <Route errorElement={<ErrorPage />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/setting"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} action={loginAction} />,
          <Route path="/signup" element={<SignUp />} action={signUpAction} />,
        </Route>
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
