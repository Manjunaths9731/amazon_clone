import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRouter.get('/slug/:slug', (req,res)=>{
    const product= data.products.find(x => x.slug === req.params.slug);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message: 'Product Not Found'});
    }
})

productRouter.get('/:id', (req,res)=> {
    const product= data.products.find(x => x._id === req.params._id);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message: 'Product Not Found'});
    }
})

export default productRouter;