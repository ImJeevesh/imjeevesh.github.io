module.exports = {
  purge: ['./src/**/*.html'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
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
