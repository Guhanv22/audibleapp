// import { useEffect, useState } from 'react';
// import './layout.css'; // Make sure to import styles for the layout

// const Layout = () => {
//   const [audios, setAudios] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:8080/api/audio') // Adjust URL if needed
//       .then(response => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch audio data");
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log("Fetched Audio Data:", data);
//         setAudios(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching audios:', error);
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar */}
//       <nav className="bg-blue-600 text-white p-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center"> 
//           <h1 className="text-xl font-bold">Vocal Haven</h1>
//           <ul className="flex space-x-4">
//             <li><a href="/" className="hover:underline">Home</a></li>
//             <li><a href="/about" className="hover:underline">About</a></li>
//             <li><a href="/contact" className="hover:underline">Contact</a></li>
//           </ul>
//         </div>
//       </nav>
      
//       {/* Main Content */}
//       <main className="flex-grow container mx-auto p-4">
//         {/* Home Content */}
//         <div className="home-container">
//           <h2 className="title">🎵 Audio Library</h2>

//           {loading && <p>Loading audios...</p>}
//           {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//           <ul className="audio-list">
//             {audios.length > 0 ? (
//               audios.map(audio => (
//                 <li key={audio.audioId} className="audio-item">
//                   <h3>{audio.title}</h3>
//                   <p><strong>Release Date:</strong> {new Date(audio.releaseDate).toDateString()}</p>
//                   <p><strong>Rating:</strong> ⭐ {audio.rating}</p>
//                   <p><strong>Language ID:</strong> {audio.languageId}</p>
//                   <p><strong>Audiocast ID:</strong> {audio.audiocastId}</p>
//                 </li>
//               ))
//             ) : (
//               <p>No audio records found.</p>
//             )}
//           </ul>
//         </div>
//       </main>
      
//       {/* Bottom Navigation */}
//       <footer className="bg-gray-800 text-white text-center p-4 fixed bottom-0 w-full">
//         <div className="container mx-auto flex justify-around">
//           <a href="/Favourites" className="hover:underline flex flex-col items-center">
//             <img src="/heart-icon.png" alt="Heart" className="w-6 h-6" />
//             <span>Favourites</span>
//           </a>
//           <a href="/Playlist" className="hover:underline">Playlist</a>
//           <a href="/History" className="hover:underline">History</a>
//         </div>
//       </footer>
//     </div>
//   );
// };

//export default Layout;
// import { useEffect, useState } from 'react';
// import './layout.css'; // Make sure to import styles for the layout

// const Layout = () => {
//   const [audios, setAudios] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState(''); // State to store search query

//   useEffect(() => {
//     fetch('http://localhost:8080/api/audio') // Adjust URL if needed
//       .then(response => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch audio data");
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log("Fetched Audio Data:", data);
//         setAudios(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching audios:', error);
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   // Filter audios based on the search query
//   const filteredAudios = audios.filter(audio =>
//     audio.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     audio.languageId.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     audio.audiocastId.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar */}
//       <nav className="bg-blue-600 text-white p-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center"> 
//           <h1 className="text-xl font-bold">Vocal Haven</h1>
//           <ul className="flex space-x-4">
//             <li><a href="/" className="hover:underline">Home</a></li>
//             <li><a href="/about" className="hover:underline">About</a></li>
//             <li><a href="/contact" className="hover:underline">Contact</a></li>
//           </ul>
//         </div>
//       </nav>
      
//       {/* Main Content */}
//       <main className="flex-grow container mx-auto p-4">
//         {/* Home Content */}
//         <div className="home-container">
//           <h2 className="title">🎵 Audio Library</h2>

//           {/* Search Bar */}
//           <div className="search-container mb-4">
//             <input
//               type="text"
//               placeholder="Search audio..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>

//           {loading && <p>Loading audios...</p>}
//           {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//           <ul className="audio-list">
//             {filteredAudios.length > 0 ? (
//               filteredAudios.map(audio => (
//                 <li key={audio.audioId} className="audio-item">
//                   <h3>{audio.title}</h3>
//                   <p><strong>Release Date:</strong> {new Date(audio.releaseDate).toDateString()}</p>
//                   <p><strong>Rating:</strong> ⭐ {audio.rating}</p>
//                   <p><strong>Language ID:</strong> {audio.languageId}</p>
//                   <p><strong>Audiocast ID:</strong> {audio.audiocastId}</p>
//                 </li>
//               ))
//             ) : (
//               <p>No audio records found.</p>
//             )}
//           </ul>
//         </div>
//       </main>
      
//       {/* Bottom Navigation */}
//       <footer className="bg-gray-800 text-white text-center p-4 fixed bottom-0 w-full">
//         <div className="container mx-auto flex justify-around">
//           <a href="/Favourites" className="hover:underline flex flex-col items-center">
//             <img src="/heart-icon.png" alt="Heart" className="w-6 h-6" />
//             <span>Favourites</span>
//           </a>
//           <a href="/Playlist" className="hover:underline">Playlist</a>
//           <a href="/History" className="hover:underline">History</a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Layout;

// import { useEffect, useState } from 'react';
// import './layout.css'; // Make sure to import styles for the layout

// const Layout = () => {
//   const [audios, setAudios] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState(''); // State to store search query

//   useEffect(() => {
//     fetch('http://localhost:8080/api/audio') // Adjust URL if needed
//       .then(response => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch audio data");
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log("Fetched Audio Data:", data);
//         setAudios(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching audios:', error);
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   // Filter audios based on the search query
//   const filteredAudios = audios.filter(audio =>
//     audio.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     audio.languageId.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     audio.audiocastId.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar with Search Bar */}
//       <nav className="bg-blue-600 text-white p-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center"> 
//           <h1 className="text-xl font-bold">Vocal Haven</h1>
          
//           {/* Search Bar inside Navbar */}
//           <div className="search-container flex-grow ml-4">
//             <input
//               type="text"
//               placeholder="Search audio..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>

//           <ul className="flex space-x-4">
//             <li><a href="/" className="hover:underline">Home</a></li>
//             <li><a href="/about" className="hover:underline">About</a></li>
//             <li><a href="/contact" className="hover:underline">Contact</a></li>
//           </ul>
//         </div>
//       </nav>
      
//       {/* Main Content */}
//       <main className="flex-grow container mx-auto p-4">
//         {/* Home Content */}
//         <div className="home-container">
//           <h2 className="title">🎵 Audio Library</h2>

//           {loading && <p>Loading audios...</p>}
//           {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//           <ul className="audio-list">
//             {filteredAudios.length > 0 ? (
//               filteredAudios.map(audio => (
//                 <li key={audio.audioId} className="audio-item">
//                   <h3>{audio.title}</h3>
//                   <p><strong>Release Date:</strong> {new Date(audio.releaseDate).toDateString()}</p>
//                   <p><strong>Rating:</strong> ⭐ {audio.rating}</p>
//                   <p><strong>Language ID:</strong> {audio.languageId}</p>
//                   <p><strong>Audiocast ID:</strong> {audio.audiocastId}</p>
//                 </li>
//               ))
//             ) : (
//               <p>No audio records found.</p>
//             )}
//           </ul>
//         </div>
//       </main>
      
//       {/* Bottom Navigation */}
//       <footer className="bg-gray-800 text-white text-center p-4 fixed bottom-0 w-full">
//         <div className="container mx-auto flex justify-around">
//           <a href="/Favourites" className="hover:underline flex flex-col items-center">
//             <img src="/heart-icon.png" alt="Heart" className="w-6 h-6" />
//             <span>Favourites</span>
//           </a>
//           <a href="/Playlist" className="hover:underline">Playlist</a>
//           <a href="/History" className="hover:underline">History</a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// // export default Layout;
// import { useEffect, useState } from 'react';
// import './layout.css'; // Make sure to import styles for the layout

// const Layout = () => {
//   const [audios, setAudios] = useState([]); // All audio data
//   const [filteredAudios, setFilteredAudios] = useState([]); // Filtered audio data based on search
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState(''); // State to store search query

//   useEffect(() => {
//     fetch('http://localhost:8080/api/audio') // Adjust URL if needed
//       .then(response => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch audio data");
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log("Fetched Audio Data:", data);
//         setAudios(data);
//         setFilteredAudios(data); // Initially set filtered audios to all audios
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching audios:', error);
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   // Filter audios based on the search query
//   useEffect(() => {
//     if (searchQuery.trim() === '') {
//       setFilteredAudios(audios); // If search is empty, show all audios
//     } else {
//       const results = audios.filter(audio =>
//         audio.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         audio.languageId.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         audio.audiocastId.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredAudios(results); // Set filtered results based on the search query
//     }
//   }, [searchQuery, audios]); // Re-run the filter whenever search query or audios change

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navbar with Search Bar */}
//       <nav className="bg-blue-600 text-white p-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center"> 
//           <h1 className="text-xl font-bold">Vocal Haven</h1>
          
//           {/* Search Bar inside Navbar */}
//           <div className="search-container flex-grow ml-4">
//             <input
//               type="text"
//               placeholder="Search audio..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>

//           <ul className="flex space-x-4">
//             <li><a href="/" className="hover:underline">Home</a></li>
//             <li><a href="/about" className="hover:underline">About</a></li>
//             <li><a href="/contact" className="hover:underline">Contact</a></li>
//           </ul>
//         </div>
//       </nav>
      
//       {/* Main Content */}
//       <main className="flex-grow container mx-auto p-4">
//         {/* Home Content */}
//         <div className="home-container">
//           <h2 className="title">🎵 Audio Library</h2>

//           {loading && <p>Loading audios...</p>}
//           {error && <p style={{ color: 'red' }}>Error: {error}</p>}

//           <ul className="audio-list">
//             {filteredAudios.length > 0 ? (
//               filteredAudios.map(audio => (
//                 <li key={audio.audioId} className="audio-item">
//                   <h3>{audio.title}</h3>
//                   <p><strong>Release Date:</strong> {new Date(audio.releaseDate).toDateString()}</p>
//                   <p><strong>Rating:</strong> ⭐ {audio.rating}</p>
//                   <p><strong>Language ID:</strong> {audio.languageId}</p>
//                   <p><strong>Audiocast ID:</strong> {audio.audiocastId}</p>
//                 </li>
//               ))
//             ) : (
//               <p>No audio records found.</p>
//             )}
//           </ul>
//         </div>
//       </main>
      
//       {/* Bottom Navigation */}
//       <footer className="bg-gray-800 text-white text-center p-4 fixed bottom-0 w-full">
//         <div className="container mx-auto flex justify-around">
//           <a href="/Favourites" className="hover:underline flex flex-col items-center">
//             <img src="/heart-icon.png" alt="Heart" className="w-6 h-6" />
//             <span>Favourites</span>
//           </a>
//           <a href="/Playlist" className="hover:underline">Playlist</a>
//           <a href="/History" className="hover:underline">History</a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Layout;
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, ShoppingCart } from 'lucide-react'; // Importing icons
import './layout.css'; // Ensure styles are applied

const Layout = () => {
  const [audios, setAudios] = useState([]); // All audio data
  const [filteredAudios, setFilteredAudios] = useState([]); // Filtered data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // Search state

  const navigate = useNavigate(); // Hook for navigation

  // Fetch all audios initially
  useEffect(() => {
    fetch('http://localhost:8080/api/audio') // Adjust API URL if needed
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch audio data");
        return response.json();
      })
      .then(data => {
        setAudios(data);
        setFilteredAudios(data); // Initially, show all audios
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Filter audios based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredAudios(audios); // Show all if search is empty
    } else {
      fetch(`http://localhost:8080/api/audio/search?query=${searchQuery}`)
        .then(response => response.json())
        .then(data => setFilteredAudios(data))
        .catch(error => console.error('Error fetching filtered audios:', error));
    }
  }, [searchQuery, audios]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar with Search Bar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center"> 
          <h1 className="text-xl font-bold">Vocal Haven</h1>
          
          {/* Search Bar */}
          <div className="search-container flex-grow ml-4">
            <input
              type="text"
              placeholder="Search audio by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <div className="home-container">
          <h2 className="title">🎵 Recently Added</h2>

          {loading && <p>Loading audios...</p>}
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}

          <div className="audio-cards flex flex-wrap gap-4 justify-start">
            {filteredAudios.length > 0 ? (
              filteredAudios.map(audio => (
                <div key={audio.audioId} className="audio-card bg-white shadow-md rounded-md p-4 w-80 flex flex-col justify-between">
                  <img 
                    src={audio.imageUrl || '/default-image.jpg'} 
                    alt={audio.title} 
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold">{audio.title}</h3>
                  <p><strong>Order ID:</strong> {audio.orderId}</p>
                  <p><strong>Release Date:</strong> {new Date(audio.releaseDate).toDateString()}</p>
                  <p><strong>Rating:</strong> ⭐ {audio.rating}</p>

                  {/* Icons Section - Always at Bottom */}
                  <div className="flex justify-between items-center mt-4 p-2 bg-gray-100 rounded-md">
                    {/* View Icon */}
                    <button 
                      className="icon-button flex items-center space-x-1"
                      onClick={() => navigate(`/audio/${audio.audioId}`)}
                    >
                      <Eye size={20} className="text-blue-600 hover:text-blue-800" />
                      <span className="text-sm text-gray-700">View</span>
                    </button>

                    {/* Buy Icon */}
                    <button 
                      className="icon-button flex items-center space-x-1"
                      onClick={() => navigate(`/order/${audio.orderId}`)}
                    >
                      <ShoppingCart size={20} className="text-green-600 hover:text-green-800" />
                      <span className="text-sm text-gray-700">Buy</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No audio records found.</p>
            )}
          </div>
        </div>
      </main>
      
      {/* Bottom Navigation */}
      <footer className="bg-gray-800 text-white text-center p-4 fixed bottom-0 w-full">
        <div className="container mx-auto flex justify-around">
          <a href="/Favourites" className="hover:underline flex flex-col items-center">
            <img src="/heart-icon.png" alt="Heart" className="w-6 h-6" />
            <span>Favourites</span>
          </a>
          <a href="/Playlist" className="hover:underline">Playlist</a>
          <a href="/History" className="hover:underline">History</a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
