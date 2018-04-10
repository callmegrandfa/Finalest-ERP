<template>
    <div class="specifcationOfGoods commodity" >
        
        <div id="bgl">
            <el-row >
                <el-col :span="24" class="border-left" id="bg-white">
                    

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
                                
                                <el-col :span="24" class="bg-white">
                                    <btm :date="bottonbox" v-on:listbtm="btmlog"> </btm>
                                </el-col>
                                <el-table :data="tableData" @row-click="rowClick" @selection-change="handleSelectionChange" border style="width: 100%">
                                    <el-table-column type="selection" label="" width="50">
                                    </el-table-column>
                                    <el-table-column  label="规格名称" prop="specId_SpecName" width="150">
                                        <template slot-scope="scope">
                                           <el-select clearable filterable  
                                            class="specId"
                                            placeholder=""
                                            :class="{errorclass:scope.row.specId==''&&isSave==true}"
                                            v-model="scope.row.specId">
                                                <el-option v-for="item in selectData.userGroupId" :key="item.id" :label="item.specName" :value="item.id">
                                                </el-option>
                                            </el-select>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="specValueCode" label="规格值编码">
                                        <template slot-scope="scope">
                                            <img :id="scope.row.id"  :if=updateArray.indexOf(scope.row.id)  v-show='updateArray.indexOf(scope.row.id)>=0||scope.row.specValueCode==""' class="update-icon" src="../../../static/image/content/redremind.png"/>

                                            <input class="input-need" :class="{errorclass:scope.row.specValueCode==''&&isSave==true}" 
                                                    v-model="scope.row.specValueCode" 
                                                    type="text"/>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="specValueName" label="规格值名称">
                                        <template slot-scope="scope">
                                            <input class="input-need" :class="{errorclass:scope.row.specValueName==''&&isSave==true}" 
                                                    v-model="scope.row.specValueName" 
                                                    type="text"/>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="remark" label="备注" width="100">
                                        <template slot-scope="scope">
                                            <input class="input-need" :class="{errorclass:scope.row.remark==''&&isSave==true}" 
                                                    v-model="scope.row.remark" 
                                                    type="text"/>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="status" label="状态" width="100">
                                        <template slot-scope="scope">
                                           <el-select clearable filterable  
                                            class="specId"
                                            placeholder=""
                                             
                                            v-model="scope.row.status">
                                                <el-option v-for="item in statusoptions" :key="item.value" :label="item.label" :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="createdBy" label="创建人">
                                    </el-table-column>
                                    <el-table-column prop="createdTime" label="创建时间">
                                    </el-table-column>
                                    <el-table-column prop="modifiedBy" label="修改人" width="100">
                                    </el-table-column>
                                    <el-table-column prop="modifiedTime" label="修改时间" width="">
                                    </el-table-column>
                                    <el-table-column prop="address7" label="操作" width="" fixed="right">
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
                response:{
                    details:'',
                    message:'',
                    validationErrors:[],
                },
                 // 错误信息提示开始
                detail_message_ifShow:false,
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
                    children:'children',
                    label:'specName'
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
                    label: '未启用'
                    }, {
                    value: 1,
                    label: '启用'
                    }, {
                    value: '',
                    label: ''
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
                pageIndex:-1,//分页的当前页码
                SelectionChange:[],
                currentPage:1,//分页的当前页码
                tableModel:'commodityBrand',
              totalPage:100,//当前分页总数
              isUpdate:false,//是否进行修改
              isUpdate1:true,//是否进行修改
              ifWidth:true,
              updateId:'',
              isSave:false,
              eachPage:10,//每页有多少条信息
              page:1,//当前页
              addbac: [],
              addabc:''
            }
        },
        created:function(){   
            this.loadTree();   
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
                    this.isCancel=true;
                    this.turnPage=$(document).find(".pageActive.is-background .el-pager li.active").html();
                }
            },
            tableData:{
                handler: function (val, oldVal) {
                        if(oldVal.length>0){
                            console.log(this.updateArray.length)
                            if(this.updateArray.length == 0 && this.updateId==""){
                             
                                this.isUpdate=false
                            }else if(this.addData1.createList.length == 0){
                                this.statusButton(true,true,false) 
                                this.isUpdate=true;
                            }else{
                                this.isUpdate1=false;
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
                    // if(_this.bottonbox.botton[2].text != '取消'){
                    //     _this.bottonbox.botton.splice(2,0,{
                    //         class: 'erp_bt bt_auxiliary',
                    //         imgsrc: 'img src="../../../static/image/common/u470.png',
                    //         show:true,
                    //         text: '取消'
                    //     })
                    // }
                    _this.statusButton(true,true,false) 
                    
                    let newcol={
                        "groupId": 1,
                        "specId": _this.value1,
                        "specValueCode": "",
                        "specValueName": "",
                        "seq": 0,
                        "status": 0,
                        "remark": "",
                        "createdBy":this.$store.state.name,
                        "createdTime":this.GetDateTime(),
                        modifiedBy:this.$store.state.name,
                        modifiedTime:this.GetDateTime()
                    };
                    // this.isUpdate=true;
                    // this.isAdd=true;
                    this.tableData.unshift(newcol);
                    // this.addArray.unshift(newcol);
                    this.addData1.createList.unshift(newcol);
                }else if(data == '新增保存'){

                    this.isSave=true;
                    let _this=this;
                    if(_this.addData1.createList.length>0 ){//新增保存

                        for(let i in _this.addData1.createList){
                            if(_this.addData1.createList[i].specValueCode==""||_this.addData1.createList[i].specValueName==""){
                                this.$message({
                                    message: '红色框内为必填项！',
                                    type: 'error'
                                });
                            }
                        }
                        if(_this.addData1.createList.length==1){//单条新增
                            console.log(_this.addData1)
                            _this.$axios.posts('/api/services/app/SpecValueManagement/CUDAggregate',_this.addData1).then(function(res){
                                _this.loadTableData();
                                _this.loadTree(); 
                                _this.statusButton(false,false,true) 
                                _this.open('创建商品规格值成功','el-icon-circle-check','successERP');    
                                _this.isAdd=false
                            },function(res){
                                if(res && res!=''){
                                    _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors);
                                    _this.dialogUserConfirm=false;
                                    _this.errorMessage=true;
                                }
                            }); 
                        }else{//批量新增 

                            _this.$axios.posts('/api/services/app/SpecValueManagement/CUDAggregate',_this.addData1).then(function(res){
                                _this.loadTableData();
                                _this.statusButton(false,false,true) 
                                _this.open('创建商品规格值成功','el-icon-circle-check','successERP');    
                                _this.isAdd=false
                            },function(res){
                                if(res && res!=''){
                                    _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors);
                                    _this.dialogUserConfirm=false;
                                    _this.errorMessage=true;
                                }
                            }); 
                        }                    
                    }else if( _this.isUpdate ){//修改保存

                        if(_this.updateArray.length==1){//单条修改
                            let updataIndex = -1;
                            for(let i in _this.tableData){
                                if(_this.updateArray[0]==_this.tableData[i].id){
                                    updataIndex = i;
                                    
                                }
                            }
                            _this.tableData[updataIndex].status = 0
                            _this.$axios.puts('/api/services/app/SpecValueManagement/Update',_this.tableData[updataIndex]).then(function(res){
                                _this.loadTableData();
                                _this.loadTree();
                                _this.statusButton(false,false,true) 
                                _this.open('保存商品规格值成功','el-icon-circle-check','successERP');   
                            },function(res){
                                if(res && res!=''){
                                    _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors);
                                    _this.dialogUserConfirm=false;
                                    _this.errorMessage=true;
                                }
                            });
                        }else{//批量修改
                           
                            _this.addData1.updateList=_this.tableData;
                            console.log(_this.addData1)
                            _this.$axios.posts('/api/services/app/SpecValueManagement/CUDAggregate',_this.addData1).then(function(res){
                                _this.loadTableData();
                                _this.statusButton(false,false,true) 
                                _this.open('保存商品规格值成功','el-icon-circle-check','successERP');    
                                _this.isAdd=false
                            },function(res){
                                if(res && res!=''){
                                    _this.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors);
                                    _this.dialogUserConfirm=false;
                                    _this.errorMessage=true;
                                }
                            }); 
                        }
                    }
                }else if(data == '取消'){
                    
                    _this.statusButton(false,false,true) 
                    this.loadTableData();
                }else if(data == '删除'){
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
                }else if(data == '启用'){
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
            sureAjax(){
                let _this=this;
                if(_this.addabc != ''){
                    if(_this.addabc.specValueCode==""||this.isAdd==true){
                        this.tableData.splice(index,1);
                        this.addArray.splice(index,1);
                        _this.dialogUserConfirm = false;
                        console.log(this.addArray);
                    }else{
                        _this.$axios.deletes('/api/services/app/SpecValueManagement/Delete',{Id:_this.addabc.id}).then(function(res){
                            _this.loadTableData();
                            _this.loadTree();
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
                        _this.$axios.posts('/api/services/app/SpecValueManagement/BatchDelete',_this.idArray).then(function(res){
                            _this.loadTableData();
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
            loadTableData(){
                let _this=this;
                _this.tableLoading=true;
                _this.$axios.gets('http://192.168.100.107:8082/api/services/app/SpecValueManagement/GetAll?SkipCount=0&MaxResultCount=10').then(function(res){
                    
                    // console.log(res)
                    _this.tableData=res.result.items;
                    for(let i=0;i<_this.tableData.length;i++){
                        _this.tableData[i].createdTime = _this.tableData[i].createdTime.substr(0,10)
                        _this.tableData[i].modifiedTime = _this.tableData[i].modifiedTime.substr(0,10)
                    }
                    let countPage=res.result.totalCount;
                    _this.Init();
                    _this.totalPage = Math.ceil(countPage/_this.eachPage);
                  
                })
                // _this.$axios.gets('/api/services/app/UserGroup/GetAll').then(function(res){ 
                // // 所属用户组
                //     _this.selectData.userGroupId=res.result.items;
                //     console.log(_this.selectData.userGroupId)
                // })

                _this.$axios.gets('/api/services/app/SpecManagement/GetAll').then(function(res){ 
                    // 菜单_this.statusoptions
                    // _this.selectData.OUType=res.result.items;
                    _this.selectData.userGroupId=res.result.items;
                    console.log(_this.selectData.userGroupId)
                    // console.log(_this.selectData[0].specName)
                })
            },
            loadTree(){//获取tree data
                    let _this=this;
                    _this.treeLoading=true;
                    _this.$axios.gets('/api/services/app/SpecManagement/GetSpecTree')
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
                _this.value1 = data.id;
                console.log(data.id)
                _this.$axios.gets('/api/services/app/SpecValueManagement/GetSpecId',{SpecId:data.id,SkipCount:(_this.currentPage-1)*_this.eachPage,MaxResultCount:_this.eachPage}).then(function(res){ 
                    //   _this.tableData.splice(0,_this.tableData.length);             
                    _this.tableData = res.result.items ;
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
            rowClick(row){//获取行id
                this.updateId=row.id
            },
            search(){//按条件查询
                let _this=this;
                _this.$axios.gets('http://192.168.100.107:8082/api/services/app/SpecManagement/GetSearch',_this.searchItem).then(function(res){
                    // _this.tableData=res.result;   
                    console.log(res)                
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
            statusButton(a,b,c){
                this.bottonbox.botton[1].increased = a;
                this.bottonbox.botton[2].increased = b;
                this.bottonbox.botton[3].increased = c;
            }
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
</style>

<style>
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