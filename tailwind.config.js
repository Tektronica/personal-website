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
        blue: colors.sky,
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
              fontSize: theme('fontSize.2xl')
            },

            h2: {
              display: 'flex',
              color: theme('colors.gray.800'),
              textTransform: 'uppercase',
              marginTop: '16px',
              marginBottom: '0px',
              fontSize: theme('fontSize.lg'),
              base: {
                fontSize: theme('fontSize.4xl'),
              }
            },
            p: {
              fontSize: theme('fontSize.sm')
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

        lg: {
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
              fontSize: theme('fontSize.4xl')
            },

            h2: {
              display: 'flex',
              color: theme('colors.gray.800'),
              textTransform: 'uppercase',
              marginTop: '16px',
              marginBottom: '0px',
              fontSize: theme('fontSize.2xl'),
            },
            p: {
              fontSize: theme('fontSize.lg')
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
