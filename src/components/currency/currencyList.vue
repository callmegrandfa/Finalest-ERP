<template>
    <div class="cu-list">
        <el-row class="bg-white">
            <el-col :span='24'>
                <el-row class="h48 pt5">
                    <button class="erp_bt bt_add" @click="addCol">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_add.png">
                        </div>
                        <span class="btDetail">新增</span>
                    </button>

                    <button class="erp_bt bt_save" @click="save">
                        <div class="btImg">
                        <img src="../../../static/image/common/bt_save.png">
                        </div>
                        <span class="btDetail">保存</span>
                    </button>

                    <button class="erp_bt bt_del" @click="delMore(2)">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_del.png">
                        </div>
                        <span class="btDetail">删除</span>
                    </button>

                    <button class="erp_bt bt_in">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_inOut.png">
                        </div>
                        <span class="btDetail">导入</span>
                    </button>

                    <button class="erp_bt bt_out">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_inOut.png">
                        </div>
                        <span class="btDetail">导出</span>
                    </button>

                </el-row>

                <el-row class="pl10 pt10 pr10 pb10">
                    <el-col :span="24">
                        <el-table :data="allList" border style="width: 100%" stripe @selection-change="handleSelectionChange">
                            <el-table-column type="selection" fixed></el-table-column>

                            <el-table-column prop="currencyCode" label="*币种编码" fixed>
                                <template slot-scope="scope">
                                    <img v-show='ar.indexOf(scope.row.id)>=0' class="abimg" src="../../../static/image/content/redremind.png"/>
                                    <input class="input-need"
                                            :class="{'input-bgw':scope.$index%2==0,'input-bgp':scope.$index%2!=0,'redBorder' : validation.hasError('allList.currencyCode')}"
                                            v-model="scope.row.currencyCode"
                                            @change='handleChange(scope.$index,scope.row)'
                                            type="text"/>
                                            <!-- :class="[scope.$index%2==0?'input-bgw':'input-bgp']"  -->
                                            <!-- redBorder : validation.hasError('customerData.contactClassId') -->
                                </template>
                            </el-table-column>

                            <el-table-column prop="currencyName" label="*币种名称" fixed>
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']"
                                            v-model="scope.row.currencyName" 
                                            @change='handleChange(scope.$index,scope.row)'
                                            type="text"/>
                                </template>
                            </el-table-column>

                            <el-table-column prop="increment" label="最小递增额">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.increment"
                                            @change='handleChange(scope.$index,scope.row)'
                                            type="text"/>
                                </template>
                            </el-table-column>

                            <el-table-column prop="status" label="*状态">
                                <template slot-scope="scope">
                                    <el-select  v-model="scope.row.status" @change="handleChange(scope.$index,scope.row)" :class="scope.$index%2==0?'bgw':'bgg'">
                                        <el-option  v-for="item in statusAr" :key="item.itemValue" :label="item.itemName" :value="item.itemValue">
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-table-column>

                            <el-table-column prop="remark" label="备注">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.remark" 
                                            @change='handleChange(scope.$index,scope.row)'
                                            type="text"/>
                                </template>
                            </el-table-column>

                            <el-table-column prop="createBy" label="创建人">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.createBy" 
                                            disabled
                                            type="text"/>
                                </template>
                            </el-table-column>

                            <el-table-column prop="createdTime" label="创建时间">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                            :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                            v-model="scope.row.createdTime" 
                                            disabled
                                            type="text"/>
                                </template>
                            </el-table-column>
                            
                            <el-table-column label="操作" fixed='right'>
                                <template slot-scope="scope">
                                    <el-button v-on:click="delRow(scope.$index,scope.row,1)" type="text" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>

                        <el-row>
                            <el-col :span='6'>
                                <div style="margin-top:20px;" class="ml10">
                                        记录<span>{{total}}</span>，当前第<span>{{page}}</span>页，共<span>{{totalPage}}</span>页
                                </div>
                                
                            </el-col>
                            <el-col :span="18">
                                <el-pagination style="margin-top:20px;" 
                                               class="text-right" 
                                               background 
                                               layout="total, prev, pager, next" 
                                               :current-page.sync="pageIndex"  
                                               :page-count="totalPage" 
                                               v-on:current-change="handleCurrentChange"></el-pagination>
                            </el-col>
                        </el-row>
                        
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
        name:'currencyList', 
        data(){
            return {
                allList:[],//所有数据列表
                statusAr:[],//状态下拉框数据
                
                updateList:[],//修改的数据
                addList:[],//新增的数据
                multipleSelection: [],//复选框选中数据
                idArray:{
                    ids:[]
                },//复选框选中数据id
                
                pageIndex:1,//分页的当前页码
                totalPage:0,//当前分页总数
                total:'',//数据总条数
                page:1,//当前页
                pagex:1,//前一页
                eachPage:10,//一页显示的数量
                x:0,//增行的下标
                rows:[],//增行的数组
                createParams:{
                    "group_id": 1,
                    "currencyCode": "",
                    "currencyName": "",
                    "increment": '',
                    "seq": 0,
                    "status": '',
                    "remark": ""
                },
                redShow:false,//判斷修改过的表格左上角红标
                redIndex:'',
                ar:[],
                turnPage:-1,
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
            this.loadAllList();      
            this.loadSelect();
        },
        validators:{
            'allList.currencyCode': function (value) {//币种编码
                return this.Validator.value(value).required();
            },
        },
        methods:{
        //---获取数据-------------------------------------------------------
            loadAllList:function(){//获取所有列表数据
                let self = this;
                this.$axios.gets('/api/services/app/CurrencyManagement/GetAll',{SkipCount:(self.page-1)*self.eachPage,MaxResultCount:self.eachPage}).then(function(res){
                    // console.log(res);
                    self.allList = res.result.items;
                    $.each(self.allList,function(index,value){
                        // console.log(value.createdTime)
                        let createdTime = value.createdTime.slice(0,value.createdTime.indexOf('.')).replace('T',' ');
                        // console.log(createdTime)
                        self.allList[index].createdTime = createdTime;
                        // console.log(self.allList[index].createdTime)
                    })
                    self.total = res.result.totalCount;
                    self.totalPage = Math.ceil(self.total/self.eachPage)
                },function(res){
                    console.log('err'+res)
                })
            },
        //------------------------------------------------------------------
        //---获取下拉数据----------------------------------------------------
            loadSelect:function(){
                let self = this;
                this.$axios.gets('/api/services/app/DataDictionary/GetDictItem',{dictName:'Status002'}).then(function(res){
                    self.statusAr = res.result;
                },function(res){
                    console.log('err'+res)
                })
            },
        //------------------------------------------------------------------

        // ---创建数据，修改数据---------------------------------------------
            save:function(){//点击保存按钮
                let self = this;
                
                if(self.addList.length>0){
                    // self.$validate().then(function(success){
                    //     if(success){
                            self.$axios.posts('api/services/app/CurrencyManagement/CUDAggregate',{createList:self.addList,updateList:[],deleteList:[]}).then(function(res){         
                                self.open('创建货币资料成功','el-icon-circle-check','successERP');
                                self.loadAllList();
                                self.addList = [];
                            },function(res){
                                // console.log(res)
                                self.open('创建货币资料失败','el-icon-error','faildERP');
                                self.errorMessage = true;
                                // console.log(res.error.message)
                                self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                            })
                    //     }
                    // })
                }
                
                if(self.updateList.length>0){
                    self.$axios.posts('api/services/app/CurrencyManagement/CUDAggregate',{createList:[],updateList:self.updateList,deleteList:[]}).then(function(res){
                        // console.log(res);
                        self.open('修改货币资料成功','el-icon-circle-check','successERP');
                        self.loadAllList()
                        self.ar = [];
                        self.updateList = [];
                    },function(res){
                        // console.log(res)
                        self.open('修改货币资料失败','el-icon-error','faildERP');
                        self.errorMessage = true;
                        self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                    })
                }
            },
            addCol:function(){//增行
                let self = this;
                self.x++;
                let newCol = 'newCol'+self.x;
                // console.log(newCol)
                // console.log(self.rows)
                self.rows.newCol ={
                    group_id: 1,
                    currencyCode: "",
                    currencyName: "",
                    increment: 0,
                    seq: 0,
                    status: 1,
                    remark: ""
                };
                self.allList.unshift(self.rows.newCol);
                self.addList.unshift(self.rows.newCol);
            },
        //-----------------------------------------------------------------

        // --------------open----------------------------------------------
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
        //------------------------------------------------------------------

        //---控制修改及分页--------------------------------------------------
            handleSelectionChange:function(val){//点击复选框选中的数据
                this.multipleSelection = val;
            },

            handleCurrentChange:function(val){//获取点击页码
                let self = this;
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
                            self.loadAllList();
                        }).catch(() => {
                            self.pageIndex=self.turnPage;
                            self.page = self.turnPage;
                            this.pageFlag=false;
                            console.log(self.page)
   
                    });
                }else{
                    self.pageIndex=val;
                    self.page = val;
                    self.loadAllList();
                } 
                 setTimeout(() => {self.pageFlag = true}, 1000) 
                
            },

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


                let flag = false;
                if(self.updateList.length==0&&row.id>0){//修改过的数据
                    flag = true;
                }else if(self.updateList.length>=1&&row.id>0){
                    for(let i in self.updateList){
                        if(row.id != self.updateList[i].id){
                            flag = true;
                            // console.log(flag) 
                        }else{
                            flag= false;
                            break;        
                        }
                    }
                }

                if(flag){
                    self.updateList.push(row);
                    this.turnPage=$(document).find(".pageActive.is-background .el-pager li.active").html();
                    console.log(self.updateList)
                }
                
            },
        //------------------------------------------------------------------

        //---确认删除-------------------------------------------------------
        sureDel:function(){
            let self = this;
            if(self.who == 1){
                if(self.whoId>0){
                    self.$axios.deletes('/api/services/app/CurrencyManagement/Delete',{id:self.whoId}).then(function(res){
                        // console.log(res);
                        self.allList.splice(self.whoIndex,1);
                        self.dialogDelConfirm = false;
                        self.open('删除成功','el-icon-circle-check','successERP');
                        self.loadAllList();
                    },function(res){
                        self.open('删除失败','el-icon-error','faildERP');
                        self.dialogDelConfirm = false;
                        self.errorMessage=true;
                        self.getErrorMessage(res.error.message,res.error.details,res.error.validationErrors)
                    })
                }else{
                    self.allList.splice(self.whoIndex,1);
                    self.addList.splice(self.whoIndex,1);
                    self.dialogDelConfirm = false;
                    self.open('删除新增行成功','el-icon-circle-check','successERP');
                }
            };

            if(self.who == 2){
                self.$axios.posts('/api/services/app/CurrencyManagement/BatchDelete',self.idArray).then(function(res){
                    self.loadAllList();
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
        //-----------------------------------------------------------------

        //---行内删除-------------------------------------------------------
        delRow:function(index,row,who){
            let self = this;

            self.who = who;
            self.whoIndex = index;
            self.whoId = row.id;
            self.dialogDelConfirm = true;

        },
        //-----------------------------------------------------------------

        //---多项删除-------------------------------------------------------
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
        //-----------------------------------------------------------------
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
    }
}
</script>

<style scoped>
    .store-data-wrapper{
        width: 100%;
        height: auto;
    }
    .bg-white{
        background: white;
        border-radius: 3px;
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
        border: 1px solid #cccccc;
        border-radius: 3px;
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
    .text-right{
        text-align: right;
    }
</style>

<style>
.cu-list .bgw .el-input__inner{
    text-align:center;
    border:none;
    padding:0;
    background-color:white;
}
.cu-list .bgg .el-input__inner{
    text-align:center;
    border:none;
    padding:0;
    background-color:#FAFAFA;
}
.cu-list .el-select-dropdown__item{
    text-align:center;
}
</style>