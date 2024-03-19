import React from "react";

export default function Contact() {
  return (
    <div className="contact">
      <section className="contact__container">
        <div className="contact__containerInfo">
          <h2 className="contact__title">Contact Me</h2>
          <div className="contact__cards">
            <div className="contact_cardsgroup">
              <div className="contact__card">
                <span className="card__icon contactMail"></span>
                <span className="card__label">antonyescor4@gmail.com</span>
              </div>
              <div className="contact__card">
                <span className="card__icon contactPhone"></span>
                <span className="card__label">+506 86407320</span>
              </div>
            </div>
            <div className="contact__card">
              <span className="card__icon contactLocation"></span>
              <span className="card__label">Costa Rica</span>
            </div>
          </div>
        </div>
        <div className="contact__socialMedia">
          
        <a href="https://www.linkedin.com/in/antony-escorcia-992044232/ "><span className="contact_socialMedia linkeding"></span></a>
        <a href="https://github.com/Yosh04"><span className="contact_socialMedia github"></span></a>
        <a href="whatsapp://send?phone=+506 86407320"><span className="contact_socialMedia whats"></span></a>

        </div>
      </section>
      <span className="Acknowledgments">¡Thanks for visit my portfolio</span>
    </div>
  );
}
