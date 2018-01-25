<template>
  <div class="data-wrapper b1">
      <el-row class="bg-white pt10 pb10 bb1">
            <button class="erp_bt bt_back" @click="back">
                <div class="btImg">
                  <img src="../../../static/image/common/bt_back.png">
                </div>
                <span class="btDetail">返回</span>
            </button>

            <button class="erp_bt bt_save" @click="createRepository">
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

            <button class="erp_bt bt_look">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_look.png">
                </div>
                <span class="btDetail">审核</span>
            </button>
      </el-row>

      <el-row class="bg-white ft12 pt10 pr10">
          <el-col :span="5" class="h30">
              <el-row>
                  <el-col :span="8">
                      <span class="fr pr10">所属组织</span>
                  </el-col>
                  <el-col :span="15" class="b1 br3 pl10">
                       <el-select v-model="value" placeholder="广州总部" >
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                       </el-select>
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="bg-white h30 ml10">
              <el-row>
                  <el-col :span="8">
                      <span class="fr pr10">仓库编码</span>
                  </el-col>
                  <el-col :span="15" class="b1 br3 pl10">
                      <input v-model="createRepositoryParams.stockCode"
                             class='input-need' 
                             type="text" 
                             placeholder="请录入仓库编码">
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="bg-white h30 ml10">
              <el-row>
                  <el-col :span="8">
                      <span class="fr pr10">名称</span>
                  </el-col>
                  <el-col :span="15" class="b1 br3 pl10">
                      <input v-model="createRepositoryParams.stockFullName"
                            class="input-need" 
                            type="text" 
                            placeholder="请录入名称">
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="bg-white h30 ml10">
              <el-row>
                  <el-col :span="8">
                      <span class="fr pr10">简称</span>
                  </el-col>
                  <el-col :span="15" class="b1 br3 pl10">
                      <input  v-model="createRepositoryParams.stockName"
                              class="input-need" 
                              type="text" 
                              placeholder="请录入简称">
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="2" :offset="1" class="toggle-btn">
              <span @click='ifShow = !ifShow'>收起</span>
              <i class="el-icon-arrow-up"></i>
          </el-col>

      </el-row>

      <el-row class="bg-white ft12 pt10 pr10">
          <el-col :span="5" class="bg-white h30">
              <el-row>
                  <el-col :span="8">
                      <span class="fr pr10">助记码</span>
                  </el-col>
                  <el-col :span="15" class="b1 br3 pl10">
                      <input v-model="ouGet.mnemonic" 
                                class="input-need" 
                                type="text" 
                                placeholder="PO123456789">
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="bg-white h30 ml10">
              <el-row>
                  <el-col :span="8">
                      <span class="fr pr10">仓库类型</span>
                  </el-col>
                  <el-col :span="15" class="b1 br3 pl10">
                      <el-select v-model="value" placeholder="广州总部">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                       </el-select>
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="bg-white h30 ml10">
              <el-row>
                  <el-col :span="8">
                      <span class="fr pr10">库存分类</span>
                  </el-col>
                  <el-col :span="15" class="b1 br3 pl10">
                      <input class="input-need" type="text" placeholder="请录入库存分类">
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="h30 ml10">
              <el-row>
                  <el-col :span="8">
                      <span class="fr pr10">业务地区</span>
                  </el-col>
                  <el-col :span="15" class="b1 br3 pl10">
                      <el-select v-model="value" placeholder="广州">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                       </el-select>
                  </el-col>
              </el-row>
          </el-col>
      </el-row>

      <el-collapse-transition>
            <div v-show="ifShow" class="bb1">
                <el-row class="bg-white ft12 pt10 pr10">
                    <el-col :span="5" class="h30">
                        <el-row>
                            <el-col :span="8">
                                <span class="fr pr10">行政地区</span>
                            </el-col>
                            <el-col :span="15" class="b1 br3 pl10">
                                <el-select v-model="value" placeholder="广州总部">
                                        <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                    </el-col>

                    <el-col :span="5" class="h30 ml10">
                        <el-row>
                            <el-col :span="8">
                                <span class="fr pr10">负责人</span>
                            </el-col>
                            <el-col :span="15" class="b1 br3 pl10">
                                <input v-model="createRepositoryParams.manager"
                                        class="input-need"  
                                        type="text" 
                                        placeholder="请录入负责人">
                            </el-col>
                        </el-row>
                    </el-col>

                    <el-col :span="5" class="h30 ml10">
                        <el-row>
                            <el-col :span="8">
                                <span class="fr pr10">电话</span>
                            </el-col>
                            <el-col :span="15" class="b1 br3 pl10">
                                <input  v-model='createRepositoryParams.phone'
                                        class="input-need" 
                                        type="text" 
                                        placeholder="请录入电话">
                            </el-col>
                        </el-row>
                    </el-col>

                    <el-col :span="5" class="h30 ml10">
                        <el-row>
                            <el-col :span="8">
                                <span class="fr pr10">Email</span>
                            </el-col>
                            <el-col :span="15" class="b1 br3 pl10">
                                <input  v-model="createRepositoryParams.email"
                                        class="input-need" 
                                        type="text" 
                                        placeholder="请录入邮箱">
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>

                <el-row class="bg-white ft12 pt10 pr10">
                    <el-col :span="5" class="h30">
                        <el-row>
                            <el-col :span="8">
                                <span class="fr pr10">传真</span>
                            </el-col>
                            <el-col :span="15" class="b1 br3 pl10">
                                <input  v-model="createRepositoryParams.fax"
                                        class="input-need"
                                        type="text" 
                                        placeholder="请录入传真">
                            </el-col>
                        </el-row>
                    </el-col>

                    <el-col :span="5" class="h30 ml10">
                        <el-row>
                            <el-col :span="8">
                                <span class="fr pr10">地址</span>
                            </el-col>
                            <el-col :span="15" class="b1 br3 pl10">
                                <input class="input-need" type="text" placeholder="请录入地址">
                            </el-col>
                        </el-row>
                    </el-col>

                    <el-col :span="5" class="h30 ml10">
                        <el-row>
                            <el-col :span="8">
                                <span class="fr pr10">备注</span>
                            </el-col>
                            <el-col :span="15" class="b1 br3 pl10">
                                <input  v-model="createRepositoryParams.remark"
                                        class="input-need" 
                                        type="text" 
                                        placeholder="请录入备注">
                            </el-col>
                        </el-row>
                    </el-col>

                    <el-col :span="24" class="mt20 mb10">
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
              <button class="erp_bt bt_print" @click='addCol'><div class="btImg"><img src="../../../static/image/common/bt_print.png"></div><span class="btDetail">增行</span></button>
              <button class="erp_bt bt_save" @click="saveAdd"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
              <button class="erp_bt bt_print"><div class="btImg"><img src="../../../static/image/common/bt_print.png"></div><span class="btDetail">插行</span></button>
              <button class="erp_bt bt_excel"><div class="btImg"><img src="../../../static/image/common/bt_excel.png"></div><span class="btDetail">Excel</span></button>
              <button class="erp_bt bt_auxiliary"><div class="btImg"><img src="../../../static/image/common/bt_auxiliary.png"></div><span class="btDetail">辅助功能</span></button>
          </el-col>

          <el-col :span='24' class="bg-white pl10 pr10 pt10 pb10 bb1">
              <el-table :data="tableData" border style="width: 100%" stripe>
                    <el-table-column prop="contactPerson" label="联系人" >
                        <template slot-scope="scope">
                            <!-- <span>{{scope.$index%2}}</span> -->
                            <input class="input-need" :class="[scope.$index%2==0?'input-bgw':'input-bgp']" v-model="scope.row.contactPerson" type="text" :disabled="scope.$index!=isEdit" v-on:blur="finishEdit(scope.$index)"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="phone" label="手机" >
                        <template slot-scope="scope">
                            <input class="input-need" :class="[scope.$index%2==0?'input-bgw':'input-bgp']" v-model="scope.row.phone" type="text" :disabled="scope.$index!=isEdit" v-on:blur="finishEdit(scope.$index)"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="phoneNum" label="电话"></el-table-column>
                    <el-table-column prop="completeAddress" label="送货地址">
                        <template slot-scope="scope">
                            <input class="input-need" :class="[scope.$index%2==0?'input-bgw':'input-bgp']" v-model="scope.row.completeAddress" type="text" :disabled="scope.$index!=isEdit" v-on:blur="finishEdit(scope.$index)"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="transportMethodId" label="运输方式">
                        <template slot-scope="scope">
                            <input class="input-need" :class="[scope.$index%2==0?'input-bgw':'input-bgp']" v-model="scope.row.transportMethodId" type="text" :disabled="scope.$index!=isEdit" v-on:blur="finishEdit(scope.$index)"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="logisticsCompany" label="物流公司">
                        <template slot-scope="scope">
                            <input class="input-need" :class="[scope.$index%2==0?'input-bgw':'input-bgp']" v-model="scope.row.logisticsCompany" type="text" :disabled="scope.$index!=isEdit" v-on:blur="finishEdit(scope.$index)"/>
                        </template>
                    </el-table-column>
                    <el-table-column prop="isDefault" label="默认">
                        <template slot-scope="scope">
                            <el-checkbox v-model="tableData[scope.$index].isDefault"></el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column prop="remark" label="备注">
                        <template slot-scope="scope">
                            <input class="input-need" :class="[scope.$index%2==0?'input-bgw':'input-bgp']" v-model="scope.row.remark" type="text" :disabled="scope.$index!=isEdit" v-on:blur="finishEdit(scope.$index)"/>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <!-- <span>{{scope.row}}</span> -->
                            <!-- <el-button v-on:click='a(scope.row)'>123</el-button> -->
                            <el-button v-on:click="handleEdit(scope.$index)" type="text"  size="small">修改</el-button>
                            <el-button v-on:click="handleSave(scope.$index,scope.row)" type="text" size="small">保存</el-button> 
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
                            <input class="input-need" type="text" placeholder="请录入创建人">
                        </el-col>
                    </el-row>
                  </el-col>

                  <el-col :span="5" class="bg-white br3 h35 b1 ml10">
                    <el-row>
                        <el-col :span="8" class="pl10">
                            <span>创建时间</span>
                        </el-col>

                        <el-col :span="15">
                            <input class="input-need" type="text" placeholder="请录入创建时间">
                        </el-col>
                    </el-row>
                  </el-col>

                  <el-col :span="5" class="bg-white br3 h35 b1 ml10">
                    <el-row>
                        <el-col :span="8" class="pl10">
                            <span>修改人</span>
                        </el-col>

                        <el-col :span="15">
                            <input class="input-need" type="text" placeholder="请录入修改人">
                        </el-col>
                    </el-row>
                  </el-col>

                  <el-col :span="5" class="bg-white br3 h35 b1 ml10">
                    <el-row>
                        <el-col :span="8" class="pl10">
                            <span>修改时间</span>
                        </el-col>

                        <el-col :span="15">
                            <input class="input-need" type="text" placeholder="请录入修改时间">
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
            this.getAllList();
        },

        methods:{
            getAllList:function(){//查询所有仓库地址
                // groupId (integer, optional): 集团ID ,
                // stockId (integer, optional): 仓库ID ,
                // addressId (integer, optional): 地址ID ,
                // completeAddress (string, optional): 详情地址 ,
                // transportMethodId (integer, optional): 运输方式 ,
                // contactPerson (string, optional): 联系人 ,
                // phone (string, optional): 联系电话 ,
                // logisticsCompany (string, optional): 物流公司 ,
                // isDefault (boolean, optional): 是否默认 ,
                // remark (string, optional): 备注 ,
                // id (integer, optional)仓库地址ID

                let self = this;
                this.$axios.gets('/api/services/app/StockAddressManagement/GetAll').then(function(res){
                console.log(res);
                self.allList = res.result;
                self.tableData = self.allList.items;
              })
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

            createRepository:function(){//创建新仓库
                let self = this;
                this.$axios.posts('/api/services/app/StockManagement/CreateRepository',self.createRepositoryParams).then(function(res){
                    console.log(res);
                    self.open('创建仓库成功','el-icon-circle-check','successERP');

              })
            },

            saveAdd:function(){//创建新的仓库地址  保存修改已有仓库地址
                // groupId (integer, optional): 集团ID ,
                // stockId (integer, optional): 仓库ID ,
                // addressId (integer, optional): 地址ID ,
                // completeAddress (string, optional): 详情地址 ,
                // transportMethodId (integer, optional): 运输方式 ,
                // contactPerson (string, optional): 联系人 ,
                // phone (string, optional): 联系电话 ,
                // logisticsCompany (string, optional): 物流公司 ，
                // isDefault (boolean, optional): 是否默认 ,
                // remark (string, optional): 备注 ,
                // id (integer, optional):仓库地址的ID

                let self = this;
                console.log(self.createParams)
                this.$axios.posts('/api/services/app/StockAddressManagement/Create',self.createParams).then(function(res){//创建
                    console.log(res);
                    self.getAllList();
                    self.open('创建仓库地址成功');
                    self.clearData();

              })
            },

            addCol:function(){//增行
                let self = this;
                self.allList.items.unshift(self.createParams);
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

            finishEdit: function(index) {//表格内编辑完成事件
                this.isEdit=-1;
            },

            handleEdit:function(index){//表格内编辑操作
                this.isEdit=index;//当选中行的索引值与列表中索引值相同，则编辑！

            },

            handleDelete:function(index,id){//表格内删除操作
                this.tableData.splice(index,1);
                this.$axios.deletes('/api/services/app/StockAddressManagement/Delete',{id:id}).then(function(res){
                console.log(res);
                alert('删除成功')
              })
            },
            
            handleSave:function(index,row){
                console.log(index);
                console.log(row);
                let self = this;
                this.$axios.puts('/api/services/app/StockAddressManagement/Update',row).then(function(res){//创建
                    console.log(res);
                    self.getAllList();
                    self.open('修改资料成功');
              })
            },

            back(){
                this.$store.state.url='/repository/default/repositoryList/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },


        },

        data(){
            return {
                allList:'',//页面数据获取
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
                    stockId:'16',//仓库ID
                    addressId:'2',//地址ID
                    completeAddress:'',//详情地址
                    transportMethodId:'',//运输方式
                    contactPerson:'',//联系人
                    phone:'',//联系电话
                    logisticsCompany:'',//物流公司
                    isDefault:true,//是否默认
                    remark:'',//备注
                },
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
}
input:-ms-input-placeholder{
    color: rgba(0, 0, 0, 0.349019607843137);
}

input::-webkit-input-placeholder{
    color: rgba(0, 0, 0, 0.349019607843137);
}
</style>
<style>
.data-wrapper .el-input input{
    border:none;
    height: 30px;
    line-height: 30px;
    padding-left: 0;
}
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
/* 重写el-pagination样式 */


.data-wrapper .text-right{
    text-align: right;
}
.mt-10{
    margin-top: 10px;
}
</style>


