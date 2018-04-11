<template>
 <div class="roleDetail">
     <el-row class="fixed">
         <el-col :span="24">
            <!-- <button @click="isBack" class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
            <button @click="save" class="erp_bt bt_save" :disabled="!ifModify" :class="{erp_fb_bt : !ifModify}"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
            <button @click="isCancel" class="erp_bt bt_cancel" :disabled="!ifModify" :class="{erp_fb_bt : !ifModify}"><div class="btImg"><img src="../../../static/image/common/bt_cancel.png"></div><span class="btDetail">取消</span></button>
            <button plain @click="saveAdd" class="erp_bt bt_saveAdd" :disabled="!ifModify" :class="{erp_fb_bt : !ifModify}"><div class="btImg"><img src="../../../static/image/common/bt_saveAdd.png"></div><span class="btDetail">保存并新增</span></button>
            <button @click="add" class="erp_bt bt_add" :disabled="ifModify" :class="{erp_fb_bt : ifModify}"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
            <button @click="isDeleteThis" class="erp_bt bt_del" :disabled="ifModify" :class="{erp_fb_bt : ifModify}"><div class="btImg" ><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button> -->
            <button @click="isBack" class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button> 
            <button plain @click="save" class="erp_bt bt_save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>  
            <button @click="isCancel" class="erp_bt bt_cancel"><div class="btImg"><img src="../../../static/image/common/bt_cancel.png"></div><span class="btDetail">取消</span></button>
            <button plain @click="saveAdd" class="erp_bt bt_saveAdd"><div class="btImg"><img src="../../../static/image/common/bt_saveAdd.png"></div><span class="btDetail">保存并新增</span></button>
            <button class="erp_fb_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
            <button class="erp_fb_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
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
                        <el-select clearable 
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
                            :render-content="renderContent_ou"
                            :highlight-current="true"
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
                            <el-option v-show="false" :key="item_ou.id" :label="item_ou.ouName" :value="item_ou.id">
                            </el-option>
                            <!-- <el-option v-show="false" v-for="item in selectData.OUType" :key="item.id" :label="item.ouName" :value="item.id" :date="item.id">
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
                            <el-select clearable filterable  
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
               <el-tabs v-model="activeName" @tab-click="handleClick">
                   <!-- - - - - - - - - - - - - - - - - - - - 分配组织- - - - - - - - - - - - - - - - - - - - -  -->
                    <el-tab-pane label="管理组织" name="ou" class="getPadding" style="z-index:-1000">
                        <button class="erp_bt bt_add" @click="dialogOuIsShow">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">选取</span>
                        </button>
                        <div class="search_input_group">
                            <div class="search_input_wapper" @keyup.enter="searchOuTable">
                                <el-input
                                    placeholder="搜索..."
                                    v-model="searchTableOu"
                                    class="search_input"
                                    >
                                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                                </el-input>
                            </div>
                            <div class="search_button_wrapper" @click="dialogUserDefined = true">
                                <button class="userDefined">
                                    <i class="fa fa-cogs" aria-hidden="true"></i>自定义
                                </button>
                            </div>
                        </div>
                           <!-- 分配组织 -->
<el-dialog :visible.sync="dialogOu"  class="transfer_dialog dialogOu" width="30%">
        <span slot="title">
            <span>分配组织</span>
            <a  href="javascript:;" class="add" @click="addNewOu">+</a>
            <div class="search_input_group">
                <div class="search_input_wapper">
                    <el-input
                        placeholder="搜索..."
                        v-model="filterTextOu"
                        class="search_input"
                        >
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </div>
            </div>
        </span>
        <el-col :span="24" class="transfer_warapper">
            <el-col :span="24" class="checkBoxOuUser">
                <el-checkbox @change="CheckAllTree" v-model="checkAllOu" class="square_el"></el-checkbox><span>全选</span>
                <el-checkbox @change="showCheckTree" v-model="showCheck" class="square_el"></el-checkbox><span>查看已选</span>
            </el-col>
            <el-col :span="24" class="transfer_table">
                <vue-scroll :ops="$store.state.option">
                    <el-tree
                    :render-content="renderContent_ouTreeDataRight"
                    :data="ouTreeDataRight"
                    show-checkbox
                    :highlight-current="true"
                    default-expand-all
                    node-key="ouId"
                    ref="tree"
                    :filter-node-method="filterNode"
                    @node-click="ouNodeClickRight"
                    @check-change="isCheckAllOu"
                    :expand-on-click-node="false"
                    :props="ouDefaultPropsRight">
                    </el-tree>
                </vue-scroll>
            </el-col>
            <!-- <el-button @click="getCheckedNodes">通过 node 获取</el-button>
            <el-button @click="getCheckedKeys">通过 key 获取</el-button> -->
            <!-- <el-button @click="setCheckedNodes">通过 node 设置</el-button>
            <el-button @click="setCheckedKey">通过 key 设置</el-button> -->
        </el-col>
    <span slot="footer">
        <button class="transfer_footer_btn transfer_confirm" @click="ouDialogSure">确 认</button>
        <button class="transfer_footer_btn" @click="dialogOu = false">取 消</button>
    </span>
</el-dialog>
<!--dialog结束  -->
                        <el-table 
                        v-loading="ouTableLoading"
                        :data="showPageTableOu" 
                        border 
                        style="width: 100%" 
                        stripe>

                            <el-table-column prop="ouCode" label="组织编码"></el-table-column>

                            <el-table-column prop="ouTypes" label="组织类型"></el-table-column>

                            <el-table-column prop="assignPerson" label="授权人"></el-table-column>

                            <el-table-column label="授权时间">
                                <template slot-scope="scope">
                                    <el-date-picker
                                    v-model="showPageTableOu[scope.$index].assignTime"
                                    format="yyyy.MM.dd"
                                    type="datetime" 
                                    readonly
                                    align="center"></el-date-picker>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                 <template slot-scope="scope">
                                     <el-button type="text" @click="delCheckOu(scope.row)">删除</el-button>
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
<!-- - - - - - - - - - - - - - - - - - - - 关联用户- - - - - - - - - - - - - - - - - - - - -  -->
                    <el-tab-pane label="关联用户" name="role" class="getPadding" style="z-index:-10">
                        <button class="erp_bt bt_add"  @click="dialogUser = true">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">选取</span>
                        </button>
                        <div class="search_input_group">
                            <div class="search_input_wapper" @keyup.enter="searchBottomUserTable">
                                <el-input
                                    v-model="searchBottomUser"
                                    placeholder="搜索..."
                                    class="search_input"
                                    >
                                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                                </el-input>
                            </div>
                            <div class="search_button_wrapper" @click="dialogUserDefined = true">
                                <button class="userDefined">
                                    <i class="fa fa-cogs" aria-hidden="true"></i>自定义
                                </button>
                            </div>
                        </div>
                       
    <!-- 关联用户 -->
<el-dialog :visible.sync="dialogUser" title="关联用户" class="transfer_dialog">
    <el-col :span="24">
        <el-col :span="11" class="transfer_warapper">
            <el-col :span="24" class="transfer_header">
                <span>已选</span>
                <div class="transfer_search" @keyup.enter="searchLeftUserTable">
                    <el-input
                        placeholder="搜索..."
                        v-model="searchLeftUser"
                        class="search_input"
                        >
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                    <!-- <el-autocomplete
                     v-model="searchLeftUser"
                    :fetch-suggestions="queryLesftUser"
                    class="search_input"
                    placeholder="搜索..."
                    >
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-autocomplete> -->
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
                    <el-table-column prop="ouName" label="所属组织"></el-table-column>
                </el-table>   
            </el-col>
            <el-col :span="24" class="transfer_footer">
                <el-col :span="18">
                    <span>共{{totalPageLeftUser}}页</span>
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
                <div class="transfer_search"  @keyup.enter="searchRightUserTable">
                    <el-input
                        placeholder="搜索..."
                        v-model="searchRightUser"
                        class="search_input"
                        >
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                    <!-- <el-autocomplete
                    class="search_input"
                    placeholder="搜索..."
                    >
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-autocomplete> -->
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
                    <el-table-column prop="ouName" label="所属组织"></el-table-column>
                </el-table>  
                
            </el-col>
            <el-col :span="24" class="transfer_footer">
                <el-col :span="18">
                    <span>共{{totalPageRightUser}}页</span>
                </el-col>
                <el-col :span="6">
                    <el-button class="el_transfer" :disabled="rightDownBtnUser" @click="pageDownRightUser" type="primary" icon="el-icon-arrow-left" round></el-button>
                    <el-button class="el_transfer" :disabled="rightAddBtnUser" @click="pageAddRightUser" type="primary" icon="el-icon-arrow-right" round></el-button>
                </el-col>
            </el-col>
        </el-col>
    </el-col>
    <span slot="footer">
        <button class="transfer_footer_btn transfer_confirm" @click="dialogUserConfirmUser">确 认</button>
        <button class="transfer_footer_btn" @click="cancelPushUser">取 消</button>
    </span>
</el-dialog>
<!--dialog结束  -->
                        <el-table 
                        v-loading="userTableLoading"
                        :data="showCheckedUserTable" 
                        border 
                        style="width: 100%" 
                        stripe>
                            <el-table-column prop="userCode" label="用户编码"></el-table-column>

                            <el-table-column prop="displayName" label="用户名称"></el-table-column>

                            <el-table-column prop="ouName" label="所属组织"></el-table-column>

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
                        @current-change="userBottomPageChange"
                        :current-page="pageIndexBottomUser"
                        :page-size="oneItemBottomUser"
                        :total="totalItemBottomUser">
                        </el-pagination>   
                    </el-tab-pane>
<!-- - - - - - - - - - - - - - - - - - - - 分配功能- - - - - - - - - - - - - - - - - - - - -  -->
                    <el-tab-pane label="分配功能" name="fn" class="getPadding" style="z-index:-1000">
                        <!-- tree -->
                        <el-col :span="5">
                            <el-col :span="24" class="Fn_Tree_search">
                                <el-input
                                    placeholder="搜索..."
                                    class="search_input"
                                    v-model="filterTextFn"
                                    >
                                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                                </el-input>   
                            </el-col>  
                            <el-col :span="24" class="fnTreeWrapper">
                                <vue-scroll :ops="$store.state.option">
                                    <el-tree
                                        :render-content="renderContent_Fn"
                                        :highlight-current="true"
                                        v-loading="fnTreeLoading" 
                                        :data="fnTreeData"
                                        :props="defaultProps"
                                        node-key="id"
                                        ref="tree_fn"
                                        :filter-node-method="filterNodeFn"
                                        default-expand-all
                                        @node-click="fnNodeClick"
                                        :expand-on-click-node="false">
                                    </el-tree>
                                </vue-scroll>
                            </el-col>
                        </el-col>
                        <!-- tree -->
                        <el-col :span="19">
                             <el-col :span="24" class="chooseFn">
                                <el-checkbox @change="CheckAllFn" v-model="checkAllFns">全选</el-checkbox>
                                <el-checkbox @change="showCheckFn" v-model="showCheckFns">查看已选</el-checkbox>
                                <i class="fa fa-cog" aria-hidden="true" @click="nextDivIsShow = !nextDivIsShow"></i>
                            </el-col>
                            <el-col :span="24" class="checkbox_group" v-show="nextDivIsShow">
                                <span v-for="(x,index) in showCheckedFnTable" :key="index">
                                    <span v-for="(i,inde) in x.children" :key="inde">
                                        <el-checkbox
                                        class="fnCheckBox"
                                        v-model="i.check" 
                                        @change="selectChangeFn(i.check,i.permissionName)"
                                        >
                                        {{i.displayName}}
                                        </el-checkbox>
                                    </span>
                                </span>
                            </el-col>   
                            <el-col :span="24">
                                <!-- table -->
                                <el-table 
                                :data="showCheckedFnTable" 
                                border 
                                class="fnTable"
                                style="width: 100%" 
                                stripe>
                                    <el-table-column prop="moduleName" label="名称" fixed="left" width="200"></el-table-column>
                                    <el-table-column label="功能" max-height="2500">
                                        <template slot-scope="scope">
                                            <el-checkbox class="fnCheckBox" v-for="(item,index) in showCheckedFnTable[scope.$index].children" :key="index" v-model="item.check" @change="selectChangeFn(item.check,item.permissionName)">{{item.displayName}}</el-checkbox>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <el-pagination
                                style="margin-top:20px;" 
                                class="text-right" 
                                 id="FnPagination"
                                background layout="total,prev, pager, next,jumper" 
                                @current-change="FnPageChange"
                                :current-page="pageIndexFn"
                                :page-size="oneItemFn"
                                :total="totalItemFn">
                                </el-pagination> 
                            </el-col>
                            
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
            <div class="bgcolor"><label>创建人</label><el-input disabled="disabled"></el-input></div>
            <div class="bgcolor">
                <label>创建时间</label>
                <el-date-picker 
                type="date" 
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss" 
                disabled>
            </el-date-picker>
        </div>
            <div class="bgcolor"><label>修改人</label><el-input disabled="disabled"></el-input></div>
            <div class="bgcolor">
                <label>修改时间</label>
                <el-date-picker 
                type="date" 
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss" 
                disabled>
                </el-date-picker>
            </div>
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
                    <p class="dialog_body_icon"><i class="el-icon-question"></i></p>
                    <p class="dialog_font dialog_body_message">此操作将忽略您的更改，是否继续？</p>
                </el-col>
            </el-col>
            
            <span slot="footer">
                <button class="dialog_footer_bt dialog_font" @click="sureDoing">确 认</button>
                <button class="dialog_footer_bt dialog_font" @click="dialogUserConfirm = false">取 消</button>
            </span>
        </el-dialog>
        <!-- dialog -->
      <!-- dialog错误信息提示 -->
        <el-dialog :visible.sync="errorMessage" class="dialog_confirm_message" width="25%">
            <template slot="title">
                <span class="dialog_font">提示</span>
            </template>
            <el-col :span="24" class="detail_message_btnWapper">
                <span @click="detail_message_ifShow = !detail_message_ifShow" class="upBt">详情<i class="el-icon-arrow-down" @click="detail_message_ifShow = !detail_message_ifShow" :class="{rotate : !detail_message_ifShow}"></i></span>
            </el-col>
            <el-col :span="24" style="position: relative;">
                <el-col :span="24">
                    <p class="dialog_body_icon"><i class="el-icon-warning"></i></p>
                    <p class="dialog_font dialog_body_message">信息提报有误!</p>
                </el-col>
                <el-collapse-transition>
                    <el-col :span="24" v-show="detail_message_ifShow" class="dialog_body_detail_message">
                        <vue-scroll :ops="$store.state.option">
                            <span class="dialog_font">{{response.message}}</span>
                            <h4 class="dialog_font dialog_font_bold">其他信息:</h4>
                            <span class="dialog_font">{{response.details}}<br><span :key="index" v-for="(value,index) in response.validationErrors"><span :key="ind" v-for="(val,ind) in value.members">{{val}}</span><br></span></span>
                        </vue-scroll> 
                    </el-col>
                </el-collapse-transition>   
            </el-col>
            <span slot="footer">
                <button class="dialog_footer_bt dialog_font dialog_footer_bt_long" @click="errorMessage = false">确 认</button>
            </span>
        </el-dialog>
        <!-- dialog -->                                                         
</div>
</template>

<script>
export default({
    data() {
        return{
            firstModify:false,
            secondModify:false,
            thirdModify:false,
            forthModify:false,
            ifModify:false,
        // 错误信息提示开始
            detail_message_ifShow:false,
            errorMessage:false,
        // 错误信息提示结束
            response:{
                details:'',
                message:'',
            },
            dialogUserConfirm:false,//信息更改提示控制
            choseDoing:'',//存储点击按钮判断信息
            search_ou:'',
            selectTree_ou:[
            ],
            item_ou:{
                id:'',
                ouName:''
            },
            selectProps_ou: {
                children: 'children',
                label: 'ouName',
                id:'id'
            },

            selectData:{//select数据
                Status001:[],//启用状态
            },
            ifShow:true, 
            activeName: 'ou',//tabs标签页默认激活name
            addData:{
                "ouId": "",
                "roleCode": "",
                "displayName": "",
                "status": 1,
                "remark": "",
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
            storeCheckOu:[],
            allOuLength:0,//所有数据长度，判断是否全选
//-------------tree right---------------
            ouTreeDataRight:[],//
            ouDefaultPropsRight:{
                children: 'children',
                label: 'ouName',
                id:'ouId'
            },
            showCheck:false,//查看已选
            checkAllOu:false,//全选
            filterTextOu:'',//搜索
            addOu:'default',
//-------------tree left---------------
            ouTreeDataLeft:[],//
            ouDefaultPropsLeft:{
                children: 'children',
                label: 'ouName',
                id:'id'
            },
//-------------穿梭按钮-----------
            fromOuRight:true,
            fromOuLeft:true,
//-------------table--------------    
            searchTableOu:'',//搜索框值       
            ouCheckAll:[],//分配组织数据
            showPageTableOu:[],//展示分页后表格数据
            ouPageIndex:1,//分页的当前页码
            ouTotalPage:0,//当前分页总数
            ouOneItem:10,//每页有多少条信息
            ouPage:1,//当前页
            ouTotalItem:0,//总共有多少条消息
            ouTableLoading:false,
            // loadOuWhat:'getAllCheckOu',//分页时调用



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
            searchLeftUser:'',//搜索
            // timeout:null,//搜索
            // restaurantsLeftUser:[],//搜索
            pageIndexLeftUser:1,//分页的当前页码
            totalPageLeftUser:0,//当前分页总数
            oneItemLeftUser:10,//每页有多少条信息
            pageLeftUser:1,//当前页 
            totalItemLeftUser:0,//总共有多少条消息  
            leftDownBtnUser:true,//分页按钮是否显示
            leftAddBtnUser:true,//分页按钮是否显示
 //---------用户right表格-------------         
            searchRightUser:'',
            totalItemRightUser:0,//总共有多少条消息 
            pageIndexRightUser:1,//分页的当前页码
            totalPageRightUser:0,//当前分页总数
            oneItemRightUser:10,//每页有多少条信息
            pageRightUser:1,//当前页 
            rightDownBtnUser:true,//分页按钮是否显示
            rightAddBtnUser:true,//分页按钮是否显示            
//----------用户初始表格--------------
            userTableLoading:true,
            showCheckedUserTable:[],
            totalItemBottomUser:0,//总共有多少条消息 
            pageIndexBottomUser:1,//分页的当前页码
            totalPageBottomUser:0,//当前分页总数
            oneItemBottomUser:10,//每页有多少条信息
            pageBottomUser:1,//当前页   
            searchBottomUser:'',//搜索

//-----------关联权限---------------
            nextDivIsShow:true,//按钮组显示隐藏
            filterTextFn:'',//树形搜索框值
            // dialogFn:false,
            checked:[],//展示所有权限
            nochecked:[],//
            allNode:[],
            storeNodeClickData:[],//储存点击节点的所有数据{all:[],check:[],nochecked:[]}
            nowClickNode:'',//记录点击的树节点
            checkTable:[],//页面渲染的数据
            nocheckTable:[],//页面渲染的数据
            allTable:[],//页面渲染的数据
            clickFnTreeData:[
                // {moduleName:'',head:[{displayName:'',permissionName:''}]}
            ],//当前点击节点数据
            clickCheckBox:'',
            // pageTable:[],//用于分页展示所有权限
// -------------tree-------------------
            fnTreeLoading:false,
            fnTreeData:[],
            result:[],
            defaultProps: {
                children: 'no',
                label: 'displayName',
                value:'permissionName'
            },           
//-------------分页----------------------
            checkAllFns:false,//全选
            showCheckFns:false,//查看已选
            showCheckedFnTable:[],//表格展示数据
            totalItemFn:0,//总共有多少条消息 
            pageIndexFn:1,//分页的当前页码
            totalPageFn:0,//当前分页总数
            oneItemFn:10,//每页有多少条信息
            pageFn:1,//当前页   
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
         return this.Validator.value(value).integer();
      },
      'addData.remark': function (value) {//备注
         return this.Validator.value(value).maxLength(200);
      },

    },
    created () {
        let _this=this;
        _this.loadTree_ou();//下拉列表
        // _this.GetUsers();
        _this.getSelectData();//下拉列表

        // _this.loadOuTable();//分配组织表格分页数据
        // _this.getAllCheckOu();//获取所有已关联组织数据
        _this.getAllOulength();//获取所有数据长度判断是否全选
        _this.loadOuTreeAll();//关联组织树形所有数据
        // _this.loadOuTreeLeft();////关联组织树形左侧已选数据
        // _this.getCheckFn();//获取已关联权限
        // _this.getAllFn();//获取所有权限
        _this.fnLoadTree();//分配权限树形
        _this.getAllUserData()//获取所有用户数据
        _this.getDefault()
        // _this.getModifyData();//根据id获取数据
    },
    
    watch: {
      search_ou(val) {
        this.$refs.tree_ou.filter(val);
      },
      filterTextOu(val) {
        this.$refs.tree.filter(val);
      },
      filterTextFn(val) {
        this.$refs.tree_fn.filter(val);
      },
      addData:{
            handler:function(val,oldVal){
                let _this=this;
                if(!_this.firstModify){
                    _this.firstModify=!_this.firstModify;
                }else{
                    _this.ifModify=true
                }
            },
            deep:true,
        },
        clickFnTreeData:{
            handler:function(val,oldVal){
                
                let _this=this;
                if(!_this.secondModify){ 
                    _this.secondModify=!_this.secondModify;
                }else{
                    _this.ifModify=true
                }
            },
            deep:true,
        },
        showCheckedUserTable:{
            handler:function(val,oldVal){
                
                let _this=this;
                if(!_this.thirdModify){ 
                    _this.thirdModify=!_this.thirdModify;
                }else{
                    _this.ifModify=true
                }
            },
            deep:true,
        },
        ouCheckAll:{
            handler:function(val,oldVal){
                
                let _this=this;
                if(!_this.forthModify){ 
                    _this.forthModify=!_this.forthModify;
                }else{
                    _this.ifModify=true
                }
            },
            deep:true,
        },
        
    },
    methods:{
        getSelectData(){
            let _this=this;
            _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status001'}).then(function(res){ 
            // 启用状态
            _this.selectData.Status001=res.result;
            })
        },
        getDefault(){
            let _this=this;
            _this.$axios.gets('/api/services/app/OuManagement/GetWithCurrentUser').then(function(res){ 
             // 默认用户业务组织
             _this.addData={
                "ouId": res.result.id,
                "roleCode": "",
                "displayName": "",
                "status": 1,
                "remark": "",
            },
            _this.item_ou.id=res.result.id;
            _this.item_ou.ouName=res.result.ouName;
            })
        },
        // getModifyData(){
        //     let _this=this;
        //      _this.$axios.gets('/api/services/app/Role/Get',{Id:_this.$route.params.id})
        //     .then(function(res){
        //         // _this.addData=res.result;
        //         _this.addData={
        //             "ouId": res.result.ouId,
        //             "roleCode": res.result.roleCode,
        //             "displayName": res.result.displayName,
        //             "status": res.result.status,
        //             "remark": res.result.remark,
        //             "id": res.result.id,
        //             }
        //         _this.auditInformation={//审计信息
        //             createdBy:res.result.createdBy,
        //             createdTime:res.result.createdTime,
        //             modifiedBy:res.result.modifiedBy,
        //             modifiedTime:res.result.modifiedTime,
        //         }

        //         },function(res){
        //     })
        // },
         open(tittle,iconClass,className) {
            this.$notify({
            position: 'bottom-right',
            iconClass:iconClass,
            title: tittle,
            showClose: false,
            duration: 3000,
            customClass:className
            });
        },
        isBack(){
            let _this=this;
            if(_this.ifModify){
                _this.dialogUserConfirm=true;
                _this.choseDoing='back'
            }else{
                _this.back()
            }
        },
        isCancel(){
            let _this=this;
            if(_this.ifModify){
                _this.dialogUserConfirm=true;
                _this.choseDoing='Cancel'
            }else{
                _this.Cancel()
            }
        },
        isDeleteThis(){
            let _this=this;
            _this.dialogUserConfirm=true;
            _this.choseDoing='deleteThis'

        },
        sureDoing(){
            let _this=this;
            if(_this.choseDoing=='back'){
                _this.back()
                _this.dialogUserConfirm=false;
            }else if(_this.choseDoing=='Cancel'){
                _this.Cancel();
                _this.dialogUserConfirm=false;
            }else if(_this.choseDoing=='deleteThis'){
                _this.deleteThis();
                _this.dialogUserConfirm=false;
            }
        },
        Cancel(){
            let _this=this;
            _this.validation.reset();
            _this.getDefault();
             _this.ouCheckAll=[];
             _this.showPageTableOu=[];
            _this.ouPageIndex=1;
            _this.ouTotalPage=0;
            _this.ouPage=1;
            _this.ouTotalItem=0;
            _this.checkedUserTable=[]
            _this.showCheckedUserTable=[]
            _this.nocheckedUserTable=_this.allUsers;
            _this.showCheckedUser=[];
            _this.showNoCheckedUser=_this.pagination([],[],_this.oneItemRightUser,_this.pageRightUser,'right')
            _this.pageIndexBottomUser=1;//分页的当前页码
            _this.totalPageBottomUser=0,//当前分页总数
            _this.totalItemBottomUser=0,//总共有多少条消息 
            _this.checkAllFns=false,//全选
            _this.showCheckFns=false,//查看已选
            _this.fnLoadTree();//分配权限树形
            // _this.getAllUserData()//获取所有用户数据
            _this.firstModify=false;
            _this.secondModify=false;
            _this.thirdModify=false;
            _this.forthModify=false;
            _this.ifModify=false;
        },
      
        getErrorMessage(message,details,validationErrors){
            let _this=this;
            _this.response.message='';
            _this.response.details='';
            _this.response.validationErrors=[];
            if(details!=null && details){
                _this.response.details=details;
            }
            if(message!=null && message){
                _this.response.message=message;
            }
            if(message!=null && message){
                _this.response.validationErrors=validationErrors;
            }
        },
        save(){
            let _this=this;
            _this.$validate()
            .then(function (success) {
                if (success) {
                    let permissions=[];//关联权限
                    $.each(_this.clickFnTreeData,function(index,val){
                        $.each(val.children,function(i,v){
                            if(v.check){
                                permissions.push(v.permissionName)
                            }
                        })
                    });
                    _this.addData.permissions=permissions;
                   
                    let userCodes=[];//关联用户
                    $.each(_this.showCheckedUserTable,function(index,val){
                        userCodes.push(val.userCode)
                    });
                    _this.addData.userCodes=userCodes;

                    let ouAssigns=[];//关联组织
                    $.each(_this.ouCheckAll,function(index,val){
                    //    console.log(val)
                        ouAssigns.push(val.ouId)
                    });
                    _this.addData.ouAssigns=ouAssigns;
                    //ajax
                    _this.$axios.posts('/api/services/app/Role/Create',_this.addData)
                    .then(function(res){
                        _this.$store.state.url='/role/roleModify/'+res.result.id
                        _this.$router.push({path:_this.$store.state.url})
                        _this.open('保存成功','el-icon-circle-check','successERP');
                    },function(res){
                        if(res && res!=''){ _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)}
                        _this.errorMessage=true;
                    })
                }
            });
        },
        saveAdd(){
            let _this=this;
            _this.$validate()
            .then(function (success) {
                if (success) {
                    let permissions=[];//关联权限
                    $.each(_this.clickFnTreeData,function(index,val){
                        $.each(val.children,function(i,v){
                            if(v.check){
                                permissions.push(v.permissionName)
                            }
                        })
                    });
                    _this.addData.permissions=permissions;
                   
                    let userCodes=[];//关联用户
                    $.each(_this.showCheckedUserTable,function(index,val){
                        userCodes.push(val.userCode)
                    });
                    _this.addData.userCodes=userCodes;

                    let ouAssigns=[];//关联组织
                    $.each(_this.ouCheckAll,function(index,val){
                    //    console.log(val)
                        ouAssigns.push(val.ouCode)
                    });
                    _this.addData.ouAssigns=ouAssigns;
                    //ajax
                    _this.$axios.posts('/api/services/app/Role/Create',_this.addData)
                    .then(function(res){
                        _this.add()
                        _this.open('保存成功','el-icon-circle-check','successERP');
                    },function(res){
                        if(res && res!=''){ _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)}
                        _this.errorMessage=true;
                    })
                }
            });
            
        },
        back(){
             this.$store.state.url='/role/roleList/default'
             this.$router.push({path:this.$store.state.url})
        },
        add(){
            let _this=this;
            _this.$store.state.url='/role/roleDetail/default';
            _this.$router.push({path:this.$store.state.url})//点击切换路由OuManage
        },
        handleClick(tab, event){///点击标签页控制重置数据后表格的宽度
            let _this=this;
            $(tab.$el).find('table').css('width',$(tab.$el).find('.el-table__header-wrapper').css('width'))
            $(tab.$el).find('.el-table__empty-block').css('width',$(tab.$el).find('.el-table__header-wrapper').css('width'))
        },
        
//-------------关联组织-----------
        getAllOulength(){
            let _this=this;
            _this.$axios.gets('/api/services/app/OuManagement/GetAll',{SkipCount:0,MaxResultCount:1})
            .then(function(res){
                _this.allOuLength=res.result.totalCount
                // console.log(res)
            })
        },
        searchOuTable(){
            let _this=this;
            // _this.searchLeftUser
            let newJson=[];
            let patt1 = new RegExp(_this.searchTableOu);
            $.each(_this.ouCheckAll,function(index,val){
                let str=val.ouCode;
                
                let result = patt1.test(str)
                if(result){
                    newJson.push(val)
                }
            })
            _this.showPageTableOu=_this.paginationUserSearch(newJson,_this.ouOneItem,_this.ouPage).nowData
            _this.ouTotalItem=_this.paginationUserSearch(newJson,_this.ouOneItem,_this.ouPage).TotalItem
            _this.ouTotalPage=_this.paginationUserSearch(newJson,_this.ouOneItem,_this.ouPage).TotalPage
        },
        filterNode(value, data) {
            if (!value) return true;
            return data.ouName.indexOf(value) !== -1;
        },
        addRouterButton(name,url){//添加router页签
            let _this=this;
            var flag=false;
                if(_this.$store.state.slidbarData){
                    _this.$store.state.temporary=_this.$store.state.slidbarData;
                }
                var temporary=_this.$store.state.temporary;
                var name=name;
                var menuUrl=url;
                if(temporary.length==0){//temporary为空
                    flag=true;
                }else{//temporary不为空
                    for(var i=0;i<temporary.length;i++){
                        if(temporary[i].name==name){//相同页签
                            flag=false;
                            break;
                        }else{
                        flag=true;
                        }   
                    }
                }
                var pushItem={'name':name,'url':menuUrl};
                
                _this.$store.state.url=menuUrl;//储存当前url在router里的name
                // this.$store.state.url='/'+menuUrl+'/'+'default';//储存当前url
                
                if(flag){
                    temporary.push(pushItem);
                }
                window.localStorage.setItem('ERP',JSON.stringify(temporary));
                _this.$router.push({name:this.$store.state.url})
        },
        addNewOu(){//新增组织
            let _this=this;
            // let data=_this.$refs.tree.getCheckedNodes();
                _this.$store.state.OuManage.url='/OuManage/OuManageDetail/'+_this.addOu;//路由重定向
                _this.addRouterButton('组织管理','OuManage')
                _this.dialogOu=false
        },
        paginationOu(checkAllata,oneItem,thisPage){//数据分页
        //checkAllata分页数据
        //oneItem每页有多少条信息
        //thisPage当前页
            let _this=this;
            let nowData=[];
            // console.log(checkAllata)
            let startIndex=(thisPage-1)*oneItem;//起始数据所在位置
            let endIndex=startIndex + oneItem;
                if(checkAllata.length>0){
                    if(endIndex>checkAllata.length){
                        endIndex=checkAllata.length
                    }
                    for(startIndex;startIndex<endIndex;startIndex++){//获取当前页展示的oneItem条数据
                        // console.log(checkAllata[startIndex])
                        nowData.push(checkAllata[startIndex])
                    }
                }
            _this.ouTotalItem=checkAllata.length;//总共多少条数据
            _this.ouTotalPage=Math.ceil(checkAllata.length/oneItem);//有多少页
            return nowData
        },
        dialogOuIsShow(){
            let _this=this;
            _this.dialogOu=true;
            setTimeout(function(){
                // console.log(_this.storeCheckOu)
               _this.$refs.tree.setCheckedNodes(_this.ouCheckAll);
               _this.isCheckAllOu()
            },200)
            
        },
        ouNodeClickRight(data){//右侧树形节点点击
            let _this=this;
            _this.addOu=data.ouId;
        },
        // loadOuTable(){//获取分配组织数据
        //     let _this=this;
        //     _this.ouTableLoading=true

        //     _this.$axios.gets('/api/services/app/Role/GetOuAssignList',{Id:_this.$route.params.id,SkipCount:(_this.ouPage-1)*_this.ouOneItem,MaxResultCount:_this.ouOneItem})
        //     .then(function(res){ 
        //         // console.log(res)
        //         _this.ouCheckAll=res.result.items;
        //         _this.ouTotalItem=res.result.totalCount
        //         _this.ouTotalPage=Math.ceil(res.result.totalCount/_this.ouOneItem);
        //         _this.ouTableLoading=false;
        //         // _this.storeCheckOu=[];
        //         // $.each(res.result.items,function(index,val){
        //         //     _this.storeCheckOu.push(val.ouId)
        //         // })           
        //         _this.loadOuTreeAll();
        //         },function(res){
        //         _this.ouTableLoading=false;
        //     })
        // },
        // getAllCheckOu(){//获取所有关联权限
        //      let _this=this;
        //      _this.ouTableLoading=true
        //     _this.$axios.gets('/api/services/app/Role/GetOuAssignList',{Id:_this.$route.params.id,SkipCount:0,MaxResultCount:1})
        //     .then(function(resp){ 
        //         if(resp.result.totalCount>0){
        //             _this.$axios.gets('/api/services/app/Role/GetOuAssignList',{Id:_this.$route.params.id,SkipCount:(_this.ouPage-1)*_this.ouOneItem,MaxResultCount:resp.result.totalCount})
        //             .then(function(res){ 
        //                 // console.log(res)
        //                 _this.ouCheckAll=res.result.items;
        //                 _this.showPageTableOu=_this.paginationOu(_this.ouCheckAll,_this.ouOneItem,_this.ouPage)
        //                 _this.ouTableLoading=false;
        //                 })
        //         }else{
        //             _this.ouCheckAll=[]
        //             _this.ouTableLoading=false;
        //         }
    
        //     })
        // },
        loadOuTreeAll(){
            let _this=this;
            _this.$axios.gets('/api/services/app/Role/GetOuAssignTree',{Id:0})
            .then(function(res){
                _this.ouTreeDataRight=res.result;
            },function(res){
            })
        },
        // loadOuTreeLeft(){
        //     let _this=this;
        //     _this.$axios.gets('/api/services/app/Role/GetOuAssignTree',{id:_this.$route.params.id})
        //     .then(function(res){
        //         _this.ouTreeDataLeft=res.result;
        //         // console.log(res.result)
        //         //  _this.treeLoading=false;
        //     },function(res){
        //     //    _this.treeLoading=false;
        //     })
        // },
        ouDialogSure(){//dialog点击确认
            let _this=this;
            _this.dialogOu=false;
            // console.log(_this.$refs.tree.getCheckedKeys())
            _this.ouCheckAll=_this.$refs.tree.getCheckedNodes();
            _this.showPageTableOu=_this.paginationOu(_this.ouCheckAll,_this.ouOneItem,_this.ouPage)
            // console.log(_this.ouCheckAll)
        },
        delCheckOu(row){//删除表格数据
            let _this=this;
            let indexs=null
            $.each(_this.ouCheckAll,function(index,val){
                if(val.ouId==row.ouId){
                    indexs=index
                }
            })
            if(indexs!=null){
                _this.ouCheckAll.splice(indexs,1)
            }
             _this.showPageTableOu=_this.paginationOu(_this.ouCheckAll,_this.ouOneItem,_this.ouPage)
        },
        CheckAllTree(){//全选
            let _this=this;
            let topNode=[]
            if(_this.checkAllOu){
                // $.each(_this.ouTreeDataRight,function(index,val){
                //     topNode.push(val)
                // })
                _this.$refs.tree.setCheckedNodes(_this.ouTreeDataRight);
                 $('.el-tree-node__content').each(function(){
                    $(this).css('display','block')
                })
            }else{
                // _this.$refs.tree.setCheckedNodes(_this.ouCheckAll);
                _this.$refs.tree.setCheckedNodes([])
                setTimeout(function(){
                    if(_this.showCheck){
                        $('.el-checkbox__input').each(function(){
                            if(!$(this).hasClass('is-indeterminate') && !$(this).hasClass('is-checked')){
                                $(this).parents('.el-tree-node__content').css('display','none')
                            }
                        })
                    }
                },100)
            }
            
        },
        isCheckAllOu(){//是否全选
            let _this=this;
            if(_this.$refs.tree.getCheckedNodes().length==_this.allOuLength){
                _this.checkAllOu=true
            }else{
                _this.checkAllOu=false
            }
        },
        showCheckTree(){//查看已选
            let _this=this;
            if(_this.showCheck){
                $('.el-checkbox__input').each(function(){
                    if(!$(this).hasClass('is-indeterminate') && !$(this).hasClass('is-checked')){
                        $(this).parents('.el-tree-node__content').css('display','none')
                    }
                })
            }else{
                $('.el-tree-node__content').each(function(){
                    $(this).css('display','block')
                })
            }
            
        },
        ouHandleCurrentChange(val){//页码改变
            let _this=this;
            _this.ouPage=val;
            _this.showPageTableOu=_this.paginationOu(_this.ouCheckAll,_this.ouOneItem,_this.ouPage)
        },
//---------------分配权限--------------
        CheckAllFn(){//全选
            let _this=this;
            if(_this.checkAllFns){
                $.each(_this.showCheckedFnTable,function(index,val){
                    $.each(val.children,function(i,v){
                        v.check=true;
                    })
                }) 
                $('.fnCheckBox').each(function(){
                   if(!$(this).find('.el-checkbox__input').hasClass('is-checked')){
                       $(this).css('display','block')
                   }
               })
            }else{
                $.each(_this.showCheckedFnTable,function(index,val){
                    $.each(val.children,function(i,v){
                        v.check=false;
                    })
                })
                if(_this.showCheckFns){
                    setTimeout(function(){
                        $('.fnCheckBox').each(function(){
                            if(!$(this).find('.el-checkbox__input').hasClass('is-checked')){
                                $(this).css('display','none')
                            }
                        })
                    },100)     
                }
            }
            
        },
        isCheckAllFn(){//是否全选
            let _this=this;
            let flag=true;
            $.each(_this.showCheckedFnTable,function(index,val){
                $.each(val.children,function(i,v){
                    if(v.check==false){
                        flag=false
                    }
                })
            })
            if(flag){
                _this.checkAllFns=true
            }else{
                _this.checkAllFns=false
            }
        },
        showCheckFn(){//查看已选
            let _this=this;
            if(_this.showCheckFns){
               $('.fnCheckBox').each(function(){
                   if(!$(this).find('.el-checkbox__input').hasClass('is-checked')){
                       $(this).css('display','none')
                   }
               })     
            }else{
                $('.fnCheckBox').each(function(){
                   if(!$(this).find('.el-checkbox__input').hasClass('is-checked')){
                       $(this).css('display','block')
                   }
               }) 
            }
        },
        showCheckFnReset(){//重置查看已选
            let _this=this;
            _this.showCheckFns=false;
            $('.fnCheckBox').each(function(){
                   if(!$(this).find('.el-checkbox__input').hasClass('is-checked')){
                       $(this).css('display','block')
                   }
               }) 
        },
        filterNodeFn(value, data) {
            if (!value) return true;
            return data.displayName.indexOf(value) !== -1;
        },
        // getCheckFn(){//获取关联权限
        //     let _this=this;
        //     // /api/services/app/Role/GetAllPermissions
        //     _this.$axios.gets('/api/services/app/Role/GetPermissions',{Id:_this.$route.params.id})
        //     .then(function(res){
        //         _this.checked=res.result.items;
        //         _this.pageTable=res.result.items;
        //         _this.clickFnTreeData=[];
        //         $.each(_this.fnTreeData,function(inde,val){
        //             let item={moduleName:val.displayName,children:[]}
        //             let head=[];
        //             $.each(val.children,function(index,value){
        //                 // console.log(value)
        //                 head.push({displayName:value.displayName,permissionName:value.permissionName})  
        //                 let x={check:false,permissionName:value.permissionName}
                        
        //                 $.each(_this.checked,function(indexs,val){
        //                     if(value.permissionName==val.displayName){
        //                         x.check=true;
        //                         x.displayName=value.displayName
        //                     }
        //                 })
        //                 item.children.push(x)
        //             })
        //             item.head=head
        //             _this.clickFnTreeData.push(item)
        //             $('#FnPagination').css('display','block')
        //         })
        //         _this.showCheckedFnTable=_this.paginationUserSearch(_this.clickFnTreeData,_this.oneItemFn,_this.pageFn).nowData
        //         _this.totalItemFn=_this.paginationUserSearch(_this.clickFnTreeData,_this.oneItemFn,_this.pageFn).TotalItem
        //         _this.totalPageFn=_this.paginationUserSearch(_this.clickFnTreeData,_this.oneItemFn,_this.pageFn).TotalPage
        //         _this.isCheckAllFn()
        //         },function(res){
        //     })
        // },
        FnPageChange(val){//分页
            let _this=this;
            _this.pageFn=val;
            _this.showCheckedFnTable=_this.paginationUserSearch(_this.clickFnTreeData,_this.oneItemFn,_this.pageFn).nowData
            _this.totalItemFn=_this.paginationUserSearch(_this.clickFnTreeData,_this.oneItemFn,_this.pageFn).TotalItem
            _this.totalPageFn=_this.paginationUserSearch(_this.clickFnTreeData,_this.oneItemFn,_this.pageFn).TotalPage
            _this.isCheckAllFn();
            _this.showCheckFnReset();
        },
        fnLoadTree(){
            let _this=this;
            _this.fnTreeLoading=true;
            _this.$axios.gets('/api/services/app/PermissionManagement/GetPermissionTree')
            .then(function(res){
                // console.log(res)
                _this.fnTreeData=res.items;
                _this.fnTreeLoading=false;
                // _this.getCheckFn();
                 _this.clickFnTreeData=[];
                $.each(_this.fnTreeData,function(inde,val){
                    let item={moduleName:val.displayName,children:[]}
                    let head=[];
                    $.each(val.children,function(index,value){
                        // console.log(value)
                        head.push({displayName:value.displayName,permissionName:value.permissionName})  
                        let x={check:false,permissionName:value.permissionName}
                        x.check=false;
                        x.displayName=value.displayName
                            
                        item.children.push(x)
                    })
                    item.head=head
                    _this.clickFnTreeData.push(item)
                })
                $('#FnPagination').css('display','block')
                _this.showCheckedFnTable=_this.paginationUserSearch(_this.clickFnTreeData,_this.oneItemFn,_this.pageFn).nowData
                _this.totalItemFn=_this.paginationUserSearch(_this.clickFnTreeData,_this.oneItemFn,_this.pageFn).TotalItem
                _this.totalPageFn=_this.paginationUserSearch(_this.clickFnTreeData,_this.oneItemFn,_this.pageFn).TotalPage
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
        uniqueArrayFn(array1, array2,array1Key,array2Key){//求差集
            var result = [];
            for(var i = 0; i < array1.length; i++){
                var item = array1[i];
                var repeat = false;
                for (var j = 0; j < array2.length; j++) {
                    if (array1[i][array1Key] == array2[j][array2Key]) {//唯一key
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
            _this.isCheckAllFn()
            // console.log(_this.checked)
        },
        fnNodeClick(data){//获取点击所有权限
            let _this=this;
            // let item={moduleName:data.displayName,children:[]}
            // let head=[];
            // $.each(data.children,function(index,value){
            //     // console.log(value)
            //     head.push({displayName:value.displayName,permissionName:value.permissionName})  
            //     let x={check:false,permissionName:value.permissionName}
                
            //     $.each(_this.checked,function(indexs,val){
            //         if(value.permissionName==val.displayName){
            //             x.check=true;
            //             x.displayName=value.displayName
            //         }
            //     })
            //     item.children.push(x)
            // })
            // item.head=head
            // _this.clickFnTreeData=[item]
            // console.log(_this.clickFnTreeData)
            let flag=false
            let showCheckedFnTable=[]
            $.each(_this.clickFnTreeData,function(index,val){
                if(data.displayName==val.moduleName){
                    flag=true
                    showCheckedFnTable.push(val)
                }
            })
            if(flag){
                _this.showCheckedFnTable=showCheckedFnTable
                $('#FnPagination').css('display','none')
            }
        },
        filterNode_ou(value, data) {
            if (!value) return true;
            return data.ouName.indexOf(value) !== -1;
        },
        loadTree_ou(){
            let _this=this;
            _this.$axios.gets('/api/services/app/OuManagement/GetAllTree')
            .then(function(res){
                _this.selectTree_ou=res.result;
            },function(res){
            })
        },
        nodeClick_ou(data,node,self){
            let _this=this;
             _this.item_ou.id=data.id;
            _this.item_ou.ouName=data.ouName;
            _this.$nextTick(function(){
                $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').click();
            })
            // $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
            //     if($(this).attr('date')==data.id){
            //         $(this).click()
            //     }
            // })
        },
// ----------关联用户--------------
        searchLeftUserTable(){//左侧数据搜索
            let _this=this;
            // _this.searchLeftUser
            let newJson=[];
            let patt1 = new RegExp(_this.searchLeftUser);
            $.each(_this.checkedUserTable,function(index,val){
                let str=val.displayName;
                let result = patt1.test(str);
                if(result){
                    newJson.push(val)
                }
            })
            _this.showCheckedUser=_this.paginationUserSearch(newJson,_this.oneItemLeftUser,_this.pageLeftUser).nowData
            _this.totalItemLeftUser=_this.paginationUserSearch(newJson,_this.oneItemLeftUser,_this.pageLeftUser).TotalItem
            _this.totalPageLeftUser=_this.paginationUserSearch(newJson,_this.oneItemLeftUser,_this.pageLeftUser).TotalPage

        },
        searchRightUserTable(){//右侧数据搜索
             let _this=this;
            // _this.searchLeftUser
            let newJson=[];
            let patt1 = new RegExp(_this.searchRightUser);
            $.each(_this.nocheckedUserTable,function(index,val){
                let str=val.displayName;
                let result = patt1.test(str);
                if(result){
                    newJson.push(val)
                }
            })
            _this.showNoCheckedUser=_this.paginationUserSearch(newJson,_this.oneItemRightUser,_this.pageRightUser).nowData
            _this.totalItemRightUser=_this.paginationUserSearch(newJson,_this.oneItemRightUser,_this.pageRightUser).TotalItem
            _this.totalPageRightUser=_this.paginationUserSearch(newJson,_this.oneItemRightUser,_this.pageRightUser).TotalPage

        },
        searchBottomUserTable(){
            let _this=this;
            // _this.searchLeftUser
            let newJson=[];
            let patt1 = new RegExp(_this.searchBottomUser);
            $.each(_this.checkedUserTable,function(index,val){
                let str=val.displayName;
                
                let result = patt1.test(str)
                if(result){
                    newJson.push(val)
                }
            })
            _this.showCheckedUserTable=_this.paginationUserSearch(newJson,_this.oneItemBottomUser,_this.pageBottomUser).nowData
            _this.totalItemBottomUser=_this.paginationUserSearch(newJson,_this.oneItemBottomUser,_this.pageBottomUser).TotalItem
            _this.totalPageBottomUser=_this.paginationUserSearch(newJson,_this.oneItemBottomUser,_this.pageBottomUser).TotalPage
        },
        editDialog(){
            let _this=this;
                _this.dialogUser=true;
            
        },
        paginationUserSearch(data,oneItem,thisPage){//数据分页
        //checkAllata分页数据
        //oneItem每页有多少条信息
        //thisPage当前页
            let _this=this;
            let x={}
            let nowData=[];
            // console.log(checkAllata)
            let startIndex=(thisPage-1)*oneItem;//起始数据所在位置
            let endIndex=startIndex + oneItem;
                if(data.length>0){
                    if(endIndex>data.length){
                        endIndex=data.length
                    }
                    for(startIndex;startIndex<endIndex;startIndex++){//获取当前页展示的oneItem条数据
                        // console.log(data[startIndex])
                        nowData.push(data[startIndex])
                    }
                }
            // _this.ouTotalItem=data.length;//总共多少条数据
            // _this.ouTotalPage=Math.ceil(data.length/oneItem);//有多少页
            x={TotalItem:data.length,TotalPage:Math.ceil(data.length/oneItem),nowData:nowData};
            return x
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
        userBottomPageChange(val){//页码改变
            let _this=this;
            _this.pageBottomUser=val;
            _this.showCheckedUserTable=_this.paginationUserSearch(_this.checkedUserTable,_this.oneItemBottomUser,_this.pageBottomUser).nowData
            _this.totalItemBottomUser=_this.paginationUserSearch(_this.checkedUserTable,_this.oneItemBottomUser,_this.pageBottomUser).TotalItem
            _this.totalPageBottomUser=_this.paginationUserSearch(_this.checkedUserTable,_this.oneItemBottomUser,_this.pageBottomUser).TotalPage
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
       
        // GetUsers(){//获取左侧表格数据
        //     let _this=this;
        //     _this.userTableLoading=true;
        //     _this.$axios.gets('/api/services/app/Role/GetUsers',{id:_this.$route.params.id,SkipCount:0,MaxResultCount:1})
            
        //    .then(function(response){//获取已选角色
        //         let totalCheckedAll=response.result.totalCount;//获取总共当前关联角色条数
        //         if(totalCheckedAll>0){
        //             _this.$axios.gets('/api/services/app/Role/GetUsers',{id:_this.$route.params.id,SkipCount:0,MaxResultCount:totalCheckedAll})
        //             .then(function(resp){//获取已选角色
        //                 _this.checkedUserTable=resp.result.items;
                    
        //                 _this.showCheckedUserTable=resp.result.items;
        //                  _this.showCheckedUserTable=_this.paginationUserSearch(_this.checkedUserTable,_this.oneItemBottomUser,_this.pageBottomUser).nowData
        //                 _this.totalItemBottomUser=_this.paginationUserSearch(_this.checkedUserTable,_this.oneItemBottomUser,_this.pageBottomUser).TotalItem
        //                 _this.totalPageBottomUser=_this.paginationUserSearch(_this.checkedUserTable,_this.oneItemBottomUser,_this.pageBottomUser).TotalPage
        //                 _this.getAllUserData()//获取所有角色数据
        //             })
        //         }else{
        //             _this.showCheckedUserTable=[]
        //             _this.checkedUserTable=[]
        //             _this.getAllUserData()//获取所有角色数据
        //         }
                
        //    })
        // },
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
                        _this.showCheckedUserTable=[]
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
                let json=[val]
                let _this=this;
                _this.checkedUserTable=_this.uniqueArray(_this.checkedUserTable,json);
                _this.showNoCheckedUser=_this.pagination(json,[],_this.oneItemRightUser,_this.pageRightUser,'right')
                _this.showCheckedUser=_this.pagination([],json,_this.oneItemLeftUser,_this.pageLeftUser,'left')

                _this.showCheckedUserTable=_this.uniqueArray(_this.showCheckedUserTable,json);
                _this.showCheckedUserTable=_this.paginationUserSearch(_this.checkedUserTable,_this.oneItemBottomUser,_this.pageBottomUser).nowData
                _this.totalItemBottomUser=_this.paginationUserSearch(_this.checkedUserTable,_this.oneItemBottomUser,_this.pageBottomUser).TotalItem
                _this.totalPageBottomUser=_this.paginationUserSearch(_this.checkedUserTable,_this.oneItemBottomUser,_this.pageBottomUser).TotalPage
        },
        dialogUserConfirmUser(){//确认
            let _this=this;
            _this.dialogUser=false;
            _this.showCheckedUserTable=_this.checkedUserTable
             _this.showCheckedUserTable=_this.paginationUserSearch(_this.checkedUserTable,_this.oneItemBottomUser,_this.pageBottomUser).nowData
            _this.totalItemBottomUser=_this.paginationUserSearch(_this.checkedUserTable,_this.oneItemBottomUser,_this.pageBottomUser).TotalItem
            _this.totalPageBottomUser=_this.paginationUserSearch(_this.checkedUserTable,_this.oneItemBottomUser,_this.pageBottomUser).TotalPage
        

        },
        cancelPushUser(){//取消
            let _this=this;
            _this.dialogUser=false;
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
    //      getCheckedNodes() {
    //          this.storeCheckOu=this.$refs.tree.getCheckedNodes()
    //     console.log(this.$refs.tree.getCheckedNodes());
    //   },
    //   getCheckedKeys() {
    //        this.storeCheckOu=this.$refs.tree.getCheckedKeys()
    //     console.log(this.$refs.tree.getCheckedKeys());
    //   },
    //   setCheckedNodes() {
    //       console.log(this.ouCheckAll)
    //     this.$refs.tree.setCheckedNodes(this.ouCheckAll);
    //   },
    //   setCheckedKey() {
    //       let _this=this;
    //       console.log(this.storeCheckOu)
    //         _this.$refs.tree.setCheckedKeys(this.storeCheckOu);
    //   },
    //   resetChecked() {
    //     this.$refs.tree.setCheckedKeys([]);
    //   },
        renderContent_Fn(h, { node, data, store }){
             if(typeof(data.childre)!='undefined' && data.childre!=null && data.childre.length>0){
                    return (
                        <span class="el-tree-node__label">
                        <i aria-hidden="true" class="preNode fa fa-folder-open" style="color:#f1c40f;margin-right:5px"></i>
                            {data.displayName}
                        </span>
                    );
                }else{
                    return (
                        <span class="el-tree-node__label">
                        <i class="preNode fa fa-file" aria-hidden="true" style="color:#f1c40f;margin-right:5px"></i>
                            {data.displayName}
                        </span>
                    );
                }
        },
        renderContent_ou(h, { node, data, store }){
             if(typeof(data.childItems)!='undefined' && data.childItems!=null && data.childItems.length>0){
                    return (
                        <span class="el-tree-node__label" data-id={data.id}>
                        <i aria-hidden="true" class="preNode fa fa-folder-open" style="color:#f1c40f;margin-right:5px"></i>
                            {data.ouName}
                        </span>
                    );
                }else{
                    return (
                        <span class="el-tree-node__label" data-id={data.id}>
                        <i class="preNode fa fa-file" aria-hidden="true" style="color:#f1c40f;margin-right:5px"></i>
                            {data.ouName}
                        </span>
                    );
                }
        },
        renderContent_ouTreeDataRight(h, { node, data, store }){
             if(typeof(data.childItems)!='undefined' && data.childItems!=null && data.childItems.length>0){
                    return (
                        <span class="el-tree-node__label" data-id={data.ouId}>
                        <i aria-hidden="true" class="preNode fa fa-folder-open" style="color:#f1c40f;margin-right:5px"></i>
                            {data.ouName}
                        </span>
                    );
                }else{
                    return (
                        <span class="el-tree-node__label" data-id={data.ouId}>
                        <i class="preNode fa fa-file" aria-hidden="true" style="color:#f1c40f;margin-right:5px"></i>
                            {data.ouName}
                        </span>
                    );
                }
        },
        
    }
       

    })
  </script>

  <style>
.roleDetail{
    font-family: 'microsoft yahei';
}
  .chooseFn{
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
  }
  .chooseFn .fa-cog{
    cursor: pointer;
    color: #c9d1d1;
    float: right;
    line-height: 30px;
    font-size: 20px;
  }
  .roleDetail .add{
    position: absolute;
    top: 6px;
    left: 18%;
    display: block;
    width: 35px;
    height: 35px;
    border-radius: 3px;
    background-color: #c7c7c7;
    color: #fff;
    text-align: center;
    line-height: 35px;
    text-decoration: none;
    font-size: 23px;
    font-weight: bold;
}
 /*收起*/
 .checkBoxOuUser{
     height: 50px;
     background-color: #f2f2f2;
     line-height: 50px;
 }
 .roleDetail .square_el{
       margin-right:5px;
       margin-left: 10px;
   }
   
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
.show{
    display: block;
}
.fnTreeWrapper{
    height: 500px;
}
.checkbox_group{
  background-color: #f2f2f2;
  padding: 0 10px;
}
.checkbox_group .el-checkbox{
  margin-bottom: 5px;
  margin-top: 5px;
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
.roleDetail .search_input_group{
    margin-top:6px;
}
.roleDetail .dialogOu .search_input_group{
    width:40%;
    position: absolute;
    top: 2px;
    right: 6%;
}
.roleDetail .dialogOu .search_input_group .search_input_wapper{
    width:100%;
}

.roleDetail .fnTable .el-table__row td:last-child .cell{
    text-align: left;
}
.roleDetail .Fn_Tree_search .el-input__icon{
    line-height:30px
}
.fnCheckBox{
    float: left;
    margin-right:20px;
}
.fnCheckBox.el-checkbox+.el-checkbox{
     margin-left:0;
     
}
  </style>
