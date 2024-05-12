import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter'; // Asegúrate de importar correctamente Cursor desde 'react-simple-typewriter'

export function Home() {
  const [text]   = useTypewriter({
    words: ['Full Stack Developer', 'Software Architect', 'UI/UX Designer', 'Problem Solver','Continuous Learner', 'Efficient Coder'],
    loop: true,
    typeSpeed: 20,
  });

  const URL_CV =
    "https://drive.google.com/uc?export=download&id=1AoEZpzjodozG2a4CSNDIixb8Nd_xiEpI";

  const handleDescargarCV = () => {
    // Simplemente redirecciona al usuario a la URL de descarga del CV
    window.location.href = URL_CV;
  };

  return (
    <div id="home" className="home">
      <section className="home__content">
        <div className="home__presentation">
          <span className="home__greetings">Hello, I'm</span><br />
          <span className="home_firstLastName">Yosh Escorcia</span><br />
          <span className="home__selftDescription">And I'm a <span className="home__selftDescription--colored">{text}</span><Cursor/> </span>
          <p className="home__summary">
            "Solid experience in mobile and web software project management,
            specializing in Flutter, React and Next.js. I enjoy facing
            challenges in front-end and back-end, always looking to improve. For
            me, development is functional art that enhances the user
            experience."
          </p>
          <button className="home__button"><a href={URL_CV} download className="link--activate" onClick={handleDescargarCV}>Download CV</a></button>
        </div>
        <div className="home__profilePicture">
        </div>
      </section>
    </div>
  );
}
