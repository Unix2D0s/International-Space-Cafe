import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [1, "Enter a valid first name!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [1, "Enter a valid last name!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email!"]
    },
    phone: {
        type: String,
        required: true,
        validate: [validator.isMobilePhone, "Provide a valid phone!"]
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

export const Reservation = mongoose.model("Reservation", reservationSchema);