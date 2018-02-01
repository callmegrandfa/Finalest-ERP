<template>
  <div class="data-wrapper b1">
      <el-row class="bg-white pt10 pb10 bb1">
            <button class="erp_bt bt_back" @click="back">
                <div class="btImg">
                  <img src="../../../static/image/common/bt_back.png">
                </div>
                <span class="btDetail">返回</span>
            </button>
                                              <!-- 保存修改 -->
            <button class="erp_bt bt_save" @click="saveModify">
                <div class="btImg">
                  <img src="../../../static/image/common/bt_save.png">
                </div>
                <span class="btDetail">保存</span>
            </button>

            <button class="erp_bt bt_modify">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_modify.png">
                </div>
                <span class="btDetail">修改</span>
            </button>

            <div class="toggle-btn">
                <span @click='ifShow = !ifShow'>收起</span>
                <i class="el-icon-arrow-up"></i>
            </div>
      </el-row>

      <el-row class="bg-white ft12 pt10 pr10">
          <el-col :span="5">
              <el-row>
                  <div class="bgcolor">
                        <label><small>*</small>所属组织</label>
                        <el-select v-model="value" placeholder="请选择所属组织">
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
                    <label>仓库编码</label>
                    <el-input placeholder="请录入仓库编码" v-model="repositoryData.stockCode"></el-input>
                  </div>
              </el-row>
          </el-col>

          <el-col :span="5">
              <el-row>
                  <div class="bgcolor">
                    <label>仓库名称</label>
                    <el-input placeholder="请录入仓库名称" v-model="repositoryData.stockFullName"></el-input>
                  </div>
              </el-row>
          </el-col>

          <el-col :span="5">
              <el-row>
                  <div class="bgcolor">
                    <label>仓库简称</label>
                    <el-input placeholder="请录入仓库简称" v-model="repositoryData.stockName"></el-input>
                  </div>
              </el-row>
          </el-col>
      </el-row>

      <el-row class="bg-white ft12 pr10">
          <el-col :span="5">
              <el-row>
                  <div class="bgcolor">
                    <label>助记码</label>
                    <el-input placeholder="请录入助记码" v-model="ouGet.mnemonic"></el-input>
                  </div>
              </el-row>
          </el-col>

          <el-col :span="5">
              <el-row>
                  <div class="bgcolor">
                        <label><small>*</small>仓库类型</label>
                        <el-select v-model="value" placeholder="请选择仓库类型">
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
                    <label>助记码</label>
                    <el-input placeholder="请录入库存分类"></el-input>
                  </div>
              </el-row>
          </el-col>

          <el-col :span="5">
              <el-row>
                  <div class="bgcolor">
                        <label><small>*</small>业务地区</label>
                        <el-select v-model="value" placeholder="请选择业务地区">
                            <el-option v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
              </el-row>
          </el-col>
      </el-row>

      <el-collapse-transition>
            <div v-show="ifShow" class="bb1">
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
                                <el-input placeholder="请录入负责人" v-model="repositoryData.manager"></el-input>
                            </div>
                        </el-row>
                    </el-col>

                    <el-col :span="5">
                        <el-row>
                            <div class="bgcolor">
                                <label>电话</label>
                                <el-input placeholder="请录入电话" v-model="repositoryData.phone"></el-input>
                            </div>
                        </el-row>
                    </el-col>

                    <el-col :span="5">
                        <el-row>
                            <div class="bgcolor">
                                <label>Email</label>
                                <el-input placeholder="请录入邮箱" v-model="repositoryData.email"></el-input>
                            </div>
                        </el-row>
                    </el-col>
                </el-row>

                <el-row class="bg-white ft12 pr10">
                    <el-col :span="5" class="h30">
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
                                <el-input placeholder="请录入备注" v-model="repositoryData.remark"></el-input>
                            </div>
                        </el-row>
                    </el-col>

                    <el-col :span="24" class="mt20 mb10 pl40">
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
                                          <!-- 保存新增的仓库地址信息 -->
                <!-- <button class="erp_bt bt_save" @click="saveAddress">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_save.png">
                    </div>
                    <span class="btDetail">保存</span>
                </button> -->

                <button class="erp_bt bt_excel">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_excel.png">
                    </div>
                    <span class="btDetail">Excel</span>
                </button>

                <button class="erp_bt bt_auxiliary">
                    <div class="btImg">
                        <img src="../../../static/image/common/bt_auxiliary.png">
                    </div>
                    <span class="btDetail">辅助功能</span>
                </button>
          </el-col>

          <el-col :span='24' class="bg-white pl10 pr10 pt10 pb10 bb1">
              <el-table :data="repositoryAddressData" border style="width: 100%" stripe>
                    <el-table-column prop="contactPerson" label="联系人" >
                        <template slot-scope="scope">
                            <!-- <span>{{scope.$index%2}}</span> -->
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.contactPerson" 
                                    v-on:click="handleEdit(scope.$index,scope.row)"
                                    type="text"/>
                        </template>
                    </el-table-column>

                    <el-table-column prop="phone" label="手机" >
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.phone" 
                                    v-on:click="handleEdit(scope.$index,scope.row)"
                                    type="text"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="phoneNum" label="电话"></el-table-column>

                    <el-table-column prop="completeAddress" label="送货地址">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.completeAddress" 
                                    v-on:click="handleEdit(scope.$index,scope.row)"
                                    type="text" />
                        </template>
                    </el-table-column>

                    <el-table-column prop="transportMethodId" label="运输方式">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.transportMethodId" 
                                    v-on:click="handleEdit(scope.$index,scope.row)"
                                    type="text"/>
                        </template>
                    </el-table-column>

                    <el-table-column prop="logisticsCompany" label="物流公司">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.logisticsCompany" 
                                    v-on:click="handleEdit(scope.$index,scope.row)"
                                    type="text"/>
                        </template>
                    </el-table-column>

                    <el-table-column prop="isDefault" label="默认">
                        <template slot-scope="scope">
                            <el-checkbox v-model="repositoryAddressData[scope.$index].isDefault"></el-checkbox>
                        </template>
                    </el-table-column>

                    <el-table-column prop="remark" label="备注">
                        <template slot-scope="scope">
                            <input class="input-need" 
                                    :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                    v-model="scope.row.remark" 
                                    v-on:click="handleEdit(scope.$index,scope.row)"
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
              <div>
                <div class="bgcolor">
                    <label>创建人</label>
                    <el-input placeholder="请录入创建人" disabled="disabled"></el-input>
                </div>

                <div class="bgcolor">
                    <label>创建时间</label>
                    <el-date-picker  type="date" placeholder="选择创建时间" disabled="disabled"></el-date-picker>
                </div>

                <div class="bgcolor">
                    <label>修改人</label>
                    <el-input placeholder="请录入修改人" disabled="disabled"></el-input>
                </div>

                <div class="bgcolor">
                    <label>修改时间</label>
                    <el-date-picker type="date" placeholder="选择修改时间" disabled="disabled"></el-date-picker>
                </div>
                <!-- <div class="bgcolor"><label>启用日期</label><el-date-picker v-model="auditInformation.startTime" type="date" placeholder="选择启用日期"></el-date-picker></div>
                <div class="bgcolor"><label>封存日期</label><el-date-picker v-model="auditInformation.finishTime" type="date" placeholder="选择封存日期"></el-date-picker></div>
                <div class="bgcolor"><label>封存人</label><el-input v-model="auditInformation.finishName" placeholder="请录入封存人"></el-input></div>     -->
            </div> 
          </el-col>
      </el-row>


  </div>
</template>

<script>
    export default{
        name:'repositoryModify',
        created:function(){
            let self = this;
            self.loadData();
        },

        methods:{
            loadData:function(){//根据id查找仓库信息和仓库地址信息
                // ouId (integer, optional): 组织单元ID ,
                // stockCode (string, optional): 仓库编码 ,
                // stockName (string, optional): 仓库名称 ,
                // stockFullName (string, optional): 仓库全称 ,
                // opAreaId (integer, optional): 业务地区 ,
                // adAreaId (integer, optional): 行政地区 ,
                // stockTypeId (integer, optional): 仓库类型 ,
                // invTypeId (integer, optional): 库存分类 ,
                // fax (string, optional): 传真 ,
                // email (string, optional): 邮箱 ,
                // status (integer, optional): 启用状态 ,
                // manager (string, optional): 负责人 ,
                // phone (string, optional): 电话 ,
                // remark (string, optional): 备注 ,
                // id (integer, optional)

                let self = this;
                if(self.$route.params.id!='default'){
                    self.$destroy()
                    //根据仓库id获取仓库信息
                    this.$axios.posts('/api/services/app/StockManagement/QueryRepositoryDetail',{id:self.$route.params.id}).then(function(res){  
                        // console.log(res)               
                        self.repositoryData = res.result;
                        // console.log(self.repositoryData);
                    });
                    // console.log(self.$route.params.id)
                    //根据仓库id获取仓库地址信息
                    self.createParams.stockId = self.$route.params.id;
                    self.getRepositoryAddressParams={
                        id:self.$route.params.id,
                    }
                    // console.log(self.getRepositoryAddressParams)
                    this.$axios.gets('/api/services/app/StockAddressManagement/GetAllByStockId',self.getRepositoryAddressParams).then(function(res){
                        // console.log(res);
                        self.repositoryAddressData = res.result;
                    })
                }
                
            
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

            saveModify:function(){//修改仓库信息保存
                let self = this;
                this.$axios.puts('/api/services/app/StockManagement/UpdateRepository',self.repositoryData).then(function(res){
                    console.log(res);
                    self.open('修改仓库信息成功','el-icon-circle-check','successERP');
                })

                if(self.updataList.length>0){
                    for(let i in self.updataList){
                        console.log(i)
                        this.$axios.puts('/api/services/app/StockAddressManagement/Update',self.updataList[i]).then(function(res){
                            console.log(res);
                            self.open('修改仓库信息成功','el-icon-circle-check','successERP');
                            self.updataList = [];
                        })
                    }
                }
                
                self.saveAddress();
            },

            addCol:function(){//增行
                let self = this;
                // console.log(1)
                console.log(self.repositoryAddressData)
                self.repositoryAddressData.unshift(self.createParams);
                console.log(self.repositoryAddressData)
            },

            saveAddress:function(){//下方保存按钮，保存新增的仓库地址信息
                let self = this;
                this.$axios.posts('/api/services/app/StockAddressManagement/Create',self.createParams).then(function(res){//创建
                    console.log(res);
                    self.loadData();
                    self.open('新增仓库成功','el-icon-circle-check','successERP');
                    self.clearData();
              })
              self.handleSave();
            },

            clearData:function(){//清除创建的参数
                let self = this;
                self.createParams={
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
            },

            finishEdit: function(index) {//表格内编辑完成事件
                this.isEdit=-1;
            },

            handleEdit:function(index,row){//表格内编辑操作
                // this.isEdit=index;//当选中行的索引值与列表中索引值相同，则编辑！
                // console.log(this.isEdit)
                let self = this;
                self.updataList.push(row);
                console.log(self.updataList);
            },

            handleDelete:function(index,id){//表格内删除操作
                this.repositoryAddressData.splice(index,1);
                this.$axios.deletes('/api/services/app/StockAddressManagement/Delete',{id:id}).then(function(res){
                    console.log(res);
                    self.open('删除仓库地址成功','el-icon-circle-check','successERP');
              })
            },
            
            handleSave:function(index,row){
                console.log(index);
                console.log(row);
                let self = this;
                this.$axios.puts('/api/services/app/StockAddressManagement/Update',row).then(function(res){//创建
                    console.log(res);
                    self.loadData();
                    self.open('修改仓库地址成功','el-icon-circle-check','successERP');
              })
            },

            back(){
                this.$store.state.url='/repository/repositoryList/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },


        },

        data(){
            return {
                repositoryData:'',//根据仓库id查出的仓库信息
                repositoryAddressData:[],//根据仓库id查出的仓库地址信息
                getRepositoryAddressParams:{
                   id:'',
                }, 

                ifShow:true,//控制折叠页面
                ifCan:true,//控制允许使用
                isEdit:-1,//表格下标
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
                    "fax": " ",
                    "email":  '',
                    "status": 1,
                    "manager": "",
                    "phone": "",
                    "remark": ""
                },
                createParams:{//创建新的仓库地址
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
                updataList:[],
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
/* .data-wrapper .el-checkbox__inner::after{
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
} */

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


