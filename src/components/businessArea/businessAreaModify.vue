<template>
    <div class="businessAreaModify">
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
                        <label><small>*</small>所属组织</label>
                        <el-select clearable  
                         
                        @change="changeOuId"
                        class="ouId" 
                        :class="{redBorder : validation.hasError('addData.ouId')}" 
                        v-model="addData.ouId"
                        placeholder=""
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
                            <!-- <el-option v-show="false" :key="item_ou.id" :label="item_ou.ouName" :value="item_ou.id">
                            </el-option> -->
                            <el-option v-show="false" v-for="item in selectData.ou" :key="item.id" :label="item.ouName" :value="item.id" :date="item.id">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.ouId') }}</div>
                </div>    
            </el-col>

            <el-col :span="24">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                        <label><small>*</small>上级业务地区</label>
                        <el-select clearable  
                         
                        
                        class="areaParentId" 
                        :class="{redBorder : validation.hasError('addData.areaParentId')}" 
                        placeholder=""
                        v-model="addData.areaParentId">
                        <el-input
                            placeholder="搜索..."
                            class="selectSearch"
                            v-model="search_area">
                        </el-input>
                            <el-tree
                            oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                            :data="selectTree_area"
                            :props="selectProps_area"
                            node-key="id"
                            default-expand-all
                            ref="area_tree"
                            :filter-node-method="filterNode_area"
                            :expand-on-click-node="false"
                            @node-click="nodeClick_area"
                            >
                            </el-tree>
                            <el-option v-show="false" :key="item_area.id" :label="item_area.areaName" :value="item_area.id">
                            </el-option>
                             <!-- <el-option v-show="false" :label="item_area_no.areaName" :value="item_area_no.id">
                            </el-option> -->
                            <!-- <el-option v-show="false" v-for="item in selectData.area" :key="item.id" :label="item.areaName" :value="item.id" :date="item.id">
                            </el-option> -->
                        </el-select>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.areaParentId') }}</div>
                </div>   
            </el-col>
            
            <el-col :span="24">
               <div class="bgMarginAuto">
                   <div class="bgcolor bgLongWidth"><label>
                        <small>*</small>业务地区编码</label>
                        <el-input 
                         
                        
                        class="areaCode" 
                        :class="{redBorder : validation.hasError('addData.areaCode')}" 
                        v-model="addData.areaCode"></el-input>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.areaCode') }}</div>
                </div> 
                
                
            </el-col>
            <el-col :span="24">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                        <label><small>*</small>业务地区名称</label>
                        <el-input 
                         
                        
                        class="areaName" 
                        :class="{redBorder : validation.hasError('addData.areaName')}" 
                        v-model="addData.areaName"></el-input>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.areaName') }}</div>
                </div>    
            </el-col>
            
            <el-col :span="24">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                        <label>负责人</label>
                        <el-input 
                         
                        
                        class="manager" 
                        :class="{redBorder : validation.hasError('addData.manager')}" 
                        v-model="addData.manager"  
                        ></el-input>
                    </div>
                    <div class="error_tips_info">{{ validation.firstError('addData.manager') }}</div>
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
                        <label>创建人</label>
                        <el-input 
                        v-model="info.createdBy"
                        disabled
                        ></el-input>
                    </div>
                </div>    
            </el-col>
            
            <el-col :span="24">
                <div class="bgMarginAuto">
                    <div class="bgcolor bgLongWidth">
                        <label>创建时间</label>
                        <el-date-picker
                        type="date"
                        disabled
                        v-model="info.createdTime"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd">
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
    // 错误信息提示开始
        detail_message_ifShow:false,
        errorMessage:false,
    // 错误信息提示结束
       

        search_ou:'',
        item_ou:{
            id:"",
            ouName:""
        },
        selectTree_ou:[
        ],
        selectProps_ou: {
            children: 'children',
            label: 'ouName',
            id:'id'
        },

        search_area:'',
        item_area:{
            id:"",
            areaName:""
        },
        item_area_no:{
            id:0,
            ouName:"无"
        },
        selectTree_area:[
        ],
        selectProps_area: {
            children: 'childItems',
            label: 'name',
            id:'id'
        },

        info:{//创建人，创建时间
            createdBy:'',
            createdTime:''
        },
        AreaType:1,//树形图的地区分类(1.业务地区.2行政地区)
        addData:{
        "groupId": 1,
        "areaType": 1,
        "areaParentId": '',
        "areaCode": "",
        "areaName": "",
        "areaFullName": "string",
        "areaFullPathId": "string",
        "areaFullPathName": "string",
        "manager": "",
        "status": '',
        "remark": ""
        },
        selectData:{//select数据
            Status001:[],//启用状态
            UserType:[],//身份类型
            userGroupId:[],//所属用户组
            languageId:[],//语种
            // area:[],//上级业务地区
            ou:[],//组织
        },
        dialogUserConfirm:false,//信息更改提示控制
        choseDoing:'',//存储点击按钮判断信息
        response:{
            details:'',
            message:'',
        },
      }
    },
    validators: {
        //    'addData.areaType': function (value) {//地区分类
    //      return this.Validator.value(value).required().integer()
    //   },
        'addData.areaCode': function (value) {//地区代码
            return this.Validator.value(value).required().maxLength(50)
        },
        'addData.areaName': function (value) {//地区名称
            return this.Validator.value(value).required().maxLength(50);
        },
    //   'addData.areaFullName': function (value) {//地区全称
    //      return this.Validator.value(value).required().maxLength(200);
    //   },
    //   'addData.areaFullPathId': function (value) {//全路径ID
    //      return this.Validator.value(value).required().maxLength(1000);
    //   },
    //   'addData.areaFullPathName': function (value) {//全路径名称
    //      return this.Validator.value(value).required().maxLength(1000);
    //   },
        'addData.manager': function (value) {//负责人
            return this.Validator.value(value).maxLength(20);
        },
        'addData.ouId': function (value) {//
            return this.Validator.value(value).required().integer();
        },
        'addData.areaParentId': function (value) {//上级业务地区
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
        _this.getData()
    },
    watch: {
        search_area(val) {
            this.$refs.area_tree.filter(val);
        },
        search_ou(val) {
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
    methods: {
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
            // _this.selectData.area=res.result.items;
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
        changeOuId(){
            let _this=this;
            _this.getAreaTree(_this.addData.ouId)
             _this.addData.areaParentId=0;
             _this.item_area.id=0;
             _this.item_area.areaName='无'
        },
        getAreaTree(OuId){
            let _this=this;
            _this.$axios.gets('/api/services/app/OpAreaManagement/GetTreeByOuId',{OuId:OuId})
            .then(function(res){
                if(res.result==null || res.result==[]){
                    _this.selectTree_area=[]
                }else{
                    _this.selectTree_area=res.result;
                    _this.loadIcon();
                }
                
            },function(res){
            })
        },
        getData(){
            let _this=this;
             _this.$axios.gets('/api/services/app/OpAreaManagement/Get',{id:_this.$route.params.id})
            .then(function(res){
                _this.addData={
                    "id": res.result.id,
                    "groupId":  res.result.groupId,
                    "ouId":  res.result.ouId,
                    "areaType": res.result.areaType,
                    "areaParentId":  res.result.areaParentId,
                    "areaCode":  res.result.areaCode,
                    "areaName":  res.result.areaName,
                    "areaFullName":  res.result.areaFullName,
                    "areaFullPathId": res.result.areaFullPathId,
                    "areaFullPathName":  res.result.areaFullPathName,
                    "manager":  res.result.manager,
                    "status":  res.result.status,
                    "remark":  res.result.remark
                    }
                _this.info={
                    createdTime:res.result.createdTime,
                    createdBy:res.result.createdBy,
                }    
                 _this.item_ou.id=res.result.ouId;
                 _this.item_ou.ouName=res.result.ouName;
                _this.item_area.id=res.result.areaParentId;
                _this.item_area.areaName=res.result.areaParentId_AreaName;
                _this.getAreaTree(res.result.ouId)
            },function(res){    

            })  
        },
         filterNode_ou(value, data) {
            if (!value) return true;
            return data.ouName.indexOf(value) !== -1;
        },
        filterNode_area(value, data) {
            if (!value) return true;
            return data.areaName.indexOf(value) !== -1;
        },
        showErrprTips(e){
            $('.tipsWrapper').each(function(){
                if($(e.target).parent('.el-input').hasClass($(this).attr('name'))){
                    $(this).addClass('display_block')
                }else{
                    $(this).removeClass('display_block')
                }
            })
        },
        showErrprTipsSelect(e){
            $('.tipsWrapper').each(function(){
                if($(e.target).parent('.el-input').parent('.el-select').hasClass($(this).attr('name'))){
                    $(this).addClass('display_block')
                }else{
                    $(this).removeClass('display_block')
                }
            })
        },
        showErrprTipsRangedate(e){
            $('.tipsWrapper').each(function(){
                if($(e.$el).hasClass($(this).attr('name'))){
                    $(this).addClass('display_block')
                }else{
                    $(this).removeClass('display_block')
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
        back(row){
            this.$store.state.url='/businessArea/businessAreaList/default'
            this.$router.push({path:this.$store.state.url})//点击切换路由OuManage
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
        save(){
            let _this=this;
            
            _this.$validate()
            .then(function (success) {
                if (success) {
                    _this.$axios.puts('/api/services/app/OpAreaManagement/Update',_this.addData)
                    .then(function(res){
                        _this.open('保存成功','el-icon-circle-check','successERP');
                        _this.firstModify=false;
                        _this.ifModify=false;
                    },function(res){
                        if(res && res!=''){ _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)}
                        _this.errorMessage=true;
                    })
                }
            });
        
        },
        add(){
            let _this=this;
            _this.$store.state.url='/businessArea/businessAreaDetail/default';
            _this.$router.push({path:this.$store.state.url})//点击切换路由OuManage
        },
        deleteThis(){
             let _this=this;
            _this.$axios.deletes('/api/services/app/OpAreaManagement/Delete',{id:_this.$route.params.id})
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
        saveAdd(){
            let _this=this;
            
            _this.$validate()
            .then(function (success) {
                if (success) {
                    _this.$axios.puts('/api/services/app/OpAreaManagement/Update',_this.addData)
                    .then(function(res){
                        _this.add()
                        _this.$router.push({path:this.$store.state.url})//点击切换路由OuManage
                    },function(res){
                        if(res && res!=''){ _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)}
                        _this.errorMessage=true;
                    })
                }
            });
        },
        loadTree(){
           let _this=this;
            //地区
            // _this.$axios.gets('/api/services/app/OpAreaManagement/GetTreeByOuId',{OuId:_this.addData.OuId})
            // .then(function(res){
            //     _this.selectTree_area=res.result;
            //     _this.loadIcon();
            // },function(res){
            // })
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
        nodeClick_ou(data,node,self){
            let _this=this;
            // _this.item_ou.id=data.id;
            // _this.item_ou.ouName=data.ouName;
            // _this.$nextTick(function(){
            //     $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').click();
            // })
            $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
                if($(this).attr('date')==data.id){
                    $(this).click()
                }
            })
        },
        nodeClick_area(data,node,self){
            let _this=this;
            //  console.log(data.id)
            // console.log(_this.addData)
            if(_this.addData.id==data.id){
                alert("上级业务地区不能为业务地区本身")
            }else{
                _this.item_area.id=data.id;
                _this.item_area.areaName=data.areaName;
                _this.$nextTick(function(){
                    $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').click();
                })
                // $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
                //     if($(this).attr('date')==data.id){
                //         $(this).click()
                //     }
                // })
            }
        },
    }

})
</script>



<style scoped>
.pt15{
    padding-top: 15px;
}
.businessAreaModify  .errorTips{
    margin-bottom: 10px;
    margin-top: -10px;
}
 .businessAreaModify .el-row{
    background-color: #fff;
  }
 .businessAreaModify .el-row:first-child{
   padding: 7px 0;
   border-bottom: 1px solid #e4e4e4;
  }
  .businessAreaModify .el-row:last-child{
    padding-bottom: 15px;
  }
  .businessAreaModify .bgcolor .isGive{
    display: block;
    float: left;
    height: 100%;
    line-height: 35px;
  }
.businessAreaModify .bgcolor.longWidth{
    margin-right: 0;
    width: 421px;
    height:auto;
    float: left;
  }
  .marginAuto{
      margin: auto;
      width: 550px;
  }
  .error_tips{
      color: red;
      font-size: 12px;
      float: left;
      height: 35px;
      line-height: 35px;
  }
  .businessAreaModify .bgcolor.longWidth .el-input,
  .businessAreaModify .bgcolor.longWidth .el-textarea,
  .businessAreaModify .bgcolor.longWidth .el-select{
      width: calc(100% - 90px)
  }
  .businessAreaModify .bgcolor.longWidth label{
    width:80px;
  }
 .businessAreaModify .bgcolor.longWidth .el-textarea{
   font-size: 12px;
 } 
 .businessAreaModify .bgcolor.longWidth .addZoo{
   float: left;
   width: calc(100% - 82px)
 }
.businessAreaModify .bgcolor.longWidth .add{
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
    margin-bottom: 10px;
}
.businessAreaModify .bgcolor.longWidth .addRole{
  text-align: center;
  line-height: 35px;
  display: inline-block;
  width: 66px;
  height: 35px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
}
.businessAreaModify .bgcolor.longWidth .add:hover{
    background-color: #354052;
}
.businessAreaModify .bgcolor.longWidth .addRole i{
  position: absolute;
  right: -4px;
  top: -4px;
  color: #cccccc;
}
.businessAreaModify .bgcolor.longWidth .addRole:hover i{
  color:#f66;
}
</style>

<style>
  .businessAreaModify .bgcolor .el-select .el-input input{
    height: 35px!important;
    }
  </style>