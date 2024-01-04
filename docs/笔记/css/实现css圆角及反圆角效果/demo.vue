<template>
	<div class="tab-list">
		<div
			class="tab-item"
			v-for="tab in tabList"
			:key="tab.value"
			:class="activeTab === tab.value ? 'tab-selected' : ''"
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
// https://juejin.cn/post/7224311569777934392

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
$tab-bgcolor: #e2e8f8;
.tab-list {
	display: flex;
	border-radius: 12px 12px 0 0;
	background-color: $tab-bgcolor;
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
		opacity: 0.65;
		position: relative;
		cursor: pointer;
	}
	.tab-selected {
		opacity: 1;
		background: #ffffff;
		border-radius: 12px 12px 0 0;
		// box-shadow: 12px 12px 0 0 blue, -12px 12px 0 0 blue;
		box-shadow: 12px 12px 0 0 #ffffff, -12px 12px 0 0 #ffffff;
		&::before {
			content: '';
			position: absolute;
			left: -12px;
			bottom: 0px;
			width: 12px;
			height: $tab-height;
			background-color: $tab-bgcolor;
			border-radius: 0 0 12px 0;
		}
		&::after {
			content: '';
			position: absolute;
			right: -12px;
			bottom: 0px;
			width: 12px;
			height: $tab-height;
			background-color: $tab-bgcolor;
			border-radius: 0 0 0 12px;
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
