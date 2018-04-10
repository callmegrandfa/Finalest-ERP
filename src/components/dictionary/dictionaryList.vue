<template>
    <div class="dic-list">
        <el-row class="bg-white">
            <el-col :span="5">
                <el-col class="h48 pl15 pr15" :span="24">
                    <el-input placeholder=""
                              v-model="searchLeft" 
                              class="bAreaSearch">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </el-col>

                <el-col :span='24' class="tree-container" >
                    <el-tree v-loading="treeLoading" 
                             :data="componyTree"
                             :props="defaultProps"
                             node-key="id"
                             default-expand-all
                             ref="tree"
                             :expand-on-click-node="false"
                             :filter-node-method="filterNode"
                             @node-click="nodeClick">
                             <!-- oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none" -->
                             
                             <!-- :render-content="renderContent" -->
                    </el-tree>
                </el-col>   
            </el-col>
            
            <el-col :span='19' class="border-left">
                <el-row class="h48 pt5 pr10 pl5">
                    <button class="erp_bt bt_save" @click="saveValue">
                        <div class="btImg">
                        <img src="../../../static/image/common/bt_save.png">
                        </div>
                        <span class="btDetail">保存</span>
                    </button>

                    <button class="erp_bt bt_add" @click="addCol">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_add.png">
                        </div>
                        <span class="btDetail">新增</span>
                    </button>

                    <button @click="delMore(2)" class="erp_bt bt_del">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_del.png">
                        </div>
                        <span class="btDetail">删除</span>
                    </button>

                    <button class="erp_bt bt_out">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_inOut.png">
                        </div>
                        <span class="btDetail">导出</span>
                    </button>

                    <div class="formSearch">
                        <input type="text" class="inputForm">
                        <button>搜索</button>
                    </div>
                </el-row>

                <el-row class="data-table">
                    <el-col :span='24'>
                        <el-table v-loading="tableLoading" :data="tableData" style="width: 100%" stripe @selection-change="handleSelectionChange" border ref="multipleTable">
                            
                            <el-table-column type="selection" fixed></el-table-column>

                            <el-table-column prop="itemCode" label="编码" fixed>
                                <template slot-scope="scope">
                                    
                                    <img v-show='ar.indexOf(scope.row.id)>=0' class="abimg" src="../../../static/image/content/redremind.png"/>
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.itemCode"
                                            v-if="scope.row.isSystem==true"
                                            disabled
                                            type="text"/>
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.itemCode"
                                            v-else
                                            @change='handleChange(scope.$index,scope.row)'
                                            type="text"/>
                                </template>
                            </el-table-column>

                            <el-table-column prop="itemName" label="名称" fixed>
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.itemName"
                                            v-if="scope.row.isSystem"
                                            disabled
                                            type="text"/>     
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.itemName"
                                            v-else
                                            @change='handleChange(scope.$index,scope.row)'
                                            type="text"/>
                                </template>
                            </el-table-column>

                            <el-table-column prop="dictId_DictName" label="类型">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.dictId_DictName"
                                            v-if="scope.row.isSystem"
                                            disabled
                                            type="text"/>     
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.dictId_DictName"
                                            v-else
                                            @change='handleChange(scope.$index,scope.row)'
                                            type="text"/>
                                </template>
                            </el-table-column>

                            <el-table-column prop="manager" label="系统默认">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="scope.row.isSystem" disabled v-if="scope.row.isSystem"></el-checkbox>
                                    <el-checkbox v-model="scope.row.isSystem" disabled v-else></el-checkbox>
                                </template>
                            </el-table-column>

                            <el-table-column prop="status" label="状态">
                                <template slot-scope="scope">
                                    <el-select  v-model="scope.row.status" v-if="scope.row.isSystem==true" disabled :class="scope.$index%2==0?'bgw':'bgg'">
                                        <el-option  v-for="item in status" :key="item.itemValue" :label="item.itemName" :value="item.itemValue">
                                        </el-option>
                                    </el-select>

                                    <el-select  v-model="scope.row.status" v-else @change="handleChange(scope.$index,scope.row)" :class="scope.$index%2==0?'bgw':'bgg'">
                                        <el-option  v-for="item in status" :key="item.itemValue" :label="item.itemName" :value="item.itemValue">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-table-column>

                            <el-table-column prop="remark" label="备注">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.remark"
                                            v-if="scope.row.isSystem==true"
                                            disabled
                                            type="text"/>
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.remark"
                                            v-else
                                            @change='handleChange(scope.$index,scope.row)'
                                            type="text"/>
                                </template>
                            </el-table-column>
                            
                            <el-table-column prop='createdTime' width="180" label="时间">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.createdTime"
                                            v-if="scope.row.isSystem==true"
                                            disabled
                                            type="text"/>
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.createdTime"
                                            v-else
                                            disabled
                                            @change='handleChange(scope.$index,scope.row)'
                                            type="text"/>
                                </template>
                            </el-table-column>

                            <el-table-column label="操作" fixed='right'>
                                 <template slot-scope="scope">
                                    <el-button type="text" size="small" v-show='scope.row.isSystem==false' @click="delRow(scope.$index,scope.row,1)" >删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination style="margin-top:20px;" 
                                        class="text-right" 
                                        background 
                                        layout="total,prev, pager, next,jumper" 
                                        @current-change="handleCurrentChange"
                                        :current-page.sync="pageIndex" 
                                        :page-size="oneItem"
                                        :total="totalItem"></el-pagination>   
                    </el-col>
                </el-row>

            </el-col>
        </el-row>

        <!-- dialog是否删除提示 -->
        <el-dialog :visible.sync="dialogDelConfirm" class="dialog_confirm_message" width="25%">
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
                <button class="dialog_footer_bt dialog_font" @click="sureDel">确 认</button>
                <button class="dialog_footer_bt dialog_font" @click="dialogDelConfirm = false">取 消</button>
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
                            <vue-scroll :ops="option">
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
    export default{
        name:'customerInfor',
        data(){
            return {
                searchLeft:'',
                valueData:{//创建字典值的参数
                    groupId: 0,
                    dictId: 0,
                    itemName: "",
                    itemCode: "",
                    itemValue: "test",
                    seq: 0,
                    remark: "",
                    status: 0,
                    isSystem: false
                },
                 deptParentid: [{//业务地区分类
                    value:'1',
                    label: '业务地区'
                }, {
                    value:'2',
                    label: '行政地区'
                }],
                status: [],
                tableData:[],
                componyTree:  [
                    // {areaName:'根目录',id:'0',items:[]},
                ],
                defaultProps: {
                    children: 'children',
                    label: 'dictName',
                    id:'id'
                },
                TreeContextMenu:[//点击鼠标右键生成菜单
                ],
                pageIndex:0,//分页的当前页码
                totalPage:0,//当前分页总数
                oneItem:10,//每页有多少条信息
                page:1,//当前页
                
                multipleSelection: [],//复选框选中数据
                idArray:{
                    ids:[]
                },//复选框选中数据id
                
                treeCheck:[],
                totalItem:0,//总共有多少条消息
                tableLoading:true,
                treeLoading:false,
                Sorting:'',//table搜索
                dialogFormVisible:false,
                // isAdd:true,//判断是增加还是修改
                tittle:'',//模态框tittle
                x:0,//增行的下标
                rows:[],//增行的数组
                addList:[],//新增上传的数组
                updateList:[],//修改过的数组
                dictId:'',//点击左侧树形保存当前的dictId
                dictId_DictName:'',//点击左侧树形保存当前的dictId_DictName
                ar:[],//判断修改后的红标出现
                pageFlag:true,

                //---确认删除-----------------               
                dialogDelConfirm:false,//用户删除保存提示信息
                //-------------------- ------
                //---错误提示框----------------
                option: {
                    vRail: {
                        width: '5px',
                        pos: 'right',
                        background: "#9093994d",
                    },
                    vBar: {
                        width: '5px',
                        pos: 'right',
                        background: '#9093994d',
                    },
                    hRail: {
                        height: '0',
                    },
                },
                errorMessage:false,
                detail_message_ifShow:false,
                response:{
                    details:'',
                    message:'',
                    validationErrors:[],
                },
                //-----------------------------
                who:'',//删除的是谁以及是否是多项删除
                whoId:'',//单项删除的id
                whoIndex:'',//单项删除的index
            }
        },
        created:function(){       
            let self=this;
            self.loadTableData();
            self.loadTree();
            self.loadSelect();
        },
        // validators: {
        //     'dialogData.dictCode':function(value){//字典编码
        //         return this.Validator.value(value).required().maxLength(50)
        //     },
        //     'dialogData.dictName':function(value){//字典名称
        //         return this.Validator.value(value).required().maxLength(50)
        //     },
        //     'dialogData.seq': function (value) {//排序
        //         return this.Validator.value(value).required().integer();
        //     },
        //     'dialogData.remark': function (value) {//备注
        //         return this.Validator.value(value).required().maxLength(200);
        //     },
        // }, 
        watch: {
            searchLeft(val) {
                this.$refs.tree.filter(val);
            }
        },
        methods:{
            //---数据加载---------------------------------------------------
            loadTableData(){//表格
                let self=this;
                self.tableLoading=true;
                self.$axios.gets('/api/services/app/DictItemManagement/GetAll',{SkipCount:(self.page-1)*self.oneItem,MaxResultCount:self.oneItem}).then(function(res){ 
                    console.log(res)
                    self.tableData = res.result.items;
                    // console.log(self.tableData)
                     $.each( self.tableData,function(index,value){//处理时间格式
                        if(value.createdTime&&value.createdTime!=''){
                            let createdTime=value.createdTime.slice(0,value.createdTime.indexOf(".")).replace("T"," ");
                            self.tableData[index].createdTime=createdTime;
                            // console.log(self.tableData[index].createdTime)
                        } 
                    })
                    self.totalItem=res.result.totalCount
                    self.totalPage=Math.ceil(res.result.totalCount/self.oneItem);
                    self.tableLoading=false;
                    },function(res){
                    self.tableLoading=false;
                })
            },
            loadTree(){
                let self=this;
                self.treeLoading=true;
                self.$axios.gets('/api/services/app/DictManagement/GetDictionaryTree')
                .then(function(res){
                    console.log(res)
                    self.componyTree=res.result;
                    // console.log(self.componyTree)
                    self.treeLoading=false;
                    self.loadIcon();
               },function(res){
                   self.treeLoading=false;
               })
            },
            loadIcon(){
                let self=this;
                self.$nextTick(function () {
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
            loadSelect:function(){
                let self = this;
                this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status001'}).then(function(res){
                    self.status = res.result;
                    console.log(self.status);
                },function(res){
                    console.log('err'+res)
                })
            },
            //---------------------------------------------------------------

            //---保存--------------------------------------------------------
            // save:function(){
            //     let self = this;
            //     console.log(self.dialogData)
            //     self.$validate().then(function(success){
            //         if(success){
            //             if(self.dialogData.id!=''&&self.dialogData.id!=0){//判断参数id值，为''是新增，其他为创建
            //                 self.$axios.puts('/api/services/app/DictManagement/Update',self.dialogData).then(function(res){
            //                     self.dialogFormVisible=false;
            //                     // self.loadTableData();
            //                     self.loadTree();
            //                 },function(res){    
            //                     console.log('error')
            //                 })
            //             }else{
            //                 self.$axios.posts('/api/services/app/DictManagement/Create',self.dialogData).then(function(res){
            //                     self.dialogFormVisible=false;
            //                     self.loadTree();
            //                     // self.loadTableData();
            //                     // self.clearAddDate();
            //                 },function(res){    
            //                     console.log('error')
            //                 })
            //             }
            //         }
            //     })
            // },
            saveValue:function(){//保存值表的修改和新增
                
                let self = this;
                console.log(self.addList)
                if(self.addList.length>0){
                    self.$axios.posts('/api/services/app/DictItemManagement/CUDAggregate',{createList:self.addList,updateList:[],deleteList:[]}).then(function(res){
                        self.open('创建字典系统值成功','el-icon-circle-check','successERP');
                        self.addList = [];
                        self.ar = [];
                        // self.loadTableData();
                    },function(res){ 
                        self.errorMessage=true;
                        self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                    })
                    
                }

                if(self.updateList.length>0){   
                    self.$axios.posts('/api/services/app/DictItemManagement/CUDAggregate',{createList:[],updateList:self.updateList,deleteList:[]}).then(function(res){
                        self.open('修改字典系统值成功','el-icon-circle-check','successERP');
                        self.updateList = [];
                        self.ar = [];
                        // self.loadTableData();
                    },function(res){
                        self.errorMessage=true;
                        self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                    })
                }
            },
            //----------------------------------------------------------------
            //---清除数据--------------------------------------------------
            clearAddDate:function(){//清除新增数据
                let self = this;
                self.dialogData={//dialog数据
                    id:'',
                    groupId:'1',//集团ID
                    ouId:'1',//组织单元ID
                    deptCode:'',//部门代码
                    deptName:'',//部门名称
                    director:'',//负责人
                    phone:'',//电话
                    deptParentid:'',//父部门id
                    remark:'',//备注
                    status:'',//启用状态
                }
            },
            //----------------------------------------------------------------
            //---新增系统字典值----------------------------------------------------------
            addCol:function(){//增行
                let self = this;
                if(self.dictId!=''){
                    self.x++;
                    let newCol = 'newCol'+self.x;
                    self.rows.newCol = {
                            groupId: 1,
                            dictId: self.dictId,
                            itemName: "",
                            itemCode: "",
                            itemValue: 1,
                            dictId_DictName:self.dictId_DictName,
                            seq: 0,
                            remark: "",
                            status: 1,
                            isSystem: false,
                        };
                    self.tableData.unshift(self.rows.newCol);
                    self.addList.unshift(self.rows.newCol);
                    // console.log(self.rows)
                }else{
                    self.$message({
                        type: 'info',
                        message: '未选择字典'
                    });
                }
            },
            //----------------------------------------------------------------

            //---控制编辑------分页--------------------------------------------
            handleChange:function(index,row){
                let self = this;
                
                let map = false;
                if(self.ar.length==0){//修改后表格前红标
                    self.ar.push(row.id)
                }else if(self.ar.length>=1){
                    for(let i in self.ar){
                        if(row.id!=self.ar[i]){
                            map = true;
                        }else{
                            map = false;
                            break;
                        }
                    }
                }
                if(map){
                    self.ar.push(row.id)
                    console.log(self.ar)
                }



                if(row.id>0){
                    let flag = false;
                    if(self.updateList.length==0){
                        flag = true;
                    }else if(self.updateList.length>=1){
                        for(let i in self.updateList){
                            if(row.id != self.updateList[i].id){
                                flag = true;
                                console.log(flag) 
                            }else{
                                flag= false;
                                break;        
                            }
                        }
                    };

                    if(flag){
                        self.updateList.push(row);
                        this.turnPage=$(document).find(".pageActive.is-background .el-pager li.active").html();
                    }
                    console.log(self.updateList)
                }  
            },
            handleCurrentChange(val) {//页码改变
                 let self=this;
                //  self.page=val;
                //  if(self.load){
                //      self.loadTableData();
                //  }

                 if(self.updateList.length>0&&self.pageFlag){
                    self.$confirm('当前存在未保存修改项，是否继续查看下一页?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning',
                        center: true
                        }).then(() => {
                            self.pageIndex=val;
                            self.page = val;
                            self.updateList = [];
                            self.ar = [];
                            self.loadTableData();
                        }).catch(() => {
                            self.pageIndex=self.turnPage;
                            self.page = self.turnPage;
                            this.pageFlag=false;
                            console.log(self.page)
   
                    });
                }else{
                    self.pageIndex=val;
                    self.page = val;
                    self.loadTableData();
                } 
                 setTimeout(() => {self.pageFlag = true}, 1000)
            },
            //-----------------------------------------------------

            //---复选框--------------------------------------------
            handleSelectionChange(val) {//点击复选框选中的数据
                this.multipleSelection = val;
            },
            //-----------------------------------------------------

            //---确认删除-------------------------------------------
            sureDel:function(){
                let self = this;
                if(self.who == 1){
                    if(self.whoId>0){
                        self.$axios.deletes('/api/services/app/DictItemManagement/Delete',{id:self.whoId}).then(function(res){
                            
                            self.tableData.splice(self.whoIndex,1);
                            self.dialogDelConfirm = false;
                            self.open('删除成功','el-icon-circle-check','successERP');
                            // self.loadTableData();
                        },function(res){
                            self.open('删除失败','el-icon-error','faildERP');
                            self.dialogDelConfirm = false;
                            self.errorMessage=true;
                            self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                        })
                    }else{
                        self.dialogDelConfirm = false;
                        self.tableData.splice(self.whoIndex,1);
                        self.addList.splice(self.whoIndex,1);
                        self.open('删除新增行成功','el-icon-circle-check','successERP');
                    }
                };

                if(self.who == 2){
                    self.$axios.posts('/api/services/app/DictItemManagement/BatchDelete',self.idArray).then(function(res){
                        self.loadTableData();
                        self.dialogDelConfirm = false;
                        self.open('删除成功','el-icon-circle-check','successERP');    
                    },function(res){
                        self.open('删除失败','el-icon-error','faildERP');
                        self.dialogDelConfirm = false;
                        self.errorMessage=true;
                        self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                    })
                }
            },
            //-----------------------------------------------------

            //---行内删除-------------------------------------------
            delRow:function(index,row,who){
                let self = this;
                self.who = who;
                self.whoIndex = index;
                self.whoId = row.id;
                self.dialogDelConfirm = true;
            },
            //-----------------------------------------------------

            //---多项删除-------------------------------------------
            delMore:function(num){
                let self = this;
                self.idArray.ids = [];
                for(let i in self.multipleSelection){
                    self.idArray.ids.push(self.multipleSelection[i].id)
                }

                if(self.idArray.ids.length>0){
                    if(self.idArray.ids.indexOf(undefined)!=-1){
                        self.$message({
                            type: 'warning',
                            message: '新增数据请在行内删除'
                        });
                        return;
                    }
                    self.dialogDelConfirm = true;   
                    self.who = num;
                }else{
                    self.$message({
                        type: 'info',
                        message: '请勾选需要删除的数据！'
                    });
                }
            },
            //-----------------------------------------------------

            //-----------------------------------------------------
            // SimpleSearch(){//简单搜索
            //      let self=this;
            //      self.tableLoading=true;
            //     self.$axios.gets('/api/services/app/OuManagement/SimpleSearch',self.searchData)
            //     .then(function(res){
            //         self.load=false
            //         self.tableData=res.result.basOus;
            //         self.tableLoading=false;
            //     },function(res){
            //         self.tableLoading=false;
            //     })
            // },

            //---open-----路由切换-----------------------------------
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
            //-------------------------------------------------------------
            
            
            //---树形操作-----------------------------------------------
            
            filterNode(value, data) {
                if (!value) return true;
                 return data.dictName.indexOf(value) !== -1;
            },
            nodeClick:function(data){
                let self = this;
                console.log(data)
                self.dictId = data.id;
                self.dictId_DictName = data.dictName;
                if(self.dictId==0){
                    self.loadTableData()
                }else{
                    self.$axios.gets('/api/services/app/DictItemManagement/GetDictId',{DictId:data.id,SkipCount:'0',MaxResultCount:'100'}).then(function(res){ 
                        console.log(res)
                        self.tableData = res.result.items;
                        self.totalItem=res.result.totalCount;
                    },function(res){
                        self.tableLoading=false;
                    })
                }
                
            },
            //--------------------------------------------------------- 
            
            //---错误提示-------------------------------------------------------
            showErrprTips(e){
                $('.tipsWrapper').each(function(){
                    if($(e.target).parent('.el-input').hasClass($(this).attr('name'))){
                        $(this).addClass('display_block')
                    }else{
                        $(this).removeClass('display_block')
                    }
                })
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
            //-----------------------------------------------------------------
        },
    }
</script>

<style scoped>
.error_tips{
    height: 15px;
    line-height: 15px;
    color: #f66;
}
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
.border-right{
    border-right: 1px solid #E4E4E4;
    min-height: 380px;
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
.dic-list .el-button+.el-button{
    margin-left: 0;
}
.dic-list .bAreaSearch .el-input__inner{
    height: 30px;
    border-radius: 30px;
}
/* .bAreaListForm .el-tree-node>.el-tree-node__children{
    overflow: visible!important;
} */
.dic-list .el-dialog__footer{
    padding:0;
}
.dic-list .areaDialog .bgcolor:first-child{
    margin-top:15px;
}
.data-table .el-input__inner{
    height: 28px;
    text-align:center;
    border:none;
}
.dic-list .el-input--suffix .el-input__inner{
    padding:0;
}
.dic-list .el-input__inner{
    padding:0;
}
.dic-list .bgw .el-input__inner{
    background-color:white;
}
.dic-list .bgg .el-input__inner{
    background-color:#FAFAFA;
}
</style>