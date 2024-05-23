import React, { useState } from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';

const RecordPage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);

  const handleStartRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (event) => {
      setAudioChunks((prev) => [...prev, event.data]);
    };
    recorder.start();
    setMediaRecorder(recorder);
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    mediaRecorder.stop();
    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
      const audioUrl = URL.createObjectURL(audioBlob);
      const recordings = JSON.parse(localStorage.getItem('recordings')) || [];
      const newRecording = {
        id: Date.now(),
        name: `Recording ${recordings.length + 1}`,
        url: audioUrl,
      };
      recordings.push(newRecording);
      localStorage.setItem('recordings', JSON.stringify(recordings));
      setAudioChunks([]);
    };
    setIsRecording(false);
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Record Audio</Heading>
      <Button onClick={isRecording ? handleStopRecording : handleStartRecording} colorScheme={isRecording ? 'red' : 'green'}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </Button>
    </Box>
  );
};

export default RecordPage;