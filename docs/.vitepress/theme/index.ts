import { h, onMounted, watch, onBeforeUnmount, nextTick } from 'vue';
import DefaultTheme from 'vitepress/theme';
import './style.scss';
import 'animate.css';
import { useRoute } from 'vitepress';
// import Home from './views/home.vue'

export default {
	...DefaultTheme,
	setup() {
		onMounted(() => {
			addTypingAnimation();
		});

		onBeforeUnmount(() => {
			clearObserver();
		});

		const route = useRoute();

		let intersectionObserver: IntersectionObserver | null = null;

		const addTypingAnimation = () => {
			const main =
				(document.querySelector('.vp-doc>div') as HTMLElement) || {};

			const paragraph = getChildNodes(main.childNodes || []);

			paragraph.forEach((item) => {
				const observer = new IntersectionObserver(
					([{ isIntersecting }]) => {
						const distanceFromTop =
							document.documentElement.scrollTop ||
							document.body.scrollTop;

						// 进入可视区
						if (isIntersecting) {
							observer.unobserve(item);

							item.classList.add('animate__animated');
							if (distanceFromTop === 0) {
								// 初始化
								item.classList.add('animate__fadeInDown');
							} else {
								item.classList.add('animate__fadeInUp');
							}
						}
					}
				);
				observer.observe(item);
				intersectionObserver = observer;
			});
		};

		const getChildNodes = (nodes) => {
			const nodeList: Array<Element> = [];
			nodes.forEach((node) => {
				// 只添加元素节点
				if (node.nodeType === Node.ELEMENT_NODE) {
					nodeList.push(node);
				}
			});

			return nodeList;
		};

		const clearObserver = () => {
			if (intersectionObserver) {
				intersectionObserver.disconnect();
				intersectionObserver = null;
			}
		};

		watch(
			() => route.path,
			() => {
        console.log('2112')
				clearObserver();
				addTypingAnimation();
			},
			{
				flush: 'post',
			}
		);
	},
	Layout() {
		return h(DefaultTheme.Layout, null, {});
	},
};
