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
                    :expand-on-click-node="false"
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
                                    <el-button type="text" size="small"  @click="modify(scope.row)">修改</el-button>
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
        <!-- dialog -->
        <el-dialog :title="tittle" :visible.sync="dialogFormVisible" width="505px" class="areaDialog">
            <div class="bgcolor smallBgcolor"><label>功能模块代码</label><el-input v-model="dialogData.moduleCode" placeholder=""></el-input></div>
            <div class="bgcolor smallBgcolor"><label>功能模块名称</label><el-input v-model="dialogData.moduleName" placeholder=""></el-input></div>
            <div class="bgcolor smallBgcolor"><label>Web地址</label><el-input v-model="dialogData.url" placeholder=""></el-input></div>
            <div class="bgcolor smallBgcolor"><label>图标</label><el-input v-model="dialogData.ico" placeholder=""></el-input></div>
            <div class="bgcolor smallBgcolor"><label>系统 ID</label><el-input v-model="dialogData.systemId" placeholder=""></el-input></div>
            <div class="bgcolor smallBgcolor">
                <label>是否在最底层</label>
                <el-checkbox v-model="dialogData.moduleIsBottom"></el-checkbox>
            </div>
            <div class="bgcolor smallBgcolor"><label>功能模块ID全路径</label><el-input v-model="dialogData.moduleFullPathId" placeholder=""></el-input></div>
            <div class="bgcolor smallBgcolor"><label>功能模块名称全路径</label><el-input v-model="dialogData.moduleFullPathName" placeholder=""></el-input></div>
            <div class="bgcolor smallBgcolor"><label>排序</label><el-input v-model="dialogData.seq" placeholder=""></el-input></div>
            <div slot="footer" class="dialog-footer">
                <button class="dialogBtn" @click="sendAjax">确 认</button>
                <button class="dialogBtn" type="primary" @click="dialogFormVisible = false">取消</button>
            </div>
        </el-dialog>
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
                dialogData:{},    
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
                dialogFormVisible:false,
                tittle:'',
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
                },function(res){
                    _this.tableLoading=false;
                })
            },
            goDetail(){
                this.$store.state.url='/menu/menuDetail/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
             handleSelectionChange(val) {//点击复选框选中的数据
                this.multipleSelection = val;
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
                        })
                    }
                };
            },
            nodeClick(data){
                
            },
            modify(row){
                this.$store.state.url='/menu/menuModify/'+row.id
                this.$router.push({path:this.$store.state.url})
            },
            see(row){
                this.$store.state.url='/menu/menuSee/'+row.id
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
                let e = event || window.event;
                let btnNum = e.button;
                if(e.target.className!='TreeMenuBtn'){
                    $('.TreeMenu').css({
                        display:'none'
                    })
                }else{
                    return false;
                }
                if (btnNum==2){
                e.target.id= data.id
                let clickDom=$('#'+e.target.id);
                let x = e.clientX
                let y = e.clientY
                let left=clickDom.offset().left;
                clickDom.children('.TreeMenu').css({
                    display:'block',
                    left:x-left+'px',
                    top:'0px'
                })
                $('.el-tree-node>.el-tree-node__children').css({
                    overflow:'visible'
                })
                }
            },
            TreeAdd(event,node,data){
                $('.TreeMenu').css({
                        display:'none'
                    })
                let _this=this;
                _this.tittle='新增';
                _this.clearTreeData();
                _this.isAdd=true;
                _this.dialogFormVisible=true;
                _this.dialogData.moduleParentId=data.id;//父级id
                
            },
            TreeDel(event,node,data){
                $('.TreeMenu').css({
                        display:'none'
                    })
                let _this=this;
                _this.$axios.deletes('/api/services/app/ModuleManagement/Delete',{id:data.id})
                .then(function(res){
                    _this.loadTree();
                    _this.loadTableData();
                },function(res){    

                })
            },
            TreeModify(event,node,data){
                $('.TreeMenu').css({
                        display:'none'
                    })
                let _this=this;
                _this.clearTreeData();
                _this.tittle='修改';
                _this.isAdd=false;
                _this.dialogFormVisible=true;
                 _this.$axios.gets('/api/services/app/ModuleManagement/Get',{id:data.id})
                    .then(function(res){
                        _this.dialogData=res.result;
                    },function(res){    

                    })
            },
            sendAjax(){
                let _this=this;
                if(_this.isAdd){
                    _this.$axios.posts('/api/services/app/ModuleManagement/Create',_this.dialogData)
                    .then(function(res){
                        _this.dialogFormVisible=false;
                        _this.loadTree();
                        _this.loadTableData();
                    },function(res){    

                    })
                }else{
                     _this.$axios.puts('/api/services/app/ModuleManagement/Update',_this.dialogData)
                    .then(function(res){
                        _this.dialogFormVisible=false;
                        _this.loadTree();
                        _this.loadTableData();
                    },function(res){    

                    })
                }
                
            },
            filterNode(value, data) {
                if (!value) return true;
                 return data.moduleName.indexOf(value) !== -1;
            },
            renderContent(h, { node, data, store }) {
                return (
                <span class="TreeNode"
                on-mousedown ={ (event) => this.whichButton(event,node, data) } 
                style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;position: relative;">
                    {node.label}
                   <div class="TreeMenu" style="box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);display:none;position: absolute;top: 0;right: 0;width: 60px;z-index:990">
                        <button class="TreeMenuBtn" style="font-size: 12px;display: block;width: 100%;height: 25px;border: none;background-color: #fff; cursor: pointer;" on-click={ (event) => this.TreeAdd(event,node, data) }>新增</button>
                        <button class="TreeMenuBtn" style="font-size: 12px;display: block;width: 100%;height: 25px;border: none;background-color: #fff; cursor: pointer;" on-click={ (event) => this.TreeDel(event,node, data) }>删除</button>
                        <button class="TreeMenuBtn" style="font-size: 12px;display: block;width: 100%;height: 25px;border: none;background-color: #fff; cursor: pointer;" on-click={ (event) => this.TreeModify(event,node, data) }>修改</button>
                    </div>
                </span>);
            },
            clearTreeData(){
                let _this=this;
                _this.dialogData={}
            }
        },
    }
</script>

<style scoped>
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
.menuListForm .el-dialog__footer{
    padding:0;
}
.menuListForm .areaDialog .bgcolor:first-child{
    margin-top:15px;
}
</style>