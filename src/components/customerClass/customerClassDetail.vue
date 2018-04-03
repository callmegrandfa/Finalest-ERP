<template>
    <div class="customerClassDetail">
        <el-row>
            <el-col :span="24">
                <button @click="back" class="erp_bt bt_back">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_back.png">
                    </div>
                    <span class="btDetail">返回</span>
                </button>     

                <button @click="save" class="erp_bt bt_save">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_save.png">
                    </div>
                    <span class="btDetail">保存</span>
                </button>

                <button @click='saveAdd' class="erp_bt bt_saveAdd">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_saveAdd.png">
                    </div>
                    <span class="btDetail">保存并新增</span>
                </button>
                
                <button class="erp_bt bt_auxiliary bt_width">
                    <div class="btImg"><img src="../../../static/image/common/bt_auxiliary.png"></div>
                    <span class="btDetail">辅助功能</span>
                    <div class="btRightImg"><img src="../../../static/image/common/bt_down_right.png"></div>
                </button>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24" class="pt15">
               <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label><small>*</small>上级客户分类</label>
                        <el-select class="classParentId" 
                                   :class="{redBorder : validation.hasError('addData.classParentId')}" 
                                   placeholder=""
                                   v-model="addData.classParentId">
                            <el-input placeholder="搜索..."
                                      class="selectSearch"
                                      v-model="parentSearch"></el-input>

                            <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                                     :data="selectParentTree"
                                     :props="selectParentProps"
                                     node-key="id"
                                     default-expand-all
                                     ref="tree"
                                     :filter-node-method="filterNode"
                                     :expand-on-click-node="false"
                                     @node-click="nodeClick"></el-tree> 

                            <el-option v-show="false"
                                       :key="count.id" 
                                       :label="count.className" 
                                       :value="count.id"
                                       id="customerClass_confirmSelect"></el-option>
                        </el-select>
                    </div>
                    <div class="error_tips">{{ validation.firstError('addData.classParentId') }}</div>
                </div>
            </el-col>

            <el-col :span="24">
                <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label><small>*</small>客户分类编码</label>
                        <el-input class="classCode" 
                                  :class="{redBorder : validation.hasError('addData.classCode')}" 
                                  v-model="addData.classCode">
                        </el-input>
                    </div>
                    <div class="error_tips">{{ validation.firstError('addData.classCode') }}</div>
                </div>    
            </el-col>

            <el-col :span="24">
                <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label><small>*</small>客户分类名称</label>
                        <el-input  class="className" 
                                   :class="{redBorder : validation.hasError('addData.className')}" 
                                   v-model="addData.className"></el-input>
                    </div>
                    <div class="error_tips">{{ validation.firstError('addData.className') }}</div>
                </div>    
            </el-col>
            
            <el-col :span="24">
                <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label>备注</label>
                        <el-input class="remark" 
                                  :class="{redBorder : validation.hasError('addData.remark')}" 
                                  v-model="addData.remark"
                                  type="textarea"
                                  :autosize="{ minRows: 4, maxRows: 4}">
                        </el-input>
                    </div>
                    <div class="error_tips">{{ validation.firstError('addData.remark') }}</div>
                </div>       
            </el-col>
            
            <el-col :span="24">
                <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label><small>*</small>状态</label>
                        <el-select  class="status" 
                                    :class="{redBorder : validation.hasError('addData.status')}" 
                                    placeholder=""
                                    v-model="addData.status">
                            <el-option v-for="item in status" 
                                       :key="item.itemValue" 
                                       :label="item.itemName" 
                                       :value="item.itemValue"></el-option>
                        </el-select>
                    </div>
                    <div class="error_tips">{{ validation.firstError('addData.status') }}</div>
                </div>    
            </el-col>
            <el-col :span="24">
                <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label>创建人</label>
                       <el-input class="createdTime" 
                                  :class="{redBorder : validation.hasError('addData.createdTime')}" 
                                  v-model="addData.createdTime"
                                  disabled=""
                                  :autosize="{ minRows: 4, maxRows: 4}"
                                  >
                        </el-input>
                    </div>
                   
                </div>    
            </el-col>
             <el-col :span="24">
                <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label>创建时间</label>
                        <el-input class="createdTime" 
                                  :class="{redBorder : validation.hasError('addData.createdTime')}" 
                                  disabled=""
                                  v-model="addData.createdTime"
                                  :autosize="{ minRows: 4, maxRows: 4}">
                        </el-input>
                    </div>
                  
                </div>    
            </el-col>
      </el-row>
  </div>
</template>

<script>
    export default({
        data(){
            return{
                //---上级客户树--------
                selectParentTree:[],//选择上级客户
                parentSearch:'',//搜索上级客户
                selectParentProps:{
                    children: 'childNodes',
                    label: 'className',
                    id:'id'
                },
                parentItem:{
                    id:'',
                    className:'',
                },
                
                status: [],//状态
                //------------------ 新增客户-------------
                addData:{
                    "groupId": 0,
                    "contactOwner": 1,            
                    "classParentId": '',
                    "classCode": "",
                    "className": "",
                    "classFullname": "1",
                    "classFullPathId": "",
                    "classFullPathName": "",
                    "seq": 0,
                    "status": 0,
                    "remark": "",
                    "mnemonic": "1",
                    "createdBy" :'',
                    "createdTime"  :''
                    },
                    //  dateRange:[],//有效时间
                    // tableLoading:false,
                    // tableData:[],
                    // pageIndex:1,//分页的当前页码
                    // totalPage:0,//当前分页总数
                    // oneItem:10,//每页有多少条信息
                    // multipleSelection: [],//复选框选中数据
                    // page:1,//当前页
                    // totalItem:0,//总共有多少条消息
                    //  SkipCount:0,
                    // MaxResultCount:100,
                    // totalCount:0,
            }
        },
     validators: {
      'addData.classParentId': function (value) {//上级客户分类，父id
         return this.Validator.value(value).required().integer();
      },
      'addData.classCode': function (value) {//客户分类编码
         return this.Validator.value(value).required().maxLength(20);
      },
      'addData.className': function (value) {//客户分类名称
         return this.Validator.value(value).required().maxLength(20);
      },
      'addData.remark': function (value) {//备注
          return this.Validator.value(value).maxLength(200);
      },
      'addData.status': function (value) {//状态
         return this.Validator.value(value).required().integer();
      },
    },
    // 创建-------
    created:function(){
            let self = this;
            self.loadParentTree();
            self.loadStatus();
        },
    computed:{
        count () {
            return this.parentItem;
            },
    },  
    methods: {
        //---加载数据上级商品树-------------------------------------------  
        loadParentTree(){
            let self=this;
            self.treeLoading=true;
            self.$axios.gets('api/services/app/ContactClassManagement/GetTreeList',{Ower:1}).then(function(res){
                // console.log(res)
                self.selectParentTree=res;
                self.loadIcon();
            },function(res){
                self.treeLoading=false;
                
            })
        },
        //加载状态下拉框
        loadStatus:function(){
            let self = this;
            self.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status001'}).then(function(res){
                // console.log(res)        
            self.status = res.result;            
            },function(res){
                
            })
        },
        loadIcon(){
            let self=this;
            self.$nextTick(function () {
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
        //-----------------------------------------------------
        
        //---保存新增---------------------------------------------
        save(){
            let self=this; 
            self.$validate().then(function (success) {
                if(success) {   
                   self.$axios.posts('/api/services/app/ContactClassManagement/Create',self.addData).then(function(res){  
                        // _this.addData.id=res.result.id;
                        // console.log(res.result);
                        self.open('保存成功','el-icon-circle-check','successERP');
                        self.$axios.gets("/api/services/app/ContactClassManagement/Get", {id: res.result.id}).then( res=>{
                                            console.log(res.result);
                                            self.addData=res.result;
                                            })
                    },function(res){    
                        self.open('保存失败','el-icon-error','faildERP');
                    })
                }
            });
        },
        saveAdd:function(){
            let self = this;
            self.$validate().then(function (success) {
                if (success) {
                    self.$axios.posts('/api/services/app/ContactClassManagement/Create',self.addData).then(function(res){
                        // console.log(res);
                        self.open('保存成功','el-icon-circle-check','successERP');
                    },function(res){    
                        self.open('保存失败','el-icon-error','faildERP');
                    })
                }
            });
        },
        //----------------------------------------/api/services/app/User/Create---------------
        //---open---路由切换--------------------------------------
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
        // ----------------------------加载表格------------------------
    //     loadTableData(){//表格
    //       let self=this;
    //       self.tableLoading=true
    //       self.$axios.gets('/api/services/app/ContactClassManagement/GetAllList',{ContactOwner:1,SkipCount:(self.page-1)*self.oneItem,MaxResultCount:self.oneItem,Sorting:self.Sorting}).then(function(res){
    //         //   self.tableData=res.result.items;
    //           self.totalItem=res.result.totalCount
    //           self.totalPage=Math.ceil(res.result.totalCount/self.oneItem);
    //           self.tableLoading=false;
    //           self.nochecked=res.result.items;
    //           },function(res){
    //           self.tableLoading=false;
    //       })
    //   },
        back(row){
            this.$store.state.url='/customerClass/customerClassList/default'
            this.$router.push({path:this.$store.state.url})//点击切换路由
        },
        goModify:function(id){
            // console.log(id)
            this.$store.state.url='/customerClass/customerClassModify/'+id
            // this.$store.state.url='/repository/default/repositoryModify/default'
            this.$router.push({path:this.$store.state.url})//点击切换路由
        },
        goDetail(){//点击新增跳转
            this.$store.state.url='/customerClass/customerClassDetail/default'
            this.$router.push({path:this.$store.state.url})//点击切换路由
        },
        //---------------------------------------------------------
        //---下拉树------------------------------------------------.
        filterNode(value, data) {
            // console.log(data)
            if (!value) return true;
                return data.className.indexOf(value) !== -1;
        },

        nodeClick:function(data){
            let self = this;
            self.parentItem.id = data.id;
            self.parentItem.className = data.className;
            self.$nextTick(function(){
                $('#customerClass_confirmSelect').click()
            })
        },
        //---------------------------------------------------------

        //---错误提示-------------------------------------------
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
        //------------------------------------------------------
    }

})
</script>



<style scoped>
.pt15{
    padding-top: 15px;
}
.customerClassDetail  .errorTips{
    margin-bottom: 10px;
    margin-top: -10px;
}
 .customerClassDetail .el-row{
    background-color: #fff;
  }
 .customerClassDetail .el-row:first-child{
   padding: 7px 0;
   border-bottom: 1px solid #e4e4e4;
  }
  .customerClassDetail .el-row:last-child{
    padding-bottom: 15px;
  }
  .customerClassDetail .bgcolor .isGive{
    display: block;
    float: left;
    height: 100%;
    line-height: 35px;
  }
.customerClassDetail .bgcolor.longWidth{
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
  .customerClassDetail .bgcolor.longWidth .el-input,
  .customerClassDetail .bgcolor.longWidth .el-textarea,
  .customerClassDetail .bgcolor.longWidth .el-select{
      width: calc(100% - 90px)
  }
  .customerClassDetail .bgcolor.longWidth label{
    width:80px;
  }
 .customerClassDetail .bgcolor.longWidth .el-textarea{
   font-size: 12px;
 } 
 .customerClassDetail .bgcolor.longWidth .addZoo{
   float: left;
   width: calc(100% - 82px)
 }
.customerClassDetail .bgcolor.longWidth .add{
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
.customerClassDetail .bgcolor.longWidth .addRole{
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
.customerClassDetail .bgcolor.longWidth .add:hover{
    background-color: #354052;
}
.customerClassDetail .bgcolor.longWidth .addRole i{
  position: absolute;
  right: -4px;
  top: -4px;
  color: #cccccc;
}
.customerClassDetail .bgcolor.longWidth .addRole:hover i{
  color:#f66;
}
</style>

