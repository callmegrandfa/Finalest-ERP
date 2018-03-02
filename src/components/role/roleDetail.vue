<template>
 <div class="roleDetail">
     <el-row class="fixed">
         <el-col :span="24">
            <button class="erp_bt bt_back" @click="back">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_back.png">
                </div>
                <span class="btDetail">返回</span>
            </button>

            <button class="erp_bt bt_save" @click="save">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_save.png">
                </div>
                <span class="btDetail">保存</span>
            </button>

            <button class="erp_bt bt_saveAdd">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_saveAdd.png">
                </div>
                <span class="btDetail">保存并新增</span>
            </button>

            <button class="erp_bt bt_add">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_add.png">
                </div>
                <span class="btDetail">复制</span>
            </button>   

            <button class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
            <button class="erp_bt bt_cancel"><div class="btImg"><img src="../../../static/image/common/bt_cancel.png"></div><span class="btDetail">取消</span></button>
            <button class="erp_bt bt_start"><div class="btImg"><img src="../../../static/image/common/bt_start.png"></div><span class="btDetail">启用</span></button>
            <button class="erp_bt bt_stop"><div class="btImg"><img src="../../../static/image/common/bt_stop.png"></div><span class="btDetail">停用</span></button>
            <button class="erp_bt bt_in"><div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div><span class="btDetail">导入</span></button>
            <button class="erp_bt bt_out"><div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div><span class="btDetail">导出</span></button>
            <span @click="ifShow = !ifShow" class="upBt">收起<i class="el-icon-arrow-down" @click="ifShow = !ifShow" :class="{rotate : !ifShow}"></i></span>
        </el-col>
    </el-row>
 <el-collapse-transition>
     <div v-show="ifShow">   
        <el-row>
            <el-col :span="24" class="getPadding"> 
                <!-- <div class="errorTips">
                    <p class="msgDetail">错误提示：名称不能为特殊字符</p>
                    <div class="closeMsg"><i class="fa fa-times" aria-hidden="true"></i></div>
                </div> -->
                <div class="bgcolor">
                    <label><small>*</small>角色编码</label>
                    <el-input v-model="addData.roleCode" placeholder="请录入角色编码"></el-input>
                </div> 


                <div class="bgcolor">
                    <label><small>*</small>角色名称</label>
                    <el-input v-model="addData.displayName" placeholder="请输入角色名称"></el-input>
                </div>


                <div class="bgcolor">
                    <label><small>*</small>所属组织</label>
                    <el-select v-model="addData.ouId" placeholder="请选择所属组织">
                        <el-option v-for="item in customerNature" :key="item.valueNature" :label="item.label" :value="item.valueNature"></el-option>
                    </el-select>
                </div>


                <div class="bgcolor">
                    <label><small>*</small>状态</label>
                    <el-select v-model="addData.status" placeholder="请选择状态">
                        <el-option v-for="item in customerNature" :key="item.valueNature" :label="item.label" :value="item.valueNature"></el-option>
                    </el-select>
                </div>
                <div class="bgcolor moreWidth">
                    <label>备注</label>
                    <el-input 
                    v-model="addData.remark"
                    placeholder="备注"></el-input>
                </div>
            </el-col>
        </el-row>
     </div>
 </el-collapse-transition>

    <el-row class="nopadding"> 
        <div class="tabZoo">
            <el-col :span="24">
               <el-tabs v-model="activeName">
<!-- - - - - - - - - - - - - - - - - - - - 关联用户- - - - - - - - - - - - - - - - - - - - -  -->
                    <el-tab-pane label="关联用户" name="bank" class="getPadding" style="z-index:-10">
                        <button class="erp_bt bt_add"  @click="dialogRole = true">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">选取</span>
                        </button>
                        <a class="addRole"  v-for="x in roleChecked">{{x.displayName}}<i @click="addRole(x)" class="el-icon-error"></i></a>
                        <!-- dialog -->
                        <el-dialog :visible.sync="dialogRole" class="dialogRole">
                            <template slot="title">
                                <span style="float:left;">选取角色</span>
                                <div class="double_bt">
                                    <template v-if="dialogRole_menuCheck">
                                        <div class="menu_btn_choose" :class="{menu_btn_active : !dialogRole_menuCheck}" @click="dialogRole_nodeAdd">已选用户</div>
                                        <div class="menu_btn_choose" :class="{menu_btn_active : dialogRole_menuCheck}">未选用户</div>
                                    </template>
                                    <template v-else>
                                        <div class="menu_btn_choose" :class="{menu_btn_active : !dialogRole_menuCheck}">已选用户</div>
                                        <div class="menu_btn_choose" :class="{menu_btn_active : dialogRole_menuCheck}" @click="dialogRole_nodeDel">未选用户</div>
                                    </template>
                                </div>
                            </template>
                            <el-col :span="24">
                                <div class="menu_item_wapper menu_item_add">
                                    <span class="menu_item" v-for="x in roleChecked"><a class="menu_add" @click="addRole(x)"><i class="el-icon-minus"></i></a>{{x.displayName}}</span>
                                </div>
                                <div class="menu_item_wapper menu_item_del">
                                    <span class="menu_item" v-for="x in roleNochecked"><a class="menu_add" @click="delRole(x)"><i class="el-icon-plus"></i></a>{{x.displayName}}</span>
                                </div>
                                <!-- <el-col :span="24" class="load_more">
                                    <button>加载更多</button>
                                </el-col> -->
                            </el-col>
                        </el-dialog>
                        <el-table 
                        v-loading="roleTableLoading"
                        :data="roletableData" 
                        border 
                        style="width: 100%" 
                        stripe>
                           <el-table-column label="序号">
                                 <template slot-scope="scope">
                                    {{scope.$index+1}}
                                </template>
                            </el-table-column>

                            <el-table-column prop="userCode" label="用户编码"></el-table-column>

                            <el-table-column prop="displayName" label="用户名称"></el-table-column>

                            <el-table-column prop="ouId" label="所属组织"></el-table-column>

                             <el-table-column label="操作">
                                 <template slot-scope="scope">
                                     <el-button type="text" size="small"  @click="delThisRole(scope.row)">删除</el-button>
                                    <el-button type="text" size="small"  @click="seeThisRole(scope.row)" >查看</el-button>
                                    <!-- <el-button type="text" size="small"  @click="see(scope.row)" >查看</el-button> -->
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination
                        style="margin-top:20px;" 
                        class="text-right" 
                        background layout="total,prev, pager, next,jumper" 
                        @current-change="roleHandleCurrentChange"
                        :current-page="rolePageIndex"
                        :page-size="roleOneItem"
                        :total="roleTotalItem">
                        </el-pagination>   
                    </el-tab-pane>
<!-- - - - - - - - - - - - - - - - - - - - 分配组织- - - - - - - - - - - - - - - - - - - - -  -->
                    <el-tab-pane label="分配组织" name="address" class="getPadding" style="z-index:-1000">
                        <button class="erp_bt bt_add" @click="addColbank">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">选取</span>
                        </button>
                        
                        <el-table 
                        v-loading="ouTableLoading"
                        :data="ouTableData" 
                        border 
                        style="width: 100%" 
                        stripe>
                            <el-table-column label="序号">
                                 <template slot-scope="scope">
                                    {{scope.$index+1}}
                                </template>
                            </el-table-column>

                            <el-table-column prop="ouCode" label="组织编码"></el-table-column>

                            <el-table-column prop="basOuTypes" label="组织类型"></el-table-column>

                            <el-table-column prop="createdBy" label="授权人"></el-table-column>

                            <el-table-column label="授权时间">
                                <template slot-scope="scope">
                                    <el-date-picker
                                    v-model="ouTableData[scope.$index].createdTime"
                                    format="yyyy.MM.dd"
                                    type="datetime" 
                                    readonly
                                    align="center"></el-date-picker>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination
                        style="margin-top:20px;" 
                        class="text-right" 
                        background layout="total,prev, pager, next,jumper" 
                        @current-change="ouHandleCurrentChange"
                        :current-page="ouPageIndex"
                        :page-size="ouOneItem"
                        :total="ouTotalItem">
                        </el-pagination>   
                    </el-tab-pane>
<!-- - - - - - - - - - - - - - - - - - - - 分配功能- - - - - - - - - - - - - - - - - - - - -  -->
                    <el-tab-pane label="分配功能" name="organization" class="getPadding" style="z-index:-1000">
                        <el-col :span="24">
                            <button class="erp_bt bt_add" @click="addColbank">
                                <div class="btImg">
                                    <img src="../../../static/image/common/bt_add.png">
                                </div>
                                <span class="btDetail">选取</span>
                            </button>
                        </el-col>
                        <!-- tree -->
                        <el-col :span="5">
                            <el-tree
                                oncontextmenu="return false" ondragstart="return false" onselectstart="return false" onselect="document.selection.empty()" oncopy="document.selection.empty()" onbeforecopy="return false" style="-moz-user-select: none"
                                v-loading="fnTreeLoading" 
                                :data="fnTreeData"
                                :props="defaultProps"
                                node-key="id"
                                default-expand-all
                                ref="tree"
                                :expand-on-click-node="false"
                                @node-click="fnNodeClick">
                            </el-tree>
                        </el-col>
                        <!-- table -->
                        <el-col :span="19">
                            <el-table 
                            v-loading="fnTableLoading"
                            :data="fnTableData" 
                            border 
                            style="width: 100%" 
                            stripe>
                                <el-table-column label="序号">
                                    <template slot-scope="scope">
                                        {{scope.$index+1}}
                                    </template>
                                </el-table-column>

                                <el-table-column type="selection"></el-table-column>

                                <el-table-column prop="moduleName" label="模块名称"></el-table-column>

                                <el-table-column label="功能名称">
                                    <template slot-scope="scope">
                                        <a class="addRole" v-for="i in fnTableData[scope.$index].permissionDtos">{{i.displayName}}</a>
                                    </template>
                                </el-table-column>

                                <el-table-column label="操作">
                                    <template slot-scope="scope">
                                        <el-button type="text" size="small"  @click="delThisFn(scope.row)">删除</el-button>
                                        <!-- <el-button type="text" size="small"  @click="seeThisRole(scope.row)" >查看</el-button> -->
                                        <!-- <el-button type="text" size="small"  @click="see(scope.row)" >查看</el-button> -->
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination
                            style="margin-top:20px;" 
                            class="text-right" 
                            background layout="total,prev, pager, next,jumper" 
                            @current-change="fnHandleCurrentChange"
                            :current-page="fnPageIndex"
                            :page-size="fnOneItem"
                            :total="fnTotalItem">
                            </el-pagination>       
                        </el-col>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </div>
    </el-row>
 <el-row>
    <el-col :span="22" class="auditInformation getPadding">
        <h4 class="h4">审计信息</h4>
        <div>
            <div class="bgcolor"><label>创建人</label><el-input v-model="auditInformation.createName" disabled="disabled"></el-input></div>
            <div class="bgcolor"><label>创建时间</label><el-date-picker v-model="auditInformation.createTime" type="date" disabled="disabled"></el-date-picker></div>
            <div class="bgcolor"><label>修改人</label><el-input v-model="auditInformation.modifyName" disabled="disabled"></el-input></div>
            <div class="bgcolor"><label>修改时间</label><el-date-picker v-model="auditInformation.modifyTime" type="date" disabled="disabled"></el-date-picker></div>
            <!-- <div class="bgcolor"><label>启用日期</label><el-date-picker v-model="auditInformation.startTime" type="date" placeholder="选择启用日期"></el-date-picker></div>
            <div class="bgcolor"><label>封存日期</label><el-date-picker v-model="auditInformation.finishTime" type="date" placeholder="选择封存日期"></el-date-picker></div>
            <div class="bgcolor"><label>封存人</label><el-input v-model="auditInformation.finishName" placeholder="请录入封存人"></el-input></div>     -->
        </div>                                  
    </el-col>
</el-row>                                                                       
</div>
</template>

<script>
export default({
    data() {
        return{
            ifShow:true, 
            auditInformation:{//审计信息
                createName:"",
                createTime:"",
                modifyName:"",
                modifyTime:"",
                startTime:"",
                finishTime:"",
                finishName:"",
            },

            customerNature:[{//客户性质
                valueNature:'1',
                label: '选项1'
            }, {
                valueNature:'2',
                label: '选项2'
            }, {
                valueNature:'3',
                label: '选项3'
            }],

            activeName: 'bank',//tabs标签页默认激活name

            addData:{
                "ouId": "",
                "roleCode": "",
                "displayName": "",
                "status": "",
                "remark": "",
                "permissions": [],
                "userCodes": []
            },
// -------------关联用户-------------------
            roletableData:[],//关联用户数据
            rolePageIndex:1,//分页的当前页码
            roleTotalPage:0,//当前分页总数
            roleOneItem:10,//每页有多少条信息
            rolePage:1,//当前页
            roleTotalItem:0,//总共有多少条消息
            roleTableLoading:true,
            dialogRole:false,
            dialogRole_menuCheck:true,
            roleChecked:[],
            roleNochecked:[],
            roleAllNode:[],//所有角色
            checkedRoleCode:[],//只有当用户修改时此数据不为空，新增页面永远为空，存储用户已经选中所有信息
// -------------分配组织-------------------
            ouTableData:[],//分配组织数据
            ouPageIndex:1,//分页的当前页码
            ouTotalPage:0,//当前分页总数
            ouOneItem:10,//每页有多少条信息
            ouPage:1,//当前页
            ouTotalItem:0,//总共有多少条消息
            ouTableLoading:true,
            dialogOu:false,
// -------------分配功能-------------------
            fnTableData:[],//分配功能数据
            fnTableData:[],//分配组织数据
            fnPageIndex:1,//分页的当前页码
            fnTotalPage:0,//当前分页总数
            fnOneItem:10,//每页有多少条信息
            fnPage:1,//当前页
            fnTotalItem:0,//总共有多少条消息
            fnTableLoading:true,
            dialogFn:false,
            dialogFn_menuCheck:true,
            roleChecked:[],
            roleNochecked:[],
            roleAllNode:[],//所有权限
            checkedFnCode:[],
// -------------tree-------------------
            fnTreeLoading:true,
            fnTreeData:[],
            defaultProps: {
                children: 'childNodes',
                label: 'moduleName',
                id:'id',
            },

        }
    },
    created () {
      let _this=this;
      _this.loadRoleTable();
      _this.loadOuTable();
      _this.loadFnTable();
      _this.fnLoadTree();
    },
    methods:{
        getRoleData(){
           let _this=this;
           _this.$axios.gets('/api/services/app/Role/Get',{id:_this.$route.params.id})
           .then(function(res){
                _this.addData= res.result
                if(res.result.userCodes.length>0 && res.result.userCodes.length){
                    _this.checkedRoleCode=res.result.userCodes;
                }
                if(res.result.permissions.length>0 && res.result.permissions.length){
                    _this.checkedFnCode=res.result.permissions;
                }
                
           },function(res){

           })
       }, 
        delThisRole(row){//关联用户 删除
            let _this=this;
            _this.$axios.deletes('/api/services/app/User/Delete',{id:row.id})
            .then(function(res){
                _this.loadRoleTable();
            },function(res){
            })
        },
        seeThisRole(row){//关联用户 查看
            this.$store.state.url='/user/userModify/'+row.id
            this.$router.push({path:this.$store.state.url})
        },
        delThisFn(row){//分配功能 删除
            let _this=this;
            _this.$axios.deletes('/api/services/app/ModuleManagement/Delete',{id:row.id})
            .then(function(res){
                _this.loadFnTable();
                _this.fnLoadTree();
            },function(res){
            })
        },
        loadRoleTable(){//获取关联用户数据
            let _this=this;
            _this.roleTableLoading=true
            _this.$axios.gets('/api/services/app/User/GetAll',{SkipCount:(_this.rolePage-1)*_this.roleOneItem,MaxResultCount:_this.roleOneItem})
            .then(function(res){
                _this.roletableData=res.result.items;
                _this.roleTotalItem=res.result.totalCount
                _this.roleTotalPage=Math.ceil(res.result.totalCount/_this.roleOneItem);
                _this.roleTableLoading=false;
                $.each(_this.roletableData,function(index,value){
                    _this.roleAllNode.push(value)//获取所有角色
                })
                _this.roleNochecked=_this.roleAllNode;
                if(_this.roleAllNode.length>0 && _this.checkedRoleCode.length>0){
                    for(let i=0;i<_this.roleAllNode.length;i++){
                            for(let x=0;x<_this.checkedRoleCode.length;x++){
                                if(_this.checkedRoleCode[x]==_this.roleAllNode[i].roleCode){
                                    let item=_this.roleAllNode[i]
                                    _this.roleChecked.push(item)//获取已选中的角色
                                    _this.roleNochecked.splice(i,1);//未选中角色
                                }
                            }
                        }
                }
                },function(res){
                _this.roleTableLoading=false;
            })
        },
        loadOuTable(){//获取分配组织数据
            let _this=this;
            _this.ouTableLoading=true
            _this.$axios.gets('/api/services/app/OuManagement/GetAll',{SkipCount:(_this.ouPage-1)*_this.ouOneItem,MaxResultCount:_this.ouOneItem})
            .then(function(res){ 
                _this.ouTableData=res.result.items;
                _this.ouTotalItem=res.result.totalCount
                _this.ouTotalPage=Math.ceil(res.result.totalCount/_this.ouOneItem);
                _this.ouTableLoading=false;
                },function(res){
                _this.ouTableLoading=false;
            })
        },
        loadFnTable(){//获取分配功能数据
            let _this=this;
            _this.fnTableLoading=true
            _this.$axios.gets('/api/services/app/ModuleManagement/GetAll',{SkipCount:(_this.fnPage-1)*_this.fnOneItem,MaxResultCount:_this.fnOneItem})
            .then(function(res){ 
                _this.fnTableData=res.result.items;
                _this.fnTotalItem=res.result.totalCount
                _this.fnTotalPage=Math.ceil(res.result.totalCount/_this.fnOneItem);
                _this.fnTableLoading=false;
                },function(res){
                _this.fnTableLoading=false;
            })
        },
        roleHandleCurrentChange(val){//页码改变
            let _this=this;
            _this.rolePage=val;
            _this.loadRoleTable();
        },
        ouHandleCurrentChange(val){//页码改变
            let _this=this;
            _this.ouPage=val;
            _this.loadOuTable();
        },
        fnHandleCurrentChange(val){//页码改变
            let _this=this;
            _this.fnPage=val;
            _this.loadFnTable();
        },

        fnLoadTree(){
            let _this=this;
            _this.fnTreeLoading=true;
            _this.$axios.gets('/api/services/app/ModuleManagement/GetModulesTree')
            .then(function(res){
                _this.fnTreeData=res
                _this.fnTreeLoading=false;
                _this.loadIcon()
            },function(res){
                _this.fnTreeLoading=false;
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
        fnNodeClick(data){
            let _this=this;
            _this.fnTableData=[];
            _this.fnTableData.push(data)
            _this.fnTotalItem=_this.fnTableData.length;
        },

        dialogRole_nodeAdd(){
            let _this=this;
            _this.dialogRole_menuCheck=!_this.dialogRole_menuCheck
            $('.dialogRole .menu_item_add').css('display','block')
            $('.dialogRole .menu_item_del').css('display','none')
        },
        dialogRole_nodeDel(){
            let _this=this;
            _this.dialogRole_menuCheck=!_this.dialogRole_menuCheck
            $('.dialogRole .menu_item_add').css('display','none')
            $('.dialogRole .menu_item_del').css('display','block')
        },
        addRole(x){
            let _this=this;
            let flag=false;
            if(_this.roleNochecked.length<=0){
                flag=true;
            }else{
                flag=false;
                $.each(_this.roleNochecked,function(index,value){
                    if(x==value){
                        flag=false;
                    }else{
                        flag=true;
                    }
                })
            }
            $.each(_this.roleChecked,function(index,value){
                if(x==value){
                    _this.roleChecked.splice(index,1)
                }
            })
            if(flag){
                _this.roleNochecked.push(x);
            }
        },
        delRole(x){
            let _this=this;
            let flag=false;
            if(_this.roleChecked.length<=0){
                flag=true;
            }else{
                flag=false;
                $.each(_this.roleChecked,function(index,value){
                    if(x==value){
                        flag=false;
                    }else{
                        flag=true;
                    }
                })
            }
            $.each(_this.roleNochecked,function(index,value){
                if(x==value){
                    _this.roleNochecked.splice(index,1)
                }
            })
            if(flag){
                _this.roleChecked.push(x);
            }
        },
        //---创建完成后刷新页面获取数据----------------------------------
        loadData:function(){
            let self = this;
            this.$axios.gets('/api/services/app/ContactManagement/Get',{id:self.backId}).then(function(res){
                    // console.log(res);
                    self.createContactParams = res.result;
            })
            //获取所有的银行信息，也可以用groupid获取，
            this.$axios.gets('/api/services/app/ContactBankManagement/GetAll',{SkipCount:'0',MaxResultCount:'100'}).then(function(res){
                // console.log(res);
                self.bankData = res.result.items;
            })
            //获取所有的地址信息，也可以用contactId获取
            this.$axios.gets('/api/services/app/ContactAddressManagement/GetAll',{SkipCount:'0',MaxResultCount:'100'}).then(function(res){
                console.log(res);
                self.addressData = res.result.items;
            })
        },
        //------------------------------------------------------------

        //---跳转修改页------------------------------------------------
        goModify:function(id){//点击跳转修改页modify
            // this.$store.state.url='/customer/customerModify/default'
            this.$store.state.url='/customer/customerModify/'+id;
            this.$router.push({path:this.$store.state.url})//点击切换路由
        },
        //------------------------------------------------------------

        //---保存数据--------------------------------------------------       
        save:function(){//点击保存创建客户资料
            let self = this;
            console.log(self.createContactParams)
            this.$axios.posts('/api/services/app/ContactManagement/Create',self.createContactParams).then(function(res){
                    // console.log(res);
                    self.open('创建客户资料成功','el-icon-circle-check','successERP');
                    // console.log(res.result.id);
                    self.backId = res.result.id;
                    self.createBankParams.contactId = res.result.id;
                    // console.log(self.createBankParams.contactId)
                    // console.log(self.createBankParams)
                    for(let i in self.addBankList){
                        self.addBankList[i].contactId = res.result.id;
                    }
                    self.createBank();
                    
                    for(let i in self.addAddressList){
                        self.addAddressList[i].contactId = res.result.id;
                    }
                    self.createBank();

                    for(let i in self.addOuList){
                        self.addOuList[i].contactId = res.result.id;
                    }
                    self.createOu();

                    self.goModify(self.backId);
              },function(res){
                  console.log(res)
                  self.open('创建失败','el-icon-error','faildERP')
              });

        },
        //---------------------------------------------------------
        
        //---创建数据-----------------------------------------------
        createBank:function(){//创建银行资料
            let self = this;
            if(self.addBankList.length>0){
                for(let i in self.addBankList){
                    this.$axios.posts('/api/services/app/ContactBankManagement/Create',self.addBankList[i]).then(function(res){         
                        self.open('创建银行资料成功','el-icon-circle-check','successERP');
                        // console.log(res)
                    }),function(res){
                        self.open('创建银行资料失败','el-icon-error','faildERP');
                    };
                }
            }
        },
        addColbank:function(){//银行增行
            let self = this;
                self.x++;
                let newCol = 'newCol'+self.x;
                self.xrows.newCol ={
                    "groupId": 1,
                    "contactId":'',
                    "settlementCurrencyId": '',
                    "accountNo": "",
                    "accountName": "",
                    "openingBank": '',
                    "contactPerson": '',
                    "phone": '',
                    "isDefault": true
                };
                self.bankData.unshift(self.xrows.newCol);
                self.addBankList.unshift(self.xrows.newCol)
        },

        createAddress:function(){//创建地址资料
            let self = this;

            if(self.addAddressList.length>0){
                for(let i in self.addAddressList){
                    this.$axios.posts('/api/services/app/ContactAddressManagement/Create',self.addAddressList[i]).then(function(res){         
                        self.open('创建地址信息成功','el-icon-circle-check','successERP');
                        console.log(res)
                    }),function(res){
                        self.open('创建地址信息失败','el-icon-error','faildERP');
                    };
                }
            }
        },
        addColAddress:function(){//地址增行
            let self = this;
                self.y++;
                let newCol = 'newCol'+self.y;
                self.yrows.newCol ={
                    "groupId": 1,
                    "contactId": '',
                    "addressType": '',
                    "addressId": '',
                    "completeAddress": "",
                    "contactPerson": "",
                    "phone": "",
                    "isDefault": true
                };
                self.addressData.unshift(self.yrows.newCol);
                self.addAddressList.unshift(self.yrows.newCol)
        },

        createOu:function(){//创建组织资料
            let self = this;
            if(self.addOuList.length>0){
                for(let i in self.addOuList){
                    this.$axios.posts('/api/services/app/ContactOuManagement/Create',self.addOuList[i]).then(function(res){         
                        self.open('创建组织信息成功','el-icon-circle-check','successERP');
                        console.log(res)
                    }),function(res){
                        self.open('创建组织信息失败','el-icon-error','faildERP');
                    };
                }
            }
        },
        addColOu:function(){//组织增行
            let self = this;
            self.z++;
            let newCol = 'newCol'+self.z;
            self.zrows.newCol ={
                "groupId": 1,
                "contactId": '',
                "ouId": '',
                "transport_method_id": '',
                "is_default": true
            };
            self.ouData.unshift(self.zrows.newCol)
            self.addOuList.unshift(self.zrows.newCol)
        },

        //------------------------------------------------------------
        
        //---控制编辑删除等-------------------------------------------
        
        handleBankEdit:function(index,row){//银行信息编辑
            
        },
        handleBankChange:function(index,row){
            let self = this;
            let flag = false;
            if(self.updataBankList.length==0){
                flag = true;
            }else if(self.updataBankList.length>=1){
                for(let i in self.updataBankList){
                    if(row.id != self.updataBankList[i].id){
                        flag = true;
                        console.log(flag) 
                    }else{
                        flag= false;
                        break;        
                    }
                }
            }

            if(flag){
                self.updataBankList.push(row);
                console.log(self.updataBankList)
            }
        },
        handleBankDelete:function(index,row){//银行表格内删除操作
            let self = this;
            this.bankData.splice(index,1);
            self.addBankList.splice(index,1);
            // this.$axios.deletes('/api/services/app/ContactBankManagement/Delete',{id:row.id}).then(function(res){
            //     console.log(res);
            //     self.open('删除银行资料成功','el-icon-circle-check','successERP');
            // }),function(res){
            //     self.open('删除银行资料失败','el-icon-error','faildERP');
            // };
        },

        handleAddressEdit:function(){//地址信息编辑
            
        },
        handleAddressChange:function(index,row){
            let self = this;
            let flag = false;
            if(self.updataAddressList.length==0){
                flag = true;
            }else if(self.updataAddressList.length>=1){
                for(let i in self.updataAddressList){
                    if(row.id != self.updataAddressList[i].id){
                        flag = true;
                        console.log(flag) 
                    }else{
                        flag= false;
                        break;        
                    }
                }
            };

            if(flag){
                self.updataAddressList.push(row);
                console.log(self.updataAddressList)
            }
        },
        handleAddressDelete:function(index){//地址表格内删除操作
            let self = this;
            self.addressData.splice(index,1);
            self.addAddressList.splice(index,1)
            // this.$axios.deletes('/api/services/app/ContactAddressManagement/Delete',{id:row.id}).then(function(res){
            //     console.log(res);
            //     self.open('删除地址资料成功','el-icon-circle-check','successERP');
            // }),function(res){
            //     self.open('删除地址资料失败','el-icon-error','faildERP');
            // };
        },

        handleOuEdit:function(){//地址信息编辑
            let self = this;
            self.updataAddressList.push(row)
        },
        handleOuChange:function(index,row){
            let self = this;
            let flag = false;
            if(self.updataOuList.length==0){
                flag = true;
            }else if(self.updataOuList.length>=1){
                for(let i in self.updataOuList){
                    if(row.id != self.updataOuList[i].id){
                        flag = true;
                        console.log(flag) 
                    }else{
                        flag= false;
                        break;        
                    }
                }
            };

            if(flag){
                self.updataOuList.push(row);
                console.log(self.updataOuList)
            }
        },
        //------------------------------------------------------------

        //---控制跳转------------------------------------------------
        back(){//点击新增跳转
            this.$store.state.url='/role/roleList/default'
            this.$router.push({path:this.$store.state.url})//点击切换路由
        },
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
        //----------------------------------------------------------
        
    }
       

    })
  </script>

  <style>
  .roleDetail{
      font-family: 'microsoft yahei';
  }
 /*收起*/
 .roleDetail .upBt{
     font-size: 12px;
     float: right;
     margin-right: 10px;
     margin-top: 10px;
     cursor: pointer;
 }
 .roleDetail .upBt i{
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s; 
    color:#cacaca;
    margin-left: 5px;
 }
 .roleDetail .upBt i.rotate{
     transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);	
 }

.roleDetail  .errorTips{
    margin-bottom: 10px;
}  
.roleDetail .el-row:first-child{
      padding:5px 0;
}
  .roleDetail .el-row{
     padding:15px 0;
     border-bottom: 1px solid #e4e4e4;
     background-color: #fff;
  }

.roleDetail .tabZoo{
     overflow: hidden;
     background-color: #fff;
 }

 .roleDetail  .getPadding,.tabZoo .el-tabs__nav-scroll{
     padding: 0 10px;
 }
 .roleDetail .tabZoo .auditInformation{
     margin-top: 15px;
 }

.roleDetail .tabZoo .erp_bt:first-child{
    margin-left: 0;
}
.roleDetail .nopadding{
    padding-top: 0;
}
.roleDetail .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.roleDetail .el-table td{
    padding: 3px 0;
}
.roleDetail .el-table__body{
    text-align: center;
}
.roleDetail .el-table .cell{
    padding-left:0px;
    padding-right:0px;
}
.mb10{
    margin-bottom: 10px;
}
.input-need{
    border:none;
    outline: none;
    width: 100%;
    height: 23px;
    line-height: 23px;
    text-align: center
}
.roleDetail .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}

.roleDetail .bgcolor.moreWidth{
     width: 505px;
 }
  .roleDetail .bgcolor.moreWidth .el-input{
      width: 423px;
  }

.menu_btn_active{
    background-color: #6699FF;
    color: #fff; 
}
/* 头部已选功能，未选功能 */
.double_bt{
    width: 200px;
    height: 30px;
    border: 1px solid #6699FF;
    color: #6699FF;
    background-color: transparent;
    font-size: 12px;
    border-radius: 3px;
    margin: auto;
}
.menu_btn_choose{
    width: 100px;
    height: 30px;
    float: left;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
}
.menu_btn_active{
    background-color: #6699FF;
    color: #fff; 
}
.show{
    display: block;
}
.menu_box{
    display: none;
}
.menu_item_wapper{
    display: block;
}
.menu_item_del{
    display: block;
}
.menu_item_add{
    display: none;
}
.load_more{
    text-align: center;
}
.menu_item{
    text-align: center;
    display: block;
    width: 190px;
    height: 60px;
    line-height: 60px;
    font-size: 13px;
    color: #666666;
    position: relative;
    float: left;
    margin-right: 20px;
    border: 1px solid #33CCCC;
    border-radius: 5px;
    background-color: transparent;
    margin-bottom: 15px;
}
.menu_add{
    text-align: center;
    display: block;
    width: 24px;
    height: 24px;
    position: absolute;
    left: -12.5px;
    top: 16px;
    background-color: #69f;
    color: #fff;
    font-size: 24px;
    border-radius: 50%;
    line-height: 24px;
    cursor: pointer;
}
.menu_add:hover{
    opacity: 0.9;
}
.addRole{
    text-align: center;
    line-height: 35px;
    display: inline-block;
    width: 66px;
    height: 35px;
    background-color: #f2f2f2;
    border: none;
    border-radius: 3px;
    font-size: 12px;
    margin-right: 10px;
    cursor: pointer;
    position: relative;
}
.addRole i{
  position: absolute;
  right: -4px;
  top: -4px;
  color: #cccccc;
}
.addRole:hover i{
  color:#f66;
}
  </style>
  
  <style>
  .roleDetail .el-tab-pane .bt_add{
      margin-bottom:15px;
  }
  .roleDetail .el-dialog__headerbtn{
    top:3px;
    font-size:50px;
}
.roleDetail .el-dialog__body{
  overflow: hidden;
}
  </style>
