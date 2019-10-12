const router = require("express").Router()
const Products = require('../models/products.js')

router.get('/', (req, res) => {
    res.send('welcome to the api')
})

//gets products from database
router.get('/products', async (req, res) => {
    try {
        const products = await Products.find()
        res.json(products)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

module.exports = router;