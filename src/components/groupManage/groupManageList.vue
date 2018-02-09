<template>
    <div class="groupList">
        <el-row class="h48 pt5 bg-white">
            <button class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
            <button class="erp_bt bt_modify"><div class="btImg"><img src="../../../static/image/common/bt_modify.png"></div><span class="btDetail">修改</span></button>           
            <button class="erp_bt bt_save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
            <button class="erp_bt bt_cancel"><div class="btImg"><img src="../../../static/image/common/bt_cancel.png"></div><span class="btDetail">取消</span></button>
            <button class="erp_bt bt_print"><div class="btImg"><img src="../../../static/image/common/bt_print.png"></div><span class="btDetail">打印</span></button>
        </el-row>
        <el-row class="bg-white">
                <el-col :span="6">
                        <div class="mt20 bgcolor smallBgcolor">
                            <label>集团编码</label>
                            <el-input  v-model="searchData.OuType">
                               
                            </el-input>
                        </div>
                </el-col>
                <el-col :span="6">
                    <div class="mt20 bgcolor smallBgcolor"><label>集团名称</label><el-input v-model="searchData.OuCode" placeholder="请录入单号"></el-input></div>
                </el-col>
                <el-col :span="6">
                    <div class="mt20 bgcolor smallBgcolor"><label>集团全称</label><el-input v-model="searchData.Name" placeholder="请录入单号"></el-input></div>
                </el-col>
                <el-col :span="6">
                    <div class="mt20 bgcolor smallBgcolor"><label>会计方案</label><el-input v-model="searchData.CompanyOuId" placeholder="请录入单号"></el-input></div>
                </el-col>
        </el-row>
        <el-row class="bg-white">
            <el-col :span="6">    
                <div class="bgcolor smallBgcolor"><label>行政地区</label><el-input v-model="searchData.AreaId" placeholder="请录入单号"></el-input></div>
            </el-col>
            <el-col :span="6">
                <div class="bgcolor smallBgcolor">
                    <label>启用会计月份</label>
                    <el-select  v-model="searchData.OuType">
                        <el-option v-for="item in options" :key="item.basOuTypes" :label="item.label" :value="item.basOuTypes">
                        </el-option>
                    </el-select>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="bgcolor smallBgcolor">
                    <label>本位币种</label>
                    <el-select  v-model="searchData.OuType">
                        <el-option v-for="item in options" :key="item.basOuTypes" :label="item.label" :value="item.basOuTypes">
                        </el-option>
                    </el-select>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="bgcolor smallBgcolor"><label>所属行业</label><el-input v-model="searchData.Name" placeholder="请录入单号"></el-input></div>
            </el-col>   
        </el-row>
        <el-row class="bg-white">
            <el-col :span="6">
                <div class="bgcolor smallBgcolor"><label>电话</label><el-input v-model="searchData.CompanyOuId" placeholder="请录入单号"></el-input></div>
            </el-col>
            <el-col :span="6">
                <div class="bgcolor smallBgcolor"><label>传真</label><el-input v-model="searchData.AreaId" placeholder="请录入单号"></el-input></div>
            </el-col>
            <el-col :span="6">
                <div class="bgcolor smallBgcolor"><label>总部地址</label><el-input v-model="searchData.AreaId" placeholder="请录入单号"></el-input></div>
            </el-col>
            <el-col :span="6">
                <div class="bgcolor smallBgcolor"><label>备注</label><el-input v-model="searchData.AreaId" placeholder="请录入单号"></el-input></div>
            </el-col>
        </el-row>
        <el-row class="bg-white">
                <div class="bgcolor smallBgcolor lh-28"><label></label><el-checkbox class="w-auto"></el-checkbox>允许使用</div>
                <!-- <div class="bgcolor smallBgcolor"><label></label><span class="search-btn" @click="SimpleSearch">查询</span></div> -->
        </el-row>
        <el-row class="bg-white">
            <el-col :span='24' >
                <el-row class="pl10 pt10 pr10 pb10 border-bottom">
                    <el-col :span='4' class="tree-container">
                        <el-tree
                        :data="componyTree"
                        :props="defaultProps"
                        node-key="treeId"
                        default-expand-all
                        :expand-on-click-node="true"
                        @node-click="nodeClick">
                        </el-tree>
                    </el-col>
                    <el-col :span='19' class="ml10 border-left">
                        <el-table :data="tableData"  style="width: 100%" stripe @selection-change="handleSelectionChange" >
                            <el-table-column type="expand">
                                <template slot-scope="props">
                                    <el-table :data="tableData5" :show-header="ifHeaderShow">
                                        <el-table-column  prop="id">
                                        </el-table-column>
                                        <el-table-column>
                                        </el-table-column>
                                        <el-table-column>
                                        </el-table-column>
                                    </el-table>
                                </template>
                            </el-table-column>
                            <el-table-column  label="系统&模块"></el-table-column>
                            <el-table-column prop="createdTime" label="启用时间"></el-table-column>
                            <el-table-column prop="creationTime" label="生效时间"></el-table-column>
                        </el-table>  
                        <el-pagination
                        style="margin-top:20px;" 
                        class="text-right" 
                        background layout="total, prev, pager, next" 
                        @current-change="handleCurrentChange"
                        :page-count="totalPage" >
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
                searchData:{
                    OuCode: "",//编码
                    Name: "",//名称
                    CompanyOuId:'',//所属公司
                    AreaId: '',//行政地区
                    Status: '',//启用状态
                    OuType: '',//组织类型
                },
                ifHeaderShow:false,
                tableData5: [{
                    id: '12987122',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                    }, {
                    id: '12987123',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                    }],
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

                componyTree:  [{
                    treeId: 1,
                    label: 'HKERP',
                    children:[{
                            treeId: 2,
                            label: '系统管理',
                            children:[]
                        },{
                            treeId: 3,
                            label: '采购管理',
                            children:[]
                        },{
                            treeId: 4,
                            label: '零售管理',
                            children:[]
                        },
                    ]
                    }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                pageIndex:-1,//分页的当前页码
                totalPage:0,//当前分页总数
                oneItem:10,//每页有多少条信息
                multipleSelection: [],//复选框选中数据
                page:1,//当前页
                treeCheck:[],
                isClick:[],
            }
        },
        created:function(){       
                let _this=this;
                _this.loadTableData();
                //_this.loadTree();
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
                _this.$axios.gets('/api/services/app/GroupManagement/GetAll',{SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem}).then(function(res){ 
                    _this.tableData=res.result.items;
                    _this.totalPage=Math.ceil(res.result.totalCount/_this.oneItem);
                    },function(res){
                })
            },
            loadTree(){
                let _this=this;
                _this.$axios.gets('/api/services/app/DeptManagement/GetAllByOuId',{id:1})
                .then(function(res){
                    console.log(res)
                    let children=[];
                    if(res.result.length>0){
                        for(let i=0;i<res.result.length;i++){
                            let label=res.result[i].deptName;
                            let treeId=res.result[i].id;
                            let child={'treeId':treeId,'label':label,children:[]}
                            children.push(child)
                        }     
                    }
                    _this.componyTree=[{
                        treeId: 1,
                        label: '集团名',
                        children:children
                        }]
               })
            },
            handleCurrentChange(val) {//页码改变
                 let _this=this;
                 _this.page=val;
                _this.loadTableData();
            },
            SimpleSearch(){//简单搜索
                 let _this=this;
                _this.$axios.gets('/api/services/app/OuManagement/SimpleSearch',_this.searchData)
                .then(function(res){
                    console.log(res);
                },function(res){
                    console.log('err:'+res)
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
                        _this.$axios.deletes('/api/services/app/OuManagement/Delete',{id:_this.multipleSelection[i].id})
                        .then(function(res){
                            _this.loadTableData();
                            _this.open('删除成功','el-icon-circle-check','successERP');
                            // for(let x=0;x<_this.tableData.length;x++){
                            //     if(_this.tableData[x].id==_this.multipleSelection[i].id&&typeof(_this.tableData[x].id)!='undefined'){
                            //         console.log(_this.tableData[x]);
                            //         _this.tableData.splice(x, 1);
                            //     }
                            // }
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
                 let _this=this;
                 let flag=false;
                 if(_this.isClick.length>0){
                     for(let i=0;i<_this.isClick.length;i++){
                        if(_this.isClick[i]==data.treeId){
                            flag=false
                            break;
                        }else{
                            flag=true;
                        }
                    }
                 }else{
                     flag=true;
                 }
                 
                //  console.log(flag)
                 if(data.treeId!=1&&flag){
                     _this.$axios.gets('/api/services/app/DeptManagement/GetAllByOuId',{id:data.treeId})
                    .then(function(res){
                        _this.isClick.push(data.treeId);
                        //console.log(res)
                        if(res.result.length>0){
                            for(let i=0;i<res.result.length;i++){
                                let label=res.result[i].deptName;
                                let treeId=res.result[i].id;
                                let child={'treeId':treeId,'label':label,children:[]}
                                data.children.push(child)
                            }
                        }
                    })
                 }
                
            },
            modify(row){
                this.$store.state.url='/OuManage/OuManageModify/'+row.id
                this.$router.push({path:this.$store.state.url})//点击切换路由OuManage
            },
        },
    }
</script>

<style scoped>
 @import '//at.alicdn.com/t/font_561828_j9pvj2d16altmx6r.css';
.lh-28{
    line-height: 28px;
}
.w-auto{
    width: auto;
}
.store-data-wrapper{
    width: 100%;
    height: auto;
}
.bg-white{
    background: white;
    border-radius: 3px;
}
.border-bottom{
    border: 1px solid #ececec;
}
.input-need{
    outline: none;
    border:none;
    width: 100%;
    height: 28px;
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
.fs14{
    font-size: 14px;
    color: rgba(0, 0, 0, 0.349019607843137);
}
.fs12{
    font-size: 12px;
}
.border1{
    border: 1px solid #999999;
    border-radius: 3px;
}
.border-left{
    border-left: 1px solid #E4E4E4;
    min-height: 670px;
}
.btn{
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: rgba(130, 170, 252, 1);
    color: white;
    border-radius: 3px;
    cursor: pointer;
}
.rbtn{
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: rgba(242, 242, 242, 1);
    border-radius: 3px;
    cursor: pointer;
}
.search-btn{
    font-size: 12px;
    display: inline-block;
    width: 87px;
    height: 28px;
    line-height: 28px;
    border-radius: 3px;
    background: #4A6997;
    color: white;
    cursor: pointer;
    text-align: center; 
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
.tenant-management-wrapper .el-input input{
    border:none;
    height: 30px;
    line-height: 30px;
    padding-left: 0;
}
.groupList .el-button+.el-button{
    margin-left: 0;
}
/* 重写checkbox */
.tree-container .el-checkbox__inner {
        width: 12px;
        height: 12px;
        border-radius: 0;
    }   
   .tree-container .el-checkbox__inner::after{
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 8px;
        left: 3px;
        position: absolute;
        top: 0px;
        width: 4px;
    }

/* 重写el-table样式 */
.groupList .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.groupList .el-table td{
    padding: 3px 0;
}
.groupList .el-table__body{
    text-align: center;
}
</style>