import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
    userid: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    movieid: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        required: true,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    text: {
        type: String,
        required: true
    },
    date:{
        type: Date
    }
},{
    timestamps: true
})

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;