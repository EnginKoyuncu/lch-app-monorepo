import { route, Routes } from "../../../../core/routing";
import PartLogs from "./PartsLogs/PartLogs";
import AdminRoute from "../../Shared/Route/AdminRoute";
import LinkButton from "../../Shared/LinkButton";


const PartDetail = ({part}) => {




    return (
        <>

            <div className="row">
                <div className="col-sm-8">
                    <h1>{part.serie}  {part.model}</h1>
                    <p>Brand: {part.brand.brand}</p>
                </div>
                <div className="col-sm-12">
                    <AdminRoute>
                        <LinkButton to={route(Routes.PartsEdit, { id: part._id })}>
                            Edit part
                        </LinkButton>
                    </AdminRoute>
                </div>
            </div>

        </>


    );
};

export default PartDetail;