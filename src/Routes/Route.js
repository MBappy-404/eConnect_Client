import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home/Home";
import Media from "../Pages/Media/Media";
import Profile from "../Pages/Profile/Profile";
import SignIn from "../Pages/Sign Up & Sign In/SignIn";
import SignUp from "../Pages/Sign Up & Sign In/SignUp";
import Watch from "../Pages/Watch/Watch";

const router = createBrowserRouter([
     {
          path:'/',
          element: <Main></Main>,
          children:[

               {
                    path:'/',
                    element:<Home></Home>
               },
               {
                    path: '/home',
                    element: <Home></Home>
               },
               {
                    path: '/media',
                    element: <Media></Media>
               },
               {
                    path: '/about',
                    element: <About></About>
               },
               {
                    path: '/signIn',
                    element: <SignIn></SignIn>
               },
               {
                    path: '/signUp',
                    element: <SignUp></SignUp>
               },
               {
                    path:'/profile',
                    element: <Profile></Profile>
                    
               },
               {
                    path:'/watch',
                    element: <Watch></Watch>
               }
               
          ]
     }
])

export default router;