import { FontOpenType, TextTrimMetrics } from './types';

export interface TextTrimParams {
	font: FontOpenType;
	baseline: number;
	fontSize: number;
	leading: number;
	alignToGrid: boolean;
}

export const textTrim = ({
	font,
	baseline,
	fontSize,
	leading = 0,
	alignToGrid = false,
}: TextTrimParams): TextTrimMetrics => {
	// ratios
	const preventCollapse = 0.4;
	const descentAbs = Math.abs(font.descent);
	const capHeightRatio = font.capHeight / font.upm;
	const ascentRatio = (font.ascent - font.capHeight) / font.upm;
	const descentRatio = descentAbs / font.upm;

	// bounding box
	const boundingBox = font.ascent + descentAbs + font.lineGap;
	const boundingBoxHeight = (boundingBox / font.upm) * fontSize;

	// type height
	const capSize = capHeightRatio * fontSize;
	const baselineRows = capSize / baseline;
	const typeRows = Math.round(baselineRows);
	// const typeRows = capSize / baseline % 1 < 0.8 ? Math.floor(baselineRows) : Math.ceil(baselineRows);
	const typeHeight = alignToGrid ? typeRows * baseline : capSize;

	// leading
	const leadingValue = alignToGrid ? Math.round(leading) : leading;
	const minLeading = alignToGrid ? typeRows : typeHeight;
	const typeLeading =
		leading < 0 ? Math.max(leadingValue, minLeading * -1) : leadingValue;

	// line height
	const typeLineGap = typeLeading * baseline;
	const typeLineHeight = typeHeight + typeLineGap;

	// leading trim
	const lineGapHeight = (font.lineGap / font.upm) * fontSize;
	const lineHeightOffset =
		(boundingBoxHeight - typeLineHeight - lineGapHeight) / 2;

	const trimTop = ascentRatio * fontSize - lineHeightOffset;
	const trimBottom = descentRatio * fontSize - lineHeightOffset;

	// align to baseline
	const paddingTop = preventCollapse; //alignToGrid
	// ? preventCollapse + ((trimBottom + trimTop) % baseline)
	// : preventCollapse;

	const trimTopSize = trimTop * -1 - preventCollapse;
	const trimBottomSize = trimBottom * -1 - preventCollapse;

	return {
		fontFamily: font.familyName,
		fontWeight: font.weight,
		fontStyle: font.italic ? 'italic' : 'normal',
		fontSize: fontSize,
		lineHeight: typeLineHeight,
		paddingTop: paddingTop,
		paddingBottom: preventCollapse,
		trimTop: trimTopSize,
		trimBottom: trimBottomSize,
	};
};
