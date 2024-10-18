import React from "react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#323234] text-white w-full pt-12 flex flex-col items-center font-itim"
    >
      <h2 className=" text-3xl text-white self-center pb-5 animate-morph">Projects</h2>
      <div className="hidden lg:grid lg:grid-cols-2 gap-4">
        <div className="proyects__card flex w-[600px] rounded-lg shadow-lg">
          <div className="relative flex-2 proyects__card-Rotative">
            <div className="face front absolute w-full h-full rounded-lg overflow-hidden transform transition-transform duration-500">
              <img
                src="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715455296/loginMernChat_okgzs0.jpg"
                alt="Login MERN Chat"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="face back absolute w-full h-full rounded-lg overflow-hidden transform rotate-y-180 transition-transform duration-500">
              <img
                src="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715455091/ChatingMernChat_snh7aa.jpg"
                alt="Chatting MERN Chat"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center flex-1 p-5 proyects__card-content">
            <h2 className="mt-0 text-xl">ChatApp with MERN</h2>
            <p className="mb-4 text-sm">
              An instant messaging application developed using websockets to
              write to your friends in a secure way.
            </p>
            <div className="flex justify-between proyects__button-container">
              <a
                href="https://github.com/Yosh04/MERN-WebChatOnline"
                target="_blank"
                className="text-white px-4 py-2 rounded bg-teal-600 hover:bg-teal-700 transition-colors"
              >
                Ver Código
              </a>
              <a
                href="https://chat-app-production-771j.onrender.com"
                target="_blank"
                className="text-white px-4 py-2 rounded bg-teal-600 hover:bg-teal-700 transition-colors"
              >
                Ver Sitio
              </a>
            </div>
          </div>
        </div>

        {/* Card para "Order with MERN" */}
        <div className="proyects__card flex w-[600px] rounded-lg shadow-lg">
          <div className="relative flex-2 proyects__card-Rotative">
            <div className="face front absolute w-full h-full rounded-lg overflow-hidden transform transition-transform duration-500">
              <img
                src="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715487381/mernFoodDeliveryHome_kpagtr.png"
                alt="Order with MERN"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="face back absolute w-full h-full rounded-lg overflow-hidden transform rotate-y-180 transition-transform duration-500">
              <img
                src="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715487362/54ff6f87-8f56-4afd-96a6-86cd5380e3bf.png"
                alt="Order with MERN"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center flex-1 p-5 proyects__card-content">
            <h2 className="mt-0 text-xl">Order with MERN</h2>
            <p className="mb-4 text-sm">
              Project to learn how to work with users, tokens, filtering, and
              databases. Project by Chris Blakely, 16 hrs.
            </p>
            <div className="flex justify-between proyects__button-container">
              <a
                href="https://github.com/Yosh04/mern-food-ordering-frontend"
                target="_blank"
                className="text-white px-4 py-2 rounded bg-teal-600 hover:bg-teal-700 transition-colors"
              >
                Ver Código
              </a>
              <a
                href="https://mern-food-ordering-frontend-rj88.onrender.com"
                target="_blank"
                className="text-white px-4 py-2 rounded bg-teal-600 hover:bg-teal-700 transition-colors"
              >
                Ver Sitio
              </a>
            </div>
          </div>
        </div>

        {/* Card para "Dayeiro - Flutter" */}
        <div className="proyects__card flex w-[600px] rounded-lg shadow-lg">
          <div className="relative flex-2 proyects__card-Rotative">
            <div className="face front absolute w-full h-full rounded-lg overflow-hidden transform transition-transform duration-500">
              <img
                src="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715484158/loginDayeiro2_bqlldz.jpg"
                alt="Dayeiro - Flutter"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="face back absolute w-full h-full rounded-lg overflow-hidden transform rotate-y-180 transition-transform duration-500">
              <img
                src="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715484760/MenuDayeiro_nhqdzk.jpg"
                alt="Dayeiro - Flutter"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center flex-1 p-5 proyects__card-content">
            <h2 className="mt-0 text-xl">Dayeiro - Flutter</h2>
            <p className="mb-4 text-sm">
              Dayeiro, a private inspection system for the Golfito Coast Guard,
              over 500 hrs of custom development.
            </p>
            <div className="flex justify-between proyects__button-container">
              <a
                href="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715484760/MenuDayeiro_nhqdzk.jpg"
                target="_blank"
                className="text-white px-4 py-2 rounded bg-teal-600 hover:bg-teal-700 transition-colors"
              >
                Img 1
              </a>
              <a
                href="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715484926/formularioDayeiro_inkklj.jpg"
                target="_blank"
                className="text-white px-4 py-2 rounded bg-teal-600 hover:bg-teal-700 transition-colors"
              >
                Img 2
              </a>
            </div>
          </div>
        </div>

        {/* Card para "React Clone" */}
        <div className="proyects__card flex w-[600px] rounded-lg shadow-lg">
          <div className="relative flex-2 proyects__card-Rotative">
            <div className="face front absolute w-full h-full rounded-lg overflow-hidden transform transition-transform duration-500">
              <img
                src="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715488433/b3ff9f96-45fd-4802-add6-da3ec62b195f.png"
                alt="React Clone"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="face back absolute w-full h-full rounded-lg overflow-hidden transform rotate-y-180 transition-transform duration-500">
              <img
                src="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715488448/a45f26e1-76f7-4f90-bd80-f348afb14290.png"
                alt="React Clone"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center flex-1 p-5 proyects__card-content">
            <h2 className="mt-0 text-xl">React Clone</h2>
            <p className="mb-4 text-sm">
              Clone of the official Star Wars page, implementing concepts of
              routes and APIs consumption.
            </p>
            <div className="flex justify-between proyects__button-container">
              <a
                href="https://github.com/Yosh04/MultimediosProyecto"
                target="_blank"
                className="text-white px-4 py-2 rounded bg-teal-600 hover:bg-teal-700 transition-colors"
              >
                Ver Código
              </a>
              <a
                href="https://multimediosproyecto.onrender.com/"
                target="_blank"
                className="text-white px-4 py-2 rounded bg-teal-600 hover:bg-teal-700 transition-colors"
              >
                Ver Sitio
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center sm:grid sm:grid-cols-2 gap-4 lg:hidden">
        <div class="flex flex-col sm:w-[380px] sm:h-[380px]  w-[350px] h-[350px]  rounded-lg shadow-lg ">
          <div className="relative flex flex-1 [perspective:1000px] group">
            <div className="absolute inset-0 [transform-style:preserve-3d] transition-all duration-500 ease-in-out group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <img
                  src="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715455296/loginMernChat_okgzs0.jpg"
                  alt="Login MERN Chat"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <img
                  src="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715455091/ChatingMernChat_snh7aa.jpg"
                  alt="Chatting MERN Chat"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-1 flex-col justify-center p-5">
            <h3 class="mt-0 text-xl">ChatApp with MERN</h3>
            <p class="mb-4 text-sm">
              An instant messaging application developed using WebSockets to
              chat with your friends securely.
            </p>
            <div class="flex justify-between">
              <a
                href="https://github.com/Yosh04/MERN-WebChatOnline"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white no-underline px-4 py-2 rounded bg-[#06a8a6] text-sm cursor-pointer transition-colors hover:bg-[#05817f]"
              >
                Ver Código
              </a>
              <a
                href="https://chat-app-production-771j.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white no-underline px-4 py-2 rounded bg-[#06a8a6] text-sm cursor-pointer transition-colors hover:bg-[#05817f]"
              >
                Ver Sitio
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:w-[380px] sm:h-[380px]  w-[350px] h-[350px] rounded-lg shadow-lg border-2 border-green-400">
          <div class="relative flex flex-1 [perspective:1000px] group">
            <div class="absolute inset-0 [transform-style:preserve-3d] transition-all duration-500 ease-in-out group-hover:[transform:rotateY(180deg)]">
              <div class="absolute inset-0 [backface-visibility:hidden]">
                <img
                  src="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715487381/mernFoodDeliveryHome_kpagtr.png"
                  alt="Order with MERN"
                  class="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div class="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <img
                  src="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715487362/54ff6f87-8f56-4afd-96a6-86cd5380e3bf.png"
                  alt="Order with MERN"
                  class="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-1 flex-col justify-center p-5">
            <h3 class="mt-0 text-xl">Order with MERN</h3>
            <p class="mb-4 text-sm">
              Project to learn how to work with users, tokens, filtering and
              databases. Project by Chris Blakely 16 hrs.
            </p>
            <div class="flex justify-between">
              <a
                href="https://github.com/Yosh04/mern-food-ordering-frontend"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white no-underline px-4 py-2 rounded bg-[#06a8a6] text-sm cursor-pointer transition-colors hover:bg-[#05817f]"
              >
                Ver Código
              </a>
              <a
                href="https://mern-food-ordering-frontend-rj88.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white no-underline px-4 py-2 rounded bg-[#06a8a6] text-sm cursor-pointer transition-colors hover:bg-[#05817f]"
              >
                Ver Sitio
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:w-[380px] sm:h-[380px]  w-[350px] h-[350px] rounded-lg shadow-lg border-2 border-green-400">
          <div class="relative flex flex-1 [perspective:1000px] group">
            <div class="absolute inset-0 [transform-style:preserve-3d] transition-all duration-500 ease-in-out group-hover:[transform:rotateY(180deg)]">
              <div class="absolute inset-0 [backface-visibility:hidden]">
                <img
                  src="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715484158/loginDayeiro2_bqlldz.jpg"
                  alt="Dayeiro - Flutter"
                  class="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div class="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <img
                  src="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715484760/MenuDayeiro_nhqdzk.jpg"
                  alt="Dayeiro - Flutter"
                  class="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-1 flex-col justify-center p-5">
            <h3 class="mt-0 text-xl">Dayeiro - Flutter</h3>
            <p class="mb-4 text-sm">
              Dayeiro a private inspection system for golfito coast guard over
              500hrs in custom development.
            </p>
            <div class="flex justify-between">
              <a
                href="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715484760/MenuDayeiro_nhqdzk.jpg"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white no-underline px-4 py-2 rounded bg-[#06a8a6] text-sm cursor-pointer transition-colors hover:bg-[#05817f]"
              >
                Img 1
              </a>
              <a
                href="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715484926/formularioDayeiro_inkklj.jpg"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white no-underline px-4 py-2 rounded bg-[#06a8a6] text-sm cursor-pointer transition-colors hover:bg-[#05817f]"
              >
                Img 2
              </a>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:w-[380px] sm:h-[380px]  w-[350px] h-[350px] rounded-lg shadow-lg border-2 border-green-400">
          <div class="relative flex flex-1 [perspective:1000px] group">
            <div class="absolute inset-0 [transform-style:preserve-3d] transition-all duration-500 ease-in-out group-hover:[transform:rotateY(180deg)]">
              <div class="absolute inset-0 [backface-visibility:hidden]">
                <img
                  src="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715488433/b3ff9f96-45fd-4802-add6-da3ec62b195f.png"
                  alt="React Clone"
                  class="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div class="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <img
                  src="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715488448/a45f26e1-76f7-4f90-bd80-f348afb14290.png"
                  alt="React Clone"
                  class="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-1 flex-col justify-center p-5">
            <h3 class="mt-0 text-xl">React Clone</h3>
            <p class="mb-4 text-sm">
              Clone of the official star wars page implementing concepts of
              routes and APIs consumption.
            </p>
            <div class="flex justify-between">
              <a
                href="https://github.com/Yosh04/MultimediosProyecto"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white no-underline px-4 py-2 rounded bg-[#06a8a6] text-sm cursor-pointer transition-colors hover:bg-[#05817f]"
              >
                Ver Código
              </a>
              <a
                href="https://multimediosproyecto.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white no-underline px-4 py-2 rounded bg-[#06a8a6] text-sm cursor-pointer transition-colors hover:bg-[#05817f]"
              >
                Ver Sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
