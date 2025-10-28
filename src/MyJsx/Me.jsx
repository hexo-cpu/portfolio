import React from "react";
import "../MyCss/Me.css";
import bgShape from "../assets/Gradient (1).png"
import avatar from "../assets/image 1.png"
import line from "../assets/Arrow.png"
import elipse from "../assets/Ellipse 3.png"
const Me = () => {
  return (
    <section className="me">
      <div className="me-left">
        <img src={line} alt="Decorative line" className="me-line" />

       
        <div className="me-img-stack">
          <img src={bgShape} alt="Background shape" className="me-bg" />
          <img src={elipse} alt="" className="me-bg2"/>
          <img src={avatar} alt="Avatar" className="me-avatar" />
        </div>
      </div>

      <div className="me-right">
        <h2 className="greeting">
          Hello! I am <span className="highlight">Ibrahim Memon</span>
        </h2>

        <h3 className="designer-tagline">
          A Designer who <br />
          <span className="judges">Judges a book by its </span>
          <span className="cover">cover</span>...
        </h3>

        <p className="subtext">
          Because if the cover does not impress you, what else can?
        </p>

        <h2 className="role">
          I'm a <span className="highlight">Software Engineer.</span>
        </h2>

        <p className="current-role">
          Currently, I’m a Software Engineer at <span className="facebook">@Facebook</span>
        </p>

        <p className="bio">
          A self-taught UI/UX designer, functioning in the industry for 3+ years now.
          I make meaningful and delightful digital products that create an equilibrium
          between user needs and business goals.
        </p>
      </div>
    </section>
  );
};

export default Me;




