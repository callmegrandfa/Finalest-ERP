<template>
    <div class="supplierClassifyList-wrapper">
        <el-row class="bg-white">
            <!-- 左侧输入框与树形控件 -->
            <el-col :span="5">
                    <el-col class="h48 pl15 pr15" :span="24">
                        <el-autocomplete
                        v-model="searchLeft"
                        :fetch-suggestions="querySearchAsync"
                        class="search_input"
                        placeholder="搜索..."
                        >
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        </el-autocomplete>
                    </el-col>
                    <el-col :span='24' class="tree-container" >
                        <!-- 树形控件 -->
                        <el-tree>
                        </el-tree>
                    </el-col>   
            </el-col>
            <!-- 右边数据列表 -->
            <el-col :span='19' class="border-left">
                <!-- 按钮组 -->
                <el-row class="h48 pt5">
                    <button @click="goAdd" class="erp_bt bt_add">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_add.png">
                        </div>
                        <span class="btDetail">新增</span>
                    </button>
                    <button @click="delSelected" class="erp_bt bt_del">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_del.png">
                        </div><span class="btDetail">删除</span>
                    </button>
                    <button class="erp_bt bt_in">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_inOut.png">
                        </div>
                        <span class="btDetail">导入</span>
                    </button>
                    <button class="erp_bt bt_out">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_inOut.png">
                        </div>
                        <span class="btDetail">导出</span>
                    </button>
                    <div class="search_input_group">
                        <div class="search_input_wapper">
                            <el-input
                                placeholder="搜索..."
                                class="search_input">
                                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                            </el-input>
                        </div>
                        <div class="search_button_wrapper" @click="dialogUserDefined = true">
                            <button class="userDefined">
                                <i class="fa fa-cogs" aria-hidden="true"></i>自定义
                            </button>
                        </div>
                    </div>
                </el-row>
                <!-- 数据列表 -->
                <el-row>
                    <el-col :span='24'>
                        <el-table v-loading="tableLoading" :data="tableData" style="width: 100%" stripe @selection-change="handleSelectionChange" border ref="multipleTable">
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="areaCode" label="供应商分类编码">
                                <template slot-scope="scope">
                                    <el-button type="text" @click="modify(scope.row)">{{tableData[scope.$index].areaCode}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="areaName" label="供应商分类名称">
                                <template slot-scope="scope">
                                    <el-button type="text"  @click="modify(scope.row)">{{tableData[scope.$index].areaName}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="manager" label="上级供应商分类">
                            </el-table-column>
                            <el-table-column prop="remark" label="备注">
                            </el-table-column>
                            <el-table-column prop="status" label="状态">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.status=='1'" style="color:#39CA77;">启用</span>
                                    <span v-else-if="scope.row.status=='0'" style="color:#FF6666;">停用</span>
                                    <span v-else >冻结</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="createdBy" label="创建人"></el-table-column>
                            <el-table-column label="创建时间">
                                <template slot-scope="scope">
                                    <el-date-picker 
                                    format="yyyy-MM-dd"
                                    value-format="yyyy-MM-dd" 
                                    v-model="tableData[scope.$index].createdTime" 
                                    type="datetime" 
                                    readonly
                                    align="center"
                                    placeholder=""></el-date-picker>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                 <template slot-scope="scope">
                                    <!-- <el-button type="text"  @click="modify(scope.row)" >修改</el-button> -->
                                    <el-button type="text"  @click="confirmDelThis(scope.row)" >删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination
                        style="margin-top:20px;" 
                        class="text-right" 
                        background layout="total,prev, pager, next,jumper" 
                        @current-change="handleCurrentChange"
                        :current-page="pageIndex"
                        :page-size="oneItem"
                        :total="totalItem">
                        </el-pagination>   
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
         name: "supplierClassifyList",
         data(){
             return{

             }
         },
         created(){

         },
         methods:{
           // 按钮增加----去新增详情页(detail)
            goAdd(){
                //点击切换路由去添加
                this.$store.state.url = "/supplierClassify/supplierClassifyDetail/default";
                this.$router.push({ path: this.$store.state.url });
            },
         },
    }
</script>

 <style scoped>
    .error_tips{
        height: 15px;
        line-height: 15px;
        color: #f66;
    }
    .dialogBtn{
        display: block;
        float: left;
        width: 50%;
        height: 100%;
        background-color: #fff;
        color: #c9c9c9;
        border: none;
        border-top: 1px solid #c9c9c9;
        outline: none;
        cursor: pointer;
    }
    .dialogBtn:focus{
        outline: none;
    }
    .dialog-footer .dialogBtn:first-child{
    border-right: 1px solid #c9c9c9;
    }
    .dialog-footer{
        padding:0;
        height: 50px;
    }
    .dialogBtn:hover{
        color: #6699FF;
    }
    .TreeMenu{
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100px;
        height: 100px;
    }
    .TreeMenu button{
        display: block;
        width: 100%;
        height: calc(100% / 3);
    }
    .formSearch{
        float: right;
    }
    .bg-white{
        background: white;
        border-radius: 3px;
    }
    .h48{
        height: 48px;
        line-height: 48px;
        border-bottom: 1px solid #E4E4E4;
    }
    .pl15{
        padding-left: 15px;
    }
    .pr15{
        padding-right: 15px;
    }
    .pt5{
        padding-top: 5px;
    }
    .border-left{
        border-left: 1px solid #E4E4E4;
        min-height: 380px;
    }
</style>