<template>
 <div class="roleDetail">
     <el-row class="fixed">
         <el-col :span="24">
                <button @click="back" class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button> 
                <button class="erp_bt bt_save" plain @click="save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>  
                <button class="erp_bt bt_cancel"><div class="btImg"><img src="../../../static/image/common/bt_cancel.png"></div><span class="btDetail">取消</span></button>
                <button class="erp_bt bt_saveAdd"><div class="btImg"><img src="../../../static/image/common/bt_saveAdd.png"></div><span class="btDetail">保存并新增</span></button>
                <!-- <button class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
                <button class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button> -->
            <span @click="ifShow = !ifShow" class="upBt">收起<i class="el-icon-arrow-down" @click="ifShow = !ifShow" :class="{rotate : !ifShow}"></i></span>
        </el-col>
    </el-row>
 <el-collapse-transition>
     <div v-show="ifShow">   
        <el-row>
                <!-- <div class="errorTips">
                    <p class="msgDetail">错误提示：名称不能为特殊字符</p>
                    <div class="closeMsg"><i class="fa fa-times" aria-hidden="true"></i></div>
                </div> -->
                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth"><label>
                            <small>*</small>角色编码</label>
                            <el-input 
                            class="roleCode" 
                            :class="{redBorder : validation.hasError('addData.roleCode')}" 
                            v-model="addData.roleCode" 
                            placeholder=""></el-input>
                        </div>
                        <div class="error_tips_info">{{ validation.firstError('addData.roleCode') }}</div>
                    </div>
                </el-col>

                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth"><label>
                            <small>*</small>角色名称</label>
                            <el-input 
                            class="displayName" 
                            :class="{redBorder : validation.hasError('addData.displayName')}" 
                            v-model="addData.displayName" 
                            placeholder=""></el-input>
                        </div>
                        <div class="error_tips_info">{{ validation.firstError('addData.displayName') }}</div>
                    </div>
                </el-col>
                
                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                        <label><small>*</small>所属组织</label>
                        <el-select 
                        class="ouId" 
                        placeholder=""
                        :class="{redBorder : validation.hasError('addData.ouId')}"
                        v-model="addData.ouId">
                            <!-- <el-option v-for="item in selectData.OUType" :key="item.id" :label="item.ouName" :value="item.id">
                            </el-option> -->
                            <el-input
                            placeholder="搜索..."
                            class="selectSearch"
                            v-model="search_ou">
                            </el-input>
                            <el-tree
                            oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                            :data="selectTree_ou"
                            :props="selectProps_ou"
                            node-key="id"
                            default-expand-all
                            ref="tree_ou"
                            :filter-node-method="filterNode_ou"
                            :expand-on-click-node="false"
                            @node-click="nodeClick_ou"
                            >
                            </el-tree>
                            <el-option v-show="false" :key="item_ou.id" :label="item_ou.ouFullname" :value="item_ou.id">
                            </el-option>
                            <!-- <el-option v-show="false" v-for="item in selectData.OUType" :key="item.id" :label="item.ouFullname" :value="item.id" :date="item.id">
                                </el-option> -->
                        </el-select>
                        </div>
                        <div class="error_tips_info">{{ validation.firstError('addData.ouId') }}</div>
                    </div>
                </el-col>

                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                            <label>状态</label>
                            <el-select filterable  
                            class="status" 
                            placeholder=""
                            :class="{redBorder : validation.hasError('addData.status')}"
                            v-model="addData.status">
                                <el-option v-for="item in selectData.Status001" :key="item.itemValue" :label="item.itemName" :value="item.itemValue">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="error_tips_info">{{ validation.firstError('addData.status') }}</div>
                    </div>
                </el-col>

                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                            <label>备注</label>
                            <el-input
                            class="remark" 
                            :class="{redBorder : validation.hasError('addData.remark')}"
                            v-model="addData.remark"
                            type="textarea"
                            :autosize="{ minRows: 4, maxRows: 10}"
                            placeholder="">
                            </el-input>
                        </div>
                        <div class="error_tips_info">{{ validation.firstError('addData.remark') }}</div>
                    </div>
                </el-col>
        </el-row>
     </div>
 </el-collapse-transition>

    <el-row class="nopadding"> 
        <div class="tabZoo">
            <el-col :span="24">
               <el-tabs v-model="activeName">
<!-- - - - - - - - - - - - - - - - - - - - 关联用户- - - - - - - - - - - - - - - - - - - - -  -->
                    <el-tab-pane label="关联用户" name="role" class="getPadding" style="z-index:-10">
                        <button class="erp_bt bt_add"  @click="dialogRole = true">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">选取</span>
                        </button>
                        <!-- <a class="addRole" :key="x.displayName" v-for="x in roleChecked">{{x.displayName}}<i @click="addRole(x)" class="el-icon-error"></i></a> -->
                        <!-- dialog -->
                        <el-dialog :visible.sync="dialogRole" title="选取用户" class="dialogRole">
                            <el-col :span="11">
                                <div>
                                    <div>已选</div>
                                    <el-table 
                                    :data="roletableData" 
                                    @selection-change="selectionChangeRole_checked"
                                    border 
                                    style="width: 100%" 
                                    stripe>
                                        <el-table-column type="selection"></el-table-column>
                                        <el-table-column prop="userCode" label="用户编码"></el-table-column>
                                        <el-table-column prop="displayName" label="用户名称"></el-table-column>
                                        <el-table-column prop="ouId" label="所属组织"></el-table-column>
                                    </el-table> 
                                </div>
                                  
                            </el-col>
                            <el-col :span="2">
                                <div class="el-transfer__buttons">
                                    <el-button :disabled="isUser_nocheked" @click="noCheck_push_check" type="primary" icon="el-icon-arrow-left"></el-button>
                                    <el-button :disabled="isUser_cheked" @click="check_push_noCheck" type="primary" icon="el-icon-arrow-right"></el-button>
                                    <!-- <button :disabled="isUser_nocheked" type="button" class="el-button el-button--primary el-transfer__button">
                                        <span><i class="el-icon-arrow-left"></i></span>
                                    </button>
                                    <button :disabled="isUser_cheked" type="button" class="el-button el-button--primary el-transfer__button">
                                        <span><i class="el-icon-arrow-right"></i></span>
                                    </button> -->
                                </div>
                            </el-col>
                            <el-col :span="11">
                                <div>可选</div>
                                <div>
                                    <el-table 
                                    :data="roletableData" 
                                    @selection-change="selectionChangeRole_nochecked"
                                    border 
                                    style="width: 100%" 
                                    stripe>
                                    <el-table-column type="selection"></el-table-column>
                                    <el-table-column prop="userCode" label="用户编码"></el-table-column>
                                    <el-table-column prop="displayName" label="用户名称"></el-table-column>
                                    <el-table-column prop="ouId" label="所属组织"></el-table-column>
                                </el-table>   
                                </div>
                                
                            </el-col>
                            <span slot="footer">
                                <el-button>确认</el-button>
                                <el-button>取消</el-button>
                            </span>
                        </el-dialog>
                        <el-table 
                        v-loading="roleTableLoading"
                        :data="roletableData" 
                        border 
                        style="width: 100%" 
                        stripe>

                            <el-table-column prop="userCode" label="用户编码"></el-table-column>

                            <el-table-column prop="displayName" label="用户名称"></el-table-column>

                            <el-table-column prop="ouId" label="所属组织"></el-table-column>

                             <el-table-column label="操作">
                                 <template slot-scope="scope">
                                     <el-button type="text" size="small"  @click="delThisRole(scope.row)">删除</el-button>
                                    <el-button type="text" size="small"  @click="seeThisRole(scope.row)" >查看</el-button>
                                    <!-- <el-button type="text" size="small"  @click="see(scope.row)" >查看</el-button> -->
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination
                        style="margin-top:20px;" 
                        class="text-right" 
                        background layout="total,prev, pager, next,jumper" 
                        @current-change="roleHandleCurrentChange"
                        :current-page="rolePageIndex"
                        :page-size="roleOneItem"
                        :total="roleTotalItem">
                        </el-pagination>   
                    </el-tab-pane>
<!-- - - - - - - - - - - - - - - - - - - - 分配组织- - - - - - - - - - - - - - - - - - - - -  -->
                    <el-tab-pane label="分配组织" name="ou" class="getPadding" style="z-index:-1000">
                        <button class="erp_bt bt_add" @click="dialogOu = true">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">选取</span>
                        </button>
                        <!-- dialog -->
                        <el-dialog :visible.sync="dialogOu" class="dialogOu">
                            <template slot="title">
                                <span>关联组织（业务组织+部门）</span>
                            </template>
                            <el-col :span="12">
                                <el-tree
                                oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none"
                                v-loading="fnTreeLoading" 
                                :data="fnTreeData"
                                :props="defaultProps"
                                node-key="id"
                                default-expand-all
                                ref="tree"
                                :expand-on-click-node="false"
                                >
                            </el-tree>
                            </el-col>
                            <el-col :span="12">
                                
                            </el-col>
                            <span slot="footer" class="dialog-footer">
                                <el-button>刷 新</el-button>
                                <el-button>取 消</el-button>
                                <el-button type="primary">确 定</el-button>
                            </span>
                        </el-dialog>
                        <!-- dialog -->
                        <el-table 
                        v-loading="ouTableLoading"
                        :data="ouTableData" 
                        border 
                        style="width: 100%" 
                        stripe>

                            <el-table-column prop="ouCode" label="组织编码"></el-table-column>

                            <el-table-column prop="basOuTypes" label="组织类型"></el-table-column>

                            <el-table-column prop="createdBy" label="授权人"></el-table-column>

                            <el-table-column label="授权时间">
                                <template slot-scope="scope">
                                    <el-date-picker
                                    v-model="ouTableData[scope.$index].createdTime"
                                    format="yyyy.MM.dd"
                                    type="datetime" 
                                    readonly
                                    align="center"></el-date-picker>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination
                        style="margin-top:20px;" 
                        class="text-right" 
                        background layout="total,prev, pager, next,jumper" 
                        @current-change="ouHandleCurrentChange"
                        :current-page="ouPageIndex"
                        :page-size="ouOneItem"
                        :total="ouTotalItem">
                        </el-pagination>   
                    </el-tab-pane>
<!-- - - - - - - - - - - - - - - - - - - - 分配功能- - - - - - - - - - - - - - - - - - - - -  -->
                    <el-tab-pane label="分配功能" name="fn" class="getPadding" style="z-index:-1000">
                        <el-col :span="24">
                            <button class="erp_bt bt_add" @click="dialogFn = true">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_add.png">
                                </div>
                                <span class="btDetail">选取</span>
                            </button>
                        </el-col>

                        <!-- dialogFn -->
                        <el-dialog :visible.sync="dialogFn">
                            <template slot="title">
                                <span style="float:left;">添加功能</span>
                                <div class="double_bt">
                                    <template v-if="dialogFn_menuCheck">
                                        <div class="menu_btn_choose" :class="{menu_btn_active : !dialogFn_menuCheck}" @click="dialogFn_nodeAdd">已选功能</div>
                                        <div class="menu_btn_choose" :class="{menu_btn_active : dialogFn_menuCheck}">可选功能</div>
                                    </template>
                                    <template v-else>
                                        <div class="menu_btn_choose" :class="{menu_btn_active : !dialogFn_menuCheck}">已选功能</div>
                                        <div class="menu_btn_choose" :class="{menu_btn_active : dialogFn_menuCheck}" @click="dialogFn_nodeDel">可选功能</div>
                                    </template>
                                </div>
                            </template>
                            <el-col :span="6" class="dialog_ dialog_l">
                                <el-col :span="24">
                                    <el-tabs v-model="fnActiveName">
                                        <el-tab-pane label="按职责" name="duty" class="getPadding" style="z-index:-10">  
                                            <el-tree
                                                oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none"
                                                v-loading="fnTreeLoading" 
                                                :data="fnTreeData"
                                                :props="defaultProps"
                                                node-key="id"
                                                default-expand-all
                                                ref="tree"
                                                :expand-on-click-node="false"
                                                @node-click="fnNodeClick">
                                            </el-tree>  
                                        </el-tab-pane>
                                        <el-tab-pane label="按功能" name="function" class="getPadding" style="z-index:-10">
                                        </el-tab-pane>            
                                    </el-tabs>    
                                </el-col>
                            </el-col>
                            <el-col :span="18" class="dialog_ dialog_r">
                                <el-table 
                                v-loading="fnTableLoading"
                                :data="fnTableData" 
                                border 
                                style="width: 100%" 
                                stripe>

                                    <el-table-column prop="moduleName" label="模块名称"></el-table-column>

                                    <el-table-column prop="permissionDtos" label="功能名称">
                                        <template slot-scope="scope">
                                            <a class="addRole" v-for="i in fnTableData[scope.$index].permissionDtos">{{i.displayName}}</a>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <el-pagination
                                style="margin-top:20px;" 
                                class="text-right" 
                                background layout="total,prev, pager, next,jumper" 
                                @current-change="fnHandleCurrentChange"
                                :current-page="fnPageIndex"
                                :page-size="fnOneItem"
                                :total="fnTotalItem">
                                </el-pagination>      
                            </el-col>
                            <span slot="footer" class="dialog-footer">
                                <el-button>刷 新</el-button>
                                <el-button>取 消</el-button>
                                <el-button type="primary">确 定</el-button>
                            </span>
                            
                        </el-dialog>
                        <!-- dialogFn -->

                        <!-- tree -->
                        <el-col :span="5">
                            <el-tree
                                oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none"
                                v-loading="fnTreeLoading" 
                                :data="fnTreeData"
                                :props="defaultProps"
                                node-key="id"
                                default-expand-all
                                ref="tree"
                                :expand-on-click-node="false"
                                @node-click="fnNodeClick">
                            </el-tree>
                        </el-col>
                        <!-- tree -->
                        <el-col :span="19">
                            <!-- table -->
                            <el-table 
                            v-loading="fnTableLoading"
                            :data="fnTableData" 
                            border 
                            style="width: 100%" 
                            stripe>

                                <el-table-column type="selection"></el-table-column>

                                <el-table-column prop="moduleName" label="模块名称"></el-table-column>

                                <el-table-column prop="permissionDtos" label="功能名称">

                                    <!-- <el-table-column v-for="i in moduleList" :label="i">
                                        <template slot-scope="scope">
                                            <el-checkbox v-if="x.displayName == i" v-for="x in fnTableData[scope.$index].permissionDtos" checked disabled></el-checkbox>
                                            
                                        </template>
                                    </el-table-column> -->
                                    <template slot-scope="scope">
                                        <a class="addRole" v-for="i in fnTableData[scope.$index].permissionDtos">{{i.displayName}}</a>
                                    </template>
                                </el-table-column>

                                <el-table-column label="操作">
                                    <template slot-scope="scope">
                                        <el-button type="text" size="small"  @click="delThisFn(scope.row)">删除</el-button>
                                        <!-- <el-button type="text" size="small"  @click="seeThisRole(scope.row)" >查看</el-button> -->
                                        <!-- <el-button type="text" size="small"  @click="see(scope.row)" >查看</el-button> -->
                                    </template>
                                </el-table-column>
                            </el-table>
                            <!-- table -->


                            <el-pagination
                            style="margin-top:20px;" 
                            class="text-right" 
                            background layout="total,prev, pager, next,jumper" 
                            @current-change="fnHandleCurrentChange"
                            :current-page="fnPageIndex"
                            :page-size="fnOneItem"
                            :total="fnTotalItem">
                            </el-pagination>       
                        </el-col>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </div>
    </el-row>
 <el-row>
    <el-col :span="22" class="auditInformation getPadding">
        <h4 class="h4">审计信息</h4>
        <div>
            <div class="bgcolor"><label>创建人</label><el-input v-model="auditInformation.createName" disabled="disabled"></el-input></div>
            <div class="bgcolor"><label>创建时间</label><el-date-picker v-model="auditInformation.createTime" type="date" disabled="disabled"></el-date-picker></div>
            <div class="bgcolor"><label>修改人</label><el-input v-model="auditInformation.modifyName" disabled="disabled"></el-input></div>
            <div class="bgcolor"><label>修改时间</label><el-date-picker v-model="auditInformation.modifyTime" type="date" disabled="disabled"></el-date-picker></div>
            <!-- <div class="bgcolor"><label>启用日期</label><el-date-picker v-model="auditInformation.startTime" type="date" placeholder="选择启用日期"></el-date-picker></div>
            <div class="bgcolor"><label>封存日期</label><el-date-picker v-model="auditInformation.finishTime" type="date" placeholder="选择封存日期"></el-date-picker></div>
            <div class="bgcolor"><label>封存人</label><el-input v-model="auditInformation.finishName" placeholder="请录入封存人"></el-input></div>     -->
        </div>                                  
    </el-col>
</el-row>        
<!-- dialog数据变动提示 -->
        <el-dialog :visible.sync="dialogUserConfirm" class="dialog_confirm_message" width="25%">
            <template slot="title">
                <span class="dialog_font">提示</span>
            </template>
            <el-col :span="24" style="position: relative;">
                <el-col :span="24">
                    <p class="dialog_body_icon"><i class="el-icon-warning"></i></p>
                    <p class="dialog_font dialog_body_message">此操作将忽略您的更改，是否继续？</p>
                </el-col>
            </el-col>
            
            <span slot="footer">
                <button class="dialog_footer_bt dialog_font" @click="sureDoing">确 认</button>
                <button class="dialog_footer_bt dialog_font" @click="dialogUserConfirm = false">取 消</button>
            </span>
        </el-dialog>
        <!-- dialog -->                                                               
</div>
</template>

<script>
export default({
    data() {
        return{
            search_ou:'',
            selectTree_ou:[
            ],
            item_ou:{
                id:'',
                ouFullname:''
            },
            selectProps_ou: {
                children: 'children',
                label: 'ouFullname',
                id:'id'
            },

            selectData:{//select数据
                Status001:[],//启用状态
            },
            ifShow:true, 
            moduleList:['新增','删除','修改'],
            auditInformation:{//审计信息
                createName:"",
                createTime:"",
                modifyName:"",
                modifyTime:"",
                startTime:"",
                finishTime:"",
                finishName:"",
            },

            customerNature:[{//客户性质
                value:'1',
                label: '选项1'
            }, {
                value:'2',
                label: '选项2'
            }, {
                value:'3',
                label: '选项3'
            }],

            activeName: 'role',//tabs标签页默认激活name

            addData:{
                "ouId": "",
                "roleCode": "",
                "displayName": "",
                "status": "",
                "remark": "",
                "permissions": [],
                "userCodes": []
            },
// -------------关联用户-------------------
            roletableData:[],//关联用户数据
            rolePageIndex:1,//分页的当前页码
            roleTotalPage:0,//当前分页总数
            roleOneItem:10,//每页有多少条信息
            rolePage:1,//当前页
            roleTotalItem:0,//总共有多少条消息
            roleTableLoading:true,
            dialogRole:false,
            dialogRole_menuCheck:true,
            roleChecked:[],
            roleNochecked:[],
            roleAllNode:[],//所有角色
            checkedRoleCode:[],//只有当用户修改时此数据不为空，新增页面永远为空，存储用户已经选中所有信息


            selectionUser_checked: [],//复选框选中数据
            selectionUser_nochecked: [],//复选框选中数据
            isUser_nocheked:true,//可选
            isUser_cheked:true,//已选
// -------------分配组织-------------------
            ouTableData:[],//分配组织数据
            ouPageIndex:1,//分页的当前页码
            ouTotalPage:0,//当前分页总数
            ouOneItem:10,//每页有多少条信息
            ouPage:1,//当前页
            ouTotalItem:0,//总共有多少条消息
            ouTableLoading:true,
            dialogOu:false,
// -------------分配功能-------------------
            fnTableData:[],//分配功能数据
            fnTableData:[],//分配组织数据
            fnPageIndex:1,//分页的当前页码
            fnTotalPage:0,//当前分页总数
            fnOneItem:10,//每页有多少条信息
            fnPage:1,//当前页
            fnTotalItem:0,//总共有多少条消息
            fnTableLoading:true,
            dialogFn:false,
            dialogFn_menuCheck:true,
            fnChecked:[],
            fnNochecked:[],
            fnAllNode:[],//所有权限
            checkedFnCode:[],
            fnActiveName:'duty',
// -------------tree-------------------
            fnTreeLoading:true,
            fnTreeData:[],
            defaultProps: {
                children: 'childNodes',
                label: 'moduleName',
                id:'id',
            },
//----------按钮操作--------------
        choseDoing:'',//存储点击按钮判断信息
        dialogUserConfirm:false,//信息更改提示控制
        update:false,
      

        }
    },
     validators: {
      'addData.roleCode': function (value) {//用户编码
         return this.Validator.value(value).required().maxLength(50)
      },
      'addData.displayName': function (value) {//用户名称
         return this.Validator.value(value).required().maxLength(50);
      },
      'addData.ouId': function (value) {//所属组织
          return this.Validator.value(value).required().integer();
      },
      'addData.status': function (value) {//状态
         return this.Validator.value(value).required().integer();
      },
      'addData.remark': function (value) {//备注
         return this.Validator.value(value).required().maxLength(200);
      },

    },
    created () {
      let _this=this;
      _this.loadTree_ou();
      _this.getUserAllData();
      _this.getSelectData();

      _this.loadOuTable();
      _this.loadFnTable();
      _this.fnLoadTree();
      _this.getDefault();
    },
    watch: {
      search_ou(val) {
        this.$refs.tree_ou.filter(val);
      }
    },
    methods:{
        getDefault(){
        let _this=this;
        _this.$axios.gets('/api/services/app/OuManagement/GetWithCurrentUser').then(function(res){ 
        // 默认用户业务组织
        _this.addData.ouId=res.result.id;
        })
    },
// --------------------关联用户----------------------
        getUserAllData(){//获取关联用户数据
            let _this=this;
            _this.roleTableLoading=true
            _this.$axios.gets('/api/services/app/User/GetAll',{SkipCount:(_this.rolePage-1)*_this.roleOneItem,MaxResultCount:_this.roleOneItem})
            .then(function(res){
                _this.roleNochecked=[]  
                _this.roletableData=res.result.items;
                _this.roleTotalItem=res.result.totalCount
                _this.roleTotalPage=Math.ceil(res.result.totalCount/_this.roleOneItem);
                _this.roleTableLoading=false;
                $.each(_this.roletableData,function(index,value){
                    _this.roleAllNode.push(value)//获取所有角色
                })
                _this.roleNochecked=_this.roleAllNode;
                if(_this.roleChecked.length>0){
                    _this.roleNochecked=_this.uniqueArrayRole(_this.allNode,_this.roleChecked)
                }else{
                    _this.roleNochecked=_this.roleAllNode
                }
            },function(res){
                _this.roleTableLoading=false;
            })
        },
        selectionChangeRole_checked(val) {//dialogRole已选
            let _this=this;
            _this.selectionUser_checked = val;
            if(val.length==0){
                _this.isUser_cheked=true
            }else{
                _this.isUser_cheked=false
            }
        },
        selectionChangeRole_nochecked(val) {//dialogRole可选
            let _this=this;
            _this.selectionUser_nochecked = val;
            if(val.length==0){
                _this.isUser_nocheked=true
            }else{
                _this.isUser_nocheked=false
            }
        },
        noCheck_push_check(){
            
        },
        check_push_noCheck(){

        },
//--------------------角色信息-------------------
        getSelectData(){
            let _this=this;
            _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status001'}).then(function(res){ 
            // 启用状态
            _this.selectData.Status001=res.result;
            })
        },
        
        getRoleData(){
           let _this=this;
           _this.$axios.gets('/api/services/app/Role/Get',{id:_this.$route.params.id})
           .then(function(res){
                _this.addData= res.result
                if(res.result.userCodes.length>0 && res.result.userCodes.length){
                    _this.checkedRoleCode=res.result.userCodes;
                }
                if(res.result.permissions.length>0 && res.result.permissions.length){
                    _this.checkedFnCode=res.result.permissions;
                }
                
           },function(res){

           })
       }, 
        loadOuTable(){//获取分配组织数据
            let _this=this;
            _this.ouTableLoading=true
            _this.$axios.gets('/api/services/app/OuManagement/GetAll',{SkipCount:(_this.ouPage-1)*_this.ouOneItem,MaxResultCount:_this.ouOneItem})
            .then(function(res){ 
                _this.ouTableData=res.result.items;
                _this.ouTotalItem=res.result.totalCount
                _this.ouTotalPage=Math.ceil(res.result.totalCount/_this.ouOneItem);
                _this.ouTableLoading=false;
                },function(res){
                _this.ouTableLoading=false;
            })
        },
        loadFnTable(){//获取分配功能数据
            let _this=this;
            _this.fnTableLoading=true
            _this.$axios.gets('/api/services/app/ModuleManagement/GetAll',{SkipCount:(_this.fnPage-1)*_this.fnOneItem,MaxResultCount:_this.fnOneItem})
            .then(function(res){
                _this.fnTableData=res.result.items;
                _this.fnTotalItem=res.result.totalCount
                _this.fnTotalPage=Math.ceil(res.result.totalCount/_this.fnOneItem);
                _this.fnTableLoading=false;
                $.each(_this.fnTableData,function(index,val){
                    val.permissionDtos=
                    [{
                        children:null,
                        displayName:"新增",
                        level:0,
                        moduleName:"联系人管理",
                        permissionName:"HKERP.SystemManagement.ContactManagement.ContactManagementAppService.Create"
                    },{
                        children:null,
                        displayName:"修改",
                        level:0,
                        moduleName:"联系人管理",
                        permissionName:"HKERP.SystemManagement.ContactManagement.ContactManagementAppService.Update"
                    },]
                })
                },function(res){
                _this.fnTableLoading=false;
            })
        },
        roleHandleCurrentChange(val){//页码改变
            let _this=this;
            _this.rolePage=val;
            _this.loadRoleTable();
        },
        ouHandleCurrentChange(val){//页码改变
            let _this=this;
            _this.ouPage=val;
            _this.loadOuTable();
        },
        fnHandleCurrentChange(val){//页码改变
            let _this=this;
            _this.fnPage=val;
            _this.loadFnTable();
        },

        fnLoadTree(){
            let _this=this;
            _this.fnTreeLoading=true;
            _this.$axios.gets('/api/services/app/ModuleManagement/GetModulesTree')
            .then(function(res){
                _this.fnTreeData=res
                _this.fnTreeLoading=false;
                _this.loadIcon()
            },function(res){
                _this.fnTreeLoading=false;
            })
        },
        loadIcon(){
            let _this=this;
            _this.$nextTick(function () {
                $('.preNode').remove();   
                $('.el-tree-node__label').each(function(){
                    if($(this).parent('.el-tree-node__content').next('.el-tree-node__children').text()==''){
                        $(this).prepend('<i class="preNode fa fa-file" aria-hidden="true" style="color:#f1c40f;margin-right:5px"></i>')
                    }else{
                        $(this).prepend('<i aria-hidden="true" class="preNode fa fa-folder-open" style="color:#f1c40f;margin-right:5px"></i>')
                    }
                })
            })
        },
        fnNodeClick(data){
            let _this=this;
            _this.fnTableData=[];
            data.permissionDtos=
            [{
                children:null,
                displayName:"新增",
                level:0,
                moduleName:"联系人管理",
                permissionName:"HKERP.SystemManagement.ContactManagement.ContactManagementAppService.Create"
            },{
                children:null,
                displayName:"修改",
                level:0,
                moduleName:"联系人管理",
                permissionName:"HKERP.SystemManagement.ContactManagement.ContactManagementAppService.Update"
            },]
            _this.fnTableData.push(data)
            _this.fnTotalItem=_this.fnTableData.length;
        },

        dialogRole_nodeAdd(){
            let _this=this;
            _this.dialogRole_menuCheck=!_this.dialogRole_menuCheck
            $('.dialogRole .menu_item_add').css('display','block')
            $('.dialogRole .menu_item_del').css('display','none')
        },
        dialogRole_nodeDel(){
            let _this=this;
            _this.dialogRole_menuCheck=!_this.dialogRole_menuCheck
            $('.dialogRole .menu_item_add').css('display','none')
            $('.dialogRole .menu_item_del').css('display','block')
        },
        dialogFn_nodeAdd(){
            let _this=this;
            _this.dialogFn_menuCheck=!_this.dialogFn_menuCheck
            $('.dialogFn .menu_item_add').css('display','block')
            $('.dialogFn .menu_item_del').css('display','none')
        },
        dialogFn_nodeDel(){
            let _this=this;
            _this.dialogFn_menuCheck=!_this.dialogFn_menuCheck
            $('.dialogFn .menu_item_add').css('display','none')
            $('.dialogFn .menu_item_del').css('display','block')
        },
        addRole(x){
            let _this=this;
            let flag=false;
            if(_this.roleNochecked.length<=0){
                flag=true;
            }else{
                flag=false;
                $.each(_this.roleNochecked,function(index,value){
                    if(x==value){
                        flag=false;
                    }else{
                        flag=true;
                    }
                })
            }
            $.each(_this.roleChecked,function(index,value){
                if(x==value){
                    _this.roleChecked.splice(index,1)
                }
            })
            if(flag){
                _this.roleNochecked.push(x);
            }
        },
        delRole(x){
            let _this=this;
            let flag=false;
            if(_this.roleChecked.length<=0){
                flag=true;
            }else{
                flag=false;
                $.each(_this.roleChecked,function(index,value){
                    if(x==value){
                        flag=false;
                    }else{
                        flag=true;
                    }
                })
            }
            $.each(_this.roleNochecked,function(index,value){
                if(x==value){
                    _this.roleNochecked.splice(index,1)
                }
            })
            if(flag){
                _this.roleChecked.push(x);
            }
        },
        uniqueArrayRole(array1, array2){//求差集
            var result = [];
            for(var i = 0; i < array1.length; i++){
                var item = array1[i];
                var repeat = false;
                for (var j = 0; j < array2.length; j++) {
                    if (array1[i].roleCode == array2[j]) {//唯一key
                        repeat = true;
                        break;
                    }
                }
                if (!repeat) {
                    result.push(item);
                }
            }
            return result;
        },
        filterNode_ou(value, data) {
            if (!value) return true;
            return data.ouFullname.indexOf(value) !== -1;
        },
        loadTree_ou(){
            let _this=this;
            _this.$axios.gets('/api/services/app/OuManagement/GetAllTree')
            .then(function(res){
                _this.selectTree_ou=res.result;
                _this.loadIcon();
            },function(res){
            })
        },
        nodeClick_ou(data,node,self){
            let _this=this;
            _this.item_ou.id=data.id;
            _this.item_ou.ouFullname=data.ouFullname;
            _this.$nextTick(function(){
                $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').click();
            })
            
            // $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
            //     if($(this).attr('date')==data.id){
            //         $(this).click()
            //     }
            // })
        },
        save(){
            let _this=this;
            console.log(_this.addData)
        },
        back(){
             this.$store.state.url='/role/roleList/default'
             this.$router.push({path:this.$store.state.url})
        },
        //-------------按钮操作-----------
        isBack(){
            let _this=this;
            if(_this.update){
                _this.dialogUserConfirm=true;
                _this.choseDoing='back'
            }else{
                _this.back()
            }
        },
        isUpdate(){//判断是否修改过信息
            this.update=true;
        },
        isCancel(){
            let _this=this;
            if(_this.update){
                _this.dialogUserConfirm=true;
                _this.choseDoing='Cancel'
            }else{
                _this.Cancel()
            }
        },
        sureDoing(){
            let _this=this;
            if(_this.choseDoing=='back'){
                _this.back()
                _this.dialogUserConfirm=false;
            }else if(_this.choseDoing=='Cancel'){
                _this.Cancel();
                _this.dialogUserConfirm=false;
            }
        },
        Cancel(){
            let _this=this;
            _this.clearData();
            _this.update=false;
        },
        clearData(){
            let _this=this;
            _this.addData={
                
            }
            _this.getDefault()
            _this.validation.reset();
        },
        saveAdd(){},
        
        
    }
       

    })
  </script>

  <style>
  .roleDetail{
      font-family: 'microsoft yahei';
  }
 /*收起*/
 .roleDetail .upBt{
     font-size: 12px;
     float: right;
     margin-right: 10px;
     margin-top: 10px;
     cursor: pointer;
 }
 .roleDetail .upBt i{
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s; 
    color:#cacaca;
    margin-left: 5px;
 }
 .roleDetail .upBt i.rotate{
     transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);	
 }

.roleDetail  .errorTips{
    margin-bottom: 10px;
}  
.roleDetail .el-row:first-child{
      padding:7px 0;
}
  .roleDetail .el-row{
     padding:15px 0;
     border-bottom: 1px solid #e4e4e4;
     background-color: #fff;
  }

.roleDetail .tabZoo{
     overflow: hidden;
     background-color: #fff;
 }

 .roleDetail  .getPadding,.tabZoo .el-tabs__nav-scroll{
     padding: 0 10px;
 }
 .roleDetail .tabZoo .auditInformation{
     margin-top: 15px;
 }

.roleDetail .tabZoo .erp_bt:first-child{
    margin-left: 0;
}
.roleDetail .nopadding{
    padding-top: 0;
}
.roleDetail .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.roleDetail .el-table td{
    padding: 3px 0;
}
.roleDetail .el-table__body{
    text-align: center;
}
.roleDetail .el-table .cell{
    padding-left:0px;
    padding-right:0px;
}
.mb10{
    margin-bottom: 10px;
}
.input-need{
    border:none;
    outline: none;
    width: 100%;
    height: 23px;
    line-height: 23px;
    text-align: center
}
.roleDetail .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}

.roleDetail .bgcolor.moreWidth{
     width: 505px;
 }
  .roleDetail .bgcolor.moreWidth .el-input{
      width: 423px;
  }

.menu_btn_active{
    background-color: #6699FF;
    color: #fff; 
}
/* 头部已选功能，未选功能 */
.double_bt{
    width: 200px;
    height: 30px;
    border: 1px solid #6699FF;
    color: #6699FF;
    background-color: transparent;
    font-size: 12px;
    border-radius: 3px;
    margin: auto;
}
.menu_btn_choose{
    width: 100px;
    height: 30px;
    float: left;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
}
.menu_btn_active{
    background-color: #6699FF;
    color: #fff; 
}
.show{
    display: block;
}
.menu_box{
    display: none;
}
.menu_item_wapper{
    display: block;
}
.menu_item_del{
    display: block;
}
.menu_item_add{
    display: none;
}
.load_more{
    text-align: center;
}
.menu_item{
    text-align: center;
    display: block;
    width: 190px;
    height: 60px;
    line-height: 60px;
    font-size: 13px;
    color: #666666;
    position: relative;
    float: left;
    margin-right: 20px;
    border: 1px solid #33CCCC;
    border-radius: 5px;
    background-color: transparent;
    margin-bottom: 15px;
}
.menu_add{
    text-align: center;
    display: block;
    width: 24px;
    height: 24px;
    position: absolute;
    left: -12.5px;
    top: 16px;
    background-color: #69f;
    color: #fff;
    font-size: 24px;
    border-radius: 50%;
    line-height: 24px;
    cursor: pointer;
}
.menu_add:hover{
    opacity: 0.9;
}
.dialog_{
    min-height: 540px;
    padding: 15px 20px;
    position: relative;
}
.dialog_l{
    background-color: #F9F9F9;
}
.dialog_r{
    background-color: #fff;
}
  </style>
  
  <style>
  .roleDetail .el-tab-pane .bt_add{
      margin-bottom:15px;
  }
.roleDetail .el-dialog__body{
  overflow: hidden;
}
.roleDetail .el-tree-node__content{
    background-color: #F9F9F9;
}
  </style>
