// src/components/Skills.jsx

import React from 'react';

const Skills = () => {
  return (
    <section className="py-8 px-4">
     
      <h2 className="text-2xl font-bold mb-6 text-center flex justify-center items-center">
        🛠 Tech Stack
      </h2>

     
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Languages & Frameworks */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Languages & Frameworks</h3>
          <img
            src="https://skillicons.dev/icons?i=py,js,html,css,cs,react,nodejs,nextjs,express"
            alt="Languages & Frameworks"
            className="w-full h-auto"
          />
        </div>

     
        {/* <div>
          <h3 className="text-xl font-semibold mb-4">Databases</h3>
          <img
            src="https://skillicons.dev/icons?i=mysql,mongodb"
            alt="Databases"
            className="w-full h-auto"
          />
        </div> */}

       
        <div>
          <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
          <img
            src="https://skillicons.dev/icons?i=redux,unity,git,bitbucket,docker,flask,heroku,postman,blender,vscode,mysql,mongodb"
            alt="Tools & Technologies"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
