import React from 'react'
import Card from './Card'

const educationData = [
  {
    institution: 'New Jersey Institute of Technology',
    degree: 'Master’s in Science, Information Systems',
    duration: 'Sep 2022 – May 2024',
    coursework: [
      'Web Development',
      'System Design & Analysis',
      'Software Design and Production Methodology',
      'Software Project Management',
    ],
  },
  {
    institution: 'University of Mumbai',
    degree: 'Bachelor’s in Engineering, Information Technology',
    duration: 'Aug 2016 – Jun 2020',
    coursework: [
      'Computer Science',
      'Database Management',
      'Object Oriented Programming',
      'Web Systems',
      'Mobile Development',
    ],
  },
];

const Education = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Education</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu, index) => (
          <Card
            key={index}
            institution={edu.institution}
            degree={edu.degree}
            duration={edu.duration}
            coursework={edu.coursework}
          />
        ))}
      </div>
    </section>
  );
}

export default Education