import mongoose from "mongoose";

const postSchema = mongoose.Schema;

const newBooking = new postSchema({
    guideID: {
        type: String,
        
    },

    userID:{
        type: String,
        required: true
    },

    guideName: {
        type: String,
        
    },

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String
    },

});

const booking = mongoose.model('booking', newBooking);

export default booking;