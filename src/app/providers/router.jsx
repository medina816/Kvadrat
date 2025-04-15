import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Service from "../../pages/Service/Service";
import BuyHouse from "../../pages/BuyHouse/BuyHouse";
import FAQ from "../../pages/FAQ/FAQ";
import CardDetails from '../../pages/cardDetails/CardDetails';

export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
       

        children: [
            { path: "/", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "service", element: <Service /> },
            { path: "buy-house", element: <BuyHouse /> },
            { path: "faq", element: <FAQ />},
            { path: "cardDetails", element: <CardDetails /> }
        ],
    }
])
export default myRouter