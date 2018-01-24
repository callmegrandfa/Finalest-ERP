<template>
 <div class="customerBasicForm">
     <el-row>
         <el-col :span="24">
            <button class="erp_bt bt_back" @click="back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
            <button class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
            <button class="erp_bt bt_save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>
            <button class="erp_bt bt_saveAdd"><div class="btImg"><img src="../../../static/image/common/bt_saveAdd.png"></div><span class="btDetail">保存并新增</span></button>
            <button class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
            <button class="erp_bt bt_look"><div class="btImg"><img src="../../../static/image/common/bt_look.png"></div><span class="btDetail">审核</span></button>
            <span @click="ifShow = !ifShow" class="upBt">收起<i class="el-icon-arrow-down" @click="ifShow = !ifShow" :class="{rotate : !ifShow}"></i></span>
        </el-col>
    </el-row>
 <el-collapse-transition>
     <div v-show="ifShow">   
        <el-row>
            <el-col :span="24" class="getPadding"> 
                <div class="errorTips">
                    <p class="msgDetail">错误提示：名称不能为特殊字符</p>
                    <div class="closeMsg"><i class="fa fa-times" aria-hidden="true"></i></div>
                </div>
                <div class="bgcolor">
                    <label>所属组织</label>
                    <el-select v-model="valueOrganization">
                        <el-option v-for="item in organization" :key="item.valueMonth" :label="item.label" :value="item.valueOrganization"></el-option>
                    </el-select>
                </div> 


                <div class="bgcolor">
                    <label>编码</label>
                    <el-input v-model="data.code" placeholder="请录入编码"></el-input>
                </div>


                <div class="bgcolor">
                    <label>名称</label>
                    <el-input v-model="data.name" placeholder="请录入名称"></el-input>
                </div>


                <div class="bgcolor">
                    <label>全称</label>
                    <el-input v-model="data.fullName" placeholder="请录入全称"></el-input>
                </div>

                <div class="bgcolor">
                    <label>助记码</label>
                    <el-input v-model="data.mnemonicCode" placeholder="请录入助记码"></el-input>
                </div>
                    


                <div class="bgcolor">
                    <label>客户分类</label>
                    <el-select v-model="valueCustomerType">
                        <el-option v-for="item in customerType" :key="item.valueCustomerType" :label="item.label" :value="item.valueCustomerType"></el-option>
                    </el-select>
                </div>
                
                
                
                <div class="bgcolor">
                    <label>客户性质</label>
                    <el-select v-model="valueNature">
                        <el-option v-for="item in nature" :key="item.valueNature" :label="item.label" :value="item.valueNature"></el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>客户等级</label>
                    <el-select v-model="valueGrade">
                        <el-option v-for="item in grade" :key="item.valueGrade" :label="item.label" :value="item.valueGrade"></el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>客户类型</label>
                    <el-select v-model="valueSort">
                        <el-option v-for="item in sort" :key="item.valueSort" :label="item.label" :value="item.valueSort"></el-option>
                    </el-select>
                </div>   
                <div class="bgcolor">
                    <label>对应财务组织</label>
                    <el-select v-model="valueFinance">
                        <el-option v-for="item in finance" :key="item.valueFinance" :label="item.label" :value="item.valueFinance"></el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>纳税登记号</label>
                    <el-input v-model="data.taxNum" placeholder="请录入登记号"></el-input>
                </div>
                <div class="bgcolor">
                    <label>业务地区区号</label>
                    <el-select v-model="valueAreaBusiness">
                        <el-option v-for="item in areaBusiness" :key="item.valueAreaBusiness" :label="item.label" :value="item.valueAreaBusiness"></el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>国家/地区</label>
                    <el-select v-model="valueCountry">
                        <el-option v-for="item in country" :key="item.valueCountry" :label="item.label" :value="item.valueCountry"></el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>行政地区</label>
                    <el-select v-model="valueAreaAdministrative">
                        <el-option v-for="item in areaAdministrative" :key="item.valueAreaAdministrative" :label="item.label" :value="item.valueAreaAdministrative"></el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>法人代表</label>
                    <el-input v-model="data.legal" placeholder="请录入法人代表"></el-input>
                </div>
                <div class="bgcolor">
                    <label>注册地址</label>
                    <el-input v-model="data.address" placeholder="请录入注册地址"></el-input>
                </div>
                <div class="bgcolor"><label>负责人</label><el-input v-model="data.chargePerson" placeholder="请填写负责人"></el-input></div>
                <div class="bgcolor"><label>电话</label><el-input v-model="data.telephone" placeholder="请填写电话"></el-input></div>
                
                <div class="bgcolor"><label>备注</label><el-input v-model="data.remarks" placeholder="备注"></el-input></div>
            </el-col>
        </el-row>
     </div>
 </el-collapse-transition>     
<el-row>
    <el-col :span="2" :offset="1"><el-checkbox v-model="supplier">同为供应商</el-checkbox></el-col>
    <el-col :span="2"><el-checkbox v-model="credit">信用管理</el-checkbox></el-col>   
</el-row>

    <!-- 公司业务财务bootTab标签页 -->
    <el-row class="nopadding"> 
        <div class="tabZoo">
            <el-col :span="24">
               <el-tabs v-model="activeName">
                    <el-tab-pane label="银行信息" name="bank" class="getPadding" style="z-index:-10">
                        <button class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
                        <button class="erp_bt bt_excel"><div class="btImg"><img src="../../../static/image/common/bt_excel.png"></div><span class="btDetail">Excel</span></button>
                        <button class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
                        <button class="erp_bt bt_auxiliary"><div class="btImg"><img src="../../../static/image/common/bt_auxiliary.png"></div><span class="btDetail">辅助功能</span></button>
                        
                
                        <el-table :data="tableData" stripe border style="width: 100%">
                            <el-table-column prop="ifAllow" label=" ">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="tableData[scope.$index].ifAllow" ></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column prop="clearCurrency" label="结算币种" width="180"></el-table-column>
                            <el-table-column prop="bankNum" label="银行账号" width="180"></el-table-column>
                            <el-table-column prop="bankAccount" label="银行账户" width="180"></el-table-column>
                            <el-table-column prop="openBank" label="开户银行" width="180"></el-table-column>
                            <el-table-column prop="contact" label="联系人" width="180"></el-table-column>
                            <el-table-column prop="phone" label="联系电话" width="180"></el-table-column>
                            <el-table-column prop="ifDefault" label="默认">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="tableData[scope.$index].ifDefault" ></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column label='操作'>
                                <template slot-scope="scope">
                                    <el-button v-on:click="handleDelete(scope.$index)" type="text" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="送货地址" name="address" style="z-index:-1000">送货地址</el-tab-pane>
                    <el-tab-pane label="使用组织" name="organization" style="z-index:-1000">使用组织</el-tab-pane>
                    <el-tab-pane label="信用信息" name="creditInfor" style="z-index:-1000">信用信息</el-tab-pane>
                </el-tabs>
            </el-col>
        </div>
    </el-row>    
 <el-row>
    <el-col :span="22" class="auditInformation getPadding">
        <h4 class="h4">审计信息</h4>
        <div>
            <div class="bgcolor"><label>创建人</label><el-input v-model="auditInformation.createName" placeholder="请录入创建人"></el-input></div>
            <div class="bgcolor"><label>创建时间</label><el-date-picker v-model="auditInformation.createTime" type="date" placeholder="选择创建时间"></el-date-picker></div>
            <div class="bgcolor"><label>修改人</label><el-input v-model="auditInformation.modifyName" placeholder="请录入修改人"></el-input></div>
            <div class="bgcolor"><label>修改时间</label><el-date-picker v-model="auditInformation.modifyTime" type="date" placeholder="选择修改时间"></el-date-picker></el-input></div>
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
            tableData: [{//表格
                ifAllow:true,
                ifDefault:true,
                clearCurrency: '结算币种',
                bankNum: '',
                bankAccount: '',
                openBank:'农业银行',
                contact:'',
                phone:'',
                defaults:''
                },{//表格
                ifAllow:true,
                ifDefault:true,
                clearCurrency: '结算币种',
                bankNum: '',
                bankAccount: '',
                openBank:'工商银行',
                contact:'',
                phone:'',
                defaults:''
                },{//表格
                ifAllow:true,
                ifDefault:true,
                clearCurrency: '结算币种',
                bankNum: '',
                bankAccount: '',
                openBank:'建设银行',
                contact:'',
                phone:'',
                defaults:''
                },{//表格
                ifAllow:true,
                ifDefault:true,
                clearCurrency: '结算币种',
                bankNum: '',
                bankAccount: '',
                openBank:'中国银行',
                contact:'',
                phone:'',
                defaults:''
                }, ],
            auditInformation:{//审计信息
                createName:"",
                createTime:"",
                modifyName:"",
                modifyTime:"",
                startTime:"",
                finishTime:"",
                finishName:"",
            },
            data:{
                code:'',//编码
                name:'',//名称
                mnemonicCode:'PO1711060111111',//助记码
                chargePerson:'',//负责人
                telephone:'',//电话
                address:'',//注册地址
                longitude:'',//经度
                latitude:'',//纬度
                remarks:'',//备注
                fullName:'无',//全称
                taxNum:'',//纳税登记号
                legal:'张三',//法人代表
            },
             organization: [{//所属组织
                valueOrganization:'选项1',
                label: '恒康'
            }, {
                valueOrganization:'选项2',
                label: '恒大'
            }, {
                valueOrganization:'选项3',
                label: '361度'
            }],
            customerType:[{//客户分类
                valueCustomerType:'选项1',
                label: '1'
            }, {
                valueCustomerType:'选项2',
                label: '2'
            }, {
                valueCustomerType:'选项3',
                label: '3'
            }],
            nature:[{//客户性质
                valueNature:'选项1',
                label: '1'
            }, {
                valueNature:'选项2',
                label: '2'
            }, {
                valueNature:'选项3',
                label: '3'
            }],
            grade:[{//客户等级
                valueGrade:'选项1',
                label: '1'
            }, {
                valueGrade:'选项2',
                label: '2'
            }, {
                valueGrade:'选项3',
                label: '3'
            }],
            sort:[{//客户类型
                valueSort:'选项1',
                label: '1'
            }, {
                valueSort:'选项2',
                label: '2'
            }, {
                valueSort:'选项3',
                label: '3'
            }],
            areaBusiness:[{//业务地区
                valueAreaBusiness:'选项1',
                label: '1'
            }, {
                valueAreaBusiness:'选项2',
                label: '2'
            }, {
                valueAreaBusiness:'选项3',
                label: '3'
            }],
            finance :[{//对应财务组织
                valueFinance:'选项1',
                label: '1'
            }, {
                valueFinance:'选项2',
                label: '2'
            }, {
                valueFinance:'选项3',
                label: '3'
            }],
            country :[{//国家/地区
                valueCountry:'选项1',
                label: '1'
            }, {
                valueCountry:'选项2',
                label: '2'
            }, {
                valueCountry:'选项3',
                label: '3'
            }],
            areaAdministrative :[{//行政地区
                valueAreaAdministrative:'选项1',
                label: '1'
            }, {
                valueAreaAdministrative:'选项2',
                label: '2'
            }, {
                valueAreaAdministrative:'选项3',
                label: '3'
            }],
            activeName: 'bank',//tabs标签页默认激活name
            

            
            supplier:true,//同为供应商
            credit :true,//信用管理

            showCompany:false,//初始默认公司计信息状态展开  
            valueOrganization: '请选择组织',//所属组织
            valueShopType:'请选择店铺类型',//店铺类型
            valueNature:'请选择店铺性质',//店铺性质
            valueGrade:'请选择店铺等级',//店铺等级 
            valueWarehouse:'请选择对应仓库',//对应仓库 
            valueAreaBusiness:'请选择业务地区',//业务地区 
            valueAreaAdministrative:'请选择行政地区',//行政地区 
            valueOpenData:'请选择开店日期',//开店日期 
            valueBrand:'请选择主营品牌',//主营品牌 
            valueTradingArea:'请选择商圈',//商圈  
            valueCountry:'中国',//国家地区 
            valueFinance:'亚投行',//财务组织 
            valueSort:'学生',//客户类型 
            valueCustomerType:'中国人',//客户分类 
        }
    },
    methods:{
         handleChange(val) {
            console.log(val);
        },
        handleDelete:function(index){//表格内删除操作
			this.tableData.splice(index,1);
        },
        back(){
            this.$store.state.url='/customer/default/customerList/default'
            this.$router.push({path:this.$store.state.url})//点击切换路由
        },
    }
       

    })
  </script>

  <style>
  .customerBasicForm{
      font-family: 'microsoft yahei';
  }
 /*收起*/
 .customerBasicForm .upBt{
     font-size: 12px;
     float: right;
     margin-right: 10px;
     margin-top: 10px;
     cursor: pointer;
 }
 .customerBasicForm .upBt i{
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s; 
    color:#cacaca;
    margin-left: 5px;
 }
 .customerBasicForm .upBt i.rotate{
     transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);	
 }

.customerBasicForm  .errorTips{
    margin-bottom: 10px;
}  
.customerBasicForm .el-row:first-child{
      padding:5px 0;
}
  .customerBasicForm .el-row{
     padding:15px 0;
     border-bottom: 1px solid #e4e4e4;
     background-color: #fff;
  }
  .customerBasicForm .el-row:last-child{
      border-bottom:none;
  }

.customerBasicForm .tabZoo{
     overflow: hidden;
     background-color: #fff;
 }

 .customerBasicForm  .getPadding,.tabZoo .el-tabs__nav-scroll{
     padding: 0 10px;
 }
 .customerBasicForm .tabZoo .auditInformation{
     margin-top: 15px;
 }

 .customerBasicForm .erp_bt{
     margin-bottom: 15px;
 }
.customerBasicForm .tabZoo .erp_bt:first-child{
    margin-left: 0;
}
.customerBasicForm .nopadding{
    padding-top: 0;
}

  </style>
  
