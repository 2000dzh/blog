import fs from 'fs'
import path from 'path'

export const createSidebar = (catalogue) => {
	let res = fs.readdirSync(path.resolve(__dirname, `../../${catalogue}`))
	if (res) {
		let arr = res.map((item) => {
			if (String(item).endsWith('.md')) {
				return {
					text: item,
					link: `${catalogue}/${item}`,
				}
			} else {
				return {
					text: item,
					items: createSidebar(`${catalogue}/${item}`),
					collapsible: true,
				}
			}
		})

		return arr
	} else {
		console.warn('无文章')
	}
}
