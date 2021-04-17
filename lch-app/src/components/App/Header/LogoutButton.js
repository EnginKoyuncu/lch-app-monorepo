import Button from '../../Design/Button';

import { useAuth } from "../../Auth/AuthProvider";

const LogoutButton = () => {

    const { logout } = useAuth();

    return (
        <Button onClick={logout} color="outline-light">Sign out</Button>
    );

};

export default LogoutButton