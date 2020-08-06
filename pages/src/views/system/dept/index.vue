<template>
	<div>
		<el-card>
			<!-- 菜单搜索区域 -->
			<el-row class="dept-contain" v-if="showSearch">
				<el-form label-width="70px" :model="searchDeptForm" class="dept-search">
					<el-form-item label="部门名称" prop="deptName" class="search-form-item">
						<el-input v-model="searchDeptForm.deptName" clearable placeholder="请输入部门名称"></el-input>
					</el-form-item>
					<el-form-item label="状态" prop="status" class="search-form-item">
						<el-select v-model="searchDeptForm.status" placeholder="部门状态" clearable>
							<el-option
								v-for="item in deptOptions"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							>
							</el-option>
						</el-select>
					</el-form-item>
					<el-button type="primary" size="mini" icon="el-icon-search" class="dept-search-btn">
						搜索
					</el-button>
					<el-button size="mini" icon="el-icon-refresh" class="dept-reset-btn">重置</el-button>
				</el-form>
			</el-row>
			<!-- 按钮操作区域 -->
			<el-row class="role-btns" type="flex" justify="space-between">
				<el-col>
					<el-button type="primary" class="add-btns" size="mini" icon="el-icon-plus">新增</el-button>
				</el-col>
				<el-col :span="2">
					<el-tooltip class="item" effect="dark" content="刷新角色数据" placement="top">
						<el-button circle icon="el-icon-refresh" class="refresh"></el-button>
					</el-tooltip>
					<el-tooltip class="item" effect="dark" content="隐藏用角色搜索" placement="top">
						<el-button circle icon="el-icon-search" class="hide-search" @click="showSearchPart"></el-button>
					</el-tooltip>
				</el-col>
			</el-row>
			<!-- 菜单数据展示区域 -->
			<el-row class="dept-table">
				<el-table
					:data="deptList"
					style="width: 100%"
					:header-cell-style="{ background: '#F8F8F9', color: '#606266' }"
					row-key="deptId"
					:tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
				>
					<el-table-column prop="deptName" label="部门名称" width="260px"> </el-table-column>
					<el-table-column prop="deptSort" label="排序" width="200px"> </el-table-column>
					<el-table-column prop="status" label="状态" width="100px" align="center"> </el-table-column>
					<el-table-column prop="createTime" label="创建时间" width="200px" align="center"> </el-table-column>
					<el-table-column label="操作" align="center">
						<template slot-scope="scope">
							<el-button type="text" size="mini" icon="el-icon-edit" @click="showEditDeptDialogVisible">
								修改
							</el-button>
							<el-button
								type="text"
								size="mini"
								icon="el-icon-circle-check"
								@click="showAddDeptDialogvisible"
							>
								新增
							</el-button>
							<el-button type="text" size="mini" icon="el-icon-delete" @click="deleteDeptDialogVisible">
								删除
							</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-row>
		</el-card>
		<!-- 修改部门对话框区域 -->
		<el-dialog title="修改部门" :visible.sync="editDeptDialogVisible" width="31%">
			<el-form :model="editDeptForm" label-width="80px">
				<el-row>
					<el-col :span="12">
						<el-form-item label="部门名称" prop="deptName" required>
							<el-input
								v-model="editDeptForm.deptName"
								size="medium"
								placeholder="请输入部门名称"
							></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="显示排序" prop="deptSort" required>
							<el-input-number
								controls-position="right"
								v-model="editDeptForm.deptSort"
								size="medium"
							></el-input-number>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<el-form-item label="负责人" prop="leader">
							<el-input v-model="editDeptForm.leader" size="medium" placeholder="请输入负责人"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="联系电话" prop="phone">
							<el-input
								v-model="editDeptForm.phone"
								size="medium"
								placeholder="请输入联系电话"
							></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<el-form-item label="邮箱" prop="email">
							<el-input v-model="editDeptForm.email" size="medium" placeholder="请输入邮箱"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="部门状态">
							<el-radio-group v-model="editDeptForm.status">
								<el-radio :label="0">正常</el-radio>
								<el-radio :label="1">停用</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="editDeptDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="editDeptDialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import data from './data'
import methods from './methods'
export default {
	data() {
		return data.init()
	},
	methods: methods,
	created() {
		this.getDeptList()
	}
}
</script>

<style lang="less" scoped>
.el-card {
	padding: 0;
	margin-top: -0.3125rem;
	border: none;
}

// 菜单搜索区域
.dept-search {
	display: flex;
	flex-flow: row warp;
	.el-form-item {
		margin-right: 15px;
	}
	.el-form-item__content {
		width: 25%;
	}
}
.el-form-item /deep/ .el-form-item__label {
	font-weight: bold;
}

.search-form-item /deep/ .el-input__inner {
	width: 15rem;
	height: 32px;
	line-height: 32px;
}

.dept-search-btn,
.dept-reset-btn {
	height: 100%;
	margin-top: 8px;
}

.dept-search-btn {
	background-color: #20b2aa;
	border: 1px solid #20b2aa;
}
// 按钮操作区域
.refresh,
.hide-search {
	padding: 7px;
}

.role-btns {
	margin-bottom: 10px;
}

// 菜单数据展示区域
.dept-table {
	margin-bottom: 20px;
}
</style>
