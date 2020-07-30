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
						<el-form-item label="用户名称" prop="userName">
							<el-input
								v-model="userForm.userName"
								clearable
								placeholder="请输入用户名称"
							></el-input>
						</el-form-item>
						<el-form-item label="手机号码" prop="phone">
							<el-input
								v-model="userForm.phone"
								clearable
								placeholder="请输入手机号码"
							></el-input>
						</el-form-item>
						<el-form-item label="状态" prop="state">
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
						<el-form-item label="创建时间" prop="date">
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
						<el-col
							><el-button type="primary" size="mini" icon="el-icon-search"
								>搜索</el-button
							></el-col
						>
						<el-col
							><el-button size="mini" icon="el-icon-refresh">重置</el-button></el-col
						>
					</el-row>
				</el-row>
				<!-- 用户数据区域 -->
				<el-row>
					<!-- 操作区域 -->
					<el-row class="user-btns">
						<el-button
							icon="el-icon-plus"
							size="mini"
							type="primary"
							@click="showAddUserDialogVisible"
							>新增</el-button
						>
						<el-button icon="el-icon-edit" size="mini" type="success">修改</el-button>
						<el-button icon="el-icon-delete" size="mini" type="danger">删除</el-button>
						<el-button icon="el-icon-upload2" size="mini" type="info">导入</el-button>
						<el-button icon="el-icon-download" size="mini" type="warning"
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
							<el-table-column prop="creationTime" label="创建时间">
							</el-table-column>
							<el-table-column label="操作" width="220px">
								<template slot-scope="scope">
									<el-button type="text" size="mini" icon="el-icon-edit"
										>修改</el-button
									>
									<el-button
										type="text"
										size="mini"
										icon="el-icon-delete"
										v-if="scope.row.userId === '1'"
										>删除</el-button
									>
									<el-button type="text" size="mini" icon="el-icon-refresh"
										>重置</el-button
									>
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
		<el-dialog title="提示" :visible.sync="addUserDialogVisible" width="80%">
			<el-form :model="addUserForm" lebal-width="80px" class="add-user-form">
				<el-form-item label="用户昵称" prop="nickName">
					<el-input
						placeholder="请输入用户昵称"
						v-model="addUserForm.nickName"
					></el-input>
				</el-form-item>
				<el-form-item label="归属部门" prop="dept">
					<!-- <treeselect v-model="addUserForm.deptId" :multiple="true" :options="deptlist" /> -->
				</el-form-item>
				<el-form-item label="手机号码" prop="phone">
					<el-input v-model="addUserForm.phone" placeholder="请输入手机号码"></el-input>
				</el-form-item>
				<el-form-item label="邮箱" prop="email">
					<el-input v-model="addUserForm.email" placeholder="请输入邮箱"></el-input>
				</el-form-item>
				<el-form-item label="用户名称" prop="userName">
					<el-input
						v-model="addUserForm.userName"
						placeholder="请输入用户名称"
					></el-input>
				</el-form-item>
				<el-form-item label="用户密码" prop="password">
					<el-input
						v-model="addUserForm.password"
						placeholder="请输入用户密码"
					></el-input>
				</el-form-item>
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
				<el-form-item label="状态" prop="status">
					<template>
						<el-radio v-model="addUserForm.status" label="0">正常</el-radio>
						<el-radio v-model="addUserForm.status" label="1">停用</el-radio>
					</template>
				</el-form-item>
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
				<el-form-item label="备注" prop="remark">
					<el-input type="textarea" :rows="3" placeholder="请输入内容"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="addUserDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="addUserDialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
	</el-card>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default {
	components: {
		Treeselect
	},
	data() {
		return {
			// 部门搜索关键字
			deptName: '',
			// 部门数据
			deptlist: [
				{
					label: '节能科技',
					children: [
						{
							label: '深圳',
							children: [
								{
									label: '开发部门'
								},
								{
									label: '开发部门'
								},
								{
									label: '开发部门'
								},
								{
									label: '开发部门'
								},
								{
									label: '开发部门'
								}
							]
						},
						{
							label: '长沙分公司',
							children: [
								{
									label: '开发部门'
								},
								{
									label: '开发部门'
								},
								{
									label: '开发部门'
								}
							]
						}
					]
				}
			],
			// 用户搜索关键字表单
			userForm: {
				userName: '',
				phone: '',
				state: '',
				date: ''
			},
			// 用户状态选项
			options: [
				{
					value: '正常',
					label: '正常'
				},
				{
					value: '停用',
					label: '停用'
				}
			],
			// 用户数据
			userList: [
				{
					id: 1,
					userName: 'admin',
					nickName: '老大',
					dept: '开发部门',
					phone: '123456789',
					status: '0',
					creationTime: '2020-20-20',
					userId: '1'
				},
				{
					id: 2,
					userName: 'user',
					nickName: '普通用户',
					dept: '开发部门',
					phone: '987654321',
					status: '1',
					creationTime: '2020-20-21',
					userId: '2'
				}
			],
			// 控制添加用户弹出框的显示和隐藏
			addUserDialogVisible: false,
			// 添加用户表单对象
			addUserForm: {
				nickName: '',
				deptId: [],
				phone: '',
				email: '',
				userName: '',
				password: '',
				gender: '',
				status: '',
				postId: '',
				roleId: '',
				remark: ''
			},
			// 用户性别选项
			gender: [
				{
					value: '0',
					label: '男'
				},
				{
					value: '1',
					label: '女'
				},
				{
					value: '2',
					label: '未知'
				}
			],
			// 岗位信息
			post: [
				{
					label: '董事长',
					value: 1
				},
				{
					label: '项目经理',
					value: 2
				},
				{
					label: '人力资源',
					value: 3
				},
				{
					label: '普通员工',
					value: 4
				}
			],
			// 角色信息
			roles: [
				{
					label: '管理员',
					value: 1
				},
				{
					label: '普通用户',
					value: 2
				}
			]
		}
	},
	methods: {
		showAddUserDialogVisible() {
			this.addUserDialogVisible = !this.addUserDialogVisible
		}
	}
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

.el-input /deep/ .el-input__inner {
	width: 100%;
	height: 32px;
	line-height: 32px;
}

.el-input /deep/ .el-input__icon {
	line-height: 100%;
}

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

.el-form-item /deep/ .el-input__inner {
	width: 15rem;
	height: 32px;
	line-height: 32px;
}

.el-form-item /deep/.el-date-editor {
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

.user-table {
	margin-bottom: 20px;
}

.el-row .el-pagination {
	float: right;
}

.add-user-form {
	display: flex;
	flex-flow: row wrap;
}
</style>
