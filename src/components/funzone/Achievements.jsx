import React from 'react';

const Achievements = ({ achievements }) => {
  return (
    <div className="bg-slate-900 max-w-fit rounded-lg mt-20 p-4 shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-4">Some of my achievements: </h3>
      <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
        {achievements.map((achievement, index) => (
          <li key={index} className='p-1'>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
