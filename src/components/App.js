import React, { useState, useEffect } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch a random dog image when the component mounts
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.message); // Set the image URL from the API response
        setIsLoading(false); // Set loading to false
      })
      .catch((error) => console.error("Error fetching the dog image:", error));
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p> // Display loading text
      ) : (
        <img src={imageUrl} alt="A Random Dog" /> // Display the dog image
      )}
    </div>
  );
}

export default App;
