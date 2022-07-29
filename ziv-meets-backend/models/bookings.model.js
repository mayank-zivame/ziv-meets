const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema(
   {
      startTime: Number,
      endTime: Number,
      bookedBy: { type: mongoose.Types.ObjectId, ref: 'Users' },
   },
   { timestamps: true }
);

module.exports = mongoose.model('Bookings', bookingSchema);
