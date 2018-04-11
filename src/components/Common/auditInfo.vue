 <template>
    <div id="auditInfo-wrapper">
       <el-row class="pl10 pr10 pt10" style="border-top:1px solid #e4e4e4;">
                    <el-col :span="24">
                        <h4>审计信息</h4>
                    </el-col>
                    <el-col :span="6">
                        <div class="bgMarginAuto">
                            <div class="bgcolor bgLongWidth">
                                <label>创建人</label>
                                <el-input 
                                :disabled="isDisabled"
                                v-model="auditData.createdBy">
                                </el-input>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="bgMarginAuto">
                            <div class="bgcolor bgLongWidth">
                                <label>创建时间</label>
                                <el-input  :disabled="isDisabled" v-model="auditData.createdTime">
                                </el-input>
                                <!-- <el-date-picker
                                type="date"
                                :disabled="isDisabled"
                                v-model="auditData.createdTime"
                                format="yyyy-MM-dd"
                                value-format="yyyy-MM-dd">
                                </el-date-picker> -->
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="bgMarginAuto">
                            <div class="bgcolor bgLongWidth">
                                <label>修改人</label>
                                <el-input 
                                :disabled="isDisabled"
                                v-model="auditData.modifiedBy">
                                </el-input>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="bgMarginAuto">
                            <div class="bgcolor bgLongWidth">
                                <label>修改时间</label>
                                <!-- <el-date-picker
                                type="date"
                                :disabled="isDisabled"
                                v-model="auditData.modifiedTime"
                                format="yyyy-MM-dd"
                                value-format="yyyy-MM-dd">
                                </el-date-picker> -->
                                <el-input  :disabled="isDisabled" v-model="auditData.modifiedTime">
                                </el-input>

                            </div>
                        </div>
                    </el-col>
                </el-row>
    </div>
</template>

<script>
    export default {
        props:['auditData',],
        data(){
            return{
                isDisabled:true,
            }
        },
        methods:{

        },
        created(){

        },
        
    }
</script>

<style scope>
    #auditInfo-wrapper h4{
        padding: 5px 0 0px 5px;
        margin-bottom: 30px;
    }
</style>

<style>
 /* 重新设置表单宽度 */
    #auditInfo-wrapper .bgcolor.bgLongWidth label{
        width: 60px;
    }
    #auditInfo-wrapper .bgcolor.bgLongWidth .el-input{
        width: calc(100% - 200px);
        text-align: center;
    }
    #auditInfo-wrapper .el-input.is-disabled .el-input__inner {
    text-align: center;
    }
</style>