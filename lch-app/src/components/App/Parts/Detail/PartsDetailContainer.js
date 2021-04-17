import { useParams } from 'react-router';
import { Routes } from '../../../../core/routing';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useCallback } from 'react';
import useFetch from '../../../../core/hooks/useFetch';
import Spinner from '../../../Design/Spinner';
import AdminRoute from '../../Shared/Route/AdminRoute';
import ErrorAlert from '../../Shared/ErrorAlert';
import PartDetail from './PartDetail';
import { fetchPart } from '../../../../core/modules/parts/api';
import EditPart from './Edit/EditPart';

const PartsDetailContainer = () => {
    const { id } = useParams();

    const apiCall = useCallback(() => {
        return fetchPart(id);
    }, [id]);

    const {
        data: serie,
        error,
        setData,
        isLoading
    } = useFetch(apiCall);

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        return <ErrorAlert error={error} />;
    }

    return (
        <Switch>
            <AdminRoute path={Routes.PartsEdit}>
                <EditPart part={serie} onUpdate={setData} />
            </AdminRoute>
            <Route path={Routes.PartsDetail}>
                <PartDetail part={serie} />
            </Route>
            <Redirect to={Routes.Parts} />
        </Switch>
    );
};

export default PartsDetailContainer;