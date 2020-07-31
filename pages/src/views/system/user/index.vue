<template>
	<el-card>
		<el-row :gutter="15">
			<!-- 部门数据区域 -->
			<el-col :span="4" class="dept-search-container">
				<!-- 部门搜索框 -->
				<el-row class="dept-container-header">
					<el-input
						placeholder="请输入部门名称"
						prefix-icon="el-icon-search"
						v-model="deptName"
						class="dept-search-form"
					></el-input>
				</el-row>
				<!-- 部门数据 -->
				<el-row class="dept-container-body">
					<el-tree :data="deptlist" default-expand-all></el-tree>
				</el-row>
			</el-col>
			<!-- 用户数据区域 -->
			<el-col :span="20" class="user-contain">
				<!-- 用户数据搜索区域 -->
				<el-row>
					<el-form label-width="70px" :model="userForm" class="user-search">
						<el-form-item label="用户名称" prop="userName" class="search-form-item">
							<el-input v-model="userForm.userName" clearable placeholder="请输入用户名称"></el-input>
						</el-form-item>
						<el-form-item label="手机号码" prop="phone" class="search-form-item">
							<el-input v-model="userForm.phone" clearable placeholder="请输入手机号码"></el-input>
						</el-form-item>
						<el-form-item label="状态" prop="state" class="search-form-item">
							<el-select v-model="userForm.state" placeholder="用户状态" clearable>
								<el-option
									v-for="item in options"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								>
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="创建时间" prop="date" class="search-form-item">
							<el-date-picker
								v-model="userForm.date"
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
					</el-form>
					<el-row class="user-search-btns">
						<el-col><el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button></el-col>
						<el-col><el-button size="mini" icon="el-icon-refresh">重置</el-button></el-col>
					</el-row>
				</el-row>
				<!-- 用户数据区域 -->
				<el-row>
					<!-- 操作区域 -->
					<el-row class="user-btns">
						<el-button icon="el-icon-plus" size="mini" type="primary" @click="showAddUserDialogVisible">
							新增
						</el-button>
						<el-button icon="el-icon-edit" size="mini" type="success">修改</el-button>
						<el-button icon="el-icon-delete" size="mini" type="danger">删除</el-button>
						<el-button icon="el-icon-upload2" size="mini" type="info" @click="showUploadDialogVisible">
							导入
						</el-button>
						<el-button icon="el-icon-download" size="mini" type="warning" @click="showExportDialogVisible"
							>导出</el-button
						>
					</el-row>
					<!-- 数据展示区域 -->
					<el-row class="user-table">
						<el-table :data="userList" style="width: 100%">
							<el-table-column prop="id" label="用户编号"> </el-table-column>
							<el-table-column prop="userName" label="用户名称"> </el-table-column>
							<el-table-column prop="nickName" label="用户昵称"> </el-table-column>
							<el-table-column prop="dept" label="部门"> </el-table-column>
							<el-table-column prop="phone" label="手机号码"> </el-table-column>
							<el-table-column prop="status" label="状态">
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
							<el-table-column prop="creationTime" label="创建时间"> </el-table-column>
							<el-table-column label="操作" width="220px">
								<template slot-scope="scope">
									<el-button type="text" size="mini" icon="el-icon-edit">修改</el-button>
									<el-button
										type="text"
										size="mini"
										icon="el-icon-delete"
										v-if="scope.row.userId === '1'"
										>删除</el-button
									>
									<el-button type="text" size="mini" icon="el-icon-refresh">重置</el-button>
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
				</el-row>
			</el-col>
		</el-row>
		<!-- 添加用户弹出框区域 -->
		<el-dialog title="添加用户" :visible.sync="addUserDialogVisible" width="30%">
			<el-form :model="addUserForm" label-width="80px" class="add-user-form" size="medium">
				<el-row>
					<el-col :span="12">
						<el-form-item label="用户昵称" prop="nickName" required>
							<el-input placeholder="请输入用户昵称" v-model="addUserForm.nickName"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="归属部门" prop="dept" required>
							<treeselect v-model="addUserForm.deptId" :multiple="true" :options="deptlist" />
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<el-form-item label="手机号码" prop="phone" required>
							<el-input v-model="addUserForm.phone" placeholder="请输入手机号码"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="邮箱" prop="email" required>
							<el-input v-model="addUserForm.email" placeholder="请输入邮箱"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<el-form-item label="用户名称" prop="userName" required>
							<el-input v-model="addUserForm.userName" placeholder="请输入用户名称"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="用户密码" prop="password" required>
							<el-input v-model="addUserForm.password" placeholder="请输入用户密码"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<el-form-item label="用户性别" prop="gender">
							<el-select v-model="addUserForm.gender" placeholder="请选择性别">
								<el-option
									v-for="item in gender"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								>
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="状态" prop="status">
							<el-radio-group v-model="addUserForm.status">
								<el-radio label="0">正常</el-radio>
								<el-radio label="1">停用</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<el-form-item label="岗位" prop="post">
							<el-select v-model="addUserForm.postId" placeholder="请选择岗位">
								<el-option
									v-for="item in post"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								>
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="角色" prop="roleId">
							<el-select v-model="addUserForm.roleId" placeholder="请选择岗位">
								<el-option
									v-for="item in roles"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								>
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-form-item label="备注" prop="remark" class="form-textarea">
						<el-input type="textarea" :rows="3" placeholder="请输入内容"></el-input>
					</el-form-item>
				</el-row>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="addUserDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="addUserDialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
		<!-- 导入用户数据 弹出框区域 -->
		<el-dialog title="用户导入" :visible.sync="uploadDialogVisible" width="20%">
			<el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
				<i class="el-icon-upload"></i>
				<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
				<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
			</el-upload>
			<span slot="footer" class="dialog-footer">
				<el-button @click="uploadDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="uploadDialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
	</el-card>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import data from './data'
import methods from './methods'
export default {
	components: {
		Treeselect
	},
	data() {
		return data.init()
	},
	methods: methods
}
</script>

<style lang="less" scoped>
.el-card {
	padding: 0;
	margin-top: -0.3125rem;
	border: none;
}

.dept-container-header {
	margin-top: 4px;
	margin-bottom: 25px;
}
// 部门搜索区域
.dept-search-form /deep/ .el-input__inner {
	width: 100%;
	height: 32px;
	line-height: 32px;
}

.dept-search-form /deep/ .el-input__icon {
	line-height: 100%;
}

// 用户搜索表单区域
.user-search {
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

.user-search-btns {
	width: 100%;
	margin-bottom: 25px;
	.el-col {
		width: 6%;
		margin-right: 5px;
	}
}

// 用户数据展示区域
.user-table {
	margin-bottom: 20px;
}

.el-row .el-pagination {
	float: right;
}

.add-user-form {
	.el-form-item /deep/ .el-form-item__label {
		font-weight: bold;
	}

	.el-form-item /deep/ .el-form-item__content {
		width: 65%;
	}
	.form-textarea /deep/ .el-form-item__content {
		width: 83%;
	}
}

.upload-demo /deep/.el-upload-dragger {
	width: 345px;
}
</style>
