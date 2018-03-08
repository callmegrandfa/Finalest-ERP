<template>
    <div class="businessAreaModify">
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
                            <el-option v-for="item in contains" :key="item.value" :label="item.label" :value="item.value">
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
                        v-model="addData.createdBy"
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
                        v-model="addData.createdTime    "
                        type="date"
                        disabled
                        format="yyyy-MM-dd HH:mm:ss"
                        value-format="yyyy-MM-dd HH:mm:ss">
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
        _this.$axios.gets('/api/services/app/AreaManagement/Get',{id:_this.$route.params.id})
        .then(function(res){
            _this.addData=res.result;
        },function(res){    

        })  
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
      back(row){
          this.$store.state.url='/businessArea/businessAreaList/default'
          this.$router.push({path:this.$store.state.url})//点击切换路由OuManage
      },
      save(){
        let _this=this;
        _this.$validate()
        .then(function (success) {
            if (success) {
                 _this.$axios.puts('/api/services/app/AreaManagement/Update',_this.addData)
                .then(function(res){
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
.pt15{
    padding-top: 15px;
}
.businessAreaModify  .errorTips{
    margin-bottom: 10px;
    margin-top: -10px;
}
.block{
    display: none;
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

