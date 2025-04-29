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

export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
       

        children: [
            { path: "/", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "service", element: <Service /> },
            { path: "buy-house", element: <BuyHouse /> },
            { path: "cardDetails", element: <CardDetails /> },
            {path: "properties", element: <AllProperties />},
            {path: "faq", element: <FAQ />},
            {path: "advertis", element: <Advertis/>},
            {path: "Add", element: <Add/>},
        ],
    }
])
export default myRouter