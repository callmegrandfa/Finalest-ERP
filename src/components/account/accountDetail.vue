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
                        <label><small>*</small>会计方案</label>
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
                    <el-input placeholder="请录入会计年份" v-model="createRepositoryParams.stockCode"></el-input>
                  </div>
              </el-row>
          </el-col>

          <el-col :span="5">
              <el-row>
                  <div class="bgcolor">
                    <label><small>*</small>期间个数</label>
                    <el-input placeholder="请录入期间个数" v-model="createRepositoryParams.stockFullName"></el-input>
                  </div>
              </el-row>
          </el-col>

          <el-col :span="5">
              <el-row>
                  <div class="bgcolor">
                    <label>开始日期</label>
                    <el-input placeholder="请录入开始日期" v-model="createRepositoryParams.stockName"></el-input>
                  </div>
              </el-row>
          </el-col>
      </el-row>

      <el-row class="bg-white ft12 pr10">
          <el-col :span="5">
              <el-row>
                  <div class="bgcolor">
                    <label>开始日期</label>
                    <el-input placeholder="请录入开始日期" v-model="createRepositoryParams.stockName"></el-input>
                  </div>
              </el-row>
          </el-col>

          <el-col :span="5">
              <el-row>
                  <div class="bgcolor">
                    <label>结束日期</label>
                    <el-input placeholder="结束日期" v-model="ouGet.mnemonic"></el-input>
                  </div>
              </el-row>
          </el-col>

          <el-col :span="5">
              <el-row>
                  <div class="bgcolor">
                    <label>备注</label>
                    <el-input placeholder="请录入备注"></el-input>
                  </div>
              </el-row>
          </el-col>
      </el-row>

            
                <el-row class="bg-white ft12 pr10">
                    <el-col :span="5">
                        <el-row>
                            <div class="bgcolor">
                                <label><small>*</small>行政地区</label>
                                <el-select v-model="value" placeholder="请选择行政地区">
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
                                <label>负责人</label>
                                <el-input placeholder="请录入负责人" v-model="createRepositoryParams.manager"></el-input>
                            </div>
                        </el-row>
                    </el-col>

                    <el-col :span="5">
                        <el-row>
                            <div class="bgcolor">
                                <label>电话</label>
                                <el-input placeholder="请录入电话" v-model="createRepositoryParams.phone"></el-input>
                            </div>
                        </el-row>
                    </el-col>

                    <el-col :span="5">
                        <el-row>
                            <div class="bgcolor">
                                <label>Email</label>
                                <el-input placeholder="请录入邮箱" v-model="createRepositoryParams.email"></el-input>
                            </div>
                        </el-row>
                    </el-col>
                </el-row>

                <el-row class="bg-white ft12 pr10">
                    <el-col :span="5">
                        <el-row>
                            <div class="bgcolor">
                                <label>传真</label>
                                <el-input placeholder="请录入传真" v-model="createRepositoryParams.fax"></el-input>
                            </div>
                        </el-row>
                    </el-col>

                    <el-col :span="5">
                        <el-row>
                            <div class="bgcolor">
                                <label>地址</label>
                                <el-input placeholder="请录入地址"></el-input>
                            </div>
                        </el-row>
                    </el-col>

                    <el-col :span="5">
                        <el-row>
                            <div class="bgcolor">
                                <label>备注</label>
                                <el-input placeholder="请录入备注" v-model="createRepositoryParams.remark"></el-input>
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
          </el-col>

          <el-col :span='24' class="bg-white pl10 pr10 pt10 pb10 bb1">
              <el-table :data="allList" border style="width: 100%" stripe>
                    <el-table-column type="selection"></el-table-column>

                    <el-table-column prop="" label="" >
                        <template slot-scope="scope">
                            <span>{{scope.$index+1}}</span>
                        </template>
                    </el-table-column>

                    <el-table-column prop="contactPerson" label="联系人" >
                        <template slot-scope="scope">
                            <!-- <span>{{scope.$index%2}}</span> -->
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.contactPerson" 
                                    v-on:click='handleEdit(scope.$index)'
                                    type="text"/>
                        </template>
                    </el-table-column>

                    <el-table-column prop="phone" label="手机" >
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.phone" 
                                    v-on:click='handleEdit(scope.$index)'
                                    type="text"/>
                        </template>
                    </el-table-column>
                    <!-- <el-table-column prop="phoneNum" label="电话"></el-table-column> -->
                    <el-table-column prop="completeAddress" label="送货地址">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.completeAddress" 
                                    v-on:click='handleEdit(scope.$index)'
                                    type="text"/>
                        </template>
                    </el-table-column>

                    <el-table-column prop="transportMethodId" label="运输方式">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.transportMethodId" 
                                    v-on:click='handleEdit(scope.$index)'
                                    type="text"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="logisticsCompany" label="物流公司">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.logisticsCompany" 
                                    v-on:click='handleEdit(scope.$index)'
                                    type="text"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="isDefault" label="默认">
                        <template slot-scope="scope">
                            <el-checkbox v-model="allList[scope.$index].isDefault"></el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column prop="remark" label="备注">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.remark" 
                                    v-on:click='handleEdit(scope.$index)'
                                    type="text"/>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <!-- <span>{{scope.row}}</span> -->
                            <!-- <el-button v-on:click='a(scope.row)'>123</el-button> -->
                            <!-- <el-button v-on:click="handleEdit(scope.$index)" type="text"  size="small">修改</el-button> -->
                            <!-- <el-button v-on:click="handleSave(scope.$index,scope.row)" type="text" size="small">保存</el-button>  -->
                            <el-button v-on:click="handleDelete(scope.$index,scope.row.id)" type="text" size="small">删除</el-button>
                        </template>
                    </el-table-column>
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
            
        },

        methods:{
            //---保存------------------------------------------------
            save:function(){
                let self = this;
                self.createRepository();//创建新仓库

            },

            saveAdd:function(){//创建新的仓库并且清除数据
                let self = this;
                this.$axios.posts('/api/services/app/StockManagement/CreateRepository',self.createRepositoryParams).then(function(res){
                    console.log(res);
                    self.open('创建仓库成功','el-icon-circle-check','successERP');
                 })
              self.createRepositoryParams = {
                    "ouId": '1',
                    "stockCode": "",
                    "stockName": "",
                    "stockFullName": "",
                    "opAreaId": 1,
                    "adAreaId": 1,
                    "stockTypeId": 1,
                    "invTypeId": 1,
                    "fax": "",
                    "email":  '',
                    "status": 1,
                    "manager": "",
                    "phone": "",
                    "remark": ""
                } 
                self.addList = [];
                self.rows = [];
            },
            //-------------------------------------------------------

            //---创建------------------------------------------------
            createRepository:function(){//创建新仓库
                let self = this;
                // console.log(self.createRepositoryParams)
                this.$axios.posts('/api/services/app/StockManagement/CreateRepository',self.createRepositoryParams).then(function(res){
                    // console.log(res);
                    self.open('创建仓库成功','el-icon-circle-check','successERP');
                    self.createReAddress(res.result);
                    self.goModify(res.result)
                })
            },
            createReAddress:function(id){//创建新的仓库地址
                let self = this;
                // console.log(id)
                // self.createRepositoryAddressParams.stockId = id;
                // console.log(self.addList)
                if(self.addList.length>0){
                    for(let i in self.addList){
                        self.addList[i].stockId = id;
                        this.$axios.posts('api/services/app/StockAddressManagement/Create',self.addList[i]).then(function(res){
                            // console.log(res);
                            self.open('创建仓库地址成功','el-icon-circle-check','successERP');
                        })
                    }
                }
                
            },
            //-------------------------------------------------------
          
            //---表格编辑--------------------------------------------
            addCol:function(){//增行
                let self = this;
                self.x++;
                let newCol = 'newCol'+self.x;
                self.rows.newCol ={
                    groupId:'1',//集团ID
                    stockId:'',//仓库ID
                    addressId:'2',//地址ID
                    completeAddress:'',//详情地址
                    transportMethodId:'',//运输方式
                    contactPerson:'',//联系人
                    phone:'',//联系电话
                    logisticsCompany:'',//物流公司
                    isDefault:true,//是否默认
                    remark:'',//备注
                };
                self.allList.unshift(self.rows.newCol);
                self.addList.unshift(self.rows.newCol);
            },

            handleEdit:function(index){//表格内编辑操作

            },

            handleDelete:function(index,id){//表格内删除操作
                this.allList.splice(index,1);
                this.addList.splice(index,1);
                this.$axios.deletes('/api/services/app/StockAddressManagement/Delete',{id:id}).then(function(res){
                // console.log(res);
              })
            },
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
                // console.log(id)
                this.$store.state.url='/repository/repositoryModify/'+id
                // this.$store.state.url='/repository/default/repositoryModify/default'
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

        data(){
            return {
                allList:[],
                ifShow:true,//控制折叠页面
                ifCan:true,//控制允许使用
                // ifSave:-1,//保存按钮（是否可见）
                queryOuId:{//ouManagement的搜索Id
                    id:'2'
                },
                ouGet:'',

                options: [{
                    value: '选项1',
                    label: '仓库'
                    }, {
                    value: '选项2',
                    label: '地址'
                    }, {
                    value: '选项3',
                    label: '总部'
                    }, {
                    value: '选项4',
                    label: '总部2'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                    }],

                value: '',
                tableData:[],
                
                createRepositoryParams:{//创建新仓库的参数
                    "ouId": '1',
                    "stockCode": "",
                    "stockName": "",
                    "stockFullName": "",
                    "opAreaId": 1,
                    "adAreaId": 1,
                    "stockTypeId": 1,
                    "invTypeId": 1,
                    "fax": "",
                    "email":  '',
                    "status": 1,
                    "manager": "",
                    "phone": "",
                    "remark": ""
                },
                createRepositoryAddressParams:{//创建新的仓库地址参数
                    groupId:'1',//集团ID
                    stockId:'',//仓库ID
                    addressId:'2',//地址ID
                    completeAddress:'',//详情地址
                    transportMethodId:'',//运输方式
                    contactPerson:'',//联系人
                    phone:'',//联系电话
                    logisticsCompany:'',//物流公司
                    isDefault:true,//是否默认
                    remark:'',//备注
                },
                x:0,//增行的下标
                rows:[],//增行的数组
                addList:[],//新增上传的数组
            }
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
    color: #F55E6E;
    font-size: 16px;
    display: inline-block;
    border-bottom: 4px solid #F55E6E;
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


