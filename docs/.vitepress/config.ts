import { defineConfig } from 'vitepress';
import { nav, sidebar } from './utils';

export default defineConfig({
	themeConfig: {
		siteTitle: '我豪',
		nav,
		search: {
			provider: 'local',
		},
		sidebar,
		footer: {
			message:
				'<a > 底部内容 </a>' +
				'&nbsp &nbsp | &nbsp &nbsp' +
				'<a  target="_blank">1</a>',
			copyright: '<a  target="_blank">11111</a>',
		},
		logo: '',
	},

	// vite: {
	// 	plugins: [],
	// },
});
