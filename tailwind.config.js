/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "node_modules/flowbite-react/lib/esm/**/*.js"],
  theme: {
    extend: {
      colors: {
        rhino: "#21376D",
        gray1: "#525c5d",
        set: "#adb5bd",
        grid: "#f9fafb",
        eee: "#eeeff",
      },
      borderWidth: {
        '3': '3px'
      },
      backgroundImage: {
        avatar: "url('./src/asset/bg.svg')"
      },
      boxShadow: {
        '3xl': '-7px -2px 25px -5px rgba(0, 0, 0, .12)',
        '4xl': '0px 0px 10px 2px #f0f0f0',
        '5xl': '0 0 10px 0 rgba(183, 192, 206, .2)',
      },
      zIndex: {
        '100': '100',
        '120': '120'
      },
      fontSize: {
        base1: '0.8rem',
        title: '15px',
        trTitle: '14px',
        ititle: '13px',
      },
      borderWidth: {
        '3': '3px'
      },
      borderColor: {
        grid: "#f9fafb",
        rhino: "#21376D",
      },
      flexBasis: {
        '1/60': '60%'
      },
      height: {
        '4xl': '206px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')({
      datatables: true,
    })
  ],
}

