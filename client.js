// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location, Surface } from "react-360-web";
import KeyboardModule from "react-360-keyboard/KeyboardModule";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    nativeModules: [KeyboardModule.addModule],
    fullScreen: true,
    cursorVisibility: "visible",
    ...options
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot("PRGB", {
      /* initial props */
    }),
    r360.getDefaultSurface()
  );

  //Ranger Image Component
  const gbCont = new Surface(950, 490, Surface.SurfaceShape.Flat);
  gbCont.setAngle(3.14, 0, 0);
  r360.renderToSurface(r360.createRoot("GBContent", {}), gbCont);

  //Ranger Search Component
  const rangerSearch = new Surface(
    600,
    460,
    Surface.SurfaceShape.Flat /* shape */
  );
  rangerSearch.setAngle(5.21, 0, 0);
  r360.renderToSurface(r360.createRoot("Search", {}), rangerSearch);

  //Fan Component
  const fanLocation = new Location([0, 15, 0]);
  r360.renderToLocation(r360.createRoot("Fan"), fanLocation);

  //Add Holo Component
  const holoLocation = new Location([-35, 13, -0.4]);
  r360.renderToLocation(r360.createRoot("Holo"), holoLocation);

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("GBF360.jpg"));

  //Load Keyboard
  KeyboardModule.setInstance(r360);
}

window.React360 = { init };
