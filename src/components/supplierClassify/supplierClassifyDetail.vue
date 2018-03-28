<template>
    <div class="supClasDetail-wrapper">
         <!-- 按钮组 -->
        <el-row>
            <el-col :span="24">
                <button @click="goback" class="erp_bt bt_back">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_back.png">
                    </div>
                    <span class="btDetail">返回</span>
                </button>
                <button  class="erp_bt bt_add">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_add.png">
                    </div>
                    <span class="btDetail">新增</span>
                </button>
                <button @click="save" class="erp_bt bt_save">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_save.png">
                    </div>
                    <span class="btDetail">保存</span>
                </button>
                <button @click="saveAdd" class="erp_bt bt_saveAdd">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_saveAdd.png">
                    </div>
                    <span class="btDetail">保存并新增</span>
                </button>
                <button class="erp_bt bt_auxiliary bt_width">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_auxiliary.png">
                    </div>
                    <span class="btDetail">辅助功能</span>
                    <div class="btRightImg">
                        <img src="../../../static/image/common/bt_down_right.png">
                    </div>
                </button>
            </el-col>
        </el-row>
        <!-- 表单 -->
        <el-row>
            <div class="supClasDetail-form-wrapper pt15">
                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                            <label><small>*</small>上级供应商分类</label>
                            <el-input class="classParentName" v-model="addData.classParentName"></el-input>
                        </div>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                        <label><small>*</small>供应商分类编码</label>
                            <el-input 
                            class="classCode" 
                            v-model="addData.classCode"></el-input>
                        </div>
                    </div>
                </el-col>                 
                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                        <label><small>*</small>供应商分类名称</label>
                            <el-input 
                            class="className" 
                            v-model="addData.className"></el-input>
                        </div>
                    </div>
                </el-col>
                 <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                        <label>备注</label>
                            <el-input
                            class="remark" 
                            v-model="addData.remark"
                            type="textarea"
                            :autosize="{ minRows: 4, maxRows: 4}"
                            >
                            </el-input>
                        </div>
                    </div>
                </el-col>
                 <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                            <label><small>*</small>状态</label>
                            <el-select filterable  
                            class="status" 
                            placeholder=""
                            v-model="addData.status">
                                <!-- <el-option v-for="item in selectData.Status001" :key="item.itemValue" :label="item.itemName" :value="item.itemValue">
                                </el-option> -->
                            </el-select>
                        </div>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="bgMarginAuto">
                        <div class="bgcolor bgLongWidth">
                            <label>创建人</label>
                            <el-input 
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
                            format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd">
                            </el-date-picker>
                        </div>
                    </div>
                </el-col>
               
            </div>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "supplierClassifyDetail",
        data(){
             return{
                 addData:{
                     classParentName:[] ,
                     classCode :'',
                     className :'',
                     remark :'',
                     status :[],
                     createdBy :'',
                     createdTime  :'',

                 },

             }
         },
         created(){

         },
         methods:{
             // 返回列表页
            goback() {
                this.$store.state.url = "/supplierClassify/supplierClassifyList/default";
                this.$router.push({ path: this.$store.state.url });
            },
            // 保存
            save(){},
             // 保存并新增
            saveAdd(){},
            // 

         },
    }
</script>

 <style scoped>
    .supClasDetail-wrapper{
        background-color: #fff;
    }
    .pt15{
        padding-top: 15px;
    }
    .supClasDetail-wrapper{
        background-color: #fff;
    }
    .supClasDetail-wrapper .el-row:first-child{
        padding: 7px 0;
        border-bottom: 1px solid #e4e4e4;
    }
    .supClasDetail-wrapper .el-row:last-child{
        padding-bottom: 15px;
    }
    
</style>

<style>
/* 重新设置表单宽度 */
.supClasDetail-wrapper .bgcolor.bgLongWidth label{
        width: 100px;
}
.supClasDetail-wrapper .bgcolor.bgLongWidth .el-input,
.supClasDetail-wrapper .bgcolor.bgLongWidth .rangeDate, 
.bgcolor.bgLongWidth .el-textarea,
.supClasDetail-wrapper .bgcolor.bgLongWidth .el-select{
       width: calc(100% - 110px);
    }


</style>
