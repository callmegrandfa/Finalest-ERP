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
                        <input type="text" class="inputForm" v-model="Sorting">
                        <button @click="loadTableData">搜索</button>
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

                componyTree:  [
                    {areaName:'xx',id:'1',items:[{areaName:'xxx',id:'2'}]},
                    {areaName:'yy',id:'3',items:[{areaName:'yyy',id:'4'}]}
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
            }
        },
        created:function(){       
                let _this=this;
                _this.loadTableData();
                // _this.loadTree();
             },
        mounted:function(){
            let _this=this;
            $('body').on('mousedown',function(e){
                if(e.target.className=='TreeNode'|| e.target.className=='TreeMenuBtn' || e.target.className=='el-tree-node__content'){
                    document.oncontextmenu=new Function("event.returnValue=false;");
                }else{
                    document.oncontextmenu=new Function("event.returnValue=true;");
                }
            })
            $('body').children().not('.TreeMenuBtn').on('click',function(){
                 $('.TreeMenu').css({
                        display:'none'
                    })
            })
            
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
                _this.$axios.gets('/api/services/app/AreaManagement/GetAllDataTree',{AreaType:1})
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
                    console.log(res);
                },function(res){
                    console.log('err:'+res)
                    _this.tableLoading=false;
                })
            },
            goDetail(){
                this.$store.state.url='/OuManage/OuManageDetail/default'
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
                        _this.$axios.deletes('/api/services/app/AreaManagement/Delete',{id:_this.multipleSelection[i].id})
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
                _this.$axios.deletes('/api/services/app/AreaManagement/Delete',{id:row.id})
                .then(function(res){
                    _this.loadTableData();
                },function(res){
                })
            },
            whichButton(event,node, data){
                let e = event || window.event;
                let btnNum = e.button;
                if(e.target.className=='TreeNode'){
                    $('.TreeMenu').css({
                        display:'none'
                    })
                }
                // console.log(e.target)
                if (btnNum==2){
                e.target.id= data.id
                let clickDom=$('#'+e.target.id);
                // let x = e.clientX
                // let y = e.clientY
                clickDom.children('.TreeMenu').css({
                    display:'block',
                })
                }
            },
            TreeAdd(event,node,data){

            },
            TreeDel(event,node,data){

            },
            TreeModify(event,node,data){

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
                    <div class="TreeMenu" style="display:none;position: absolute;top: 0;right: 0;width: 60px;height: 80px;z-index:990">
                        <button class="TreeMenuBtn" style="font-size: 12px;display: block;width: 100%;height: calc(100% / 3);border: none;background-color: #33cccc; color:#fff; cursor: pointer;" on-click={ (event) => this.TreeAdd(event,node, data) }>新增</button>
                        <button class="TreeMenuBtn" style="font-size: 12px;display: block;width: 100%;height: calc(100% / 3);border: none;background-color: #f55e6e; color:#fff; cursor: pointer;" on-click={ (event) => this.TreeDel(event,node, data) }>删除</button>
                        <button class="TreeMenuBtn" style="font-size: 12px;display: block;width: 100%;height: calc(100% / 3);border: none;background-color: #3c6; color:#fff; cursor: pointer;" on-click={ (event) => this.TreeModify(event,node, data) }>修改</button>
                    </div>
                </span>);
            }
        },
    }
</script>

<style scoped>

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
.bAreaListForm .el-tree-node>.el-tree-node__children{
    overflow: visible!important;
}
</style>