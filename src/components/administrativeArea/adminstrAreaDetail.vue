<template>
    <div class="admstr-wrapper">
        <!-- 按钮组 -->
        <el-row>
            <el-col :span="24">
                <button @click="goback" class="erp_bt bt_back">
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
            <el-col :span="24">
                
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
    export default {
        name:'adminstrAreaDetail',
        data(){
            return {
                



            }
        },
        created(){

        },
        methods:{
            // 返回
            goback(){},
            // 保存
            save(){},
            // 保存并新增
            saveAdd(){},

        },
    }
</script>

<style scoped>

</style>