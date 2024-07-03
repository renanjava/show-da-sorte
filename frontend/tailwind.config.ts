

export default defineConfig({
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#123456',
      },
    },
  },
  plugins: [],
});
function defineConfig(arg0: { content: string[]; theme: { extend: { colors: { customColor: string; }; }; }; plugins: never[]; }) {
  throw new Error("Function not implemented.");
}

