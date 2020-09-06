import typescript from 'rollup-plugin-typescript2';
import url from 'rollup-plugin-url';

export const createRollupConfig = pkg => ({
	input: ['src/index.ts'],
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
	plugins: [
		typescript({
			clean: true,
			rollupCommonJSResolveHack: false,
		}),
	],
});
