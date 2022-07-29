const mongoose = require('mongoose');

const roomSchema = mongoose.Schema(
   {
      name: { type: String, unique: true },
      // number: Number,
      bookings: [{ type: mongoose.Types.ObjectId, ref: 'Bookings' }],
   },
   { timestamps: true }
);

module.exports = mongoose.model('Rooms', roomSchema);
