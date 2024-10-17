import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faCss3Alt, faPhp, faJs, faGithubSquare, faFlutter } from '@fortawesome/free-brands-svg-icons';

const skills = [
  { name: 'React', icon: faReact, color: 'text-blue-600' },       // React - blue
  { name: 'CSS', icon: faCss3Alt, color: 'text-blue-400' },      // CSS - light blue
  { name: 'HTML', icon: faPhp, color: 'text-orange-500' },       // HTML - orange
  { name: 'JavaScript', icon: faJs, color: 'text-yellow-500' },   // JavaScript - yellow
  { name: 'GitHub', icon: faGithubSquare, color: 'text-gray-700' }, // GitHub - dark gray
  { name: 'Flutter', icon: faFlutter, color: 'text-blue-400' },   // Flutter - light blue
  // Puedes agregar Firebase y otras habilidades con colores aquí
];

export default function Skills() {
  return (
    <section className="bg-[#323234] py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Habilidades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`py-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 `}
            >
              <FontAwesomeIcon icon={skill.icon} className={`mx-auto mb-4 h-16 w-16 ${skill.color} `} />
              <h3 className="text-xl text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
