/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        landing: 'linear-gradient(180deg, #050926 0%, #272E5B 41.39%, #070B29 56.76%, #1D244C 100%)',
        page: 'linear-gradient(180deg, #000732 0%, #232D6F 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        footer: 'linear-gradient(180deg, #2F397C 0%, #141337 100%)',
        gradientapp: 'url("http://localhost:3000/gradient.png")',
        grablue: 'linear-gradient(180deg, rgba(8, 23, 34, 0.01) 78.65%, rgba(47, 95, 130, 0.05) 86.98%, #1B79BE 100%)',
        grapink: 'linear-gradient(0deg, rgba(69, 69, 69, 0.01) 80.8%, rgba(179, 109, 165, 0.5) 92.98%, #B5419B 100%);',
        gracard: 'linear-gradient(45deg, #342782 0%, #1E4898 70.52%, #3B5CB2 100%)',
        gcardfeature: 'linear-gradient(44deg, #251873 0%, #254C99 100%)',
        gradfeatureblue: 'url("http://localhost:3000/bluegrad.png")',
        "bluee": "#1A2360"

      },
      backgroundSize: {
        "shrink": "100% 100%"
      },
      fontFamily: {
        pro: ['var(--font-pro)']
      },
      stroke: {
        gradientapp: 'url("http://localhost:3000/gradient.png")'
      },
      height: {
        "res": "calc(100vh - (96px))",
        "400": "400px"

      },
      maxHeight: {
        "400": "400px"

      },
      minHeight: {
        "res": "calc(100vh - (96px))",
        "460": "460px",
        "400": "400px"
      },
      maxWidth: {
        "1260": "1260px"
      },
      width: {
        "875": "87.5%",
        "1260": "1260px"
      },
      colors: {
        "blue-navy": "#264191",
        "bluee": "#1A2360"

      }

    },
  },
  plugins: [],
}
