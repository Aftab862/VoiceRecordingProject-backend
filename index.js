

const express = require('express');
const path = require('path');
const cors = require("cors");
const env = require("dotenv");
const connectDB = require("./Config/db");
env.config();
const crudVoiceRoutes = require("./Routes/crudVoice")
const app = express();
const port = process.env.PORT
app.use(cors({
      origin: '*',
      credentials: true,
}));

// MongoDb connecting
connectDB();


// Serve uploaded files

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Create a route to handle file uploads

app.use("/api", crudVoiceRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
