<template>
    <div class="userModify">
        <el-row>
            <el-col :span="24">
              <button @click="back" class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
              <!-- <button class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button> -->
              <button @click="delRow" class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>    
              <button @click="save" class="erp_bt bt_save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
              <button @click="Cancel" class="erp_bt bt_cancel"><div class="btImg"><img src="../../../static/image/common/bt_cancel.png"></div><span class="btDetail">取消</span></button>
              <button class="erp_bt bt_print"><div class="btImg"><img src="../../../static/image/common/bt_print.png"></div><span class="btDetail">打印</span></button>
            </el-col>
        </el-row>
        <el-row>
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
                    <el-select 
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
                        <el-option v-show="false" :key="item.id" :label="item.ouFullname" :value="item.id">
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
                    <label><small>*</small>身份类型</label>
                    <el-select 
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
                    <el-select 
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
                        <el-select 
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
                        <el-checkbox v-model="addData.isReg"></el-checkbox>
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
                        <a class="add" href="javascript:;" @click="dialogTableVisible = true">+</a>
                        <a class="addRole"  v-for="x in checked">{{x.displayName}}<i @click="addRole(x)" class="el-icon-error"></i></a>
                    </div>
                </div>    
            </div>
            <el-dialog :visible.sync="dialogTableVisible">
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
                        <span class="menu_item" v-for="x in checked"><a class="menu_add" @click="addRole(x)"><i class="el-icon-minus"></i></a>{{x.displayName}}</span>
                    </div>
                    <div class="menu_item_wapper menu_item_del">
                        <span class="menu_item" v-for="x in nochecked"><a class="menu_add" @click="delRole(x)"><i class="el-icon-plus"></i></a>{{x.displayName}}</span>
                    </div>
                    <!-- <el-col :span="24" class="load_more" :class="{display_block : isLoadMore}">
                        <button>加载更多</button>
                    </el-col> -->
                </el-col>
            </el-dialog>
        </el-col>

      </el-row>
  </div>
</template>

<script>
  export default({
    data(){
      return{
        search:'',
        item:{
            id:'',
            ouFullname:'',
        },
        selectTree:[
        ],
        selectProps: {
            children: 'children',
            label: 'ouFullname',
            id:'id'
        },


        dialogTableVisible:false,//控制对话框
        menuCheck:true,//未选功能，已选功能
         check:false,//是否授权
         isLoadMore:false,
         contain: 
         [{ 
            value:0,
            label: '选项1'
         },{ 
            value:1,
            label: '选项2'
         }, {
            value:2,
            label: '选项3'
         }],
        addData:{
          "userCode": "",
          "displayName": "",
          "phoneNumber": "",
          "email": "",
          "userGroupId": "",
          "ouId": "",
          "status": "",
          "userType": "",
          "languageId": "",
          "isReg": false,
          "remark": "",
          "roleCodes": [],
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
        allNode:[],//所有角色
        checkedRoleCode:[],
        
        rolePageIndex:1,//分页的当前页码
        rolePage:0,//当前页
        roleOneItem:10,//每页有多少条信息
        roleTotalItem:0,//总共有多少条消息
        selectData:{//select数据
            // OUType:[],//所属组织
            Status001:[],//启用状态
            UserType:[],//身份类型
            userGroupId:[],//所属用户组
            languageId:[],//语种
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
         return this.Validator.value(value).required().maxLength(200);
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
         return this.Validator.value(value).required().integer();
      },
      'addData.remark': function (value) {//备注
         return this.Validator.value(value).required().maxLength(200);
      },
      'dateRange':function(value){
          return this.Validator.value(value).required();
      }
    },
    created:function(){       
      let _this=this;
      _this.loadTree();
    _this.getSelectData();
    _this.GetRoles();
    _this.getData();
    },
    watch: {
      search(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods: {
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
            // _this.$axios.gets('/api/services/app/OuManagement/GetOuParentList').then(function(res){ 
            // // 所属组织
            // _this.selectData.OUType=res.result;
            // })
            _this.$axios.gets('/api/services/app/UserGroup/GetAll',{SkipCount:_this.SkipCount,MaxResultCount:_this.MaxResultCount}).then(function(res){ 
            // 所属用户组
                _this.selectData.userGroupId=res.result.items;
                _this.totalCount=res.result.totalCount;
            })
            ///api/services/app/Language/GetLanguages
            _this.$axios.gets('/api/services/app/Language/GetLanguages').then(function(res){ 
            // 语种
                _this.selectData.languageId=res.result.items;
            })
        },
        GetRoles(){
            let _this=this;
            _this.$axios.gets('/api/services/app/User/GetRoles',{id:_this.$route.params.id})
           .then(function(resp){
                _this.roleTotalItem=resp.result.totalCount;//暂时未用到
                _this.checked=resp.result.items;
                _this.loadTableData()
           },function(resp){

           })
        },
       getData(){
           let _this=this;
           _this.$axios.gets('/api/services/app/User/Get',{id:_this.$route.params.id})
           .then(function(res){
               console.log(res)
                _this.addData= {
                    "userCode": res.result.userCode,
                    "displayName": res.result.displayName,
                    "phoneNumber": res.result.phoneNumber,
                    "ouId": res.result.ouId,
                    "status": res.result.status,
                    "userType": res.result.userType,
                    "languageId": res.result.languageId,
                    "userGroupId": res.result.userGroupId,
                    "isReg": res.result.isReg,
                    "remark": res.result.remark,
                    "roleCodes": res.result.roleCodes,
                    "email":res.result.email,
                    "id": res.result.id,
                }
                if(res.result.effectiveStart && res.result.effectiveEnd){
                    _this.dateRange=[res.result.effectiveStart,res.result.effectiveEnd]
                }
                _this.item.id=res.result.ouId;
                _this.item.ouFullname=res.result.ouFullname;
                // console.log(res.result)
                // if(res.result.roleCodes.length>0 && res.result.roleCodes.length){
                //     _this.checkedRoleCode=res.result.roleCodes;
                // }
                
           },function(res){

           })
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
      showErrprTipsTextArea(e){
            $('.tipsWrapper').each(function(){
              if($(e.target).parent('.el-textarea').hasClass($(this).attr('name'))){
                  $(this).addClass('display_block')
              }else{
                  $(this).removeClass('display_block')
              }
            })
      },
      filterNode(value, data) {
            if (!value) return true;
            return data.ouFullname.indexOf(value) !== -1;
        },
        loadTree(){
            let _this=this;
            _this.treeLoading=true;
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
            _this.$nextTick(function(){
                $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').click();
            })
                
            // $(self.$el).parents('.el-select-dropdown__list').children('.el-select-dropdown__item').each(function(index){
            //     if($(this).attr('date')==data.id){
            //         $(this).click()
            //     }
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
      loadTableData(){//表格
          let _this=this;
          _this.tableLoading=true
          _this.$axios.gets('/api/services/app/Role/GetAll',{SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem})
          .then(function(res){ 
              _this.nochecked=[]  
            //   _this.tableData=res.result.items;
              _this.totalItem=res.result.totalCount
              _this.totalPage=Math.ceil(res.result.totalCount/_this.oneItem);
              _this.tableLoading=false;
              _this.allNode=res.result.items
                if(_this.checked.length>0){
                    _this.nochecked=_this.uniqueArray(_this.allNode,_this.checked)
                }else{
                    _this.nochecked=_this.allNode
                }
              },function(res){
              _this.tableLoading=false;
          })
      },
      handleCurrentChange(val) {//页码改变
            let _this=this;
            _this.page=val;
            _this.loadTableData();
      },
      handleSelectionChange(val) {//点击复选框选中的数据
          this.multipleSelection = val;
      },
      delRow(){
        let _this=this;
        if(_this.multipleSelection.length>0){//表格
            for(let i=0;i<_this.multipleSelection.length;i++){
                _this.$axios.deletes('/api/services/app/Role/Delete',{id:_this.multipleSelection[i].id})
                .then(function(res){
                    _this.loadTableData();
                    _this.open('删除成功','el-icon-circle-check','successERP');
                },function(res){
                    _this.open('删除失败','el-icon-error','faildERP');
                })
            }
        };
      },
      back(row){
          this.$store.state.url='/user/userList/default'
          this.$router.push({path:this.$store.state.url})//点击切换路由OuManage
      },
      see(row){
          // this.$store.state.url='/OuManage/OuManageSee/'+row.id
          // this.$router.push({path:this.$store.state.url})//点击切换路由
      },
      delThis(row){//删除行
          let _this=this;
          _this.$axios.deletes('/api/services/app/Role/Delete',{id:row.id})
          .then(function(res){
              _this.loadTableData();
          },function(res){
          })
      },
      showNodeadd(){
            let _this=this;
            _this.menuCheck=!_this.menuCheck
            $('.menu_item_add').css('display','block')
            $('.menu_item_del').css('display','none')
        },
        showNodedel(){
            let _this=this;
            _this.menuCheck=!_this.menuCheck
            $('.menu_item_add').css('display','none')
            $('.menu_item_del').css('display','block')
        },
        addRole(x){
            let _this=this;
            let flag=false;
            if(_this.nochecked.length<=0){
                flag=true;
            }else{
                flag=false;
                $.each(_this.nochecked,function(index,value){
                    if(x==value){
                        flag=false;
                    }else{
                        flag=true;
                    }
                })
            }
            $.each(_this.checked,function(index,value){
                if(x==value){
                    _this.checked.splice(index,1)
                }
            })
            if(flag){
                _this.nochecked.push(x);
            }
        },
        delRole(x){
            let _this=this;
            let flag=false;
            if(_this.checked.length<=0){
                flag=true;
            }else{
                flag=false;
                $.each(_this.checked,function(index,value){
                    if(x==value){
                        flag=false;
                    }else{
                        flag=true;
                    }
                })
            }
            $.each(_this.nochecked,function(index,value){
                if(x==value){
                    _this.nochecked.splice(index,1)
                }
            })
            if(flag){
                _this.checked.push(x);
            }
        },
        Cancel(){
            this.getData()
        },
        save(){
            let _this=this;
            _this.$validate()
            .then(function (success) {
                if (success) {
                    let roles=[];
                    $.each(_this.checked,function(index,value){
                        roles.push(value.roleCode)
                    })
                    _this.addData.roleCodes=roles;
                    _this.addData.effectiveStart=_this.dateRange[0];
                    _this.addData.effectiveEnd=_this.dateRange[1];
                    _this.$axios.puts('/api/services/app/User/Update',_this.addData)
                    .then(function(res){
                        _this.checkedRoleCode=[]
                        $.each(_this.checked,function(index,val){
                            _this.checkedRoleCode.push(val.roleCode)
                        })
                        _this.open('保存成功','el-icon-circle-check','successERP');
                    },function(res){
                        _this.open('保存失败','el-icon-error','faildERP');
                    })
                }
            });
        },
    }

})
</script>



<style scoped>
.userModify  .errorTips{
    margin-bottom: 10px;
    margin-top: -10px;
}
 .userModify .el-row{
    background-color: #fff;
    padding-top: 15px;
  }
 .userModify .el-row:first-child{
   padding: 7px 0;
   border-bottom: 1px solid #e4e4e4;
  }
  .userModify .bgcolor .isGive{
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
.userModify .el-dialog__headerbtn{
    top:3px;
    font-size:50px;
}
.userModify .el-dialog__body{
  overflow: hidden;
}
</style>
