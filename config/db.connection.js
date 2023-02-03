import mongoose from "mongoose";

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGODB_URI)
    console.log('Conectado ao mongo. Database name: ', connection.connections[0].name)
}

export default connectDB