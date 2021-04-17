import { Switch, Route, Redirect } from 'react-router';
import Parts from './Parts/Parts';
import Brands from './Brands/Brands';
import Home from './Home/Home';
import About from './About/About';
import { Routes } from '../../core/routing/index';


const Routing = () => {
    return (
        <Switch>
        <Route path={Routes.Home}>
            <Home/>
        </Route>
        <Route path={Routes.Parts}>
            <Parts/>
        </Route>
        <Route path={Routes.Brands}>
            <Brands/>
        </Route>
        <Route path={Routes.About}>
            <About />
        </Route>
        <Redirect to={Routes.Home} />
        
    </Switch>
    );
};

export default Routing;