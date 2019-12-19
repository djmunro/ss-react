export const defaultTheme = {
  name: 'Default',
  colors: {
    primary: '#9b4dca',
    secondary: '#606c76',
    white: 'white',
  },
  media: {
    xl: '1240px',
    md: '1000px',
    s: '600px',
  },
};

export const lightTheme = {
  name: 'Light',
  colors: {
    primary: '#6D435A',
    secondary: '#B1EDE8',
  },
  media: {
    xl: '600px',
    md: '400px',
    s: '200px',
  },
};

export const darkTheme = {
  name: 'Dark',
  colors: {
    primary: '#C2DFE3',
    secondary: '#253237',
  },
  media: { ...defaultTheme.media },
};

export const retroTheme = {
  name: 'Retro',
  colors: {
    primary: '#134611',
    secondary: '#3E8914',
  },
  media: { ...defaultTheme.media },
};

export const theme = {
  default: { ...defaultTheme },
  light: { ...lightTheme },
  dark: { ...darkTheme },
  retro: { ...retroTheme },
};

export const GlobalStyles = `
    html {
      box-sizing: border-box;
      font-size: 62.5%;
    }
  
    body {
      padding: 0;
      margin: 0;
      font-size: 1.6em;
      line-height: 1.6;
      font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    }
  
    h1, h2, h3 { 
      margin: 0;
    }
  `;
