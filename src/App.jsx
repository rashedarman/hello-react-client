import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Greeting from './components/Greeting';
import store from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Greeting />,
  },
]);

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

export default App;
