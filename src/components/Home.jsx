import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export function Home() {
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'Software Architect', 'UI/UX Designer', 'Problem Solver','Continuous Learner', 'Efficient Coder'],
    loop: true,
    typeSpeed: 20,
  });

  const URL_CV = "https://drive.google.com/uc?export=download&id=1AoEZpzjodozG2a4CSNDIixb8Nd_xiEpI";

  const handleDescargarCV = () => {
    window.location.href = URL_CV;
  };

  return (
    <div id="home" className="bg-[#323234] w-full mt-16 md:mt-32 flex flex-col justify-center px-4 md:px-8 py-8 md:py-16">
      <section className="flex flex-col-reverse md:flex-row justify-around items-center md:items-start">
        <div className="text-white text-center md:text-left mt-8 md:mb-0">
          <span className="font-itim font-normal text-2xl md:text-4xl lg:text-[42px]">Hello, I'm</span><br />
          <span className="font-['Odor_Mean_Chey'] font-normal text-2xl md:text-4xl lg:text-[42px] md:ml-[30px]">Yosh Escorcia</span><br />
          <span className="font-itim font-normal text-2xl md:text-4xl lg:text-[42px]">And I'm a <span className="text-[#05F9F6]">{text}</span><Cursor/> </span>
          <p className="text-[#A59A9A] font-itim text-md w-full mt-4 md:w-[500px] lg:w-[700px]  md:text-base lg:text-[16px] md:ml-[30px] ">
            Solid experience in mobile and web software project management,
            specializing in Flutter, React and Next.js. I enjoy facing
            challenges in front-end and back-end, always looking to improve. For
            me, development is functional art that enhances the user
            experience.
          </p>
          <button className="bg-[#05F9F6] w-full md:w-[300px] h-[50px] md:h-[60px] rounded-[30px] font-itim font-normal text-lg md:text-xl lg:text-[22px] mt-6">
            <a href={URL_CV} download className="link--activate" onClick={handleDescargarCV}>Download CV</a>
          </button>
        </div>
        <div className="bg-[url('https://res.cloudinary.com/du4xrfwcc/image/upload/v1715553307/UserProfile_e4rplm.png')] bg-contain bg-no-repeat bg-center bg-[#272727] self-center w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full animate-morph shadow-[0_0_20px_#05F9F6,0_0_40px_#05F9F6,0_0_60px_#05F9F6,0_0_80px_#05F9F6] mt-8 md:mt-0">
        </div>
      </section>
    </div>
  );
}