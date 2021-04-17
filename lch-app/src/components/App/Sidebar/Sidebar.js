import { Link } from 'react-router-dom';
import { Routes } from '../../../core/routing/index';

const items = [{
    'label': 'Home',
    'route': Routes.Home,
    'icon': null,
},
{
    'label': 'Parts',
    'route': Routes.Parts,
    'icon': null,
},
{
    'label': 'Brands',
    'route': Routes.Brands,
    'icon': null,
},
{
    'label': 'About Us',
    'route': Routes.About,
    'icon': null,
}]

const Sidebar = () => {
    return (
        <div className="container-fluid">
        <nav id="sidebarMenu" className="navbar navbar-expand-lg navbar-light bg-secondary d-flex justify-content-center ">
            <div className="position-sticky pt-3 ">
                        <ul className="nav flex-row">
                        {
                            items.map((item) => (
                                <li className="nav-item" key={item.route} >
                            <Link className="nav-link active text-light" to={item.route}> {item.label} </Link>
                        </li>
                            ))
                        }
                    </ul>
                
            </div>
        </nav>
        </div>
    );

};

export default Sidebar;