export default {
	init: () => {
		return {
			// 部门搜索表单对象
			searchDeptForm: {
				deptName: '',
				state: ''
			},
			// 控制部门搜索区域的显示和隐藏
			showSearch: true,
			// 部门状态选项
			deptOptions: [
				{
					label: '正常',
					value: 0
				},
				{
					label: '停用',
					value: 1
				}
			],
			// 部门数据列表
			deptList: [
				{
					deptName: '节能科技',
					deptSort: 0,
					status: '0',
					deptId: 100,
					parentId: 0,
					createTime: '2018-03-16 11:33:00',
					children: []
				},
				{
					deptName: '深圳总公司',
					deptSort: 1,
					status: '0',
					deptId: 101,
					parentId: 100,
					createTime: '2018-03-16 11:33:00',
					children: []
				},
				{
					deptName: '长沙总公司',
					deptSort: 2,
					status: '0',
					deptId: 102,
					parentId: 100,
					createTime: '2018-03-16 11:33:00',
					children: []
				},
				{
					deptName: '开发部门',
					deptSort: 1,
					status: '0',
					deptId: 103,
					parentId: 101,
					createTime: '2018-03-16 11:33:00',
					children: []
				},
				{
					deptName: '运维部门',
					deptSort: 2,
					status: '0',
					deptId: 104,
					parentId: 101,
					createTime: '2018-03-16 11:33:00',
					children: []
				},
				{
					deptName: '测试部门',
					deptSort: 1,
					status: '0',
					deptId: 105,
					parentId: 102,
					createTime: '2018-03-16 11:33:00',
					children: []
				},
				{
					deptName: '市场部门',
					deptSort: 1,
					status: '0',
					deptId: 106,
					parentId: 102,
					createTime: '2018-03-16 11:33:00',
					children: []
				}
			],
			// 控制修改部门的显示和隐藏
			editDeptDialogVisible: false,
			// 修改部门表单对象
			editDeptForm: {
				deptName: '',
				deptSort: 0,
				leader: '',
				phone: '',
				email: '',
				status: 0
			},
			// 控制新增部门对话框的显示和隐藏
			deptAddDeptDialogvisible: false,
			// 控制删除部门对话框的显示和隐藏
			deleteDeptDialogVisible: false
		}
	}
}
