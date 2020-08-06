export default {
	// 获取部门列表数据
	getDeptList() {
		let list = this.deptList
		this.deptList = this.handleTree(list, 'deptId')
	}, // 控制搜索区域的显示和隐藏
	showSearchPart() {
		this.showSearch = !this.showSearch
	},
	// 控制修改部门对话框的显示和隐藏
	showEditDeptDialogVisible() {
		this.editDeptDialogVisible = !this.editDeptDialogVisible
	},
	// 控制新增部门对话框的显示和隐藏
	showAddDeptDialogvisible() {
		this.addDeptDialogvisible = !this.addDeptDialogvisible
	},
	howDeleteDeptDataDialogVisible() {
		this.deleteDeptDialogVisible = !this.deleteDeptDialogVisible
	}
}
