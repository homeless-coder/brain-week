module.exports = {
  content: [
    './src/**/*.njk',
    './src/**/*.svg',
    './src/assets/js/*.js',
    './src/*.css'
  ],
  screens: {
    sm: '576px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  theme: {
    extend: {
      fontFamily: {
        monomakh: ['Monomakh', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'blockquote': {
              fontWeight: 'normal',
              color: theme('colors.slate.600')
            },
            'blockquote p:first-of-type::before': {
              content: ''
            },
            'blockquote p:last-of-type::after': {
              content: ''
            }
          }
        }
      }),
      colors: {
        'primary-color':'#c1d1a5',
        'secondary-color': '#fce7c8',
        'custom-white': '#f0f0f0',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
