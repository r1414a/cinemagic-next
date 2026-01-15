import mongoose from "mongoose";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[a-zA-Z\\d!@#$%^&*]{8,}$/

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        minLength: [3, 'Must contain atleast 3 letters.'],
        maxLength: [50, 'Max 50 characters are allowed.'],
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase:true,
        required: true,
    },
    // password: {
    //     type: String,
    //     trim: true,
    //     required: true,
    //     validate: {
    //         validator: function(v){
    //             return passwordRegex.test(v)
    //         },
    //         message: props => `${props.value} is not a valid password! Requirements:
    //     - Must be at least 8 characters long
    //     - Must contain at least one uppercase letter
    //     - Must contain at least one lowercase letter
    //     - Must contain at least one number
    //     - Must contain at least one symbol (!@#$%^&*)`
    //     }
    // },
    role: {
        type: String,
        enum: ["admin","user"],
        default: "user",
        required: true
    }
},{
    timestamps: true
})

const User = mongoose.model("User", userSchema);

export default User;