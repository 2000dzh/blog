const fs = require('fs')

const path = require('path')
const { resolve } = path

const scanDir = (pathName) => {
	const path = resolve(__dirname, `../../${pathName}`)
	return getMsg(path)
}

const getMsg = (path) => {
	let res = fs
		.readdirSync(path)
		.filter((item) => !(String(item) === '.DS_Store'))
	if (res) {
		let arr = res.map((item) => {
			if (String(item).endsWith('.md')) {
				return {
					text: item.split('.')[0],
					link: resolve(path, item),
				}
			} else {
				return {
					text: item.split('.')[0],
					items: getMsg(resolve(path, item)),
					collapsible: true,
				}
			}
		})
		arr = arr.map((item) => {
			if (item.link) {
				item.link = translateDir(item.link)
			}
			return item
		})
		return arr
	} else {
		console.warn('无文章')
	}
}

function translateDir(path) {
	return path.replace(/\\/g, '/').split('docs')[1].split('.')[0]
}

export default {
	'/': scanDir('views'),
}
