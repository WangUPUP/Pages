<template>
	<div>
		<el-card>
			<!-- 角色搜索区域 -->
			<el-row class="role-contain" v-if="showSearch">
				<el-form label-width="70px" :model="searchRoleForm" class="role-search">
					<el-form-item label="角色名称" prop="roleName" class="search-form-item">
						<el-input v-model="searchRoleForm.userName" clearable placeholder="请输入角色名称"></el-input>
					</el-form-item>
					<el-form-item label="权限字符" prop="roleKey" class="search-form-item">
						<el-input v-model="searchRoleForm.phone" clearable placeholder="请输入权限字符"></el-input>
					</el-form-item>
					<el-form-item label="状态" prop="status" class="search-form-item">
						<el-select v-model="searchRoleForm.status" placeholder="角色状态" clearable>
							<el-option
								v-for="item in rolestatusOptions"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							>
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="创建时间" prop="date" class="search-form-item">
						<el-date-picker
							v-model="searchRoleForm.date"
							type="daterange"
							range-separator="-"
							start-placeholder="开始日期"
							end-placeholder="结束日期"
							size="mini"
							popper-class="time-picker"
							clearable
						>
						</el-date-picker>
					</el-form-item>
					<el-button type="primary" size="mini" icon="el-icon-search" class="role-search-btns">
						搜索
					</el-button>
					<el-button size="mini" icon="el-icon-refresh" class="role-search-btns">重置</el-button>
				</el-form>
			</el-row>
			<!-- 用户操作区域 -->
			<el-row class="role-btns" type="flex" justify="space-between">
				<el-col>
					<el-button icon="el-icon-plus" size="mini" type="primary" @click="showAddRoleDialogVisible">
						新增
					</el-button>
					<el-button icon="el-icon-edit" size="mini" type="success" @click="showEditRoleDialogVisible"
						>修改</el-button
					>
					<el-button icon="el-icon-delete" size="mini" type="danger" @click="showDeleteRoleDataDialogVisible">
						删除
					</el-button>
					<el-button icon="el-icon-download" size="mini" type="warning" @click="showExportDialogVisible">
						导出
					</el-button>
				</el-col>
				<el-col :span="2">
					<el-tooltip class="item" effect="dark" content="刷新角色数据" placement="top">
						<el-button circle icon="el-icon-refresh" class="hide-search"></el-button>
					</el-tooltip>
					<el-tooltip class="item" effect="dark" content="隐藏用角色搜索" placement="top">
						<el-button circle icon="el-icon-search" class="refresh" @click="showSearchPart"></el-button>
					</el-tooltip>
				</el-col>
			</el-row>
			<!-- 角色数据展示区域 -->
			<el-row class="roles-table">
				<el-table
					:data="rolesList"
					style="width: 100%"
					:header-cell-style="{ background: '#F8F8F9', color: '#606266' }"
				>
					<el-table-column type="selection" width="55"> </el-table-column>
					<el-table-column prop="roleId" label="角色编号" width="120px"> </el-table-column>
					<el-table-column prop="roleName" label="角色名称" width="150px"> </el-table-column>
					<el-table-column prop="roleKey" label="权限字符" width="150px"> </el-table-column>
					<el-table-column prop="roleSort" label="显示顺序" width="100px"> </el-table-column>
					<el-table-column prop="status" label="状态" width="100px">
						<template slot-scope="scope">
							<el-switch
								v-model="scope.row.status"
								active-color="#13ce66"
								inactive-color="#ff4949"
								active-value="0"
								inactive-value="1"
							>
							</el-switch>
						</template>
					</el-table-column>
					<el-table-column prop="creationTime" label="创建时间" width="180px"> </el-table-column>
					<el-table-column label="操作" align="center">
						<template slot-scope="scope">
							<el-button type="text" size="mini" icon="el-icon-edit" @click="showEditRoleDialogVisible">
								修改
							</el-button>
							<el-button
								type="text"
								size="mini"
								icon="el-icon-circle-check"
								@click="showMenuPermissionsDialogvisible"
								>数据权限
							</el-button>
							<el-button
								type="text"
								size="mini"
								icon="el-icon-delete"
								@click="showDeleteRoleDataDialogVisible"
							>
								删除
							</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-row>

			<!-- 分页区域 -->
			<el-row>
				<el-pagination
					:current-page="1"
					:page-sizes="[100, 200, 300, 400]"
					:page-size="100"
					layout="total, sizes, prev, pager, next, jumper"
					:total="400"
				>
				</el-pagination>
			</el-row>
		</el-card>
		<!-- 新增角色弹出框区域 -->
		<el-dialog title="添加角色" :visible.sync="addRoleDialogVisible" width="25%">
			<el-form :model="addRoleForm" label-width="80px">
				<el-form-item prop="roleName" label="角色名称" required>
					<el-input placeholder="请输入角色名称" v-model="addRoleForm.roleName"></el-input>
				</el-form-item>
				<el-form-item prop="rolekey" label="权限字符" required>
					<el-input placeholder="请输入权限字符" v-model="addRoleForm.roleName"></el-input>
				</el-form-item>
				<el-form-item prop="roleSort" label="角色顺序" required>
					<el-input-number
						v-model="addRoleForm.roleSort"
						controls-position="right"
						:min="0"
						:max="10"
					></el-input-number>
				</el-form-item>
				<el-form-item prop="status" label="状态">
					<el-radio-group v-model="addRoleForm.status">
						<el-radio :label="0">正常</el-radio>
						<el-radio :label="1">停用</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item prop="roleName" label="菜单权限">
					<el-tree
						:data="menuPermissionsList"
						show-checkbox
						node-key="id"
						:props="defaultProps"
						accordion
						ref="tree"
						@check-change="handleCheckChange"
					>
					</el-tree>
				</el-form-item>
				<el-form-item prop="remark" label="备注">
					<el-input placeholder="请输入内容" type="textarea" autosize v-model="addRoleForm.remark"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="addRoleDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="addRoleDialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
		<!-- 修改角色弹出框区域 -->
		<el-dialog title="修改角色" :visible.sync="editRoleDialogVisible" width="25%">
			<el-form :model="editRoleForm" label-width="80px">
				<el-form-item prop="roleName" label="角色名称" required>
					<el-input placeholder="请输入角色名称" v-model="editRoleForm.roleName"></el-input>
				</el-form-item>
				<el-form-item prop="rolekey" label="权限字符" required>
					<el-input placeholder="请输入权限字符" v-model="editRoleForm.roleKey"></el-input>
				</el-form-item>
				<el-form-item prop="roleSort" label="角色顺序" required>
					<el-input-number
						v-model="editRoleForm.roleSort"
						controls-position="right"
						:min="0"
						:max="10"
					></el-input-number>
				</el-form-item>
				<el-form-item prop="status" label="状态">
					<el-radio-group v-model="editRoleForm.status">
						<el-radio :label="0">正常</el-radio>
						<el-radio :label="1">停用</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item prop="roleName" label="菜单权限">
					<el-tree
						:data="menuPermissionsList"
						show-checkbox
						node-key="id"
						:props="defaultProps"
						accordion
						ref="tree"
						@check-change="handleCheckChange"
					>
					</el-tree>
				</el-form-item>
				<el-form-item prop="remark" label="备注">
					<el-input
						placeholder="请输入内容"
						type="textarea"
						autosize
						v-model="editRoleForm.remark"
					></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="addRoleDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="addRoleDialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
		<!-- 修改角色数据权限对话框 -->
		<el-dialog title="提示" :visible.sync="menuPermissionsDialogvisible" width="30%">
			<el-form :model="menuPermissionsForm" label-width="80px">
				<el-form-item prop="roleName" label="角色名称">
					<el-input placeholder="请输入角色名称" v-model="menuPermissionsForm.roleName" disabled></el-input>
				</el-form-item>
				<el-form-item prop="rolekey" label="权限字符">
					<el-input placeholder="请输入权限字符" v-model="menuPermissionsForm.roleName" disabled></el-input>
				</el-form-item>
				<el-form-item prop="options" label="权限范围">
					<el-select v-model="menuPermissionsForm.options" placeholder="请选择">
						<el-option
							v-for="item in menuPermissionsOptions"
							:key="item.value"
							:label="item.label"
							:value="item.value"
						>
						</el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="menuPermissionsDialogvisible = false">取 消</el-button>
				<el-button type="primary" @click="menuPermissionsDialogvisible = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import data from './data'
import methods from './methods'
export default {
	methods: methods,
	data() {
		return data.init()
	}
}
</script>

<style lang="less" scoped>
.el-card {
	padding: 0;
	margin-top: -0.3125rem;
	border: none;
}

// 角色表单搜索区域

.role-search {
	display: flex;
	flex-flow: row warp;
	.el-form-item {
		margin-right: 15px;
	}
	.el-form-item__content {
		width: 25%;
	}
	.el-form-item /deep/ .el-form-item__label {
		font-weight: bold;
	}
}

.search-form-item /deep/ .el-input__inner {
	width: 15rem;
	height: 32px;
	line-height: 32px;
}

.search-form-item /deep/.el-date-editor {
	padding: 5px 10px 3px;
}

.date-picke {
	position: relative;
}

.role-search-btns {
	height: 100%;
	margin-top: 8px;
}

// 用户操作区域
.refresh,
.hide-search {
	padding: 7px;
}

.role-btns {
	margin-bottom: 10px;
}

// 用户数据展示区域
.roles-table {
	margin-bottom: 20px;
}

.el-row .el-pagination {
	float: right;
}
</style>
