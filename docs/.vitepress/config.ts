import { defineConfig, type SiteConfig } from 'vitepress'
import nav from './utils/nav'
import sidebar from './utils/sidebar'

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
			copyright: '<a  target="_blank">待定</a>',
		},
		logo: '',
	},
})
