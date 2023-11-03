import React, { useState } from 'react';
import './App.css';
import { fetchUniversityReviews } from './api';


function App() {
  const [universityName, setUniversityName] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleSearch = async () => {
      if (!universityName) {
          alert('Please enter a university name');
          return;
      }
      const reviewsData = await fetchUniversityReviews(universityName);
      setReviews(reviewsData);
  };

    return (
      <div className="App">
        <header className="App-header">
          <input
              value={universityName}
              onChange={(e) => setUniversityName(e.target.value)}
              placeholder="Enter University Name"
          />
          <button onClick={handleSearch}>Search</button>
        </header>
        <main>
          {reviews.map((review, index) => (
              <div key={index}>
                {/* Display your review data here */}
                <p>{review.text}</p>
              </div>
          ))}
        </main>
      </div>
  );
}

export default App;
