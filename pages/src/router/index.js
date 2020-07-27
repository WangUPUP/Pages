import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'

import Config from '../views/system/config/index.vue'
import Dept from '../views/system/dept/index.vue'
import Dict from '../views/system/dict/index.vue'
import Menu from '../views/system/menu/index.vue'
import Notice from '../views/system/notice/index.vue'
import Post from '../views/system/post/index.vue'
import Roles from '../views/system/roles/index.vue'
import User from '../views/system/user/index.vue'
import OperLog from '../views/system/log/operLog/index.vue'
import Logininfor from '../views/system/log/logininfor/index.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			name: 'Home',
			path: '/home',
			component: Home,
			meta: {
				title: '首页'
			}
		},
		{
			name: 'System',
			path: '/system',
			meta: { title: '系统管理', icon: 'system' },
			component: Home,
			children: [
				{ name: 'User', path: '/system/user', component: User, meta: { title: '用户管理', icon: 'user' } },
				{ name: 'Roles', path: '/system/role', component: Roles, meta: { title: '角色管理', icon: 'peoples' } },
				{ name: 'Menu', path: '/system/menu', component: Menu, meta: { title: '菜单管理', icon: 'tree-table' } },
				{ name: 'Dept', path: '/system/dept', component: Dept, meta: { title: '部门管理', icon: 'tree' } },
				{ name: 'Post', path: '/system/post', component: Post, meta: { title: '岗位管理', icon: 'post' } },
				{ name: 'Dict', path: '/system/dict', component: Dict, meta: { title: '字典管理', icon: 'dict' } },
				{ name: 'Config', path: '/system/config', component: Config, meta: { title: '参数设置', icon: 'edit' } },
				{ name: 'Notice', path: '/system/notice', component: Notice, meta: { title: '通知公告', icon: 'message' } },
				{
					name: 'Log',
					path: '/system/log',
					meta: { title: '日志管理', icon: 'log' },
					children: [
						{ name: 'Operlog', path: '/system/log/operlog', component: OperLog, meta: { title: '操作日志', icon: 'form' } },
						{
							name: 'Logininfor',
							path: '/system/log/logininfor',
							component: Logininfor,
							meta: { title: '登录日志', icon: 'logininfor' }
						}
					]
				}
			]
		}
	]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
