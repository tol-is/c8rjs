import { CompositorConfig } from 'c8rjs';

export const averta = {
	familyName: 'averta',
	fallback: 'sans-serif',
	unitsPerEm: 2048,
	xHeight: 998,
	capHeight: 1454,
	ascent: 2012,
	descent: -567,
	lineGap: 0,
	weight: 400,
	italic: false,
};

export const cera = {
	familyName: 'cera',
	fallback: 'sans-serif',
	capHeight: 660,
	ascent: 799,
	descent: -201,
	lineGap: 257,
	unitsPerEm: 1000,
	weight: 400,
	italic: false,
};

export const plex = {
	familyName: 'plex',
	fallback: 'sans-serif',
	capHeight: 698,
	ascent: 1025,
	descent: -275,
	lineGap: 0,
	unitsPerEm: 1000,
	weight: 500,
	italic: false,
};

export const mark = {
	familyName: 'mark',
	fallback: 'sans-serif',
	capHeight: 1400,
	ascent: 2028,
	descent: -507,
	lineGap: 0,
	unitsPerEm: 2000,
	weight: 500,
	italic: false,
};

export const peridot = {
	familyName: 'peridot',
	fallback: 'sans-serif',
	capHeight: 700,
	ascent: 1000,
	descent: -230,
	lineGap: 0,
	unitsPerEm: 1000,
	weight: 500,
	italic: false,
};

export const config: CompositorConfig = {
	baseline: 24,
	root: 16,
	fonts: {
		averta,
		cera,
		plex,
		mark,
		peridot,
	},
};
