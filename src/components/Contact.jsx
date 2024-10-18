import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center pt-[120px] text-white font-itim w-full">
      <section className="flex flex-col items-center justify-center px-4 md:px-0">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
            Contact Me
          </h2>
          <div className="border border-transparent shadow-lg w-[800px] h-auto sm:h-[300px] md:h-[300px] lg:h-[300px] flex flex-col gap-2 items-center justify-center relative overflow-hidden z-10 p-4 md:p-0">
            <div className="absolute w-[200px] h-[500%] bg-[#05F9F6] animate-spin-slow opacity-30 z-0"></div>
            <div className="absolute inset-[5px] bg-[#3D3E42] z-0"></div>¨
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 z-10 ">
              <a
                href="mailto:antonyescor4@gmail.com"
                className="bg-[#454545]  w-full max-w-[250px] rounded-lg flex justify-center items-center gap-2 px-4"
              >
                <FontAwesomeIcon icon={faMailBulk} size="lg" />
                <span className="text-white text-sm md:text-base">
                  antonyescor4@gmail.com
                </span>
              </a>

              <a
                href="https://wa.me/50686407320"
                className="bg-[#454545]  w-full max-w-[250px] rounded-lg flex justify-center items-center gap- px-4"
              >
                <FontAwesomeIcon icon={faPhone} size="lg" />
                <span className="text-white text-sm md:text-base">
                  +506 8640 7320
                </span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Costa+Rica"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#454545] w-full max-w-[380px] rounded-lg flex justify-center items-center gap-5 px-4 mx-auto md:col-span-2"
              >
                <FontAwesomeIcon icon={faLocationArrow} size="lg" />
                <span className="text-white text-sm md:text-base">
                  Costa Rica
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="flex gap-5 relative -top-[50px] z-10 mt-14 md:mt-0">
        <a href="https://www.linkedin.com/in/antony-escorcia-992044232/">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href="https://github.com/Yosh04">
          <FontAwesomeIcon icon={faGithubSquare} size="lg" />
        </a>
        <a
          href="https://wa.me/50686407320"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
        </a>
      </div>
      <span className="mt-4 text-gray-300 pb-8 text-sm md:text-base text-center">
        ¡Thanks for visiting my portfolio!
      </span>
    </div>
  );
}
