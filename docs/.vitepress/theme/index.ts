import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import './style.scss';
// import Home from './views/home.vue'

export default {
	...DefaultTheme,
	Layout() {
		return h(DefaultTheme.Layout, null, {});
	},
};
