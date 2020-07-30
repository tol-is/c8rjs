import * as CSS from 'csstype';

export type ObjectOrArray<T, K extends keyof any = keyof any> =
	| T[]
	| Record<K, T | Record<K, T> | T[]>;

export type NumberScale = Array<number>;

export interface Style extends CSS.Properties {
	[key: string]: any;
}

export type TypeStyleFontFamilyParams = {
	font: FontOpenType;
};

export type TypeStyleFontFamily = {
	fontFamily: CSS.FontFamilyProperty;
	fontWeight: CSS.FontWeightProperty;
	fontStyle: CSS.FontStyleProperty;
};

export type TypeParams = {
	font: FontOpenType;
	baseline: number;
	size: number;
	leading: number;
	snap: boolean;
};

export type StyleTypography = {
	display: CSS.DisplayProperty;
	fontFamily: CSS.FontFamilyProperty;
	fontWeight: CSS.FontWeightProperty;
	fontStyle: CSS.FontStyleProperty;
	fontSize: CSS.FontSizeProperty<string>;
	lineHeight: CSS.LineHeightProperty<string | number>;
	transform: CSS.TransformProperty;
	paddingTop: CSS.PaddingTopProperty<string>;
	'&:before': {
		content: string;
		marginTop: CSS.MarginProperty<string>;
		display: CSS.DisplayProperty;
		height: CSS.HeightProperty<string | number>;
	};
	'&:after': {
		content: string;
		marginTop: CSS.MarginProperty<string>;
		display: CSS.DisplayProperty;
		height: CSS.HeightProperty<string | number>;
	};
};

export type TextStyleMetrics = {
	fontSize: CSS.FontSizeProperty<string>;
	lineHeight: CSS.LineHeightProperty<string | number>;
	paddingTop: CSS.PaddingTopProperty<string>;
	paddingBottom: CSS.PaddingTopProperty<string>;
	trimTop: CSS.MarginProperty<string>;
	trimBottom: CSS.MarginProperty<string>;
};
