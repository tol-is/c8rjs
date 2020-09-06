import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';

export const createRollupConfig = pkg => ({
	input: ['./src/index.ts'],
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			exports: 'named',
			sourcemap: true,
		},
		{
			file: pkg.module,
			format: 'es',
			exports: 'named',
			sourcemap: true,
		},
	],
	external: [...Object.keys(pkg.peerDependencies || {})],
	plugins: [resolve(), typescript()],
});
