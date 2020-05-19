import React, { useState, useEffect } from "react";
import "./App.css";
import "./Screen.css";

// Instantiate a cached pokedex object.
const PokedexModule = require("pokeapi-js-wrapper");
const pokedex = new PokedexModule.Pokedex();

const MainScreen = () => {
  return <div id="main-screen"></div>;
};

const SubScreen = () => {
  return <div id="sub-screen"></div>;
};

const GreenScreen = () => {
  return <div id="green-screen"></div>;
};

const MiniScreen1 = () => {
  return <div id="mini-screen-1"></div>;
};

const MiniScreen2 = () => {
  return <div id="mini-screen-2"></div>;
};

const App = () => {
  return (
    <div id="View">
      <div>
        <div id="Left">
          <div id="Head">
            <div id="big-orb">
              <div />
            </div>
            <div className="small-orb" style={{ backgroundColor: "#661e1d" }} />
            <div className="small-orb" style={{ backgroundColor: "#eb9907" }} />
            <div className="small-orb" style={{ backgroundColor: "#839448" }} />
          </div>
          <div id="Main">
            <div>
              <div id="Left-Body">
                <div id="main-frame">
                  <div>
                    <div className="tiny-orb" />
                    <div className="tiny-orb" />
                  </div>
                  <MainScreen />
                  <div>
                    <div id="bold-orb" />
                    <div id="three-lines">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
                <div id="main-body">
                  <div id="left-modules">
                    <div id="circle-module" />
                    <div id="center-modules">
                      <div id="flat-modules">
                        <div style={{ backgroundColor: "#661e1d" }} />
                        <div style={{ backgroundColor: "#5d85b7" }} />
                      </div>
                      <GreenScreen />
                    </div>
                  </div>
                  <div id="direction-modules">
                    <div>
                      <div />
                      <div className="direction-buttons" />
                      <div />
                      <div className="direction-buttons" />
                      <div id="direction-center" />
                      <div className="direction-buttons" />
                      <div />
                      <div className="direction-buttons" />
                      <div />
                    </div>
                  </div>
                </div>
              </div>
              <div id="Hinge">
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
        <div id="Right">
          <div>
            <div id="Right-Body">
              <SubScreen />
              <div id="button-grid">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <div id="two-lines">
                <div />
                <div />
              </div>
              <div id="two-buttons">
                <div />
                <div />
              </div>
              <div id="yellow-button">
                <div />
              </div>
              <div id="two-screens">
                <MiniScreen1 />
                <MiniScreen2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
