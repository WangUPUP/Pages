export default {
	// 获取菜单列表数据
	getList() {
		let list = this.menuList
		this.menuList = this.handleTree(list, 'menuId')
	},
	// 控制搜索区域显示和隐藏
	showSearchPart() {
		this.showSearch = !this.showSearch
	},
	// 控制修改菜单的显示和隐藏
	showEditMenuDialogVisible() {
		this.editMenuDialogVisible = !this.editMenuDialogVisible
	},
	showMenuPermissionsDialogvisible() {},
	showDeleteRoleDataDialogVisible() {}
}
