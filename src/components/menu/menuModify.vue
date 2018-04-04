<template>
    <div class="menuModify">
        <el-row  class="fixed">
            <el-col :span="24">
              <button @click="isBack" class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
              <button @click="save" class="erp_bt bt_save" :disabled="!ifModify" :class="{erp_fb_bt : !ifModify}"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
              <button @click="isCancel" class="erp_bt bt_cancel" :disabled="!ifModify" :class="{erp_fb_bt : !ifModify}"><div class="btImg"><img src="../../../static/image/common/bt_cancel.png"></div><span class="btDetail">取消</span></button>
              <button plain @click="saveAdd" class="erp_bt bt_saveAdd" :disabled="!ifModify" :class="{erp_fb_bt : !ifModify}"><div class="btImg"><img src="../../../static/image/common/bt_saveAdd.png"></div><span class="btDetail">保存并新增</span></button>
              <button @click="add" class="erp_bt bt_add" :disabled="ifModify" :class="{erp_fb_bt : ifModify}"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
              <button @click="isDeleteThis" class="erp_bt bt_del" :disabled="ifModify" :class="{erp_fb_bt : ifModify}"><div class="btImg" ><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
            </el-col>
        </el-row>
        <el-row>
          <el-col :span="24"  class="pt15">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                        <label><small>*</small>菜单编码</label>
                        <el-input 
                        @change="isUpdate"
                        class="moduleCode" 
                        :class="{redBorder : validation.hasError('addData.moduleCode')}" 
                        v-model="addData.moduleCode"  
                        placeholder=""></el-input>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.moduleCode') }}</div>
                </div>    
            </el-col>

            <el-col :span="24"  class="pt15">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                        <label><small>*</small>菜单名称</label>
                        <el-input 
                        @change="isUpdate"
                        class="moduleName" 
                        :class="{redBorder : validation.hasError('addData.moduleName')}" 
                        v-model="addData.moduleName"  
                        placeholder=""></el-input>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.moduleName') }}</div>
                </div>    
            </el-col>

            <el-col :span="24"  class="pt15">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                        <label><small>*</small>子系统</label>
                        <el-select filterable  
                        class="systemId" 
                        @change="isUpdate"
                        :class="{redBorder : validation.hasError('addData.systemId')}" 
                        placeholder=""
                        v-model="addData.systemId">
                            <el-option v-for="item in contain" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.systemId') }}</div>
                </div>    
            </el-col>

            <el-col :span="24"  class="pt15">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                    <label><small>*</small>上级菜单</label>
                    <el-select
                        class="moduleParentId" 
                        placeholder=""
                        @change="isUpdate"
                        :class="{redBorder : validation.hasError('addData.moduleParentId')}" 
                        v-model="addData.moduleParentId"  >
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
                            @node-click="selectNodeClick"
                            >
                            </el-tree>
                            <!-- <el-option v-show="false" :key="item.id" :label="item.moduleName" :value="item.id">
                            </el-option> -->
                            <el-option  v-show="false" v-for="item in selectData.menu" :key="item.id" :label="item.moduleName" :value="item.id" :date="item.id">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.moduleParentId') }}</div>
                </div>    
            </el-col>

            <el-col :span="24"  class="pt15">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                        <label><small>*</small>状态</label>
                        <el-select filterable  
                        @change="isUpdate"
                        v-model="addData.status"
                        :class="{redBorder : validation.hasError('addData.status')}" 
                        placeholder="">
                            <el-option v-for="item in selectData.Status001" :key="item.itemValue" :label="item.itemName" :value="item.itemValue">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.status') }}</div>
                </div>    
            </el-col>

            <el-col :span="24"  class="pt15">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth" style="position: relative;">
                        <label>图标</label>
                        <!-- <el-input 
                        class="ico" 
                        :class="{redBorder : validation.hasError('addData.ico')}" 
                        v-model="addData.ico"  
                        placeholder=""></el-input> -->
                        <i :class="addData.ico" aria-hidden="true" style="position: absolute;right: 35px;z-index: 10;top: 6px;font-size: 25px;"></i>
                        <el-select filterable  
                        class="ico" 
                        @change="isUpdate"
                        :class="{redBorder : validation.hasError('addData.ico')}" 
                        placeholder=""
                        v-model="addData.ico">
                            <el-option v-for="item in $store.state.icon" :key="item.code" :label="item.code" :value="item.code">
                                {{item.code}}<i style="float:right;line-height:34px;" :class="item.code" aria-hidden="true"></i>
                            </el-option>
                        </el-select>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.ico') }}</div>
                </div>    
            </el-col>

            <el-col :span="24"  class="pt15">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                        <label>web地址</label>
                        <el-input 
                        class="url" 
                        @change="isUpdate"
                        :class="{redBorder : validation.hasError('addData.url')}" 
                        v-model="addData.url"  
                        placeholder=""></el-input>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.url') }}</div>
                </div>    
            </el-col>

            <el-col :span="24"  class="pt15">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                        <label>备注</label>
                        <el-input
                            type="textarea"
                            @change="isUpdate"
                            :class="{redBorder : validation.hasError('addData.remark')}" 
                            :autosize="{ minRows: 4, maxRows: 10}"
                            v-model="addData.remark"
                            placeholder="">
                        </el-input>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.remark') }}</div>
                </div>    
            </el-col>

            <el-col :span="24"  class="pt15">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                        <label>功能权限</label>
                        <div class="addZoo">
                            <a class="add" href="javascript:;" @click="showDialog">+</a>
                        </div>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.areaParentId') }}</div>
                </div>    
            </el-col>
            <el-col :span="24">
                 <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth" style="overflow: visible;">
                        <label class="h_35"></label>
                        <div class="rolesZoo">
                            <a class="addRole"  v-for="(x,index) in checked" :key="index" :permissionName="x.permissionName">{{x.displayName}}<i  @click="check_push_noCheck_FnThis(x)" class="el-icon-error"></i></a>
                        </div>
                    </div>
                 </div>
            </el-col>
        </el-row>
        <el-dialog :visible.sync="dialogTableVisible" title="分配功能" class="transfer_dialog">
                <el-col :span="24">
                    <el-col :span="6">
                        <el-col :span="24" class="transfer_fixed">
                            <vue-scroll :ops="$store.state.option">  
                                <el-tree
                                    :data="componyTree"
                                    :props="defaultProps"
                                    node-key="id"
                                    default-expand-all
                                    @node-click="nodeClick"
                                    :expand-on-click-node="false">
                                </el-tree>
                            </vue-scroll>
                        </el-col>
                    </el-col>
                    <el-col :span="18">
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
                                border 
                                style="width: 100%" 
                                stripe 
                                max-height="450"
                                    @selection-change="leftFn_change"
                                :data="checkTable"
                                ref="roleTableLeft">
                                    <el-table-column type="selection"></el-table-column>
                                    <el-table-column prop="displayName" label="功能"></el-table-column>
                                </el-table>   
                            </el-col>
                        </el-col>
                        <el-col :span="2" class="transfer_btns">
                            <el-col :span="24" class="transfer_btn_wrapper">
                                <el-button class="el_transfer" :disabled="is_Fn_nocheked" @click="noCheck_push_check_Fn" type="primary" icon="el-icon-arrow-left" round></el-button>
                                <el-button class="el_transfer" :disabled="is_Fn_cheked" @click="check_push_noCheck_Fn" type="primary" icon="el-icon-arrow-right" round></el-button>
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
                                border 
                                max-height="450"
                                :data="nocheckTable"
                                style="width: 100%" 
                                stripe 
                                @selection-change="rightFn_change"
                                ref="roleTabRight">
                                    <el-table-column type="selection"></el-table-column>
                                    <el-table-column prop="displayName" label="功能"></el-table-column>
                                </el-table>  
                                
                            </el-col>
                        </el-col>
                    </el-col>
                </el-col>
                <span slot="footer">
                    <button class="transfer_footer_btn transfer_confirm" @click="dialogTableVisible = false">确 认</button>
                    <button class="transfer_footer_btn" @click="CancelTree">取 消</button>
                </span>
            </el-dialog>
            <!--dialog结束  -->
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
            firstModify:false,
            ifModify:false,
            update:false,
            dialogUserConfirm:false,//信息更改提示控制
            choseDoing:'',//存储点击按钮判断信息
            // 错误信息提示开始
            detail_message_ifShow:false,
            errorMessage:false,
            // 错误信息提示结束
             search:'',
            // isSave:true,//是否可以保存，不能保存就是修改
            menuCheck:true,
            dialogTableVisible:false,//控制对话框
            addData:{
                // "moduleParentId": 0,
                // "moduleCode": "string",
                // "moduleName": "仓库管理",
                // "url": "string",
                // "ico": "string",
                // "systemId": 0,
                // "moduleIsBottom": true,
                // "moduleFullPathId": "string",
                // "moduleFullPathName": "string",
                // "seq": 0
            },
            contain: [{ 
                value:0,
                label: '测试'
            }],
            componyTree:[],
            defaultProps: {
                children: 'children',
                label: 'displayName',
                value:'permissionName'
            },
            item:{
                id:"",
                moduleName:""
            },
            selectTree:[
            ],
            selectProps: {
                children: 'childNodes',
                label: 'moduleName',
                id:'id',
            },
            treeData:[],
            Props: {
                children: 'childNodes',
                value: 'id',
                label:'moduleName'
            },
            selectData:{//select数据
                Status001:[],//启用状态
                menu:[],//菜单
            },
            response:{
                details:'',
                message:'',
                validationErrors:[],
            },
//--------------dialog----------------
            checked:[],//展示所有权限
            CancelChecked:[],//dialog取消按钮存储数据
            nochecked:[],//
            allNode:[],
            storeNodeClickData:[],//储存点击节点的所有数据{all:[],check:[],nochecked:[]}
            nowClickNode:'',//记录点击的树节点
            checkTable:[],//页面渲染的数据
            nocheckTable:[],//页面渲染的数据

            is_Fn_nocheked:true,//穿梭框按钮显示隐藏
            is_Fn_cheked:true,

            left_selectFn:[],//checkbox选中数据
            right_selectFn:[],
        }
    },
    validators: {
      'addData.moduleCode': function (value) {//菜单编码
         return this.Validator.value(value).required().maxLength(50)
      },
      'addData.moduleName': function (value) {//菜单名称
         return this.Validator.value(value).required().maxLength(50);
      },
      'addData.status': function (value) {//
         return this.Validator.value(value).required().integer();
      },
    //   'addData.ico': function (value) {//图标
    //      return this.Validator.value(value).maxLength(200);
    //   },
      'addData.systemId': function (value) {//子系统
         return this.Validator.value(value).required().integer();
      },
      'addData.moduleParentId': function (value) {//上级菜单
          return this.Validator.value(value).required().integer();
      },
    //   'addData.url': function (value) {//web地址
    //      return this.Validator.value(value).maxLength(1000);
    //   },
    //   'addData.remark': function (value) {//
    //      return this.Validator.value(value).maxLength(200);
    //   }
    },
    created:function(){
        let _this=this;
            _this.getSelectData();
            _this.loadTree(); 
            _this.loadParent()
            _this.getData()
           
    },
     watch: {
      search(val) {
        this.$refs.tree.filter(val);
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
    },
    methods:{
        getData(){
            let _this=this;
             _this.$axios.gets('/api/services/app/ModuleManagement/Get',{id:_this.$route.params.id})
            .then(function(res){
                if(res.result.permissionDtos!=null&&res.result.permissionDtos.length>0){
                    _this.checked=res.result.permissionDtos;
                    _this.CancelChecked=res.result.permissionDtos;
                }else{
                    _this.checked=[]
                    _this.CancelChecked=[]
                }
                _this.addData={
                    "id": res.result.id,
                    "moduleParentId": res.result.moduleParentId,
                    "moduleCode": res.result.moduleCode,
                    "moduleName": res.result.moduleName,
                    "url": res.result.url,
                    "ico": res.result.ico,
                    "systemId": res.result.systemId,
                    "moduleIsBottom": res.result.moduleIsBottom,
                    "moduleFullPathId": res.result.moduleFullPathId,
                    "moduleFullPathName": res.result.moduleFullPathName,
                    "seq": res.result.seq,
                    "remark":res.result.remark,
                    'status':res.result.status
                }
                _this.item.id=res.result.moduleParentId;
                _this.item.moduleName=res.result.moduleParentId_ModuleName;
                _this.loadPermission();
            },function(res){
            })
        },
        getSelectData(){
            let _this=this;
            _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status001'}).then(function(res){ 
            // 启用状态
            _this.selectData.Status001=res.result;
            })
            _this.$axios.gets('/api/services/app/ModuleManagement/GetAll',{SkipCount:0,MaxResultCount:100}).then(function(res){ 
            // 菜单
            _this.selectData.menu=res.result.items;
            })
        },
         filterNode(value, data) {
            if (!value) return true;
            return data.moduleName.indexOf(value) !== -1;
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
      loadTree(){
            let _this=this;
            _this.$axios.gets('/api/services/app/ModuleManagement/GetModulesTree',{id:0})
            .then(function(res){
                _this.selectTree=res;
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
         selectNodeClick(data,dialogTableVisible,self){
            let _this=this;
            _this.item.id=data.id;
            _this.item.moduleName=data.moduleName;
            // _this.$nextTick(function(){
            //     $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').click();
            // })
            $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
                if($(this).attr('date')==data.id){
                    $(this).click()
                }
            })
        },
        loadParent(){
            let _this=this;
            _this.$axios.gets('/api/services/app/ModuleManagement/GetModulesTree')
            .then(function(res){
                _this.treeData=res
            },function(res){
            })
        },
        uniqueArray(array1, array2){//求差集
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
        loadPermission(){
            let _this=this;
            _this.$axios.gets('/api/services/app/PermissionManagement/GetPermissionTree')
            .then(function(res){
                _this.componyTree=res.items
                _this.nochecked=[]
            if(res.items.length>0){//获取所有的权限子节点，存储起来
                for(let i=0;i<res.items.length;i++){
                    if(res.items[i].children.length>0&&res.items[i].children!=null){
                        for(let x=0;x<res.items[i].children.length;x++){
                           _this.allNode.push(res.items[i].children[x])
                        }
                    }
                }
             }
            if(_this.allNode.length>0){//获取未选中权限
                _this.nochecked=_this.uniqueArray(_this.allNode,_this.checked);
            }else{
                _this.nochecked=_this.allNode
            }
            },function(res){
            })
        },
        isBack(){
            let _this=this;
            if(_this.update){
                _this.dialogUserConfirm=true;
                _this.choseDoing='back'
            }else{
                _this.back()
            }
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
                this.validation.reset();
                this.getData();
                this.update=false;
                this.firstModify=false;
                this.ifModify=false;
        },
        CancelTree(){
            let _this=this;
            _this.dialogTableVisible=false;
            
            if(_this.allNode.length>0){//获取未选中权限
                _this.nochecked=_this.uniqueArray(_this.allNode,_this.CancelChecked);
                _this.checked=_this.CancelChecked;
            }else{
                _this.nochecked=_this.allNode
            }
            _this.checkTable=[];
            _this.nocheckTable=[];
            _this.storeNodeClickData=[]
        },
        isUpdate(){//判断是否修改过信息
            this.update=true;
        },
        back(){
            this.$store.state.url='/menu/menuList/default'
            this.$router.push({path:this.$store.state.url})//点击切换路由
        },
        goLanguage(){
            this.$store.state.url='/menu/addLangulage/default'
            this.$router.push({path:this.$store.state.url})//点击切换路由
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
                    let permissions=[];
                    $.each(_this.checked,function(index,value){
                        permissions.push(value.permissionName)
                    })
                    _this.addData.permissions=permissions;
                    // _this.addData.permissionDtos=_this.checked;//权限
                    _this.$axios.puts('/api/services/app/ModuleManagement/Update',_this.addData)
                    .then(function(res){
                        _this.open('保存成功','el-icon-circle-check','successERP');
                        _this.firstModify=false;
                        _this.ifModify=false;
                        _this.update=false;
                    },function(res){
                        if(res && res!=''){ _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)}
                        _this.errorMessage=true;
                        _this.open('保存失败','el-icon-error','faildERP');
                    })
                }
            })    
        },
        add(){
            let _this=this;
            _this.$store.state.url='/menu/menuDetail/default';
            _this.$router.push({path:this.$store.state.url})//点击切换路由OuManage
        },
        deleteThis(){
             let _this=this;
            _this.$axios.deletes('/api/services/app/ModuleManagement/Delete',{id:_this.$route.params.id})
            .then(function(res){
                _this.dialogUserConfirm=false;
                _this.open('删除成功','el-icon-circle-check','successERP');
                _this.add();
            },function(res){
                if(res && res!=''){ _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)}
                _this.dialogUserConfirm=false;
                _this.errorMessage=true;
                _this.open('删除失败','el-icon-error','faildERP');
            })
        },
        saveAdd(){
            let _this=this;
            _this.$validate()
            .then(function (success) {
                if (success) {
                    let permissions=[];
                    $.each(_this.checked,function(index,value){
                        permissions.push(value.permissionName)
                    })
                    _this.addData.permissions=permissions;
                    // _this.addData.permissionDtos=_this.checked;//权限
                    _this.$axios.puts('/api/services/app/ModuleManagement/Update',_this.addData)
                    .then(function(res){
                        _this.open('保存成功','el-icon-circle-check','successERP');
                        _this.add()
                    },function(res){
                        if(res && res!=''){ _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)}
                        _this.errorMessage=true;
                        _this.open('保存失败','el-icon-error','faildERP');
                    })
                }
            })    
        },
        clearData(){
            this.creatorUser=[];
            this.auditInfo={
                id:'',
                lastModifierUser:'',
                isDeleted:false,
                deleterUserId:'',
                deletionTime:'',
                lastModificationTime:'',
                lastModifierUserId:'',
                creationTime:'',
                creatorUserId:'',
                isCompany : false,
                isAdministration :false,
                isFinance: false,
                isCapital :false,
                isPurchase :false,
            };
            this.addData={
                groupId:1,//集团ID
                ouCode: '',//组织代码存在 
                ouName: '' ,//组织名称存在
                foreignName: '' ,//外文名称
                mnemonic: '',//助记码
                ouParentid: '' ,//上级组织ID存在
                accountPeriodId:'' ,//会计期间ID
                baseCurrencyId: '',//本位币种id存在
                companyOuId: '',//所属公司ID存在
                contactPerson:'',//联系人存在
                phone:'',//电话存在
                address:'' ,//地址存在
                areaId: '',//行政区域ID
                entityProperty : '',//实体属性
                status: '',//启用状态存在
                remark: '' ,//备注存在
                basOuTypes: [0],//组织职能
                isGroupCompany:false ,//
                ouCompanyParentid: '' ,//上级公司组织ID
                legalPerson:'',//法人代表
                companyStatus:'' ,//公司启用状态
                regtime:''//公司成立时间
            };
            _this.validation.reset();
        },
        showDialog(){
            let _this=this;
            _this.dialogTableVisible = true;
            _this.loadIcon();
        },
        rightFn_change(val){
            let _this=this;
            _this.right_selectFn=val;
            if(val.length==0){
                _this.is_Fn_nocheked=true
                
            }else{
                _this.is_Fn_nocheked=false
            }
        },
        leftFn_change(val){
            let _this=this;
            _this.left_selectFn=val;
            if(val.length==0){
                _this.is_Fn_cheked=true
            }else{
                _this.is_Fn_cheked=false
            }
        },
        noCheck_push_check_Fn(){//从右往左添加数据
            let _this=this;
            _this.storeNodeClickData[_this.nowClickNode].check=_this.right_selectFn.concat(_this.storeNodeClickData[_this.nowClickNode].check)
            _this.storeNodeClickData[_this.nowClickNode].nochecked=_this.uniqueArray(_this.storeNodeClickData[_this.nowClickNode].nochecked,_this.right_selectFn);
            _this.checkTable=_this.storeNodeClickData[_this.nowClickNode].check
            _this.nocheckTable=_this.storeNodeClickData[_this.nowClickNode].nochecked
            _this.checked=_this.right_selectFn.concat(_this.checked);
        },
        check_push_noCheck_Fn(){//从左往右添加数据
            let _this=this;
           _this.storeNodeClickData[_this.nowClickNode].check=_this.uniqueArray(_this.storeNodeClickData[_this.nowClickNode].check,_this.left_selectFn);
            _this.storeNodeClickData[_this.nowClickNode].nochecked=_this.left_selectFn.concat(_this.storeNodeClickData[_this.nowClickNode].nochecked)
            
            _this.checkTable=_this.storeNodeClickData[_this.nowClickNode].check
            _this.nocheckTable=_this.storeNodeClickData[_this.nowClickNode].nochecked
            _this.checked=_this.uniqueArray(_this.checked,_this.left_selectFn);
        },
        check_push_noCheck_FnThis(val){//删除一个关联角色
            let _this=this;
                let json=[val]
                _this.update=true;
                if(_this.storeNodeClickData[_this.nowClickNode]){
                    _this.storeNodeClickData[_this.nowClickNode].check=_this.uniqueArray(_this.storeNodeClickData[_this.nowClickNode].check,json);
                    _this.storeNodeClickData[_this.nowClickNode].nochecked=json.concat(_this.storeNodeClickData[_this.nowClickNode].nochecked)

                    _this.checkTable=_this.storeNodeClickData[_this.nowClickNode].check
                    _this.nocheckTable=_this.storeNodeClickData[_this.nowClickNode].nochecked
                }
                _this.checked=_this.uniqueArray(_this.checked,json);
        },
        nodeClick(data){
            let _this=this;
            let all=data.children;
            let checkClick=[];
            let nocheckedClick=[];
            _this.nowClickNode=data.displayName;
            if(!_this.storeNodeClickData[data.displayName]){
                if(_this.checked.length>0){
                    for(let i=0;_this.checked.length>i;i++){
                        for(let x=0;all.length>x;x++){
                            if(_this.checked[i].permissionName==all[x].permissionName){
                                checkClick.push(all[x])
                            }
                        }
                    }
                    nocheckedClick=_this.uniqueArray(all,checkClick)
                }else{
                    nocheckedClick=all
                }

                _this.storeNodeClickData[data.displayName]={all:all,check:checkClick,nochecked:nocheckedClick}
            }
            
    
            

            _this.checkTable=_this.storeNodeClickData[data.displayName].check;
            _this.nocheckTable=_this.storeNodeClickData[data.displayName].nochecked;
        },
    }

  })
</script>



<style scoped>
.menuModify  .errorTips{
    margin-bottom: 10px;
    margin-top: -10px;
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
.menu_item_del .menu_item{
    display: block;
}
.menu_item_add .menu_item{
    display: none;
}

.w_auto{
    width: auto;
}
.load_more{
    position: absolute;
    bottom: 40px;
    left: 0;
    text-align: center;
}
.load_more button{
    width: 300px;
    height: 47px;
    border: none;
    background-color: #f4f4f4;
    border-radius: 47px;
    cursor: pointer;
}
.mt_20{
    margin-top: 20px;
}
.menu_search{
    margin: auto;
}
.h_35{
    height: 35px    ;
}
.add_m_bt{
    border: none;
    color: #fff;
    border-radius: 3px;
    width: 120px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 12px;
    background-color: #C9C9C9;
    float: left;
    margin-right: 10px;
    cursor: pointer;
}
.add_m_bt:hover{
    background-color: #39CA77;
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
 .menuModify .el-row{
    background-color: #fff;
    padding-top: 15px;
  }
 .menuModify .goBack{
     border: none;
     background-color: transparent; 
     color: #dcdcdc;
     font-size: 25px;
     cursor: pointer;
     display: block;
     float: left;
     height: 31px;
     width: 32px;
 }
 .menuModify .pageName{
     display: block;
     float: left;
     height: 31px;
     line-height: 31px;
     font-family: 'microsoft yahei';
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
 }
 .menuModify .el-row:first-child{
   padding: 7px 0;
   border-bottom: 1px solid #e4e4e4;
  }
  .menuModify .bgcolor .isGive{
    display: block;
    float: left;
    height: 100%;
    line-height: 35px;
  }
/* 右侧选项 */
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
    border: none;
    text-align: center;
    display: block;
    width: 24px;
    height: 24px;
    position: absolute;
    left: -12.5px;
    top: 16px;
    background-color: #69f;
    color: #fff;
    font-size:24px;
    border-radius: 50%;
    line-height: 24px;
    cursor: pointer;
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
</style>
<style>
.menuModify .el-tree-node__content{
    background-color:#F9F9F9;
}

</style>
