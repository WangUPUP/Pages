export default {
	init: () => {
		return {
			// 菜单搜索表单对象
			searchMenuFrom: {
				menuName: '',
				status: ''
			},
			// 菜单状态选项
			menuOptions: [
				{ value: '0', label: '正常' },
				{ value: '1', label: '停用' }
			],
			// 控制菜单搜索区域的显示和隐藏
			showSearch: true
		}
	}
}
