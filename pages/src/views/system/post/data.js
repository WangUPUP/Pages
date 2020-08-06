export default {
	init: () => {
		return {
			// 控制搜索区域的显示和隐藏
			showSearch: true,
			// 岗位搜索表单对象
			searchPostForm: {
				postId: '',
				postName: '',
				status: ''
			},
			// 部门状态选项
			postOptions: [
				{ value: '正常', lebal: 0 },
				{ value: '停用', lebal: 1 }
			],
			// 岗位列表数据
			postList: [
				{
					postId: 1,
					postCode: 'ceo',
					postName: '董事长',
					postSort: '1',
					status: '0',
					createTime: '2018-03-16 11:33:00'
				},
				{
					postId: 2,
					postCode: 'se',
					postName: '项目经理',
					postSort: '2',
					status: '0',
					createTime: '2018-03-16 11:33:00'
				},
				{
					postId: 3,
					postCode: 'hr',
					postName: '人力资源',
					postSort: '3',
					status: '0',
					createTime: '2018-03-16 11:33:00'
				},
				{
					postId: 4,
					postCode: 'user',
					postName: '普通员工',
					postSort: '4',
					status: '0',
					createTime: '2018-03-16 11:33:00'
				}
			],
			// 岗位状态选项
			postStatusOptions: [
				{
					label: '正常',
					value: 0
				},
				{
					label: '停用',
					value: 1
				}
			],
			// 控制修改岗位弹出框的显示和隐藏
			addPostDialogVisible: false,
			// 修改岗位表单对象
			addPostForm: {
				postName: '',
				postCode: '',
				postSort: '',
				status: '',
				remark: ''
			}
		}
	}
}
