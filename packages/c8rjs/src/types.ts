export interface CompositorConfig {
	baseline: number;
	root: number;
	fonts: FontConfig;
}

export interface FontConfig {
	[key: string]: FontOpenType;
}

export interface FontOpenType {
	familyName: string;
	fallback: string;
	upm: number;
	xHeight?: number;
	capHeight: number;
	lineGap: number;
	ascent: number;
	descent: number;
	weight: number;
	italic: boolean;
}

export type TextTrimMetrics = {
	fontFamily: string;
	fontWeight: number;
	fontStyle: 'italic' | 'normal';
	fontSize: number;
	lineHeight: number;
	paddingTop: number;
	paddingBottom: number;
	trimTop: number;
	trimBottom: number;
};
