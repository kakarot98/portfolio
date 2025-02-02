import React, { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import ExperienceModal from './ExperienceModal';
import { AnimatePresence } from 'framer-motion'

const experienceData = [
  {
    title: 'Software Engineer',
    company: 'Prudential Financial',
    position: 'Software Engineer',
    dates: 'Sep 2023 – Present',
    details: [
      'Engineered and optimized frontend pages fetching real-time stock prices every 5 seconds with asynchronous API calls using React Hooks in TypeScript, Material UI and DOM manipulation, making work efficient for Portfolio Managers by 40%',
      'Facilitated SCRUM ceremonies in Agile environment, achieving 76% sprint goal completion, which increased team productivity',
      'Constructed unit tests using Jest; performed comprehensive code and design reviews, boosting test coverage by 52%',
      'Monitored and improved code quality adhering to DRY principle across the React codebase with ESLint, improved overall codebase health and with 30% reduction in code review time',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Iksula',
    position: 'Software Engineer',
    dates: 'Jun 2021 – Aug 2022',
    details: [
      'Directed a team of 5 developers through the development lifecycle, delivered the project 6 days ahead, allowing extended testing',
      'Optimized JSON API handling using middleware Redux-saga and Redux-thunk, improving system performance by 15%',
      'Upgraded existing e-commerce components into mobile-friendly designs, improving user experience and page visits by 65%',
      'Implemented Server-Side Rendering in NextJS, reducing build time by 25% and slashing initial load time from 7 to 3 seconds',
      'Modeled and translated UI/UX designs to responsive user interfaces, with Tailwind for large-scale beauty and fashion e-commerce brands using React.js, with a 30% improvement in user engagement',
    ],
  },
  {
    title: 'Web Developer',
    company: 'MarketingPlus',
    position: 'Web Developer',
    dates: 'Oct 2019 – May 2021',
    details: [
      'Architected landing pages for small businesses using HTML5, CSS3, JavaScript, and ReactJS, boosting client online engagement',
      'Configured Node.js server-side application using CI/CD pipeline in GitHub Actions, detecting 40% more bugs in release cycles',
      'Partnered on 8 projects using Git and BitBucket, handled tickets using JIRA, ensuring seamless communication',
      'Formulated backend API endpoints using Python (Flask) to fetch all emails and polarity scores to get feedback visuals faster by 50%',
      'Performed rigorous unit testing with React Testing Library and hosted Next.js site on Vercel, reducing post-deployment bugs by 58%',
      'Coordinated cross-functional teams to develop class management application, achieving 90% usage increase in 2 months',
      'Customized ReactJS and Node.js web-app components, achieving a 20% increase in speed and bug-free performance',
      'Integrated React-router, Apollo Client for GraphQL and server endpoints in Express.js reducing RESTful API response time by 53%',
    ],
  },
  {
    title: 'Co-Founder, Technical Lead',
    company: 'Loonar Games',
    position: 'Co-Founder, Technical Lead',
    dates: 'May 2020 - Oct 2020',
    details: [
      'Co-founded a bootstrapped game development studio, defined Business Plans and Product Roadmap, leading the design and development of engaging mobile games with over 50,000+ downloads',
      'Incorporated Agile methodologies like SCRUM cycles and Kanban methodology, resulting in a 25% increase in efficiency',
      'Developed mobile games in Unity3D game engine using C# with Object Oriented Concepts (OOPs)',
      'Crafted visually appealing website under accessibility standards (WCAG) using MERN stack and MVC architecture and React Native in a Test-Driven Development environment suitable to the business case, leading to 75% user retention rate',
      'Conceptualized front-end architecture and led requirement gathering meetings with stakeholders, aligning project goals effectively and increased the downloads by 1000+ in first week',
    ],
  },
];

const Experience = () => {

  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedExperience(null);
    setIsModalOpen(false);
  };

  
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Professional Experience</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {experienceData.map((exp, index) => (
          <ExperienceCard
            key={index}
            experience={exp}
            onClick={() => handleCardClick(exp)}
            isModalOpen = {isModalOpen}
          />
        ))}
      </div>

<AnimatePresence>
      {isModalOpen && (
        <ExperienceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        experience={selectedExperience}
      />
      )}
      </AnimatePresence>
    </section>
  );
}

export default Experience