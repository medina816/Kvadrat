import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Service from "../../pages/Service/Service";
import BuyHouse from "../../pages/BuyHouse/BuyHouse";
import FAQ from "../../pages/FAQ/FAQ";
import CardDetails from '../../pages/cardDetails/CardDetails';
import AllProperties from '../../pages/AllProperties/AllProperties'
import Advertis from "../../components/Advertis/Advertis";
import Add from "../../pages/add/Add.jsx"
import LoginForm from '../../shared/LoginForm/LoginForm.jsx'
import RegisterForm from '../../shared/RegisterForm/RegisterForm.jsx'
import AdBlock from '../../components/AdBlock/AdBlock.jsx' 
import ManageProperties from '../../pages/ManageProperties/ManageProperties.jsx';

export const myRouter = createBrowserRouter([  

    {
        path: "/admin",
        element: <Advertis />, 
        children: [
          { path: "properties", element: <ManageProperties /> },
          { path: "profile", element: <AdBlock /> },
          { path: "add", element: <Add /> },
        ],
      },
      

    {  
        path: "/register", 
        element: <RegisterForm />,    
    },
    { 
        path: "/login", 
        element: <LoginForm />, 
      }, 

    {
        path: "/",
        element: <Layout />, 

        children: [ 
            { path: "/", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "service", element: <Service /> },
            { path: "buy-house", element: <BuyHouse /> },
            { path: "cardDetails/:id", element: <CardDetails /> },
            {path: "properties", element: <AllProperties />},
            {path: "faq", element: <FAQ />},
            {path: "advertis", element: <Advertis/>}, 
            {path: "manageProperties", element: <ManageProperties/>}, 
            {path: "Add", element: <Add/>},
            {path: "login", element: <LoginForm/>},
        ],
    }
])
export default myRouter