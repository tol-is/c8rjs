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
	alignToGrid = true,
}: TextTrimParams): TextTrimMetrics => {
	// ratios
	const preventCollapse = 1;
	const descentAbs = Math.abs(font.descent);
	const capHeightRatio = font.capHeight / font.unitsPerEm;
	const ascentRatio = (font.ascent - font.capHeight) / font.unitsPerEm;
	const descentRatio = descentAbs / font.unitsPerEm;

	// bounding box
	const boundingBox = font.ascent + descentAbs + font.lineGap;
	const boundingBoxHeight = (boundingBox / font.unitsPerEm) * fontSize;

	// type height
	const capSize = capHeightRatio * fontSize;
	const baselineRows = capSize / baseline;
	const typeRows = Math.round(baselineRows);

	const typeHeight = typeRows * baseline;

	// leading
	const leadingValue = alignToGrid ? Math.round(leading) : leading;
	const minLeading = alignToGrid ? typeRows : typeHeight;
	const typeLeading =
		leading < 0 ? Math.max(leadingValue, minLeading * -1) : leadingValue;

	// line height
	const typeLineGap = typeLeading * baseline;
	const typeLineHeight = typeHeight + typeLineGap;

	// leading trim
	const lineGapHeight = (font.lineGap / font.unitsPerEm) * fontSize;
	const lineHeightOffset =
		(boundingBoxHeight - typeLineHeight - lineGapHeight) / 2;

	const trimTop = ascentRatio * fontSize - lineHeightOffset;
	const trimBottom = descentRatio * fontSize - lineHeightOffset;

	const trimTopSize = trimTop * -1 - preventCollapse;
	const trimBottomSize = trimBottom * -1 - preventCollapse;

	const rowHeight = typeLineHeight + 2 + trimTopSize + trimBottomSize;

	// align to baseline
	const paddingTop = alignToGrid
		? preventCollapse +
		  Math.ceil(rowHeight / baseline) * baseline -
		  rowHeight
		: preventCollapse;

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
