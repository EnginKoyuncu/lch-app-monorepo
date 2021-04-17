
import { Redirect, Route, Switch } from "react-router";
import { Routes } from "../../../core/routing";
import NewBrand from "./Create/NewBrand";
import BrandDetail from "./Container/BrandDetailContainer";
import BrandsOverview from "./Overview/BrandsOverview";
import AdminRoute from "../Shared/Route/AdminRoute";


const Brands = () => {
    return (
        <Switch>
        <AdminRoute path={Routes.BrandsNew}>
            <NewBrand />
        </AdminRoute>
        <Route path={Routes.BrandsDetail}>
            <BrandDetail />
        </Route>
        <Route path={Routes.Brands}>
            <BrandsOverview />
        </Route>
        <Redirect to={Routes.Brands} />
    </Switch>
    )

};



export default Brands;