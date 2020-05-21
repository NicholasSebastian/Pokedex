import React, { useContext } from "react";
import { Context } from "./Context";
import { capitalize } from "./Utils";
import "./SmallScreens.css";

export const GreenScreen = () => {
  const [data, setData] = useContext(Context);

  return (
    <div id="green-screen">
      {data.currentPokemon === null ? (
        <span>Select a Pokemon</span>
      ) : data.details === "error" || data.extraDetails === "error" ? (
        <span>An Error Occured</span>
      ) : data.details === null || data.extraDetails === null ? (
        <span>Loading data...</span>
      ) : (
        <>
          <span>
            {"Egg Group: " +
              (data.extraDetails.egg_groups[0] === null
                ? "None"
                : capitalize(data.extraDetails.egg_groups[0].name))}
          </span>
          <br />
          <span>
            {"Habitat: " +
              (data.extraDetails.habitat === null
                ? "None"
                : capitalize(data.extraDetails.habitat.name))}
          </span>
          <br />
          <span>
            {"Shape: " +
              (data.extraDetails.shape === null
                ? "None"
                : capitalize(data.extraDetails.shape.name))}
          </span>
        </>
      )}
    </div>
  );
};

export const MiniScreen1 = () => {
  const [data, setData] = useContext(Context);

  return (
    <div id="mini-screen-1">
      {data.currentPokemon === null ? (
        <span></span>
      ) : data.details === "error" || data.extraDetails === "error" ? (
        <span>An Error Occured</span>
      ) : data.details === null || data.extraDetails === null ? (
        <span>Loading data...</span>
      ) : (
        <>
          <span>Type: </span>
          {data.details.types.map((type) => {
            return <div>{capitalize(type.type.name)}</div>;
          })}
        </>
      )}
    </div>
  );
};

export const MiniScreen2 = () => {
  const [data, setData] = useContext(Context);

  return (
    <div id="mini-screen-2">
      {data.currentPokemon === null ? (
        <span></span>
      ) : data.details === "error" || data.extraDetails === "error" ? (
        <span>An Error Occured</span>
      ) : data.details === null || data.extraDetails === null ? (
        <span>Loading data...</span>
      ) : (
        <>
          <span>{"Height: " + data.details.height / 10 + "m"}</span>
          <br />
          <span>{"Weight: " + data.details.weight / 10 + "kg"}</span>
        </>
      )}
    </div>
  );
};
