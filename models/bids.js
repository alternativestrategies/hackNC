const mongoose = require('mongoose');
const Products = require('../models/products.js');
const Users = require('../models/users.js');

const Schema = mongoose.Schema;

const BidsSchema = new Schema({
    amount: Number,
    product: {type: Schema.Types.ObjectId, ref: 'Products'},
    user: {type: Schema.Types.ObjectId, ref: 'Users'}
})

module.exports = mongoose.model('Bids', BidsSchema);