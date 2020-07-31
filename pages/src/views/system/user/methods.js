export default {
	showAddUserDialogVisible() {
		this.addUserDialogVisible = !this.addUserDialogVisible
	},
	showUploadDialogVisible() {
		this.uploadDialogVisible = !this.uploadDialogVisible
	},
	showExportDialogVisible() {
		this.$confirm('是否确认导出所有用户数据项?', '提示', {
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
	}
}
