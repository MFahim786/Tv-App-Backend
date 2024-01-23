import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://mfahimch:78678PPIred@cluster0.eviduti.mongodb.net/?retryWrites=true&w=majority`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB