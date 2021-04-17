import Select from "../../../Design/Select";
import useAuthApi from '../../../../core/hooks/useAuthApi';
import { useEffect, useState } from "react";
import { fetchBrands } from "../../../../core/modules/brands/api";

const BrandSelect = (props) => {

    const withAuth = useAuthApi();

    const [brands, setBrands] = useState();

    useEffect(() => {
        withAuth(fetchBrands())
        .then((data) => setBrands(data))
        .catch((error) => {

        })
    }, [withAuth]); 

    const options = brands ? brands.map((b) => ({value: b._id, label: b.brand})) : null;


    return (
        <Select
        options={options}
        {...props}
        />
    )
}

export default BrandSelect;