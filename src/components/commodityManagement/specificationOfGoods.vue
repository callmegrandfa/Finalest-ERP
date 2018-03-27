<template>
    <div class="customer-infor-wrapper commodity" >
        <div id="left-box" class="left-box">
            <el-row class="bg-white" v-show="ifWidth">
                <el-col :span="24">
                    <el-row class="h48 pl15">
                        <el-col :span="18">
                            <img src="../../../static/image/common/search_btn.png" class="closeLeft" >
                            <span>查询</span>
                        </el-col>
                        <el-col :span="2" :offset="4">
                            <span class="fs12 search_info_open" @click="closeLeft">-</span>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="9">
                            <div class="bgcolor smallBgcolor" style="margin-top:20px">
                            <label >规格编码</label>
                           </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="bgcolor smallBgcolor" style="margin-top:20px">
                            <el-input v-model="searchItem.specCode"></el-input>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="9">
                            <div class="bgcolor smallBgcolor" >
                            <label >规格名称</label>
                           </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="bgcolor smallBgcolor" >
                            <el-input placeholder="" v-model="searchItem.specName"></el-input>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="9">
                            <div class="bgcolor smallBgcolor" >
                            <label >控件类型</label>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="bgcolor smallBgcolor">
                                <el-select  v-model="searchItem.controlType" >
                                    <el-option v-for="item in controlTypeoptions" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="9">
                            <div class="bgcolor smallBgcolor" >
                            <label >状态</label>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="bgcolor smallBgcolor">
                                <el-select  v-model="searchItem.status" >
                                    <el-option  v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="9">
                            <div class="height1">
                                
                            </div>
                        </el-col>
                        <el-col style="text-align:center;margin-bottom:20px;" :span="14">
                            <span class="search-btn" style="float:left; " @click="search()">查询</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <div id="bgl">
            <el-row >
                <el-col :span="24" class="border-left" id="bg-white">
                    <el-col :span="ifWidth?0:2" class="search-block bg-white">
                        <div @click="openLeft">
                            <img src="../../../static/image/common/search_btn.png">
                            <span>查询</span>
                            <span class='open-search'>+</span>
                        </div>
                    </el-col>
                    <el-col :span="ifWidth?24:22" class="bg-white">
                        <btm :date="bottonbox" v-on:listbtm="btmlog"> </btm>
                    </el-col>

                        <el-col :span="5">
                            <el-tree oncontextmenu="return false" ondragstart="return false"  onbeforecopy="return false" style="-moz-user-select: none"
                                :data="componyTree"
                                :props="defaultProps"
                                default-expand-all
                                ref="tree"
                                :expand-on-click-node="false"
                                @node-click="TreeNodeClick">
                            </el-tree>
                        </el-col>
                        
                            <el-col :span="19" >
                                <el-table :data="tableData" @row-click="rowClick" @selection-change="handleSelectionChange" border style="width: 100%">
                                    <el-table-column type="selection" label="" width="50">
                                    </el-table-column>
                                    <el-table-column prop="specCode" label="规格值编码">
                                        <template slot-scope="scope">
                                            <img :id="scope.row.id"  :if=updateArray.indexOf(scope.row.id)  v-show='updateArray.indexOf(scope.row.id)>=0||scope.row.specCode==""' class="update-icon" src="../../../static/image/content/redremind.png"/>

                                            <input class="input-need" :class="{errorclass:scope.row.specCode==''&&isSave==true}" 
                                                    v-model="scope.row.specCode" 
                                                    type="text"/>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="specName" label="规格值名称">
                                        <template slot-scope="scope">
                                            <input class="input-need" :class="{errorclass:scope.row.specName==''&&isSave==true}" 
                                                    v-model="scope.row.specName" 
                                                    type="text"/>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="" label="备注" width="100">
                                    </el-table-column>
                                    <el-table-column prop="createdBy" label="创建人">
                                    </el-table-column>
                                    <el-table-column prop="createdTime" label="创建时间">
                                    </el-table-column>
                                    <el-table-column prop="modifiedBy" label="修改人" width="100">
                                    </el-table-column>
                                    <el-table-column prop="modifiedTime" label="修改时间" width="">
                                    </el-table-column>
                                    <el-table-column prop="address7" label="操作" width="">
                                        <template slot-scope="scope">
                                            <el-button type="text" size="small"  v-on:click="handleDel(scope.row,scope.$index)">删除</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            <el-pagination style="margin-top:20px;"  class="text-right"  background layout="total, prev, pager, next"  :page-count="totalPage" >
                             </el-pagination>   
                        </el-col>

                </el-col>
            </el-row> 
        </div>
    </div>
</template>

<script>
import Query from '../../base/query/query'
import Btm from '../../base/btm/btm'
import Tree from '../../base/tree/tree'
    export default{
        name:'customerInfor',
        data(){
            return {
                try:{
                "groupId": 2,
                "stockId": 1,
                "addressId": 8,
                "completeAddress": "str33ing",
                "transportMethodId": 1,
                "contactPerson": "stri55ng",
                "phone": "18200326666",
                "logisticsCompany": "str55ing",
                "isDefault": true,
                "remark": "st54ring"
                },
                searchItem:{
                    specCode:'',//规格编码
                    specName:'',//规格名称
                    controlType: '',//控制类型
                    status:'',//状态
                }, 
                bottonbox:{
                    url: '',
                   botton:[{
                    class: 'erp_bt bt_add onePge',
                    imgsrc: '../../../static/image/common/bt_add.png',
                    show:true,
                    text: '新增'
                },{
                    class: 'erp_bt bt_save',
                    imgsrc: '../../../static/image/common/bt_save.png',
                    show:true,
                    text: '保存'
                },{
                    class: 'erp_bt bt_del',
                    imgsrc: '../../../static/image/common/bt_del.png',
                    show:true,
                    text: '删除'
                },{
                    class: 'erp_bt bt_out',
                    imgsrc: '../../../static/image/common/bt_inOut.png',
                    show:true,
                    text: '导出'
                },{
                    class: 'erp_bt bt_version',
                    imgsrc: '../../../static/image/common/bt_start.png',
                    show:true,
                    text: '启用'
                },{
                    class: 'erp_bt bt_auxiliary',
                    imgsrc: '../../../static/image/common/bt_stop.png',
                    show:true,
                    text: '停用'
                }]},
                defaultProps: {
                    children:'children',
                    label:'specName'
                },
                controlTypeoptions: [{
                    value: 0,
                    label: '下拉'
                    }, {
                    value: 1,
                    label: '日期'
                    }, {
                    value: 2,
                    label: '手工录入'
                    },{
                    value: 3,
                    label: '关联档案'
                }],
                statusoptions: [{
                    value: 0,
                    label: '已提交'
                    }, {
                    value: 1,
                    label: '不通过'
                    }, {
                    value: 2,
                    label: '已反审'
                    },{
                    value: 3,
                    label: '通过'
                }],
                idArray:{
                    ids:[]
                },
                aggregate:{
                  "createList": [
                  ],
                  "updateList": [
                  ],
                  "deleteList": [
                  ]
                },
                tableData: [],
                componyTree: [],
                addArray:[],
                updateArray:[],
                updateList:[],
                pageIndex:-1,//分页的当前页码
                SelectionChange:[],
              totalPage:100,//当前分页总数
              isUpdate:false,//是否进行修改
              ifWidth:true,
              updateId:'',
              isSave:false,
              eachPage:10,//每页有多少条信息
              page:1,//当前页
              settt:''
            }
        },
        created:function(){   
            this.loadTree();   
            this.loadTableData();
            console.log(this.updateArray)
        },
        mounted:function(){   
            let content1=document.getElementById('bg-white');//设置高度为全屏
            let height1=window.innerHeight-123;
            content1.style.minHeight=height1+'px';
        },
        watch:{
            isUpdate:function(val,oldVal){
                if(val==true){
                    this.isCancel=true;
                    this.turnPage=$(document).find(".pageActive.is-background .el-pager li.active").html();
                }
            },
            tableData:{
                handler: function (val, oldVal) {
                        if(oldVal.length>0){
                           
                            if(this.updateArray.length==0&&this.updateId==""){
                                this.isUpdate=false
                            }else{
                                _this.bottonbox.botton.splice(2,0,{
                                    class: 'erp_bt bt_auxiliary',
                                    imgsrc: 'img src="../../../static/image/common/u470.png',
                                    show:true,
                                    text: '取消'
                                })
                                this.isUpdate=true;
                            }
                            if(this.updateArray.length==0){//判断是否为第一行修改的数据
                                this.updateArray.push(this.updateId)
                            }else{
                                if(this.updateArray.indexOf(this.updateId)==-1){
                                    this.updateArray.push(this.updateId)
                                }else{
                                    return
                                } 
                            }                           
                        }  
                    },
                deep: true
            }
        },
        methods:{
            btmlog:function(data){
                let _this=this;
                if(data == '新增' ){
                    if(_this.bottonbox.botton[2].text != '取消'){
                        _this.bottonbox.botton.splice(2,0,{
                            class: 'erp_bt bt_auxiliary',
                            imgsrc: 'img src="../../../static/image/common/u470.png',
                            show:true,
                            text: '取消'
                        })
                    }
                    
                    
                    let newcol={
                        "groupId": 0,
                      "specCode": "",
                      "specName": "",
                      "controlType": 0,
                      "isSystem": true,
                      "seq": 0,
                      "status": 0,
                      "createdBy":this.$store.state.name,
                      "createdTime":this.GetDateTime(),
                      modifiedBy:this.$store.state.name,
                      modifiedTime:this.GetDateTime()
                    };
                    // this.isUpdate=true;
                    // this.isAdd=true;
                    this.tableData.unshift(newcol);
                    this.addArray.unshift(newcol);
                }else if(data == '新增保存'){
                    this.isSave=true;
                    let _this=this;
                    if(_this.addArray.length>0){//新增保存
                        for(let i in _this.addArray){
                            if(_this.addArray[i].specCode==""||_this.addArray[i].specName==""){
                                this.$message({
                                    message: '红色框内为必填项！',
                                    type: 'error'
                                });
                            }
                        }
                        if(_this.addArray.length==1){//单条新增
                            _this.$axios.posts('/api/services/app/SpecManagement/Create',_this.addArray[0]).then(function(res){
                                _this.loadTableData();
                                _this.loadTree(); 
                                _this.open('保存商品品牌成功','el-icon-circle-check','successERP');    
                                _this.isAdd=false
                            }); 
                        }else{//批量新增 
                            _this.aggregate.createList=_this.addArray;                     
                            _this.$axios.posts('/api/services/app/SpecManagement/CUDAggregate',_this.aggregate).then(function(res){
                                _this.loadTableData();
                                _this.open('保存商品品牌成功','el-icon-circle-check','successERP');    
                                _this.isAdd=false
                            }); 
                        }                    
                    }else if(_this.isUpdate){//修改保存
                        if(_this.updateArray.length==1){//单条修改
                            let updataIndex = -1;
                            for(let i in _this.tableData){
                                if(_this.updateArray[0]==_this.tableData[i].id){
                                    updataIndex = i;
                                }
                            }
                            _this.$axios.puts('/api/services/app/SpecManagement/Update',_this.tableData[updataIndex]).then(function(res){
                                _this.loadTableData();
                                _this.loadTree();
                                _this.open('保存商品品牌成功','el-icon-circle-check','successERP');    
                            });
                        }else{//批量修改
                            _this.updateList = _this.tableData
                            
                            _this.aggregate.updateList=_this.tableData;
                            console.log(_this.aggregate)
                            _this.$axios.posts('/api/services/app/SpecManagement/CUDAggregate',_this.aggregate).then(function(res){
                                _this.loadTableData();
                                _this.open('保存商品品牌成功','el-icon-circle-check','successERP');    
                                _this.isAdd=false
                            }); 
                        }
                    } 
                }else if(data == '取消'){
                    _this.bottonbox.botton.splice(2,1);

                    this.loadTableData();
                }else if(data == '删除'){
                    for(var i in this.SelectionChange){
                        this.idArray.ids.push(this.SelectionChange[i].id)
                    }
                    let _this=this;
                    if(_this.idArray.ids.indexOf(undefined)!=-1){
                            this.$message({
                                type: 'warning',
                                message: '新增数据请在行内删除'
                            });
                            return;
                    }
                    if(_this.idArray.ids.length>0){
                        _this.$confirm('确定删除?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning',
                            center: true
                            }).then(() => {
                                _this.$axios.posts('/api/services/app/SpecManagement/BatchDelete',_this.idArray).then(function(res){
                                    _this.loadTableData();
                                    _this.open('删除成功','el-icon-circle-check','successERP');    
                                })
                            }).catch(() => {
                                this.$message({
                                    type: 'info',
                                    message: '已取消删除'
                                });
                        });
                       
                    }else{
                        this.$message({
                            type: 'info',
                            message: '请勾选需要删除的数据！'
                        });
                    }
                }
            },
            handleDel(row,index){//行内删除
                console.log(index);
                this.$confirm('确定删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                    }).then(() => {
                        console.log(this.addArray);
                        if(row.brandCode==""||this.isAdd==true){
                            this.tableData.splice(index,1);
                            this.addArray.splice(index,1);
                            console.log(this.addArray);
                        }else{
                            let _this=this;
                            _this.$axios.deletes('/api/services/app/SpecManagement/Delete',{Id:row.id}).then(function(res){
                                _this.loadTableData();
                                _this.loadTree();
                                _this.open('删除成功','el-icon-circle-check','successERP');              
                            })
                        }
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                });
            },
            loadTableData(){
                let _this=this;
                _this.tableLoading=true;
                _this.$axios.gets('/api/services/app/SpecManagement/GetAll',{SkipCount:(_this.page-1)*_this.eachPage,MaxResultCount:_this.eachPage}).then(function(res){
                    _this.tableData=res.result.items;
                    // console.log(res.result.items)
                    let countPage=res.result.totalCount;
                    _this.Init();
                    _this.totalPage = Math.ceil(countPage/_this.eachPage);
                  
                })
            },
            loadTree(){//获取tree data
                    let _this=this;
                    _this.treeLoading=true;
                    _this.$axios.gets('api/services/app/SpecManagement/GetDictionaryTree')
                    .then(function(res){
                        _this.componyTree=res.result;
                        _this.treeLoading=false;
                        _this.loadIcon();
                },function(res){
                    _this.treeLoading=false;
                })
            },
            TreeNodeClick(data){//树节点点击回调             
                let _this=this;
                _this.tableLoading=true;
                _this.$axios.gets('/api/services/app/SpecManagement/Get',{Id:data.id}).then(function(res){ 
                      _this.tableData.splice(0,_this.tableData.length);             
                    _this.tableData.push(res.result) ;
                    console.log(_this.tableData)
                    // _this.totalCount=res.result.length
                    // _this.tableLoading=false;   
                })
            },
            loadIcon(){
                let _this=this;
                _this.$nextTick(function () {
                    $('.preNode').remove();   
                    $('.el-tree-node__label').each(function(){
                        if($(this).parent('.el-tree-node__content').next('.el-tree-node__children').text()==''){
                            $(this).prepend('<i class="preNode fa fa-file" aria-hidden="true" style="color:#f1c40f;margin-right:5px"></i>')
                        }else{
                            $(this).prepend('<i aria-hidden="true" class="preNode fa fa-folder-open" style="color:#f1c40f;margin-right:5px"></i>')
                        }
                    })
                })
            },
            closeLeft:function(){
                let self = this;
                self.ifWidth = false;
                let obgh=document.getElementById('bgl');
                obgh.style.width="100%";
            },
            openLeft:function(){
               let self = this;
               self.ifWidth = true;
               let obgh=document.getElementById('bgl');
                obgh.style.width="calc(100% - 340px)";
            },
            rowClick(row){//获取行id
                this.updateId=row.id
            },
            search(){//按条件查询
                let _this=this;
                _this.$axios.gets('/api/services/app/SpecManagement/GetSearch',_this.searchItem).then(function(res){
                    _this.tableData=res.result;                   
                })
            },
            handleSelectionChange(val) {//点击复选框选中的数据
                this.SelectionChange=val;
            },
            //获取当前时间
            GetDateTime: function () {
                var date = new Date();
                var seperator1 = "-";
                var seperator2 = ":";
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                var currentdate = date.getFullYear() + seperator1 + month ;
                return currentdate;
            },
            open(tittle,iconClass,className) {//提示框
                this.$notify({
                position: 'bottom-right',
                iconClass:iconClass,
                title: tittle,
                showClose: false,
                duration: 3000,
                customClass:className
                });
            },
            Init(){//数据初始化
                this.isCancel=false;
                this.isUpdate=false;
                this.isAdd=false;
                this.isSave=false;
                this.pageFlag=true;
                this.updateArray=[];
                this.addArray=[];
                this.updateId="";
            },
        },
        components:{
            Query,
            Btm,
            Tree
        }
    }
</script>

<style scoped>
.update-icon{
    position: absolute;
    left: -50px;
    top: 0px;
}
.bg-white{
    background: white;
    border-radius: 3px;
}
.pl10{
    padding-left: 10px;
}
.pt10{
    padding-top: 10px;
}
.search-block{
    border-bottom: 1px solid #E4E4E4;
    box-sizing: border-box;
}
.pb10{
    padding-bottom: 10px;
}
.pr10{
    padding-right: 10px;
}
.border-left{
    border-left: 1px solid #E4E4E4;
}
.watch{
    float: left;
    width: calc(100% - 200px);
    background-color: #fff;
}
#bgl{
    width: calc(100% - 340px);
    float: left;
    background-color: rgb(249,249,249);
}
.pl15{
    padding-left: 15px;
}
.search-btn{
    display: inline-block;
    width: 87px;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    background: #4A6997;
    color: white;
    cursor: pointer;
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
.open-search{
    background-image: url(../../../static/image/common/btn-circle.png);
    background-repeat: no-repeat;
    background-position: center;
    color: #E3E3E3;
    font-size: 12px;
    width: 19px;
    float: right;
    margin-right: 10px;
} 
.h48{
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #E4E4E4;
}
.errorclass{
   border: 1px solid #f98b8b!important 
}

</style>

<style>
.el-checkbox__inner{
    width: 18px;
    height: 18px;
    background: #f4f4f5;
}
.el-checkbox__inner::after{
    left: 4px;
    top: -2px;
}
</style>