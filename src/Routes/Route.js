import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home/Home";
import Media from "../Pages/Media/Media";
import Profile from "../Pages/Profile/Profile";
import SignIn from "../Pages/Sign Up & Sign In/SignIn";
import SignUp from "../Pages/Sign Up & Sign In/SignUp";
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
import ViewProfile from "../Pages/View Profile/ViewProfile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import StoryDetails from "../Pages/Story/StoryDetails";
import TopPost from "../Pages/Home/TopPost/TopPost";
import Others from "../Pages/Others/Others";
 
const router = createBrowserRouter([
 
     {
          path:'/',
          element: <PrivateRoute> <Main></Main></PrivateRoute>,
          errorElement:<ErrorPage></ErrorPage>,
          children:[
              
               {
                    path:'',
                    element: <Home></Home>
               },
               {
                    path:'/home',
                    element: <Home></Home>
               },
               {
                    path: '/media',
                    element: <Media></Media>
               },
               {
                    path: '/postDetails/:id',
                    element: <PostDetails></PostDetails>,
               },
               {
                    path: '/about',
                    element: <About></About>
               },
               {
                    path: '/test',
                    element: <TopPost/>
               },
              
               {
                    path:'/profile',
                    element: <PrivateRoute> <Profile></Profile></PrivateRoute>
               },
               {
                    path:'/user/:id',
                    element:<ViewProfile></ViewProfile>,
                    loader:  ({params}) => fetch(`https://e-somaz-server.vercel.app/user/${params.id}`),

               },
               {
                    path:'/people',
                    element: <People></People>
               },
               {
                    path:'/others',
                    element:  <Others></Others>
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
                    path: '/createPost',
                    element: <CreatePost></CreatePost>

               },
               {
                    path: '/story',
                    element: <Story></Story>
               },
               {
                    path:'/storyDetails',
                    element:<StoryDetails></StoryDetails>

               },
               {
                    path: '/createStory',
                    element: <PrivateRoute><CreateStory></CreateStory></PrivateRoute>
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