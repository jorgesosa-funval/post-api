import {Sales}from "./Model.js"
    
 /**
  * @description Get all Saless
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  */
 export const index = async (req, res, next) => {
   try {
    //#swagger.tags = ['Sales']
    //#swagger.description = 'Obtiene todos los sales activos.'

     const sales = await Sales.findAll();
     res.status(200).json(sales);
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Get a single Sales
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const show = async (req, res, next) => {
   try {
    //#swagger.tags = ['Sales']
    //#swagger.description = 'Obtiene un sale por id.'

     const sale = await Sales.findByPk(req.params.id);
     if (!sale) {
       throw { status: 404, message: "sale not found" };
     }
     res.status(200).json(sale);
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Create a new Sales
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const store = async (req, res, next) => {
   try {
    //#swagger.tags = ['Sales']
    //#swagger.description = 'Crea un nuevo sale.'

     const sale = await Sales.create(req.body, {
       validate: true,
     });
     res.status(201).json({
        status: "ok",
        message: "Sales created successfully",
     });
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Update a Sales
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 export const update = async (req, res, next) => {
   try {
    //#swagger.tags = ['Sales']
    //#swagger.description = 'Actualiza un sale por id.'

     const sale = await SalesfindByPk(req.params.id);
     if (!sale) {
       throw { status: 404, message: "Sales not found" };
     }
     await sale.update(req.body);
     await sale.save();
      res.status(200).json({
        status: "ok",
        message: "Sales updated successfully"
      });
   } catch (error) {
     next(error);
   }
 };
 
 /**
  * @description Delete a Sales
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  * @returns {Promise<void>}
  */
 
 export const destroy = async (req, res, next) => {
   try {
    //#swagger.tags = ['Sales']
    //#swagger.description = 'Elimina un sale por id.'

     const sale = await Sales.findByPk(req.params.id);
     if (!sale) {
       throw { status: 404, message: "Sales not found" };
     }
      await sale.destroy();
      res.status(204).json({
        status: "ok",
        message: "Sales deleted successfully" 
      });
   } catch (error) {
     next(error);
   }
 };
 
 export default { index, show, store, update, destroy };

