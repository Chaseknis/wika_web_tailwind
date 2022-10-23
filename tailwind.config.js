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
      'small': '.875rem',
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
    variants: {
      extend: {
        display: ['group-focus'],
        opacity: ['group-focus'],
        inset: ['group-focus']
      },
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
      boxShadow: {
        'small':'0.5px 1px 1px hsl(220deg 60% 50% / 0.7)',
        'medium': '0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)',
        'large':'rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px',
        'test': '1px 2px 2px hsl(220deg 60% 50% / 0.2), 2px 4px 4px hsl(220deg 60% 50% / 0.2), 4px 8px 8px hsl(220deg 60% 50% / 0.2), 8px 16px 16px hsl(220deg 60% 50% / 0.2), 16px 32px 32px hsl(220deg 60% 50% / 0.2)',
        'xl': ' rgba(0, 0, 0, 0.4) -5px 5px, rgba(0, 0, 0, 0.3) -10px 10px, rgba(0, 0, 0, 0.2) -15px 15px, rgba(0, 0, 0, 0.1) -20px 20px, rgba(0, 0, 0, 0.05) -25px 25px',
        '1xl': 'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px',
        '2xl': 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
        '3xl': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        '4xl': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        '6xl': 'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;',
      },
      colors: {
        dullBrown: 'rgb(134, 113, 73)',
        dullBrownLight: 'rgba(134, 113, 73,0.60)',
        foggyGrey: 'rgb(211, 204, 184)',
        barleyWhite: 'rgb(255, 243, 197)',
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
