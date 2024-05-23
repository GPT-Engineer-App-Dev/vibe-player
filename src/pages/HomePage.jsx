import React, { useState, useEffect } from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';
import Recording from '../components/Recording';

const HomePage = () => {
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    const savedRecordings = JSON.parse(localStorage.getItem('recordings')) || [];
    setRecordings(savedRecordings);
  }, []);

  const handlePlay = (id) => {
    // Logic to play the recording
  };

  const handlePause = (id) => {
    // Logic to pause the recording
  };

  const handleDelete = (id) => {
    const updatedRecordings = recordings.filter(recording => recording.id !== id);
    setRecordings(updatedRecordings);
    localStorage.setItem('recordings', JSON.stringify(updatedRecordings));
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Recordings</Heading>
      <VStack spacing={4}>
        {recordings.map(recording => (
          <Recording
            key={recording.id}
            recording={recording}
            onPlay={handlePlay}
            onPause={handlePause}
            onDelete={handleDelete}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default HomePage;