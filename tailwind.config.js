module.exports = {
  theme: {
    screens: {
			sm: "540px",
			md: "768px",
			lg: "1024px",
			xl: "1360px",
			xxl: "1600px",
		},
		colors: {
			transparent: "transparent",

			black: "#000",
			white: "#fff",

			gray: {
				100: "#e2e2e2",
				200: "#c6c6c6",
				300: "#ababab",
				400: "#919191",
				500: "#777777",
				600: "#5e5e5e",
				700: "#474747",
				800: "#303030",
				900: "#1b1b1b"
			},
			red: {
				100: "#fff5f5",
				200: "#fed7d7",
				300: "#feb2b2",
				400: "#fc8181",
				500: "#f56565",
				600: "#e53e3e",
				700: "#c53030",
				800: "#9b2c2c",
				900: "#742a2a"
			},
			orange: {
				100: "#fffaf0",
				200: "#feebc8",
				300: "#fbd38d",
				400: "#f6ad55",
				500: "#ed8936",
				600: "#dd6b20",
				700: "#c05621",
				800: "#9c4221",
				900: "#7b341e"
			},
			yellow: {
				100: "#fffff0",
				200: "#fefcbf",
				300: "#faf089",
				400: "#f6e05e",
				500: "#ecc94b",
				600: "#d69e2e",
				700: "#b7791f",
				800: "#975a16",
				900: "#744210"
			},
			green: {
				100: "#f0fff4",
				200: "#c6f6d5",
				300: "#9ae6b4",
				400: "#68d391",
				500: "#48bb78",
				600: "#38a169",
				700: "#2f855a",
				800: "#276749",
				900: "#22543d"
			},
			teal: {
				100: "#e6fffa",
				200: "#b2f5ea",
				300: "#81e6d9",
				400: "#4fd1c5",
				500: "#38b2ac",
				600: "#319795",
				700: "#2c7a7b",
				800: "#285e61",
				900: "#234e52"
			},
			blue: {
				100: "#ebf8ff",
				200: "#bee3f8",
				300: "#90cdf4",
				400: "#63b3ed",
				500: "#4299e1",
				600: "#3182ce",
				700: "#2b6cb0",
				800: "#2c5282",
				900: "#2a4365"
			},
			indigo: {
				100: "#ebf4ff",
				200: "#c3dafe",
				300: "#a3bffa",
				400: "#7f9cf5",
				500: "#667eea",
				600: "#5a67d8",
				700: "#4c51bf",
				800: "#434190",
				900: "#3c366b"
			},
			purple: {
				100: "#faf5ff",
				200: "#e9d8fd",
				300: "#d6bcfa",
				400: "#b794f4",
				500: "#9f7aea",
				600: "#805ad5",
				700: "#6b46c1",
				800: "#553c9a",
				900: "#44337a"
			},
			pink: {
				100: "#fff5f7",
				200: "#fed7e2",
				300: "#fbb6ce",
				400: "#f687b3",
				500: "#ed64a6",
				600: "#d53f8c",
				700: "#b83280",
				800: "#97266d",
				900: "#702459"
			}
		},
		spacing: {
			px: "1px",
			"0": "0",
			"1": "0.25rem",
			"2": "0.5rem",
			"3": "0.75rem",
			"4": "1rem",
			"5": "1.25rem",
			"6": "1.5rem",
			"8": "2rem",
			"10": "2.5rem",
			"12": "3rem",
			"16": "4rem",
			"20": "5rem",
			"24": "6rem",
			"32": "8rem",
			"40": "10rem",
			"48": "12rem",
			"56": "14rem",
			"64": "16rem"
		},
		fontFamily: {
			sans: [
				"'Work Sans'",
				// "'Source Sans Pro'",
				// "'Work Sans'",
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				'"Noto Sans"',
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"'
			],
			serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
			mono: [
				"Menlo",
				"Monaco",
				"Consolas",
				'"Liberation Mono"',
				'"Courier New"',
				"monospace"
			]
		},
		fontSize: {
			xs: "0.75rem",
			sm: "0.875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem"
		},
		maxWidth: (theme, { breakpoints }) => ({
			none: 'none',
			...theme('spacing'),
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			0: '0rem',
			xs: '20rem',
			sm: '24rem',
			md: '28rem',
			lg: '32rem',
			xl: '36rem',
			'2xl': '42rem',
			'3xl': '48rem',
			'4xl': '56rem',
			'5xl': '64rem',
			'6xl': '72rem',
			'7xl': '80rem',
			full: '100%',
			min: 'min-content',
			max: 'max-content',
			prose: '65ch',
			...breakpoints(theme('screens')),
		  }),
	  

  },
  variants: {},
  plugins: [],
  purge: process.env.NODE_ENV === 'production' ? {
    enabled: true,
    content: ['src/**/*.njk', 'src/**/*.js'],
  } : {}
}