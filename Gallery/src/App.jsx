import React, { useState } from "react";

const App = () => {
  // Define an array of image URLs
  const images = [
    "https://www.lpu.in/lpu-assets/images/admissions/hero-frame.jpg",
    "https://assets.entrepreneur.com/article/1437140897_3.jpg",
    "https://th-i.thgim.com/public/incoming/6os1a9/article65592232.ece/alternates/FREE_1200/lpu1.png",
  ];

  // State to track the index of the currently displayed image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle changing the current image
  const changeImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="gallery">
        {/* Map over the images array and render each image */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={index === currentIndex ? "active" : ""}
            onClick={() => changeImage(index)}
          />
        ))}
      </div>
      <div className="current-image">
        {/* Display the currently selected image */}
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>
    </div>
  );
};

export default App;
