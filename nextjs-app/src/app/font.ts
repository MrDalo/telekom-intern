import localFont from 'next/font/local';

export const teleGrotesk = localFont({
	src: [
		{
			path: './fonts/TeleGroteskNextThin.ttf',
			weight: '200',
			style: 'normal'
		},
		{
			path: './fonts/TeleGroteskNextRegular.ttf',
			weight: '400',
			style: 'normal'
		},
		{
			path: './fonts/TeleGroteskNextRegularItalic.ttf',
			weight: '400',
			style: 'italic'
		},
		{
			path: './fonts/TeleGroteskNextMedium.ttf',
			weight: '600',
			style: 'normal'
		},
		{
			path: './fonts/TeleGroteskNextMediumItalic.ttf',
			weight: '600',
			style: 'italic'
		},
		{
			path: './fonts/TeleGroteskNextBold.ttf',
			weight: '700',
			style: 'normal'
		},
		{
			path: './fonts/TeleGroteskNextBoldItalic.ttf',
			weight: '700',
			style: 'italic'
		},
		{
			path: './fonts/TeleGroteskNextUltra.ttf',
			weight: '900',
			style: 'normal'
		}
	],
	variable: '--font-teleGrotesk'
});
