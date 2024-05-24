import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Get the MongoDB connection string from environment variables
    const mongoUri = process.env.MONGO_URI;

    // Connect to the MongoDB database
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
