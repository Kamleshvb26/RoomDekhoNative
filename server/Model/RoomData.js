const mongoose = require('mongoose');


// Room Schema
const RoomSchema = new mongoose.Schema({
    houseName: { type: String, required: false },
    contactDetails: { type: String, required: false },
    ownerName: { type: String, required: false },
    description: { type: String },
    address: { type: String, required: false },
    imageUrls: [{ type: String }], // Store Cloudinary URLs or identifiers here
  });

const Room = mongoose.model('Room', RoomSchema);




module.exports = { Room };
