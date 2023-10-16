import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import AddCoffee from '../Pages/AddCoffee';
import View from '../Pages/View';
import Edit from '../Pages/Edit';

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
    ],
  },
]);

export default router;
