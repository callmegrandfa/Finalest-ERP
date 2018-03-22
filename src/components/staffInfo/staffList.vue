<template>
    <div class="staffList-wrapper" style="float:left;background:#fff;width:100%;">
        <el-col  :span="ifWidth?6:0" v-show="ifWidth">
            <el-row class="bg_White" id="left-box">
                    <el-col>
                        <el-row class="h48 topSearch">
                            <el-col :span="18" class="pl10">
                                <img src="../../../static/image/common/search_btn.png">
                                <span class="topSearch">查询</span>
                            </el-col>
                            <el-col :span="5">
                                <div class="circle" @click="closeLeft"><span class="circleContent">-</span></div>
                            </el-col>
                        </el-row>
                        <div style="margin-top:20px" class="formWrap">
                           <el-form ref="form" :model="formList" label-width="80px" size="mini">      
                                <el-form-item label="职员编码">
                                    <el-input v-model="formList.EmployeeCode"></el-input>
                                </el-form-item>
                                <el-form-item label="职员名称">
                                    <el-input v-model="formList.EmployeeName"></el-input>
                                </el-form-item>
                                <el-form-item label="业务组织">
                                    <el-select v-model="formList.OuId">
                                    <el-option label="恒康" value="0"></el-option>
                                    <el-option label="总部" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="部门">
                                    <el-select v-model="formList.DeptId">
                                    <el-option label="采购" value="0"></el-option>
                                    <el-option label="店铺" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="所属店铺">
                                    <el-select v-model="formList.ShopId">
                                    <el-option label="测试店铺1" value="2"></el-option>
                                    <el-option label="测试店铺0" value="0"></el-option>
                                    </el-select>
                                </el-form-item>
                          </el-form>
                        </div>
                        <el-row>
                            <el-col :span="8">&nbsp;</el-col>
                            <el-col style="text-align:center;margin-bottom:20px;" :span="14">
                                <span class="search-btn" @click="search"  style="float:left;margin-left:10px;">查询</span>
                            </el-col>
                        </el-row>
                    </el-col>
            </el-row>
        </el-col>
        <el-col :span="ifWidth?18:24">
            <div id="bgc">
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
                    
                    <el-col :span="22" class="border-left">
                                <el-row class="h48">
                                    <el-col :span="16" class="pt5">
                                            <button class="erp_bt bt_add" @click="addStaff">
                                            <div class="btImg">
                                                <img src="../../../static/image/common/bt_add.png">
                                            </div>
                                            <span class="btDetail">新增</span>
                                        </button>


                                        <button class="erp_bt bt_del" @click="confirmDelSelected" :disabled="isTrue">
                                            <div class="btImg">
                                                <img src="../../../static/image/common/bt_del.png">
                                            </div>
                                            <span class="btDetail">删除</span>
                                        </button>

                                        
                                        <button class="erp_bt bt_auxiliary">
                                            <div class="btImg">
                                                <img src="../../../static/image/common/bt_auxiliary.png">
                                            </div>
                                            <span class="btDetail">辅助功能</span>
                                        </button>


                                        <button class="erp_bt bt_excel">
                                            <div class="btImg">
                                                <img src="../../../static/image/common/bt_excel.png">
                                            </div>
                                            <span class="btDetail">Excel</span>
                                        </button>

                                        <button class="erp_bt bt_print">
                                            <div class="btImg">
                                                <img src="../../../static/image/common/bt_print.png">
                                            </div>
                                            <span class="btDetail">打印</span>
                                        </button>
                                    </el-col>
                                    <el-col :span="5">
                                        <div class="search-input">
                                            <el-input
                                                placeholder="搜索..."
                                                prefix-icon="el-icon-search"
                                                v-model="searchContent" @change="searchTable"
                                                >
                                            </el-input>
                                        </div>
                                    </el-col>
                                    <el-col :span="1" class="defineBtn">
                                        <el-button round size="mini" icon="el-icon-setting" disabled>自定义</el-button>
                                    </el-col>
                                </el-row>
                    </el-col>
                </el-row> 
                 <el-row class="pb10">
                        <div id="bg-white" style="background-color: rgba(251, 252, 253, 1);">
                            <el-table  :data="allList" border style="width: 100%"  @selection-change="handleSelectionChange"  stripe>
                                <el-table-column type="selection" width="50">
                                </el-table-column>
                                <el-table-column prop="employeeCode" label="职员编码"  >
                                    <template slot-scope="scope">
                                        <el-button type="text" size="small" @click="checkDetail(scope.row)">{{allList[scope.$index].employeeCode}}</el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="employeeName" label="职员名称"   > 
                                    <template slot-scope="scope">
                                        <el-button type="text" size="small" @click="checkDetail(scope.row)">{{allList[scope.$index].employeeName}}</el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="ouFullname" label="业务组织"  >
                                </el-table-column>
                                <el-table-column prop="mobile" label="手机号码" >
                                </el-table-column>
                                <el-table-column prop="deptName" label="所属部门"
                                            >
                                </el-table-column>
                                            <el-table-column prop="sexTValue" label="性别"
                                            >
                                </el-table-column>
                                <el-table-column prop="birthday" label="生日"
                                            >
                                </el-table-column>
                                <el-table-column prop="employeeTypes[0].employeeTypeidTValue" label="职员类型" >
                                </el-table-column>
                                <el-table-column prop="shopName" label="所属店铺"
                                            >
                                </el-table-column>
                                <el-table-column label="操作" width="120">
                                <template slot-scope="scope">
                                    <el-button @click="checkDetail(scope.row)" type="text" size="small">查看</el-button>
                                    <el-button type="text" size="small" @click="confirmDelThis(scope.row)">删除</el-button>
                                </template>
                                </el-table-column>
                            </el-table>
                            <!-- 分页器 -->
                            <!-- <div class="fenyeqi">
                                <el-row :gutter="24">
                                    <el-col  :offset="12">
                                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageIndex" :page-sizes="[10, 20, 30, 40]" :page-size="page_size" layout="total, sizes, prev, pager, next, jumper" :total="totalCount">
                                        </el-pagination>
                                    </el-col>
                                </el-row> 
                            </div>   -->
                            <el-row class="fenyeqi">
                                <el-col :span="18">
                                     <p>共<span class="colorRed">{{totalCount}}</span>条，当前第<span class="colorRed">{{pageIndex}}</span>页，共<span class="colorRed">{{totalPage}}</span>页，每页行数<button class="bgC">{{page_size}}</button>，第<button class="bgC">{{pageIndex}}</button>页 </p>
                                </el-col>
                                <el-col :span="6">
                                    <el-pagination  background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageIndex" :page-sizes="[10, 20, 30, 40]" :page-size="page_size" layout=" prev, pager, next" :total="totalCount">
                                        </el-pagination>
                                    
                                </el-col>

                            </el-row>
                         </div> 
                </el-row>
            </div>
        </el-col>   	    
       
    </div>
</template>

<script>
    export default {
    name: "staffList",
    data() {
        return {
        allList: [], //所有数据
        formList:{//查询所需的查询字符串
            EmployeeCode:'',
            EmployeeName:'',
            OuId:'',
            DeptId:'',
            ShopId:'',
        },
        isTrue:true,//批量删除键能否点击
        totalCount: 0,
        searchContent: "",
        info: {
            up: "",
            demand: [
            { must: "", title: "职员编码", place: "" },
            {
                must: "",
                title: "职员名称",
                options: [
                { value: "选项1", label: "仓库" },
                { value: "选项2", label: "地址" },
                { value: "选项3", label: "总部" },
                { value: "选项4", label: "总部2" },
                { value: "选项5", label: "北京烤鸭" }
                ],
                place: ""
            },
            {
                must: "",
                title: "业务组织",
                options: [
                { value: "选项1", label: "仓库" },
                { value: "选项2", label: "地址" },
                { value: "选项3", label: "总部" },
                { value: "选项4", label: "总部2" },
                { value: "选项5", label: "北京烤鸭" }
                ]
            },
            {
                must: "",
                title: "部门",
                options: [
                { value: "选项1", label: "仓库" },
                { value: "选项2", label: "地址" },
                { value: "选项3", label: "总部" },
                { value: "选项4", label: "总部2" },
                { value: "选项5", label: "北京烤鸭" }
                ]
            },
            {
                must: "",
                title: "店铺",
                options: [
                { value: "选项1", label: "仓库" },
                { value: "选项2", label: "地址" },
                { value: "选项3", label: "总部" },
                { value: "选项4", label: "总部2" },
                { value: "选项5", label: "北京烤鸭" }
                ]
            }
            ]
        },
        selectedIds: {}, //复选框选中数据
        tableData: [],
        ifWidth: true, //控制左侧搜索展开
        pageIndex: 1, //分页的当前页码
        totalPage: 0, //当前分页总数
        page_size: 10 //每页有多少条信息
        };
    },
    created: function() {
        this.getAllList();
    },
    methods: {
        // 获取所有数据，默认渲染所有数据
        getAllList: function() {
            let _this = this;
            _this.$axios
                .gets("/api/services/app/EmployeeManagement/GetAll", {
                SkipCount: (_this.pageIndex - 1) * _this.page_size,
                MaxResultCount: _this.page_size
                })
                .then(rsp => {
                _this.allList = rsp.result.items;
                _this.totalCount = rsp.result.totalCount;
                _this.totalPage=Math.ceil(rsp.result.totalCount/_this.page_size);
                // console.log(_this.allList);
                // console.log(rsp.result.items);
                });
        },

        // 左侧搜索展开--------------------------------
        closeLeft: function() {
            let self = this;
            self.ifWidth = false;
        },
        openLeft: function() {
            let self = this;
            self.ifWidth = true;
        },
        // ------------------------------------------
        // 左边查询按钮
        search() {
            let _this=this;
            // console.log( _this.formList)
            _this.$axios.gets('/api/services/app/EmployeeManagement/GetAll', 
            { EmployeeCode: _this.formList.EmployeeCode,
                    EmployeeName: _this.formList.EmployeeName,
                    OuId: _this.formList.OuId,
                    DeptId: _this.formList.DeptId,
                    DeptId: _this.formList.DeptId,
                    SkipCount:(_this.pageIndex - 1) * _this.page_size,
                    MaxResultCount:_this.page_size,
            }).then(    
                rsp=>{
                // console.log( rsp.success);
                // console.log( rsp.result);
                _this.allList = rsp.result.items;
                _this.totalCount = rsp.result.totalCount;
                }
            )
        },
        // 右边搜索框---只能搜索一个字段
        searchTable(){
            let _this=this;
            this.$axios.gets('/api/services/app/EmployeeManagement/GetAll',{EmployeeName:_this.searchContent,SkipCount:(_this.pageIndex - 1) * _this.page_size,MaxResultCount:_this.page_size}).then(
                rsp=>{
                    // console.log(rsp.success);
                     _this.allList = rsp.result.items;
                    _this.totalCount = rsp.result.totalCount;
                    
                }
            )
        },
        // 复选框中选中的数据(用于做批量删除)
        handleSelectionChange: function(arr1) {
            let _this = this;
            _this.selectedIds.ids = [];
            for (let val of arr1) {
                _this.selectedIds.ids.push(val.id);
            }
            _this.isTrue=false;
            // console.log(_this.selectedIds);
        },
        // 提示信息
        open(tittle, iconClass, className) {
            this.$notify({
                position: "bottom-right",
                iconClass: iconClass,
                title: tittle,
                showClose: false,
                duration: 3000,
                customClass: className
            });
        },
        // 添加数据
        addStaff: function() {
            //点击切换路由去添加
            this.$store.state.url = "/staff/staffDetail/default";
            this.$router.push({ path: this.$store.state.url });
        },
        // 确认是否按钮删除(删除选中的----批量删除)
        confirmDelSelected: function() {
            let _this = this;
            _this
                .$confirm("确定删除?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
                center: true
                })
                .then(() => {
                //确认
                _this.delSelected();
                })
                .catch(() => {
                //取消
                });
        },
        delSelected: function() {
            let _this = this;
            this.$axios
                .posts(
                "/api/services/app/EmployeeManagement/BatchDelete",
                _this.selectedIds
                )
                .then(res => {
                if (!res.success) {
                    _this.open("删除失败", "el-icon-error", "faildERP");
                }
                _this.open("删除成功", "el-icon-circle-check", "successERP");
                this.getAllList();
                });
        },
        // （行内按钮查看）查看详情
        checkDetail: function(row) {
            // console.log(row.id)
            this.$store.state.url = "/staff/staffModify/" + row.id;
            this.$router.push({ path: this.$store.state.url });
        },
        // 确认是否删除本条数据
        confirmDelThis: function(row) {
            let _this = this;
            _this
                .$confirm("确定删除?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
                center: true
                })
                .then(() => {
                //确认
                _this.delRow(row);
                })
                .catch(() => {
                //取消
                _this.$message({
                    type: "info",
                    message: "已取消删除"
                });
                });
        },
        // 行内删除
        delRow: function(row) {
            this.$axios
                .deletes("/api/services/app/EmployeeManagement/Delete", { id: row.id })
                .then(rsp => {
                this.getAllList();
                this.open("删除成功", "el-icon-circle-check", "successERP");
                });
        },
        // 每页数据条数改变
        handleSizeChange(val) {
            // console.log(`每页 ${val} 条`);
            this.page_size = val;
            this.getAllList();
        },
        // 当前页改变
        handleCurrentChange(val) {
            this.pageIndex = val;
            this.getAllList();
        }
    },
    mounted: function() {
        let content1 = document.getElementById("bg-white"); //设置高度为全屏
        let height1 = window.innerHeight - 123;
        content1.style.minHeight = height1 + "px";
    }
    };
</script>

<style scoped>
.bg_White {
    background: white;
    border-radius: 3px;
}
.lh48 {
    line-height: 48px;
}
.topSearch {
  font-size: 18px;
}
.topSearch .pl10 {
  padding-left: 10px;
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
.formWrap {
    width: 80%;
    padding-left: 20px;
}
 .staffList-wrapper .el-select {
     display:block;
     height: 30px;
 }
 .h48 {
  height: 48px;
  line-height: 48px;
  border-bottom: 1px solid #e4e4e4;
}
.pt5 {
  padding-top: 5px;
}

.search-btn {
  font-size: 12px;
  display: inline-block;
  width: 87px;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  background: #4a6997;
  color: white;
  cursor: pointer;
}
.defineBtn{
   padding-left: 20px;
}
.pb10 {
  padding-bottom: 10px;
}

.border-left {
  border-left: 1px solid #e4e4e4;
}
.circleContent {
  display: inline-block;
  position: absolute;
  top: 4%;
  left: 25%;
  height: 1px;
  width: 1px;
  line-height: 10px;
}
.fenyeqi{
    margin-top:10px;
    padding-left: 10px;
    font-size: 12px;
}
.colorRed{
    color:red ;
}
.bgC{
    background-color: #fff;
    color: #000;
    border: 1px solid #ccc;
    width: 30px;
    border-radius: 3px;

}

</style>

<style>
  .staffList-wrapper .el-input--prefix .el-input__inner {
        padding-left: 30px;
        border-radius: 30px;
        border-color:rgb(194, 202, 216);
        height: 30px;
    }
    .staffList-wrapper .el-icon-search:before {
    content: "\E619";
    font-size: 18px;
    font-weight: 900;
    color: rgb(83, 84, 86);
}
.staffList-wrapper .el-input__inner {
    border: 1px solid #dcdfe6 !important;
}
.staffList-wrapper .el-form-item__label{
    font-size: 12px;
    color: #000;
}
.staffList-wrapper  .el-table th>.cell{
    color: #000;
    font-size: 12px;
}
</style>

