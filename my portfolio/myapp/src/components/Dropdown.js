import React, { useState } from 'react';

import Na1 from "./image/_mxhit.captures-27-08-2023-0002.webp"

import Na2 from "./image/_mxhit.captures-27-08-2023-0004.webp"
import Na3 from "./image/_mxhit.captures-27-08-2023-0019.webp"
import Na4 from "./image/_mxhit.captures-27-08-2023-0011.webp"
import C1 from "./image/_mxhit.captures-27-08-2023-0025.webp"
import C2 from "./image/_mxhit.captures-27-08-2023-0010.webp"

const ImageGallery = () => {
  const [selectedOption, setSelectedOption] = useState('all_images');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  // Define image sets for each category
  const allImages = (
    <>
      <img src={Na1} alt="All Images" />
      <img src={Na2} alt="All Images" />
      <img src={Na3} alt="All Images" />
      <img src={Na4} alt="All Images" />
      <img src={C1} alt="All Images" />
      <img src={C2} alt="All Images" />
    </>
  );

  const natureImages = (
    <>
      <img src={Na1} alt="Nature Images" />
      <img src={Na2} alt="Nature Images" />
      <img src={Na3} alt="Nature Images" />
      <img src={Na4} alt="Nature Images" />
    </>
  );

  const commercialImages = (
    <>
      <img src={C1} alt="Commercial Images" />
      <img src={C2} alt="Commercial Images" />
      {/* Add more images for 'commercial_images' if needed */}
    </>
  );

  // Render the selected category
  return (
    <div>
      <div>
        <button onClick={() => handleOptionChange('all_images')}>All Images</button>
        <button onClick={() => handleOptionChange('nature_images')}>Nature Images</button>
        <button onClick={() => handleOptionChange('commercial_images')}>Commercial Images</button>
      </div>
      <div>
        {selectedOption === 'all_images' && allImages}
        {selectedOption === 'nature_images' && natureImages}
        {selectedOption === 'commercial_images' && commercialImages}
      </div>
    </div>
  );
};

export default ImageGallery;
