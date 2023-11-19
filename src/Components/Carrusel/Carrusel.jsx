import Slider from "react-slick";

export default function Carrusel() {
  const imagenes = [
    "src/assets/images (1).jpeg",
    "src/assets/images (2).jpeg",
    "src/assets/images (3).jpeg",
    "src/assets/images (4).jpeg",
    "src/assets/images (5).jpeg",
    "src/assets/images.jpeg",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {imagenes.map((image, i) => (
          <div key={i}>
            <img src={image} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
