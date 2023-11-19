/* eslint-disable react/prop-types */
import { createContext, useReducer, useEffect } from "react";
import CarritoReducer from "./CarritoReducer";

export const INITIAL_STATE = {
  carrito: JSON.parse(localStorage.getItem("carrito")) || [],
};

export const CarritoContext = createContext(INITIAL_STATE);

const CarritoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CarritoReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(state.carrito));
  }, [state.carrito]);

  return (
    <CarritoContext.Provider value={{ carrito: state.carrito, dispatch }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContextProvider;
