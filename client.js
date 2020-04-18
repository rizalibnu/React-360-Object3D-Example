// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance } from 'react-360-web';
import WebVRPolyfill from 'webvr-polyfill';

// const location = new Location([0, -1, -2]);

// eslint-disable-next-line no-unused-vars
const polyfill = new WebVRPolyfill();

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render Panel
  r360.renderToSurface(
    r360.createRoot('Panel', {
      /* initial props */
    }),
    r360.getDefaultSurface()
  );

  // Render Heli
  r360.renderToLocation(r360.createRoot('Heli'), r360.getDefaultLocation());

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = { init };
