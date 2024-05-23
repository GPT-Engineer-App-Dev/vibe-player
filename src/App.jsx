import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import RecordPage from "./pages/RecordPage.jsx";
import PlaylistsPage from "./pages/PlaylistsPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/record" element={<RecordPage />} />
        <Route path="/playlists" element={<PlaylistsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
