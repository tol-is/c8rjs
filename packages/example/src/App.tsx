import * as React from 'react';
import { css } from 'emotion';

import { C8R, C8rTypeParams } from 'c8rjs';
import { config } from './c8r.config';

import { TextMetrics } from './TextMetrics';

const c8r = new C8R(config);

const Text = ({ fontSize, leading, font, children }) => {
	const typeStyles = c8r.type({ fontSize, leading, font });

	return (
		<div
			className={css({
				...typeStyles,
				backgroundColor: 'rgba(255,255,255,0.5)',
			})}
		>
			{children}
		</div>
	);
};

const Metrics = ({ font, ...rest }) => {
	const fontOT = config.fonts[font];
	return <TextMetrics font={fontOT} {...rest} />;
};

const tests = [
	[
		{
			fontSize: 121,
			leading: 2,
			font: 'peridot',
			children: 'Peridot',
		},
		{
			fontSize: 121,
			leading: 2,
			font: 'peridot',
			children:
				'Magna cupidatat adipisicing consectetur ullamco adipisicing et cillum aliqua. Magna nulla ea ipsum ullamco anim laboris eiusmod incididunt sunt sit. Occaecat elit enim dolor mollit sunt reprehenderit irure consequat ut fugiat commodo.',
		},
	],
	[
		{
			fontSize: 121,
			leading: 2,
			font: 'averta',
			children: 'Averta',
		},
		{
			fontSize: 121,
			leading: 2,
			font: 'averta',
			children:
				'Magna cupidatat adipisicing consectetur ullamco adipisicing et cillum aliqua. Magna nulla ea ipsum ullamco anim laboris eiusmod incididunt sunt sit. Occaecat elit enim dolor mollit sunt reprehenderit irure consequat ut fugiat commodo.',
		},
	],
	[
		{
			fontSize: 121,
			leading: 2,
			font: 'cera',
			children: 'Cera',
		},
		{
			fontSize: 121,
			leading: 2,
			font: 'cera',
			children:
				'Magna cupidatat adipisicing consectetur ullamco adipisicing et cillum aliqua. Magna nulla ea ipsum ullamco anim laboris eiusmod incididunt sunt sit. Occaecat elit enim dolor mollit sunt reprehenderit irure consequat ut fugiat commodo.',
		},
	],
	[
		{
			fontSize: 121,
			leading: 2,
			font: 'plex',
			children: 'Plex',
		},
		{
			fontSize: 121,
			leading: 2,
			font: 'plex',
			children:
				'Magna cupidatat adipisicing consectetur ullamco adipisicing et cillum aliqua. Magna nulla ea ipsum ullamco anim laboris eiusmod incididunt sunt sit. Occaecat elit enim dolor mollit sunt reprehenderit irure consequat ut fugiat commodo.',
		},
	],

	[
		{
			fontSize: 121,
			leading: 2,
			font: 'mark',
			children: 'Mark',
		},
		{
			fontSize: 42,
			leading: 1,
			font: 'mark',
			children:
				'Magna cupidatat adipisicing consectetur ullamco adipisicing et cillum aliqua. Magna nulla ea ipsum ullamco anim laboris eiusmod incididunt sunt sit. Occaecat elit enim dolor mollit sunt reprehenderit irure consequat ut fugiat commodo.',
		},
	],
];

export default () => {
	let bg = css`
		background-color: #060606;
		color: #ffffff;
		min-height: 100vh;
		padding-left: 5vw;
		padding-right: 5vw;
		padding-top: 48px;
		background-repeat: repeat;
		display: grid;
		gap: ${24 * 10}px;
		padding: ${24 * 4}px ${24 * 10}px;
		background-size: 100% ${24}px;
		background-image: linear-gradient(
			rgba(255, 255, 255, 0.5) 1px,
			transparent 0
		);
	`;

	return (
		<section className={bg}>
			{tests.map(([t1, t2]) => (
				<>
					<Text {...t1} />
					{/* <Text {...t2} /> */}
				</>
			))}
		</section>
	);
};

// {fib.map((f, i) => (
// 	<div
// 		className={css`
// 			font-size: ${root + fib[i]}px;
// 		`}
// 	>
// 		Hamburgerfostic
// 	</div>
// ))}
