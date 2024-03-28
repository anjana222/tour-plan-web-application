import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cultureSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const culture = mongoose.model("culture", cultureSchema);

export default culture;