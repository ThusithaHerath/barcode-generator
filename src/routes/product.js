const ProductController = require('../controllers/product')

module.exports = (router) => {

    router.post(
        "/add",
        ProductController.addProduct
      );

    return router;
};