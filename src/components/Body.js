import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import {onAuthStateChanged } from "firebase/auth";

import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";

const Body = ()=>{
    const router = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ]);
    

    return (
        <div>
        <RouterProvider router={router}/>
    </div>);
}
export default Body;