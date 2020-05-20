import React, { useState, useEffect, createContext } from "react";

// Instantiate a cached pokedex object.
const Pokedex = require("pokeapi-js-wrapper");
export const pokedex = new Pokedex.Pokedex();

// Create a global context for states.
export const Context = createContext();

// Global states for all components.
export const ContextProvider = (props) => {
  const [data, setData] = useState({
    currentPokemon: null,
    details: null,
    extraDetails: null,
  });

  // Get the appropriate details whenever selection changes.
  useEffect(() => {
    if (data.currentPokemon !== null) {
      pokedex
        .getPokemonByName(data.currentPokemon)
        .then((response) => {
          setData((prevData) => ({ ...prevData, details: response }));
        })
        .catch(() =>
          setData((prevData) => ({ ...prevData, details: "error" }))
        );
      pokedex
        .getPokemonSpeciesByName(data.currentPokemon)
        .then((response) => {
          setData((prevData) => ({ ...prevData, extraDetails: response }));
        })
        .catch(() =>
          setData((prevData) => ({ ...prevData, details: "error" }))
        );
    }
  }, [data.currentPokemon]);

  return (
    <Context.Provider value={[data, setData]}>
      {props.children}
    </Context.Provider>
  );
};
