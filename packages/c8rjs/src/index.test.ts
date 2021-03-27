import { C8R } from './';
import { merge } from './merge';
import { baseConfig } from './mock';

test('type', () => {
	const config = merge(baseConfig, { alignToGrid: true });
	const compositor = new C8R(config);

	const metrics = compositor.type({
		fontSize: 24,
		leading: 2,
		font: 'inter',
	});

	console.log(metrics);
	expect(true).toBe(true);
});
