import React from "react";

export function Services() {
  const services = [
    {
      title: "UX/UI Design",
      summary:
        "The importance of custom development taking into consideration usability and visual experience when creating products.",
    },
    {
      title: "Responsive Design",
      summary:
        "The tailor-made design of the products to the wide variety of devices available on the market.",
    },
    {
      title: "Product Design",
      summary:
        "The generation of prototypes and mockups for early stages of the project to give visibility of the result to the final customer.",
    },
    {
      title: "Requirements Analysis",
      summary:
        "Interviews with potential customers to meet their expectations and deliver satisfactory products.",
    },
    {
      title: "Agile Methodologies",
      summary:
        "Experience in the implementation of agile methodologies such as Scrum to measure project progress.",
    },
    {
      title: "Projects Collaboration",
      summary:
        "Ability to work collaboratively to resolve objectives and adapt to different teams.",
    },
  ];

  return (
    <div
      id="services"
      className="flex flex-col items-center font-itim"
    >
      <section className="text-center ">
        <h2 className="text-white text-2xl font-semibold mb-6">Services to be offered</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[240px] h-[200px] rounded-2xl bg-gray-800 text-white font-itim flex flex-col justify-start p-4 transition-all duration-500 hover:outline hover:outline-2 hover:outline-[#05F9F6]"
            >
              <span className="text-lg mb-2">{service.title}</span>
              <p className="text-base leading-snug h-[108px]">{service.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

