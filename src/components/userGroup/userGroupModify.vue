<template>
    <div class="userGroupModify">
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
            <el-col :span="24" class="pt15">
               <div class="bgMarginAuto">
                   <div class="bgcolor bgLongWidth"><label>
                        <small>*</small>用户组编码</label>
                        <el-input 
                         
                        
                        class="userGroupCode" 
                        :class="{redBorder : validation.hasError('addData.userGroupCode')}" 
                        v-model="addData.userGroupCode"></el-input>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.userGroupCode') }}</div>
                </div> 
            </el-col>
            <el-col :span="24" >
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                        <label><small>*</small>用户组名称</label>
                        <el-input 
                         
                        
                        class="userGroupName" 
                        :class="{redBorder : validation.hasError('addData.userGroupName')}" 
                        v-model="addData.userGroupName"></el-input>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.userGroupName') }}</div>
                </div>    
            </el-col>
          
            <el-col :span="24">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                        <label><small>*</small>所属组织</label>
                        <el-select clearable filterable  
                         
                        
                        placeholder=""
                        class="ouId" 
                        :class="{redBorder : validation.hasError('addData.ouId')}" 
                        v-model="addData.ouId"
                        >
                            <el-input
                            placeholder="搜索..."
                            class="selectSearch"
                            v-model="search_ou">
                            </el-input>
                            <el-tree
                             :render-content="renderContent_"
                            :data="selectTree_ou"
                            :props="selectProps_ou"
                            :highlight-current="true"
                            node-key="id"
                            default-expand-all
                            ref="tree"
                            :filter-node-method="filterNode_ou"
                            :expand-on-click-node="false"
                            @node-click="nodeClick_ou"
                            >
                            </el-tree>
                            <!-- <el-option v-show="false" :key="item_ou.id" :label="item_ou.ouFullName" :value="item_ou.id">
                            </el-option> -->
                            <el-option v-show="false"  v-for="item in selectData.ou" :key="item.id" :label="item.ouName" :value="item.id" :date="item.id">
                            </el-option>
                            <el-option v-show="false" :label="item_area_no.ouName" :value="item_area_no.id"></el-option>
                        </el-select>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.ouId') }}</div>
                </div>    
            </el-col>
           
             <el-col :span="24">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                        <label><small>*</small>状态</label>
                        <el-select clearable filterable  
                        class="status" 
                         
                        
                        :class="{redBorder : validation.hasError('addData.status')}" 
                        placeholder=""
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
                        :autosize="{ minRows: 4, maxRows: 4}"
                        >
                        </el-input>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.remark') }}</div>
                </div>       
            </el-col>
      </el-row>
       <el-row>
            <el-col :span="22" class="auditInformation getPadding">
                <h4 class="h4">审计信息</h4>
                <div>
                    <div class="bgcolor"><label>创建人</label><el-input v-model="auditInformation.createdBy" disabled="disabled"></el-input></div>
                    <div class="bgcolor">
                        <label>创建时间</label>
                        <el-date-picker 
                        v-model="auditInformation.createdTime" 
                        type="date" 
                        format="yyyy-MM-dd HH:mm:ss"
                        value-format="yyyy-MM-dd HH:mm:ss" 
                        disabled>
                        </el-date-picker>
                    </div>
                    <div class="bgcolor"><label>修改人</label><el-input v-model="auditInformation.modifiedBy" disabled="disabled"></el-input></div>
                    <div class="bgcolor">
                        <label>修改时间</label>
                        <el-date-picker 
                        v-model="auditInformation.modifiedTime" 
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
                    <p class="dialog_font dialog_body_message">{{title}}</p>
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
                    <p class="dialog_font dialog_body_message">{{response.message}}!</p>
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
    data(){
      return{
        saveSuccess:false,
        firstModify:false,
        ifModify:false,
        title:"",
         // 错误信息提示开始
        detail_message_ifShow:false,
        errorMessage:false,
        // 错误信息提示结束
        test:'',
        search_ou:'',
        item_ou:{
            id:"",
            ouName:""
        },
        item_area_no:{
            id:0,
            ouName:' '
        },
        selectTree_ou:[
        ],
        selectProps_ou: {
            children: 'children',
            label: 'ouName',
            id:'id'
        },
        addData:{
            "groupId": 1,
            "ouId": "",
            "userGroupCode": "",
            "userGroupName": "",
            "remark": "",
            "status": 1
        },
        auditInformation:{

        },
        selectData:{//select数据
            Status001:[],//启用状态
            ou:[],//组织
        },
        response:{
            details:'',
            message:'',
        },
        dialogUserConfirm:false,//信息更改提示控制
        choseDoing:'',//存储点击按钮判断信息
      }
    },
     validators: {
      'addData.userGroupCode': function (value) {//地区代码
         return this.Validator.value(value).required().maxLength(50);
      },
      'addData.userGroupName': function (value) {//地区名称
         return this.Validator.value(value).required().maxLength(50);
      },
      'addData.ouId': function (value) {//
          return this.Validator.value(value).required().integer();
      },
      'addData.status': function (value) {//启用状态
         return this.Validator.value(value).required().integer();
      },
      'addData.remark': function (value) {//备注
          return this.Validator.value(value).maxLength(200);
      },
    },
    created () {
        let _this=this;
        _this.getSelectData();
        _this.loadTree();  
        _this.getData();
    },
     watch: {
        search_area(val) {
            this.$refs.tree.filter(val);
        },
        search_ou(val) {
            this.$refs.tree.filter(val);
        },
        addData:{
            handler:function(val,oldVal){
                let _this=this;
                if(!_this.saveSuccess){
                    if(!_this.firstModify){
                        _this.firstModify=!_this.firstModify;
                    }else{
                        _this.ifModify=true
                    }
                }else{
                     _this.ifModify=true;
                }
            },
            deep:true,
          }
        },
    methods: {
        filterNode_ou(value, data) {
            if (!value) return true;
            return data.ouName.indexOf(value) !== -1;
        },
        getSelectData(){
            let _this=this;
            // _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'UserType'}).then(function(res){ 
            // // 身份类型
            // _this.selectData.UserType=res.result;
            // })
            _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status001'}).then(function(res){ 
            // 启用状态
            _this.selectData.Status001=res.result;
            })
            // _this.$axios.gets('/api/services/app/AreaManagement/GetAll').then(function(res){ 
            // // 业务地区
            //     _this.selectData.area=res.result.items;
            //     if(_this.$route.params.id!="default"){
            //         _this.addData.areaParentId=parseInt(_this.$route.params.id.split(',')[0]);
            //     }
            // })
            _this.$axios.gets('/api/services/app/OuManagement/GetOuParentList').then(function(res){ 
            // 所属组织
                _this.selectData.ou=res.result;
            })
            // _this.$axios.gets('/api/services/app/UserGroup/GetAll',{SkipCount:_this.SkipCount,MaxResultCount:_this.MaxResultCount}).then(function(res){ 
            // // 所属用户组
            //     _this.selectData.userGroupId=res.result.items;
            //     _this.totalCount=res.result.totalCount;
            // })
            // ///api/services/app/Language/GetLanguages
            // _this.$axios.gets('/api/services/app/Language/GetLanguages').then(function(res){ 
            // // 语种
            //     _this.selectData.languageId=res.result.items;
            // })
        },
        getData(){
            let _this=this;
            _this.$axios.gets('/api/services/app/UserGroup/Get',{id:_this.$route.params.id}).then(function(res){ 
                _this.addData= {
                    "groupId": 1,
                    "id":res.result.id,
                    "ouId": res.result.ouId,
                    "userGroupCode": res.result.userGroupCode,
                    "userGroupName": res.result.userGroupName,
                    "remark": res.result.remark,
                    "status": res.result.status
                }
                _this.auditInformation={
                    createdBy:res.result.createdBy,
                    createdTime:res.result.createdTime,
                    modifiedBy:res.result.modifiedBy,
                    modifiedTime:res.result.modifiedTime,
                }
                 _this.saveSuccess=false;
                _this.firstModify=false;
                _this.ifModify=false;
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
        loadTree(){
            let _this=this;
            //组织
             _this.$axios.gets('/api/services/app/OuManagement/GetAllTree')
            .then(function(res){
                _this.selectTree_ou=res.result;
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
        isBack(){
            let _this=this;
            if(_this.ifModify){
                _this.dialogUserConfirm=true;
                 _this.title='此操作将忽略您的更改，是否继续？'
                _this.choseDoing='back'
            }else{
                _this.back()
            }
        },
        isCancel(){
            let _this=this;
            if(_this.ifModify){
                _this.dialogUserConfirm=true;
                _this.title='此操作将忽略您的更改，是否继续？'
                _this.choseDoing='Cancel'
            }
        },
        isDeleteThis(){
            let _this=this;
            _this.dialogUserConfirm=true;
            _this.title='确认删除？'
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
                this.firstModify=false;
                this.ifModify=false;
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
        back(row){
            this.$store.state.url='/userGroup/userGroupList/default'
            this.$router.push({path:this.$store.state.url})//点击切换路由
        },
        save(){
            let _this=this;
            _this.$validate()
            .then(function (success) {
                if (success) {
                    _this.$axios.puts('/api/services/app/UserGroup/Update',_this.addData)
                    .then(function(res){
                        _this.auditInformation={
                            createdBy:res.result.createdBy,
                            createdTime:res.result.createdTime,
                            modifiedBy:res.result.modifiedBy,
                            modifiedTime:res.result.modifiedTime,
                        }
                        _this.open('保存成功','el-icon-circle-check','successERP');
                         _this.saveSuccess=true;
                        _this.firstModify=false;
                        _this.ifModify=false;
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
                    _this.$axios.puts('/api/services/app/UserGroup/Update',_this.addData)
                    .then(function(res){
                        _this.open('保存成功','el-icon-circle-check','successERP');
                        _this.add();
                    },function(res){   
                        if(res && res!=''){ _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)}
                        _this.errorMessage=true; 
                    })
                }
            });
        },
        add(){
            let _this=this;
           _this.$store.state.url='/userGroup/userGroupDetail/default'
            _this.$router.push({path:this.$store.state.url})//点击切换路由
        },
        deleteThis(){
             let _this=this;
            _this.$axios.deletes('/api/services/app/UserGroup/Delete',{id:_this.$route.params.id})
            .then(function(res){
                _this.dialogUserConfirm=false;
                _this.open('删除成功','el-icon-circle-check','successERP');
                _this.add();
            },function(res){
                if(res && res!=''){ _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)}
                _this.dialogUserConfirm=false;
                _this.errorMessage=true;
            })
        },
        nodeClick_ou(data,node,self){
            let _this=this;
            _this.item_ou.id=data.id;
            _this.item_ou.ouFullName=data.ouFullName;
            // _this.$nextTick(function(){
            //     $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').click();
            // })
            $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
                if($(this).attr('date')==data.id){
                    $(this).click()
                }
            })
        },
         renderContent_(h, { node, data, store }){
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
}

})
</script>



<style scoped>
.pt15{
    padding-top: 15px;
}
.userGroupModify  .errorTips{
    margin-bottom: 10px;
    margin-top: -10px;
}
 .userGroupModify .el-row{
    background-color: #fff;
  }
 .userGroupModify .el-row:first-child{
   padding: 7px 0;
   border-bottom: 1px solid #e4e4e4;
  }
  .userGroupModify .el-row:last-child{
    padding-bottom: 15px;
  }
  .userGroupModify .bgcolor .isGive{
    display: block;
    float: left;
    height: 100%;
    line-height: 35px;
  }
  .userGroupModify .el-row {
    padding: 15px 0;
    border-bottom: 1px solid #e4e4e4;
    background-color: #fff;
}
.userGroupModify .getPadding{
    padding: 0 10px;
}
h4.h4 {
    font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    padding-bottom: 15px;
}
</style>
<style>
  .userGroupModify .bgcolor .el-select .el-input input{
    height: 35px!important;
    }
  </style>
