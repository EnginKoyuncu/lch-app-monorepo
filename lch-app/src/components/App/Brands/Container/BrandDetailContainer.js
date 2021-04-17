
import { useCallback } from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router';
import useFetch from '../../../../core/hooks/useFetch';
import { fetchBrand } from '../../../../core/modules/brands/api';
import { Routes } from '../../../../core/routing';
import Alert from '../../../Design/Alert';
import Spinner from '../../../Design/Spinner';
import AdminRoute from '../../Shared/Route/AdminRoute';
import BrandDetail from '../Detail/BrandDetail';
import EditBrand from '../Edit/EditBrand';


const BrandDetailContainer = () => {

    const { id } = useParams();

    const apiCall = useCallback(() => {
        return fetchBrand(id);
    }, [id]);

    const { data: brand, 
        error,
        setData,
         isLoading 
        } = useFetch(apiCall);



    if (isLoading) {
        return <Spinner />
    }

    if (error) {
        return <Alert color="danger">{error}</Alert>
    }

    return (
        <Switch>
            <AdminRoute path={Routes.BrandsEdit} >
                <EditBrand brand={brand} 
                onUpdate={(data) => setData(data)}
                />

            </AdminRoute>
            <Route path={Routes.BrandsDetail}>
                <BrandDetail brand={brand} />
            </Route>
            <Redirect to={Routes.Brands}></Redirect>
            
        </Switch>

    )

};

export default BrandDetailContainer;