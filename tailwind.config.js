/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Map tailwind color names to CSS variables declared in globals.css
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        border: 'var(--border)',
        destructive: 'var(--destructive)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        'chart-1': 'var(--chart-1)',
        'chart-2': 'var(--chart-2)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [],
};
