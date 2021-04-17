import {Route } from 'react-router-dom';
import { isAdmin } from '../../../../core/modules/auth/utils';
import { useAuth } from '../../../Auth/AuthProvider';

const AdminRoute = ({path, children}) => {
    const { user } = useAuth();
    const allow = isAdmin(user);
    if(!allow) {
        return null;
    }

    return (
        <Route path={path}>
            { children }
        </Route>
    )

}

export default AdminRoute;