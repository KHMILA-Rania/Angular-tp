/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",
    "../src/app/app.component.html"
  ],
  theme: {
    extend: {colors: {
      'my-blue': '#007bff',
      },},
  },
  plugins: [],
}

