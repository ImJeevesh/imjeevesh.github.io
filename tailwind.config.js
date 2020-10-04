module.exports = {
  purge: ['./docs/**/*.html'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        'color-ts': '#007acc',
        'color-js': '#f0db4f',
        'color-swift': '#F05138',
        'color-ng': '#c4473a',
        'color-node': '#83CD29',
        'color-react': '#61dafb'
      },
      fontFamily: {
        'bangers': 'Bangers'
      },
      height: {
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh',
      },
      screens: {
        'dark': {'raw': '(prefers-color-scheme: dark)'},
      }
    }
  },
  variants: {},
  plugins: [
  ],
};
