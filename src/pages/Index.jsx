import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Music Player App</Text>
        <Button as={Link} to="/record" colorScheme="teal">Record Audio</Button>
        <Button as={Link} to="/" colorScheme="teal">View Recordings</Button>
        <Button as={Link} to="/playlists" colorScheme="teal">Manage Playlists</Button>
      </VStack>
    </Container>
  );
};

export default Index;