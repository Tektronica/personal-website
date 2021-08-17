const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components/SlimCard/**/*.{js,ts,jsx,tsx}',
    './components/templates/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'false', // or 'media' or 'class'
  // defining custom options in theme
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
        blue: colors.lightBlue,
        // red: colors.rose,
        red: '#d90429',
        // pink: colors.fuchsia,
        amaranth: '#B7094C',
        palatinate: '#723C70',
        sapphire: '#2E6F95'
      },

      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },

      // https://github.com/tailwindlabs/tailwindcss-typography
      // define the typography key as a function if you need access to the theme helper
      // https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h1: {
              color: theme('colors.pink.500'),
              background: 'white',
              position: 'sticky',
              top: '0',
              borderBottom: 'solid black',
              paddingTop: '8px',
              marginTop: '0px',
              marginBottom: '4px',
              zIndex: '300',

            },
            h2: {
              display: 'flex',
              color: theme('colors.gray.800'),
              textTransform: 'uppercase',
              marginTop: '16px',
              marginBottom: '0px',

            },
            h3: {
              color: theme('colors.gray.800'),
            },
            strong: {
              color: theme('colors.gray.800'),
            },
            a: {
              textDecoration: 'no-underline',
              color: theme('colors.sapphire'),
              '&:hover': {
                color: theme('colors.palatinate')
              },
            },
          },
        },
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}

  // Head,
  // h1: (props) =>
  //   <h1
  //     style={{ zIndex: "300", color: "red" }}
  //     className={"text-5xl font-bold sticky top-0 bg-white pt-4 border-b-4 border-black text-left uppercase"}>
  //     {props.children}
  //   </h1>,

  // h2: (props) =>
  //   <h2
  //     style={{ color: "black" }}
  //     className={"text-xl font-bold pt-4 bg-white"}>
  //     {props.children}
  //   </h2>,