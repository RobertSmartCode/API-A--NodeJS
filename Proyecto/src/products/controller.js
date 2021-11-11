const debug = require('debug')('app: module-products-controller');
const {ProductsService} = require('./services');

// module.exports.ProductsController = {
//     getProducts: async (req, res)=> {
//         try {
//             let products = await ProductsService.getAll();
//             res.json(products)
//         } catch (error) {
//             debug(error)
//             res.status(500).json({message:"Internal server error"})
            
//         }
//     },
//     getProduct: (req, res)=> {},
//     createProduct: (req, res)=> {}
// }