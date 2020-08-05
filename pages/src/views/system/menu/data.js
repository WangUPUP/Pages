export default {
	init: () => {
		return {
			// 菜单搜索表单对象
			searchMenuFrom: {
				menuName: '',
				status: ''
			},
			// 菜单状态选项
			menuStatusOptions: [
				{ value: '0', label: '正常' },
				{ value: '1', label: '停用' }
			],
			// 控制菜单搜索区域的显示和隐藏
			showSearch: true,
			// 菜单数据列表
			menuList: [
				{
					children: [],
					component: null,
					createTime: '2018-03-16 11:33:00',
					icon: 'system',
					menuId: 1,
					menuName: '系统管理',
					orderNum: '1',
					parentId: 0,
					remark: null,
					status: '0',
					perms: ''
				},
				{
					children: [],
					component: 'system/user/index',
					createTime: '2018-03-16 11:33:00',
					icon: 'user',
					menuId: 100,
					menuName: '用户管理',
					orderNum: '1',
					parentId: 1,
					remark: null,
					status: '0',
					perms: 'system:user:list'
				},
				{
					children: [],
					component: 'system/role/index',
					createTime: '2018-03-16 11:33:00',
					icon: 'role',
					menuId: 101,
					menuName: '角色管理',
					orderNum: '2',
					parentId: 1,
					remark: null,
					status: '0',
					perms: 'system:role:list'
				},
				{
					children: [],
					component: '',
					createTime: '2018-03-16 11:33:00',
					icon: '',
					menuId: 1001,
					menuName: '用户查询',
					orderNum: '1',
					parentId: 100,
					remark: null,
					status: '0',
					perms: 'system:user:query'
				},
				{
					children: [],
					component: '',
					createTime: '2018-03-16 11:33:00',
					icon: '',
					menuId: 1002,
					menuName: '用户新增',
					orderNum: '2',
					parentId: 100,
					remark: null,
					status: '0',
					perms: 'system:user:add'
				}
			],
			// 控制修改菜单弹出框的显示和隐藏
			editMenuDialogVisible: false,
			// 修改菜单表单对象
			editMenuForm: {
				menuId: ''
			},
			// 菜单类目对象
			menuOptions: [
				{
					id: '1',
					label: '主类目',
					children: [
						{
							id: '10',
							label: '系统管理',
							children: [
								{
									id: '101',
									label: '用户管理',
									children: [
										{ id: '1001', label: '用户查询' },
										{ id: '1002', label: '用户新增' }
									]
								},
								{
									id: '102',
									label: '角色管理',
									children: [
										{ id: '1021', label: '角色查询' },
										{ id: '1022', label: '角色新增' }
									]
								}
							]
						}
					]
				}
			]
		}
	}
}
