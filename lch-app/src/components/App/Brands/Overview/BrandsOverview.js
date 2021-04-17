import useFetch from '../../../../core/hooks/useFetch';

import Spinner from '../../../Design/Spinner';
import Alert from '../../../Design/Alert';
import { fetchBrands } from '../../../../core/modules/brands/api';
import { route, Routes } from '../../../../core/routing';
import { Link } from 'react-router-dom';
import useAdmin from '../../../../core/hooks/useAdmin';



const BrandsOverview = () => {

    const { data: brands, error, isLoading } = useFetch(fetchBrands);
    const admin = useAdmin();

    if (isLoading) {
        return <Spinner />
    }

    if (error) {
        return <Alert color="danger">{error}</Alert>
    }

   

    return (
        <> 
        <div className="content-align-center">
        
        <h1>Brands</h1>
        { admin &&
            <Link to={Routes.BrandsNew}>Create brand</Link>
        }   
            
                {brands.map((brand) => (
                    <li key={brand._id} className="list-group-item">
                        <Link to={route(Routes.BrandsDetail, {id: brand._id})}> {brand.brand} </Link> 
                        </li>
                ))}

</div>            
        </>
    )
};

export default BrandsOverview;