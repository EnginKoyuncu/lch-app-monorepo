import { useState } from 'react';
import useAuthApi from '../../../../../core/hooks/useAuthApi';
import { useHistory } from 'react-router';
import { updatePart } from '../../../../../core/modules/parts/api';
import { route, Routes } from '../../../../../core/routing/index';
import PartForm from '../../Form/PartForm';
import ErrorAlert from '../../../Shared/ErrorAlert';





const EditPart = ({ part, onUpdate }) => {
    const withAuth = useAuthApi();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    const handleSubmit = (data) => {
        setIsLoading(true);
        withAuth(updatePart(data))
            .then((data) => {
                onUpdate(data);
                history.push(route(Routes.PartsDetail, {
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

        <PartForm onSubmit={handleSubmit}
        initialData={part}
        disabled={isLoading} 
        />
        </>
    )
}

export default EditPart;