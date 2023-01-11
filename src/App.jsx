import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {Home, Search, VideoDetail, ChannelDetail, Navbar } from './components'

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }} className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<Search />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
