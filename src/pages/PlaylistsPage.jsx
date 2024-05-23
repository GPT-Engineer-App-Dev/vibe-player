import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, Input, VStack, Text } from '@chakra-ui/react';

const PlaylistsPage = () => {
  const [playlists, setPlaylists] = useState([]);
  const [newPlaylistName, setNewPlaylistName] = useState('');

  useEffect(() => {
    const savedPlaylists = JSON.parse(localStorage.getItem('playlists')) || [];
    setPlaylists(savedPlaylists);
  }, []);

  const handleCreatePlaylist = () => {
    const newPlaylist = {
      id: Date.now(),
      name: newPlaylistName,
      recordings: [],
    };
    const updatedPlaylists = [...playlists, newPlaylist];
    setPlaylists(updatedPlaylists);
    localStorage.setItem('playlists', JSON.stringify(updatedPlaylists));
    setNewPlaylistName('');
  };

  const handleDeletePlaylist = (id) => {
    const updatedPlaylists = playlists.filter(playlist => playlist.id !== id);
    setPlaylists(updatedPlaylists);
    localStorage.setItem('playlists', JSON.stringify(updatedPlaylists));
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Playlists</Heading>
      <VStack spacing={4}>
        <Box>
          <Input
            placeholder="New Playlist Name"
            value={newPlaylistName}
            onChange={(e) => setNewPlaylistName(e.target.value)}
            mb={2}
          />
          <Button onClick={handleCreatePlaylist} colorScheme="blue">Create Playlist</Button>
        </Box>
        {playlists.map(playlist => (
          <Box key={playlist.id} borderWidth="1px" borderRadius="lg" p={4} mb={4}>
            <Text fontSize="lg">{playlist.name}</Text>
            <Button onClick={() => handleDeletePlaylist(playlist.id)} colorScheme="red">Delete</Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default PlaylistsPage;