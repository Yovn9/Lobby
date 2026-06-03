import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'monospace'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        lobby: {
          bg: '#080B11',
          surface: '#0D1117',
          card: '#111827',
          border: '#1E2A3A',
          cyan: '#00F5FF',
          purple: '#8B5CF6',
          pink: '#FF2D78',
          green: '#00FF87',
          amber: '#FFB800',
          muted: '#4B5563',
          text: '#E2E8F0',
          subtle: '#94A3B8',
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)",
        'cyber-gradient': 'linear-gradient(135deg, #080B11 0%, #0D1A2D 50%, #080B11 100%)',
        'neon-cyan': 'linear-gradient(135deg, #00F5FF, #0080FF)',
        'neon-purple': 'linear-gradient(135deg, #8B5CF6, #EC4899)',
        'neon-green': 'linear-gradient(135deg, #00FF87, #00D4FF)',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0,245,255,0.3), 0 0 60px rgba(0,245,255,0.1)',
        'neon-purple': '0 0 20px rgba(139,92,246,0.3), 0 0 60px rgba(139,92,246,0.1)',
        'neon-pink': '0 0 20px rgba(255,45,120,0.3), 0 0 60px rgba(255,45,120,0.1)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0,245,255,0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0,245,255,0.6), 0 0 40px rgba(0,245,255,0.2)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
export default config
