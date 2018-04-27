<template>
    <div class="specifcationOfGoods commodity" >
        
        <div id="bgl">
            <el-row class="bg-white">
                <el-col :span="24" class="border-left" id="bg-white">

                        <el-col :span="5" >
                            <!-- <div class="transfer_search" style="width:100%;" >
                                
                            </div> -->
                            <el-col class="h48 pl15 pr15" :span="24">
                                <!-- <el-input
                                    placeholder="搜索..."
                                    v-model="searchLeft" class="search_input">
                                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                                </el-input> -->
                                <el-input
                                    placeholder="搜索..."
                                    v-model="searchLeft"
                                    class="search_input"
                                    >
                                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                                </el-input>
                            </el-col>
                            <el-col :span='24' class="tree-container">
                                <vue-scroll :ops="$store.state.option">
                                    <div class="propertyParentid">
                                        <el-tree oncontextmenu="return false" ondragstart="return false"  onbeforecopy="return false" style="-moz-user-select: none"
                                            :data="componyTree"
                                            v-loading="treeLoading" 
                                            :filter-node-method="filterNode"
                                            :highlight-current="true"
                                            node-key="id"
                                            :props="defaultProps"
                                            default-expand-all
                                            ref="tree"
                                            :expand-on-click-node="false"
                                            :render-content="renderContent_moduleParentId"
                                            @node-click="TreeNodeClick">
                                            
                                        </el-tree>
                                    </div>
                                </vue-scroll>
                            </el-col>
                        </el-col>
                        
                            <el-col :span="19" >
                                
                                <el-col :span="24" class="bg-white">
                                    <btm :date="bottonbox" v-on:listbtm="btmlog"> </btm>
                                </el-col>
                                <el-table v-loading="tableLoading" :data="tableData"  @row-click="rowClick" @selection-change="handleSelectionChange" border style="width: 100%">
                                    <el-table-column type="selection" label="" width="50">
                                    </el-table-column>
                                    <el-table-column  label="属性名称" prop="specId_SpecName" width="150">
                                        <template slot-scope="scope">
                                           <el-select disabled="disabled"
                                            class="specId"
                                            placeholder=""
                                            :class="{errorclass:scope.row.specId==''&&isSave==true}"
                                            v-model="scope.row.propertyId">
                                                <el-option v-for="item in selectData.userGroupId" :key="item.id" :label="item.propertyName" :value="item.id">
                                                </el-option>
                                            </el-select>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="propertyValueCode" label="属性值编码">
                                        <template slot-scope="scope">
                                            <img :id="scope.row.id"  :if=updateArray.indexOf(scope.row.id)  v-show='updateArray.indexOf(scope.row.id)>=0||scope.row.propertyValueCode==""' class="update-icon" src="../../../static/image/content/redremind.png"/>

                                            <input @change="propertychange(scope.row)" class="input-need bluecolor" :class="{errorclass:scope.row.propertyValueCode==''&&isSave==true}" 
                                                    v-model="scope.row.propertyValueCode" 
                                                    type="text"/>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="propertyValueName" label="属性值名称">
                                        <template slot-scope="scope">
                                            <input @change="propertychange(scope.row)" class="input-need bluecolor" :class="{errorclass:scope.row.propertyValueName==''&&isSave==true}" 
                                                    v-model="scope.row.propertyValueName" 
                                                    type="text"/>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="remark" label="备注" width="100">
                                        <template slot-scope="scope">
                                            <input @change="propertychange(scope.row)" class="input-need"  
                                                    v-model="scope.row.remark" 
                                                    type="text"/>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="status" label="状态" width="100">
                                        <template slot-scope="scope">
                                           <el-select clearable filterable  
                                            class="specId"
                                            placeholder=""
                                            @change="propertychange(scope.row)" 
                                            v-model="scope.row.status" :class="'specId'+scope.row.status">
                                                <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="createdBy" label="级联属性">
                                    </el-table-column>
                                    <el-table-column prop="address7" label="操作" width="" fixed="right">
                                        <template slot-scope="scope">
                                            <el-button type="text" size="small"  v-on:click="handleDel(scope.row,scope.$index)">删除</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            <el-pagination style="margin-top:20px;"  class="text-right"  background layout="total, prev, pager, next,jumper" :current-page="pageIndex"  @current-change="handleCurrentChange" :page-size="eachPage"
                                        :total="totalItem" >
                             </el-pagination>   
                        </el-col>

                </el-col>
            </el-row> 
        </div>
        <!-- dialog是否删除提示 -->
        <el-dialog :visible.sync="dialogUserConfirm" class="dialog_confirm_message" width="25%">
            <template slot="title">
                <span class="dialog_font">提示</span>
            </template>
            <el-col :span="24" style="position: relative;">
                <el-col :span="24">
                    <p class="dialog_body_icon"><i class="el-icon-warning"></i></p>
                    <p class="dialog_font dialog_body_message">确认删除？</p>
                </el-col>
            </el-col>
            
            <span slot="footer">
                <button class="dialog_footer_bt dialog_font" @click="sureAjax">确 认</button>
                <button class="dialog_footer_bt dialog_font" @click="dialogUserConfirm = false">取 消</button>
            </span>
        </el-dialog>
        <!-- dialog -->
        <!-- dialog数据变动提示 -->
        <el-dialog :visible.sync="dialogUserConfirm2" class="dialog_confirm_message" width="25%">
            <template slot="title">
                <span class="dialog_font">提示</span>
            </template>
            <el-col :span="24" style="position: relative;">
                <el-col :span="24">
                    <p class="dialog_body_icon"><i class="el-icon-warning"></i></p>
                    <p class="dialog_font dialog_body_message">此操作将忽略您的更改，是否继续？</p>
                </el-col>
            </el-col>
            
            <span slot="footer">
                <button class="dialog_footer_bt dialog_font" @click="affirm">确 认</button>
                <button class="dialog_footer_bt dialog_font" @click="sureDoing">取 消</button>
            </span>
        </el-dialog>
        <!-- dialog -->
        <!-- dialog是否删除提示 -->
        <el-dialog :visible.sync="dialogUserConfirm1" class="dialog_confirm_message" width="25%">
            <template slot="title">
                <span class="dialog_font">提示</span>
            </template>
            <el-col :span="24" style="position: relative;">
                <el-col :span="24">
                    <p class="dialog_body_icon"><i class="el-icon-warning"></i></p>
                    <p class="dialog_font dialog_body_message">{{dialogUserConfirmContent}}</p>
                </el-col>
            </el-col>
            
            <span slot="footer">
                <button class="dialog_footer_bt dialog_font" style="width:100%" @click="dialogUserConfirm1 = false">确 定</button>
            </span>
        </el-dialog>
        <!-- dialog -->
         <!-- dialog错误信息提示 -->
        <el-dialog :visible.sync="errorMessage" class="dialog_confirm_message" width="25%">
            <template slot="title">
                <span class="dialog_font">提示</span>
            </template>
            <el-col :span="24" class="detail_message_btnWapper">
                <span @click="detail_message_ifShow = !detail_message_ifShow" class="upBt">详情<i class="el-icon-arrow-down" @click="detail_message_ifShow = !detail_message_ifShow" :class="{rotate : !detail_message_ifShow}"></i></span>
            </el-col>
            <el-col :span="24" style="position: relative;">
                <el-col :span="24">
                    <p class="dialog_body_icon"><i class="el-icon-warning"></i></p>
                    <p class="dialog_font dialog_body_message">数据提交有误!</p>
                </el-col>
                <el-collapse-transition>
                    
                        <el-col :span="24" v-show="detail_message_ifShow" class="dialog_body_detail_message">
                            <vue-scroll :ops="$store.state.option">
                                <span class="dialog_font">{{response.message}}</span>
                                <h4 class="dialog_font dialog_font_bold">其他信息:</h4>
                                <span class="dialog_font">{{response.details}}<br><span :key="index" v-for="(value,index) in response.validationErrors"><span :key="ind" v-for="(val,ind) in value.members">{{val}}</span><br></span></span>
                            </vue-scroll> 
                        </el-col>
                      
                </el-collapse-transition>   
            </el-col>
            
            <span slot="footer">
                <button class="dialog_footer_bt dialog_font" @click="errorMessage = false">确 认</button>
                <button class="dialog_footer_bt dialog_font" @click="errorMessage = false">取 消</button>
            </span>
        </el-dialog>
        <!-- dialog -->
    </div>
</template>

<script>
import Query from '../../base/query/query'
import Btm from '../../base/btm1/btm'
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
                value1:'',
                searchLeft:'',
                oneItem: 10,
                totalItem: 0, 
                response:{
                    details:'',
                    message:'',
                    validationErrors:[],
                },
                expand:{
                    expandId_addDataOu:[],//默认下拉树形展开id
                    isHere_addDataOu:false,//是否存在id于树形
                    expandId_dialogOu:[],//默认dialog组织树形展开id
                    expandId_mmenu:[],//默认分配功能树形展开id
                },
                 // 错误信息提示开始
                detail_message_ifShow:false,
                dialogUserConfirm2:false,
                errorMessage:false,
                // 错误信息提示结束
                dialogUserConfirm: false,
                searchItem:{
                    specCode:'',//规格编码
                    specName:'',//规格名称
                    controlType: '',//控制类型
                    status:'',//状态
                },
                selectData:{
                    userGroupId:[]
                }, 
                bottonbox:{
                    url: '',
                   botton:[{
                    class: 'erp_bt bt_add onePge',
                    imgsrc: '../../../static/image/common/bt_add.png',
                    show:true,
                    text: '新增',
                    increased: true
                },{
                    class: 'erp_bt bt_save',
                    imgsrc: '../../../static/image/common/bt_save.png',
                    show:true,
                    text: '保存',
                    increased: false
                },{
                    class: 'erp_bt bt_auxiliary ',
                    imgsrc: 'img src="../../../static/image/common/u470.png',
                    show:true,
                    text: '取消',
                    increased: false
                },{
                    class: 'erp_bt bt_del',
                    imgsrc: '../../../static/image/common/bt_del.png',
                    show:true,
                    text: '删除',
                    increased: true
                },{
                    class: 'erp_bt bt_out',
                    imgsrc: '../../../static/image/common/bt_inOut.png',
                    show:true,
                    text: '导出',
                    increased: true
                },{
                    class: 'erp_bt bt_version',
                    imgsrc: '../../../static/image/common/bt_start.png',
                    show:true,
                    text: '启用',
                    increased: true
                },{
                    class: 'erp_bt bt_auxiliary',
                    imgsrc: '../../../static/image/common/bt_stop.png',
                    show:true,
                    text: '停用',
                    increased: true
                }]},
                defaultProps: {
                    children:'childNodes',
                    label:'propertyName'
                },
                controlTypeoptions: [{
                    value: 0,
                    label: '下拉'
                    }, {
                    value: 1,
                    label: '手工输入'
                    },{
                    value: '',
                    label: ''
                }],
                statusoptions: [{
                    value: 0,
                    label: '停用'
                    }, {
                    value: 1,
                    label: '启用'
                    }],
                idArray:{
                    ids:[]
                },
                addData1:{//修改保存接口
                    createList:[],
                    updateList:[]
                },
                tableData: [],
                componyTree: [],
                addArray:[],
                updateArray:[],
                updateList:[],
                pageIndex:0,//分页的当前页码
                SelectionChange:[],
                currentPage:1,//分页的当前页码
                tableModel:'commodityBrand',
                tableLoading: true,
                totalPage:100,//当前分页总数
                dialogUserConfirmContent: '',
                isUpdate:false,//是否进行修改
                isUpdate1:true,//是否进行修改
                isUpdate2:true,//是否进行修改
                ifWidth:true,
                updateId:'',
                treeLoading:true,
                isSave:false,
                ifTreeNode:false,
                dialogUserConfirm1:false,
                isaddac: true,
                isnewSave: false,
                eachPage:10,//每页有多少条信息
                page:1,//当前页
                amendData:[],
                value2: '',
                isaddbutton:false,
                ispage:false,
                value3:'',
                arrbiaoge1:[],
                arrbiaoge2:[],
                addbac: [],
                addabc:''
            }
        },
        created:function(){   
            this.loadTree();   
            this.loadTableData();
            this.TreeNodeClick1(0);
        },
        mounted:function(){   
            let content1=document.getElementById('bg-white');//设置高度为全屏
            let height1=window.innerHeight-123;
            content1.style.minHeight=height1+'px';
        },
        watch:{
            searchLeft:function(){
                 let _this = this;
                let newJson=[];
                let abd = [] 
                abd = _this.arrbiaoge1;
                let patt1 = new RegExp(_this.searchLeft);
                $.each(abd,function(index,val){
                    let str=val.specName;
                    let result = patt1.test(str);
                    if(result){
                        newJson.push(val);

                    }
                })
                _this.arrbiaoge2[0].children = newJson
                _this.componyTree = [];
                setTimeout(function(){
                   _this.componyTree = _this.arrbiaoge2 
                })
            },
            tableData:{
                handler: function (val, oldVal) {
                            let _this = this;
                            if(!_this.isnewSave){
                               _this.isnewSave = !_this.isnewSave
                            }else{
                               _this.statusButton(true,true,false) 
                               _this.isUpdate = true; 
                            }
                    },
                deep: true
            }
        },
        methods:{
            Init(){//数据初始化
                this.isCancel=false;
                this.isUpdate=false;
                this.isAdd=false;
                this.isSave=false;
                this.pageFlag=true;
                this.updateArray=[];
                this.addData1.createList=[];
                this.updateId="";
            },
            propertychange(row){
                let _this = this;
                if(row.id){
                   _this.amendData.push(row); 
                } 
            },
            btmlog:function(data){
                let _this=this;
                if(data == '新增' ){
                    if(_this.isaddac){
                        _this.dialogUserConfirmContent = '请点击左边树形选项,在新增商品规格值'
                        _this.dialogUserConfirm1 = true;   
                    }else if(_this.value1 == 0){
                        _this.dialogUserConfirmContent = '最大节点不允许新增商品规格值，请选择其他节点'
                        _this.dialogUserConfirm1 = true;
                    } else{ 
                        _this.statusButton(true,true,false) 
                        let newcol={
                            "groupId": 1,
                            "specId": _this.value1.id,
                            "propertyId": _this.value1.id,
                            "propertyValueCode": "",
                            "propertyValueName": "",
                            "seq": 0,
                            "status": 1,
                            "remark": "",
                        };
                        this.tableData.unshift(newcol);
                        this.addData1.createList.unshift(newcol); 
                    }
                        
                }else if(data == '新增保存'){
                    this.isSave=true;
                    let _this=this;
                    for(let i=0;i<_this.addData1.createList.length;i++){
                        if(_this.addData1.createList[i].specValueCode==""||_this.addData1.createList[i].specValueName==""){
                            this.$message({
                                message: '红色框内为必填项！',
                                type: 'error'
                            });
                            return;
                        }
                    }
                    function unique3(add){
                     var res = [];
                     var json = {};
                     for(var i = 0; i < add.length; i++){
                      if(!json[add[i].id]){
                       res.push(add[i]);
                       json[add[i].id] = 1;
                      }
                     }
                     return res;
                    }
                    if(_this.isUpdate){
                        if(_this.isaddbutton ){
                            for(let j=0;j<_this.SelectionChange.length;j++){
                                _this.amendData.push(_this.SelectionChange[j])
                            }
                            _this.isaddbutton = false;
                        }
                        
                       _this.addData1.updateList= unique3(_this.amendData);
                       console.log(_this.addData1);
                                               _this.$axios.posts('/api/services/app/PropertyValueManagement/CUDAggregate',_this.addData1).then(function(res){
                            _this.isUpdate=false;
                            _this.TreeNodeClick(_this.value1,false);
                            _this.isUpdate2 = true;
                            

                            _this.amendData = [];
                            _this.addData1.createList = [];
                            _this.isnewSave = false;
                            _this.statusButton(false,false,true) 
                            _this.open('保存商品规格值成功','el-icon-circle-check','successERP');    
                        },function(res){
                            if(res && res!=''){
                                _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors);
                                _this.dialogUserConfirm=false;
                                _this.errorMessage=true;
                            }
                        }); 
                    }
                }else if(data == '取消'){
                    if(_this.bottonbox.botton[2].increased ){
                        _this.isUpdate = false;
                        this.TreeNodeClick(_this.value1,false);
                        _this.statusButton(false,false,true) 
                    }   
                }else if(data == '删除'){
                    if(this.bottonbox.botton[3].increased){
                        let _this=this;
                        for(var i in this.SelectionChange){
                            this.idArray.ids.push(this.SelectionChange[i].id)
                        }
                        if(_this.idArray.ids.indexOf(undefined)!=-1){
                                this.$message({
                                    type: 'warning',
                                    message: '新增数据请在行内删除'
                                });
                                return;
                        }
                        if(_this.idArray.ids.length>0){
                            _this.dialogUserConfirm = true;
                        }else{
                            this.$message({
                                type: 'info',
                                message: '请勾选需要删除的数据！'
                            });
                        }
                    }
                    
                }else if(data == '启用'){
                    _this.statusButton(true,true,false) 
                    _this.isUpdate2 = false;
                    this.isUpdate=true;
                    _this.isaddbutton = true;
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
                                    this.tableData[j].status=1;
                                }
                            }
                        }
                    }else if(this.SelectionChange.length==0){
                        this.$message({
                            type: 'info',
                            message: '请勾选需要更改状态的记录！'
                        });
                    }
                }else if(data == '停用'){
                    _this.statusButton(true,true,false) 
                    _this.isUpdate2 = false;
                    _this.isaddbutton = true;
                    this.isUpdate=true;
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

                                    this.tableData[j].status=0;
                                }
                            }
                        }
                    }else if(this.SelectionChange.length==0){
                        this.$message({
                            type: 'info',
                            message: '请勾选需要更改状态的记录！'
                        });
                    }
                }
            },
            getErrorMessage(message,details,validationErrors){
                let _this=this;
                _this.response.message='';
                _this.response.details='';
                _this.response.validationErrors=[];
                if(details!=null && details){
                    _this.response.details=details;
                }
                if(message!=null && message){
                    _this.response.message=message;
                }
                if(message!=null && message){
                    _this.response.validationErrors=validationErrors;
                }
            },
            filterNode(value, data) {
                if (!value) return true;
                 return data.moduleName.indexOf(value) !== -1;
            },
            sureAjax(){
                let _this=this;
                if(_this.addabc != ''){
                    if(_this.addabc.specValueCode==""||this.isAdd==true){
                        this.tableData.splice(index,1);
                        this.addArray.splice(index,1);
                        _this.dialogUserConfirm = false;
                        // console.log(this.addArray);
                    }else{
                        _this.$axios.deletes('/api/services/app/PropertyValueManagement/Delete',{Id:_this.addabc.id}).then(function(res){
                            _this.loadTableData();
                            if(_this.value1 == ''){
                               _this.TreeNodeClick1(0);
                               alert(1) 
                            }else{
                               _this.TreeNodeClick(_this.value1,false); 
                
                            }
                            _this.dialogUserConfirm = false;
                            _this.open('删除成功','el-icon-circle-check','successERP');              
                        },function(res){
                            if(res && res!=''){
                                _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors);
                                _this.dialogUserConfirm=false;
                                _this.errorMessage=true;
                            }
                        })
                    }
                }else{
                    for(var i in this.SelectionChange){
                        this.idArray.ids.push(this.SelectionChange[i].id)
                    }
                    if(_this.idArray.ids.indexOf(undefined)!=-1){
                                this.$message({
                                    type: 'warning',
                                    message: '新增数据请在行内删除'
                                });
                                return;
                        }
                    if(_this.idArray.ids.length>0){
                        _this.$axios.posts('/api/services/app/PropertyValueManagement/BatchDelete',_this.idArray).then(function(res){
                            _this.loadTableData();
                            if(_this.value1 == ''){
                               _this.TreeNodeClick1(0); 
                            }else{
                               _this.TreeNodeClick(_this.value1,false); 
                            }
                            
                            _this.dialogUserConfirm = false;
                            _this.open('删除成功','el-icon-circle-check','successERP');    
                        },function(res){
                            if(res && res!=''){
                                _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors);
                                _this.dialogUserConfirm=false;
                                _this.errorMessage=true;
                            }
                        })
                    }
                }
                
            },
            handleDel(row,index){//行内删除
                let _this=this;
                _this.dialogUserConfirm = true;
                 _this.addabc =  row      

            },
            handleCurrentChange(val){
                let _this = this;
                if(val == _this.currentPage){
                    return ;
                }else{
                   if(_this.isUpdate){
                        _this.dialogUserConfirm2 = true;
                        _this.value3 = val;
                        _this.ispage = true;
                        
                    }else{
                        _this.currentPage = val;
                        _this.TreeNodeClick(_this.value1,false) 
                    } 
                }
                
                
            },
            loadTableData(){
                let _this=this;
                _this.$axios.gets('/api/services/app/PropertyManagement/GetAll',{SkipCount:0,MaxResultCount:1}).then(function(res){ 
                    let totalAll = res.result.totalCount;
                    if(totalAll > 0){
                        _this.$axios.gets('/api/services/app/PropertyManagement/GetAll',{SkipCount:0,MaxResultCount:totalAll}).then(function(res){

                            _this.selectData.userGroupId=res.result.items;
                            console.log(res)
                            // console.log(_this.selectData.userGroupId)
                        })
                    }
                    
                })
            },
            loadTree(){//获取tree data
                    let _this=this;
                    _this.treeLoading=true;
                    _this.$axios.gets('/api/services/app/PropertyManagement/GetPropertyTree')
                    .then(function(res){
                        console.log(res)
                        console.log(1)
                        _this.componyTree = res;
                        // function compare(property){
                        //     return function(a,b){
                        //         var value1 = a[property];
                        //         var value2 = b[property];
                        //         return value1 - value2;
                        //     }
                        // }
                        // _this.componyTree[0].children.sort(compare('seq'));
                        _this.arrbiaoge2 = res;
                        _this.arrbiaoge1 = res;
                        _this.treeLoading=false;
                },function(res){
                    _this.treeLoading=false;
                })
            },
            affirm(){
                let _this = this;
                if(_this.ispage){
                    _this.ispage = false;
                    _this.isUpdate = false;
                    _this.currentPage = _this.value3;
                    _this.statusButton(false,false,true) 
                    _this.TreeNodeClick(_this.value1,false) 
                    _this.dialogUserConfirm2 = false;
                }else{
                    _this.dialogUserConfirm2 = false;
                    _this.isUpdate = false;
                    _this.statusButton(false,false,true) 
                    _this.TreeNodeClick(_this.value2,false) 
                }
                
            },
            sureDoing(){
                let _this = this;
                if(_this.ispage){
                    _this.ispage = false;
                    $('.text-right .number').eq(_this.currentPage - 1).click()
                    _this.dialogUserConfirm2 = false;
                }else{
                    _this.dialogUserConfirm2 = false;
                    _this.loadCheckSelect('propertyParentid',_this.value1.id)  
                }
            },
            loadCheckSelect(selectName,key){
                let _this=this;
                _this.$nextTick(function () { 
                     console.log($('.'+selectName+' .el-tree-node__label').length)
                    $('.'+selectName+' .el-tree-node__label').each(function(){
                         if($(this).attr('data-id')==key){
                            $(this).click()
                        }
                    })
                })
            },
            TreeNodeClick(data,val){//树节点点击回调
                let _this=this; 
                
                if(val.key == _this.value1.id && _this.isUpdate){
                    return ; 
                }else{
                   if(_this.isUpdate){
                        _this.dialogUserConfirm2 = true;
                        _this.value2 = data
                    }else{
                        _this.tableLoading=true;
                        _this.isaddac = false;
                        _this.isnewSave = false;
                        
                        _this.value1 = data;
                       
                        _this.ifTreeNode = true;
                        _this.$axios.gets('/api/services/app/PropertyValueManagement/GetSpecId',{PropertyId:_this.value1.id,SkipCount:(_this.currentPage-1)*_this.eachPage,MaxResultCount:_this.eachPage}).then(function(res){ 
                        console.log(res)           
                            _this.tableData = res.result.items ;
                            _this.tableLoading = false;
                            // for(let i=0;i<_this.tableData.length;i++){
                            //     _this.tableData[i].createdTime = _this.tableData[i].createdTime.substr(0,10)
                            //     _this.tableData[i].modifiedTime = _this.tableData[i].modifiedTime.substr(0,10)
                            // }
                            _this.Init();
                            _this.totalItem=res.result.totalCount;
                            // _this.Init();
                            _this.totalPage = Math.ceil(_this.totalItem/_this.eachPage);
                        })
                    } 
                }
                
                
            },
            TreeNodeClick1(data){//树节点点击回调
                let _this=this; 
                _this.tableLoading=true;
                _this.isaddac = false;
                if(data.id == 0 || data.id){
                   _this.value1 = data.id; 
                }else{
                    _this.value1 = data;
                }

                _this.ifTreeNode = true;
                _this.$axios.gets('/api/services/app/PropertyValueManagement/GetSpecId',{SpecId:_this.value1,SkipCount:(_this.currentPage-1)*_this.eachPage,MaxResultCount:_this.eachPage}).then(function(res){ 
                         console.log(res)           
                    _this.tableData = res.result.items ;
                    _this.tableLoading = false;
                    // for(let i=0;i<_this.tableData.length;i++){
                    //     _this.tableData[i].createdTime = _this.tableData[i].createdTime.substr(0,10)
                    //     _this.tableData[i].modifiedTime = _this.tableData[i].modifiedTime.substr(0,10)
                    // }
                    _this.totalItem=res.result.totalCount;
                    // _this.Init();
                    _this.totalPage = Math.ceil(_this.totalItem/_this.eachPage);
                    _this.$nextTick(function(){
                        _this.getHeight()
                    })
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
             getHeight(){
                 $(".tree-container").css({
                    height:parseInt($('.bg-white').css('height'))-138+'px'
                })
                $(".border-left").css({
                    height:$('.bg-white').css('height')
                })
            },
            rowClick(row){//获取行id
                this.updateId=row.id
            },
            search(){//按条件查询
                let _this=this;
                _this.$axios.gets('http://192.168.100.107:8082/api/services/app/SpecManagement/GetSearch',_this.searchItem).then(function(res){
                    // _this.tableData=res.result;   
                    // console.log(res)                
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
            statusButton(a,b,c){
                this.bottonbox.botton[1].increased = a;
                this.bottonbox.botton[2].increased = b;
                this.bottonbox.botton[3].increased = c;
            },
            renderContent_moduleParentId(h, { node, data, store }){
                if(typeof(data.childNodes)!='undefined' && data.childNodes!=null && data.childNodes.length>0){
                    return (
                        <span class="el-tree-node__label" data-id={data.id}>
                        <i aria-hidden="true" class="preNode fa fa-folder-open" style="color:#f1c40f;margin-right:5px"></i>
                            {data.propertyName}
                        </span>
                    );
                }else{
                     return (
                        <span class="el-tree-node__label" data-id={data.id}>
                        <i class="preNode fa fa-file" aria-hidden="true" style="color:#f1c40f;margin-right:5px"></i>
                            {data.propertyName}
                        </span>
                    );
                }
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
    left: -200px;
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
.commodity .smallBgcolor .el-input input{
    height: 28px!important; 
}
#bg-white .bluecolor{
    
    color: #409EFF;
}
#bg-white .input-need{
    
}
</style>

<style>
#bg-white .specId0 .el-input__inner{

    color: rgb(255, 102, 102);
}
#bg-white .specId1 .el-input__inner{
   
    color: rgb(57, 202, 119);
}
#bg-white .el-input.is-disabled .el-input__inner{
    background-color: transparent;
    color: rgb(57, 202, 119);
}

#bg-white table .el-input__inner{
    text-align: center;
}
#bg-white .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content{
    background-color: #e4e4e4;
    color: red;
}
/*#bg-white .is-current{
    background-color: #EC5464 !important;
}*/
.specId .el-input--suffix .el-input__inner{padding-right: 0;}
.specId .el-input__inner{border:none;}
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