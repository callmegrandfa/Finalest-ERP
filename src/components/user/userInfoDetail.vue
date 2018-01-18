<template>
    <div class="userDetail">
        <el-row>
            <el-col :span="24">
              <button class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
              <button class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
              <button class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>    
              <button class="erp_bt bt_save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
              <button class="erp_bt bt_cancel"><div class="btImg"><img src="../../../static/image/common/bt_cancel.png"></div><span class="btDetail">取消</span></button>
              <button class="erp_bt bt_print"><div class="btImg"><img src="../../../static/image/common/bt_print.png"></div><span class="btDetail">打印</span></button>
            </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="bgcolor"><label>用户编码</label><el-input  placeholder=""></el-input></div>
            <div class="bgcolor"><label>用户名称</label><el-input  placeholder=""></el-input></div>
            <div class="bgcolor"><label>手机号码</label><el-input  placeholder=""></el-input></div>
            <div class="bgcolor">
              <label>所属组织</label>
              <el-select v-model="valueContain">
                  <el-option v-for="item in contain" :key="item.valueContain" :label="item.label" :value="item.valueContain"></el-option>
              </el-select>
            </div>
            <div class="bgcolor">
              <label>所属用户组</label>
              <el-select v-model="valueContain">
                <el-option v-for="item in contain" :key="item.valueContain" :label="item.label" :value="item.valueContain"></el-option>
              </el-select>
            </div>
            <div class="bgcolor">
              <label>身份类型</label>
              <el-select v-model="valueContain">
                <el-option v-for="item in contain" :key="item.valueContain" :label="item.label" :value="item.valueContain"></el-option>
              </el-select>
            </div>
            <div class="bgcolor">
              <label>语种</label>
              <el-select v-model="valueContain">
                <el-option v-for="item in contain" :key="item.valueContain" :label="item.label" :value="item.valueContain"></el-option>
              </el-select>
            </div>
            <div class="bgcolor">
              <label><small>*</small>有效时间</label>
               <div class="rangeDate">
                  <el-date-picker
                  v-model="valueDate"
                  type="daterange"
                  range-separator="to"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                  </el-date-picker>
              </div>
            </div>
            <div class="bgcolor">
              <label>状态</label>
              <el-select v-model="valueContain">
                <el-option v-for="item in contain" :key="item.valueContain" :label="item.label" :value="item.valueContain"></el-option>
              </el-select>
            </div>
          </el-col>

          <el-col :span="24">
            <div class="bgcolor">
              <label><el-checkbox v-model="check"></el-checkbox></label>
              <span class="isGive">是否授权</span>
            </div>
          </el-col>

          <el-col :span="24">
            <div class="bgcolor longWidth">
              <label>备注</label>
              <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 10}"
                placeholder="请输入内容">
              </el-input>
            </div>
          </el-col>

          <el-col :span="24">
            <div class="bgcolor longWidth">
              <label>角色</label>
              <div class="addZoo">
                  <a class="add" href="javascript:;">+</a>
                  <button class="addRole">角色1<i class="el-icon-error"></i></button>
                  <button class="addRole">角色2<i class="el-icon-error"></i></button>
                  <button class="addRole">角色3<i class="el-icon-error"></i></button>
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
        valueDate:'',
         check:true,//是否授权
         date:'',//有效时间
         valueContain:'',
         contain: [{ 
                valueContain:'选项1',
                label: '腾讯'
            }, {
                valueContain:'选项2',
                label: '阿里'
            }],     

      }
    },

  })
</script>



<style scoped>
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
.userDetail .bgcolor.longWidth{
    width: 100%;
    height:auto;
  }
 .userDetail .bgcolor.longWidth .el-textarea{
   width: 436px;
   font-size: 12px;
 } 
 .userDetail .bgcolor.longWidth .addZoo{
   float: left;
   width: calc(100% - 82px)
 }
.userDetail .bgcolor.longWidth .add{
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
.userDetail .bgcolor.longWidth .addRole{
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
.userDetail .bgcolor.longWidth .addRole i{
  position: absolute;
  right: -4px;
  top: -4px;
  color: #cccccc;
}
.userDetail .bgcolor.longWidth .addRole:hover i{
  color:#f66;
}
</style>

<style>

</style>
