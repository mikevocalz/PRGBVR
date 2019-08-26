// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location, Surface } from "react-360-web";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    cursorVisibility: "visible",
    fullScreen: true,
    ...options
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot("PRGB", {
      /* initial props */
    }),
    r360.getDefaultSurface()
  );

  const gbContent = new Surface(6000, 650, Surface.SurfaceShape.Cylinder);
  r360.renderToSurface(r360.createRoot("GBContent"), gbContent);
  gbContent.setAngle(7, 2, 0);
  const fanLocation = new Location([0, 15, 0]);
  r360.renderToLocation(r360.createRoot("Fan"), fanLocation);
  //Add Holo Component
  const holoLocation = new Location([-15, 9, -3]);
  r360.renderToLocation(r360.createRoot("Holo"), holoLocation);

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("GBF360.jpg"));
}

window.React360 = { init };
