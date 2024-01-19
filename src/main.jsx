import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Error from './pages/error.jsx';
import About from './pages/about.jsx'
import Home from './pages/home.jsx';
import Catering from './pages/catering.jsx';
import Coffee from './pages/coffee.jsx';
import Reviews from './pages/reviews.jsx';
import Menu from './pages/menu.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Menu',
        element: <Menu />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Catering',
     element: <Catering />,
      },
      {
        path: '/Coffee',
        element: <Coffee />,
      },
      {
        path: '/Reviews',
        element: <Reviews />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
