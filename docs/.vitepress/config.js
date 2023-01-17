import sidebar from './utils/sidebar'

const config = {
	title: '前端加油站🧠',
	description: '学习开发日常记录',
	themeConfig: {
		search: true, //展示搜索
		algolia: {
			appKey: '',
			indexName: '',
			searchParameters: {
				faeFilters: ['tags:guide,api'],
			},
		},
    sidebar,
		logo: '', // 网站nav栏logo
		lastUpdated: 'Last Updated',
    author: '我豪', //  作者
    
	},
  appearance: 'dark', // dark theme
}

export default config
