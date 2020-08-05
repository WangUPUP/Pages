<template>
	<div class="icon-body">
		<el-input v-model="name" placeholder="请输入图标名称" clearable>
			<i slot="suffix" class="el-input__icon el-icon-search"></i>
		</el-input>
		<div class="icon-list">
			<div v-for="(item, index) in iconsList" :key="index" @click="selectIcon(item)">
				<svg-icon :icon-class="item" style="width : 16px; height : 30px"></svg-icon>
				<span>{{ item }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import icons from './requireIcons'
export default {
	data() {
		return {
			name: '',
			iconsList: icons
		}
	},
	created() {},
	methods: {
		selectIcon() {}
	}
}
</script>

<style lang="less" scoped>
.icon-body {
	width: 100%;
	padding: 10px;
	.icon-list {
		height: 200px;
		overflow-y: scroll;
		div {
			height: 30px;
			line-height: 30px;
			margin-bottom: -5px;
			cursor: pointer;
			width: 33%;
			float: left;
		}
		span {
			display: inline-block;
			vertical-align: -0.15em;
			fill: currentColor;
			overflow: hidden;
		}
	}
}
</style>
