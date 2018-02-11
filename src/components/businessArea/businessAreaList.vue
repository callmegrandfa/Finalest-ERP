<template>
    <div class="bAreaListForm">
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
                    oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" 
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
                    <button class="erp_bt bt_save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
                    <button @click="delRow" class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
                    <button class="erp_bt bt_out">
                        <div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div>
                        <span class="btDetail">导出</span>
                    </button>
                    <div class="formSearch">
                        <input type="text" class="inputForm">
                        <button>搜索</button>
                    </div>
                </el-row>

                <el-row>
                    <el-col :span='24'>
                        <el-table v-loading="tableLoading" :data="tableData" style="width: 100%" stripe @selection-change="handleSelectionChange" ref="multipleTable">
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column label="序号">
                                 <template slot-scope="scope">
                                    {{scope.$index+1}}
                                </template>
                            </el-table-column>
                            <el-table-column prop="areaCode" label="业务地区编码"></el-table-column>
                            <el-table-column prop="areaName" label="业务地区名称"></el-table-column>
                            <el-table-column prop="manager" label="负责人"></el-table-column>
                            <el-table-column prop="areaParentId" label="上级业务地区"></el-table-column>
                            <el-table-column prop="remark" label="备注"></el-table-column>
                            <el-table-column prop="status" label="允许使用"></el-table-column>
                            <el-table-column label="创建时间(无字段)"></el-table-column>
                            <el-table-column label="操作">
                                 <template slot-scope="scope">
                                    <!-- <el-button type="text" size="small"  @click="modify(scope.row)" >修改</el-button> -->
                                    <!-- <el-button type="text" size="small"  @click="see(scope.row)" >查看</el-button> -->
                                    <el-button type="text" size="small"  @click="delThis(scope.row)" >删除</el-button>
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
            <div class="bgcolor smallBgcolor">
                <label>地区分类</label>
                <el-select v-model="dialogData.areaType">
                    <el-option v-for="item in areaTypes" :key="item.value" :label="item.label" :value="item.value" placeholder="">
                    </el-option>
                </el-select>
            </div>
            <div class="bgcolor smallBgcolor"><label>地区代码</label><el-input v-model="dialogData.areaCode" placeholder=""></el-input></div>
            <div class="bgcolor smallBgcolor"><label>地区名称</label><el-input v-model="dialogData.areaName" placeholder=""></el-input></div>
            <div class="bgcolor smallBgcolor"><label>地区全称</label><el-input v-model="dialogData.areaFullName" placeholder=""></el-input></div>
            <div class="bgcolor smallBgcolor"><label>全路径ID</label><el-input v-model="dialogData.areaFullPathId" placeholder=""></el-input></div>
            <div class="bgcolor smallBgcolor"><label>全路径名称</label><el-input v-model="dialogData.areaFullPathName" placeholder=""></el-input></div>
            <div class="bgcolor smallBgcolor"><label>负责人</label><el-input v-model="dialogData.manager" placeholder=""></el-input></div>
            <div class="bgcolor smallBgcolor">
                <label>启用状态</label>
                <el-select v-model="dialogData.status">
                    <el-option v-for="item in statuses" :key="item.value" :label="item.label" :value="item.value" placeholder="">
                    </el-option>
                </el-select>
            </div>
            <div class="bgcolor smallBgcolor"><label>备注</label><el-input v-model="dialogData.remark" placeholder=""></el-input></div>
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
                dialogData:{
                    // groupId (integer): 集团ID ,
                    // areaType (integer): 地区分类(1.业务地区.2行政地区) ,
                    // areaParentId (integer): 父级地区ID ,
                    // areaCode (string): 地区代码 ,
                    // areaName (string): 地区名称 ,
                    // areaFullName (string): 地区全称 ,
                    // areaFullPathId (string): 全路径ID ,
                    // areaFullPathName (string): 全路径名称 ,
                    // manager (string): 负责人 ,
                    // status (integer): 启用状态 ,
                    // remark (string): 备注
                },//dialog数据
                 areaTypes: [{//业务地区分类
                    value:'1',
                    label: '业务地区'
                }, {
                    value:'2',
                    label: '行政地区'
                }],
                statuses:[//启用状态
                    {
                        value:'1',
                        label: '启用'
                    },
                    {
                        value:'2',
                        label: '停用'
                    },
                ],
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
                componyTree:  [
                    // {areaName:'根目录',id:'0',items:[]},
                ],
                defaultProps: {
                    children: 'items',
                    label: 'areaName',
                    id:'id'
                },
                TreeContextMenu:[//点击鼠标右键生成菜单
                ],
                pageIndex:0,//分页的当前页码
                totalPage:0,//当前分页总数
                oneItem:10,//每页有多少条信息
                multipleSelection: [],//复选框选中数据
                page:1,//当前页
                treeCheck:[],
                isClick:[],
                load:true,
                totalItem:0,//总共有多少条消息
                tableLoading:true,
                treeLoading:false,
                Sorting:'',//table搜索
                dialogFormVisible:false,
                AreaType:1,//树形图的地区分类(1.业务地区.2行政地区)
                isAdd:true,//判断是增加还是修改
                tittle:'',//模态框tittle
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
                _this.$axios.gets('/api/services/app/AreaManagement/GetAll',{SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem,Sorting:_this.Sorting}).then(function(res){ 
                    _this.tableData=res.result.items;
                     $.each( _this.tableData,function(index,value){//处理时间格式
                     if(value.creationTime&&value.creationTime!=''){
                        let creationTime=value.creationTime.slice(0,value.creationTime.indexOf(".")).replace("T"," ");
                        _this.tableData[index].creationTime=creationTime;
                     } 
                    })
                    _this.totalItem=res.result.totalCount
                    _this.totalPage=Math.ceil(res.result.totalCount/_this.oneItem);
                    _this.tableLoading=false;
                    },function(res){
                    _this.tableLoading=false;
                })
            },
            loadTree(){
                let _this=this;
                _this.treeLoading=true;
                _this.$axios.gets('/api/services/app/AreaManagement/GetAllDataTree',{AreaType:_this.AreaType})
                .then(function(res){
                    _this.componyTree=res.result
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
                this.$store.state.url='/OuManage/OuManageDetail/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
             handleSelectionChange(val) {//点击复选框选中的数据
                this.multipleSelection = val;
            },
            delRow(){
                let _this=this;
                if(_this.multipleSelection.length>0){//表格
                    for(let i=0;i<_this.multipleSelection.length;i++){
                        _this.$axios.deletes('/api/services/app/AreaManagement/Delete',{id:_this.multipleSelection[i].id})
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

                // if(_this.treeCheck.length>0){//tree
                //     for(let i=0;i<_this.treeCheck.length;i++){
                //         _this.$axios.deletes('/api/services/app/DeptManagement/Delete',{id:_this.treeCheck[i]})
                //         .then(function(res){    
                //           _this.loadTree();
                //         },function(res){
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
                 
                //  if(data.treeId!=1&&flag){
                //      _this.$axios.gets('/api/services/app/DeptManagement/GetAllByOuId',{id:data.treeId})
                //     .then(function(res){
                //         _this.isClick.push(data.treeId);
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
                _this.$axios.deletes('/api/services/app/AreaManagement/Delete',{id:row.id})
                .then(function(res){
                    _this.loadTableData();
                },function(res){
                })
            },
            whichButton(event,node, data){
                let e = event || window.event;
                console.log(e)
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
                _this.clearTreeData();
                _this.tittle='新增';
                _this.isAdd=true;
                _this.dialogFormVisible=true;
                _this.dialogData.groupId=data.groupId;//集团id
                _this.dialogData.areaParentId=data.id;//父级id
                
            },
            TreeDel(event,node,data){
                $('.TreeMenu').css({
                        display:'none'
                    })
                let _this=this;
                _this.$axios.deletes('/api/services/app/AreaManagement/Delete',{id:data.id})
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
                 _this.$axios.gets('/api/services/app/AreaManagement/Get',{id:data.id})
                    .then(function(res){
                        _this.dialogData=res.result;
                    },function(res){    

                    })
            },
            sendAjax(){
                let _this=this;
                if(_this.isAdd){
                    _this.$axios.posts('/api/services/app/AreaManagement/Create',_this.dialogData)
                    .then(function(res){
                        _this.dialogFormVisible=false;
                        _this.loadTree();
                        _this.loadTableData();
                    },function(res){    

                    })
                }else{
                     _this.$axios.puts('/api/services/app/AreaManagement/Update',_this.dialogData)
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
                 return data.areaName.indexOf(value) !== -1;
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
.bAreaListForm .el-button+.el-button{
    margin-left: 0;
}
.bAreaListForm .bAreaSearch .el-input__inner{
    height: 30px;
    border-radius: 30px;
}
/* .bAreaListForm .el-tree-node>.el-tree-node__children{
    overflow: visible!important;
} */
.bAreaListForm .el-dialog__footer{
    padding:0;
}
.bAreaListForm .areaDialog .bgcolor:first-child{
    margin-top:15px;
}
</style>