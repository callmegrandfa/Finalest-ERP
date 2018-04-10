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
                            <label >品牌编码</label>
                           </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="bgcolor smallBgcolor" style="margin-top:20px">
                            <el-input v-model="searchItem.BrandCode"></el-input>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="9">
                            <div class="bgcolor smallBgcolor" >
                            <label >品牌名称(中文)</label>
                           </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="bgcolor smallBgcolor" >
                            <el-input placeholder="" v-model="searchItem.BrandName"></el-input>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="9">
                            <div class="bgcolor smallBgcolor" >
                                    <label >品牌名称(英文)</label>
                           </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="bgcolor smallBgcolor" >
                            <el-input placeholder="" v-model="searchItem.BrandEname"></el-input>
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
                                <el-select  v-model="searchItem.Status" >
                                    <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
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
        <div id="bgh">
            <el-row style="width:100%;" >
                <el-col id="bg-white"  class="border-left" :span="24" >
                    <el-row class="h48 ">
                            <el-col :span="ifWidth?0:2" class="search-block">
                                <div @click="openLeft">
                                    <img src="../../../static/image/common/search_btn.png">
                                    <span>查询</span>
                                    <span class='open-search'>+</span>
                                </div>
                            </el-col>
                            <el-col :span="ifWidth?24:22" class="pt5">         
                            <button class="erp_bt bt_add" @click="addCol"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>                           
                            <button :disabled="isCancel" @click="cancel" class="erp_bt bt_auxiliary"><div class="btImg" style="top:14px"><img src="../../../static/image/common/u470.png"></div><span class="btDetail">取消</span></button>
                            <button class="erp_bt bt_save" @click="save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
                            <button class="erp_bt bt_del" @click="delBatch"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
                            <button class="erp_bt bt_out"><div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div><span class="btDetail">导出</span></button>                    
                            <button class="erp_bt bt_version" @click="handleStatus(1)"><div class="btImg"><img src="../../../static/image/common/bt_start.png"></div><span class="btDetail">启用</span></button>
                            <button class="erp_bt bt_auxiliary" @click="handleStatus(0)"><div class="btImg"><img src="../../../static/image/common/bt_stop.png"></div><span class="btDetail">停用</span></button> 
                            <button id="refer" @click="refer" class="erp_bt bt_version" style="display:none"><div class="btImg"><img src="../../../static/image/common/bt_start.png"></div><span class="btDetail">查询</span></button>
                            </el-col>                   
                    </el-row>
                     <el-row class="">
                        <el-col :span="24" class="">
                            <Table  :methodsUrl="httpUrl" :cols="column" :HttpParams="HttpParams" :isDisable='isDisable' :mutiSelect="mutiSelect" :tableName="tableModel" :command="command" :ifSave="isSave"></Table>
                             <!-- <el-table @row-click="rowClick" :data="tableData" border style="width: 100%" class="text-center" @selection-change="handleSelectionChange">
                                <el-table-column
                                    type="selection"
                                    width="55">
                                </el-table-column>
                                <el-table-column prop="brandCode" label="品牌编码">
                                    <template slot-scope="scope">   
                                         <img :id=scope.row.id  :if=updateArray.indexOf(scope.row.id)  v-show='updateArray.indexOf(scope.row.id)>=0||scope.row.brandCode==""' class="update-icon" src="../../../static/image/content/redremind.png"/>                                   
                                        <input class="input-need" :class="{errorclass:scope.row.brandCode==''&&isSave==true}"
                                                v-model="scope.row.brandCode" 
                                                type="text"/>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="brandName" label="品牌名称">
                                    <template slot-scope="scope">
                                        <input class="input-need" :class="{errorclass:scope.row.brandName==''&&isSave==true}" 
                                                v-model="scope.row.brandName" 
                                                type="text"/>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="brandEname" label="英文名称" width="">
                                    <template slot-scope="scope">
                                        <input class="input-need" :class="{errorclass:scope.row.brandEname==''&&isSave==true}" 
                                                v-model="scope.row.brandEname" 
                                                type="text"/>
                                    </template>
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
                                        <el-select  v-model="scope.row.status" :un="scope.row.status" >
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
                            </el-table> -->
                        <!-- <el-pagination
                         style="margin-top:20px;" 
                         class="text-right pageActive"
                         :current-page.sync="currentPage"
                         background layout="total, prev, pager, next" 
                         @current-change="handleCurrentChange"
                         :page-count="totalPage" >
                         </el-pagination>    -->
                        </el-col> 
                    </el-row>
                </el-col>
            </el-row>
            <dialogBox :message="dialogMessage" :dialogVisible="dialogShow"  @confirm="delConfirm" @cancel="delCancel"></dialogBox>   
        </div>
    </div>
</template>

<script>
import Table from '../../base/Table/Table'
import Query from '../../base/query/query'
import Btm from '../../base/btm/btm'
import dialogBox from '../../base/dialog/dialog'
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
                dialogMessage:'',
                dialogShow:false,
                searchItem:{
                    BrandCode:'',//品牌编码
                    BrandName:'',//品牌名称
                    BrandEname:'',//品牌名称(英文)
                    Status:'',//状态
                }, 
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
                treeCheck:[],
                isClick:[],
                load:true,
                totalItem:0,//总共有多少条消息
                tableLoading:true,
                treeLoading:true,
                Sorting:'',//table搜索
                updateId:'',
                ifWidth:true,
                cancelClick:false,//是否点击取消按钮
                turnPage:-1,//是否允许翻页
                pageFlag:true,
                httpUrl:{
                    Initial:'/api/services/app/BrandManagement/GetAll',//数据初始化
                    delete:'/api/services/app/BrandManagement/Delete',//行内删除
                },
                HttpParams:{
                    SkipCount:(this.$store.state.commodityBrandCurrentPage-1)*this.$store.state.commodityBrandEachPage,
                    MaxResultCount:this.$store.state.commodityBrandEachPage
                },
                isDisable:false,
                column: [{
                    prop: 'brandCode',
                    label: '品牌编码',
                    controls:'text',
                    required:true,
                    flag:true,//更改标识
                    isFix:"",
                    width:"auto",
                    isDisable:false,
                    sortable:false,
                    },{
                    prop: 'brandName',
                    label: '品牌名称',
                    controls:'text',
                    required:true,
                    width:"auto",
                    isDisable:false,
                    sortable:false,
                    },{
                    prop: 'brandEname',
                    label: '英文名称',
                    controls:'text',
                    required:true,
                    width:"auto",
                    isDisable:false,
                    sortable:false,
                    },{
                    prop: 'remark',
                    label: '备注',
                    controls:'text',
                    width:"auto",
                    isDisable:false,
                    sortable:false,
                    },{
                    prop: 'status',
                    label: '状态',
                    controls:'select',
                    width:"auto",
                    isDisable:false,
                    sortable:false,
                    dataSource:[{
                            value: 1,
                            label: '启用'
                        },{
                            value: 0,
                            label: '禁用'
                        }]
                    },{
                    prop: 'createdBy',
                    label: '创建人',
                    controls:'text',
                    width:"auto",
                    isDisable:true,
                    sortable:false,
                    },{
                    prop: 'createdTime',
                    label: '创建时间',
                    controls:'datetime',
                    width:"auto",
                    isDisable:true,
                    sortable:true,
                    }],
                isSave:false,
                enableEdit:false,
                tableModel:'commodityBrand',
                command:[{
                    text:'删除',
                    class:'blue'
                }],
                // hasControl:{//操作列控制
                //     control:true,//操作栏是否显示
                //     modify:false,//查看按钮是否显示
                //     del:true,//删除按钮是否显示
                // },
                mutiSelect:true,//多选栏
                commodityBrandNewCol:{
                    groupId:0,
                    brandCode:"" ,
                    brandName:"" ,
                    brandEname:"",
                    status:1 ,
                    remark:" " ,
                    remark2:" " ,
                    statusTValue:1,
                    createdBy:this.$store.state.name,
                    createdTime:this.GetDateTime()
                    //"seq":Math.max.apply(Math,this.tableData.map(function(o){return Number(o.seq);}))+1
                }
            }
        },
        created:function(){
            //this.datashop();
           // this.loadTableData();
            $(document).on("click",".pageActive .el-pager>li",function(){
                if(_this.turnPage==false){
                   //$(this).html("12");
                   $(this).css("background","#f4f4f5")
                }  
            })
        },
        mounted:function(){   
            let content1=document.getElementById('bg-white');//设置高度为全屏
            let height1=window.innerHeight-123;
            content1.style.minHeight=height1+'px';
        },
        computed:{
            newColArray(){//新增数据集合
                if(!this.enableEdit){
                    return this.$store.state[this.tableModel+'NewColArray'];
                }else{
                    return [];
                }
                
            },
            isCancel(){
                if(this.$store.state[this.tableModel+'NewColArray'].length>0||this.$store.state[this.tableModel+'UpdateColArray'].length>0||!this.$store.state[this.tableModel+'IfDel']){
                    return false
                }else{
                    return true
                }
            }
        },
        watch:{
            isUpdate:function(val,oldVal){
                if(val==true){
                    this.turnPage=$(document).find(".pageActive.is-background .el-pager li.active").html();
                }
            },
            newColArray:{
                handler: function (val, oldVal) {
                },
                deep:true
            },
            tableData:{
                handler: function (val, oldVal) {
                        if(oldVal.length>0){
                            if(this.updateArray.length==0&&this.updateId==""){
                                this.isUpdate=false
                            }else{
                                this.isUpdate=true;
                            }
                            if(this.updateArray.length==0&&!this.$store.state[this.tableModel+'IfDel']){//判断是否为第一行修改的数据
                                this.updateArray.push(this.updateId)
                            }else{
                                if(this.updateArray.indexOf(this.updateId)==-1&&!this.$store.state[this.tableModel+'IfDel']){
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
            closeLeft:function(){
                let self = this;
                self.ifWidth = false;
                let obgh=document.getElementById('bgh');
                obgh.style.width="100%";
            },
            openLeft:function(){
               let self = this;
               self.ifWidth = true;
               let obgh=document.getElementById('bgh');
                obgh.style.width="calc(100% - 340px)";
            },
            btmlog:function(data){
                let oleftBox=document.getElementById('left-box');
                oleftBox.style.display="block";
                let ocate= document.getElementById('bgh')
                ocate.style.width="calc(100% - 340px)";
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
                this.isUpdate=false;
                this.isAdd=false;
                this.isSave=false;
                this.pageFlag=true;
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
                    _this.Init();
                    _this.totalPage = Math.ceil(countPage/_this.eachPage);
                  
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
                    "brandEname":"",
                    "status":1 ,
                    "remark": " " ,
                    "remark2":" " ,
                    "statusTValue":1,
                    "createdBy":this.$store.state.name,
                    "createdTime":this.GetDateTime()
                    //"seq":Math.max.apply(Math,this.tableData.map(function(o){return Number(o.seq);}))+1
                };
                let newArrayLength=this.$store.state[this.tableModel+'NewColArray'].length;
                if(newArrayLength>2){
                    this.$message({
                        type: 'info',
                        message: '请先编辑保存新增项'
                    });
                }else{
                    this.$store.commit('setIfDel',false)//重置修改参数
                    this.$store.dispatch('addCol',newcol);//表格行内新增
                }                              
            },
            search(){//按条件查询
                let _this=this;
                _this.$axios.gets('/api/services/app/BrandManagement/GetData',_this.searchItem).then(function(res){
                    //_this.tableData=res.result;
                    _this.$store.state[_this.tableModel+'Table']=res.result.items; 
                    _this.$store.commit('get_RowId',"")//置空修改行id
                    let totalPage=Math.ceil(res.result.totalCount/_this.$store.state.eachPage);
                    _this.$store.commit('Init_pagination',totalPage);
                    _this.$store.commit('setCurrentPage',1)//设置当前页码为初始值1             
                })
            },
            cancel(){//数据恢复到初始化状态 取消
                this.isSave=false;
                this.$store.dispatch('InitTable');
                this.$store.commit('setIfDel',true)
                this.$store.commit('get_RowId',"")//置空修改行id
                this.$store.commit('setAddColArray',[])//置空新增集合
                this.$store.commit('setUpdateColArray',[])//置空修改增集合
            },
            handleSelectionChange(val){//多选操作
                this.SelectionChange=val;
            },
            handleStatus(statu){//批量启用/禁用
                let handleArray=[];
                this.SelectionChange= this.$store.state[this.tableModel+'Selection'];
                let tableData=this.$store.state[this.tableModel+'Table'];
                if(this.SelectionChange.length>0){
                    for(let o in this.SelectionChange){
                        this.$store.commit('Add_UpdateArray',this.SelectionChange[o].id)
                        handleArray.push(this.SelectionChange[o].id)
                    }
                    for(let i in handleArray){
                        for(let j in tableData){
                            if (handleArray[i]==tableData[j].id){
                               tableData[j].status=statu;
                            }
                        }
                    }
                }else if(this.SelectionChange.length==0){
                    this.$message({
                        type: 'info',
                        message: '请勾选需要更改状态的记录！'
                    });
                }
                
            },
            delBatch(){//批量删除
                this.SelectionChange= this.$store.state[this.tableModel+'Selection'];
                if(this.SelectionChange.length==0){
                    this.$message({
                        type: 'info',
                        message: '请勾选需要更改删除的记录！'
                    });
                }else{
                    this.dialogMessage="确认删除";
                    this.dialogShow=true;
                }                
            },
            delConfirm(){
                this.SelectionChange= this.$store.state[this.tableModel+'Selection'];
                for(var i in this.SelectionChange){
                    this.idArray.ids.push(this.SelectionChange[i].id)
                }
                let _this=this;
                if(_this.idArray.ids.indexOf(undefined)!=-1){
                        _this.$message({
                            type: 'warning',
                            message: '新增数据请在行内删除'
                        });
                        _this.dialogShow=false;
                        this.idArray.ids=[];
                        return;
                }
                if(_this.idArray.ids.length>0){
                    _this.$axios.posts('/api/services/app/BrandManagement/BatchDelete',_this.idArray).then(function(res){
                        _this.$store.dispatch('InitTable');
                        _this.$store.commit('setTableSelection',[])
                        _this.idArray.ids=[];
                        _this.dialogShow=false;
                        _this.open('删除成功','el-icon-circle-check','successERP');    
                    })
                }
            },
            delCancel(){
                this.dialogShow=false;
            },
            save(){
                let _this=this;
                _this.isSave=true;
                let newArray=_this.$store.state[_this.tableModel+'NewColArray'];
                let newArrayLength=_this.$store.state[_this.tableModel+'NewColArray'].length;
                let updateArray=_this.$store.state[_this.tableModel+'UpdateColArray'];
                let updateArrayLength=_this.$store.state[_this.tableModel+'UpdateColArray'].length;
                let tableData=_this.$store.state[_this.tableModel+'Table'];
                // 新增保存
                if(newArrayLength>0){//新增保存
                    for(let i in newArray){
                        if(newArray[i].brandCode==""||newArray[i].brandName==""||newArray[i].brandEname==""){
                            this.$message({
                                message: '红色框内为必填项！',
                                type: 'error'
                            });
                            return;
                        }
                    }
                }
                if(newArrayLength>0){
                    if(newArrayLength==1){//单条新增
                        _this.$axios.posts('/api/services/app/BrandManagement/Create',newArray[0]).then(function(res){
                            _this.$store.commit('setAddColArray',[])//置空新增集合
                            _this.$store.dispatch('InitTable');
                            _this.$store.commit('setIfDel',true)
                            _this.isSave=false;
                            _this.open('保存商品品牌成功','el-icon-circle-check','successERP');  
                        }).catch(function(err){
                            _this.$message({
                                type: 'warning',
                                message: err.error.message
                            });
                            _this.isSave=false;
                        })   
                    }else{//批量新增                      
                        _this.$axios.posts('/api/services/app/BrandManagement/BatchCreate',newArray).then(function(res){
                            _this.$store.commit('setAddColArray',[])//置空新增集合
                            _this.$store.dispatch('InitTable');
                            _this.$store.commit('setIfDel',true)
                            _this.isSave=false;
                            _this.open('保存商品品牌成功','el-icon-circle-check','successERP');  
                        }); 
                    }    
                }
                if(updateArrayLength>0){
                    if(updateArrayLength==1){//单条修改
                        let updataIndex=-1;
                        for(let i in tableData){
                            if(updateArray[0]==tableData[i].id){
                                updataIndex=i;
                            }
                        }
                        _this.$axios.puts('/api/services/app/BrandManagement/Update',tableData[updataIndex]).then(function(res){
                            _this.$store.commit('get_RowId',"")//置空修改行id
                            _this.$store.commit('setUpdateColArray',[])//置空修改集合
                            _this.$store.commit('setIfDel',true)
                            _this.$store.dispatch('InitTable');
                            _this.isSave=false;
                            _this.open('保存商品品牌成功','el-icon-circle-check','successERP');    
                        });
                    }else{//批量修改
                        _this.$axios.posts('/api/services/app/BrandManagement/BatchUpdate',tableData).then(function(res){
                            _this.$store.commit('get_RowId',"")//置空修改行id
                            _this.$store.commit('setUpdateColArray',[])//置空修改集合
                            _this.$store.commit('setIfDel',true)
                            _this.$store.dispatch('InitTable');
                            _this.isSave=false;
                            _this.open('保存商品品牌成功','el-icon-circle-check','successERP');    
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
        },
        components:{
            Table,
            dialogBox
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
   width: calc(100% - 340px); 
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
    width: 18px;
    height: 18px;
    background: #f4f4f5;
}
.el-checkbox__inner::after{
    left: 4px;
    top: -2px;
}
.el-table--enable-row-hover .el-table__body tr:hover>td{
    background:#ecf5ff;
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
/* 验证为空 */
.errorclass{
    border:1px solid #f98b8b!important;
}
button.erp_bt[disabled] {
    cursor: not-allowed;
    background: #ccc;
}
</style>