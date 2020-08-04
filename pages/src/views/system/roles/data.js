export default {
	init: () => {
		return {
			// 搜索角色表单对象
			searchRoleForm: {
				roleName: '',
				roleKey: '',
				status: '',
				date: ''
			},
			// 角色状态选项
			rolestatusOptions: [
				{
					value: '正常',
					label: '正常'
				},
				{
					value: '停用',
					label: '停用'
				}
			],
			// 角色数据列表
			rolesList: [
				{
					roleId: 1,
					roleName: '超级管理员',
					roleKey: 'admin',
					roleSort: '1',
					status: '',
					creationTime: '2020-8-3'
				},
				{
					roleId: 2,
					roleName: '管理员',
					roleKey: 'admin',
					roleSort: '2',
					status: '',
					creationTime: '2020-8-3'
				}
			],
			// 控制新增角色对话框的显示和隐藏
			addRoleDialogVisible: false,
			// 新增角色表单对象
			addRoleForm: {
				roleName: '',
				roleKey: '',
				roleSort: 0,
				status: '',
				menuPermissions: [],
				remark: ''
			},
			// 菜单权限数据
			menuPermissionsList: [
				{
					id: 1,
					label: '系统管理',
					children: [
						{
							id: 100,
							label: '用户管理',
							children: [
								{ id: 1001, label: '用户查询' },
								{ id: 1002, label: '用户新增' },
								{ id: 1003, label: '用户修改' },
								{ id: 1004, label: '用户删除' },
								{ id: 1005, label: '用户导出' },
								{ id: 1006, label: '用户导入' },
								{ id: 1007, label: '重置密码' }
							]
						},
						{
							id: 101,
							label: '角色管理',
							children: [
								{ id: 1008, label: '角色查询' },
								{ id: 1009, label: '角色新增' },
								{ id: 1010, label: '角色修改' },
								{ id: 1011, label: '角色删除' },
								{ id: 1012, label: '角色导出' }
							]
						},
						{
							id: 102,
							label: '菜单管理',
							children: [
								{ id: 1013, label: '菜单查询' },
								{ id: 1014, label: '菜单新增' },
								{ id: 1015, label: '菜单修改' },
								{ id: 1016, label: '菜单删除' }
							]
						},
						{
							id: 103,
							label: '部门管理',
							children: [
								{ id: 1017, label: '部门查询' },
								{ id: 1018, label: '部门新增' },
								{ id: 1019, label: '部门修改' },
								{ id: 1020, label: '部门删除' }
							]
						},
						{
							id: 104,
							label: '岗位管理',
							children: [
								{ id: 1021, label: '岗位查询' },
								{ id: 1022, label: '岗位新增' },
								{ id: 1023, label: '岗位修改' },
								{ id: 1024, label: '岗位删除' },
								{ id: 1025, label: '岗位导出' }
							]
						},
						{
							id: 105,
							label: '字典管理',
							children: [
								{ id: 1026, label: '字典查询' },
								{ id: 1027, label: '字典新增' },
								{ id: 1028, label: '字典修改' },
								{ id: 1029, label: '字典删除' },
								{ id: 1030, label: '字典导出' }
							]
						},
						{
							id: 106,
							label: '参数设置',
							children: [
								{ id: 1031, label: '参数查询' },
								{ id: 1032, label: '参数新增' },
								{ id: 1033, label: '参数修改' },
								{ id: 1034, label: '参数删除' },
								{ id: 1035, label: '参数导出' }
							]
						},
						{
							id: 107,
							label: '通知公告',
							children: [
								{ id: 1036, label: '公告查询' },
								{ id: 1037, label: '公告新增' },
								{ id: 1038, label: '公告修改' },
								{ id: 1039, label: '公告删除' }
							]
						},
						{
							id: 108,
							label: '日志管理',
							children: [
								{
									id: 500,
									label: '操作日志',
									children: [
										{ id: 1040, label: '操作查询' },
										{ id: 1041, label: '操作删除' },
										{ id: 1042, label: '日志导出' }
									]
								},
								{
									id: 501,
									label: '登录日志',
									children: [
										{ id: 1043, label: '登录查询' },
										{ id: 1044, label: '登录删除' },
										{ id: 1045, label: '日志导出' }
									]
								}
							]
						}
					]
				}
			],
			// le-tree 节点
			defaultProps: {
				children: 'children',
				label: 'label'
			},
			// 控制修改角色对话框的显示和隐藏
			editRoleDialogVisible: false,
			// 修改角色表单对象
			editRoleForm: {
				roleName: '',
				roleKey: '',
				roleSort: 0,
				status: '',
				menuPermissions: [],
				remark: ''
			},
			// 控制搜索区域的显示和隐藏
			showSearch: true,
			// 修改数据权限对话框的显示和隐藏
			menuPermissionsDialogvisible: false,
			// 修改数据权限表单对象
			menuPermissionsForm: {
				roleName: '',
				roleKey: '',
				options: ''
			},
			menuPermissionsOptions: [
				{
					value: 0,
					label: '全部数据权限'
				},
				{
					value: 1,
					label: '自定义数据权限'
				},
				{
					value: 2,
					label: '本部门数据权限'
				},
				{
					value: 3,
					label: '本部门及一下数据权限'
				},
				{
					value: 4,
					label: '仅本人数据权限'
				}
			]
		}
	}
}
