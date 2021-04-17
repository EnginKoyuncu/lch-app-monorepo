import { useState } from 'react';
import useAuthApi from '../../../../core/hooks/useAuthApi';
import BrandForm from "../Form/BrandForm";
import { useHistory } from 'react-router';
import { createBrands } from '../../../../core/modules/brands/api';
import ErrorAlert from '../../Shared/ErrorAlert';
import { route, Routes } from '../../../../core/routing';





const NewBrand = () => {
    const withAuth = useAuthApi();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    const handleSubmit = (data) => {
        setIsLoading(true);
        withAuth(createBrands(data))
            .then(() => {
                history.push(route(Routes.Brands));
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            })
    };


    return (
        <>
        <h1>Create new brand</h1>

        <ErrorAlert error={error} />

        <BrandForm onSubmit={handleSubmit}
        disabled={isLoading} 
        />
        </>
    )
}

export default NewBrand;