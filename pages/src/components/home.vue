<template>
	<section>
		<el-container>
			<el-aside width="200px">
				<!-- 页面logo -->
				<el-row class="asideLogo" type="flex" justify="center">
					<el-col :span="6"> </el-col>
					<el-col :span="12">
						<span class="asideName">后台管理系统</span>
					</el-col>
				</el-row>
				<!-- 菜单栏 -->
				<el-row>
					<el-menu unique-opened router background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :default-active="$route.path">
						<template v-for="item in $router.options.routes">
							<!-- 一级菜单 -->
							<el-menu-item v-if="!item.children" :index="item.path" :key="item.name">
								<template slot="title">{{ item.meta.title }}</template>
							</el-menu-item>
							<el-submenu v-else :index="item.path" :key="item.name">
								<template slot="title">{{ item.meta.title }}</template>
								<template v-for="subItem in item.children">
									<!-- 二级菜单 -->
									<el-submenu v-if="subItem.children" :key="subItem.index" :index="subItem.path">
										<template slot="title">
											<span>{{ subItem.meta.title }}</span>
										</template>
										<!-- 三级菜单 -->
										<el-menu-item v-for="child in subItem.children" :key="child.path" :index="child.path">
											<template slot="title">
												<span>{{ child.meta.title }}</span>
											</template>
										</el-menu-item>
									</el-submenu>
									<el-menu-item v-else :key="subItem.index" :index="subItem.path">{{ subItem.meta.title }}</el-menu-item>
								</template>
							</el-submenu>
						</template>
					</el-menu>
				</el-row>
			</el-aside>
			<el-container>
				<!-- 导航栏 -->
				<el-header class="header">
					<el-card class="navbar">
						<el-row type="flex" justify="space-between">
							<el-col class="hamburger" :span="12">
								<el-row type="flex" justify="start">
									<!-- 菜单栏收缩块 -->
									<i class="el-icon-s-fold"> </i>
									<!-- 面包屑导航 -->
									<el-breadcrumb separator="/">
										<el-breadcrumb-item>首页</el-breadcrumb-item>
										<el-breadcrumb-item>...</el-breadcrumb-item>
									</el-breadcrumb>
								</el-row>
							</el-col>
							<!-- 右侧菜单 -->
							<el-col class="right-menu" :span="6">
								<el-row type="flex" justify="start">
									<div><i class="el-icon-search"></i></div>
									<el-input size="medium" class="el-input-search" placeholder="search" v-model="data" style="width : 200px"></el-input>
									<el-dropdown trigger="click">
										<div></div>
										<el-dropdown-menu slot="dropdown">
											<el-dropdown-item>个人中心</el-dropdown-item>
											<el-dropdown-item class="layoutSetting">布局设置</el-dropdown-item>
											<el-dropdown-item>退出登录</el-dropdown-item>
										</el-dropdown-menu>
									</el-dropdown>
								</el-row>
							</el-col>
						</el-row>
					</el-card>
					<el-row class="tabs">
						<el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
							{{ tag.name }}
						</el-tag>
					</el-row>
				</el-header>
				<el-main>
					<transition>
						<keep-alive>
							<!-- <dashboard></dashboard> -->
							<router-view></router-view>
						</keep-alive>
					</transition>
				</el-main>
			</el-container>
		</el-container>
	</section>
</template>

<script>
import Dashboard from '../views/dashboard'
export default {
	name: 'Home',
	components: {
		Dashboard
	},
	data() {
		return {
			tags: [{ name: '标签一' }, { name: '标签二' }, { name: '标签三' }, { name: '标签四' }, { name: '标签五' }],
			data: '',
			// 控制搜索输入框的显示和隐藏
			show: true
		}
	},
	created() {}
}
</script>

<style lang="less" scoped>
section {
	width: 100%;
	// height: 100%;
	height: 1920px;
}

.el-menu {
	border-right: 0px !important;
}
.el-menu-aside {
	min-height: 1100px;
}

.asideLogo img {
	width: 32px;
	height: 32px;
	margin: 10px auto;
}

.asideName {
	line-height: 50px;
}

.asideLogo {
	text-align: center;
	height: 50px;
	background-color: rgb(84, 92, 100);
	color: rgb(255, 255, 255);
}

.el-header {
	padding: 0;
	margin: 0;
	background-color: #fff;
	border-bottom: 1px solid #ebeef5;
	box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.header {
	height: 90px !important;
}

.navbar {
	height: 50px !important;
	background-color: #fff;
	box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.hamburger {
	font-size: 25px;
	font-weight: normal;
	margin: 8px 10px;
}

.navbar /deep/ .el-card__body {
	padding: 0px;
	height: 100%;
}

.el-icon-s-fold {
	margin-right: 20px;
}

.el-breadcrumb {
	margin-top: 8px;
}

.right-menu {
	margin-top: 6px;
}

.el-icon-search {
	font-size: 20px;
	line-height: 36px;
	margin-right: 5px;
}

.el-input-search /deep/ .el-input__inner {
	border: none;
	border-bottom: 1px solid #ebeef5;
	border-radius: 0;
	width: 200px;
}

.el-dropdown {
	margin-left: 30px;
	.focusing {
		outline: none;
	}
	img {
		cursor: pointer;
		width: 40px;
		height: 40px;
	}
}

.layoutSetting {
	border-bottom: 1px solid #ebeef5;
}

.el-dropdown-menu {
	padding: 0px;
}

.el-popper {
	margin-top: 10px;
}

.tabs {
	height: 30px;
	.el-tag {
		margin: 5px 5px;
		border: 1px solid #d8dce5;
		color: #495060;
		background: #fff;
		border-radius: 0px;
		height: 26px;
		line-height: 26px;
	}
}

.tabs /deep/ .el-tag__close {
	color: #495060;
}

.el-container {
	background-color: #f0f2f5;
}

.el-main {
	padding: 0;
	margin: 0;
}
</style>
