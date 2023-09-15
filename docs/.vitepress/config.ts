import { defineConfig, type SiteConfig } from 'vitepress'

export default defineConfig({
	themeConfig: {
		siteTitle: '我豪',
		nav: [
			{ text: '首页', link: '/' },
			{ text: '笔记', link: '/笔记/' },
		],
		search: {
			provider: 'local',
		},
		footer: {
			message:
				'<a > 底部内容 </a>' +
				'&nbsp &nbsp | &nbsp &nbsp' +
				'<a  target="_blank">1</a>',
			copyright: '<a  target="_blank">待定</a>',
		},
		logo: '',
	},
})
