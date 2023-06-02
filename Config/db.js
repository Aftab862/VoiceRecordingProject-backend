const mongoose = require("mongoose");
const connectDB = async () => {
      console.log("mongoose url", process.env.Url);
      try {
            const conn = await mongoose.connect(process.env.Url, {
                  useUnifiedTopology: true,
                  useNewUrlParser: true,
            });

            console.log(`MongoDB Connected: ${conn.connection.host}`);
      } catch (error) {
            console.error(`Error: ${error.message}`);
            process.exit(1);
      }
};

module.exports = connectDB;
