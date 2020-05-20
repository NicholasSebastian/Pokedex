import React, { useContext, useState, useEffect } from "react";
import { Context, pokedex } from "./Context";
import { capitalize } from "./Utils";
import "./SubScreen.css";

const SubScreen = () => {
  // Global state.
  const [data, setData] = useContext(Context);

  return (
    <div id="sub-screen">
      {data.currentPokemon === null ? (
        <span>Select a Pokemon</span>
      ) : data.details === "error" || data.extraDetails === "error" ? (
        <span>An Error Occured</span>
      ) : data.details === null || data.extraDetails === null ? (
        <span>Loading data...</span>
      ) : (
        <>
          <span>{capitalize(data.details.name)}</span>
          <br />
          <span>{data.extraDetails.genera[2].genus}</span>
          <br />
          <p>
            {
              data.extraDetails.flavor_text_entries.find(
                (entry) => entry.language.name === "en"
              ).flavor_text
            }
          </p>
        </>
      )}
    </div>
  );
};

export default SubScreen;
