import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const Recording = ({ recording, onPlay, onPause, onDelete }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
      <Text fontSize="lg">{recording.name}</Text>
      <Button onClick={() => onPlay(recording.id)} mr={2}>Play</Button>
      <Button onClick={() => onPause(recording.id)} mr={2}>Pause</Button>
      <Button onClick={() => onDelete(recording.id)} colorScheme="red">Delete</Button>
    </Box>
  );
};

export default Recording;