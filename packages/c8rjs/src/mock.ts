export const playFair = {
	familyName: 'Playfair Display',
	fallback: 'serif',
	unitsPerEm: 1000,
	xHeight: 514,
	capHeight: 708,
	ascent: 1082,
	descent: -251,
	lineGap: 0,
	weight: 400,
	italic: true,
};

export const inter = {
	familyName: 'Inter',
	fallback: 'sans-serif',
	unitsPerEm: 2816,
	xHeight: 1536,
	capHeight: 2048,
	lineGap: 0,
	ascent: 2728,
	descent: -680,
	weight: 400,
	italic: false,
};

export const baseConfig = {
	baseline: 8,
	root: 16,
	useRem: false,
	alignToGrid: false,
	fonts: {
		inter,
	},
};
