import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Greeting from './components/Greeting';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Greeting />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
