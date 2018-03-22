<template>
    <div class="count-wrapper" style="float:left;background:#fff;width:100%;">
        <!-- 左边搜索栏 -->
        <el-col :span="ifWidth?6:0" v-show="ifWidth" class="bgWhite" id="bg-white">
            <el-row class="h48 topSearch" id="left-box">
                    <el-col :span="18" class="pl10">
                        <img src="../../../static/image/common/search_btn.png">
                        <span class="topSearch">查询</span>
                    </el-col>
                    <el-col :span="5">
                        <div class="circle" @click="closeLeft"><span class="circleContent">-</span></div>
                    </el-col>
            </el-row>
            <el-row style="margin-top:20px">
                <el-form ref="dataList" :model="dataList" label-width="80px"  class="formWidth">
                    <el-form-item label="单位编码">
                        <el-input v-model="dataList.unitCode"></el-input>
                    </el-form-item>
                    <el-form-item label="单位名称">
                        <el-input v-model="dataList.unitName"></el-input>
                    </el-form-item>
                    <el-form-item label="基本单位">
                        <el-select v-model="dataList.region" placeholder="">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-select v-model="dataList.region" placeholder="">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button>查询</el-button>
                    </el-form-item>
                </el-form>

            </el-row>
        </el-col>
        <!-- 右边部分 -->
        <el-col :span="ifWidth?18:24">
            <div>
                <el-row class="h48">
                     <el-col :span='2' class="search-block"  v-show="!ifWidth">
                        <div style="display:inline-block" @click="openLeft">
                            <img src="../../../static/image/common/search_btn.png">
                        </div>
                        <div style="display:inline-block;margin-left:2px;font-size:16px;" @click="openLeft">
                            <span>查询</span>
                        </div>
                        <div class="out-img" @click="openLeft">
                            <span>+</span>
                        </div>
                    </el-col>
                    <!-- 按钮 -->
                    <el-col :span="22" class="h48">
                        <el-row class="h48">
                                <el-col :span="18" class="pt5">
                                            <button class="erp_bt bt_add" >
                                            <div class="btImg">
                                                <img src="../../../static/image/common/bt_add.png">
                                            </div>
                                            <span class="btDetail">新增</span>
                                        </button>


                                        <button class="erp_bt bt_cancel" >
                                            <div class="btImg">
                                                <img src="../../../static/image/common/bt_cancel.png">
                                            </div>
                                            <span class="btDetail">取消</span>
                                        </button>


                                        <button class="erp_bt bt_save" >
                                            <div class="btImg">
                                                <img src="../../../static/image/common/bt_save.png">
                                            </div>
                                            <span class="btDetail">保存</span>
                                        </button>


                                        <button class="erp_bt bt_del" >
                                            <div class="btImg">
                                                <img src="../../../static/image/common/bt_del.png">
                                            </div>
                                            <span class="btDetail">删除</span>
                                        </button>
                                        
                                        <button class="erp_bt bt_out">
                                            <div class="btImg">
                                                <img src="../../../static/image/common/bt_inOut.png">
                                            </div>
                                            <span class="btDetail">导出</span>
                                        </button>

                                        <button class="erp_bt bt_start">
                                            <div class="btImg">
                                                <img src="../../../static/image/common/bt_start.png">
                                            </div>
                                            <span class="btDetail">启用</span>
                                        </button>

                                        <button class="erp_bt bt_stop">
                                            <div class="btImg">
                                                <img src="../../../static/image/common/bt_stop.png">
                                            </div>
                                            <span class="btDetail">停用</span>
                                        </button>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row> 
                <el-row class="bgColor">
                    <!-- 树形控件 -->
                    <el-col :span="6">
                        <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                    </el-col>
                    <el-col :span="18">
                        <!-- 输入框 -->
                        <div class="bgcForm">
                            <el-form ref="form" :model="formData" label-width="80px" class="rightForm">
                                <el-form-item label="单位编码">
                                    <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="单位名称">
                                    <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="状态">
                                    <el-input></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-radio-group v-model="formData.radio">
                                    <el-radio label="1">基本单位</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </el-form>
                        </div>
                        
                        <div>
                            <!-- tab栏 -->

                            <div class="borderBtm">
                                <el-col :span="22">
                                    <!-- <el-tabs v-model="tabName" @tab-click="handleClick">
                                        <el-tab-pane label="多单位" name="1"></el-tab-pane>
                                    </el-tabs> -->
                                    <button class="btnBorder">多单位</button>

                                </el-col>
                                <el-col :span="2">
                                    <div class="pickUp">
                                        <span>收起<i class="el-icon-arrow-down"></i></span>
                                    </div>
                                </el-col>
                            </div>
                            <!-- 按钮 -->
                            <el-row class="btnHeight">
                                <button class="erp_bt bt_save" >
                                    <div class="btImg">
                                        <img src="../../../static/image/common/increment.png">
                                    </div>
                                    <span class="btDetail">增行</span>
                                </button>
                                <button class="erp_bt bt_cancel" >
                                    <div class="btImg">
                                        <img src="../../../static/image/common/eraseline.png">
                                    </div>
                                    <span class="btDetail">删行</span>
                                </button>
                            </el-row>
                            <!-- 表格 -->
                            <el-row class="tableSize">
                                <el-table :data="tableList" border style="width: 100%">
                                    <el-table-column prop="" label="序号" width="50">
                                    </el-table-column>
                                    <el-table-column prop="" label="" width="180">
                                    </el-table-column>
                                    <el-table-column prop="" label="多单位">
                                    </el-table-column>
                                    <el-table-column prop="" label="系数" width="180">
                                    </el-table-column>
                                    <el-table-column prop="" label="备注" width="180">
                                    </el-table-column>
                                    <el-table-column prop="" label="操作">
                                    </el-table-column>
                                </el-table>
                            </el-row>
                            
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-col>
    </div>
</template>
<script>
    export default {
        name:'countList',
        data(){
            return {
                ifWidth:true,
                dataList:{ 
                    unitCode:'',
                    unitName:'',
                    },
                treeData: [
                    { label: '计量单位',children: [
                        {label: '个'},
                        {label: '箱'}]
                    },
                ],
                defaultProps: {
                children: 'children',
                label: 'label'
                },
                formData:{
                     radio:'1',
                },
                tabName:'1',
                tableList:[],
                

            }
        },
        created:function () {  
            this.loadAll();
        },
        methods:{
            // 左侧搜索栏的收起与展开
            closeLeft: function() {
            let self = this;
            self.ifWidth = false;
            },
            openLeft: function() {
                let self = this;
                self.ifWidth = true;
            },
            // 获取所有数据
            loadAll(){
                let _this=this;
                _this.$axios.gets('/api/services/app/UnitManagement/GetAll',{
                    MaxResultCount:10,SkipCount:0,
                }).then(
                    rsp=>{
                        console.log(rsp.success);
                        console.log(rsp.result);
                        
                    }
                )
            },
            // 树形控件
             handleNodeClick(data) {
                console.log(data);
            },
            // tab栏事件
            handleClick(tab, event){},
        },
        mounted: function() {
            let content1 = document.getElementById("bg-white"); //设置高度为全屏
            let height1 = window.innerHeight - 123;
            content1.style.minHeight = height1 + "px";
        },
    }
</script>
<style scope>
.count-wrapper{
    width: 100%;
    height: 100%;
}
.bgWhite{
    background-color: #fff;
    height: 100%;
    border-right: 1px solid #ccc
}
.formWidth{
    width: 80%;
    padding-left: 10%;
    font-size: 12px;
}
.topSearch {
  font-size: 18px;
}
.topSearch .pl10 {
  padding-left: 10px;
}
.h48 {
  height: 48px;
  line-height: 48px;
  border-bottom: 1px solid #e4e4e4;
}
.pt5{
    padding-top: 5px;
}
.circle {
  display: inline-block;
  height: 15px;
  width: 15px;
  font-weight: 900;
  color: rgb(161, 161, 161);
  border: 1px solid rgb(194, 202, 216);
  border-radius: 50%;
  vertical-align: middle;
  position: relative;
  float: right;
  margin-top: 16px;
  cursor: pointer;
}
.circle .circleContent {
  display: inline-block;
  position: absolute;
  top: 4%;
  left: 25%;
  height: 1px;
  width: 1px;
  line-height: 10px;
}
.bgColor{
    background-color: rgb(251, 252, 253);
}
.borderBtm{
    height: 42px;
    border-bottom: 1px solid #ccc;
    padding-left: 10px;
}
.bgcForm{
    background-color: #fff;
    padding: 10px;
}
.rightForm{
    width: 40%;
}
.rightForm .el-form-item__label{
    font-size: 12px;
    color: #000;
}
.rightForm .el-form-item {
    margin-bottom: 0px;
}
.rightForm .el-input{
    font-size: 12px;
}
.rightForm .el-input__inner{
    height: 30px;
}
/* .borderBtm .el-tabs__item.is-active{
    color: #000;
}
.borderBtm .el-tabs__active-bar{
    background-color: #33cccc;
    width: 50px;
} */
.btnBorder{
    border: none;
    background-color: #fbfcfd;
    border-bottom: 3px solid #33cccc;
    height: 42px;
    cursor: pointer;
}
.borderBtm .pickUp{
    font-size: 12px;height: 42px;
    line-height: 42px;
    float: right;
    padding-right: 5px;
    cursor: pointer;
}
.btnHeight{
    padding: 10px;
}
.count-wrapper .tableSize .el-table th>.cell{
    color: #000;
    font-size: 12px;
}
</style>


<style>
.count-wrapper .formWidth .el-input__inner{
    height:30px !important;

}
.count-wrapper .formWidth .el-form-item__label{
    font-size:12px !important;
    color: #000;
}
.count-wrapper .formWidth .el-form-item{
    margin-bottom: 0px !important;
}
.count-wrapper .formWidth .el-button{
    background: #4a6997;
    color: #fff;
    font-size: 12px;
    padding: 10px 30px;
}
</style>


