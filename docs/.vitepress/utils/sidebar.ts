import { createSidebar } from './index'

enum CATALOG_DICTIONARY {
	NOTE = '笔记',
}

export default {
	'/': createSidebar(CATALOG_DICTIONARY.NOTE),
}
