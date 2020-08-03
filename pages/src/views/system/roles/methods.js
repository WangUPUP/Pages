export default {
	// 控制新增角色对话框的显示和隐藏
	showAddRoleDialogVisible() {
		this.addRoleDialogVisible = !this.addRoleDialogVisible
	},
	// 控制修改角色对话框的显示和隐藏
	showEditRoleDialogVisible() {
		this.editRoleDialogVisible = !this.editRoleDialogVisible
	},
	// 控制删除角色对话框的显示和隐藏
	showDeleteRoleDataDialogVisible() {
		this.$confirm('确认删除该角色?', '提示', {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			type: 'warning'
		})
			.then(() => {
				this.$message({
					type: 'success',
					message: '删除成功!'
				})
			})
			.catch(() => {
				this.$message({
					type: 'info',
					message: '已取消删除'
				})
			})
	},
	// 控制导出角色数据对话框的显示和隐藏
	showExportDialogVisible() {
		this.$confirm('是否确认导出所有角色数据?', '提示', {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			type: 'warning'
		})
			.then(() => {
				this.$message({
					type: 'success',
					message: '导出成功!'
				})
			})
			.catch(() => {
				this.$message({
					type: 'info',
					message: '已取消导出'
				})
			})
	},
	// 控制搜索区域的显示和隐藏
	showSearchPart() {
		this.showSearch = !this.showSearch
	},
	// 新增角色 权限节点数组获取
	handleCheckChange() {
		let res = this.$refs.tree.getCheckedNodes()
		let arr = []
		res.forEach(item => {
			arr.push(item.id)
		})
		this.addRoleForm.menuPermissions = arr
	},
	// 控制 修改数据权限对话框的显示和隐藏
	showMenuPermissionsDialogvisible() {
		this.menuPermissionsDialogvisible = !this.menuPermissionsDialogvisible
	}
}
