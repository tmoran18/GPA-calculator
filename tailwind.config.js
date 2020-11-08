module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'accent-1': '#fff',
				'text-base': '#444',
			},
			backgroundImage: (theme) => ({
				'hero-pattern': "url('/shapes_bg.png')",
				'no-rep': 'no-repeat',
			}),
			fontFamily: {
				openSans: ['Open Sans', 'sans-serif'],
			},
		},
	},
	variants: {
		translate: ['responsive', 'hover', 'focus'],
	},
	plugins: [],
};
