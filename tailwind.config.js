/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020810',
          900: '#040C1A',
          800: '#071428',
          700: '#0A1E3D',
          600: '#0F2850',
          500: '#163263',
          400: '#1E3F7A',
        },
        blue: {
          glow: '#3B82F6',
          bright: '#60A5FA',
          electric: '#38BDF8',
          subtle: '#1D4ED8',
        },
        ink: {
          DEFAULT: '#E8F0FF',
          muted: '#7A99BE',
          dim: '#3E5878',
        },
        accent: {
          DEFAULT: '#FF6B35',
          soft: 'rgba(255,107,53,0.12)',
        },
        live: '#10B981',
        border: {
          DEFAULT: 'rgba(59,130,246,0.18)',
          bright: 'rgba(59,130,246,0.45)',
          subtle: 'rgba(59,130,246,0.08)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter: '-0.02em',
        mono: '0.07em',
        wide: '0.12em',
      },
      boxShadow: {
        glow: '0 0 24px rgba(59,130,246,0.25), 0 0 8px rgba(59,130,246,0.15)',
        'glow-sm': '0 0 12px rgba(59,130,246,0.2)',
        'glow-accent': '0 0 20px rgba(255,107,53,0.3)',
        card: '0 1px 0 rgba(59,130,246,0.1) inset, 0 0 0 1px rgba(59,130,246,0.12)',
        'card-hover': '0 0 0 1px rgba(59,130,246,0.35), 0 4px 32px rgba(59,130,246,0.12)',
        lift: '0 4px 24px rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'grid-navy': `linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)`,
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(29,78,216,0.35) 0%, transparent 70%)',
        'card-shimmer': 'linear-gradient(135deg, rgba(59,130,246,0.06) 0%, transparent 50%, rgba(59,130,246,0.03) 100%)',
        'skill-pill': 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.04) 100%)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
      keyframes: {
        'pulse-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '15%': { opacity: '1' },
          '85%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'layer-in': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'border-glow': {
          '0%, 100%': { 'box-shadow': '0 0 0 1px rgba(59,130,246,0.2)' },
          '50%': { 'box-shadow': '0 0 0 1px rgba(59,130,246,0.5), 0 0 16px rgba(59,130,246,0.15)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'pulse-down': 'pulse-down 2.4s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'layer-in': 'layer-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'float': 'float 4s ease-in-out infinite',
        'border-glow': 'border-glow 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 12s linear infinite',
      },
    },
  },
  plugins: [],
};
