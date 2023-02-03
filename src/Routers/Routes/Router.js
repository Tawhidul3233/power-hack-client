import { createBrowserRouter } from "react-router-dom";
import Header from "../../Page/Components/Header/Header";
import Main from "../../Page/Layout/Main";
import Login from "../../Page/Login/Login";
import Register from "../../Page/Register/Register";


// create browsing router using react router dom
export const router = createBrowserRouter([
     {
          path:'/',
          element:<Main> </Main>,
          children: [
               {
                    path:'/',
                    element:<Header></Header>
               },
               {
                path:'/login',
                element: <Login></Login>
               },
               {
                path:'/register',
                element: <Register></Register>
               },
               {
                    // This is the error page if user click wrong link than this page show
                    path:'*',
                    element: <div className="text-center ">
                         <h1 className="text-3xl font-semibold my-5"> This page not found </h1>
                         <img className="mx-auto" style={{width:'70%', height:'400px'}} src="https://i.ibb.co/fFC20JG/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" alt="" />
                    </div>
               }
          ]
     }
])