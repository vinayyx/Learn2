import mongoose from "mongoose"


const contact = new mongoose.Schema({

    email: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});


export default mongoose.model("contact", contact)