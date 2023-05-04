import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home/Home";
import Media from "../Pages/Media/Media";
import Profile from "../Pages/Profile/Profile";
import SignIn from "../Pages/Sign Up & Sign In/SignIn";
import SignUp from "../Pages/Sign Up & Sign In/SignUp";
import Watch from "../Pages/Watch/Watch";
import ChatBox from "../Pages/ChatBox/ChatBox"
import People from "../Pages/People/People";
import Saved from "../Pages/Saved/Saved";
import Report from "../Pages/Report/Report";
import Notification from "../Pages/Notification/Notification";
import PostDetails from "../Pages/Media/PostDetails";
import Earning from "../Pages/Earn/Earning";
import CreatePost from "../Pages/CreatePost/CreatePost";
import PrivateRoute from "./PrivateRoute ";
import Story from "../Pages/Story/Story";
import CreateStory from "../Pages/Story/CreateStory";
import Room from "../Pages/Room/Room";
import JoinRoom from "../Pages/Room/JoinRoom";
 

const router = createBrowserRouter([
     {
          path:'/',
          element: <Main></Main>,
          children:[
              
               {
                    path:'/',
                    element: <Home></Home>
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
                    path: '/postDetails/:id',
                    element: <PostDetails></PostDetails>,
                    loader:  ({params}) => fetch(`https://e-somaz-server.vercel.app/postDetails/${params.id}`),
               },
               {
                    path: '/about',
                    element: <About></About>
               },
              
               {
                    path:'/profile',
                    element: <PrivateRoute> <Profile></Profile></PrivateRoute>
               },
               {
                    path:'/watch',
                    element: <Watch></Watch>
               },
               {
                    path:'/chat',
                    element: <ChatBox></ChatBox>
               },
               {
                    path:'/people',
                    element: <People></People>
               },
               {
                    path: '/saved',
                    element: <PrivateRoute><Saved></Saved></PrivateRoute>
               },
               {
                    path: '/report',
                    element: <PrivateRoute><Report></Report></PrivateRoute>
               },
               {
                    path: '/notification',
                    element: <PrivateRoute><Notification></Notification></PrivateRoute>
               },
               {
                    path: '/chat',
                    element: <ChatBox></ChatBox>
               },
               {
                    path: '/createPost',
                    element: <CreatePost></CreatePost>

               },
               {
                    path: '/story',
                    element: <Story></Story>
               },
               {
                    path: '/createStory',
                    element: <CreateStory></CreateStory>
               },
               {
                    path:'/joinRoom',
                    element: <JoinRoom></JoinRoom>

               },
               {
                    path:'/room',
                    element: <PrivateRoute><Room></Room></PrivateRoute>
               },
               {
                    path:'/earn',
                    element: <PrivateRoute><Earning></Earning></PrivateRoute>
               }
               
          ]
     },
    
     {
          path: '/signIn',
          element: <SignIn></SignIn>
     },
     {
          path: '/signUp',
          element: <SignUp></SignUp>
     },
])

export default router;