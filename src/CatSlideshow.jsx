import React, { useState, useEffect } from 'react';

const CatSlideshow = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Fetch a batch of 10 cat images when the component mounts
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error fetching cats:", err));
  }, []);

  // Handle the automatic slideshow timer
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          // Stop the slideshow if we reach the last image
          if (prevIndex === images.length - 1) {
            setIsPlaying(false);
            return prevIndex;
          }
          return prevIndex + 1;
        });
      }, 3000); // 3000 milliseconds, or 3 seconds
    }
    
    // Cleanup the timer on unmount or when isPlaying changes
    return () => clearInterval(timer);
  }, [isPlaying, images.length]);

  // Button control handlers
  const handleFirst = () => {
    setCurrentIndex(0);
    setIsPlaying(false);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setIsPlaying(false);
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
    setIsPlaying(false);
  };
  
  const handleEnd = () => {
    setCurrentIndex(images.length - 1);
    setIsPlaying(false);
  };
  
  const handlePlay = () => setIsPlaying(true);
  const handleStop = () => setIsPlaying(false);

  // Show a loading message until the API returns data
  if (images.length === 0) {
    return <div>Loading cats...</div>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Cat Slideshow</h2>
      
      <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
        <img 
          src={images[currentIndex].url} 
          alt={`Cat ${currentIndex + 1}`} 
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '15px' }}>
        <button onClick={handleFirst} disabled={currentIndex === 0}>First</button>
        <button onClick={handlePrev} disabled={currentIndex === 0}>Previous</button>
        <button onClick={handlePlay} disabled={isPlaying || currentIndex === images.length - 1}>Play</button>
        <button onClick={handleStop} disabled={!isPlaying}>Stop</button>
        <button onClick={handleNext} disabled={currentIndex === images.length - 1}>Next</button>
        <button onClick={handleEnd} disabled={currentIndex === images.length - 1}>End</button>
      </div>

      <p>Image {currentIndex + 1} of {images.length}</p>
    </div>
  );
};

export default CatSlideshow;