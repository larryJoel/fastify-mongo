const Products = require("../models/product.model");

const getProducts = async (req, reply) => {
  const products = await Products.find();
  return products;
};

const addProduct =  async(req,reply) =>{
    const nwProduct = new Products(req.body);
    await nwProduct.save()
    reply.send(nwProduct)
};

const getProductsId = async (req, reply) => {
    const products = await Products.findOne(req.params.id);
    return products;
  };

  const delProductsId = async (req, reply) => {
    await Products.findByIdAndRemove(req.params.id)
    reply.send('delete product')
  };

  const editProduct = async(req,reply) =>{
      try {
          const editProduct = await Products.findByIdAndUpdate(req.params.id,req.body, {new:true})
          reply.send(editProduct )
      } catch (error) {
          console.log(error)
      }
}

module.exports = {
    getProducts,
    addProduct,
    getProductsId,
    delProductsId,
    editProduct
}