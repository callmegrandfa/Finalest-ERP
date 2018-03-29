<template>
 <div class="roleModify">
     <el-row class="fixed">
         <el-col :span="24">
            <button class="erp_bt bt_back" @click="back">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_back.png">
                </div>
                <span class="btDetail">返回</span>
            </button>

            <button class="erp_bt bt_save" @click="save">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_save.png">
                </div>
                <span class="btDetail">保存</span>
            </button>

            <button class="erp_bt bt_saveAdd">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_saveAdd.png">
                </div>
                <span class="btDetail">保存并新增</span>
            </button>

            <button class="erp_bt bt_add">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_add.png">
                </div>
                <span class="btDetail">复制</span>
            </button>   

            <button class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
            <button class="erp_bt bt_start"><div class="btImg"><img src="../../../static/image/common/bt_start.png"></div><span class="btDetail">启用</span></button>
            <button class="erp_bt bt_stop"><div class="btImg"><img src="../../../static/image/common/bt_stop.png"></div><span class="btDetail">停用</span></button>
            <button class="erp_bt bt_in"><div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div><span class="btDetail">导入</span></button>
            <button class="erp_bt bt_out"><div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div><span class="btDetail">导出</span></button>
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
                        <button class="erp_bt bt_add"  @click="dialogUser = true">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">选取</span>
                        </button>
                       
    <!-- 关联用户 -->
<el-dialog :visible.sync="dialogUser" title="关联用户" class="transfer_dialog">
    <el-col :span="24">
        <el-col :span="11" class="transfer_warapper">
            <el-col :span="24" class="transfer_header">
                <span>已选</span>
                <div class="transfer_search">
                    <el-autocomplete
                    class="search_input"
                    placeholder="搜索..."
                    >
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-autocomplete>
                </div>    
            </el-col>    
            <el-col :span="24" class="transfer_table">
                <el-table 
                :data="showCheckedUser" 
                border 
                style="width: 100%" 
                stripe 
                @selection-change="checkedSelect" 
                ref="roleTableLeft">
                     <el-table-column type="selection"></el-table-column>
                    <el-table-column prop="userCode" label="用户编码"></el-table-column>
                    <el-table-column prop="displayName" label="用户名称"></el-table-column>
                    <el-table-column prop="ouId" label="所属组织"></el-table-column>
                </el-table>   
            </el-col>
            <el-col :span="24" class="transfer_footer">
                <el-col :span="18">
                    <span>总共有{{totalItemLeftUser}}条数据</span>
                </el-col>
                <el-col :span="6">
                    <el-button class="el_transfer" :disabled="leftDownBtnUser" @click="pageDownLeftUser" type="primary" icon="el-icon-arrow-left" round></el-button>
                    <el-button class="el_transfer" :disabled="leftAddBtnUser" @click="pageAddLeftUser" type="primary" icon="el-icon-arrow-right" round></el-button>
                </el-col>
            </el-col>
        </el-col>
        <el-col :span="2" class="transfer_btns">
            <el-col :span="24" class="transfer_btn_wrapper">
                <el-button class="el_transfer" :disabled="is_user_nocheked" @click="noCheck_push_check_user" type="primary" icon="el-icon-arrow-left" round></el-button>
                <el-button class="el_transfer" :disabled="is_user_cheked" @click="check_push_noCheck_user" type="primary" icon="el-icon-arrow-right" round></el-button>
            </el-col>
        </el-col>
        <el-col :span="11" class="transfer_warapper">
            <el-col :span="24" class="transfer_header">
                <span>可选</span>
                <div class="transfer_search">
                    <el-autocomplete
                    class="search_input"
                    placeholder="搜索..."
                    >
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-autocomplete>
                </div>
            </el-col>    
            <el-col :span="24" class="transfer_table">
                <el-table 
                :data="showNoCheckedUser" 
                border 
                style="width: 100%" 
                stripe 
                @selection-change="nocheckedSelect" 
                ref="roleTabRight">
                    <el-table-column type="selection"></el-table-column>
                    <el-table-column prop="userCode" label="用户编码"></el-table-column>
                    <el-table-column prop="displayName" label="用户名称"></el-table-column>
                    <el-table-column prop="ouId" label="所属组织"></el-table-column>
                </el-table>  
                
            </el-col>
            <el-col :span="24" class="transfer_footer">
                <el-col :span="18">
                    <span>总共有{{totalItemRightUser}}条数据</span>
                </el-col>
                <el-col :span="6">
                    <el-button class="el_transfer" :disabled="rightDownBtnUser" @click="pageDownRightUser" type="primary" icon="el-icon-arrow-left" round></el-button>
                    <el-button class="el_transfer" :disabled="rightAddBtnUser" @click="pageAddRightUser" type="primary" icon="el-icon-arrow-right" round></el-button>
                </el-col>
            </el-col>
        </el-col>
    </el-col>
    <span slot="footer">
        <button class="transfer_footer_btn transfer_confirm" @click="dialogUser = false">确 认</button>
        <button class="transfer_footer_btn" @click="cancelPushUser">取 消</button>
    </span>
</el-dialog>
<!--dialog结束  -->
                        <el-table 
                        v-loading="userTableLoading"
                        :data="showCheckedUser" 
                        border 
                        style="width: 100%" 
                        stripe>
                            <el-table-column prop="userCode" label="用户编码"></el-table-column>

                            <el-table-column prop="displayName" label="用户名称"></el-table-column>

                            <el-table-column prop="ouId" label="所属组织"></el-table-column>

                             <el-table-column label="操作">
                                 <template slot-scope="scope">
                                     <el-button type="text"   @click="check_push_noCheck_userThis(scope.row)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination
                        style="margin-top:20px;" 
                        class="text-right" 
                        background layout="total,prev, pager, next,jumper" 
                        @current-change="userLeftPageChange"
                        :current-page="pageIndexLeftUser"
                        :page-size="oneItemLeftUser"
                        :total="totalItemLeftUser">
                        </el-pagination>   
                    </el-tab-pane>
<!-- - - - - - - - - - - - - - - - - - - - 分配组织- - - - - - - - - - - - - - - - - - - - -  -->
                    <el-tab-pane label="分配组织" name="ou" class="getPadding" style="z-index:-1000">
                        <button class="erp_bt bt_add" @click="dialogOuIsShow">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">选取</span>
                        </button>
                           <!-- 分配组织 -->
<el-dialog :visible.sync="dialogOu" title="分配组织" class="transfer_dialog">
    <el-col :span="24">
        <el-col :span="11" class="transfer_warapper">
                <el-col :span="24" class="transfer_header">
                    <span>已选</span>
                    <div class="transfer_search">
                        <el-autocomplete
                        class="search_input"
                        placeholder="搜索..."
                        >
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        </el-autocomplete>
                    </div>    
                </el-col>    
                <el-col :span="24" class="transfer_table">
                   <vue-scroll :ops="$store.state.option">
                    <el-tree
                    :data="ouTreeDataLeft"
                    :props="ouDefaultPropsLeft"
                    node-key="id"
                    default-expand-all
                    show-checkbox
                    @check-change="ouCheckChangeLeft"
                    ref="ouTreeLeft"
                    :expand-on-click-node="false"
                    @node-click="ouNodeClickLeft">
                    </el-tree>  
                    </vue-scroll>
                </el-col>
               
        </el-col>
        <el-col :span="2" class="transfer_btns">
            <el-col :span="24" class="transfer_btn_wrapper">
                <el-button class="el_transfer" :disabled="fromOuRight" @click="fromRightOu" type="primary" icon="el-icon-arrow-left" round></el-button>
                <el-button class="el_transfer" :disabled="fromOuLeft" @click="fromLeftOu" type="primary" icon="el-icon-arrow-right" round></el-button>
            </el-col>
        </el-col>
        <el-col :span="11" class="transfer_warapper">
            <el-col :span="24" class="transfer_header">
                <span>可选</span>
                <div class="transfer_search">
                    <el-autocomplete
                    class="search_input"
                    placeholder="搜索..."
                    >
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-autocomplete>
                </div>
            </el-col>    
            <el-col :span="24" class="transfer_table">
                <vue-scroll :ops="$store.state.option">
                <el-tree
                :data="ouTreeDataRight"
                :props="ouDefaultPropsRight"
                node-key="id"
                default-expand-all
                show-checkbox
                @check-change="ouCheckChangeRight"
                ref="ouTreeRight"
                :expand-on-click-node="false"
                @node-click="ouNodeClickRight">
                </el-tree>  
                </vue-scroll>
            </el-col>
            <!-- <el-col :span="24" class="transfer_footer">
                <el-col :span="18">
                    <span>总共有{{totalItemRightUser}}条数据</span>
                </el-col>
                <el-col :span="6">
                    <el-button class="el_transfer" :disabled="rightDownBtnUser" @click="pageDownRightUser" type="primary" icon="el-icon-arrow-left" round></el-button>
                    <el-button class="el_transfer" :disabled="rightAddBtnUser" @click="pageAddRightUser" type="primary" icon="el-icon-arrow-right" round></el-button>
                </el-col>
            </el-col> -->
        </el-col>
    </el-col>
    <span slot="footer">
        <el-col :span="12" class="checkType_wrapper">
            <span class="checkTips">节点选中方式</span>
            <el-select filterable
            class="checkTypeSelect"
            placeholder=""
            :class="{redBorder : validation.hasError('addData.status')}"
            v-model="nodeCheckType">
                <el-option v-for="item in nodeCheckTypes" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <button class="transfer_footer_btn transfer_newAdd">新增组织</button>
        </el-col>
        <el-col :span="12" class="isConfirm_wrapper">
            <button class="transfer_footer_btn transfer_confirm">确 认</button>
            <button class="transfer_footer_btn">取 消</button>
        </el-col>
        
    </span>
</el-dialog>
<!--dialog结束  -->
                        <el-table 
                        v-loading="ouTableLoading"
                        :data="ouTableData" 
                        border 
                        style="width: 100%" 
                        stripe>

                            <el-table-column prop="ouCode" label="组织编码"></el-table-column>

                            <el-table-column prop="ouTypes" label="组织类型"></el-table-column>

                            <el-table-column prop="assignPerson" label="授权人"></el-table-column>

                            <el-table-column label="授权时间">
                                <template slot-scope="scope">
                                    <el-date-picker
                                    v-model="ouTableData[scope.$index].assignTime"
                                    format="yyyy.MM.dd"
                                    type="datetime" 
                                    readonly
                                    align="center"></el-date-picker>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                 <template slot-scope="scope">
                                     <el-button type="text">删除</el-button>
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
                            <button class="erp_bt bt_add" @click="dialogFnIsShow">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_add.png">
                                </div>
                                <span class="btDetail">选取</span>
                            </button>
                        </el-col>

<!-- - - - - - - - - - - - - - - - - - - - 分配功能- - - - - - - - - - - - - - - - - - - - -  -->
                        <el-dialog :visible.sync="dialogFn" title="分配功能" class="transfer_dialog">
                            <el-col :span="24">
                                <el-col :span="6" class="transfer_warapper">
                                    <el-col :span="24" class="transfer_fixed">
                                        <vue-scroll :ops="$store.state.option">  
                                            <el-tree
                                                v-loading="fnTreeLoading" 
                                                :data="fnTreeData"
                                                :props="defaultProps"
                                                node-key="id"
                                                default-expand-all
                                                @node-click="fnNodeClick"
                                                :expand-on-click-node="false">
                                            </el-tree>
                                        </vue-scroll>
                                    </el-col>
                                </el-col>
                                <el-col :span="18" class="transfer_warapper">
                                    <el-col :span="24" class="transfer_fixed">
                                        <el-col :span="24" class="transfer_header">
                                            <el-col :span="12" class="header_displayName">
                                                <span>CRM</span>
                                            </el-col>
                                            <el-col :span="12" class="header_ops">
                                            <el-checkbox></el-checkbox>
                                            <span>全选</span>     
                                            </el-col>
                                        </el-col>  
                                        <el-col :span="24" class="checkbox_group">
                                            <span v-for="(x,index) in clickFnTreeData" :key="index">
                                                <span v-for="(i,inde) in moduleList" :key="inde">
                                                    <el-checkbox
                                                    v-model="clickFnTreeData[index][i.permissionName]" 
                                                    @change="selectChangeFn(clickFnTreeData[index][i.permissionName],i.permissionName)"
                                                    >
                                                    {{i.displayName}}
                                                    </el-checkbox>
                                                </span>
                                            </span>
                                            
                                            
                                        </el-col>    
                                        <el-table 
                                        :data="clickFnTreeData" 
                                        border 
                                        style="width: 100%" 
                                        stripe>
                                        <el-table-column prop="moduleName" label="名称"></el-table-column>
                                 
                                        <el-table-column :prop="i.permissionName" v-for="(i,index) in moduleList" :key="index" :label="i.displayName">
                                            <template slot-scope="scope">
                                                <el-checkbox v-model="clickFnTreeData[scope.$index][i.permissionName]" @change="selectChangeFn(scope.row[i.permissionName],i.permissionName)"></el-checkbox>
                                            </template>
                                        </el-table-column>
                                            <!-- <el-table-column prop="displayName" label="名称"></el-table-column>
                                            <el-table-column v-for="(i,index) in moduleList" :key="index" :label="i.displayName">
                                                <template slot-scope="scope">
                                                    <el-checkbox class="checkBox_table" :key="inde" v-for="(x,inde) in clickFnTreeData[scope.$index].children" v-if="x.permissionName == i.permissionName" :data-permissionName="x.permissionName" :checked="x.isCheck" @change="selectChangeFn(x,index)"></el-checkbox>    
                                                </template>
                                            </el-table-column> -->
                                        </el-table>
                                    </el-col>
                                </el-col>
                            </el-col>
                            <span slot="footer">
                                <button class="transfer_footer_btn transfer_confirm">确 认</button>
                                <button class="transfer_footer_btn">取 消</button>
                            </span>
                        </el-dialog>
                        <!--dialog结束  -->

                        <!-- tree -->
                        <el-col :span="5" class="fnTreeWrapper">
                            <vue-scroll :ops="$store.state.option">
                                <el-tree
                                    v-loading="fnTreeLoading" 
                                    :data="fnTreeData"
                                    :props="defaultProps"
                                    node-key="id"
                                    default-expand-all
                                    @node-click="fnNodeClick"
                                    :expand-on-click-node="false">
                                </el-tree>
                            </vue-scroll>
                        </el-col>
                        <!-- tree -->
                        <el-col :span="19">
                            <!-- table -->
                            <el-table 
                            :data="clickFnTreeData" 
                            border 
                            style="width: 100%" 
                            stripe>
                                <el-table-column prop="moduleName" label="名称"></el-table-column>
                                 
                                <el-table-column :prop="i.permissionName" v-for="(i,index) in moduleList" :key="index" :label="i.displayName">
                                    <template slot-scope="scope">
                                        <el-checkbox v-model="clickFnTreeData[scope.$index][i.permissionName]" @change="selectChangeFn(scope.row[i.permissionName],i.permissionName)"></el-checkbox>
                                    </template>
                                </el-table-column>
                            </el-table>
                            
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

// -------------分配组织-------------------
            nodeCheckTypes:[{//客户性质
                value:1,
                label: '包含所有下级'
            }, {
                value:2,
                label: '只包含当前选项'
            }],
            nodeCheckType:1, 
            dialogOu:false,
//-------------tree right---------------
            ouTreeDataRight:[],//
            ouDefaultPropsRight:{
                children: 'children',
                label: 'ouFullname',
                id:'id'
            },
//-------------tree left---------------
            ouTreeDataLeft:[],//
            ouDefaultPropsLeft:{
                children: 'children',
                label: 'ouFullname',
                id:'id'
            },
//-------------穿梭按钮-----------
            fromOuRight:true,
            fromOuLeft:true,
//-------------table--------------           
            ouTableData:[],//分配组织数据
            ouPageIndex:1,//分页的当前页码
            ouTotalPage:0,//当前分页总数
            ouOneItem:10,//每页有多少条信息
            ouPage:1,//当前页
            ouTotalItem:0,//总共有多少条消息
            ouTableLoading:false,
          
// -------------tree-------------------
            fnTreeLoading:false,
            fnTreeData:[],
            defaultProps: {
                children: 'children',
                label: 'displayName',
                value:'permissionName'
            },


// ------------关联用户dialog-------------
            dialogUser:false,//控制对话框
            checkedUserTable:[],//已选所有数据
            showCheckedUser:[],//右侧表格展示的数据
            // roleCodesCancel:[],//表格数据，用于取消操作
            nocheckedUserTable:[],//可选所有数据
            showNoCheckedUser:[],//左侧表格展示的数据
            allUsers:[],//所有数据
            selection_user_checked: [],//复选框选中数据
            selection_user_nochecked: [],//复选框选中数据
            is_user_nocheked:true,//可选
            is_user_cheked:true,//已选
//---------用户left表格-------------
            pageIndexLeftUser:1,//分页的当前页码
            totalPageLeftUser:0,//当前分页总数
            oneItemLeftUser:10,//每页有多少条信息
            pageLeftUser:1,//当前页 
            totalItemLeftUser:0,//总共有多少条消息  
            leftDownBtnUser:true,//分页按钮是否显示
            leftAddBtnUser:true,//分页按钮是否显示
 //---------用户right表格-------------         
            totalItemRightUser:0,//总共有多少条消息 
            pageIndexRightUser:1,//分页的当前页码
            totalPageRightUser:0,//当前分页总数
            oneItemRightUser:10,//每页有多少条信息
            pageRightUser:1,//当前页 
            rightDownBtnUser:true,//分页按钮是否显示
            rightAddBtnUser:true,//分页按钮是否显示            
//----------用户初始表格--------------
            userTableLoading:true,



//-----------关联权限---------------
            dialogFn:false,
            moduleList:[],
            checked:[],//展示所有权限
            nochecked:[],//
            allNode:[],
            storeNodeClickData:[],//储存点击节点的所有数据{all:[],check:[],nochecked:[]}
            nowClickNode:'',//记录点击的树节点
            checkTable:[],//页面渲染的数据
            nocheckTable:[],//页面渲染的数据
            allTable:[],//页面渲染的数据
            clickFnTreeData:[
                {moduleName:'',head:[{displayName:'',permissionName:''}]}
            ],//当前点击节点数据
            clickCheckBox:'',

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
        _this.loadTree_ou();//下拉列表
        _this.GetUsers();
        _this.getSelectData();//下拉列表

        _this.loadOuTable();//分配组织表格
        _this.loadOuTreeRight();//关联组织树形所有数据
        _this.loadOuTreeLeft();////关联组织树形左侧已选数据
        _this.getCheckFn();//获取已关联权限
        _this.getAllFn();//获取所有权限
        _this.fnLoadTree();//分配权限树形

      
    },
    watch: {
      search_ou(val) {
        this.$refs.tree_ou.filter(val);
      }
    },
  
    methods:{
        getSelectData(){
            let _this=this;
            _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status001'}).then(function(res){ 
            // 启用状态
            _this.selectData.Status001=res.result;
            })
        },
//-------------关联组织-----------
        dialogOuIsShow(){
            let _this=this;
            _this.dialogOu=true;
            _this.loadIcon();
        },
        ouCheckChangeRight(data, checked, indeterminate){
            let _this=this;
         
            if(data){
                _this.fromOuRight=false;
            }else{
                _this.fromOuRight=true;
            };
        },
        ouNodeClickRight(){//右侧树形节点点击

        },
        ouCheckChangeLeft(data, checked, indeterminate){
            let _this=this;
            if(data){
                _this.fromOuLeft=false;
            }else{
                _this.fromOuLeft=true;
            };
        },      
        ouNodeClickLeft(){//左侧树形节点点击


        },
        fromRightOu(){
            let _this=this;
        },
        fromLeftOu(){
            let _this=this;
        },
        loadOuTable(){//获取分配组织数据
            let _this=this;
            _this.ouTableLoading=true
            _this.$axios.gets('/api/services/app/Role/GetOuAssignList',{Id:_this.$route.params.id,SkipCount:(_this.ouPage-1)*_this.ouOneItem,MaxResultCount:_this.ouOneItem})
            .then(function(res){ 
                _this.ouTableData=res.result.items;
                _this.ouTotalItem=res.result.totalCount
                _this.ouTotalPage=Math.ceil(res.result.totalCount/_this.ouOneItem);
                _this.ouTableLoading=false;
                },function(res){
                _this.ouTableLoading=false;
            })
        },
        loadOuTreeRight(){
            let _this=this;
            _this.$axios.gets('/api/services/app/OuManagement/GetAllTree')
            .then(function(res){
                _this.ouTreeDataRight=res.result;
                // _this.treeLoading=false;
                _this.loadIcon()
            },function(res){
            //    _this.treeLoading=false;
            })
        },
        loadOuTreeLeft(){
            let _this=this;
            _this.$axios.gets('/api/services/app/Role/GetOuAssignTree',{id:_this.$route.params.id})
            .then(function(res){
                _this.ouTreeDataLeft=res.result;
                // _this.treeLoading=false;
                _this.loadIcon()
            },function(res){
            //    _this.treeLoading=false;
            })
        },
//---------------分配权限--------------
        getCheckFn(){//获取关联权限
            let _this=this;
            // /api/services/app/Role/GetAllPermissions
            _this.$axios.gets('/api/services/app/Role/GetPermissions',{Id:_this.$route.params.id})
            .then(function(res){
                _this.checked=res.result.items;
                },function(res){
            })
        },
        getAllFn(){//获取所有权限
            let _this=this;
            // /api/services/app/Role/GetAllPermissions
            _this.$axios.gets('/api/services/app/Role/GetAllPermissions')
            .then(function(res){
                _this.allNode=res.result.items;
                },function(res){
            })
        },
        
        dialogFnIsShow(){
            let _this=this;
            _this.dialogFn=true;
            // _this.fnLoadTree()
             _this.loadIcon()
        },
        ouHandleCurrentChange(val){//页码改变
            let _this=this;
            _this.ouPage=val;
            _this.loadOuTable();
        },

        fnLoadTree(){
            let _this=this;
            _this.fnTreeLoading=true;
            _this.$axios.gets('/api/services/app/PermissionManagement/GetPermissionTree')
            .then(function(res){
                _this.fnTreeData=res.items;
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
        uniqueArrayFn(array1, array2){//求差集
            var result = [];
            for(var i = 0; i < array1.length; i++){
                var item = array1[i];
                var repeat = false;
                for (var j = 0; j < array2.length; j++) {
                    if (array1[i].permissionName == array2[j].permissionName) {//唯一key
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
        
        selectChangeFn(x,permissionName){
            let _this=this;
            if(x){//选中状态为true
                _this.checked.push({
                    name:permissionName,
                    displayName:permissionName,
                    id:0,
                    description:'',
                })
            }else{//选中状态为false
                for(let i=0;i<_this.checked.length;i++){//移除已选
                    if(permissionName==_this.checked[i].displayName){
                        _this.checked.splice(i,1)
                    }
                }
            }
        },
        fnNodeClick(data){
            let _this=this;
            // _this.checked=[
            //     {description:null,displayName:"HKERP.Users.UserAppService.GetAll",id:0,name:"HKERP.Users.UserAppService.GetAll"},
            //     {description:null,displayName:"HKERP.Users.UserAppService.GetRoles",id:0,name:"HKERP.Users.UserAppService.GetRoles"}
            // ]
            
            let item={moduleName:data.displayName}
            let head=[];
            $.each(data.children,function(index,value){
                head.push({displayName:value.displayName,permissionName:value.permissionName})
                item[value.permissionName]=false
                $.each(_this.checked,function(indexs,val){
                    if(value.permissionName==val.displayName){
                        item[value.permissionName]=true
                    }
                })
            })
            item.head=head
            _this.moduleList=head
            _this.clickFnTreeData=[item]
            // console.log(item)
            // _this.moduleList=[]
            // $.each(data.children,function(index,value){
            //     let item={displayName:value.displayName,permissionName:value.permissionName}
            //     _this.moduleList.push(item)
            // })
            // let all=data.children;
            // let checkClick=[];
            // let nocheckedClick=[];
            // _this.nowClickNode=data.displayName;
            // if(!_this.storeNodeClickData[data.displayName]){
            //     if(_this.checked.length>0){
            //         for(let i=0;_this.checked.length>i;i++){
            //             for(let x=0;all.length>x;x++){
            //                 if(_this.checked[i].displayName==all[x].permissionName){
            //                     all[x].isCheck=true

            //                     // _this.checked[i].isCheck=true
            //                     // checkClick.push(_this.checked[i])

            //                     checkClick.push(all[x])
            //                     break
            //                 }
            //             }
            //         }
            //         nocheckedClick=_this.uniqueArrayFn(all,checkClick)
            //     }else{
            //         for(let x=0;all.length>x;x++){
            //             all[x].isCheck=false
            //         }
            //         nocheckedClick=all;
            //     }

            //     _this.storeNodeClickData[data.displayName]={all:all,check:checkClick,nochecked:nocheckedClick}
            // }
            // _this.checkTable=_this.storeNodeClickData[data.displayName].check;
            // _this.nocheckTable=_this.storeNodeClickData[data.displayName].nochecked;
            // _this.allTable=_this.storeNodeClickData[data.displayName].all;
            // let clickItem=data
            // clickItem.children=_this.storeNodeClickData[data.displayName].all;
            // _this.clickFnTreeData=[clickItem]
            
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
            let permissions=[];//关联权限
            $.each(_this.checked,function(index,val){
                permissions.push(val.displayName)
            });
            _this.addData.permissions=permissions;
            let userCodes=[];//关联用户
            $.each(_this.checkedUserTable,function(index,val){
                userCodes.push(val.userCode)
            });
           _this.addData.userCodes=userCodes;
           
        },
        back(){
             this.$store.state.url='/role/roleList/default'
             this.$router.push({path:this.$store.state.url})
        },
// ----------关联用户--------------
        editDialog(){
            let _this=this;
            if(!_this.isEdit){
                _this.dialogUser=true;
            }else{
                return false;
            }
        },
        LeftbtnIsShow(){
            let _this=this;
            if(_this.pageLeftUser>1){
                _this.leftDownBtnUser=false;
            }else{
                _this.leftDownBtnUser=true;
            }
            
            if(_this.totalPageLeftUser>_this.pageLeftUser){
                _this.leftAddBtnUser=false;
            }else{
                _this.leftAddBtnUser=true;
            }
            
        },
        RightbtnIsShow(){
            let _this=this;
            if(_this.pageRightUser>1){
                _this.rightDownBtnUser=false;
            }else{
                _this.rightDownBtnUser=true;
            }
            if(_this.totalPageRightUser>_this.pageRightUser){
                _this.rightAddBtnUser=false;
            }else{
                _this.rightAddBtnUser=true;
            }
        },
        userLeftPageChange(val){//页码改变
            let _this=this;
            _this.pageLeftUser=val;
            _this.showCheckedUser=_this.pagination([],[],_this.oneItemLeftUser,_this.pageLeftUser,'left')
        },
        uniqueArray(array1, array2){//求差集
            var result = [];
            for(var i = 0; i < array1.length; i++){
                var item = array1[i];
                var repeat = false;
                for (var j = 0; j < array2.length; j++) {
                    if (array1[i].id == array2[j].id) {//唯一key
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
        pagination(addData,delData,oneItem,thisPage,LeftOrRight){//数据分页
            //data需要被分页的数据,类型为[{}]
            //addData被添加的数据数据,类型为[{}]
            //delData被移走的数据,类型为[{}]
            //totalItem总共有多少条消息  
            //pageIndex分页的当前页码
            //totalPages当前分页总数
            //oneItem每页有多少条信息
            //thisPage当前页
            
            let _this=this;
            let nowData=[];
            let startIndex=(thisPage-1)*oneItem;//起始数据所在位置
            let endIndex=startIndex + oneItem;
            if(LeftOrRight=='right'){
                if(addData.length>0){
                    _this.nocheckedUserTable=addData.concat(_this.nocheckedUserTable);
                }
                if(delData.length>0){
                    _this.nocheckedUserTable=_this.uniqueArray(_this.nocheckedUserTable,delData);
                }
                
                if(_this.nocheckedUserTable.length>0){
                    if(endIndex>_this.nocheckedUserTable.length){
                        endIndex=_this.nocheckedUserTable.length;
                    }
                    for(startIndex;startIndex<endIndex;startIndex++){//获取当前页展示的oneItem条数据
                        nowData.push(_this.nocheckedUserTable[startIndex])
                    }
                }
            }else if(LeftOrRight=='left'){
                if(addData.length>0){
                    _this.checkedUserTable=addData.concat(_this.checkedUserTable);
                }
                if(delData.length>0){
                    _this.checkedUserTable=_this.uniqueArray(_this.checkedUserTable,delData)
                }
                if(_this.checkedUserTable.length>0){
                    if(endIndex>_this.checkedUserTable.length){
                        endIndex=_this.checkedUserTable.length;
                    }
                    for(startIndex;startIndex<endIndex;startIndex++){//获取当前页展示的oneItem条数据
                        nowData.push(_this.checkedUserTable[startIndex])
                    }
                }
            }
            //左侧
            _this.totalItemLeftUser=_this.checkedUserTable.length;//左侧总共多少条数据
            _this.totalPageLeftUser=Math.ceil(_this.totalItemLeftUser/_this.oneItemLeftUser);//有多少页
            _this.LeftbtnIsShow()
            //右侧
            _this.totalItemRightUser=_this.nocheckedUserTable.length;//右侧总共多少条数据
            _this.totalPageRightUser=Math.ceil(_this.totalItemRightUser/_this.oneItemRightUser);//有多少页
            _this.RightbtnIsShow()
            return nowData
            
        },
       
        GetUsers(){//获取左侧表格数据
            let _this=this;
            _this.userTableLoading=true;
            _this.$axios.gets('/api/services/app/Role/GetUsers',{id:_this.$route.params.id,SkipCount:0,MaxResultCount:1})
            
           .then(function(response){//获取已选角色
                let totalCheckedAll=response.result.totalCount;//获取总共当前关联角色条数
                _this.$axios.gets('/api/services/app/Role/GetUsers',{id:_this.$route.params.id,SkipCount:0,MaxResultCount:totalCheckedAll})
                .then(function(resp){//获取已选角色
                    _this.checkedUserTable=resp.result.items
                    _this.getAllUserData()//获取所有角色数据
                })
                
           })
        },
        getAllUserData(){
            let _this=this;
            _this.$axios.gets('/api/services/app/User/GetAll',{SkipCount:0,MaxResultCount:1})//获取所有角色
            .then(function(re){ 
                let totalAll=re.result.totalCount;//获取总共当前关联角色条数
                _this.$axios.gets('/api/services/app/User/GetAll',{SkipCount:0,MaxResultCount:totalAll})//获取所有角色
                .then(function(res){ 
                    _this.nocheckedUserTable=[]
                    _this.allUsers=res.result.items;
                    _this.totalItemRightUser=res.result.totalCount;
                    if(_this.checkedUserTable.length>0){//获取可选角色
                        _this.nocheckedUserTable=_this.uniqueArray(_this.allUsers,_this.checkedUserTable)
                        _this.showNoCheckedUser=_this.pagination([],[],_this.oneItemRightUser,_this.pageRightUser,'right')
                        _this.showCheckedUser=_this.pagination([],[],_this.oneItemLeftUser,_this.pageLeftUser,'left')
                    }else{
                        _this.nocheckedUserTable=_this.allUsers;
                        _this.showCheckedUser=[];
                        _this.showNoCheckedUser=_this.pagination([],[],_this.oneItemRightUser,_this.pageRightUser,'right')
                        
                    }
                    _this.userTableLoading=false;
                },function(res){
                    _this.userTableLoading=false;
                })
            })        
        },
        checkedSelect(val) {//dialogRole选中已选角色
            let _this=this;
            _this.selection_user_checked = val;
            if(val.length==0){
                _this.is_user_cheked=true
            }else{
                _this.is_user_cheked=false
            }
        },
        nocheckedSelect(val) {//dialogRole选中可选角色
            let _this=this;
            _this.selection_user_nochecked = val;
            if(val.length==0){
                _this.is_user_nocheked=true
            }else{
                _this.is_user_nocheked=false
            }
        },
        noCheck_push_check_user(){//从右往左添加数据
            let _this=this;
            _this.showCheckedUser=_this.pagination(_this.selection_user_nochecked,[],_this.oneItemLeftUser,_this.pageLeftUser,'left')
            _this.showNoCheckedUser=_this.pagination([],_this.selection_user_nochecked,_this.oneItemRightUser,_this.pageRightUser,'right')
        },
        check_push_noCheck_user(){//从左往右添加数据
            let _this=this;
            _this.showCheckedUser=_this.pagination([],_this.selection_user_checked,_this.oneItemLeftUser,_this.pageLeftUser,'left')
            _this.showNoCheckedUser=_this.pagination(_this.selection_user_checked,[],_this.oneItemRightUser,_this.pageRightUser,'right')
           
        },
        check_push_noCheck_userThis(val){//删除一个关联角色
            let _this=this;
            if(!_this.isEdit){
                let json=[val]
                _this.update=true;
                _this.checkedUserTable=_this.uniqueArray(_this.checkedUserTable,json);
                _this.showNoCheckedUser=_this.pagination(json,[],_this.oneItemRightUser,_this.pageRightUser,'right')
                _this.showCheckedUser=_this.pagination([],json,_this.oneItemLeftUser,_this.pageLeftUser,'left')
            }else{
                return false
            }
        },
        cancelPushUser(){//取消
            let _this=this;
            _this.dialogUser=false;
            _this.GetUsers()
        },
        pageDownLeftUser(){//左侧表格向左翻页
            let _this=this;
            if(_this.pageLeftUser>1){
                _this.pageLeftUser--
                
                _this.showCheckedUser=_this.pagination([],[],_this.oneItemLeftUser,_this.pageLeftUser,'left')
            }
        },
        pageAddLeftUser(){//左侧表格向右翻页
            let _this=this;
            if(_this.pageLeftUser<=_this.totalPageLeftUser){
                _this.pageLeftUser++
                _this.showCheckedUser=_this.pagination([],[],_this.oneItemLeftUser,_this.pageLeftUser,'left')
            }
        },
        pageDownRightUser(){//右侧表格向左翻页
            let _this=this;
            if(_this.pageRightUser>1){
                _this.pageRightUser--
                _this.showNoCheckedUser=_this.pagination([],[],_this.oneItemRightUser,_this.pageRightUser,'right')
            }    
        },
        pageAddRightUser(){//右侧表格向右翻页
            let _this=this;
            if(_this.pageRightUser<_this.totalPageRightUser){
                _this.pageRightUser++
                _this.showNoCheckedUser=_this.pagination([],[],_this.oneItemRightUser,_this.pageRightUser,'right')
            }
        },
        
    }
       

    })
  </script>

  <style>
  .roleModify{
      font-family: 'microsoft yahei';
  }
 /*收起*/
 .roleModify .upBt{
     font-size: 12px;
     float: right;
     margin-right: 10px;
     margin-top: 10px;
     cursor: pointer;
 }
 .roleModify .upBt i{
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s; 
    color:#cacaca;
    margin-left: 5px;
 }
 .roleModify .upBt i.rotate{
     transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);	
 }

.roleModify  .errorTips{
    margin-bottom: 10px;
}  
.roleModify .el-row:first-child{
      padding:7px 0;
}
  .roleModify .el-row{
     padding:15px 0;
     border-bottom: 1px solid #e4e4e4;
     background-color: #fff;
  }

.roleModify .tabZoo{
     overflow: hidden;
     background-color: #fff;
 }

 .roleModify  .getPadding,.tabZoo .el-tabs__nav-scroll{
     padding: 0 10px;
 }
 .roleModify .tabZoo .auditInformation{
     margin-top: 15px;
 }

.roleModify .tabZoo .erp_bt:first-child{
    margin-left: 0;
}
.roleModify .nopadding{
    padding-top: 0;
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
.roleModify .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.show{
    display: block;
}
.fnTreeWrapper{
    height: 500px;
}
  </style>
  
  <style>
  .roleModify .el-tab-pane .bt_add{
      margin-bottom:15px;
  }

.roleModify .el-dialog__body{
  overflow: hidden;
}
.roleModify .el-tree-node__content{
    background-color: #F9F9F9;
}
/* .roleModify thead tr:last-child{
    display: none;
} */
  </style>
