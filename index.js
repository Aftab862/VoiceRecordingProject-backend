// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const cors = require("cors");

// const env = require("dotenv");
// const connectDB = require("./Config/db");
// env.config();
// const app = express();
// const port =process.env.PORT
// const VoiceRecording= require('./Modle/voiceRecording')
// app.use(cors({
//       origin: '*',
//       credentials: true,
//     }));
    
// // MongoDb connecting
// connectDB();

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//       destination: './uploads',
//       filename: (req, file, cb) => {
//             cb(null, file.fieldname + '-' + Date.now() + ".WAV");
//       }
// });

// const upload = multer({ storage });

// // Create a route to handle file uploads
// app.post('/api/upload', upload.single('recording'), async (req, res) => {
//       try {
//             const { filename, path } = req.file;
//             const newRecording = new VoiceRecording({ filename, path });
//             await newRecording.save();
//             res.json(newRecording);
//       } catch (error) {
//             res.status(500).json({ error: 'Failed to upload the recording' });
//       }
// });

// // Create a route to fetch all recordings
// app.get('/api/recordings', async (req, res) => {
//       try {
//             const recordings = await VoiceRecording.find().sort('-createdAt');
//             res.json(recordings);
//       } catch (error) {
//             res.status(500).json({ error: 'Failed to fetch the recordings' });
//       }
// });

// // Start the server
// app.listen(port, () => console.log(`Server is running on port ${port}`));












const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require("cors");
const env = require("dotenv");
const connectDB = require("./Config/db");
env.config();
const crudVoiceRoutes = require("./Routes/crudVoice")
const app = express();
const port = process.env.PORT
// const VoiceRecording = require('./Modle/voiceRecording')
app.use(cors({
      origin: '*',
      credentials: true,
}));

// MongoDb connecting
connectDB();

// Configure multer for file uploads
// const storage = multer.diskStorage({
//       destination: './uploads',
//       filename: (req, file, cb) => {
//             cb(null, file.fieldname + '-' + Date.now() + ".WAV");
//       }
// });

// const upload = multer({ storage });

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Create a route to handle file uploads

app.use("/api", crudVoiceRoutes);



// app.post('/api/upload', upload.single('recording'), async (req, res) => {
//       try {
//             const { filename, path } = req.file;
//             console.log("data", req.file)
//             const newRecording = new VoiceRecording({ filename, path });
//             await newRecording.save();
//             res.json(newRecording);
//       } catch (error) {
//             res.status(500).json({ error: 'Failed to upload the recording' });
//       }
// });


// Create a route to fetch all recordings



// app.get('/api/recordings', async (req, res) => {
//       try {
//             const recordings = await VoiceRecording.find().sort('-createdAt');
//             res.json(recordings);
//       } catch (error) {
//             res.status(500).json({ error: 'Failed to fetch the recordings' });
//       }
// });

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
