import MainLayout from 'Frontend/views/MainLayout.js';
import TodoView from 'Frontend/views/TodoView';
import {createBrowserRouter} from 'react-router-dom';
import AboutView from "Frontend/views/AboutView";

const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    children: [
      {path: '/', element: <TodoView/>},
      {path: '/about', element: <AboutView/>},
    ],
  },
]);

export default router;
