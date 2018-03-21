<template>
    <div class="list-wrapper">
        <el-row class="bg-white">
            <el-col :span="5">
                <el-col class="pl15 pr15" :span="24">
                    <el-input placeholder="请选择会计方案"
                              v-model="searchLeft" 
                              class="bAreaSearch">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                    <el-input placeholder="搜索..."
                              v-model="searchLeft" 
                              class="bAreaSearch">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </el-col>

                <el-col :span='24' class="tree-container" >
                    <el-tree oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none"
                             v-loading="treeLoading" 
                             :data="componyTree"
                             :props="defaultProps"
                             node-key="id"
                             default-expand-all
                             ref="tree"
                             :expand-on-click-node="false"
                             :filter-node-method="filterNode"
                             @node-click="nodeClick">
                    </el-tree>
                </el-col> 
            </el-col>

            <el-col :span='19' class="border-left">
                <el-row class="h48 pt5">
                    <button class="erp_bt bt_add" @click="goDetail">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_add.png">
                        </div>
                        <span class="btDetail">新增</span>
                    </button>

                    <button class="erp_bt bt_del" @click="delRow">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_del.png">
                        </div>
                        <span class="btDetail">删除</span>
                    </button>
                    <!-- @click="save" -->
                    <button class="erp_bt bt_save" >
                        <div class="btImg">
                        <img src="../../../static/image/common/bt_save.png">
                        </div>
                        <span class="btDetail">保存</span>
                    </button>
                    
                    <button class="erp_bt bt_saveAdd">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_saveAdd.png">
                        </div>
                        <span class="btDetail">保存并新增</span>
                    </button>

                    <button class="erp_bt bt_out">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_inOut.png">
                        </div>
                        <span class="btDetail">导出</span>
                    </button>

                    <div class="toggle-btn">
                        <span @click='ifShow = !ifShow'>收起</span>
                        <i class="el-icon-arrow-up"></i>
                    </div>
                </el-row>

                <el-collapse-transition>
                    <div v-show="ifShow" class="bb1">
                        <div class="bgcolor">
                            <label><small>*</small>会计年份</label>
                            <el-input placeholder=""
                                      class="periodYear" 
                                      v-model="eachPage"></el-input>
                                      <!-- :class="{redBorder : validation.hasError('createAccountParams.periodYear')}" -->
                        </div>

                        <div class="bgcolor">
                            <label><small>*</small>期间个数</label>
                            <el-input placeholder=""
                                      class="periodNum"
                                      v-model="eachPage"></el-input>
                                      <!-- :class="{redBorder : validation.hasError('createAccountParams.periodNum')}" -->
                        </div>

                    </div>
                </el-collapse-transition>
                <el-row class="pl10 pt10 pr10 pb10">
                    <el-col :span="24">
                        <el-table :data="allList" border style="width: 100%" stripe @selection-change="handleSelectionChange">

                            <el-table-column type="selection"></el-table-column>

                            <el-table-column prop="periodYear" label="会计年份"></el-table-column>

                            <el-table-column prop="periodNum" label="期间个数"></el-table-column>

                            <el-table-column prop="beginDate" label="开始日期"></el-table-column>

                            <el-table-column prop="endDate" label="结束日期"></el-table-column>

                            <!-- <el-table-column prop="contactClassId" label="备注">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.remark" 
                                            v-on:click="handleEdit(scope.$index,scope.row)"
                                            @change='handleChange(scope.$index,scope.row)'
                                            type="text"/>
                                </template>
                            </el-table-column> -->
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button v-on:click="goModify(scope.row.id)" type="text" size="small">查看</el-button>
                                    <el-button v-on:click="handleDel(scope.row.id)" type="text" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>

                        <el-row>
                            <el-col :span='6'>
                                <div style="margin-top:20px;" class="ml10">
                                        记录<span>{{total}}</span>，当前第<span>{{page}}</span>页，共<span>{{totalPage}}</span>页
                                </div>
                                
                            </el-col>
                            <el-col :span="18">
                                <el-pagination style="margin-top:20px;" class="text-right" background layout="total, prev, pager, next"  :page-count="totalPage" v-on:current-change="handleCurrentChange"></el-pagination>
                            </el-col>
                        </el-row>
                        
                    </el-col>
                </el-row>

            </el-col>
        </el-row>
        
    </div>
</template>

<script>
    export default{
        name:'currencyList',
        data(){
            return {
                allList:[],//所有数据列表
                updateList:[],//修改的数据
                addList:[],//新增的数据
                multipleSelection: [],//复选框选中数据     
                pageIndex:-1,//分页的当前页码
                totalPage:0,//当前分页总数
                total:'',//数据总条数
                page:1,//当前页
                eachPage:10,//一页显示的数量
                x:0,//增行的下标
                rows:[],//增行的数组
                ifShow:true,//控制折叠页面
                createParams:{
                    "group_id": 1,
                    "currency_code": "",
                    "currency_name": "",
                    "increment": '',
                    "seq": '',
                    "status": '',
                    "remark": ""
                },
                options: [{
                    value: '选项1',
                    label: '仓库'
                    }, {
                    value: '选项2',
                    label: '地址'
                    }, {
                    value: '选项3',
                    label: '总部'
                    }, {
                    value: '选项4',
                    label: '总部2'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
            }
        },
        created:function(){
            this.loadAllList();
            
        },
        methods:{
        //---获取数据-------------------------------------------------------
            loadAllList:function(){//获取所有列表数据
                let self = this;
                this.$axios.gets('/api/services/app/Accperiod/GetAll',{SkipCount:(self.page-1)*self.eachPage,MaxResultCount:self.eachPage}).then(function(res){
                    console.log(res);
                    self.allList = res.result.items;
                    $.each(self.allList,function(index,value){
                        let beginDate = value.beginDate.slice(0,value.beginDate.indexOf('.')).replace('T',' ');
                        self.allList[index].beginDate = beginDate;
                        let endDate = value.endDate.slice(0,value.endDate.indexOf('.')).replace('T',' ');
                        self.allList[index].endDate = endDate;
                    })
                    self.total = res.result.totalCount;
                    self.totalPage = Math.ceil(self.total/self.eachPage)
                },function(res){
                    console.log('err'+res)
                })
            },
        //------------------------------------------------------------------

        // ---创建数据，修改数据---------------------------------------------
        // save:function(){//点击保存按钮
        //     let self = this;
        //     if(self.addList.length>0){
        //         for(let i in self.addList){
        //             this.$axios.posts('/api/services/app/CurrencyManagement/Create',self.addList[i]).then(function(res){         
        //                 self.open('创建货币资料成功','el-icon-circle-check','successERP');
        //                 console.log(res)
        //             }),function(res){
        //                 self.open('创建货币资料失败','el-icon-error','faildERP');
        //             };
        //         }
        //        };
            
        //     if(self.updateList.length>0){
        //         for(let i in self.updateList){
        //             this.$axios.puts('/api/services/app/CurrencyManagement/Update',self.updateList[i]).then(function(res){
        //                     console.log(res);
        //                     self.open('修改货币资料成功','el-icon-circle-check','successERP');
        //                     self.updateList = [];
        //                 }),function(res){
        //                 self.open('修改货币资料失败','el-icon-error','faildERP');
        //             };
        //         }
        //     }
        // },
        // addCol:function(){//增行
        //         let self = this;
        //         self.x++;
        //         let newCol = 'newCol'+self.x;
        //         console.log(newCol)
        //         console.log(self.rows)
        //         self.rows.newCol ={
        //             "group_id": 1,
        //             "currency_code": "",
        //             "currency_name": "",
        //             "increment": '',
        //             "seq": '',
        //             "status": '',
        //             "remark": ""
        //         };
        //         self.allList.unshift(self.rows.newCol);
        //         self.addList.unshift(self.rows.newCol);
        //     },
        //-----------------------------------------------------------------

        //---控制删除及分页--------------------------------------------------
            delRow:function(){//删除选中的项
                let _this=this;
                if(_this.multipleSelection.length>0){//表格
                    for(let i=0;i<_this.multipleSelection.length;i++){
                        _this.$axios.deletes('/api/services/app/Accperiod/Delete',{id:_this.multipleSelection[i].id})
                        .then(function(res){
                            _this.loadAllList();
                            _this.open('删除成功','el-icon-circle-check','successERP');
                        },function(res){
                            _this.open('删除失败','el-icon-error','faildERP');
                        })
                    }
                };
            },
            handleSelectionChange:function(val){//点击复选框选中的数据
                this.multipleSelection = val;
                console.log(this.multipleSelection)
            },
            handleCurrentChange:function(val){//获取当前页码
                this.pageIndex=val;
                console.log(val)
                this.page = val;
                this.loadAllList();
            },
            // handleEdit:function(index,row){//表格内编辑操作
                
            // },
            // handleChange:function(index,row){
            //     let self = this;
            //     let flag = false;
            //     if(self.updateList.length==0){
            //         flag = true;
            //     }else if(self.updateList.length>=1){
            //         for(let i in self.updateList){
            //             if(row.id != self.updateList[i].id){
            //                 flag = true;
            //                 console.log(flag) 
            //             }else{
            //                 flag= false;
            //                 break;        
            //             }
            //         }
            //     }

            //     if(flag){
            //         self.updateList.push(row);
            //         console.log(self.updateList)
            //     }
                
            // },
            handleDel:function(id){//每行右边的删除
                let self = this;
                // self.addList.splice(index,1);
                this.$axios.deletes('/api/services/app/Accperiod/Delete',{id:id}).then(function(res){
                    console.log(res);
                    self.open('删除成功','el-icon-circle-check','successERP');
                    self.loadAllList();
              })
            },
        //------------------------------------------------------------------
        //---跳转-----------------------------------------------------------
        goDetail(){
            this.$store.state.url='/account/accountDetail/default'
            this.$router.push({path:this.$store.state.url})//点击切换路由
        },
        goModify:function(id){//点击跳转修改页modify
            // this.$store.state.url='/customer/customerModify/default'
            this.$store.state.url='/account/accountModify/'+id;
            this.$router.push({path:this.$store.state.url})//点击切换路由
        },
        //------------------------------------------------------------------
        // --------------open----------------------------------------------
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
        //------------------------------------------------------------------
    }
}
</script>

<style scoped>
.bg-white{
    background: white;
    border-radius: 3px;
}
.input-need{
    border:none;
    outline: none;
    width: 100%;
    height: 23px;
    line-height: 23px;
}
.h48{
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #E4E4E4;
}
.mt5{
    margin-top: 5px;
}
.mt10{
    margin-top: 10px;
}
.mt20{
    margin-top: 20px;
}

.ml10{
    margin-left: 10px;
}
.pl10{
    padding-left: 10px;
}
.pl15{
    padding-left: 15px;
}
.pt10{
    padding-top: 10px;
}
.pt5{
    padding-top: 5px;
}
.pt20{
    padding-top: 20px;
}
.pb10{
    padding-bottom: 10px;
}
.pr10{
    padding-right: 10px;
}
.h30{
    height: 30px;
    line-height: 30px;
}
.border1{
    border: 1px solid #cccccc;
    border-radius: 3px;
}
.text-right{
    text-align: right;
}
.input-bgw{
    background: white;
    text-align: center;
}
.input-bgp{
    background: #FAFAFA;
    text-align: center;
}
.border-left{
    border-left: 1px solid #E4E4E4;
    min-height: 380px;
}
.toggle-btn{
    cursor: pointer;
    font-size: 12px;
    float: right;
    margin-right: 20px;
    height: 36px;
    line-height: 36px;
}
.bb1{
    border-bottom: 1px solid #cccccc;
}
</style>

<style>
/* 重写checkbox */
.list-wrapper .el-checkbox__inner{
    width: 18px;
    height: 18px;
    border-radius:50% !important; 
}
.list-wrapper .el-checkbox__inner::after{
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    content: "";
    border: 3px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 11px;
    left: 6px;
    position: absolute;
    top: 1px;
    -webkit-transform: rotate(45deg) scaleY(0);
    transform: rotate(45deg) scaleY(0);
    width: 6px;
    -webkit-transition: -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms,-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    -webkit-transform-origin: center;
    transform-origin: center;
}

/* 重写el-table样式 */
.list-wrapper .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.list-wrapper .el-table td{
    padding: 3px 0;
}
.list-wrapper .el-table__body{
    text-align: center;
}
</style>