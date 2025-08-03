import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Incuverse custom colors
				neon: {
					green: 'hsl(var(--neon-green))',
					cyan: 'hsl(var(--neon-cyan))',
					lime: 'hsl(var(--neon-lime))'
				},
				glass: {
					bg: 'hsl(var(--glass-bg))',
					border: 'hsl(var(--glass-border))'
				}
			},
			fontFamily: {
				heading: ['var(--font-heading)'],
				body: ['var(--font-body)'],
				code: ['var(--font-code)']
			},
			backgroundImage: {
				'gradient-neon': 'var(--gradient-neon)',
				'gradient-bg': 'var(--gradient-bg)',
				'gradient-glass': 'var(--gradient-glass)'
			},
			boxShadow: {
				'neon': 'var(--shadow-neon)',
				'glass': 'var(--shadow-glass)',
				'hover': 'var(--shadow-hover)'
			},
			transitionProperty: {
				'glow': 'box-shadow, transform'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'pulse-version': {
					'0%, 100%': { opacity: '0.5' },
					'50%': { opacity: '1' }
				},
				'circuit-flow': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'code-float': {
					'0%': { transform: 'translateX(-50px)', opacity: '0' },
					'10%': { opacity: '0.3' },
					'90%': { opacity: '0.3' },
					'100%': { transform: 'translateX(calc(100vw + 50px))', opacity: '0' }
				},
				'grid-move': {
					'0%': { transform: 'translate(0, 0)' },
					'100%': { transform: 'translate(50px, 50px)' }
				},
				'corner-pulse': {
					'0%, 100%': { opacity: '0.4' },
					'50%': { opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
				'pulse-version': 'pulse-version 2s infinite',
				'circuit-flow': 'circuit-flow 4s linear infinite',
				'code-float': 'code-float 8s linear infinite',
				'grid-move': 'grid-move 20s linear infinite',
				'corner-pulse': 'corner-pulse 3s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
