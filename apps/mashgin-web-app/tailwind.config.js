const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `${__dirname}/{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html,css,svg,scss}`,
    ...createGlobPatternsForDependencies(__dirname),
  ],
  jit: true,
  theme: {
    extend: {},
  },
  plugins: [],
};
