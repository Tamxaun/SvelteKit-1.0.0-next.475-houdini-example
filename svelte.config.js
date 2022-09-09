import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [preprocess()],
	kit: {
		adapter: adapter(),

		alias: {
			$houdini: path.resolve('.','$houdini'),
			$lib: path.resolve('.', 'src/lib')
		}
	}
};

export default config;
