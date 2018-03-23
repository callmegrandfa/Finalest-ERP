<template>
    <div class="userGroupDetail">
        <el-row  class="fixed">
            <el-col :span="24">
              <button @click="back" class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
              <button @click="save" class="erp_bt bt_save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
              <button class="erp_bt bt_saveAdd"><div class="btImg"><img src="../../../static/image/common/bt_saveAdd.png"></div><span class="btDetail">保存并新增</span></button>
              <button class="erp_bt bt_auxiliary bt_width">
                <div class="btImg"><img src="../../../static/image/common/bt_auxiliary.png"></div>
                <span class="btDetail">辅助功能</span>
                <div class="btRightImg"><img src="../../../static/image/common/bt_down_right.png"></div>
              </button>
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
                        <el-select filterable  
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
                            oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                            :data="selectTree_ou"
                            :props="selectProps_ou"
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
                        </el-select>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.ouId') }}</div>
                </div>    
            </el-col>
           
             <el-col :span="24">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                        <label><small>*</small>状态</label>
                        <el-select filterable  
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
                    <div class="bgcolor"><label>创建时间</label><el-date-picker v-model="auditInformation.createdTime" type="date" disabled="disabled"></el-date-picker></div>
                    <div class="bgcolor"><label>修改人</label><el-input v-model="auditInformation.modifiedBy" disabled="disabled"></el-input></div>
                    <div class="bgcolor"><label>修改时间</label><el-date-picker v-model="auditInformation.modifiedTime" type="date" disabled="disabled"></el-date-picker></div>
                </div>                                  
            </el-col>
        </el-row>     
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
                            <vue-scroll :ops="option">
                                <span class="dialog_font">{{response.message}}</span>
                                <h4 class="dialog_font dialog_font_bold">其他信息:</h4>
                                <span class="dialog_font">{{response.details}}</span>
                       
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
         // 错误信息提示开始
        option: {
            vRail: {
                width: '5px',
                pos: 'right',
                background: "#9093994d",
            },
            vBar: {
                width: '5px',
                pos: 'right',
                background: '#9093994d',
            },
            hRail: {
                height: '0',
            },
        },
        detail_message_ifShow:false,
        errorMessage:false,
        // 错误信息提示结束
        test:'',
        search_ou:'',
        item_ou:{
            id:"",
            ouFullname:""
        },
        selectTree_ou:[
        ],
        selectProps_ou: {
            children: 'children',
            label: 'ouFullname',
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
    },
     watch: {
      search_area(val) {
        this.$refs.tree.filter(val);
      },
      search_ou(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods: {
        filterNode_ou(value, data) {
            if (!value) return true;
            return data.ouFullName.indexOf(value) !== -1;
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
                if(_this.$route.params.id!="default"){
                    _this.addData.ouId=parseInt(_this.$route.params.id.split(',')[1]);
                }
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
      back(row){
          this.$store.state.url='/userGroup/userGroupList/default'
          this.$router.push({path:this.$store.state.url})//点击切换路由
      },
      save(){
        let _this=this;
        _this.$validate()
        .then(function (success) {
            if (success) {
                 _this.$axios.posts('/api/services/app/UserGroup/Create',_this.addData)
                .then(function(res){
                    _this.open('保存成功','el-icon-circle-check','successERP');
                    _this.$store.state.url='/userGroup/userGroupModify/'+res.result.id
                    _this.$router.push({path:_this.$store.state.url})//点击切换路由
                },function(res){   
                    _this.response.message='';
                    _this.response.details='';
                    if(res.error.details!=null && res.error.details){
                        _this.response.details=res.error.details;
                    }
                    if(res.error.message!=null && res.error.message){
                        _this.response.message=res.error.message;
                    }
                    _this.errorMessage=true; 
                    _this.open('保存失败','el-icon-error','faildERP');
                })
            }
        });
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
}

})
</script>



<style scoped>
.pt15{
    padding-top: 15px;
}
.userGroupDetail  .errorTips{
    margin-bottom: 10px;
    margin-top: -10px;
}
 .userGroupDetail .el-row{
    background-color: #fff;
  }
 .userGroupDetail .el-row:first-child{
   padding: 7px 0;
   border-bottom: 1px solid #e4e4e4;
  }
  .userGroupDetail .el-row:last-child{
    padding-bottom: 15px;
  }
  .userGroupDetail .bgcolor .isGive{
    display: block;
    float: left;
    height: 100%;
    line-height: 35px;
  }
  .userGroupDetail .el-row {
    padding: 15px 0;
    border-bottom: 1px solid #e4e4e4;
    background-color: #fff;
}
.userGroupDetail .getPadding{
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

