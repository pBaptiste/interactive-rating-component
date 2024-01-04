/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'orange' : '#FC7614',
				'light-gray' : '#969FAD',
				'dark-blue' : '#262E38',
				'medium-gray' : '#7C8798',
			},
			backgroundImage: {
				'black-gradient' : 'radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)',
			},
		},
	},
	plugins: [],
}
