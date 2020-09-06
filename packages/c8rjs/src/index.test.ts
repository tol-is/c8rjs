import { c8rjs } from './';
import { merge } from './merge';
import { baseConfig } from './mock';

test('matrix', () => {
	const config = merge(baseConfig, { alignToGrid: true });
	const compositor = new c8rjs(config);

	const metrics = compositor.text({
		fontSize: 24,
		leading: 2,
		font: 'inter',
	});

	console.log(metrics);
	expect(true).toBe(true);
});
