import { CompositorConfig } from './types';
import { textTrim } from './text-trim';
import { get } from './get';

export class c8rjs {
	config: CompositorConfig;

	constructor(config: CompositorConfig) {
		this.config = config;
	}

	text = (props: {
		fontSize: number;
		leading: number;
		font: string;
		alignToGrid?: boolean;
	}) => {
		const { baseline, fonts } = this.config;
		const { fontSize, leading, alignToGrid = true } = props;
		const fontOT = get(fonts, props.font, null);

		const trimMetrics = textTrim({
			font: fontOT,
			baseline,
			fontSize,
			leading,
			alignToGrid,
		});

		return {
			display: 'inline-block',
			fontFamily: trimMetrics.fontFamily,
			fontWeight: trimMetrics.fontWeight,
			fontStyle: trimMetrics.fontStyle,
			lineHeight: `${trimMetrics.lineHeight}px`,
			fontSize: `${trimMetrics.fontSize}px`,
			paddingTop: `${trimMetrics.paddingTop}px`,
			paddingBottom: `${trimMetrics.paddingBottom}px`,
			'&:before': {
				display: 'block',
				content: '""',
				height: 0,
				marginTop: `${trimMetrics.trimTop}px`,
			},
			'&:after': {
				display: 'block',
				content: '""',
				height: 0,
				marginBottom: `${trimMetrics.trimBottom}px`,
			},
		};
	};
}

export default c8rjs;
