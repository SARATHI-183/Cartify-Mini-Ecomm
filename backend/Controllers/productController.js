const ProductModel = require('../Models/productModel')

exports.getProduct =  async ( req, res, next) => {

    const query = req.query.keyword?{
        name : {
            $regex : req.query.keyword,
            $options : 'i'
        }
    }:{}


    const products = await ProductModel.find(query);

    res.json(
        {
            success : true,
            products
        }
    )
}


exports.getSingleProduct =  async ( req, res, next) => {

    try {
        const product = await ProductModel.findById( req.params.id );

        res.status(200).json({
            success : true,
            product
        });
    } catch (error) {

        res.status(404).json({
            success: false,
            message: "Unable to get the product with that ID"
        });
    }
    
}