<template>
    <div class="businessAreaDetail">
        <el-row>
            <el-col :span="24">
              <button @click="back" class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
              <!-- <button class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button> -->
              <!-- <button @click="delRow" class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>     -->
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
            <!-- <div class="tipsWrapper" name="areaCode">
                <div class="errorTips" :class="{block : !validation.hasError('addData.areaCode')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.areaCode') }}</p>
                </div>
            </div>
             <div class="tipsWrapper" name="areaName">
                <div class="errorTips" :class="{block : !validation.hasError('addData.areaName')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.areaName') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="manager">
                <div class="errorTips" :class="{block : !validation.hasError('addData.manager')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.manager') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="areaParentId">
                <div class="errorTips" :class="{block : !validation.hasError('addData.areaParentId')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.areaParentId') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="remark">
                <div class="errorTips" :class="{block : !validation.hasError('addData.remark')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.remark') }}</p>
                </div>
            </div>
            <div class="tipsWrapper" name="status">
                <div class="errorTips" :class="{block : !validation.hasError('addData.status')}">
                    <p class="msgDetail">错误提示：{{ validation.firstError('addData.status') }}</p>
                </div>
            </div> -->


            <el-col :span="24" class="pt15">
               <div class="marginAuto">
                   <div class="bgcolor longWidth"><label>
                        <small>*</small>业务地区编码</label>
                        <el-input 
                        class="areaCode" 
                        :class="{redBorder : validation.hasError('addData.areaCode')}" 
                        v-model="addData.areaCode"></el-input>
                    </div>
                    <div class="error_tips">{{ validation.firstError('addData.areaCode') }}</div>
                </div> 
                
                
            </el-col>
            <el-col :span="24">
                <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label><small>*</small>业务地区名称</label>
                        <el-input 
                        class="areaName" 
                        :class="{redBorder : validation.hasError('addData.areaName')}" 
                        v-model="addData.areaName"></el-input>
                    </div>
                    <div class="error_tips">{{ validation.firstError('addData.areaName') }}</div>
                </div>    
            </el-col>
            
            <el-col :span="24">
                <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label>负责人</label>
                        <el-input 
                        class="manager" 
                        :class="{redBorder : validation.hasError('addData.manager')}" 
                        v-model="addData.manager"  
                        ></el-input>
                    </div>
                    <div class="error_tips">{{ validation.firstError('addData.manager') }}</div>
                </div>   
            </el-col>
            
            <el-col :span="24">
                <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label><small>*</small>上级业务地区</label>
                        <el-select 
                        class="areaParentId" 
                        :class="{redBorder : validation.hasError('addData.areaParentId')}" 
                        placeholder=""
                        v-model="addData.areaParentId">
                        <!-- <input type="text" class="selectTree"> -->
                            <el-tree
                            oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
                            :data="componyTree"
                            :props="defaultProps"
                            node-key="id"
                            default-expand-all
                            ref="tree"
                            :expand-on-click-node="false"
                            @node-click="nodeClick"
                            >
                            </el-tree>
                                <el-option v-show="false" :key="id" :label="areaName" :value="id" id="confirmSelect">
                            
                                </el-option>
                        </el-select>
                    </div>
                    <div class="error_tips">{{ validation.firstError('addData.areaParentId') }}</div>
                </div>   
            </el-col>
            
            <el-col :span="24">
                <div class="marginAuto">
                    <div class="bgcolor longWidth">
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
                    <div class="error_tips">{{ validation.firstError('addData.remark') }}</div>
                </div>       
            </el-col>
            
            <el-col :span="24">
                <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label><small>*</small>状态</label>
                        <el-select 
                        class="status" 
                        :class="{redBorder : validation.hasError('addData.status')}" 
                        placeholder=""
                        v-model="addData.status">
                            <el-option v-for="item in contain" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="error_tips">{{ validation.firstError('addData.status') }}</div>
                </div>    
            </el-col>
            
            <el-col :span="24">
                <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label>创建人</label>
                        <el-input 
                        disabled
                        ></el-input>
                    </div>
                </div>    
            </el-col>
            
            <el-col :span="24">
                <div class="marginAuto">
                    <div class="bgcolor longWidth">
                        <label>创建时间</label>
                        <el-date-picker
                        type="date"
                        disabled
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd">
                        </el-date-picker>
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
        id:'',
        areaName:'',
        componyTree:[
        ],
        defaultProps: {
            children: 'items',
            label: 'areaName',
            id:'id'
        },
        AreaType:1,//树形图的地区分类(1.业务地区.2行政地区)
         contain: 
         [{ 
            value:1,
            label: '启用'
         }, {
            value:2,
            label: '停用'
         }],
         contains: 
         [{ 
            value:0,
            label: '无'
         },{ 
            value:1,
            label: '选项1'
         }, {
            value:2,
            label: '选项2'
         }],
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
          return this.Validator.value(value).required().maxLength(20);
      },
      'addData.areaParentId': function (value) {//上级业务地区
          return this.Validator.value(value).required().integer();
      },
      'addData.status': function (value) {//启用状态
         return this.Validator.value(value).required().integer();
      },
      'addData.remark': function (value) {//备注
          return this.Validator.value(value).required().maxLength(200);
      },
    },
    created () {
        let _this=this;
        _this.loadTree();  
    },
    methods: {

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
      loadTree(){
            let _this=this;
            _this.treeLoading=true;
            _this.$axios.gets('/api/services/app/AreaManagement/GetAllDataTree',{AreaType:_this.AreaType})
            .then(function(res){
                _this.componyTree=res.result;
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
          this.$store.state.url='/businessArea/businessAreaList/default'
          this.$router.push({path:this.$store.state.url})//点击切换路由
      },
      save(){
        let _this=this;
        _this.$validate()
        .then(function (success) {
            if (success) {
                 _this.$axios.posts('/api/services/app/AreaManagement/Create',_this.addData)
                .then(function(res){
                    console.log(res)
                    _this.open('保存成功','el-icon-circle-check','successERP');
                    _this.$store.state.url='/businessArea/businessAreaModify/'+res.result.id
                    _this.$router.push({path:_this.$store.state.url})//点击切换路由
                },function(res){    
                    _this.open('保存失败','el-icon-error','faildERP');
                })
            }
        });
      },
      nodeClick(data){
          let _this=this;
          _this.id=data.id;
          _this.areaName=data.areaName;
          $("#confirmSelect").click()
      }
    }

})
</script>



<style scoped>
.pt15{
    padding-top: 15px;
}
.businessAreaDetail  .errorTips{
    margin-bottom: 10px;
    margin-top: -10px;
}
 .businessAreaDetail .el-row{
    background-color: #fff;
  }
 .businessAreaDetail .el-row:first-child{
   padding: 7px 0;
   border-bottom: 1px solid #e4e4e4;
  }
  .businessAreaDetail .el-row:last-child{
    padding-bottom: 15px;
  }
  .businessAreaDetail .bgcolor .isGive{
    display: block;
    float: left;
    height: 100%;
    line-height: 35px;
  }
.businessAreaDetail .bgcolor.longWidth{
    margin-right: 0;
    width: 421px;
    height:auto;
    float: left;
  }
  .businessAreaDetail .bgcolor.longWidth .selectTree{
      width: calc(100% - 122px)
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
  .businessAreaDetail .bgcolor.longWidth .el-input,
  .businessAreaDetail .bgcolor.longWidth .el-textarea,
  .businessAreaDetail .bgcolor.longWidth .el-select{
      width: calc(100% - 90px)
  }
  .businessAreaDetail .bgcolor.longWidth label{
    width:80px;
  }
 .businessAreaDetail .bgcolor.longWidth .el-textarea{
   font-size: 12px;
 } 
 .businessAreaDetail .bgcolor.longWidth .addZoo{
   float: left;
   width: calc(100% - 82px)
 }
.businessAreaDetail .bgcolor.longWidth .add{
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
.businessAreaDetail .bgcolor.longWidth .addRole{
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
.businessAreaDetail .bgcolor.longWidth .add:hover{
    background-color: #354052;
}
.businessAreaDetail .bgcolor.longWidth .addRole i{
  position: absolute;
  right: -4px;
  top: -4px;
  color: #cccccc;
}
.businessAreaDetail .bgcolor.longWidth .addRole:hover i{
  color:#f66;
}
</style>

