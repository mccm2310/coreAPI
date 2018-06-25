const mongoose = require('mongoose');
const { Schema } = mongoose;

const hotelSchema = new Schema({
    id: String,
    name: String,
    stars: Number,
    price: Number,
    image: String,
    amenities: Array,
    createdAt: { type: Date, default: Date.now }
});

mongoose.model('Hotel', hotelSchema);
