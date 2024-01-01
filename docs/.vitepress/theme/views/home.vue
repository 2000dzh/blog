<template>
	<div class="home-content">
		<div class="content-area">
			<div class="navigation-bar-hea">
				<span class="recently-released">📖最近发布</span>
				<LinkBtn />
			</div>
			<div class="recently-posts">
				<div
					class="post-item"
					v-for="(obj, index) in recentlyPosts"
					:key="index"
				>
					<ArticleCard :obj="obj" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LinkBtn from '../components/LinkBtn.vue';
import ArticleCard from '../components/ArticleCard.vue';

const recentlyPosts = ref([
	{
		title: 'git常用命令',
		time: '2024-1-1',
		link: '/笔记/git/常用命令.html',
	},
	{
		title: 'vue2-简单的订阅发布',
		time: '2023-12-31',
		link: '/笔记/vue2/简单的订阅发布.html',
	},
]);
</script>

<style scoped lang="scss">
.home-content {
	width: 100%;

	.content-area {
		max-width: 1400px;
		margin: auto;

		.navigation-bar-hea {
			display: flex;
			justify-content: space-between;
			padding: 20px 40px;

			.recently-released {
				font-size: 20px;
				font-weight: 900;
			}
		}

		.recently-posts {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			height: 340px;
			overflow: hidden;
			padding: 20px;
		}
	}
}
</style>
