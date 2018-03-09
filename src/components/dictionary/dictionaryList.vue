<template>
    <div class="dic-list">
        <el-row class="bg-white">
            <el-col :span="5" class="border-right">
                <el-col class="h48 pl15 pr15" :span="24">
                    <el-input placeholder="搜索..."
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
            
            <el-col :span='19'>
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

                    <button @click="delRow" class="erp_bt bt_del">
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
                            
                            <el-table-column type="selection"></el-table-column>

                            <el-table-column prop="itemCode" label="编码">
                                <template slot-scope="scope">
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

                            <el-table-column prop="itemName" label="名称">
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

                            <el-table-column prop="manager" label="系统默认">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="scope.row.isSystem" disabled v-if="scope.row.isSystem"></el-checkbox>
                                    <el-checkbox v-model="scope.row.isSystem" disabled v-else></el-checkbox>
                                </template>
                            </el-table-column>

                            <el-table-column prop="status" label="状态">
                                <template slot-scope="scope">
                                    <el-select  v-model="scope.row.status" v-if="scope.row.isSystem==true" disabled >
                                        <el-option  v-for="item in status" :key="item.value" :label="item.label" :value="item.value" @click="aa">
                                        </el-option>
                                    </el-select>

                                    <el-select  v-model="scope.row.status" v-else @change="handleChange(scope.$index,scope.row)" >
                                        <el-option  v-for="item in status" :key="item.value" :label="item.label" :value="item.value" @click="aa">
                                        </el-option>
                                    </el-select>


                                    <!-- <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.status"
                                            v-if="scope.row.isSystem==true"
                                            disabled
                                            type="text"/>
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.status"
                                            v-else
                                            @change='handleChange(scope.$index,scope.row)'
                                            type="text"/>         -->
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
                                            v-model="scope.row.currencyCode"
                                            v-if="scope.row.isSystem==true"
                                            disabled
                                            type="text"/>
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.currencyCode"
                                            v-else
                                            @change='handleChange(scope.$index,scope.row)'
                                            type="text"/>
                                </template>
                            </el-table-column>

                            <el-table-column label="操作">
                                 <template slot-scope="scope">
                                    <!-- <el-button type="text" size="small"  @click="modify(scope.row)" >修改</el-button> -->
                                    <!-- <el-button type="text" size="small"  @click="see(scope.row)" >查看</el-button> -->
                                    <el-button type="text" size="small"  @click="confirmDel(scope.row)" >删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination style="margin-top:20px;" 
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
        <!-- <el-dialog :title="tittle" :visible.sync="dialogFormVisible" width="505px" class="areaDialog">
            
            <div class="bgcolor smallBgcolor"><label>字典编码</label><el-input :class="{redBorder : validation.hasError('dialogData.dictCode')}" v-model="dialogData.dictCode" placeholder=""></el-input></div>
            <div class="bgcolor smallBgcolor error_tips"><label></label>{{ validation.firstError('dialogData.dictCode') }}</div>
            
            <div class="bgcolor smallBgcolor"><label>字典名称</label><el-input :class="{redBorder : validation.hasError('dialogData.dictName')}" v-model="dialogData.dictName" placeholder=""></el-input></div>
            <div class="bgcolor smallBgcolor error_tips"><label></label>{{ validation.firstError('dialogData.dictName') }}</div>
            
            <div class="bgcolor smallBgcolor"><label>排序</label><el-input :class="{redBorder : validation.hasError('dialogData.seq')}" v-model="dialogData.seq" placeholder=""></el-input></div>
            <div class="bgcolor smallBgcolor error_tips"><label></label>{{ validation.firstError('dialogData.seq') }}</div>
            
            <div class="bgcolor smallBgcolor"><label>备注</label><el-input :class="{redBorder : validation.hasError('dialogData.remark')}" v-model="dialogData.remark" placeholder=""></el-input></div>
            <div class="bgcolor smallBgcolor error_tips"><label></label>{{ validation.firstError('dialogData.remark') }}</div>
               
            <div slot="footer" class="dialog-footer">
                <button class="dialogBtn" @click="save">确认</button>
                <button class="dialogBtn" type="primary" @click="dialogFormVisible = false">取消</button>
            </div>
        </el-dialog> -->
    </div>
</template>

<script>
    export default{
        name:'customerInfor',
        data(){
            return {
                searchLeft:'',
                // dialogData:{//dialog数据
                //     dictCode:'',//字典编码 
                //     dictName:'',//字典名称
                //     seq:'',//排序
                //     remark:'',//备注
                // },
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
                 status: [{
                    value:"",
                    label: '全部'
                    }, {
                    value: 0,
                    label: '禁用'
                    }, {
                    value: 1,
                    label: '启用'
                    }],
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
                isAdd:true,//判断是增加还是修改
                tittle:'',//模态框tittle
                x:0,//增行的下标
                rows:[],//增行的数组
                addList:[],//新增上传的数组
                updateList:[],//修改过的数组
                dictId:'',//点击左侧树形保存当前的dictId
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
            aa:function(){console.log(123)},
            //---数据加载---------------------------------------------------
            loadTableData(){//表格
                 let _this=this;
                 _this.tableLoading=true;
                _this.$axios.gets('/api/services/app/DictItemManagement/GetAll',{SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem}).then(function(res){ 
                    // console.log(res)
                    _this.tableData = res.result.items;
                    // console.log(_this.tableData)
                     $.each( _this.tableData,function(index,value){//处理时间格式
                        if(value.createdTime&&value.createdTime!=''){
                            let createdTime=value.createdTime.slice(0,value.createdTime.indexOf(".")).replace("T"," ");
                            _this.tableData[index].createdTime=createdTime;
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
                _this.$axios.gets('/api/services/app/DictManagement/GetDictionaryTree')
                .then(function(res){
                    console.log(res)
                    _this.componyTree=res.result;
                    // console.log(_this.componyTree)
                    _this.treeLoading=false;
                    _this.loadIcon();
               },function(res){
                   _this.treeLoading=false;
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
            //---------------------------------------------------------------

            //---保存--------------------------------------------------------
            save:function(){
                let self = this;
                console.log(self.dialogData)
                self.$validate().then(function(success){
                    if(success){
                        if(self.dialogData.id!=''&&self.dialogData.id!=0){//判断参数id值，为''是新增，其他为创建
                            self.$axios.puts('/api/services/app/DictManagement/Update',self.dialogData).then(function(res){
                                self.dialogFormVisible=false;
                                // self.loadTableData();
                                self.loadTree();
                            },function(res){    
                                console.log('error')
                            })
                        }else{
                            self.$axios.posts('/api/services/app/DictManagement/Create',self.dialogData).then(function(res){
                                self.dialogFormVisible=false;
                                self.loadTree();
                                // self.loadTableData();
                                // self.clearAddDate();
                            },function(res){    
                                console.log('error')
                            })
                        }
                    }
                })
            },
            saveValue:function(){//保存值表的修改和新增
                
                let self = this;
                if(self.addList.length>0){
                    for(let i in self.addList){
                        self.$axios.posts('/api/services/app/DictItemManagement/Create',self.addList[i]).then(function(res){
                            self.open('创建字典系统值成功','el-icon-circle-check','successERP');
                            self.addList = [];
                            self.loadTableData();
                        },function(res){    
                            console.log('error')
                        })
                    }
                }

                if(self.updateList.length>0){
                    for(let i in self.updateList){
                        self.$axios.puts('/api/services/app/DictItemManagement/Update',self.updateList[i]).then(function(res){
                            self.open('修改字典系统值成功','el-icon-circle-check','successERP');
                            self.updateList = [];
                            self.loadTableData();
                        },function(res){    
                            console.log('error')
                        })
                    }
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
                            itemValue: 0,
                            seq: 0,
                            remark: "",
                            status: '',
                            isSystem: false,
                        };
                    self.tableData.unshift(self.rows.newCol);
                    self.addList.unshift(self.rows.newCol);
                    // console.log(self.rows)
                }else{
                    alert('未选择字典')
                }
            },
            //----------------------------------------------------------------

            //---修改---------------------------------------------------------
            modify:function(row){
                // console.log(row)
                let self = this;

                self.tittle='修改';
                self.dialogFormVisible = true;
                self.dialogData.id = row.id;
                self.dialogData.groupId = row.groupId;
                self.dialogData.ouId = row.ouId;
                self.dialogData.deptCode = row.deptCode;
                self.dialogData.deptName = row.deptName;
                self.dialogData.director = row.director;
                self.dialogData.phone = row.phone;
                self.dialogData.deptParentid = row.deptParentid;
                self.dialogData.status = row.status;
                console.log(self.dialogData)
            },
            //----------------------------------------------------------------

            //---控制编辑------分页--------------------------------------------
            handleChange:function(index,row){
                let self = this;
                console.log(row)
                if(row.id!=0&&row.id!=''){
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
                    }
                    console.log(self.updateList)
                }  
            },
            handleCurrentChange(val) {//页码改变
                 let _this=this;
                 _this.page=val;
                 if(_this.load){
                     _this.loadTableData();
                 }
            },
            handleSelectionChange(val) {//点击复选框选中的数据
                this.multipleSelection = val;
            },
            confirmDel(row) {
                let self = this;
                this.$confirm('确定删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
                }).then(() => {
                    self.delThis(row);
                    // this.$message({
                    //     type: 'success',
                    //     message: '删除成功!'
                    // });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            delThis(row){//删除字典值行
                let _this=this;
                _this.$axios.deletes('/api/services/app/DictItemManagement/Delete',{id:row.id})
                .then(function(res){
                    _this.open('删除成功','el-icon-circle-check','successERP');
                    _this.loadTableData();
                },function(res){
                })
            },
            delRow(){
                let _this=this;
                if(_this.multipleSelection.length>0){//表格
                    for(let i=0;i<_this.multipleSelection.length;i++){
                        _this.$axios.deletes('/api/services/app/DictItemManagement/Delete',{id:_this.multipleSelection[i].id})
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
            //---------------------------------------------------------------
            // SimpleSearch(){//简单搜索
            //      let _this=this;
            //      _this.tableLoading=true;
            //     _this.$axios.gets('/api/services/app/OuManagement/SimpleSearch',_this.searchData)
            //     .then(function(res){
            //         _this.load=false
            //         _this.tableData=res.result.basOus;
            //         _this.tableLoading=false;
            //     },function(res){
            //         _this.tableLoading=false;
            //     })
            // },

            //---open-----路由切换------------------------------------------
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
            // goDetail(){
            //     this.$store.state.url='/OuManage/OuManageDetail/default'
            //     this.$router.push({path:this.$store.state.url})//点击切换路由
            // },
            
            // see(row){
            //     this.$store.state.url='/OuManage/OuManageSee/'+row.id
            //     this.$router.push({path:this.$store.state.url})//点击切换路由
            // },
            //-------------------------------------------------------------
            
            
            
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
            nodeClick:function(data){
                let self = this;
                console.log(data)
                self.dictId = data.id;
                self.$axios.gets('/api/services/app/DictItemManagement/GetDictId',{DictId:data.id}).then(function(res){ 
                    // console.log(data.id)
                    // console.log(res.result.length)
                    self.tableData = res.result;
                    //  $.each(self.tableData,function(index,value){//处理时间格式
                    //     if(value.createdTime&&value.createdTime!=''){
                    //         let createdTime=value.createdTime.slice(0,value.createdTime.indexOf(".")).replace("T"," ");
                    //         self.tableData[index].createdTime=createdTime;
                    //     } 
                    // })
                    self.totalItem=res.result.length
                    // self.totalPage=Math.ceil(res.result.totalCount/self.oneItem);
                    // self.tableLoading=false;
                    },function(res){
                    self.tableLoading=false;
                })
                
            },
            //---树形操作-----------------------------------------------
            // TreeAdd(event,node,data){
            //     // console.log(data)
            //     $('.TreeMenu').css({
            //         display:'none'
            //     })
            //     let _this=this;
            //     // _this.clearTreeData();
            //     _this.tittle='新增';
            //     _this.isAdd=true;
            //     _this.dialogFormVisible=true;
            //     _this.dialogData.id=data.id;
            // },
            // TreeDel(event,node,data){
            //     $('.TreeMenu').css({
            //         display:'none'
            //     })
            //     let _this=this;
            //     _this.$axios.deletes('/api/services/app/AreaManagement/Delete',{id:data.id})
            //     .then(function(res){
            //         _this.loadTree();
            //         _this.loadTableData();
            //     },function(res){    

            //     })
            // },
            // TreeModify(event,node,data){
            //     $('.TreeMenu').css({
            //         display:'none'
            //     })
            //     let _this=this;
            //     _this.clearTreeData();
            //     _this.tittle='修改';
            //     _this.isAdd=false;
            //     _this.dialogFormVisible=true;
            //      _this.$axios.gets('/api/services/app/AreaManagement/Get',{id:data.id})
            //         .then(function(res){
            //             _this.dialogData=res.result;
            //         },function(res){    

            //         })
            // },
            filterNode(value, data) {
                if (!value) return true;
                 return data.dictName.indexOf(value) !== -1;
            },
            // renderContent(h, { node, data, store }) {
            //     return (
            //     <span class="TreeNode el-tree-node__label"
            //     on-mousedown ={ (event) => this.whichButton(event,node, data) }
            //     style="flex: 1; display: flex;align-items: center; justify-content: flex-start; font-size: 14px; padding-right: 8px;position: relative;">
            //       {node.label}
            //        <div class="TreeMenu" style="box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);display:none;position: absolute;top: 0;right: 0;width: 60px;z-index:990">
            //             <button class="TreeMenuBtn" style="font-size: 12px;display: block;width: 100%;height: 25px;border: none;background-color: #fff; cursor: pointer;" on-click={ (event) => this.TreeAdd(event,node, data) }>新增</button>
            //             <button class="TreeMenuBtn" style="font-size: 12px;display: block;width: 100%;height: 25px;border: none;background-color: #fff; cursor: pointer;" on-click={ (event) => this.TreeDel(event,node, data) }>删除</button>
            //             <button class="TreeMenuBtn" style="font-size: 12px;display: block;width: 100%;height: 25px;border: none;background-color: #fff; cursor: pointer;" on-click={ (event) => this.TreeModify(event,node, data) }>修改</button>
            //         </div>
            //     </span>);
            // },
            // whichButton(event,node, data){
            //     let e = event || window.event;
            //     let btnNum = e.button;
            //     if(e.target.className!='TreeMenuBtn'){
            //         $('.TreeMenu').css({
            //             display:'none'
            //         })
            //     }else{
            //         return false;
            //     }
            //     if (btnNum==2){
            //     e.target.id= data.id
            //     let clickDom=$('#'+e.target.id);
            //     let x = e.clientX
            //     let y = e.clientY
            //     let left=clickDom.offset().left;
            //     clickDom.children('.TreeMenu').css({
            //         display:'block',
            //         left:x-left+'px',
            //         top:'0px'
            //     })
            //     $('.el-tree-node>.el-tree-node__children').css({
            //         overflow:'visible'
            //     })
            //     }
            // },
            // clearTreeData(){
            //     let _this=this;
            //     _this.dialogData={}
            // }
            //-------------------------------------------------------------------       
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
</style>