const productCtr = require('../controllers/product.controller');

const routes = [
    {
        url: '/products',
        method: 'GET',
        handler: productCtr.getProducts
    },
    {
        url: '/products/:id',
        method: 'GET',
        handler: productCtr.getProductsId
    },
    {
        url: '/products/:id',
        method: 'PUT',
        handler: productCtr.editProduct
    },{
        url: '/products',
        method: 'POST',
        handler: productCtr.addProduct
    },{
        url: '/products/:id',
        method: 'DELETE',
        handler: productCtr.delProductsId
    },
]

module.exports = routes

