<template>
    <div class="customer-infor-wrapper" style="float:left;background:#fff;width:100%;">
        <div id="left-box" style="min-width:275px;width:275px;float:left;">
            <el-row class="bg-white" >
                <el-col :span="24">
                    <el-row class="h48 pl15">
                        <el-col :span="18">
                            <i class="el-icon-search"></i>
                            <span>查询</span>
                        </el-col>
                        <el-col :span="5">
                            <span class="fs12 open" @click="packUp">+ 收起</span>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor" style="margin-top:20px">
                            <label>品牌编码</label>
                           </div>
                        </el-col>
                        <el-col :span="14">
                            <div class="smallBgcolor" style="margin-top:20px">
                            <el-input v-model="searchItem.BrandCode"></el-input>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor" >
                            <label>品牌名称(中文)</label>
                           </div>
                        </el-col>
                        <el-col :span="14">
                            <div class="smallBgcolor" >
                            <el-input placeholder="" v-model="searchItem.BrandName"></el-input>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor" >
                                    <label>品牌名称(英文)</label>
                           </div>
                        </el-col>
                        <el-col :span="14">
                            <div class="smallBgcolor" >
                            <el-input placeholder=""></el-input>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">
                            <div class="bgcolor smallBgcolor" >
                            <label>状态</label>
                            </div>
                        </el-col>
                        <el-col :span="14">
                            <div class="bgcolor smallBgcolor">
                                <el-select  v-model="searchItem.Status" >
                                    <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8">&nbsp;</el-col>
                        <el-col style="text-align:center;margin-bottom:20px;" :span="14">
                            <span class="search-btn" style="float:left;margin-left:10px;" @click="search()">查询</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <div id="bgh">
            <el-row style="width:100%;" >
                <el-col id="bg-white"  class="border-left" :span="24" >
                    <el-row class="h48 pt5">         
                            <button class="erp_bt bt_add" @click="addCol"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>                           
                            <button v-show="isCancel" @click="cancel" class="erp_bt bt_auxiliary"><div class="btImg" style="top:14px"><img src="../../../static/image/common/u470.png"></div><span class="btDetail">取消</span></button>
                            <button class="erp_bt bt_save" @click="save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
                            <button class="erp_bt bt_del" @click="delBatch"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
                            <button class="erp_bt bt_out"><div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div><span class="btDetail">导出</span></button>                    
                            <button class="erp_bt bt_version" @click="handleStatus(1)"><div class="btImg"><img src="../../../static/image/common/bt_start.png"></div><span class="btDetail">启用</span></button>
                            <button class="erp_bt bt_auxiliary" @click="handleStatus(0)"><div class="btImg"><img src="../../../static/image/common/bt_stop.png"></div><span class="btDetail">停用</span></button> 
                            <button id="refer" @click="refer" class="erp_bt bt_version" style="display:none"><div class="btImg"><img src="../../../static/image/common/bt_start.png"></div><span class="btDetail">查询</span></button>                   
                    </el-row>
                     <el-row class="">
                        <el-col :span="24" class="">
                             <el-table @row-click="rowClick" :data="tableData" border style="width: 100%" class="text-center" @selection-change="handleSelectionChange">
                                <el-table-column
                                    type="selection"
                                    width="55">
                                </el-table-column>
                                <el-table-column prop="brandCode" label="品牌编码">
                                    <template slot-scope="scope">   
                                         <img :id=scope.row.id  :if=updateArray.indexOf(scope.row.id)  v-show='updateArray.indexOf(scope.row.id)>=0||scope.row.brandCode==""' class="update-icon" src="../../../static/image/content/redremind.png"/>                                   
                                        <input class="input-need" 
                                                v-model="scope.row.brandCode" 
                                                type="text"/>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="brandName" label="品牌名称">
                                    <template slot-scope="scope">
                                        <input class="input-need" 
                                                v-model="scope.row.brandName" 
                                                type="text"/>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="" label="英文名称" width="">
                                </el-table-column>
                                <el-table-column prop="remark" label="备注">
                                    <template slot-scope="scope">
                                        <input class="input-need" 
                                                v-model="scope.row.remark"                                                
                                                type="text"/>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="status" label="状态">
                                    <template slot-scope="scope">
                                        <el-select  v-model="scope.row.status" >
                                            <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="createdBy" label="创建人" width="">
                                    <template slot-scope="scope">
                                        <input class="input-need" 
                                                v-model="scope.row.createdBy" 
                                                type="text"/>
                                    </template>                                   
                                </el-table-column>
                                <el-table-column prop="createdTime" label="创建时间">
                                    <template slot-scope="scope">
                                        <el-date-picker
                                            v-model="scope.row.createdTime"
                                            readonly
                                            type="date">
                                        </el-date-picker>
                                    </template>
                                </el-table-column> 
                                <el-table-column prop="" label="操作" width="">
                                    <template slot-scope="scope">
                                        <el-button v-on:click="handleDel(scope.row,scope.$index)" type="text" size="small">删除</el-button>
                                    </template>
                                </el-table-column>
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
    </div>
</template>

<script>
import Query from '../../base/query/query'
import Btm from '../../base/btm/btm'
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
                    BrandCode:'',//品牌编码
                    BrandName:'',//品牌名称
                    Status:'',//状态
                }, 
                isCancel:false,//取消按钮是否可见
                isUpdate:false,//是否进行修改
                isAdd:false,//是否新增
                options: [{
                    value: 0,
                    label: '禁用'
                    }, {
                    value: 1,
                    label: '启用'
                    }],
                value: '',
                tableData:[],
                SelectionChange:[],
                addArray:[],//新增集合
                idArray:{
                    ids:[]
                },
                updateArray:[],//修改行集合
                componyTree: [{
                    label: '商品属性',
                    children: [{
                        label: '材质',
                        children: [{
                        // label: '材质',
                        label: '洗涤方式'
                        }
                        ],
                    },
                        {
                            label: '款式',
                            children: [{
                        
                        }] 
                        }],                   
                    }],
                pageIndex:1,//分页的当前页码
                totalPage:0,//当前分页总数
                eachPage:10,//每页有多少条信息
                multipleSelection: [],//复选框选中数据
                page:1,//当前页
                treeCheck:[],
                isClick:[],
                load:true,
                totalItem:0,//总共有多少条消息
                tableLoading:true,
                treeLoading:true,
                Sorting:'',//table搜索
                updateId:'',
                cancelClick:false,//是否点击取消按钮
            }
        },
        created:function(){
            //this.datashop();
            this.loadTableData();
        },
        mounted:function(){   
            let content1=document.getElementById('bg-white');//设置高度为全屏
            let height1=window.innerHeight-123;
            content1.style.minHeight=height1+'px';
        },
        watch:{
            isUpdate:function(val,oldVal){
                if(val==true){
                    this.isCancel=true
                } 
            },
            tableData:{
                handler: function (val, oldVal) {
                        if(oldVal.length>0){
                            if(this.updateArray.length==0&&this.updateId==""){
                                this.isUpdate=false
                            }else{
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
                let oleftBox=document.getElementById('left-box');
                oleftBox.style.display="block";
                let ocate= document.getElementById('bgh')
                ocate.style.width="calc(100% - 275px)";
            },
            querylog:function(data){
                let _this=this;
                if(data){
                    let ocate= document.getElementById('bgh')
                    ocate.style.width="100%";
                    _this.bottonbox.botton.push({
                        class: 'erp_bt bt_auxiliary',
                        imgsrc: '../../../static/image/common/bt_stop.png',
                        text: '查询'
                    })
                }
            },
            Init(){//数据初始化
                this.isCancel=false;
                this.isUpdate=false;
                this.isAdd=false;
                this.updateArray=[];
                this.addArray=[];
                this.updateId="";
            },
            loadTableData(){
                let _this=this;
                _this.tableLoading=true;
                _this.$axios.gets('/api/services/app/BrandManagement/GetAll',{SkipCount:(_this.page-1)*_this.eachPage,MaxResultCount:_this.eachPage}).then(function(res){
                    _this.tableData=res.result.items;
                    let countPage=res.result.totalCount;
                    _this.totalPage = Math.ceil(countPage/_this.eachPage);
                    _this.Init();
                  
                })
            },
            showErrprTips(e){
                $('.tipsWrapper').each(function(){
                if($(e.target).parent('.el-input').hasClass($(this).attr('name'))){
                    $(this).addClass('display_block')
                }else{
                    $(this).removeClass('display_block')
                }
                })
            },
            handleCurrentChange:function(val){//获取当前页码,分页
                if(this.isUpdate){
                    this.$confirm('存在未保存修改项，是否继续查看下一页?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning',
                        center: true
                        }).then(() => {
                            this.pageIndex=val;
                            this.page = val;
                            this.loadTableData();
                        }).catch(() => {
                            
                    });
                }
                
                
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
            rowClick(row){//获取行id
                this.updateId=row.id
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
                var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                    + " " + date.getHours() + seperator2 + date.getMinutes()
                    + seperator2 + date.getSeconds();
                return currentdate;
            },
            addCol(){//新增
                let newcol={
                    "groupId":0,
                    "brandCode":"" ,
                    "brandName":"" ,
                    "status":"" ,
                    "remark": "" ,
                    "remark2":"" ,
                    "statusTValue":1,
                    "createdBy":this.$store.state.name,
                    "createdTime":this.GetDateTime()
                    //"seq":Math.max.apply(Math,this.tableData.map(function(o){return Number(o.seq);}))+1
                };
                this.isUpdate=true;
                this.isAdd=true;
                this.tableData.unshift(newcol);
                this.addArray.push(newcol);
            },
            handleDel(row,index){//行内删除
                this.$confirm('确定删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                    }).then(() => {
                    if(row.brandCode==""){
                        this.tableData.splice(index,1)
                        }else{
                            let _this=this;
                            _this.$axios.deletes('/api/services/app/BrandManagement/Delete',{Id:row.id}).then(function(res){
                                _this.loadTableData();
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
            search(){//按条件查询
                let _this=this;
                _this.$axios.gets('/api/services/app/BrandManagement/GetData',_this.searchItem).then(function(res){
                    _this.tableData=res.result;                   
                })
            },
            cancel(){//数据恢复到初始化状态 取消
                this.cancelClick=true;
                this.loadTableData();
            },
            handleSelectionChange(val){//多选操作
                this.SelectionChange=val;
            },
            handleStatus(statu){//批量启用/禁用
                let handleArray=[];
                if(this.SelectionChange.length>0){
                    this.isUpdate=true;
                    for(let o in this.SelectionChange){
                        this.updateArray.push(this.SelectionChange[o].id)
                        handleArray.push(this.SelectionChange[o].id)
                    }
                    for(let i in handleArray){
                        for(let j in this.tableData){
                            if (handleArray[i]==this.tableData[j].id){
                                this.tableData[j].status=statu;
                            }
                        }
                    }
                }
            },
            delBatch(){//批量删除
                for(var i in this.SelectionChange){
                    this.idArray.ids.push(this.SelectionChange[i].id)
                }
                let _this=this;
                if(this.idArray.ids.length>0){
                    this.$confirm('确定删除?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning',
                        center: true
                        }).then(() => {
                        if(row.brandCode==""){
                            this.tableData.splice(index,1)
                            }else{
                                 _this.$axios.posts('/api/services/app/BrandManagement/BatchDelete',_this.idArray).then(function(res){
                                    _this.loadTableData();
                                    _this.open('删除成功','el-icon-circle-check','successERP');    
                                })
                            }
                        }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: '已取消删除'
                            });
                    });
                   
                }
            },
            save(){
                let _this=this;
                if(_this.addArray.length>0){//新增保存
                    for(let i=0;i<_this.addArray.length;i++){
                        if(_this.addArray[i].brandCode==""||_this.addArray[i].brandName==""){
                            console.log("必填为空！")
                            return false
                        }
                    }
                    if(_this.addArray.length==1){//单条新增
                        _this.$axios.posts('/api/services/app/BrandManagement/Create',_this.addArray[0]).then(function(res){
                            _this.loadTableData();
                            _this.open('保存商品品牌成功','el-icon-circle-check','successERP');    
                            _this.isAdd=false
                        }); 
                    }else{//批量新增
                        _this.$axios.posts('/api/services/app/BrandManagement/BatchCreate',_this.addArray).then(function(res){
                            _this.loadTableData();
                            _this.open('保存商品品牌成功','el-icon-circle-check','successERP');    
                            _this.isAdd=false
                        }); 
                    }                    
                }else if(_this.isUpdate){//修改保存
                    if(_this.updateArray.length==1){//单条修改
                        let updataIndex=-1;
                        for(let i in _this.tableData){
                            if(_this.updateArray[0]==_this.tableData[i].id){
                                updataIndex=i;
                            }
                        }
                        _this.$axios.puts('/api/services/app/BrandManagement/Update',_this.tableData[updataIndex]).then(function(res){
                            _this.loadTableData();
                            _this.open('保存商品品牌成功','el-icon-circle-check','successERP');    
                        });
                    }else{//批量修改
                        _this.$axios.posts('/api/services/app/BrandManagement/BatchUpdate',_this.tableData).then(function(res){
                            _this.loadTableData();
                            _this.open('保存商品品牌成功','el-icon-circle-check','successERP');    
                            _this.isAdd=false
                        }); 
                    }
                }              
                  
            },                           
            packUp(){
                let oleftBox=document.getElementById('left-box');
                let Re=document.getElementById('refer');
                let obgh=document.getElementById('bgh');
                oleftBox.style.display="none";
                obgh.style.width="100%";
                Re.style.display="block";
            },
            refer(){
                let obgh=document.getElementById('bgh');
                let oleftBox=document.getElementById('left-box');
                let Re=document.getElementById('refer');
                obgh.style.width="calc(100% - 275px)";
                oleftBox.style.display="block";
                Re.style.display="none";
            },
        }
    }
</script>

<style scoped>
.bg-white{
    background: white;
    border-radius: 3px;
}
.input-need{
    outline: none;
    border:none;
    width: 100%;
    height: 28px;
    text-align: center;
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
.pt5{
    padding-top: 5px;
}
.pt10{
    padding-top: 10px;
}
.pl15{
    padding-left: 15px;
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
.fs12{
    font-size: 12px;
}
#bgh{
   float: left;
   width: calc(100% - 275px); 
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
.update-icon{
    position: absolute;
    left: -55px;
    top: 0px;
}
.Highlight{
    background: #4A6997;
}
</style>

<style>
.el-checkbox__inner{
    width: 16px;
    height: 16px;
    background: #f4f4f5;
}
.el-checkbox__inner::after{
    left: 4px;
    top: -2px;
}
.text-left{
    text-align: left;
}
.text-center{
    text-align: center;
}
.tenant-management-wrapper .el-input input{
    border:none;
    height: 30px;
    line-height: 30px;
    padding-left: 0;
}
/* 重写checkbox */
.tenant-management-wrapper .el-checkbox__inner{
    width: 24px;
    height: 24px;
    border-radius:50% !important; 
}
.tenant-management-wrapper .el-checkbox__inner::after{
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
.group-management-wrapper .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.group-management-wrapper .el-table td{
    padding: 3px 0;
}
.group-management-wrapper .el-table__body{
    text-align: center;
}
/* 日期控件 */
table .el-date-editor.el-input{
    width:100%;
}
table .el-input--prefix .el-input__inner{
    border:none;
    background-color:transparent;
    padding-left:0;
    padding-right:0;
}
table .el-input__icon{
    display:none;
}
/* 表格内编辑下拉框样式重构 */
table .el-input__inner{
    height: 28px;
    text-align:center;
    border:none;
}
</style>