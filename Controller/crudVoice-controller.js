const VoiceRecording = require('../Modle/voiceRecording')

const RecordingList = async (req, res) => {
      try {
            const recordings = await VoiceRecording.find().sort('-createdAt');
            res.json(recordings);
      } catch (error) {
            res.status(500).json({ error: 'Failed to fetch the recordings' });
      }
}


const SaveRecordings = async (req, res) => {
      try {
            const { filename, path } = req.file;
            console.log("data", req.file)
            const newRecording = new VoiceRecording({ filename, path });
            await newRecording.save();
            res.status(200).json(newRecording);
      } catch (error) {
            res.status(500).json({ error: 'Failed to upload the recording' });
      }
};


const DeleteRecording = async (req, res) => {
      try {
            const { id } = req.params;

            const deletedRecording = await VoiceRecording.findByIdAndRemove(id);
            if (!deletedRecording) {
                  return res.status(404).json({ error: 'Recording not found' });
            }

            res.json(deletedRecording);
      } catch (error) {
            res.status(500).json({ error: 'Failed to delete the recording' });
      }
};


module.exports = { RecordingList, SaveRecordings, DeleteRecording };
