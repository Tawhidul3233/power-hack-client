import { createBrowserRouter } from "react-router-dom";
import BillingTable from "../../Page/Components/BillingTable/BillingTable";
import Main from "../../Page/Layout/Main";


export const router = createBrowserRouter([
     {
          path:'/',
          element:<Main> </Main>,
          children: [
               {
                    path:'/',
                    element:<BillingTable> </BillingTable>
               },
               {
                    path:'*',
                    element: <div className="text-center ">
                         <h1 className="text-3xl font-semibold my-5"> This page not found </h1>
                         <img className="mx-auto" style={{width:'70%', height:'400px'}} src="https://i.ibb.co/fFC20JG/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" alt="" />
                    </div>
               }
          ]
     }
])