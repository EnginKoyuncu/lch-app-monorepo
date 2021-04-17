import { useState } from 'react';
import useAuthApi from '../../../../core/hooks/useAuthApi';
import BrandForm from "../Form/BrandForm";
import { useHistory } from 'react-router';
import { updateBrands } from '../../../../core/modules/brands/api';
import ErrorAlert from '../../Shared/ErrorAlert';
import { route, Routes } from '../../../../core/routing';





const EditBrand = ({ brand, onUpdate }) => {
    const withAuth = useAuthApi();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    const handleSubmit = (data) => {
        setIsLoading(true);
        withAuth(updateBrands(data))
            .then((data) => {
                onUpdate(data);
                history.push(route(Routes.BrandsDetail, {
                    id: data._id,
                }));
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            })
    };


    return (
        <>
        <h1>Edit brand</h1>

        <ErrorAlert error={error} />

        <BrandForm onSubmit={handleSubmit}
        initialData={brand}
        disabled={isLoading} 
        />
        </>
    )
}

export default EditBrand;