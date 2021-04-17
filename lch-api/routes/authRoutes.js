const express = require('express');

const authRoutes = express.Router();
const adminRouter = express.Router();

const PartController = require('../controllers/PartController');
const BrandController = require('../controllers/BrandController');
const { withRole } = require('../services/auth/auth.services');
const { Roles } = require('../models/User');
const LogController = require('../controllers/LogController');

const partController = new PartController();
const brandController = new BrandController();
const logController = new LogController();

    // Parts CRUD

    authRoutes.get('/parts',  partController.getParts);
    authRoutes.get('/parts/:id', partController.getPartById);
    adminRouter.delete('/parts/:id', partController.deletePartById);
    adminRouter.patch('/parts/:id', partController.updatePartById);
    adminRouter.post('/parts', partController.createPart);


    // Brands CRUD

    authRoutes.get('/brands', brandController.getBrands);
    authRoutes.get('/brands/:id', brandController.getBrandById);
    adminRouter.delete('/brands/:id', brandController.deleteBrandById);
    adminRouter.patch('/brands/:id',  brandController.updateBrandById);
    adminRouter.post('/brands',  brandController.createBrand);

    // Logs
    authRoutes.get('/parts/:partId/logs', logController.getLogsByPart);
    authRoutes.post('/parts/:partId/logs', logController.createLogByPart);



    authRoutes.use(withRole(Roles.admin), adminRouter);


    module.exports = authRoutes;