export default {
	one: {
		children: [],
		component: null,
		createBy: null,
		createTime: '2018-03-16 11:33:00',
		icon: 'system',
		isFrame: '1',
		menuId: 1,
		menuName: '系统管理',
		menuType: 'M',
		orderNum: '1',
		params: {},
		parentId: 0,
		parentName: null,
		path: 'system',
		perms: '',
		remark: null,
		searchValue: null,
		status: '0',
		updateBy: null,
		updateTime: null,
		visible: '0'
	},
	two: {
		children: [],
		component: 'system/user/index',
		createBy: null,
		createTime: '2018-03-16 11:33:00',
		icon: 'user',
		isFrame: '1',
		menuId: 100,
		menuName: '用户管理',
		menuType: 'C',
		orderNum: '1',
		params: {},
		parentId: 1,
		parentName: null,
		path: 'user',
		perms: 'system:user:list',
		remark: null,
		searchValue: null,
		status: '0',
		updateBy: null,
		updateTime: null,
		visible: '0'
	},
	three: {
		children: [],
		component: 'system/role/index',
		createBy: null,
		createTime: '2018-03-16 11:33:00',
		icon: 'peoples',
		isFrame: '1',
		menuId: 101,
		menuName: '角色管理',
		menuType: 'C',
		orderNum: '2',
		params: {},
		parentId: 1,
		parentName: null,
		path: 'role',
		perms: 'system:role:list',
		remark: null,
		searchValue: null,
		status: '0',
		updateBy: null,
		updateTime: null,
		visible: '0'
	},
	four: {
		children: [],
		component: '',
		createBy: null,
		createTime: '2018-03-16 11:33:00',
		icon: '#',
		isFrame: '1',
		menuId: 1001,
		menuName: '用户查询',
		menuType: 'F',
		orderNum: '1',
		params: {},
		parentId: 100,
		parentName: null,
		path: '',
		perms: 'system:user:query',
		remark: null,
		searchValue: null,
		status: '0',
		updateBy: null,
		updateTime: null,
		visible: '0'
	},
	five: {
		children: [],
		component: '',
		createBy: null,
		createTime: '2018-03-16 11:33:00',
		icon: '#',
		isFrame: '1',
		menuId: 1002,
		menuName: '用户新增',
		menuType: 'F',
		orderNum: '2',
		params: {},
		parentId: 100,
		parentName: null,
		path: '',
		perms: 'system:user:add',
		remark: null,
		searchValue: null,
		status: '0',
		updateBy: null,
		updateTime: null,
		visible: '0'
	}
}
