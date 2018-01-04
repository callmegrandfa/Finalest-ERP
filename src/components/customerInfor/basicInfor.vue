<template>
 <div class="basicForm">
     <el-row>
         <el-col :span="24"> 
             <div class="operationBtn">
                <el-col :span='2' class="ml10"><span class="btn">保存新增</span></el-col>
                <el-col :span='2' class="ml10"><span class="btn">保存</span></el-col>
                <el-col :span='2' class="ml10"><span class="btn">辅助功能</span></el-col>          
            </div>  
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="22" :class="{slidup : showCompany}" class="down"> 
            <el-col :span="5" class="bgcolor">
                <label>所属组织</label>
                <el-select v-model="valueOrganization">
                    <el-option v-for="item in organization" :key="item.valueMonth" :label="item.label" :value="item.valueOrganization"></el-option>
                </el-select>
            </el-col> 


            <el-col :span="5" class="bgcolor">
                <label>编码</label>
                <el-input v-model="data.code" placeholder="请录入编码"></el-input>
            </el-col>


            <el-col :span="5" class="bgcolor">
                <label>名称</label>
                <el-input v-model="data.name" placeholder="请录入名称"></el-input>
            </el-col>


            <el-col :span="5" class="bgcolor">
                <label>全称</label>
                 <el-input v-model="data.fullName" placeholder="请录入全称"></el-input>
            </el-col>

            <el-col :span="5" class="bgcolor">
                <label>助记码</label>
                <el-input v-model="data.mnemonicCode" placeholder="请录入助记码"></el-input>
            </el-col>
                


            <el-col :span="5" class="bgcolor">
                <label>客户分类</label>
                <el-select v-model="valueCustomerType">
                    <el-option v-for="item in customerType" :key="item.valueCustomerType" :label="item.label" :value="item.valueCustomerType"></el-option>
                </el-select>
            </el-col>
            
            
            
            <el-col :span="5" class="bgcolor">
                <label>客户性质</label>
                <el-select v-model="valueNature">
                    <el-option v-for="item in nature" :key="item.valueNature" :label="item.label" :value="item.valueNature"></el-option>
                </el-select>
            </el-col>
            <el-col :span="5" class="bgcolor">
                <label>客户等级</label>
                <el-select v-model="valueGrade">
                    <el-option v-for="item in grade" :key="item.valueGrade" :label="item.label" :value="item.valueGrade"></el-option>
                </el-select>
            </el-col>
            <el-col :span="5" class="bgcolor">
                <label>客户类型</label>
                <el-select v-model="valueSort">
                    <el-option v-for="item in sort" :key="item.valueSort" :label="item.label" :value="item.valueSort"></el-option>
                </el-select>
            </el-col>   
            <el-col :span="5" class="bgcolor">
                <label>对应财务组织</label>
                <el-select v-model="valueFinance">
                    <el-option v-for="item in finance" :key="item.valueFinance" :label="item.label" :value="item.valueFinance"></el-option>
                </el-select>
            </el-col>
            <el-col :span="5" class="bgcolor">
                <label>纳税登记号</label>
                <el-input v-model="data.taxNum" placeholder="请录入登记号"></el-input>
            </el-col>
            <el-col :span="5" class="bgcolor">
                <label>业务地区</label>
                <el-select v-model="valueAreaBusiness">
                    <el-option v-for="item in areaBusiness" :key="item.valueAreaBusiness" :label="item.label" :value="item.valueAreaBusiness"></el-option>
                </el-select>
            </el-col>
             <el-col :span="5" class="bgcolor">
                <label>国家/地区</label>
                <el-select v-model="valueCountry">
                    <el-option v-for="item in country" :key="item.valueCountry" :label="item.label" :value="item.valueCountry"></el-option>
                </el-select>
            </el-col>
            <el-col :span="5" class="bgcolor">
                <label>行政地区</label>
                <el-select v-model="valueAreaAdministrative">
                    <el-option v-for="item in areaAdministrative" :key="item.valueAreaAdministrative" :label="item.label" :value="item.valueAreaAdministrative"></el-option>
                </el-select>
            </el-col>
            <el-col :span="5" class="bgcolor">
                <label>法人代表</label>
                <el-input v-model="data.legal" placeholder="请录入法人代表"></el-input>
            </el-col>
            <el-col :span="5" class="bgcolor">
                <label>注册地址</label>
                <el-input v-model="data.address" placeholder="请录入注册地址"></el-input>
            </el-col>
            <el-col :span="5" class="bgcolor"><label>负责人</label><el-input v-model="data.chargePerson" placeholder="请填写负责人"></el-input></el-col>
            <el-col :span="5" class="bgcolor"><label>电话</label><el-input v-model="data.telephone" placeholder="请填写电话"></el-input></el-col> 
            
            <el-col :span="10" class="bgcolor moreWidth"><label>备注</label><el-input v-model="data.remarks" placeholder="备注"></el-input></el-col>   
        </el-col>
        <el-col :span="2">   
            <a class="upBtn" @click="showCompany = !showCompany">
                收起<span class="el-icon-arrow-down"></span>
            </a>
        </el-col>                                                                            
</el-row>
    <el-row>
      <el-col :span="2" class="bgcolor noColor "><el-checkbox v-model="supplier">同为供应商</el-checkbox></el-col>
      <el-col :span="2" class="bgcolor noColor "><el-checkbox v-model="credit">信用管理</el-checkbox></el-col>   
    </el-row>

    <!-- 公司业务财务bootTab标签页 -->
    <el-row> 
        <div class="tabZoo">
            <el-col :span="24">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="银行信息" name="bank" class="getPadding">
                        <el-table :data="tableData" stripe border style="width: 100%">
                            <el-table-column prop="clearInfor" label="结算信息" width="180"></el-table-column>
                            <el-table-column prop="bankNum" label="银行账号" width="180"></el-table-column>
                            <el-table-column prop="bankAccount" label="银行账户" width="180"></el-table-column>
                            <el-table-column prop="openBank" label="开户银行" width="180"></el-table-column>
                            <el-table-column prop="contact" label="联系人" width="180"></el-table-column>
                            <el-table-column prop="phone" label="联系电话" width="180"></el-table-column>
                            <el-table-column prop="defaults" label="默认" width="180"></el-table-column>
                            <el-table-column ></el-table-column>
                        </el-table>
                        <el-col :span="22" class="auditInformation">
                            <h4>审计信息</h4>
                            <div>
                                <el-col :span="5" class="bgcolor"><label>创建人</label><el-input v-model="auditInformation.createName" placeholder="请录入创建人"></el-input></el-col>
                                <el-col :span="5" class="bgcolor"><label>创建时间</label><el-input v-model="auditInformation.createTime" placeholder="请录入创建时间"></el-input></el-col>
                                <el-col :span="5" class="bgcolor"><label>修改人</label><el-input v-model="auditInformation.modifyName" placeholder="请录入修改人"></el-input></el-col>
                                <el-col :span="5" class="bgcolor"><label>修改时间</label><el-input v-model="auditInformation.modifyTime" placeholder="请录入修改时间"></el-input></el-col>
                                <el-col :span="5" class="bgcolor"><label>启用日期</label><el-input v-model="auditInformation.startTime" placeholder="请录入启用日期"></el-input></el-col>
                                <el-col :span="5" class="bgcolor"><label>封存日期</label><el-input v-model="auditInformation.finishTime" placeholder="请录入封存日期"></el-input></el-col>
                                <el-col :span="5" class="bgcolor"><label>封存人</label><el-input v-model="auditInformation.finishName" placeholder="请录入封存人"></el-input></el-col>    
                            </div>                                  
                        </el-col>
                    </el-tab-pane>
                    <el-tab-pane label="送货地址" name="address">送货地址</el-tab-pane>
                    <el-tab-pane label="使用组织" name="organization">使用组织</el-tab-pane>
                    <el-tab-pane label="信用信息" name="creditInfor">信用信息</el-tab-pane>
                </el-tabs>
            </el-col>
        </div>
    </el-row>                                                                
</div>
</template>

<script>
export default({
    data() {
        return{
            tableData: [{//表格
                clearInfor: '',
                bankNum: '',
                bankAccount: '',
                openBank:'农业银行',
                contact:'',
                phone:'',
                defaults:''
                },{//表格
                clearInfor: '',
                bankNum: '',
                bankAccount: '',
                openBank:'工商银行',
                contact:'',
                phone:'',
                defaults:''
                },{//表格
                clearInfor: '',
                bankNum: '',
                bankAccount: '',
                openBank:'建设银行',
                contact:'',
                phone:'',
                defaults:''
                },{//表格
                clearInfor: '',
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
        }
    },
       

    })
  </script>

  <style>
  .basicForm .down{
    overflow: hidden;
    transition: max-height 0.5s;
    -moz-transition: max-height 0.5s;
    -webkit-transition: max-height 0.5s;
    -o-transition: max-height 0.5s; 
    max-height:  900px;
  }
  .basicForm .slidup{
       max-height: 90px;
  }
  .basicForm .slidUp{
      max-height: 45px;
  }

    .basicForm .el-button--primary{
        background-color: #82AAFC;
        border: none;
    }
  .basicForm .bgcolor{
      background-color: #fff;
      height: 30px;
      font-size: 12px;
      margin-right: 15px;
      margin-bottom: 15px;
      float: left;
      overflow: hidden;
  }
  .basicForm .noColor{
      background-color:transparent;
  }
  .basicForm .moreWidth{
      width: calc(41.667% + 15px)
  }
  
  .basicForm .el-row{
      margin-bottom: 15px;
  }
  .basicForm .bgcolor label{
      padding-left: 10px;
      line-height:30px;
      display: block;
      width:83px;
      height: 100%;
      float: left;
      color: #BCBCBC;
  }
  .basicForm .bgcolor .el-select,.basicForm .bgcolor .el-input{
      display: block;
      width: calc(100% - 93px);
      height: 30px;
      float: left;
  }
 
  .basicForm .bgcolor .el-input input{
      border: none;
      height: 100%;
  }
  .basicForm .bgcolor .el-input input[disabled]{
      background-color: #fff;
  }
  .basicForm .bgcolor .el-select .el-input {
      width: 100%;
  }
  .basicForm .companyInfo>.el-col:first-child,
  .basicForm .companyInfo .el-col h4{
      margin-bottom: 15px;
  }
  .basicForm .upBtn{
      font-size: 12px;
      color: #BCBCBC;
      cursor: pointer;
  }
  .basicForm .upBtn .el-icon-arrow-down{
      margin-left: 5px;
  }
.basicForm .tabZoo{
     overflow: hidden;
     background-color: #fff;
 }
 .basicForm .tabZoo .bgcolor{
     border: 1px solid #BCBCBC;
     border-radius: 4px;
 }
 .basicForm .tabZoo .getPadding,.tabZoo .el-tabs__nav-scroll{
     padding: 0 20px;
 }
 .basicForm .tabZoo .auditInformation{
     margin-top: 15px;
 }
 .basicForm .tabZoo .auditInformation h4{
     margin-bottom: 15px;
 }
.basicForm .btn{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    background:rgba(130, 170, 252, 1);
    border-radius: 3px;
    color: white;
    width: 100%;
    text-align: center;
    cursor: pointer;
}
.basicForm .ml10{
   margin-left: 10px;
}

 
   

  /* 输入框 placeholder字体颜色*/
  ::-webkit-input-placeholder {
    color: #BCBCBC; }

  :-moz-placeholder {
    color: #BCBCBC; }

  ::-moz-placeholder {
    color: #BCBCBC; }

  :-ms-input-placeholder {
    color: #BCBCBC; }


  </style>
  
