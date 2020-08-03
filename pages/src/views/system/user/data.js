export default {
	init: () => {
		return {
			// 部门搜索关键字
			deptName: '',
			// 部门数据
			deptlist: [
				{
					id: '1',
					label: '节能科技',
					children: [
						{
							id: '10',
							label: '深圳',
							children: [
								{ id: '101', label: '开发部门' },
								{ id: '102', label: '维护部门' },
								{ id: '103', label: '测试部门' }
							]
						},
						{
							id: '11',
							label: '长沙分公司',
							children: [
								{ id: '111', label: '开发部门' },
								{ id: '112', label: '维护部门' },
								{ id: '113', label: '测试部门' }
							]
						}
					]
				}
			],
			// 搜索用户表单对象
			userForm: {
				userName: '',
				phone: '',
				state: '',
				date: ''
			},
			// 用户状态选项
			options: [
				{
					value: '正常',
					label: '正常'
				},
				{
					value: '停用',
					label: '停用'
				}
			],
			// 用户数据列表
			userList: [
				{
					id: 1,
					userName: 'admin',
					nickName: '老大',
					dept: '开发部门',
					phone: '123456789',
					status: '0',
					creationTime: '2020-20-20',
					userId: '1'
				},
				{
					id: 2,
					userName: 'user',
					nickName: '普通用户',
					dept: '开发部门',
					phone: '987654321',
					status: '1',
					creationTime: '2020-20-21',
					userId: '2'
				}
			],
			// 控制添加用户弹出框的显示和隐藏
			addUserDialogVisible: false,
			// 添加用户表单对象
			addUserForm: {
				nickName: '',
				deptId: [],
				phone: '',
				email: '',
				userName: '',
				password: '',
				gender: '',
				status: '',
				postId: '',
				roleId: '',
				remark: ''
			},
			// 用户性别选项
			gender: [
				{
					value: '0',
					label: '男'
				},
				{
					value: '1',
					label: '女'
				},
				{
					value: '2',
					label: '未知'
				}
			],
			// 岗位信息
			post: [
				{
					label: '董事长',
					value: 1
				},
				{
					label: '项目经理',
					value: 2
				},
				{
					label: '人力资源',
					value: 3
				},
				{
					label: '普通员工',
					value: 4
				}
			],
			// 角色信息
			roles: [
				{
					label: '管理员',
					value: 1
				},
				{
					label: '普通用户',
					value: 2
				}
			],
			// 控制修改用户弹出框的显示和隐藏
			editUserDialogVisible: false,
			// 修改用户表单对象
			editUserForm: {
				nickName: '',
				deptId: [],
				phone: '',
				email: '',
				userName: '',
				password: '',
				gender: '',
				status: '',
				postId: '',
				roleId: '',
				remark: ''
			},
			// 控制导入用户数据弹出框的显示和隐藏
			uploadDialogVisible: false,
			// 是否更新已经存在的用户数据
			checked: false,
			// 控制搜索区域的显示和隐藏
			showSearch: true
		}
	}
}
