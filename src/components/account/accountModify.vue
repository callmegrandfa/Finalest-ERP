<template>
     <div class="data-wrapper b1">
        <el-row class="bg-white pt10 pb10 bb1">
            <button class="erp_bt bt_back" @click="back">
                <div class="btImg">
                  <img src="../../../static/image/common/bt_back.png">
                </div>
                <span class="btDetail">返回</span>
            </button>
                                            <!-- 保存新创建的仓库信息 -->
            <button class="erp_bt bt_save" @click="save">
                <div class="btImg">
                  <img src="../../../static/image/common/bt_save.png">
                </div>
                <span class="btDetail">保存</span>
            </button>

            <button class="erp_bt bt_saveAdd" @click='saveAdd'>
                <div class="btImg">
                    <img src="../../../static/image/common/bt_saveAdd.png">
                </div>
                <span class="btDetail">保存并新增</span>
            </button>
            
            <div class="toggle-btn">
                <span @click='ifShow = !ifShow'>收起</span>
                <i class="el-icon-arrow-up"></i>
            </div>
        </el-row>

        <el-collapse-transition>
            <div v-show="ifShow" class="bb1">
                <el-row class="bg-white pt10 ft12 pr10">
                    <el-col :span="5">
                        <el-row>
                            <div class="bgcolor">
                                <label><small>*</small>会计方案{{value}}</label>
                                <el-select v-model="value" placeholder="请选择会计方案">
                                    <el-option v-for="item in options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-row>
                    </el-col>

                    <el-col :span="5">
                        <el-row>
                            <div class="bgcolor">
                                <label><small>*</small>会计年份</label>
                                <el-input placeholder="请录入会计年份" v-model="accountData.periodYear"></el-input>
                            </div>
                        </el-row>
                    </el-col>

                    <el-col :span="5">
                        <el-row>
                            <div class="bgcolor">
                                <label><small>*</small>期间个数</label>
                                <el-input placeholder="请录入期间个数" v-model="accountData.periodNum"></el-input>
                            </div>
                        </el-row>
                    </el-col>
                </el-row>

                <el-row class="bg-white ft12 pr10">
                    <el-col :span="5">
                        <el-row>
                            <div class="bgcolor">
                                <label>开始日期</label>
                                <el-input placeholder="请录入开始日期" v-model="accountData.beginDate"></el-input>
                            </div>
                        </el-row>
                    </el-col>

                    <el-col :span="5">
                        <el-row>
                            <div class="bgcolor">
                                <label>结束日期</label>
                                <el-input placeholder="结束日期" v-model="accountData.endDate"></el-input>
                            </div>
                        </el-row>
                    </el-col>

                    <el-col :span="5">
                        <el-row>
                            <div class="bgcolor">
                                <label>备注</label>
                                <el-input placeholder="请录入备注" v-model="accountData.remark"></el-input>
                            </div>
                        </el-row>
                    </el-col>

                    <el-col :span="24" class="mt10 mb10 pl40">
                        <template>
                            <el-checkbox v-model="ifCan">允许使用</el-checkbox>
                        </template>
                    </el-col>
                </el-row>
                
            </div>
        </el-collapse-transition>

        <el-row class="ft12 pr10 pt10 br3">
            <el-col :span='24' class="pl10 mb10">
                <span class="header-title">送货信息</span>
            </el-col>

            <el-col :span="24" class="bg-white pt10">
                <button class="erp_bt bt_print" @click='addCol'>
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_print.png">
                    </div>
                    <span class="btDetail">增行</span>
                </button>

                <button class="erp_bt bt_del" @click="delRow">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_del.png">
                    </div>
                    <span class="btDetail">删除</span>
                </button>
            </el-col>

            <el-col :span='24' class="bg-white pl10 pr10 pt10 pb10 bb1">
                <el-table :data="accountList" border style="width: 100%" stripe @selection-change="handleSelectionChange">
                    <el-table-column type="selection"></el-table-column>

                    <el-table-column prop="" label="" >
                        <template slot-scope="scope">
                            <!-- <span>{{scope.row}}</span> -->
                            <span>{{scope.$index+1}}</span>
                        </template>
                    </el-table-column>

                    <el-table-column prop="periodMonth" label="会计月份" >
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.periodMonth" 
                                    v-on:click='handleEdit(scope.$index)'
                                    @change='handleChange(scope.$index,scope.row)'
                                    type="text"/>
                        </template>
                    </el-table-column>

                    <el-table-column prop="phone" label="开始时间" >
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.effectiveStart" 
                                    v-on:click='handleEdit(scope.$index)'
                                    type="text"/>
                        </template>
                    </el-table-column>

                    <el-table-column prop="completeAddress" label="结束时间">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.effectiveEnd" 
                                    v-on:click='handleEdit(scope.$index)'
                                    type="text"/>
                        </template>
                    </el-table-column>

                    <el-table-column prop="transportMethodId" label="备注">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.remark" 
                                    v-on:click='handleEdit(scope.$index)'
                                    @change='handleChange(scope.$index,scope.row)'
                                    type="text"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="logisticsCompany" label="修改人">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.modifiedBy" 
                                    v-on:click='handleEdit(scope.$index)'
                                    type="text"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="isDefault" label="修改时间">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.modifiedTime" 
                                    v-on:click='handleEdit(scope.$index)'
                                    type="text"/>
                        </template>
                    </el-table-column>
                    <!-- <el-table-column label="操作">
                        <template slot-scope="scope"> -->
                            <!-- <span>{{scope.row}}</span> -->
                            <!-- <el-button v-on:click='a(scope.row)'>123</el-button> -->
                            <!-- <el-button v-on:click="handleEdit(scope.$index)" type="text"  size="small">修改</el-button> -->
                            <!-- <el-button v-on:click="handleSave(scope.$index,scope.row)" type="text" size="small">保存</el-button>  -->
                            <!-- <el-button v-on:click="handleDelete(scope.$index,scope.row.id)" type="text" size="small">删除</el-button>
                        </template>
                    </el-table-column> -->
                </el-table> 
            </el-col>
        </el-row>

        <el-row class="ft12 pr10 pt10 br3">
            <el-col :span='24' class="bg-white pl10 pt10 pb10">
                <span style="color:black;font-size:16px;font-weight:bolder;">审计信息</span>
            </el-col>

            <el-col :span="24" class="bg-white pb10">
                <el-row class="pl10">
                    <el-col :span="5" class="bg-white br3 h35 b1">
                        <el-row>
                            <el-col :span="8" class="pl10">
                                <span>创建人</span>
                            </el-col>

                            <el-col :span="15">
                                <input class="input-need" type="text" disabled>
                            </el-col>
                        </el-row>
                    </el-col>

                    <el-col :span="5" class="bg-white br3 h35 b1 ml10">
                        <el-row>
                            <el-col :span="8" class="pl10">
                                <span>创建时间</span>
                            </el-col>

                            <el-col :span="15">
                                <input class="input-need" type="text" disabled>
                            </el-col>
                        </el-row>
                    </el-col>

                    <el-col :span="5" class="bg-white br3 h35 b1 ml10">
                        <el-row>
                            <el-col :span="8" class="pl10">
                                <span>修改人</span>
                            </el-col>

                            <el-col :span="15">
                                <input class="input-need" type="text" disabled>
                            </el-col>
                        </el-row>
                    </el-col>

                    <el-col :span="5" class="bg-white br3 h35 b1 ml10">
                        <el-row>
                            <el-col :span="8" class="pl10">
                                <span>修改时间</span>
                            </el-col>

                            <el-col :span="15">
                                <input class="input-need" type="text" disabled>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>


  </div>
</template>

<script>
    export default{
        name:'repositoryData',
        created:function(){
            let self = this;
            self.loadData();
        },
        data(){
            return {        
                allData:'',//返回的所有信息
                accountData:{//主表的信息
                    "groupID": '',
                    "ouID": '',
                    "accperiodSchemeID": '',
                    "periodYear": '',
                    "periodNum": '',
                    "beginDate": "",
                    "endDate": "",
                    "remark": "",
                    "accperiodContents": []
                },   
                accountList:[],//从表的信息
                
                addList:[],//新增上传的数组
                multipleSelection:[],//选中需要删除的数据
                updateList:[],//需要修改的数据
                x:0,//增行的下标
                rows:[],//增行的数组

                ifShow:true,//控制折叠页面
                ifCan:true,//控制允许使用

                value: '',//下拉框的值
                
               
                createAccountListParams:{//创建会计期间从表参数 
                    "groupID": '',
                    "ouID": '',
                    "accperiodSchemeID": '',
                    "periodYear": '',
                    "periodNum": '',
                    "beginDate": "2018-02-07T05:27:49.732Z",
                    "endDate": "2018-02-07T05:27:49.732Z",
                    "remark": "gggg",
                    "accperiodContents": [
                        {
                        "groupID": '',
                        "ouID": '',
                        "accperiodId": '',
                        "periodMonth": '',
                        "effectiveStart": "2018-02-07T05:27:49.732Z",
                        "effectiveEnd": "2018-02-07T05:27:49.732Z",
                        "remark": "",
                        "isDeleted": true,
                        "deletedBy": "xyy",
                        "deletedTime": "2018-02-07T05:27:49.732Z",
                        "modifiedBy": "",
                        "modifiedTime": "2018-02-07T05:27:49.732Z",
                        "createdBy": "xyy",
                        "createdTime": "2018-02-07T05:27:49.732Z",
                        "id":0
                        }
                    ]
                }, 
                
                options: [{
                    value: '1',
                    label: '仓库'
                    }, {
                    value: '2',
                    label: '地址'
                    }, {
                    value: '3',
                    label: '总部'
                    }, {
                    value: '4',
                    label: '总部2'
                    }, {
                    value: '5',
                    label: '北京烤鸭'
                }],
            }
        },
        methods:{
            //---加载数据--------------------------------------------
            loadData:function(){
                let self = this;
                if(self.$route.params.id!='default'){
                    this.$axios.gets('/api/services/app/Accperiod/GetByID',{id:self.$route.params.id}).then(function(res){
                        console.log(res);
                        self.allData = res.result;
                        console.log(self.allData)
                        self.accountData.groupID = self.allData.groupID;
                        self.accountData.ouID = self.allData.ouID;
                        self.accountData.accperiodSchemeID = self.allData.accperiodSchemeID;
                        self.accountData.periodYear = self.allData.periodYear;
                        self.accountData.periodNum = self.allData.periodNum;
                        self.accountData.beginDate = self.allData.beginDate;
                        self.accountData.endDate = self.allData.endDate;
                        self.accountData.remark = self.allData.remark;
                        console.log(self.accountData)

                        self.accountList = self.allData.accperiodContents;
                        // self.allList = res.result.items;
                    },function(res){
                        console.log('err'+res)
                    })
                };
                
            },
            //------------------------------------------------------
            //---保存------------------------------------------------
            save:function(){
                let self = this;
                // self.createAccount();//创建新会计期间
                self.createAccountList();//创建从表
                self.saveAccountListModify();//保存从表的修改
            },

            saveAdd:function(){//创建新的仓库并且清除数据
                let self = this;
                this.$axios.posts('/api/services/app/StockManagement/CreateRepository',self.createAccountParams).then(function(res){
                    console.log(res);
                    self.open('创建仓库成功','el-icon-circle-check','successERP');
                 })
                self.createAccountParams = {
                    "groupID": 1,
                    "ouID": 2,
                    "accperiodSchemeID": 2,
                    "periodYear": '',
                    "periodNum": '',
                    "beginDate": "2018-02-07T01:18:54.606Z",
                    "endDate": "2018-02-07T01:18:54.606Z",
                    "remark": "yyy",
                    "accperiodContents": [
                        {
                        "groupID": 1,
                        "ouID": 1,
                        "accperiodId": 1,
                        "periodMonth": 6,
                        "effectiveStart": "2018-02-07T01:18:54.606Z",
                        "effectiveEnd": "2018-02-07T01:18:54.606Z",
                        "remark": "xxx",
                        "isDeleted": true,
                        "deletedBy": "xyy",
                        "deletedTime": "2018-02-07T01:18:54.606Z",
                        "modifiedBy": "xyy",
                        "modifiedTime": "2018-02-07T01:18:54.606Z",
                        "createdBy": "xyy",
                        "createdTime": "2018-02-07T01:18:54.606Z",
                        "id": 4
                        }
                    ]
                };
                self.addList = [];
                self.rows = [];
            },

            saveAccountModify:function(){

            },
            saveAccountListModify:function(){
                let self = this;
                if(self.updateList.length>0){
                    for(let i in self.updateList){
                        self.updateList[i]={
                            id:self.$route.params.id,
                            groupID:self.allData.groupID,
                            ouID:self.allData.ouID,
                            accperiodSchemeID:self.allData.accperiodSchemeID,
                            beginDate:self.allData.beginDate,
                            endDate:self.allData.endDate,
                            periodYear:self.allData.periodYear,
                            periodNum:self.allData.periodNum,
                            remark:self.allData.remark,
                            accperiodContents:[self.updateList[i]],
                        };
                        this.$axios.puts('/api/services/app/Accperiod/Update',self.updateList[i]).then(function(res){
                            // console.log(res);
                            self.open('修改从表成功','el-icon-circle-check','successERP');
                            self.updateList = [];
                        })
                    }
                }
            },
            //-------------------------------------------------------

            //---创建------------------------------------------------
            createAccount:function(){//创建会计期间
                let self = this;
                // console.log(self.createRepositoryParams)
                this.$axios.posts('/api/services/app/Accperiod/Create',self.createAccountParams).then(function(res){
                    console.log(res);
                    self.open('创建会计期间成功','el-icon-circle-check','successERP');
                    self.createAccountList(res.id)
                    self.goModify(res.id)
                },function(res){
                    console.log(res)
                    self.open('创建失败','el-icon-error','faildERP')
                })
            },
            createAccountList:function(){//创建会计期间从表
                let self = this;
                if(self.addList.length>0){
                    for(let i in self.addList){
                        self.addList[i] = {
                            id:self.$route.params.id,
                            groupID:self.allData.groupID,
                            ouID:self.allData.ouID,
                            accperiodSchemeID:self.allData.accperiodSchemeID,
                            beginDate:self.allData.beginDate,
                            endDate:self.allData.endDate,
                            periodYear:self.allData.periodYear,
                            periodNum:self.allData.periodNum,
                            remark:self.allData.remark,
                            accperiodContents:[self.addList[i]],
                        }
                        this.$axios.puts('/api/services/app/Accperiod/Update',self.addList[i]).then(function(res){
                            // console.log(res);
                            self.open('创建从表成功','el-icon-circle-check','successERP');
                            self.addList = [];
                        })
                    };
                };
                
            },
            //-------------------------------------------------------
          
            //---表格编辑--------------------------------------------
            addCol:function(){//增行
                let self = this;
                self.x++;
                let newCol = 'newCol'+self.x;
                self.rows.newCol = {
                        "groupID": self.allData.groupID,
                        "ouID": self.allData.ouID,
                        "accperiodId": self.$route.params.id,
                        "periodMonth": '',
                        "effectiveStart": "2018-02-07T05:27:49.732Z",
                        "effectiveEnd": "2018-02-07T05:27:49.732Z",
                        "remark": "",
                        "isDeleted": false,
                        "deletedBy": "xyy",
                        "deletedTime": "2018-02-07T05:27:49.732Z",
                        "modifiedBy": "",
                        "modifiedTime": "2018-02-07T05:27:49.732Z",
                        "createdBy": "xyy",
                        "createdTime": "2018-02-07T05:27:49.732Z",
                        "id":0
                    };
                self.accountList.unshift(self.rows.newCol);
                self.addList.unshift(self.rows.newCol);
                // console.log(self.rows)
                console.log(self.accountList)
                console.log(self.addList)
            },

            handleEdit:function(index){//表格内编辑操作

            },

            handleDelete:function(index,id){//表格内删除操作
                this.accountList.splice(index,1);
                this.addList.splice(index,1);
                this.$axios.deletes('/api/services/app/StockAddressManagement/Delete',{id:id}).then(function(res){
                // console.log(res);
              })
            },
            handleSelectionChange:function(val){//点击复选框选中的数据
                this.multipleSelection = val;
                console.log(this.multipleSelection)
            },
            handleChange:function(index,row){
                let self = this;
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
                    console.log(self.updateList)
                }
            },
            //------------------------------------------------------------
            //---多项删除--------------------------------------------------
            delRow:function(){//删除选中的项
                let _this=this;
                if(_this.multipleSelection.length>0){//表格
                    for(let i=0;i<_this.multipleSelection.length;i++){
                        _this.$axios.deletes('/api/services/app/StockAddressManagement/Delete',{id:_this.multipleSelection[i].id})
                        .then(function(res){
                            _this.loadData();
                            _this.open('删除成功','el-icon-circle-check','successERP');
                        },function(res){
                            _this.open('删除失败','el-icon-error','faildERP');
                            //console.log('err:'+res)
                        })
                    }
                };
            },
            //------------------------------------------------------------
            //---open---back----清除--------------------------------------
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
            goModify:function(id){
                this.$store.state.url='/repository/repositoryModify/'+id;
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            back(){
                this.$store.state.url='/account/accountList/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            clearData:function(){//清除创建的参数
                let self = this;
                self.createParams={
                    groupId:'1',//集团ID
                    stockId:'16',//仓库ID
                    addressId:'2',//地址ID
                    completeAddress:'',//详情地址
                    transportMethodId:'',//运输方式
                    contactPerson:'',//联系人
                    phone:'',//联系电话
                    logisticsCompany:'',//物流公司
                    isDefault:true,//是否默认
                    remark:'',//备注
                };
            },
            //-------------------------------------------------------
            


        },

        
    }
</script>

<style scoped>
.data-wrapper{
    background: #EEF1F5;
    height: auto;
    width: 100%;
}
.bg-white{
    background: white;
}
.pl10{
    padding-left: 10px;
}
.pl40{
    padding-left: 40px;
}
.ml15{
    margin-left: 15px;
}
.ml10{
    margin-left: 10px;
}
.mt10{
    margin-top: 10px;
}
.mt20{
    margin-top: 20px;
}
.mb10{
    margin-bottom: 10px;
}
.pt10{
    padding-top: 10px;
}
.pb10{
    padding-bottom: 10px;
}
.pr10{
    padding-right: 10px;
}
.ft12{
    font-size: 14px;
}
.btn{
    display: inline-block;
    width: 100%;
    border-radius: 3px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: white;
    background: rgba(130, 170, 252, 1);
    cursor: pointer;
}
.br3{
    border-radius: 3px;
}
.h30{
    height: 32px;
    line-height: 30px;
}
.h35{
    height: 35px;
    line-height: 35px;
}
.input-need{
    border:none;
    outline: none;
    width: 100%;
    height: 23px;
    line-height: 23px;
}
.input-bgw{
    background: white;
    text-align: center;
}
.input-bgp{
    background: #FAFAFA;
    text-align: center;
}
.header-title{
    color: black;
    font-size: 16px;
    display: inline-block;
    border-bottom: 3px solid rgb(51, 204, 204);
    font-weight: bolder;
    padding: 5px 1px;
}
.bb1{
    border-bottom: 1px solid #cccccc;
}
.b1{
    border: 1px solid #cccccc;
}
.fr{
    float: right;
}
.toggle-btn{
    cursor: pointer;
    font-size: 12px;
    float: right;
    margin-right: 20px;
    height: 36px;
    line-height: 36px;
}
input:-ms-input-placeholder{
    color: rgba(0, 0, 0, 0.349019607843137);
}

input::-webkit-input-placeholder{
    color: rgba(0, 0, 0, 0.349019607843137);
}
</style>
<style>
/* 重写checkbox */
.data-wrapper .el-checkbox__inner{
    width: 24px;
    height: 24px;
    border-radius:50% !important; 
}
.data-wrapper .el-checkbox__inner::after{
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
.data-wrapper .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.data-wrapper .el-table td{
    padding: 3px 0;
}
.data-wrapper .el-table__body{
    text-align: center;
}
.data-wrapper .el-table .cell{
    padding-left:0px;
    padding-right:0px;
}
/* 重写el-pagination样式 */


.data-wrapper .text-right{
    text-align: right;
}
.mt-10{
    margin-top: 10px;
}
</style>


