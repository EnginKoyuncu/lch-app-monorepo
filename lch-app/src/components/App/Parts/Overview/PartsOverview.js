import { Link } from 'react-router-dom';
import useFetch from '../../../../core/hooks/useFetch';
import { route, Routes } from '../../../../core/routing';
import Spinner from '../../../Design/Spinner';
import Alert from '../../../Design/Alert';
import Button from '../../../Design/Button';
import { fetchParts } from '../../../../core/modules/parts/api';
import useAdmin from '../../../../core/hooks/useAdmin';

const PartsOverview = () => {
    const { data: parts, error, refresh, isLoading } = useFetch(fetchParts);

    const admin = useAdmin()
    
    if (isLoading) {
        return <Spinner />
    }

    if (error) {
        return <Alert color="danger">{error}</Alert>
    }

    return (
        <> 
            <h1>Parts</h1>
            { admin && <Link to={Routes.PartsNew}>Create project</Link> }
            <ul>
                {
                    
                    parts.map((part) => (
                        <li key={part.id}>
                            <Link to={route(Routes.PartsDetail, {id: part._id})}>
                                {part.serie} {part.model}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
    
}

export default PartsOverview;

