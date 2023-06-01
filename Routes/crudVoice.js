const express = require("express");
const CrudVoiceController = require("../Controller/crudVoice-controller");
const router = express.Router();
const upload = require("../Middleware/voiceUpload");

router.post("/upload", upload.single('recording'), CrudVoiceController.SaveRecordings);

router.get("/recordings", CrudVoiceController.RecordingList);

router.delete("/delete/:id", CrudVoiceController.DeleteRecording)

module.exports = router;

