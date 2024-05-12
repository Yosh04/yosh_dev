import React from "react";

export default function Proyects() {
  return (
    <div id="proyects" className="proyects">
      <section className="proyects__content">
        <h2 className="proyects__title">Proyects</h2>
        <div className="proyects__content-Container">
          <div className="proyects__card">
            <div class="proyects__card-content">
              <h2>ChatApp with MERN</h2>
              <p>
                An instant messaging application developed using websockets to
                write to your friends in a secure way..
              </p>
              <div class="proyects__button-container">
                <a
                  href="https://github.com/Yosh04/MERN-WebChatOnline"
                  target="_black"
                  class="proyects__button"
                >
                  Ver Código
                </a>
                <a
                  href="https://chat-app-production-771j.onrender.com"
                  target="_black"
                  class="proyects__button"
                >
                  Ver Sitio
                </a>
              </div>
            </div>

            <div className="proyects__card-Rotative">
              <div className="face front">
                <img
                  src={
                    "https://res.cloudinary.com/du4xrfwcc/image/upload/v1715455296/loginMernChat_okgzs0.jpg"
                  }
                  alt="Imagen de fondo"
                />
              </div>
              <div className="face back">
                <img
                  src={
                    "https://res.cloudinary.com/du4xrfwcc/image/upload/v1715455091/ChatingMernChat_snh7aa.jpg"
                  }
                  alt="Imagen de fondo"
                />
              </div>
            </div>
          </div>

          <div className="proyects__card">
            <div className="proyects__card-content">
              <h2>Order with MERN</h2>
              <p>
                Project to learn how to work with users, tokens, filtering and
                databases. Project by Chris Blakely 16 hrs.
              </p>
              <div className="proyects__button-container">
                <a
                  href="https://github.com/Yosh04/mern-food-ordering-frontend"
                  target="_black"
                  className="proyects__button"
                >
                  Ver Código
                </a>
                <a
                  href="https://mern-food-ordering-frontend-rj88.onrender.com"
                  target="_black"
                  className="proyects__button"
                >
                  Ver Sitio
                </a>
              </div>
            </div>

            <div className="proyects__card-Rotative">
              <div className="face front">
                <img
                  src={
                    "https://res.cloudinary.com/du4xrfwcc/image/upload/v1715487381/mernFoodDeliveryHome_kpagtr.png"
                  }
                  alt="Imagen de fondo"
                />
              </div>
              <div className="face back">
                <img
                  className="captura2"
                  src={
                    "https://res.cloudinary.com/du4xrfwcc/image/upload/v1715487362/54ff6f87-8f56-4afd-96a6-86cd5380e3bf.png"
                  }
                  alt="Imagen de fondo"
                />
              </div>
            </div>
          </div>

          <div className="proyects__card">
            <div className="proyects__card-content">
              <h2>Dayeiro - Flutter </h2>
              <p>
                Dayeiro a private inspection system for golfito coast guard over
                500hrs in custom development.
              </p>
              <div className="proyects__button-container">
                <a
                  href="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715484760/MenuDayeiro_nhqdzk.jpg"
                  target="_black"
                  className="proyects__button"
                >
                  Img 1
                </a>
                <a
                  href="https://res.cloudinary.com/du4xrfwcc/image/upload/v1715484926/formularioDayeiro_inkklj.jpg"
                  target="_black"
                  className="proyects__button"
                >
                  Img 2
                </a>
              </div>
            </div>

            <div className="proyects__card-Rotative">
              <div className="face front ">
                <img
                  className="captura"
                  src={
                    "https://res.cloudinary.com/du4xrfwcc/image/upload/v1715484158/loginDayeiro2_bqlldz.jpg"
                  }
                  alt="Imagen de fondo"
                />
              </div>
              <div className="face back">
                <img
                  className="captura"
                  src={
                    "https://res.cloudinary.com/du4xrfwcc/image/upload/v1715484760/MenuDayeiro_nhqdzk.jpg"
                  }
                  alt="Imagen de fondo"
                />
                <img
                  className="captura"
                  src={
                    "https://res.cloudinary.com/du4xrfwcc/image/upload/v1715484926/formularioDayeiro_inkklj.jpg"
                  }
                  alt="Imagen de fondo"
                />
              </div>
            </div>
          </div>

          <div className="proyects__card">
            <div className="proyects__card-content">
              <h2>React Clone</h2>
              <p>
                Clone of the official star wars page implementing concepts of
                routes and APIs consumption.
              </p>
              <div className="proyects__button-container">
                <a
                  href="https://github.com/Yosh04/MultimediosProyecto"
                  target="_black"
                  className="proyects__button"
                >
                  Ver Código
                </a>
                <a
                  href="https://multimediosproyecto.onrender.com/"
                  target="_black"
                  className="proyects__button"
                >
                  Ver Sitio
                </a>
              </div>
            </div>

            <div className="proyects__card-Rotative">
              <div className="face front">
                <img
                  src={
                    "https://res.cloudinary.com/du4xrfwcc/image/upload/v1715488433/b3ff9f96-45fd-4802-add6-da3ec62b195f.png"
                  }
                  alt="Imagen de fondo"
                />
              </div>
              <div className="face back">
                <img
                  src={
                    "https://res.cloudinary.com/du4xrfwcc/image/upload/v1715488448/a45f26e1-76f7-4f90-bd80-f348afb14290.png"
                  }
                  alt="Imagen de fondo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
