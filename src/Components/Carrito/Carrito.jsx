import { useContext, useState } from "react";
import "../../styles/carrito.css";
import { CarritoContext } from "../../Context/CarritoContext";
import { MdClose } from "react-icons/md";

const FloatingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { carrito } = useContext(CarritoContext);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-cart">
      <button className="cart-button" onClick={toggleModal}>
        Carrito
      </button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Mi Carrito</h2>
              <button className="close-button" onClick={toggleModal}>
                <MdClose className="close-button-icon" />
              </button>
            </div>

            {carrito.map((camisa, index) => (
              <div key={index}>
                <img
                  className="camisa"
                  src={camisa.imagen}
                  alt={camisa.nombre}
                />
                <h2>{camisa.nombre}</h2>
                <p>{camisa.precio}</p>
              </div>
            ))}
            <button className="close-button" onClick={toggleModal}>
              Comprar
            </button>
            {/* Aquí puedes agregar los elementos de tu carrito */}
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingCart;
