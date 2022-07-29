const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
   {
      name: String,
      user_id: { type: String, unique: true },
      //   access_level: Number,
      //   // 0: allow booking meets and cancelling all
      //   // 1: allow booking meets and cancelling only booked by user
      //   // 2: only view booked meets
   },
   { timestamps: true }
);

module.exports = mongoose.model('Users', userSchema);
