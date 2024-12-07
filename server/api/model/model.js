import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    dob: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },

});


const User = mongoose.model(
    "User",
    userSchema,
);



export { User };