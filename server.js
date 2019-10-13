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

// Products.create([
//     {
//         product_name: 'Mimosa',
//         galaxy: 'Milky Way',
//         product_desc: 'Mimosa is the 20th brightest star in the night sky and the 3rd brightest star in Crux based on the Hipparcos 2007 apparent magnitude',
//         base_price: 20,
//         img: 'mimosa.png'
//     },
//     {
//     product_name: 'Polaris',
//         galaxy: 'Milky Way',
//         product_desc: 'It is the brightest star in the constellation Ursa Minor. It is almost straight above Earth\'s North Pole.',
//         base_price: 20,
//         img: 'polaris.jpg'
//     },
//     {
//         product_name: 'Sirius',
//         galaxy: 'Milky Way',
//         product_desc: 'Sirius, also known as the Dog Star or Sirius A, is the brightest star in Earth\'s night sky. ',
//         base_price: 20,
//         img: 'sirius.jpg'
//     },
//     {
//         product_name: 'Rigel',
//         galaxy: 'Milky Way',
//         product_desc: "The beautiful blue-white star Rigel is in the constellation Orion the Hunter.",
//         base_price: 20,
//         img: "rigel.jpg"
//     }, 
//     {
//         product_name: 'Betelgeuse',
//         galaxy: 'Milky Way',
//         product_desc: "Betelgeuse is one of the largest known stars and is probably at least the size of the orbits of Mars or Jupiter around the sun. ",
//         base_price: 20,
//         img: "betelgeuse.jpg"
//     }, 
//     {
//         product_name: 'Vega',
//         galaxy: 'Milky Way',
//         product_desc: 'Vega is the brightest star in the northern constellation of Lyra.',
//         base_price: 20,
//         img: "vega.jpg"
//     }, 
//     {
//         product_name: 'Merope',
//         galaxy: 'Milky Way',
//         product_desc: "Merope, is one of the Pleiades or Seven Sisters, a group of stars on the shoulder of the Bull.",
//         base_price: 20,
//         img: 'merope.jpg'
//     }, 
//     {
//         product_name: 'Antares',
//         galaxy: 'Milky Way',
//         product_desc: 'Antares is a binary star system consisting of an enormous red supergiant and a smaller but hotter companion.',
//         base_price: 20,
//         img: 'antares.jpeg'
//     }, 
//     {
//         product_name: 'Canopus',
//         galaxy: 'Milky Way',
//         product_desc: 'Canopus is a bright star most easily visible in the Southern Hemisphere. It is in the constellation Carina, the keel. ',
//         base_price: 20,
//         img: 'canopus.png'
//     },
//     {
//         product_name: 'Albireo',
//         galaxy: 'Milky Way',
//         product_desc: 'This star deserves a lot of love, not the brightest star in the galaxy but unique for it\'s duality',
//         base_price: 20,
//         img: 'albireo.jpg'
//     }
// ])

//users
const User = require('./models/users.js')

// User.create([
//     {
//     username: 'arely_guevara',
//     full_name: 'Arely Guevara',
//     email: 'arelyguevara@outlook.com',
//     bids: ['5da2a030a1914582c6cb0077', '5da2a030a1914582c6cb0071', '5da2a030a1914582c6cb0072']
// },
// {   
//     username: 'lenny_dickey', 
//     full_name: 'Lenny Dickey',
//     email: 'lennydickey@gmail.com',
//     bids: ['5da2a030a1914582c6cb0077', '5da2a030a1914582c6cb0071', '5da2a030a1914582c6cb0072']
// },
// {
//     username: 'lucy_yang',
//     full_name: 'Lucy Yang',
//     email: 'lucyyang@yahoo.com',
//     bids: ['5da2a030a1914582c6cb0077', '5da2a030a1914582c6cb0071', '5da2a030a1914582c6cb0072']
// },
// {
//     username: 'skyler_stevens',
//     full_name: 'Skyler Stevens',
//     email: 'skylerstevens@bellsouth.net',
//      bids: ['5da2a030a1914582c6cb0077', '5da2a030a1914582c6cb0071', '5da2a030a1914582c6cb0072']
// }
// ])


const Bids= require('./models/bids.js')
// Bids.create([
//     {
//     amount: 40,
//     product: '5da2a030a1914582c6cb0077',
//     user: '5da2a0b94b37cc82ea6c4629'
//     },
//     {
//     amount: 45,
//     product: '5da2a030a1914582c6cb0077',
//     user: '5da2a0b94b37cc82ea6c462a'
//     },
// {
//         amount: 50,
//         product: '5da2a030a1914582c6cb0077',
//         user: '5da2a0b94b37cc82ea6c4627'
//         },
//     {
//             amount: 55,
//             product: '5da2a030a1914582c6cb0077',
//             user: '5da2a0b94b37cc82ea6c4628'
//             },
//     {
//     amount: 40,
//     product: '5da2a030a1914582c6cb0071',
//     user: '5da2a0b94b37cc82ea6c4629'
//     },
//     {
//     amount: 45,
//     product: '5da2a030a1914582c6cb0071',
//     user: '5da2a0b94b37cc82ea6c462a'
//     },
// {
//         amount: 50,
//         product: '5da2a030a1914582c6cb0071',
//         user: '5da2a0b94b37cc82ea6c4627'
//         },
//     {
//             amount: 55,
//             product: '5da2a030a1914582c6cb0071',
//             user: '5da2a0b94b37cc82ea6c4628'
//             },
//     {
//     amount: 40,
//     product: '5da2a030a1914582c6cb0072',
//     user: '5da2a0b94b37cc82ea6c4629'
//     },
//     {
//     amount: 45,
//     product: '5da2a030a1914582c6cb0072',
//     user: '5da2a0b94b37cc82ea6c462a'
//     },
// {
//         amount: 50,
//         product: '5da2a030a1914582c6cb0072',
//         user: '5da2a0b94b37cc82ea6c4627'
//         },
//     {
//             amount: 55,
//             product: '5da2a030a1914582c6cb0072',
//             user: '5da2a0b94b37cc82ea6c4628'
//             }
// ])

const StartBid = require('./models/startbid.js')
// StartBid.create([
//     {
//         start_time: '2019-10-5',
//         product: '5da2a030a1914582c6cb006e'
//     },
//     {
//         start_time: '2019-10-14',
//         product: '5da2a030a1914582c6cb006f'
//     },
//     {
//         start_time: '2019-10-18',
//         product: '5da2a030a1914582c6cb0070'
//     },
//     {
//         start_time: '2019-09-23',
//         product: '5da2a030a1914582c6cb0072'
//     },
//     {
//         start_time: '2019-09-27',
//         product: '5da2a030a1914582c6cb0073'
//     },
//     {
//         start_time: '2019-09-21',
//         product: '5da2a030a1914582c6cb0071'
//     },
//     {
//         start_time: '2019-10-21',
//         product: '5da2a030a1914582c6cb0074'
//     },
//     {
//         start_time: '2019-10-28',
//         product: '5da2a030a1914582c6cb0075'
//     },
//     {
//         start_time: '2019-11-12',
//         product: '5da2a030a1914582c6cb0077'
//     },
//     {
//         start_time: '2019-11-05',
//         product: '5da2a030a1914582c6cb0077'
//     } 
// ])

const EndBid = require('./models/endbid.js')
// EndBid.create([
//     {
//         start_time: '2019-10-5',
//         product: '5da2a030a1914582c6cb006e'
//     },
//     {
//         start_time: '2019-10-14',
//         product: '5da2a030a1914582c6cb006f'
//     },
//     {
//         start_time: '2019-10-18',
//         product: '5da2a030a1914582c6cb0070'
//     },
//     {
//         start_time: '2019-09-23',
//         product: '5da2a030a1914582c6cb0072'
//     },
//     {
//         start_time: '2019-09-27',
//         product: '5da2a030a1914582c6cb0073'
//     },
//     {
//         start_time: '2019-10-21',
//         product: '5da2a030a1914582c6cb0071'
//     },
//     {
//         start_time: '2019-10-21',
//         product: '5da2a030a1914582c6cb0074'
//     },
//     {
//         start_time: '2019-10-28',
//         product: '5da2a030a1914582c6cb0075'
//     },
//     {
//         start_time: '2019-11-12',
//         product: '5da2a030a1914582c6cb0077'
//     },
//     {
//         start_time: '2019-11-12',
//         product: '5da2a030a1914582c6cb0077'
//     } 
// ])



//this was an exercise in learning how to populate 
// User.find({})
// .populate('bids')
// .exec(function(err, p){
//     if(err) throw err;
//     p.forEach( bid => 
//         console.log(bid)
//     )
// })


//requires routes
const apiRoutes = require('./routes/apiRoutes.js')
app.use('/api', apiRoutes)

app.listen(port, console.log(`Server listening on port:${port}`))

module.exports = app;