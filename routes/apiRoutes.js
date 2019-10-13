const router = require("express").Router()
const Products = require('../models/products.js')
const bcrypt = require('bcrypt')
const joi = require('joi')



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

router.get('/products/filter/:galaxy', async (req, res) => {
    const galaxy = req.params.galaxy;
    const ANY = "any";
    if(galaxy !== ANY){
        try {
            const products = await Products.find({galaxy: `${galaxy}`})
            res.json(products)
        }catch(err){
            res.status(500).json({message: err.message})
        }
    }
})

router.put('/products/bid', async (req, res) => {
    const newbid = req.body.bid;
    const id = req.body.id
    try{
        const products = await Bid.update({_id: id}, {$max: {bid: newbid}})
    }catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.post('/user/signup', async (req, res) => {
    let user = await user.findOne({email: req.body.email});
    if(user) return res.status(400).send('User already registered');

    user = new user({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    await user.save()

    res.send(user)
})

module.exports = router;