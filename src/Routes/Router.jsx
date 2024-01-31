
import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../Pages/Home/HomePage';
import BookingCox from '../Pages/Shared/BookingCox/BookingCox';
import BookingSrimangal from '../Pages/Shared/BookingSrimangal/BookingSrimangal';
import BookingSundarban from '../Pages/Shared/BookingSundarban/BookingSundarban';
import Root from '../Root/Root';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import BookedSearch from '../Pages/BookedSearch/BookedSearch';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children:[
      {
        path: "/",
        element: <HomePage/> 
      },
      {
        path:'/coxbazar/:id',
        element: <BookingCox/>
      },
      {
        path: '/srimangal/:title',
        element: <BookingSrimangal/>
      },
      {
        path: '/sundarban/:paragraph',
        element: <BookingSundarban/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path:'/register',
        element: <Register/>
      },
      {
        path: '/destination',
        element: <BookedSearch></BookedSearch>
      }
    ]
  }
   
  ]);

export default router;