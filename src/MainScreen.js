import React, { useContext, useState, useEffect } from "react";
import { Context, pokedex } from "./Context";
import { pad, shorten, capitalize } from "./Utils";
import "./MainScreen.css";

const MainScreen = () => {
  // Global state.
  const [data, setData] = useContext(Context);

  // Get a List of Pokemon.
  const [pokemonsList, setPokemonsList] = useState(null);
  useEffect(() => {
    pokedex.getPokemonsList({ limit: 807 }).then((response) => {
      setPokemonsList(response.results);
    });
  }, []);

  // Home screen when no current pokemon chosen.
  const ListScreen = () => {
    return (
      <div id="list">
        {pokemonsList &&
          pokemonsList.map((pokemon, index) => {
            return (
              <div
                onClick={() =>
                  setData((prevData) => ({
                    ...prevData,
                    currentPokemon: pokemon.name,
                  }))
                }
              >
                <div>{"#" + pad(index + 1, 3)}</div>
                {capitalize(shorten(pokemon.name))}
              </div>
            );
          })}
      </div>
    );
  };

  // Screen when showing a selected pokemon.
  const ImageView = () => {
    const [image, setImage] = useState(null);
    const [error, setError] = useState(false);
    useEffect(() => {
      if (data.details !== null) {
        if (data.details !== undefined && data.details.sprites !== undefined)
          setImage(data.details.sprites.front_default);
        else setError(true);
      }
    }, []);

    return (
      <div id="image">
        {error ? <span>API Error</span> : <img src={image} alt="loading" />}
        <div>{"<"} BACK</div>
      </div>
    );
  };

  // The actual main screen window.
  return (
    <div
      id="main-screen"
      style={{ overflow: data.currentPokemon === null ? "auto" : "hidden" }}
    >
      {data.currentPokemon === null ? <ListScreen /> : <ImageView />}
    </div>
  );
};

export default MainScreen;
