import React from "react";
export function Services() {
  return (
    <div id="services" className="servicesContainer">
      <section className="services__container">
        <h2 className="services__title">Services to be offered</h2>
        <div className="row1">
          <div className="card">
            <span className="card__title">UX/UI Desing </span>
            <p className="card__summary">
              The importance of custom development taking into consideration
              usability and visual usability and visual experience when creating
              products.
            </p>
          </div>
          <div className="card">
            <span className="card__title">Responsive Desing </span>
            <p className="card__summary">
              The tailor-made design of the products to the wide variety of
              devices available on the market. available on the market.
            </p>
          </div>
          <div className="card">
            <span className="card__title">Product Desing</span>
            <p className="card__summary">
              The generation of protypes and mockups for early project early
              stages of the project to give visibility visibility of the result
              to the final customer.
            </p>
          </div>
        </div>
        <div className="row2">
          <div className="card">
            <span className="card__title">Requirements Analysis</span>
            <p className="card__summary">
              Interviews with potential customers to meet their expectations and
              deliver satisfactory products.
            </p>
          </div>
          <div className="card">
            <span className="card__title">Agile Methodologies</span>
            <p className="card__summary">
              Experience in the implementation of agile methodologies such as
              Scrum to measure project project progress measurements.
            </p>
          </div>
          <div className="card">
            <span className="card__title">Projects collaboration</span>
            <p className="card__summary">
              Ability to work collaboratively to the resolution of objectives
              and ability to adapt to to adapt to different teams.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
