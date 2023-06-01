const mongoose = require('mongoose');

const voiceRecordingSchema = new mongoose.Schema({
      filename: String,
      path: String,
      createdAt: { type: Date, default: Date.now }
    });
    
    module.exports = mongoose.model('VoiceRecording', voiceRecordingSchema);
    
    