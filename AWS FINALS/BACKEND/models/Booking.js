const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    movie: String,
    seats: [Number],
    totalPrice: Number
});

module.exports = mongoose.model("Booking", bookingSchema);
