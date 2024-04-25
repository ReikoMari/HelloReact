import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainMap from './main';
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";
defineMapElements(window, {
  resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets",
});
const root = ReactDOM.createRoot(document.getElementById('root'));
document.getElementById("root").style.height="100%";
root.render(
  <MainMap></MainMap>
);
