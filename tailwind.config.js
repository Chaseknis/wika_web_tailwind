/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      'heroTitleFont':['Rubik', '"sans-serif"'], 
      'smallHeaderFont':['"Playfair Display"', 'serif'],
      'HeaderFont':['Rosarivo', 'serif'],
      'subHeaderFont':['Montserrat', '"sans-serif"'],
      'paragraphTextFont':['Raleway','"sans-serif"'],
    },
    fontSize: {
      'tiny': '.75rem',
      'small': '.875',
      'base': '1rem',
      'lg': '1.5rem',
      'xl': '2rem',
      '2xl': '2.75rem',
      '5xl': '4rem',
      '6xl': '4.125rem',
      '7xl': '5rem',
      '8xl': '7rem',
    },
    screens: {
      sm:'480px',
      md:'768px',            
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      gridTemplateColumns: {
        'custom-16': 'repeat(16, 1fr)',

        'footer': '200px minmax(900px, 1fr) 100px',
      },
      gridTemplateRows: {
        'custom-6': 'repeat(6, 6rem)',

        'layout': '200px minmax(900px, 1fr) 100px',
      },
    dropShadow: {
        'buttonShadow': '0 0.2rem 0.4rem rgba(0, 0, 0, 0.2)',
        'pageTextShadow': '0 0.1rem 0.3rem rgba(0, 0, 0, 0.2)',
        'heroShadow': '0 0.3rem 0.5rem rgba(0, 0, 0, 0.6)',
        'cardShadow':'0 0.2rem 1.5rem rgba(0, 0, 0, 0.4)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      colors: {
        dullBrown: 'rgb(134, 113, 73)',
        White: 'rgb(255, 255, 255)',
        Black: 'rgb(0, 0, 0)',
        lightBlack: 'rgba(0, 0, 0, 0.60)',
        lightBlackTense: 'rgba(0, 0, 0, 0.60)',
        Birch: 'rgb(56, 52, 41)',
        lightBirch: 'rgba(56, 52, 41, 0.60)',
        dimWhite: 'rgb(245, 245, 245)',
        lightGrey: 'rgb(244, 243, 242)',
      },
    },
  },
  plugins: [],
}
