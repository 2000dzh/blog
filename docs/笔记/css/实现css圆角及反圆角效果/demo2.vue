<template>
	<div class="tab-list">
		<div
			class="tab-item"
			v-for="tab in tabList"
			:key="tab.value"
			:class="activeTab === tab.value ? 'tab-selected' : 'not-selected'"
			@click="handleClick(tab.value)"
		>
			<span>{{ tab.label }}</span>
		</div>
	</div>

	<div class="content-area">内容{{ activeTab }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 参考
// https://juejin.cn/post/7230737419842633788

let activeTab = ref(0);
const tabList = ref(
	Array.from({ length: 3 }, function (item, index) {
		return {
			label: `选项${index + 1}`,
			value: index,
		};
	})
);

const handleClick = (value: number) => {
	activeTab.value = value;
};
</script>

<style scoped lang="scss">
$tab-height: 52px;
$active-color: #ffffff;
$default-color: #e2e8f8;
.tab-list {
	display: flex;
  position: relative;
	border-radius: 12px 12px 0 0;
  z-index: 2;
	background-color: $default-color;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	overflow: hidden;
	.tab-item {
		flex: 1;
		height: $tab-height;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 15px;
		font-weight: 600;
		position: relative;
		cursor: pointer;
	}
	.tab-selected {
		opacity: 1;
		background: $active-color;
		border-radius: 12px 12px 0 0;
		box-shadow: 24px 40px 0 $active-color, -24px 40px 0 0 $active-color; // 重点
		&::before {
			content: '';
			position: absolute;
			left: -6px;
			bottom: 0px;
			width: 12px;
			height: $tab-height;
			background-color: $active-color;
			transform: skewX(-15deg);
			border-top-left-radius: 12px;
		}
		&::after {
			content: '';
			position: absolute;
			right: -6px;
			bottom: 0px;
			width: 12px;
			height: $tab-height;
			background-color: $active-color;
			transform: skewX(15deg);
			border-top-right-radius: 12px;
		}
	}
	.not-selected {
		&::before {
			content: '';
			position: absolute;
			left: 6px;
			bottom: 0;
			width: 12px;
			height: $tab-height;
			border-bottom-left-radius: 12px;
			background: $default-color;
			transform: skewX(15deg);
		}
		&::after {
			content: '';
			position: absolute;
			right: 6px;
			bottom: 0;
			width: 12px;
			height: $tab-height;
			border-bottom-right-radius: 12px;
			background: $default-color;
			transform: skewX(-15deg);
      z-index: 1;
		}
	}
}
.content-area {
	width: 100%;
	height: 120px;
	line-height: 120px;
	text-align: center;
	background-color: #ccc;
}
</style>
