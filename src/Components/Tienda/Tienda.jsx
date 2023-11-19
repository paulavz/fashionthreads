import { useContext } from "react";
import "../../styles/tienda.css";
import Carrusel from "../Carrusel/Carrusel";
import { CarritoContext } from "../../Context/CarritoContext";
import { addToCart } from "../../Context/CarritoAction";
import FloatingCart from "../Carrito/Carrito";

function Tienda() {
  const { dispatch } = useContext(CarritoContext);

  const camisas = [
    {
      imagen: "src/assets/61C0AzQ4xJL.jpg",
      nombre: "Camisa azul",
      precio: 15,
    },
    {
      imagen: "src/assets/images.jpeg",
      nombre: "Camisa azul",
      precio: 15,
    }, //images (1).jpeg
    {
      imagen: "src/assets/images (1).jpeg",
      nombre: "Camisa azul",
      precio: 15,
    },
    {
      imagen: "src/assets/images (2).jpeg",
      nombre: "Camisa azul",
      precio: 15,
    },
    {
      imagen: "src/assets/images (3).jpeg",
      nombre: "Camisa azul",
      precio: 15,
    },
    {
      imagen: "src/assets/images (4).jpeg",
      nombre: "Camisa azul",
      precio: 15,
    },
  ];

  return (
    <div>
      <div className="tienda-header">
        <h1>Fashion Threads</h1>
      </div>
      <Carrusel />
      <FloatingCart />
      <div className="image-grid">
        {camisas.map((camisa, index) => (
          <div key={index}>
            <img className="camisa" src={camisa.imagen} alt={camisa.nombre} />
            <h2>{camisa.nombre}</h2>
            <p>{camisa.precio}</p>
            <button onClick={() => addToCart(camisa, dispatch)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tienda;
