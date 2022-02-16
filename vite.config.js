import { defineConfig } from 'vite';
const { resolve } = require('path');
export default defineConfig({
	root: '_site',
	build: {
		outDir: '../dist',
		rollupOptions: {
			input: {
				main: resolve(__dirname, '_site', 'index.html'),
			},
		},
		emptyOutDir: true,
	},
});