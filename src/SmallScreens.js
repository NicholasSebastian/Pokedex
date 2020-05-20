import React, { useContext, useState, useEffect } from "react";
import { Context } from "./Context";
import "./SmallScreens.css";

export const GreenScreen = () => {
  const [data, setData] = useContext(Context);

  return (
    <div id="green-screen">
      {data.currentPokemon === null ? (
        <span>Select a Pokemon</span>
      ) : (
        <span>Test</span>
      )}
    </div>
  );
};

export const MiniScreen1 = () => {
  return (
    <div id="mini-screen-1">
      <span>Test</span>
    </div>
  );
};

export const MiniScreen2 = () => {
  return (
    <div id="mini-screen-2">
      <span>Test</span>
    </div>
  );
};
