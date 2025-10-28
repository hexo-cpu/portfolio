
import React from "react";
import "../Mycss/Boxes.css"; 
import img1 from "../assets/Icons.png";
import img2 from "../assets/Group 1935.png";
import img3 from "../assets/Group 1938.png";
import img4 from "../assets/Group 2.png";

export default function Boxes() {
  const boxesData = [
    { title: "CIB on the Mobile	", text: "Take your client onboard seamlessly by our amazing tool of digital onboard process.", buttonText: "Learn More", img: img1 },
    { title: "CIB on the Mobile	", text: "Take your client onboard seamlessly by our amazing tool of digital onboard process.", buttonText: "Learn More", img: img2 },
    { title: "CIB on the Mobile	", text: "Take your client onboard seamlessly by our amazing tool of digital onboard process.", buttonText: "Learn More", img: img3 },
{ title: "CIB on the Mobile	", text: "Take your client onboard seamlessly by our amazing tool of digital onboard process.", buttonText: "Learn More", img: img4 },
  ];

  return (
    <div className="container boxes-text">
      <h1>Work Experience</h1>
    <section className="boxes-container">
      {boxesData.map((box, index) => (
        <div key={index} className="box">
          <div className="box-left">
            <img src={box.img} alt={box.title} />
          </div>
          <div className="box-right">
 <h1>{box.title}</h1>
            <p>{box.text}</p>
            <button>{box.buttonText}</button>
          </div>
        </div>
      ))}
    </section>
</div>
  );
}


