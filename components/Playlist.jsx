import  { useState, useEffect } from "react";
import "./Playlist.css";


const Playlist = () => {
  const [playlists, setPlaylists] = useState([]);
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState(""); // Assuming user ID is required

  // Fetch all playlists from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/playlist")
      .then((response) => response.json())
      .then((data) => setPlaylists(data))
      .catch((error) => console.error("Error fetching playlists:", error));
  }, []);

  // Function to add a new playlist
  const addPlaylist = async (e) => {
    e.preventDefault();
    
    const newPlaylist = {
      title: title,
      user: { id: userId }, // Assuming user ID is required
    };

    try {
      const response = await fetch("http://localhost:8080/api/playlist/addPlaylistDetails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPlaylist),
      });

      if (response.ok) {
        const addedPlaylist = await response.json();
        setPlaylists([...playlists, addedPlaylist]); // Update state
        setTitle("");
        setUserId("");
      } else {
        console.error("Failed to add playlist");
      }
    } catch (error) {
      console.error("Error adding playlist:", error);
    }
  };

  return (
    <div className="container">
      <h2>Playlists</h2>
      
      {/* Add Playlist Form */}
      <form onSubmit={addPlaylist}>
        <input
          type="text"
          placeholder="Playlist Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <button type="submit">Add Playlist</button>
      </form>

      {/* Display Playlists */}
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.playlistid}>
            <strong>{playlist.title}</strong> (User ID: {playlist.user.id})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
