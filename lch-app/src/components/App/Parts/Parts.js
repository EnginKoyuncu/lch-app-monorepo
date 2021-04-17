import { Redirect, Route, Switch } from "react-router";
import { Routes } from "../../../core/routing";
import NewPart from "./Create/NewPart";
import PartsDetailContainer from'./Detail/PartsDetailContainer';
import PartsOverview from "./Overview/PartsOverview";

const Parts = () => {
    return (
        <Switch>
            <Route path={Routes.PartsNew}>
                <NewPart />
            </Route>
            <Route path={Routes.PartsDetail}>
                <PartsDetailContainer />
            </Route>
            <Route path={Routes.Parts}>
                <PartsOverview />
            </Route>
            <Redirect to={Routes.Parts} />
        </Switch>
    )

};



export default Parts;