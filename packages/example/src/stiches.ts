import * as React from 'react';
import { render } from 'react-dom';
import { createStyled } from '@stitches/react';

import { C8R, C8rTypeParams } from 'c8rjs';
import { config } from './c8r.config';
const c8r = new C8R(config);
const theme = {
	fonts: {
		$sans: 'sans',
		$serif: 'serif',
	},
	fontSizes: {
		$1: '16px',
		$2: '18px',
		$3: '21px',
		$4: '24px',
		$5: '32px',
		$6: '48px',
		$7: '72px',
		$8: '112px',
		$9: '160px',
		$10: '210px',
	},
};

const typeScale = {
	$1: 16,
	$2: 18,
	$3: 21,
	$4: 24,
	$5: 32,
	$6: 48,
	$7: 72,
	$8: 112,
	$9: 160,
	$10: 210,
};

const fonts = {
	$sans: 'sans',
	$serif: 'serif',
};

// const size = c8r.type({ fontSize: 48, leading: 3, font: 'sans' });
// const size2 = c8r.type({ fontSize: 72, leading: 3, font: 'sans' });

type TypeValue = {
	fontSize: number | keyof typeof typeScale;
	font: keyof typeof fonts;
	leading: number;
};

export const { styled, css } = createStyled({
	prefix: '',
	tokens: theme,
	breakpoints: {
		sm: rule => `@media (min-width: 640px) { ${rule} }`,
		md: rule => `@media (min-width: 768px) { ${rule} }`,
		lg: rule => `@media (min-width: 1024px) { ${rule} }`,
		xl: rule => `@media (min-width: 1280px) { ${rule} }`,
	},
	utils: {
		type: config => (value: TypeValue) => {
			const fontSize: number =
				typeScale[value.fontSize] || value.fontSize;
			const leading: number = value.leading;
			const font: string = fonts[value.font];

			return c8r.type({ fontSize, leading, font });
		},
	},
});
