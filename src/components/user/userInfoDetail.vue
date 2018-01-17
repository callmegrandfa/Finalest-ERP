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
            <div class="bgcolor"><label><small>*</small>有效时间</label><el-date-picker v-model="date" type="date" placeholder=""></el-date-picker></div>
            <div class="bgcolor">
              <label>状态</label>
              <el-select v-model="valueContain">
                <el-option v-for="item in contain" :key="item.valueContain" :label="item.label" :value="item.valueContain"></el-option>
              </el-select>
            </div>
          </el-col>

          <el-col :span="24">
            <el-checkbox v-model="check">是否授权</el-checkbox>
          </el-col>
        </el-row>
    </div>
</template>

<script>
  export default({
    data(){
      return{
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
</style>
