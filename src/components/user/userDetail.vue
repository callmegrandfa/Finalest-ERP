<template>
    <div class="userDetail">
        <el-row  class="fixed">
            <el-col :span="24">
              <button @click="back" class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
              <!-- <button class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button> -->   
              <button @click="save" class="erp_bt bt_save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
              <button class="erp_bt bt_print"><div class="btImg"><img src="../../../static/image/common/bt_print.png"></div><span class="btDetail">打印</span></button>
            </el-col>
        </el-row>
        <el-row>
            <!-- <div class="tipsWrapper" name="userCode">
                <div class="errorTips" :class="{block : !validation.hasError('addData.userCode')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.userCode') }}</p>
                </div>
            </div>
             <div class="tipsWrapper" name="displayName">
                <div class="errorTips" :class="{block : !validation.hasError('addData.displayName')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.displayName') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="phoneNumber">
                <div class="errorTips" :class="{block : !validation.hasError('addData.phoneNumber')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.phoneNumber') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="email">
                <div class="errorTips" :class="{block : !validation.hasError('addData.email')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.email') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="userGroupId">
                <div class="errorTips" :class="{block : !validation.hasError('addData.userGroupId')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.userGroupId') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="ouId">
                <div class="errorTips" :class="{block : !validation.hasError('addData.ouId')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.ouId') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="userType">
                <div class="errorTips" :class="{block : !validation.hasError('addData.userType')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.userType') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="languageId">
                <div class="errorTips" :class="{block : !validation.hasError('addData.languageId')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.languageId') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="status">
                <div class="errorTips" :class="{block : !validation.hasError('addData.status')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.status') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="remark">
                <div class="errorTips" :class="{block : !validation.hasError('addData.remark')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.remark') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="dateRange">
                <div class="errorTips" :class="{block : !validation.hasError('dateRange')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('dateRange') }}</p>
                </div>
            </div> -->
            <el-col :span="24">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth"><label>
                        <small>*</small>用户编码</label>
                        <el-input 
                        class="userCode" 
                        :class="{redBorder : validation.hasError('addData.userCode')}" 
                        v-model="addData.userCode" 
                        placeholder=""></el-input>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.userCode') }}</div>
                </div>
            </el-col>

            <el-col :span="24">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                    <label><small>*</small>用户名称</label>
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
                    <label><small>*</small>手机号码</label>
                    <el-input 
                    class="phoneNumber" 
                    :class="{redBorder : validation.hasError('addData.phoneNumber')}" 
                    v-model="addData.phoneNumber"  
                    placeholder=""></el-input>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.phoneNumber') }}</div>
                </div>
            </el-col>

            <el-col :span="24">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                    <label>邮箱</label>
                    <el-input 
                    class="email" 
                    :class="{redBorder : validation.hasError('addData.email')}"
                    v-model="addData.email"  
                    placeholder=""></el-input>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.email') }}</div>
                </div>
            </el-col>

            <el-col :span="24">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                    <label><small>*</small>所属用户组</label>
                    <el-select filterable  
                    class="userGroupId" 
                    placeholder=""
                    :class="{redBorder : validation.hasError('addData.userGroupId')}"
                    v-model="addData.userGroupId">
                        <el-option v-for="item in selectData.userGroupId" :key="item.id" :label="item.userGroupName" :value="item.id">
                        </el-option>
                    </el-select>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.userGroupId') }}</div>
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
                        v-model="search">
                        </el-input>
                        <el-tree
                        oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                        :data="selectTree"
                        :props="selectProps"
                        node-key="id"
                        default-expand-all
                        ref="tree"
                        :filter-node-method="filterNode"
                        :expand-on-click-node="false"
                        @node-click="nodeClick"
                        >
                        </el-tree>
                        <!-- <el-option v-show="false" :key="item.id" :label="item.ouFullname" :value="item.id">
                        </el-option> -->
                        <el-option v-show="false" v-for="item in selectData.OUType" :key="item.id" :label="item.ouFullname" :value="item.id" :date="item.id">
                            </el-option>
                    </el-select>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.ouId') }}</div>
                </div>
            </el-col>

            <el-col :span="24">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                    <label><small>*</small>身份类型</label>
                    <el-select filterable  
                    class="userType" 
                    placeholder=""
                    :class="{redBorder : validation.hasError('addData.userType')}"
                    v-model="addData.userType">
                        <el-option v-for="item in selectData.UserType" :key="item.itemValue" :label="item.itemName" :value="item.itemValue">
                        </el-option>
                    </el-select>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.userType') }}</div>
                </div>
            </el-col>

            <el-col :span="24">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                    <label><small>*</small>语种</label>
                    <el-select filterable  
                    class="languageId" 
                    placeholder=""
                    :class="{redBorder : validation.hasError('addData.languageId')}"
                    v-model="addData.languageId">
                        <el-option v-for="item in selectData.languageId" :key="item.id" :label="item.displayName" :value="item.id">
                        </el-option>
                    </el-select>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.languageId') }}</div>
                </div>
            </el-col>

            <el-col :span="24">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                        <label><small>*</small>有效时间</label>
                        <div class="rangeDate">
                            <el-date-picker
                            v-model="dateRange"
                            class="dateRange"
                            :class="{redBorder : validation.hasError('dateRange')}"
                            type="daterange"
                            format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd" 
                            range-separator="to"
                            align="center"
                            unlink-panels
                            start-placeholder=""
                            end-placeholder="">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('dateRange') }}</div>
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
                    <div class="bgcolor">
                        <label></label>
                        <el-checkbox v-model="addData.isReg" disabled></el-checkbox>
                        <span class="isGive">是否注册用户</span>
                    </div>
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

          <el-col :span="24">
            <div class="bgMarginAuto">
                <div class="bgcolor bgLongWidth">
                    <label>关联角色</label>
                    <div class="addZoo">
                        <a class="add" href="javascript:;" @click="editDialog()">+</a>
                    </div>
                </div>
            </div>
          </el-col>

          <el-col :span="24">
            <div class="bgMarginAuto">
                <div class="bgcolor bgLongWidth" style="overflow: visible;">
                    <label>&nbsp;</label>
                    <div class="addZoo">
                        <a class="addRole" :key="x.id"  v-for="x in checkedTable">{{x.displayName}}<i @click="check_push_noCheckThis(x)" class="el-icon-error"></i></a>
                    </div>
                </div>
            </div>
        </el-col>
      </el-row>
      <!-- 关联角色 -->
      <!-- <el-dialog :visible.sync="dialogTableVisible" title="关联角色">
            <el-col :span="24">
                <el-col :span="11">
                        <el-col :span="24">已选</el-col>    
                        <el-col :span="24">
                            <el-table 
                            :data="checkedTable" 
                            border 
                            style="width: 100%" 
                            stripe 
                            @selection-change="checkedSelect" 
                            ref="multipleTable">
                                <el-table-column type="selection" fixed="left"></el-table-column>
                                <el-table-column prop="displayName" label="功能"></el-table-column>
                            </el-table>    
                        </el-col>
                </el-col>
                <el-col :span="2">
                    <div class="el-transfer__buttons">
                        <el-button :disabled="is_nocheked" @click="noCheck_push_check" type="primary" icon="el-icon-arrow-left"></el-button>
                        <el-button :disabled="is_cheked" @click="check_push_noCheck" type="primary" icon="el-icon-arrow-right"></el-button>
                    </div>
                </el-col>
                <el-col :span="11">
                    <el-col :span="24">可选</el-col>    
                    <el-col :span="24">
                        <el-table 
                        :data="nocheckedTable" 
                        border 
                        style="width: 100%" 
                        stripe 
                        @selection-change="nocheckedSelect" 
                        ref="multipleTable">
                            <el-table-column type="selection" fixed="left"></el-table-column>
                            <el-table-column prop="displayName" label="功能"></el-table-column>
                        </el-table>    
                    </el-col>
                </el-col>
            <el-col :span="24">
                <el-button>确认</el-button>
                <el-button>取消</el-button>
            </el-col>
        </el-col>
    </el-dialog> -->
      <!-- <el-dialog :visible.sync="dialogTableVisible">
        <template slot="title">
            <span style="float:left;">选取角色</span>
            <div class="double_bt">
                <template v-if="menuCheck">
                    <div class="menu_btn_choose" :class="{menu_btn_active : !menuCheck}" @click="showNodeadd">已选角色</div>
                    <div class="menu_btn_choose" :class="{menu_btn_active : menuCheck}">未选角色</div>
                </template>
                <template v-else>
                    <div class="menu_btn_choose" :class="{menu_btn_active : !menuCheck}">已选角色</div>
                    <div class="menu_btn_choose" :class="{menu_btn_active : menuCheck}" @click="showNodedel">未选角色</div>
                </template>
                
            </div>
        </template>
        <el-col :span="24">
            <div class="menu_item_wapper menu_item_add">
                <span :key="x.id" class="menu_item" v-for="x in checked"><a class="menu_add" @click="addRole(x)"><i class="el-icon-minus"></i></a>{{x.displayName}}</span>
            </div>
            <div class="menu_item_wapper menu_item_del">
                <span :key="x.id" class="menu_item" v-for="x in nochecked"><a class="menu_add" @click="delRole(x)"><i class="el-icon-plus"></i></a>{{x.displayName}}</span>
            </div>
        </el-col>
    </el-dialog> -->


    <!-- 关联角色 -->
        <el-dialog :visible.sync="dialogTableVisible" title="关联角色" class="transfer_dialog">
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
                            :data="showChecked" 
                            border 
                            style="width: 100%" 
                            stripe 
                            @selection-change="checkedSelect" 
                            ref="multipleTable">
                                <el-table-column type="selection" fixed="left"></el-table-column>
                                <el-table-column prop="roleCode" label="角色编码"></el-table-column>
                                <el-table-column prop="displayName" label="角色名称"></el-table-column>
                                <el-table-column prop="ouName" label="所属组织"></el-table-column>
                            </el-table>   
                        </el-col>
                        <el-col :span="24" class="transfer_footer">
                            <el-col :span="18">
                                <span>总共有{{totalItemLeft}}条数据</span>
                            </el-col>
                            <el-col :span="6">
                                <el-button class="el_transfer" :disabled="leftDownBtn" @click="pageDownLeft" type="primary" icon="el-icon-arrow-left" round></el-button>
                                <el-button class="el_transfer" :disabled="leftAddBtn" @click="pageAddLeft" type="primary" icon="el-icon-arrow-right" round></el-button>
                            </el-col>
                        </el-col>
                </el-col>
                <el-col :span="2" class="transfer_btns">
                    <el-col :span="24" class="transfer_btn_wrapper">
                        <el-button class="el_transfer" :disabled="is_nocheked" @click="noCheck_push_check" type="primary" icon="el-icon-arrow-left" round></el-button>
                        <el-button class="el_transfer" :disabled="is_cheked" @click="check_push_noCheck" type="primary" icon="el-icon-arrow-right" round></el-button>
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
                        :data="showNoChecked" 
                        border 
                        style="width: 100%" 
                        stripe 
                        @selection-change="nocheckedSelect" 
                        ref="multipleTable">
                            <el-table-column type="selection" fixed="left"></el-table-column>
                            <el-table-column prop="roleCode" label="角色编码"></el-table-column>
                            <el-table-column prop="displayName" label="角色名称"></el-table-column>
                            <el-table-column prop="ouName" label="所属组织"></el-table-column>
                        </el-table>  
                        
                    </el-col>
                    <el-col :span="24" class="transfer_footer">
                        <el-col :span="18">
                            <span>总共有{{totalItemRight}}条数据</span>
                        </el-col>
                        <el-col :span="6">
                            <el-button class="el_transfer" :disabled="rightDownBtn" @click="pageDownRight" type="primary" icon="el-icon-arrow-left" round></el-button>
                            <el-button class="el_transfer" :disabled="rightAddBtn" @click="pageAddRight" type="primary" icon="el-icon-arrow-right" round></el-button>
                        </el-col>
                    </el-col>
                </el-col>
        </el-col>
        <span slot="footer">
            <button class="transfer_footer_btn transfer_confirm" @click="dialogTableVisible = false">确 认</button>
            <button class="transfer_footer_btn" @click="cancelPush">取 消</button>
        </span>
    </el-dialog>
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
                    <p class="dialog_font dialog_body_message">数据提交有误!</p>
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
                <button class="dialog_footer_bt dialog_font" @click="errorMessage = false">确 认</button>
                <button class="dialog_footer_bt dialog_font" @click="errorMessage = false">取 消</button>
            </span>
        </el-dialog>
        <!-- dialog -->
  </div>
</template>

<script>
  export default({
    data(){
      return{
          timeout:null,
         // 错误信息提示开始
        detail_message_ifShow:false,
        errorMessage:false,
        // 错误信息提示结束
        search:'',
        selectTree:[
        ],
        item:{
            id:'',
            ouFullname:''
        },
        selectProps: {
            children: 'children',
            label: 'ouFullname',
            id:'id'
        },


        dialogTableVisible:false,//控制对话框
        menuCheck:true,//未选功能，已选功能
        check:false,//是否授权
        
        addData:{
          "userCode": "",
          "displayName": "",
          "phoneNumber": "",
          "email": "",
          "userGroupId": "",
          "ouId": "",
          "status": 1,
          "userType": "",
          "languageId": "",
          "isReg": false,
          "remark": "",
          "roleCodes": []
        },
        dateRange:[],//有效时间
        tableLoading:false,
        tableData:[],
        pageIndex:1,//分页的当前页码
        totalPage:0,//当前分页总数
        oneItem:10,//每页有多少条信息
        multipleSelection: [],//复选框选中数据
        page:1,//当前页
        totalItem:0,//总共有多少条消息
        checked:[],//已关联角色
        nochecked:[],//未关联角色
        selectData:{//select数据
            OUType:[],//所属组织
            Status001:[],//启用状态
            UserType:[],//身份类型
            userGroupId:[],//所属用户组
            languageId:[],//语种
        },
        SkipCount:0,
        MaxResultCount:100,
        totalCount:0,

        
        // ------------关联角色dialog-------------
        checkedTable:[],//已选所有数据
        showChecked:[],//右侧表格展示的数据
        // roleCodesCancel:[],//表格数据，用于取消操作
        nocheckedTable:[],//可选所有数据
        showNoChecked:[],//左侧表格展示的数据
        allRoles:[],//所有数据
        selection_checked: [],//复选框选中数据
        selection_nochecked: [],//复选框选中数据
        is_nocheked:true,//可选
        is_cheked:true,//已选
//---------left表格-------------
        pageIndexLeft:1,//分页的当前页码
        totalPageLeft:0,//当前分页总数
        oneItemLeft:10,//每页有多少条信息
        pageLeft:1,//当前页 
        totalItemLeft:0,//总共有多少条消息  
        leftDownBtn:true,//分页按钮是否显示
        leftAddBtn:true,//分页按钮是否显示
 //---------right表格-------------         
        totalItemRight:0,//总共有多少条消息 
        pageIndexRight:1,//分页的当前页码
        totalPageRight:0,//当前分页总数
        oneItemRight:10,//每页有多少条信息
        pageRight:1,//当前页 
        rightDownBtn:true,//分页按钮是否显示
        rightAddBtn:true,//分页按钮是否显示

        response:{
            details:'',
            message:'',
            validationErrors:[],
        },
      }
    },
     validators: {
      'addData.userCode': function (value) {//用户编码
         return this.Validator.value(value).required().maxLength(50)
      },
      'addData.displayName': function (value) {//用户名称
         return this.Validator.value(value).required().maxLength(50);
      },
      'addData.phoneNumber': function (value) {//手机号码
         return this.Validator.value(value).required().maxLength(20);
      },
      'addData.email': function (value) {//邮箱
         return this.Validator.value(value).maxLength(200);
      },
      'addData.userGroupId': function (value) {//所属用户组
         return this.Validator.value(value).required().integer();
      },
      'addData.ouId': function (value) {//所属组织
          return this.Validator.value(value).required().integer();
      },
      'addData.userType': function (value) {//身份类型
         return this.Validator.value(value).required().integer();
      },
      'addData.languageId': function (value) {//语种
          return this.Validator.value(value).required().integer();
      },
      'addData.status': function (value) {//状态
         return this.Validator.value(value).integer();
      },
      'addData.remark': function (value) {//备注
         return this.Validator.value(value).maxLength(200);
      },
      'dateRange':function(value){
          return this.Validator.value(value).required();
      }

    },
    created:function(){       
      let _this=this;
      _this.loadTree();
      _this.getSelectData();
      _this.getAllRoleData();
      _this.getDefaulet();
    },
    watch: {
      search(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods: {
        getDefaulet(){
            let _this=this;
            _this.$axios.gets('/api/services/app/OuManagement/GetWithCurrentUser').then(function(res){ 
            // 默认用户业务组织
            _this.addData.ouId=res.result.id;
            })
        },
        getSelectData(){
            let _this=this;
            _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'UserType'}).then(function(res){ 
            // 身份类型
            _this.selectData.UserType=res.result;
            })
            _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status001'}).then(function(res){ 
            // 启用状态
            _this.selectData.Status001=res.result;
            })
            _this.$axios.gets('/api/services/app/OuManagement/GetOuParentList').then(function(res){ 
            // 所属组织
            _this.selectData.OUType=res.result;
            })
            _this.$axios.gets('/api/services/app/UserGroup/GetAll').then(function(res){ 
            // 所属用户组
                _this.selectData.userGroupId=res.result.items;
            })
            ///api/services/app/Language/GetLanguages
            _this.$axios.gets('/api/services/app/Language/GetLanguages').then(function(res){ 
            // 语种
                _this.selectData.languageId=res.result.items;
            })
        },
    //     showErrprTips(e){
    //         $('.tipsWrapper').each(function(){
    //             if($(e.target).parent('.el-input').hasClass($(this).attr('name'))){
    //                 $(this).addClass('display_block')
    //             }else{
    //                 $(this).removeClass('display_block')
    //             }
    //         })
    //     },
    //     showErrprTipsSelect(e){
    //         $('.tipsWrapper').each(function(){
    //             if($(e.target).parent('.el-input').parent('.el-select').hasClass($(this).attr('name'))){
    //                 $(this).addClass('display_block')
    //             }else{
    //                 $(this).removeClass('display_block')
    //             }
    //         })
    //     },
    //     showErrprTipsRangedate(e){
    //         $('.tipsWrapper').each(function(){
    //             if($(e.$el).hasClass($(this).attr('name'))){
    //                 $(this).addClass('display_block')
    //             }else{
    //                 $(this).removeClass('display_block')
    //             }
    //         })
    //     },
    //   showErrprTipsTextArea(e){
    //         $('.tipsWrapper').each(function(){
    //           if($(e.target).parent('.el-textarea').hasClass($(this).attr('name'))){
    //               $(this).addClass('display_block')
    //           }else{
    //               $(this).removeClass('display_block')
    //           }
    //         })
    //   },
        filterNode(value, data) {
            if (!value) return true;
            return data.ouFullname.indexOf(value) !== -1;
        },
        loadTree(){
            let _this=this;
            _this.$axios.gets('/api/services/app/OuManagement/GetAllTree')
            .then(function(res){
                _this.selectTree=res.result;
                _this.loadIcon();
            },function(res){
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
        nodeClick(data,node,self){
            let _this=this;
            _this.item.id=data.id;
            _this.item.ouFullname=data.ouFullname;
            // _this.$nextTick(function(){
            //     $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').click();
            // })
            
            $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
                if($(this).attr('date')==data.id){
                    $(this).click()
                }
            })
        },
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
      back(row){
          this.$store.state.url='/user/userList/default'
          this.$router.push({path:this.$store.state.url})//点击切换路由OuManage
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
                    let roles=[];
                    $.each(_this.checkedTable,function(index,value){
                        roles.push(value.roleCode)
                    })
                    _this.addData.roleCodes=roles;
                    _this.addData.effectiveStart=_this.dateRange[0];
                    _this.addData.effectiveEnd=_this.dateRange[1];
                    // _this.addData.userType=parseInt(_this.addData.userType);
                    // _this.addData.status=parseInt(_this.addData.status);
                    _this.$axios.posts('/api/services/app/User/Create',_this.addData)
                    .then(function(res){
                        _this.addData.id=res.result.id;
                        _this.$store.state.url='/user/userModify/'+res.result.id
                        _this.$router.push({path:_this.$store.state.url})
                        _this.open('保存成功','el-icon-circle-check','successERP');
                    },function(res){
                        _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                        _this.errorMessage=true;
                        _this.open('保存失败','el-icon-error','faildERP');
                    })
                }
            });
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
        editDialog(){
            let _this=this;
            if(!_this.isEdit){
                _this.dialogTableVisible=true;
            }else{
                return false;
            }
        },
        LeftbtnIsShow(){
            let _this=this;
            if(_this.pageLeft>1){
                _this.leftDownBtn=false;
            }else{
                _this.leftDownBtn=true;
            }
            
            if(_this.totalPageLeft>_this.pageLeft){
                _this.leftAddBtn=false;
            }else{
                _this.leftAddBtn=true;
            }
            
        },
        RightbtnIsShow(){
            let _this=this;
            if(_this.pageRight>1){
                _this.rightDownBtn=false;
            }else{
                _this.rightDownBtn=true;
            }
            if(_this.totalPageRight>_this.pageRight){
                _this.rightAddBtn=false;
            }else{
                _this.rightAddBtn=true;
            }
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
                    _this.nocheckedTable=addData.concat(_this.nocheckedTable);
                }
                if(delData.length>0){
                    _this.nocheckedTable=_this.uniqueArray(_this.nocheckedTable,delData);
                }
                if(_this.nocheckedTable.length>0){
                    if(endIndex>_this.nocheckedTable.length){
                        endIndex=_this.nocheckedTable.length;
                    }
                    for(startIndex;startIndex<endIndex;startIndex++){//获取当前页展示的oneItem条数据
                        nowData.push(_this.nocheckedTable[startIndex])
                    }
                }
            }else if(LeftOrRight=='left'){
                if(addData.length>0){
                    _this.checkedTable=addData.concat(_this.checkedTable);
                }
                if(delData.length>0){
                    _this.checkedTable=_this.uniqueArray(_this.checkedTable,delData)
                }
                if(_this.checkedTable.length>0){
                    if(endIndex>_this.checkedTable.length){
                        endIndex=_this.checkedTable.length;
                    }
                    for(startIndex;startIndex<endIndex;startIndex++){//获取当前页展示的oneItem条数据
                        nowData.push(_this.checkedTable[startIndex])
                    }
                }
            }
            //左侧
            _this.totalItemLeft=_this.checkedTable.length;//左侧总共多少条数据
            _this.totalPageLeft=Math.ceil(_this.totalItemLeft/_this.oneItemLeft);//有多少页
            _this.LeftbtnIsShow()
            //右侧
            _this.totalItemRight=_this.nocheckedTable.length;//右侧总共多少条数据
            _this.totalPageRight=Math.ceil(_this.totalItemRight/_this.oneItemRight);//有多少页
            _this.RightbtnIsShow()
            
            
            return nowData
        },
        getAllRoleData(){
            let _this=this;
            _this.$axios.gets('/api/services/app/Role/GetAll',{SkipCount:0,MaxResultCount:1})//获取所有角色
            .then(function(re){ 
                let totalAll=re.result.totalCount;//获取总共当前关联角色条数
                if(totalAll>0){
                _this.$axios.gets('/api/services/app/Role/GetAll',{SkipCount:0,MaxResultCount:totalAll})//获取所有角色
                .then(function(res){ 
                    _this.nocheckedTable=[]
                    _this.allRoles=res.result.items;
                    _this.totalItemRight=res.result.totalCount
                        if(_this.checkedTable.length>0){//获取可选角色
                            _this.nocheckedTable=_this.uniqueArray(_this.allRoles,_this.checkedTable)
                           
                            _this.showNoChecked=_this.pagination([],[],_this.oneItemRight,_this.pageRight,'right')
                            _this.showChecked=_this.pagination([],[],_this.oneItemLeft,_this.pageLeft,'left')
                        }else{
                            _this.nocheckedTable=_this.allRoles;
                            _this.showChecked=[];
                            _this.showNoChecked=_this.pagination([],[],_this.oneItemRight,_this.pageRight,'right')
                            
                        }
                    })
                }
            })        
        },
        checkedSelect(val) {//dialogRole选中已选角色
            let _this=this;
            _this.selection_checked = val;
            if(val.length==0){
                _this.is_cheked=true
            }else{
                _this.is_cheked=false
            }
        },
        nocheckedSelect(val) {//dialogRole选中可选角色
            let _this=this;
            _this.selection_nochecked = val;
            if(val.length==0){
                _this.is_nocheked=true
            }else{
                _this.is_nocheked=false
            }
        },
        noCheck_push_check(){//从右往左添加数据
            let _this=this;
            _this.update=true;
            
            _this.showChecked=_this.pagination(_this.selection_nochecked,[],_this.oneItemLeft,_this.pageLeft,'left')
            _this.showNoChecked=_this.pagination([],_this.selection_nochecked,_this.oneItemRight,_this.pageRight,'right')
        },
        check_push_noCheck(){//从左往右添加数据
            let _this=this;
            _this.update=true;
            _this.showChecked=_this.pagination([],_this.selection_checked,_this.oneItemLeft,_this.pageLeft,'left')
            _this.showNoChecked=_this.pagination(_this.selection_checked,[],_this.oneItemRight,_this.pageRight,'right')
           
        },
        check_push_noCheckThis(val){//删除一个关联角色
            let _this=this;
            if(!_this.isEdit){
                let json=[val]
                _this.update=true;
                _this.checkedTable=_this.uniqueArray(_this.checkedTable,json);
                _this.showNoChecked=_this.pagination(json,[],_this.oneItemRight,_this.pageRight,'right')
                _this.showChecked=_this.pagination([],json,_this.oneItemLeft,_this.pageLeft,'left')
            }else{
                return false
            }
        },
        cancelPush(){//取消
            let _this=this;
            _this.dialogTableVisible=false;
            _this.GetRoles()
        },
        pageDownLeft(){//左侧表格向左翻页
            let _this=this;
            if(_this.pageLeft>1){
                _this.pageLeft--
                
                _this.showChecked=_this.pagination([],[],_this.oneItemLeft,_this.pageLeft,'left')
            }
        },
        pageAddLeft(){//左侧表格向右翻页
            let _this=this;
            if(_this.pageLeft<=_this.totalPageLeft){
                _this.pageLeft++
                _this.showChecked=_this.pagination([],[],_this.oneItemLeft,_this.pageLeft,'left')
            }
        },
        pageDownRight(){//右侧表格向左翻页
            let _this=this;
            if(_this.pageRight>1){
                _this.pageRight--
                _this.showNoChecked=_this.pagination([],[],_this.oneItemRight,_this.pageRight,'right')
            }    
        },
        pageAddRight(){//右侧表格向右翻页
            let _this=this;
            if(_this.pageRight<_this.totalPageRight){
                _this.pageRight++
                _this.showNoChecked=_this.pagination([],[],_this.oneItemRight,_this.pageRight,'right')
            }
        },
        // queryLeft(queryString, cb) {
        //     var restaurants=[]
        //     $.each(this.showChecked,function(index,value){
        //         let item={'value':value.displayName,'id':value.id};
        //         restaurants.push(item)
        //     })
        //     var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        //     clearTimeout(this.timeout);
        //     this.timeout = setTimeout(() => {
        //     cb(results);
        //     }, 100 * Math.random());
        // },
        // queryRight(queryString, cb) {
        //     var restaurants=[]
        //     $.each(this.showNoChecked,function(index,value){
        //         let item={'value':value.displayName,'id':value.id};
        //         restaurants.push(item)
        //     })
        //     console.log(restaurants)
        //     var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        //     clearTimeout(this.timeout);
        //     this.timeout = setTimeout(() => {
        //     cb(results);
        //     }, 100 * Math.random());
        // },
    }

})
</script>



<style scoped>
.userDetail  .errorTips{
    margin-bottom: 10px;
    margin-top: -10px;
}
 .userDetail .el-row{
    background-color: #fff;
    padding-top: 15px;
  }
 .userDetail .el-row:first-child{
   padding: 7px 0;
   border-bottom: 1px solid #e4e4e4;
  }
  .userDetail .bgcolor .isGive{
    display: block;
    float: left;
    height: 100%;
    line-height: 35px;
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
/* .menu_item_del .menu_item{
    display: block;
}
.menu_item_add .menu_item{
    display: none;
} */

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


</style>

<style>
.userDetail .el-dialog__headerbtn{
    top:3px;
    font-size:50px;
}
.userDetail .el-dialog__body{
  overflow: hidden;
}
</style>
