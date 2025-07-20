import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => {

    try {

        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Data Base is successfully connnected")

    } catch (error) {

        console.error("DataBase is not connected", error)

    }


}


export default connectDB