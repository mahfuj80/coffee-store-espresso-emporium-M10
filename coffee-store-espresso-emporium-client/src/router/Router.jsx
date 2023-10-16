import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import AddCoffee from '../Pages/AddCoffee';
import View from '../Pages/View';
import Edit from '../Pages/Edit';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/add-coffee',
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: '/view-coffee',
        element: <View></View>,
      },
      {
        path: '/edit-coffee',
        element: <Edit></Edit>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/registration',
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
