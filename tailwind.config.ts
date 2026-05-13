import type { Config } from 'tailwindcss';
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: { fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] }, boxShadow:{soft:'0 10px 30px -12px rgba(15,23,42,.15)'} } },
  plugins: []
} satisfies Config;
