const router = require("express").Router()
const Products = require('../models/products.js')
const bcrypt = require('bcrypt')
const Joi = require('joi')

const validateUser = (user) => {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        user_name: Joi.string().min(5).max(300).require(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(user, schema)
}
const validate = (user) => {
    const schema = {
        user_name: Joi.string().min(5).max(300).require(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(user, schema)
}


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

router.get('/user/:username', async (req, res) => {
    const username = req.params.username
    try {
        const users = await Users.find({user_name: username})
        res.json(users)
    } catch(err) {
        res.status(500).json({message: err.message})
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
    const { error } = validateUser(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    let user = await user.findOne({email: req.body.email});
    if(user) return res.status(400).send('User already registered');

    user = new user({
        name: req.body.name,
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password
    })

    const salt = await bcrypt.salt(10)
    user.password = await bcrypt.hash(user.password, salt)

    await user.save()

    res.send(user)
})

router.post('/user/login', async (req, res) => {
    const { error } = validate(req.body)
    if(error) return res.status(400).send("Invalid username or password")
    
    let user = await User.findOne({user_name: req.body.user_name})
    if(!user) return res.status(400).send('Invalid email or password')

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) return res.status(400).send("Invalid username or password")

    res.send(true)
})

module.exports = router;