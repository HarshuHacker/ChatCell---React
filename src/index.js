import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './Assets/Styles/index.css';
import App from './Components/App';
import configStore from './Store';
import {
  Link,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const Login = () => <div>Login</div>;

const SignUp = () => <div>Sign Up</div>;

const Home = () => <div>Home</div>;

const SecondApp = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/login'}>Login</Link>
        </li>
        <li>
          <Link to={'/signup'}>Sign Up</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

const store = configStore();
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<SecondApp />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />,
        <Route path="/signup" element={<SignUp />} />,
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
