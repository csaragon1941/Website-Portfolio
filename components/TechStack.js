import React from 'react';

const leftColumnData = [
  {
    title: 'Designer',
    content: [
      'It is not about grandiosity for me it is about the quiet satisfaction of blending innovation and aesthetics in a way that elevates every project to a new level. I take pride in the opportunity to contribute my skills, always eager to bring that special touch that enhances both user experience and the overall product.',
      'Java',
      'JavaScript',
      // ...other technical skills...
    ],
  },
  // You can add more data objects for additional columns
];

const middleColumnData = [
  {
    title: 'Design Skills',
    content: [
      'UI/UX Design',
      'Graphic Design',
      'Prototyping',
      // ...other design skills...
    ],
  },
  // You can add more data objects for additional columns
];

const rightColumnData = [
  {
    title: 'Soft Skills',
    content: [
      'Communication',
      'Problem Solving',
      'Time Management',
      // ...other soft skills...
    ],
  },
  // You can add more data objects for additional columns
];

const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

function ThreeColumnLayout() {
  return (
    <div className="flex justify-center items-center mx-20 my-20">
      <div className="grid grid-cols-3 gap-10">
        {leftColumnData.map((column, index) => (
          <div key={index} className="text-center" style={columnStyle}>
            <h2 className="text-xl font-semibold mb-4">{column.title}</h2>
            {column.content.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        ))}
        {middleColumnData.map((column, index) => (
          <div key={index} className="text-center" style={columnStyle}>
            <h2 className="text-xl font-semibold mb-4">{column.title}</h2>
            {column.content.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        ))}
        {rightColumnData.map((column, index) => (
          <div key={index} className="text-center" style={columnStyle}>
            <h2 className="text-xl font-semibold mb-4">{column.title}</h2>
            {column.content.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThreeColumnLayout;
