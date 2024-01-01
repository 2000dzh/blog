import fs from 'fs';
import path from 'path';

enum CATALOG_DICTIONARY {
	NOTE = '笔记',
}

export const createSidebar = (catalogue: string) => {
	let res = fs.readdirSync(path.resolve(__dirname, `../../${catalogue}`));
	if (res) {
		let arr = res.map((item) => {
			if (String(item).endsWith('.md')) {
				const items = item.replace('.md', '').split('--');
				return {
					text: items[0],
					link: `${catalogue}/${item}`,
					initTime: new Date(items[1]).getTime() || Date.now(),
				};
			} else {
				return {
					text: item,
					items: createSidebar(`${catalogue}/${item}`),
					collapsible: true,
				};
			}
		});
		return arr;
	} else {
		console.warn('无内容');
	}
};

export const getRecentlyPost = (limit = 8) => {
	return [];
};

export const sidebar = {
	'/': createSidebar(CATALOG_DICTIONARY.NOTE),
};
