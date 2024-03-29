module.exports = {
  content: ['./src/index.html'],
  darkMode: 'class', // `media` without toggle
  theme: {
    extend: {
      colors: {
        'color-ts': '#007acc',
        'color-js': '#f0db4f',
        'color-swift': '#F05138',
        'color-ng': '#c4473a',
        'color-node': '#83CD29',
        'color-react': '#61dafb',
      },
      fontFamily: {
        bangers: 'Bangers',
      },
      height: {
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh',
      },
    }
  },
  plugins: [],
};
