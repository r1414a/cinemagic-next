import mongoose from "mongoose";

const theaterSchema = new mongoose.Schema({
    location: {
        address: {
            street: String,
            city: String,
            state: String,
            zipcode: String
        },
        geo: {
            type: {
                type: String,
                enum: ["Point"],
                required: true,
                default: "Point"
            },
            coordinates: {
                type: [Number], // [longitude, latitude]
                required: true,
                validate: {
                    validator: function (val) {
                        return val.length === 2;
                    },
                    message: "Geo coordinates must be [longitude, latitude]"
                }
            }
        }
    }
},
    {
        timestamps: true
    })

const Theater = mongoose.model("Theater", theaterSchema);

export default Theater;