const mongoose = require("mongoose");
const Url = "mongodb:aftab:123@ac-lpccfqq-shard-00-00.s863v4d.mongodb.net:27017,ac-lpccfqq-shard-00-01.s863v4d.mongodb.net:27017,ac-lpccfqq-shard-00-02.s863v4d.mongodb.net:27017/FypBackend?replicaSet=atlas-7pi1cf-shard-0&ssl=true&authSource=admin";
const connectDB = async () => {
      console.log("mongoose url", Url);
      try {
            const conn = await mongoose.connect(Url, {
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
