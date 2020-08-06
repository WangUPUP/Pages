<template>
	<div>
		<el-card>
			<!-- 菜单搜索区域 -->
			<el-row class="menu-contain" v-if="showSearch">
				<el-form label-width="70px" :model="searchMenuFrom" class="menu-search">
					<el-form-item label="菜单名称" prop="menuName" class="search-form-item">
						<el-input v-model="searchMenuFrom.menuName" clearable placeholder="请输入角色名称"></el-input>
					</el-form-item>
					<el-form-item label="状态" prop="status" class="search-form-item">
						<el-select v-model="searchMenuFrom.status" placeholder="菜单状态" clearable>
							<el-option
								v-for="item in menuStatusOptions"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							>
							</el-option>
						</el-select>
					</el-form-item>
					<el-button type="primary" size="mini" icon="el-icon-search" class="menu-search-btn">
						搜索
					</el-button>
					<el-button size="mini" icon="el-icon-refresh" class="menu-reset-btn">重置</el-button>
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
			<el-row class="menu-table">
				<el-table
					:data="menuList"
					style="width: 100%"
					:header-cell-style="{ background: '#F8F8F9', color: '#606266' }"
					row-key="menuId"
					:tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
				>
					<el-table-column prop="menuName" label="菜单名称" width="160px"> </el-table-column>
					<el-table-column prop="icon" label="图标" width="100px" align="center"> </el-table-column>
					<el-table-column prop="menuSort" label="排序" width="60px"> </el-table-column>
					<el-table-column prop="perms" label="权限标识" width="320px"> </el-table-column>
					<el-table-column prop="component" label="组件路径" width="320px"> </el-table-column>
					<el-table-column prop="status" label="状态" width="80px" align="center"> </el-table-column>
					<el-table-column prop="createTime" label="创建时间" width="320px" align="center"> </el-table-column>
					<el-table-column label="操作" align="center">
						<template slot-scope="scope">
							<el-button type="text" size="mini" icon="el-icon-edit" @click="showEditMenuDialogVisible">
								修改
							</el-button>
							<el-button
								type="text"
								size="mini"
								icon="el-icon-circle-check"
								@click="showMenuPermissionsDialogvisible"
							>
								新增
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
		</el-card>
		<!-- 修改菜单对话框区域 -->
		<el-dialog title="修改菜单" :visible.sync="editMenuDialogVisible" width="32%">
			<el-form :model="editMenuForm" label-width="80px" class="edit-menu-form">
				<el-row>
					<el-form-item label="上级菜单" prop="supermenu">
						<treeselect v-model="editMenuForm.menuId" :multiple="true" :options="menuOptions" />
					</el-form-item>
				</el-row>
				<el-row>
					<el-form-item label="菜单类型" prop="menuType">
						<el-radio-group v-model="editMenuForm.menuType">
							<el-radio :label="'M'">目录</el-radio>
							<el-radio :label="'C'">菜单</el-radio>
							<el-radio :label="'F'">按钮</el-radio>
						</el-radio-group>
					</el-form-item>
				</el-row>
				<el-row>
					<el-form-item label="菜单图标" prop="icon" v-if="editMenuForm.menuType !== 'F'">
						<el-popover placement="bottom-start" width="460" trigger="click">
							<icons-select></icons-select>
							<el-input slot="reference" placeholder="点击选择图标" v-model="editMenuForm.icon" readonly>
								<i slot="prefix" class="el-input__icon el-icon-search"></i>
							</el-input>
						</el-popover>
					</el-form-item>
				</el-row>
				<el-row :gutter="12">
					<el-col :span="12">
						<el-form-item label="菜单名称" prop="menuName" required>
							<el-input placeholder="请输入菜单名称" v-model="editMenuForm.menuName"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="显示排序" prop="menuSort" required class="menu-sort" size="medium">
							<el-input-number
								v-model="editMenuForm.menuSort"
								controls-position="right"
							></el-input-number>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="12">
					<el-col :span="12">
						<el-form-item label="是否外链" prop="isOut" v-if="editMenuForm.menuType !== 'F'">
							<el-radio-group v-model="editMenuForm.isOut">
								<el-radio :label="0">是</el-radio>
								<el-radio :label="1">否</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item
							label="路由地址"
							prop="routeAddress"
							required
							v-if="editMenuForm.menuType !== 'F'"
						>
							<el-input v-model="editMenuForm.routeAddress" placeholder="请输入路由地址"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="12">
					<el-col :span="12">
						<el-form-item label="组件路径" prop="path" v-if="editMenuForm.menuType === 'C'">
							<el-input v-model="editMenuForm.path" placeholder="请输入组件路径"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="权限标识" prop="perms" v-if="editMenuForm.menuType !== 'M'">
							<el-input v-model="editMenuForm.perms" placeholder="请输入权限标识"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="12">
					<el-col :span="12">
						<el-form-item label="显示状态" prop="displayStatus" v-if="editMenuForm.menuType !== 'F'">
							<el-radio-group v-model="editMenuForm.displayStatus">
								<el-radio :label="0">显示</el-radio>
								<el-radio :label="1">隐藏</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="菜单状态" prop="menuStatus" v-if="editMenuForm.menuType !== 'F'">
							<el-radio-group v-model="editMenuForm.menuStatus">
								<el-radio :label="0">正常</el-radio>
								<el-radio :label="1">停用</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="editMenuDialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="editMenuDialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import data from './data'
import methods from './methods'
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import IconsSelect from '../../../components/IconSelect/index'

export default {
	data() {
		return data.init()
	},
	methods: methods,
	created() {
		this.getList()
	},
	components: {
		Treeselect,
		IconsSelect
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
.menu-search {
	display: flex;
	flex-flow: row warp;
	.el-form-item {
		margin-right: 15px;
	}
	.el-form-item__content {
		width: 25%;
	}
}
// el-form 前 label字体
.el-form-item /deep/ .el-form-item__label {
	font-weight: bold;
}

.search-form-item /deep/ .el-input__inner {
	width: 12.125rem;
	height: 32px;
	line-height: 32px;
}

.menu-search-btn,
.menu-reset-btn {
	height: 100%;
	margin-top: 8px;
}

.menu-search-btn {
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
.menu-table {
	margin-bottom: 20px;
}
</style>
