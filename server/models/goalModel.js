import { current } from "@reduxjs/toolkit";
import mongoose from "mongoose";


const goalSchema = mongoose.Scgema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    title: {
        type : String,
        require: true
    },
    targetAmount: {
        type: Number,
        require: true
    },
    monthlySaving : {
        type: Number,
        require: true
    },
    currentAmount: {
        type: Number,
        default: 0
    }
},{
    timestamps: true
})

export default mongoose.model("Goal", goalSchema)