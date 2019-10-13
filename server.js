//import modules
const express = require('express')
const mongoose = require('mongoose');
const morgan = require('morgan')
require('dotenv').config()

const app = express();
const port = process.env.PORT || 4000;
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//create connection 
mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

//get default connection
let db = mongoose.connection;

//handles error and connections
db.on('err', console.error.bind(console, 'connection error: '))
db.once('open', () => console.log('connected to mongod database'))

//requires the model schema
const Products = require('./models/products.js')

//seeds database
Products.create([
    {
        product_name: 'Mimosa',
        galaxy: 'Milky Way',
        product_desc: 'Mimosa is the 20th brightest star in the night sky and the 3rd brightest star in Crux based on the Hipparcos 2007 apparent magnitude',
        base_price: 20,
        img: 'mimosa.png'
    },
    {
        product_name: 'Polaris',
        galaxy: 'Milky Way',
        product_desc: 'It is the brightest star in the constellation Ursa Minor. It is almost straight above Earth\'s North Pole.',
        base_price: 20,
        img: 'polaris.jpg'
    },
    {
        product_name: 'Sirius',
        galaxy: 'Milky Way',
        product_desc: 'Sirius, also known as the Dog Star or Sirius A, is the brightest star in Earth\'s night sky. ',
        base_price: 20,
        img: 'sirius.jpg'
    },
    {
        product_name: 'Rigel',
        galaxy: 'Milky Way',
        product_desc: "The beautiful blue-white star Rigel is in the constellation Orion the Hunter.",
        base_price: 20,
        img: "rigel.jpg"
    },
    {
        product_name: 'Betelgeuse',
        galaxy: 'Milky Way',
        product_desc: "Betelgeuse is one of the largest known stars and is probably at least the size of the orbits of Mars or Jupiter around the sun. ",
        base_price: 20,
        img: "betelgeuse.jpg"
    },
    {
        product_name: 'Vega',
        galaxy: 'Milky Way',
        product_desc: 'Vega is the brightest star in the northern constellation of Lyra.',
        base_price: 20,
        img: "vega.jpg"
    },
    {
        product_name: 'Merope',
        galaxy: 'Milky Way',
        product_desc: "Merope, is one of the Pleiades or Seven Sisters, a group of stars on the shoulder of the Bull.",
        base_price: 20,
        img: 'merope.jpg'
    },
    {
        product_name: 'Antares',
        galaxy: 'Milky Way',
        product_desc: 'Antares is a binary star system consisting of an enormous red supergiant and a smaller but hotter companion.',
        base_price: 20,
        img: 'antares.jpeg'
    },
    {
        product_name: 'Canopus',
        galaxy: 'Milky Way',
        product_desc: 'Canopus is a bright star most easily visible in the Southern Hemisphere. It is in the constellation Carina, the keel. ',
        base_price: 20,
        img: 'canopus.png'
    },
    {
        product_name: 'Albireo',
        galaxy: 'Milky Way',
        product_desc: 'This star deserves a lot of love, not the brightest star in the galaxy but unique for it\'s duality',
        base_price: 20,
        img: 'albireo.jpg'
    }
])

//requires routes
const apiRoutes = require('./routes/apiRoutes.js')
app.use('/api', apiRoutes)

app.listen(port, console.log(`Server listening on port:${port}`))

module.exports = app;
