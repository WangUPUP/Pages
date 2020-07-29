<template>
	<el-card>
		<el-row :gutter="15">
			<!-- 部门数据区域 -->
			<el-col :span="4" class="dept-search-container">
				<!-- 部门搜索框 -->
				<el-row class="dept-container-header">
					<el-input placeholder="请输入部门名称" prefix-icon="el-icon-search" v-model="deptName"></el-input>
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
					<el-form label-width="70px" :model="userForm">
						<el-form-item label="用户名称" prop="userName">
							<el-input v-model="userForm.userName" clearable placeholder="请输入用户名称"></el-input>
						</el-form-item>
						<el-form-item label="手机号码" prop="phone">
							<el-input v-model="userForm.phone" clearable placeholder="请输入手机号码"></el-input>
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
						<el-col><el-button type="primary" size="mini" icon="el-icon-search">搜索</el-button></el-col>
						<el-col><el-button size="mini" icon="el-icon-refresh">重置</el-button></el-col>
					</el-row>
				</el-row>
				<!-- 用户数据展示区域 -->
				<el-row>
					<!-- 操作区域 -->
					<el-row class="user-btns">
						<el-button icon="el-icon-plus" size="mini" type="primary">新增</el-button>
						<el-button icon="el-icon-edit" size="mini" type="success">修改</el-button>
						<el-button icon="el-icon-delete" size="mini" type="danger">删除</el-button>
						<el-button icon="el-icon-upload2" size="mini" type="info">导入</el-button>
						<el-button icon="el-icon-download" size="mini" type="warning">导出</el-button>
					</el-row>
					<!-- 数据展示区域 -->
					<el-row class="user-table">
						<el-table :data="userList" style="width: 100%">
							<el-table-column prop="id" label="用户编号"> </el-table-column>
							<el-table-column prop="username" label="用户名称"> </el-table-column>
							<el-table-column prop="nickname" label="用户昵称"> </el-table-column>
							<el-table-column prop="dept" label="部门"> </el-table-column>
							<el-table-column prop="phone" label="手机号码"> </el-table-column>
							<el-table-column prop="state" label="状态">
								<template slot-scope="scope">
									<el-switch
										v-model="scope.row.state"
										active-color="#13ce66"
										inactive-color="#ff4949"
									>
									</el-switch>
								</template>
							</el-table-column>
							<el-table-column prop="creationTime" label="创建时间"> </el-table-column>
							<el-table-column label="操作"> </el-table-column>
						</el-table>
					</el-row>
				</el-row>
			</el-col>
		</el-row>
	</el-card>
</template>

<script>
export default {
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
				useName: '',
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
					username: 'admin',
					nickname: '老大',
					dept: '开发部门',
					phone: '123456789',
					state: true,
					creationTime: '2020-20-20'
				}
			]
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

.el-form {
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
</style>
