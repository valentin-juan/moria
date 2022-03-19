import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Customers } from "./pages/Customers";
import { Products } from "./pages/Products";
import { Sales } from "./pages/Sales";

export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/"          element={<Home />} />
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/customers" element={<Customers />} />
                <Route path="/products"  element={<Products />} />
                <Route path="/sales"     element={<Sales />} />
            </Routes>
        </Router>
    )
}