import { Link } from "react-router-dom";
import useAdmin from "../../../../core/hooks/useAdmin";
import { route, Routes } from "../../../../core/routing";
import './BrandDetail.scss';

const BrandDetail = ({ brand }) => {
    const admin = useAdmin();

    return (
        <>
        
 

<div class="card text-center justify-content-center ">
  <div class="card-header">
    Brand info
  </div>
  <div class="card-body">
    <h5 class="card-title">{brand.brand}</h5>
    <p class="card-text">{brand.description}</p>
    <p class="card-text">{brand.country}</p>
    <a href={brand.website} class="btn btn-primary">Go to website</a>
  </div>
  <div class="card-footer text-muted">
    Contactname Seller <br></br> {brand.contactSeller}
  </div>
  <div class="card-footer text-muted">
    Email Seller <br></br> {brand.email}
  </div>
  <div class="editbutton">
  { admin &&
           <Link to={route(Routes.BrandsEdit, {id: brand.id})}>
               Edit brand
           </Link> 
        }
</div>
</div>
        
       
        
           </>
    );

};

export default BrandDetail;