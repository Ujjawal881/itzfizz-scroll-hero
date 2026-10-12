import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#10120f',
        lime: '#c6f36b',
        paper: '#f2f2ed',
      },
    },
  },
  plugins: [],
};
export default config;
