const Routes = Object.freeze( {
    Login: '/login',
    Home: '/home',
    Parts: '/parts',
    PartsNew: '/parts/new',
    PartsDetail: '/parts/:id',
    PartsEdit: '/parts/:id/edit',
    PartsDetailAddLog: '/parts/:id/add',
    
    Brands: '/brands',
    BrandsDetail: '/brands/:id',
    BrandsNew: '/brands/create',
    BrandsEdit: '/brands/:id/edit',
    About: '/about', 
});

// replaces : values with values from object
// e.g. route('/parts/:id', {id: 9}); -> /parts/9
export const route = (path, options = {}) => {
    Object.keys(options).forEach(key => {
        path = path.replace(`:${key}`, options[key]);
    });
    return path;

};

export { Routes };