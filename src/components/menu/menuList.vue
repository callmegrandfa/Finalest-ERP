<template>
    <div class="menuListForm">
        <el-row class="bg-white">
            <el-col :span="5">
                <el-col class="h48 pl15 pr15" :span="24">
                    <el-input
                        placeholder="搜索..."
                        v-model="searchLeft" class="bAreaSearch">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </el-col>
                <el-col :span='24' class="tree-container" >
                    <el-tree
                    v-loading="treeLoading" 
                    :data="componyTree"
                    :props="defaultProps"
                    node-key="id"
                    default-expand-all
                    ref="tree"
                    :expand-on-click-node="true"
                    :filter-node-method="filterNode"
                    @node-click="nodeClick"
                    :render-content="renderContent"
                    >
                    </el-tree>
                </el-col>   
            </el-col>
            <el-col :span='19' class="border-left">
                <el-row class="h48 pt5 pr10 pl5">
                    <button class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
                    <button @click="goDetail" class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
                    <button @click="delRow" class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
                    <button class="erp_bt bt_start"><div class="btImg"><img src="../../../static/image/common/bt_start.png"></div><span class="btDetail">启用</span></button>
                    <button class="erp_bt bt_stop"><div class="btImg"><img src="../../../static/image/common/bt_stop.png"></div><span class="btDetail">停用</span></button>
                    <button class="erp_bt bt_out bt_width">
                        <div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div>
                        <span class="btDetail">导出</span>
                        <div class="btRightImg"><img src="../../../static/image/common/bt_down_right.png"></div>
                    </button>
                </el-row>

                <el-row>
                    <el-col :span='24'>
                        <el-table v-loading="tableLoading" :data="tableData" style="width: 100%" stripe @selection-change="handleSelectionChange" ref="multipleTable">
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="systemId" label="系统"></el-table-column>
                            <el-table-column prop="moduleCode" label="模块编码"></el-table-column>
                            <el-table-column prop="moduleName" label="模块名称"></el-table-column>
                            <el-table-column prop="url" label="web地址"></el-table-column>
                            <el-table-column prop="moduleParentId" label="上级菜单"></el-table-column>
                            <el-table-column label="状态（无字段）">
                                <template slot-scope="scope">
                                    <el-checkbox disabled></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                 <template slot-scope="scope">
                                    <el-button type="text" size="small">修改</el-button>
                                    <!-- <el-button type="text" size="small"  @click="modify(scope.row)">修改</el-button> -->
                                    <!-- <el-button type="text" size="small"  @click="see(scope.row)" >查看</el-button> -->
                                    <el-button type="text" size="small"  @click="delThis(scope.row)">删除</el-button>
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
    export default{
        name:'customerInfor',
        data(){
            return {
                searchLeft:'',
                options: [{
                    basOuTypes: '1',
                    label: '1'
                    }, {
                    basOuTypes: '2',
                    label: '2'
                    }, {
                    basOuTypes: '3',
                    label: '3'
                    }, {
                    basOuTypes: '4',
                    label: '4'
                    }, {
                    basOuTypes: '5',
                    label: '5'
                    }, {
                    basOuTypes: '6',
                    label: '6'
                    }, {
                    basOuTypes: '7',
                    label: '7'
                    }, {
                    basOuTypes: '8',
                    label: '8'
                    }, {
                    basOuTypes: '9',
                    label: '9'
                    }],
                tableData:[],

                componyTree:  [],
                defaultProps: {
                    children: 'childNodes',
                    label: 'moduleName',
                    id:'id',
                },
                pageIndex:1,//分页的当前页码
                totalPage:0,//当前分页总数
                oneItem:10,//每页有多少条信息
                multipleSelection: [],//复选框选中数据
                page:1,//当前页
                treeCheck:[],
                isClick:[],
                load:true,
                totalItem:0,//总共有多少条消息
                tableLoading:true,
                treeLoading:true,
                Sorting:'',//table搜索
            }
        },
        created:function(){       
                let _this=this;
                _this.loadTableData();
                _this.loadTree();
             },
        mounted:function(){
            let _this=this;
        },  
         watch: {
            searchLeft(val) {
                this.$refs.tree.filter(val);
            }
        },
        methods:{
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
            loadTableData(){//表格
                 let _this=this;
                 _this.tableLoading=true;
                _this.$axios.gets('/api/services/app/ModuleManagement/GetAll',{SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem,Sorting:_this.Sorting}).then(function(res){ 
                    _this.tableData=res.result.items;
                    _this.totalItem=res.result.totalCount
                    _this.totalPage=Math.ceil(res.result.totalCount/_this.oneItem);
                    _this.tableLoading=false;
                    if(_this.tableData==[]){
                        _this.pageIndex=0
                    }
                    console.log(_this.tableData)
                    },function(res){
                    _this.tableLoading=false;
                })
            },
            loadTree(){
                let _this=this;
                _this.treeLoading=true;
                _this.$axios.gets('/api/services/app/ModuleManagement/GetModulesTree')
                .then(function(res){
                    _this.componyTree=res
                    _this.treeLoading=false;
               },function(res){
                   _this.treeLoading=false;
               })
            },
            handleCurrentChange(val) {//页码改变
                 let _this=this;
                 _this.page=val;

                 if(_this.load){
                     _this.loadTableData();
                 }
            },
            SimpleSearch(){//简单搜索
                 let _this=this;
                 _this.tableLoading=true;
                _this.$axios.gets('/api/services/app/OuManagement/SimpleSearch',_this.searchData)
                .then(function(res){
                    _this.load=false
                    _this.tableData=res.result.basOus;
                    _this.tableLoading=false;
                    console.log(res);
                },function(res){
                    console.log('err:'+res)
                    _this.tableLoading=false;
                })
            },
            goDetail(){
                this.$store.state.url='/menu/menuDetail/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
             handleSelectionChange(val) {//点击复选框选中的数据
                this.multipleSelection = val;
                //console.log(val)
            },
            delRow(){
                let _this=this;
                if(_this.multipleSelection.length>0){//表格
                    for(let i=0;i<_this.multipleSelection.length;i++){
                        _this.$axios.deletes('/api/services/app/ModuleManagement/Delete',{id:_this.multipleSelection[i].id})
                        .then(function(res){
                            if(_this.load){
                                _this.loadTableData();
                            }
                            _this.open('删除成功','el-icon-circle-check','successERP');
                        },function(res){
                            _this.open('删除失败','el-icon-error','faildERP');
                            //console.log('err:'+res)
                        })
                    }
                };

                // if(_this.treeCheck.length>0){//tree
                //     for(let i=0;i<_this.treeCheck.length;i++){
                //         _this.$axios.deletes('/api/services/app/DeptManagement/Delete',{id:_this.treeCheck[i]})
                //         .then(function(res){    
                //           _this.loadTree();
                //         },function(res){
                //             console.log('err:'+res)
                //         })
                //     }
                // }

            },
            // checkChange(data,check){
            //     let _this=this;
            //     let add=false;
            //     if(check){
            //         _this.treeCheck.push(data.treeId);
            //     }else{
            //         for(let i=0;i<_this.treeCheck.length;i++){
            //             if(_this.treeCheck[i]==data.treeId){
            //                 _this.treeCheck.splice(i,1);
            //             }
            //         }
            //     }
            // },
            nodeClick(data){
                //  let _this=this;
                //  let flag=false;
                //  if(_this.isClick.length>0){
                //      for(let i=0;i<_this.isClick.length;i++){
                //         if(_this.isClick[i]==data.treeId){
                //             flag=false
                //             break;
                //         }else{
                //             flag=true;
                //         }
                //     }
                //  }else{
                //      flag=true;
                //  }
                 
                // //  console.log(flag)
                //  if(data.treeId!=1&&flag){
                //      _this.$axios.gets('/api/services/app/DeptManagement/GetAllByOuId',{id:data.treeId})
                //     .then(function(res){
                //         _this.isClick.push(data.treeId);
                //         //console.log(res)
                //         if(res.result.length>0){
                //             for(let i=0;i<res.result.length;i++){
                //                 let label=res.result[i].deptName;
                //                 let treeId=res.result[i].id;
                //                 let child={'treeId':treeId,'label':label,children:[]}
                //                 data.children.push(child)
                //             }
                //         }
                //     })
                //  }
                
            },
            modify(row){
                this.$store.state.url='/OuManage/OuManageModify/'+row.id
                this.$router.push({path:this.$store.state.url})//点击切换路由OuManage
            },
            see(row){
                this.$store.state.url='/OuManage/OuManageSee/'+row.id
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            delThis(row){//删除行
                let _this=this;
                _this.$axios.deletes('/api/services/app/ModuleManagement/Delete',{id:row.id})
                .then(function(res){
                    _this.loadTableData();
                },function(res){
                })
            },
            whichButton(event,node, data){
            let btnNum = event.button;
                if (btnNum==2)
                {
                // alert("您点击了鼠标右键！")
                event.preventDefault()  
                var x = event.clientX  
                var y = event.clientY  
                // this.entityTreeContextMenu.axios = {  
                // x, y  
                // }  
                }
            },
            filterNode(value, data) {
                if (!value) return true;
                 return data.moduleName.indexOf(value) !== -1;
            },
            renderContent(h, { node, data, store }) {
                return (
                <span on-mousedown ={ (event) => this.whichButton(event,node, data) } style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
                    <span  >{node.label}</span>
                </span>);
            }
        },
    }
</script>

<style scoped>
.formSearch{
    float: right;
}
.bg-white{
    background: white;
    border-radius: 3px;
}
.pl5{
    padding-left: 5px;
}
.h48{
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #E4E4E4;
}
.pr10{
    padding-right: 10px;
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
.open{
    display: inline-block;
    width: 49px;
    height: 22px;
    line-height: 22px;
    border: 1px solid #cccccc;
    color: #cccccc;
    text-align: center;
    cursor: pointer;
}
</style>

<style>
.menuListForm .el-button+.el-button{
    margin-left: 0;
}
.menuListForm .bAreaSearch .el-input__inner{
    height: 30px;
    border-radius: 30px;
}
</style>