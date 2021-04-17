import { createHeaders } from "../../utils/api"


const fetchParts = () => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/parts`,{
        headers:  createHeaders(headers),
    });
}

const fetchPart = (id) => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/parts/${id}`, {
        headers: createHeaders(headers),
    });
};

const createPart = (data) => (headers) => {
    return fetch(`${process.env.REACT_APP_BASE_API}/parts`, {
        method: 'POST',
        headers: createHeaders(headers),
        body: JSON.stringify(data),
    });
};

const updatePart = (data) => (headers) => {
    const { _id } = data;
    return fetch(`${process.env.REACT_APP_BASE_API}/parts/${_id}`, {
        method: 'PATCH',
        headers: createHeaders(headers),
        body: JSON.stringify(data),
    });
};

export {
    fetchParts,
    fetchPart,
    createPart,
    updatePart,
}