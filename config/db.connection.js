import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost/toytracker-lab-dev"

const connectDB = async () => {
    const connection = await mongoose.connect(MONGODB_URI)
}

export default connectDB