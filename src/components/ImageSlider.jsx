import React from "react";
import Slider from "react-slick";
import "../styles/Slider.css";
const images = [
  {
    src: "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/3Tygq87mpjCysd6dRomamP/d8a7b4f46a0c45eb3ff95a1a2e186d84/strength.png",
    title: "Boxing",
    previewLink: "Preview boxing classes",
  },
  {
    src: "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/6SpPJjMEkwBvt4dcuROUhM/0969da2fdbd85583e417f59e5fec0371/cycling.png",
    title: "Rowing",
    previewLink: "Preview rowing classes",
  },
  {
    src: "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/39RfW5BtElEcHNCRlSo6Df/c864ce9b567e24c3842f4ec0c907295d/yoga.png",
    title: "Meditation",
    previewLink: "Preview meditation classes",
  },
  {
    src: "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/4Jc8Hc0m70MpNiVmo6qJTx/e4d5cda8bd22e8861fc6e846d01f2e63/running.png",
    title: "Barre",
    previewLink: "Preview barre classes",
  },
  {
    src: "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/1xxaCMlxguek1IOGongpIE/4aae8d7a1cc246cdf479174d47c00dbd/boxing.png",
    title: "Stretching",
    previewLink: "Preview stretching classes",
  },
];
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true, // Enables fixed width for each slide
    responsive: [
      { breakpoint: 1024, settings: { variableWidth: true } },
      { breakpoint: 600, settings: { variableWidth: true } },
      { breakpoint: 480, settings: { variableWidth: true } },
    ],
  };
  return (
    <div className="slider-container">
      {" "}
      <h2>Preview thousands of classes on the Peloton App</h2>{" "}
      <Slider {...settings}>
        {" "}
        {images.map((image, index) => (
          <div key={index} className="slide-item" style={{ width: 300 }}>
            {" "}
            {/* Set fixed width here */}{" "}
            <img src={image.src} alt={image.title} /> <h3>{image.title}</h3>{" "}
            <a href="#">{image.previewLink}</a>{" "}
          </div>
        ))}{" "}
      </Slider>{" "}
      <button className="browse-button">Browse classes</button>{" "}
    </div>
  );
};
export default ImageSlider;
