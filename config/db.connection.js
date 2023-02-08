import mongoose from 'mongoose'

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGODB_URI)
  console.log('Connect to Mongo! Database: ', mongoose.connections[0].name)
}

export default connectDB