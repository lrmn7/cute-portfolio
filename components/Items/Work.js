import React from 'react';

function Videos() {
  const videoLinks = [
    'https://www.youtube.com/embed/L71M1Jmprak',
    'https://www.youtube.com/embed/Q9dmkfMj4vg',
  ];

  return (
    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
      {videoLinks.map((link, index) => (
        <div key={index}>
          <iframe
            width='100%'
            height='auto'
            src={link}
            title={`Video ${index}`}
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default Videos;
