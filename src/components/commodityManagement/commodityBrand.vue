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
                            <el-input v-model="queryParams.BrandCode"></el-input>
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
                            <el-input placeholder="" v-model="queryParams.BrandName"></el-input>
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
                            <el-input placeholder="" v-model="queryParams.BrandEname"></el-input>
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
                                <el-select  v-model="queryParams.Status" >
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
                            <buttonGroup :buttonGroup="buttonGroup" @btnClick='btnClick'></buttonGroup>    
                            </el-col>                   
                    </el-row>
                     <el-row>
                        <el-col :span="24" class="mt10">
                            <!-- <el-button :click="transferConfirm">穿梭框</el-button> -->
                            <Table  :methodsUrl="httpUrl" :pluginSetting="pluginSetting"  :cols="column" :queryParams="queryParams"  :tableName="tableModel" :command="command" :ifSave="isSave"></Table>
                            <!-- 穿梭框 -->
                            <!-- <Transfer :transferHttpSetting='transferHttpSetting' :OptionalCols='OptionalCols' @transferConfirm='transferConfirm'></Transfer> -->
                        </el-col> 
                    </el-row>
                </el-col>
            </el-row>
            <dialogBox :dialogSetting='dialogSetting'  :errorTips='errorTips' :dialogVisible="dialogVisible"  :dialogCommand='dialogCommand'  @dialogClick="dialogClick" @dialogColse='dialogColse'></dialogBox>     
        </div>
    </div>
</template>

<script>
import Table from '../../base/Table/Table'
import Query from '../../base/query/query'
import buttonGroup from '../../base/buttonGroup/buttonGroup'
import dialogBox from '../../base/dialog/dialog'
import Transfer from '../../base/Transfer/Transfer'
    export default{
        name:'customerInfor',
        data(){
            return {
                transferHttpSetting:{
                    transferName:'ceshi',
                    transferApi:'/api/services/app/BrandManagement/GetListByCondition',
                    transferParams:{
                        BrandCode:'',//品牌编码
                        BrandName:'',//品牌名称
                        BrandEname:'',//品牌名称(英文)
                        Status:'',//状态
                        MaxResultCount:'100',
                        SkipCount:'0',
                    }
                },
                OptionalCols:[{
                    prop: 'brandCode',
                    label: '品牌编码'
                    },{
                    prop: 'brandName',
                    label: '品牌名称'
                    }],
                queryParams:{
                    BrandCode:'',//品牌编码
                    BrandName:'',//品牌名称
                    BrandEname:'',//品牌名称(英文)
                    Status:'',//状态
                    SkipCount:(this.$store.state.commodityBrandCurrentPage-1)*this.$store.state.commodityBrandEachPage,
                    MaxResultCount:this.$store.state.commodityBrandEachPage
                }, 
                isUpdate:false,//是否进行修改
                isAdd:false,//是否新增
                options: [{
                    value: 0,
                    label: '禁用'
                    }, {
                    value: 1,
                    label: '启用'
                    },{
                    value: '',
                    label: '全部'
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
                dialogCommand:[],//底部按钮组控制组
                //dialogVisible:false,//对话框是否显示
                dialogVisible:false,
                errorTips:{//对话框 错误提示
                    message:'',
                    details:'',
                },
                dialogSetting:{
                    message:'',//提示信息
                    dialogName:'',//对话框名称
                    dialogType:'',//对话框类型
                },
                pluginSetting:{
                    hasPagination:true,
                    mutiSelect:true,//多选栏
                    isDisable:false,
                },
                httpUrl:{
                    delete:'/api/services/app/BrandManagement/Delete',//行内删除
                    query:'/api/services/app/BrandManagement/GetListByCondition',//条件查询
                },
                column: [{
                    prop: 'brandCode',
                    label: '品牌编码',
                    controls:'text',
                    required:true,
                    flag:true,//更改标识
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
                    dataSource:[]
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
                buttonGroup:[{
                    text:'新增',
                    class:'bt_add',
                    icon:'icon-xinzeng',
                    disabled:false,
                },{
                    text:'删除',
                    class:'bt_del',
                    icon:'icon-shanchu',
                    disabled:false,
                },{
                    text:'保存',
                    class:'bt_save',
                    icon:'icon-baocun',
                    disabled:false,
                },{
                    text:'取消',
                    class:'bt_cancel',
                    icon:'icon-quxiao',
                    disabled:true,
                },{
                    text:'启用',
                    class:'bt_version',
                    icon:'icon-qiyong',
                    disabled:false,
                },{
                    text:'停用',
                    class:'bt_auxiliary',
                    icon:'icon-tingyong',
                    disabled:false,
                },{
                    text:'导出',
                    class:'bt_out',
                    icon:'icon-daochu1',
                    disabled:false,
                }],//按钮组
                cancelDisable:true,
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
            this.InitStatus();//初始化状态枚举表
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
                if(this.$store.state[this.tableModel+'NewColArray'].length>0||this.$store.state[this.tableModel+'UpdateColArray'].length>0){
                    return false
                }else{
                    return true
                }
            },
        },
        watch:{
            isUpdate:function(val,oldVal){
                if(val==true){
                    this.turnPage=$(document).find(".pageActive.is-background .el-pager li.active").html();
                }
            },
            isCancel:function(val,oldVal){//监听是否修改或新增数据
                if(!val){
                    this.buttonGroup[3].disabled=false
                }else{
                    this.buttonGroup[3].disabled=true
                }
            },
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
            // Init(){//数据初始化
            //     this.isUpdate=false;
            //     this.isAdd=false;
            //     this.isSave=false;
            //     this.pageFlag=true;
            //     this.updateArray=[];
            //     this.addArray=[];
            //     this.updateId="";
            // },
            transferConfirm(data){
                console.log(data);
            },
            InitStatus(){//获取状态枚举表
                let _this=this;
                _this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status002'}).then(function(res){
                    _this.column[4].dataSource=res.result;
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
            btnClick(btn){//按钮组点击事件
                if(btn=="新增"){//新增事件
                    this.addCol();
                }else if(btn=="删除"){//删除事件
                    this.delBatch();
                }else if(btn=="保存"){//保存事件
                    this.save();
                }else if(btn=="取消"){//取消事件
                    this.cancel();
                }else if(btn=="启用"){
                    this.handleStatus(1);
                }else if(btn=="停用"){
                    this.handleStatus(0);
                }
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
                    this.isSave=false;
                    this.$store.dispatch('addCol',newcol);//表格行内新增
                }                              
            },
            search(){//按条件查询
                let _this=this;
                _this.$axios.gets('/api/services/app/BrandManagement/GetListByCondition',_this.queryParams).then(function(res){
                    _this.$store.commit('Init_Table',res.result.items);
                    _this.$store.commit('get_RowId',"")//置空修改行id
                    let totalPage=Math.ceil(res.result.totalCount/_this.$store.state.commodityBrandEachPage);
                    _this.$store.commit('Init_pagination',totalPage);
                    _this.$store.commit('Init_TotalCount',res.result.totalCount);
                    _this.$store.commit('setCurrentPage',1)//设置当前页码为初始值1             
                })
            },
            cancel(){//数据恢复到初始化状态 取消
                this.dialogSetting.dialogName='cancelDialog'
                this.dialogSetting.message="此操作将忽略您的更改，是否继续？";
                this.dialogSetting.dialogType="confirm";
                this.dialogCommand=[{text:'确定',class:'btn-confirm'},{text:'取消',class:'btn-cancel'}];
                this.dialogVisible=true;
            },
            handleStatus(statu){//批量启用/禁用
                let handleArray=[];
                this.SelectionChange= this.$store.state[this.tableModel+'Selection'];
                let tableData=this.$store.state[this.tableModel+'Table'];
                if(this.SelectionChange.length>0){
                    for(let o in this.SelectionChange){
                        this.$store.commit('Add_UpdateArray',this.SelectionChange[o])
                        handleArray.push(this.SelectionChange[o])
                    }
                    for(let i in handleArray){
                        for(let j in tableData){
                            if (handleArray[i].id==tableData[j].id){
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
                    this.dialogSetting.dialogName='delDialog'
                    this.dialogSetting.message="确定删除？";
                    this.dialogSetting.dialogType="confirm";
                    this.dialogCommand=[{text:'确定',class:'btn-confirm'},{text:'取消',class:'btn-cancel'}];
                    this.dialogVisible=true;
                }                
            },
            dialogClick(parmas){
                if(parmas.dialogButton=="确定"){
                    if(parmas.dialogName=="delDialog"){//删除对话框
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
                                _this.dialogVisible=false;
                                this.idArray.ids=[];
                                return;
                        }
                        if(_this.idArray.ids.length>0){
                            _this.$axios.posts('/api/services/app/BrandManagement/BatchDelete',_this.idArray).then(function(res){
                                _this.$store.dispatch('InitTable');
                                _this.$store.commit('setTableSelection',[])
                                _this.idArray.ids=[];
                                _this.dialogVisible=false;
                                _this.open('删除成功','el-icon-circle-check','successERP');    
                            })
                        }
                    }else if(parmas.dialogName=="saveDialog"){//保存提交对话框
                        this.dialogVisible=false;
                    }else if(parmas.dialogName=="cancelDialog"){//取消对话框
                        this.isSave=false;
                        this.dialogVisible=false;//关闭对话框
                        this.$store.dispatch('InitTable');
                        this.$store.commit('setAddColArray',[])//置空新增集合
                        this.$store.commit('setUpdateColArray',[])//置空修改增集合
                    }
                }else if(parmas.dialogButton=="取消"){
                    if(parmas.dialogName=="delDialog"){//多选删除取消操作
                        this.$store.commit('setTableSelection',[])//置空多选
                    }
                    this.dialogVisible=false;
                }

            },
            save(){
                let _this=this;
                let newArray=_this.$store.state[_this.tableModel+'NewColArray'];
                let newArrayLength=_this.$store.state[_this.tableModel+'NewColArray'].length;
                let updateArray=_this.$store.state[_this.tableModel+'UpdateColArray'];
                let updateArrayLength=_this.$store.state[_this.tableModel+'UpdateColArray'].length;
                let tableData=_this.$store.state[_this.tableModel+'Table'];
                // 新增保存
                if(newArrayLength>0){//新增保存
                    _this.isSave=true;
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
                if(newArrayLength>0||updateArrayLength>0){
                      _this.$axios.posts('/api/services/app/BrandManagement/CUDAggregate',{createList:newArray,updateList:updateArray,}).then(function(res){
                            _this.$store.commit('setAddColArray',[])//置空新增集合
                            _this.$store.commit('get_RowId',"")//置空修改行id
                            _this.$store.commit('setUpdateColArray',[])//置空修改集合
                            _this.$store.dispatch('InitTable');
                            _this.isSave=false;
                            _this.open('保存商品品牌成功','el-icon-circle-check','successERP');  
                        }).catch(function(err){
                                    //err.status;
                            _this.dialogSetting.dialogType="submit";
                            _this.dialogSetting.dialogName='saveDialog'
                            _this.dialogSetting.message="信息提报有误";
                            _this.errorTips.message=err.error.message;
                            _this.errorTips.details='';
                            _this.dialogCommand=[{text:'确定',class:'btn-confirm'}];
                            _this.dialogVisible=true;
                            _this.isSave=false;
                        })   
                }                                           
            }, 
            dialogColse(){//对话框关闭回调事件
                this.dialogVisible=false;
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
            dialogBox,
            buttonGroup,
            Transfer
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
@import url('//at.alicdn.com/t/font_561828_9n5ekuys0aw9izfr.css');
.el-checkbox__inner{
    width: 18px;
    height: 18px;
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
</style>