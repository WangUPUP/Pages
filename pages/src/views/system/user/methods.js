export default {
	// 控制新增用户对话框的显示和隐藏
	showAddUserDialogVisible() {
		this.addUserDialogVisible = !this.addUserDialogVisible
	},
	// 控制修改用户对话框的显示和隐藏
	showEditUserDialogVisible() {
		this.editUserDialogVisible = !this.editUserDialogVisible
	},
	// 控制 导入用户数据对话框的显示和隐藏
	showUploadDialogVisible() {
		this.uploadDialogVisible = !this.uploadDialogVisible
	},
	// 导出所有用户 确认框
	showExportDialogVisible() {
		this.$confirm('是否确认导出所有用户数据项?', '提示', {
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
					message: '已取消导出!'
				})
			})
	},
	// 删除用书数据确认框
	showDeleteUserDataDialogVisible() {
		this.$confirm('是否删除该用户数据?', '提示', {
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
					message: '已取消删除!'
				})
			})
	},
	// 控制搜索区域的显示和隐藏
	showSearchPart() {
		this.showSearch = !this.showSearch
	}
}
