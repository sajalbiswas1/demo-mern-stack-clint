import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './component/Home/Home';
import Login from './component/Page/Login';
import Signin from './component/Page/Signin';

    const router = createBrowserRouter([
        {
          path: "/",
          element:<App></App>,
          children:[
            {
                path: '/',
                element:<Home></Home> 
            },
            {
                path: 'login',
                element : <Login></Login>
            },
            {
                path: 'signin',
                element : <Signin></Signin>
            },
          ]
        },
      ]);

export default router;