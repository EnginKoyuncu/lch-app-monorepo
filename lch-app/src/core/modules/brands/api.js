import { createHeaders } from "../../utils/api"



const fetchBrands = () => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/brands`,{
        headers:  createHeaders(headers),
    });
}

const fetchBrand = (id) => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/brands/${id}`,{
        headers:  createHeaders(headers),
    });
}


const createBrands = (data) => (headers) => {
    fetch(`${process.env.REACT_APP_BASE_API}/brands`,{
        method: 'POST',
        headers:  createHeaders(headers),
        body: JSON.stringify(data),
    })
}

const updateBrands = (data) => (headers) => {
    const { _id } = data;
    fetch(`${process.env.REACT_APP_BASE_API}/brands/${_id}`,{
        method: 'PATCH',
        headers:  createHeaders(headers),
        body: JSON.stringify(data),
    })
}


export { fetchBrands, createBrands, updateBrands, fetchBrand,
};