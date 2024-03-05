import mongoose from "mongoose";

const connectdb = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb+srv://aayuskarki:aayuskarki@cluster0.wngidfy.mongodb.net/chatapp");
          
          
        console.log(`mongoDB connected success fully !!!!! db host:${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGO DB connection error", error);
        process.exit(1);
    }
}
export default connectdb