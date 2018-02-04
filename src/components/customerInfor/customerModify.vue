<template>
 <div class="customerBasicForm">
     <el-row>
         <el-col :span="24">
            <button class="erp_bt bt_back" @click="back">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_back.png">
                </div>
                <span class="btDetail">返回</span>
            </button>

            <button class="erp_bt bt_save" @click="saveModify">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_save.png">
                </div>
                <span class="btDetail">保存</span>
            </button>

            <button class="erp_bt bt_look">
                <div class="btImg">
                    <img src="../../../static/image/common/bt_look.png">
                </div>
                <span class="btDetail">审核</span>
            </button>
            
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
                    <label>所属组织</label>
                    <el-select v-model="valueOrganization">
                        <el-option v-for="item in organization" :key="item.valueMonth" :label="item.label" :value="item.valueOrganization"></el-option>
                    </el-select>
                </div> 


                <div class="bgcolor">
                    <label>编码</label>
                    <el-input v-model="customerData.contact" placeholder="请录入编码"></el-input>
                </div>


                <div class="bgcolor">
                    <label>名称</label>
                    <el-input v-model="customerData.contactName" placeholder="请录入名称"></el-input>
                </div>


                <div class="bgcolor">
                    <label>全称</label>
                    <el-input v-model="customerData.contactFullName" placeholder="请录入全称"></el-input>
                </div>

                <div class="bgcolor">
                    <label>助记码</label>
                    <el-input v-model="customerData.mnemonic" placeholder="请录入助记码"></el-input>
                </div>
                    


                <div class="bgcolor">
                    <label>客户分类</label>
                    <el-select v-model="customerData.contactClassId">
                        <el-option v-for="item in customerType" :key="item.valueCustomerType" :label="item.label" :value="item.valueCustomerType"></el-option>
                    </el-select>
                </div>
                
                
                
                <div class="bgcolor">
                    <label>客户性质</label>
                    <el-select v-model="customerData.contactWorkPropertyId">
                        <el-option v-for="item in nature" :key="item.valueNature" :label="item.label" :value="item.valueNature"></el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>客户等级</label>
                    <el-select v-model="customerData.contactGradeId">
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
                    <el-select v-model="customerData.ficaOuid">
                        <el-option v-for="item in finance" :key="item.valueFinance" :label="item.label" :value="item.valueFinance"></el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>纳税登记号</label>
                    <el-input v-model="customerData.taxCode" placeholder="请录入登记号"></el-input>
                </div>
                <div class="bgcolor">
                    <label>业务地区区号</label>
                    <el-select v-model="customerData.opAreaId">
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
                    <el-select v-model="customerData.adAreaId">
                        <el-option v-for="item in areaAdministrative" :key="item.valueAreaAdministrative" :label="item.label" :value="item.valueAreaAdministrative"></el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>法人代表</label>
                    <el-input v-model="customerData.legalPerson" placeholder="请录入法人代表"></el-input>
                </div>
                <div class="bgcolor">
                    <label>注册地址</label>
                    <el-input v-model="customerData.regAddress" placeholder="请录入注册地址"></el-input>
                </div>
                <div class="bgcolor"><label>负责人</label><el-input v-model="customerData.manager" placeholder="请填写负责人"></el-input></div>
                <div class="bgcolor"><label>电话</label><el-input v-model="customerData.phone" placeholder="请填写电话"></el-input></div>
                
                <div class="bgcolor"><label>备注</label><el-input v-model="customerData.remark" placeholder="备注"></el-input></div>
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
                        <button class="erp_bt bt_add" @click="addColbank">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">增行</span>
                        </button>

                        <button class="erp_bt bt_auxiliary mb10">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_auxiliary.png">
                            </div>
                            <span class="btDetail">辅助功能</span>
                        </button>
                        
                
                        <el-table :data="bankData" stripe border style="width: 100%">
                            <el-table-column prop="settlementCurrencyId" label="结算币种" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.settlementCurrencyId" 
                                        type="text"    
                                        @click="handleBankChange(scope.$index,scope.row)"
                                        v-on:click="handleBankEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="accountNo" label="银行账号" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.accountNo" 
                                        type="text"    
                                        @click="handleBankChange(scope.$index,scope.row)"
                                        v-on:click="handleBankEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="accountName" label="银行账户" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.accountName" 
                                        type="text"    
                                        @click="handleBankChange(scope.$index,scope.row)"
                                        v-on:click="handleBankEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="openingBank" label="开户银行" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.openingBank" 
                                        type="text"    
                                        @click="handleBankChange(scope.$index,scope.row)"
                                        v-on:click="handleBankEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="contactPerson" label="联系人" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.contactPerson" 
                                        type="text"    
                                        @click="handleBankChange(scope.$index,scope.row)"
                                        v-on:click="handleBankEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="phone" label="联系电话" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.phone" 
                                        type="text"    
                                        @click="handleBankChange(scope.$index,scope.row)"
                                        v-on:click="handleBankEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="ifDefault" label="默认">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="bankData[scope.$index].ifDefault"></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column label='操作'>
                                <template slot-scope="scope" >
                                    <el-button v-on:click="handleBankDelete(scope.$index,scope.row)" type="text" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>

                    <el-tab-pane label="送货地址" name="address" class="getPadding" style="z-index:-1000">
                        <button class="erp_bt bt_add" @click="addColAddress">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">增行</span>
                        </button>

                        <button class="erp_bt bt_auxiliary">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_auxiliary.png">
                            </div>
                            <span class="btDetail">辅助功能</span>
                        </button>
                        
                
                        <el-table :data="addressData" stripe border style="width: 100%">
                            <el-table-column prop="addressType" label="地址类型" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.addressType" 
                                        type="text"    
                                        @click="handleAddressChange(scope.$index,scope.row)"
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                        <!-- <span>{{scope.row}}</span> -->
                                </template>
                            </el-table-column>

                            <el-table-column prop="completeAddress" label="供货地址" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.completeAddress" 
                                        type="text"    
                                        @click="handleAddressChange(scope.$index,scope.row)"
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="completeAddress" label="省" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.completeAddress" 
                                        type="text"    
                                        @click="handleAddressChange(scope.$index,scope.row)"
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="id" label="市" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.id" 
                                        type="text"    
                                        @click="handleAddressChange(scope.$index,scope.row)"
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="phone" label="区" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.phone" 
                                        type="text"   
                                        @click="handleAddressChange(scope.$index,scope.row)" 
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="contactPerson" label="联系人" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.contactPerson" 
                                        type="text"    
                                        @click="handleAddressChange(scope.$index,scope.row)"
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="contactPerson" label="联系电话" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.phone" 
                                        type="text"    
                                        @click="handleAddressChange(scope.$index,scope.row)"
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="ifDefault" label="默认">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="addressData[scope.$index].ifDefault"></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column label='操作'>
                                <template slot-scope="scope" >
                                    <el-button v-on:click="handleAddressDelete(scope.$index,scope.row)" type="text" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="使用组织" name="organization" style="z-index:-1000">
                        <button class="erp_bt bt_add" @click="addColOu">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">增行</span>
                        </button>

                        <button class="erp_bt bt_auxiliary">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_auxiliary.png">
                            </div>
                            <span class="btDetail">辅助功能</span>
                        </button>
                        
                
                        <el-table :data="ouData" stripe border style="width: 100%">
                            <el-table-column type="selection"></el-table-column>

                            <el-table-column prop="" label="" width="180">
                                <template slot-scope="scope">
                                    <span>{{scope.$index+1}}</span>
                                </template>
                            </el-table-column>

                            <el-table-column prop="ouId" label="组织单元" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.ouId" 
                                        type="text"    
                                        @click="handleOuChange(scope.$index,scope.row)"  
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/> 
                                        <!-- <span>{{scope.row}}</span> -->
                                </template>
                            </el-table-column>

                            <el-table-column prop="transport_method_id" label="运输方式" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.transport_method_id" 
                                        type="text"    
                                        @click="handleOuChange(scope.$index,scope.row)"  
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/> 
                                        <!-- <span>{{addOuList}}</span> -->
                                </template>
                            </el-table-column>

                            <el-table-column label='操作'>
                                <template slot-scope="scope" >
                                    <el-button v-on:click="handleOuDelete(scope.$index,scope.row)" type="text" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </div>
    </el-row>    
 <el-row>
    <el-col :span="22" class="auditInformation getPadding">
        <h4 class="h4">审计信息</h4>
        <div>
            <div class="bgcolor">
                <label>创建人</label>
                <el-input v-model="auditInformation.createName" placeholder="请录入创建人" disabled="disabled"></el-input>
            </div>

            <div class="bgcolor">
                <label>创建时间</label>
                <el-date-picker v-model="auditInformation.createTime" type="date" placeholder="选择创建时间" disabled="disabled"></el-date-picker>
            </div>

            <div class="bgcolor">
                <label>修改人</label>
                <el-input v-model="auditInformation.modifyName" placeholder="请录入修改人" disabled="disabled"></el-input>
            </div>

            <div class="bgcolor">
                <label>修改时间</label>
                <el-date-picker v-model="auditInformation.modifyTime" type="date" placeholder="选择修改时间" disabled="disabled"></el-date-picker>
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
export default({
    name:'customerModify',
    created:function(){
        let self = this;
        self.loadData();
    },
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
            organization: [{//所属组织
                valueOrganization:'1',
                label: '恒康'
            }, {
                valueOrganization:'2',
                label: '恒大'
            }, {
                valueOrganization:'3',
                label: '361度'
            }],
            customerType:[{//客户分类
                valueCustomerType:'1',
                label: '1'
            }, {
                valueCustomerType:'2',
                label: '2'
            }, {
                valueCustomerType:'3',
                label: '3'
            }],
            nature:[{//客户性质
                valueNature:'1',
                label: '1'
            }, {
                valueNature:'2',
                label: '2'
            }, {
                valueNature:'3',
                label: '3'
            }],
            grade:[{//客户等级
                valueGrade:'1',
                label: '1'
            }, {
                valueGrade:'2',
                label: '2'
            }, {
                valueGrade:'3',
                label: '3'
            }],
            sort:[{//客户类型
                valueSort:'1',
                label: '1'
            }, {
                valueSort:'2',
                label: '2'
            }, {
                valueSort:'3',
                label: '3'
            }],
            areaBusiness:[{//业务地区
                valueAreaBusiness:'1',
                label: '1'
            }, {
                valueAreaBusiness:'2',
                label: '2'
            }, {
                valueAreaBusiness:'3',
                label: '3'
            }],
            finance :[{//对应财务组织
                valueFinance:'1',
                label: '1'
            }, {
                valueFinance:'2',
                label: '2'
            }, {
                valueFinance:'3',
                label: '3'
            }],
            country :[{//国家/地区
                valueCountry:'1',
                label: '1'
            }, {
                valueCountry:'2',
                label: '2'
            }, {
                valueCountry:'3',
                label: '3'
            }],
            areaAdministrative :[{//行政地区
                valueAreaAdministrative:'1',
                label: '1'
            }, {
                valueAreaAdministrative:'2',
                label: '2'
            }, {
                valueAreaAdministrative:'3',
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

            isEdit:-1,

            customerData:'',//根据id获得的客户信息
            bankData:[],//根据groupId获得银行信息
            addressData:[],//获取的所有地址信息/也可以根据contactId获得地址信息
            ouData:[],//

            updataBankList:[],//需要修改的银行信息
            updataAddressList:[],//需要修改的地址信息
            updataOuList:[],//需要修改的组织信息

            addBankList:[],//需要添加的银行信息
            addAddressList:[],//需要添加的地址信息
            addOuList:[],//需要添加的组织信息
            x:0,
            y:0,
            z:0,
            xrows:[],
            yrows:[],
            zrows:[],

            createBankParams:{//创建银行的参数
                "groupId": 1,
                "contactId":'',
                "settlementCurrencyId": '',
                "accountNo": "",
                "accountName": "",
                "openingBank": '',
                "contactPerson": '',
                "phone": '',
                "isDefault": true
            },
            createAddressParams:{//创建地址的参数
                "groupId": 1,
                "contactId": '',
                "addressType": '',
                "addressId": '3',
                "completeAddress": "",
                "contactPerson": "",
                "phone": "",
                "isDefault": true
            },
            createOuParams:{//创建组织参数
                "groupId": 1,
                "contactId": '',
                "ouId": '',
                "transport_method_id": '',
                "is_default": true
            },
        }
    },
    methods:{
        //---获取数据--------------------------------------------
        loadData:function(){
            let self = this;
            if(self.$route.params.id!='default'){
                self.$destroy();
                //根据id获得的客户信息
                this.$axios.gets('/api/services/app/ContactManagement/Get',{id:self.$route.params.id}).then(function(res){
                    // console.log(res);
                    self.customerData = res.result;
                    self.createBankParams.contactId = self.$route.params.id;
                    self.createAddressParams.contactId = self.$route.params.id;
                    self.createOuParams.contactId = self.$route.params.id;
                    // console.log(self.createBankParams)
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
                
                //获取所有的组织信息，也可以用contactId获取
                this.$axios.gets('/api/services/app/ContactOuManagement/GetAll',{SkipCount:'0',MaxResultCount:'100'}).then(function(res){
                    // console.log(res);
                    self.ouData = res.result.items;
                })

            }
        },
        //------------------------------------------------------

        //---保存数据---------------------------------------------
        saveModify:function(){
            let self = this;
            self.saveCustomerModify();
            self.saveBankModify();
            self.saveAddressModify();
            self.saveOuModify();

            if(self.addBankList.length>0){
                self.createBank();
            };
            if(self.addAddressList.length>0){
                self.createAddress();
            };
            if(self.addOuList.length>0){
                self.createOu();
            }
            
        },
        saveCustomerModify:function(){//修改客户信息
            let self = this;

            this.$axios.puts('/api/services/app/ContactManagement/Update',self.customerData).then(function(res){
                self.open('修改客户信息成功','el-icon-circle-check','successERP');
            }),function(res){
                self.open('修改失败','el-icon-error','faildERP');
            }
        },
        saveBankModify:function(){//修改银行资料
            let self = this;
            if(self.updataBankList.length>0){
                for(let i in self.updataBankList){
                    this.$axios.puts('/api/services/app/ContactBankManagement/Update',self.updataBankList[i]).then(function(res){
                        console.log(res);
                        self.open('修改银行信息成功','el-icon-circle-check','successERP');
                        self.updataBankList = [];
                    }),function(res){
                        self.open('修改银行信息失败','el-icon-error','faildERP');
                    }
                }
            }
        },
        saveAddressModify:function(){//修改地址
            let self = this;
            if(self.updataAddressList.length>0){
                for(let i in self.updataAddressList){
                    this.$axios.puts('/api/services/app/ContactAddressManagement/Update',self.updataAddressList[i]).then(function(res){
                        console.log(res);
                        self.open('修改地址信息成功','el-icon-circle-check','successERP');
                        self.updataAddressList = [];
                    }),function(res){
                        self.open('修改地址信息失败','el-icon-error','faildERP');
                    }
                }
            }
        },
        saveOuModify:function(){//修改组织
            let self = this;
            if(self.updataOuList.length>0){
                for(let i in self.updataOuList){
                    this.$axios.puts('/api/services/app/ContactOuManagement/Update',self.updataOuList[i]).then(function(res){
                        console.log(res);
                        self.open('修改组织信息成功','el-icon-circle-check','successERP');
                        self.updataOuList = [];
                    }),function(res){
                        self.open('修改组织信息失败','el-icon-error','faildERP');
                    }
                }
            }
        },
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
        //-------------------------------------------------------

        // ---控制表格编辑----------------------------------------
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
            };

            if(flag){
                self.updataBankList.push(row);
                console.log(self.updataBankList)
            }
        },
        handleBankDelete:function(index,row){//银行表格内删除操作
            let self = this;
            this.bankData.splice(index,1);
            this.$axios.deletes('/api/services/app/ContactBankManagement/Delete',{id:row.id}).then(function(res){
                console.log(res);
                self.open('删除银行资料成功','el-icon-circle-check','successERP');
            }),function(res){
                self.open('删除银行资料失败','el-icon-error','faildERP');
            };
        },
        addColbank:function(){//银行增行
            let self = this;
                self.x++;
                let newCol = 'newCol'+self.x;
                self.xrows.newCol ={
                    "groupId": 1,
                    "contactId":self.createBankParams.contactId,
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

        handleAddressEdit:function(index,row){//地址信息编辑
            
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
        handleAddressDelete:function(index,row){//地址表格内删除操作
            let self = this;
            this.addressData.splice(index,1);
            this.$axios.deletes('/api/services/app/ContactAddressManagement/Delete',{id:row.id}).then(function(res){
                console.log(res);
                self.open('删除地址资料成功','el-icon-circle-check','successERP');
            }),function(res){
                self.open('删除地址资料失败','el-icon-error','faildERP');
            };
        },
        addColAddress:function(){//地址增行
            let self = this;
            self.y++;
            let newCol = 'newCol'+self.y;
            self.yrows.newCol ={
                "groupId": 1,
                "contactId": self.createAddressParams.contactId,
                "addressType": '',
                "addressId": '3',
                "completeAddress": "",
                "contactPerson": "",
                "phone": "",
                "isDefault": true
            };
            self.addressData.unshift(self.yrows.newCol)
            self.addAddressList.unshift(self.yrows.newCol)
        },


        handleOuEdit:function(index,row){//组织信息编辑
            
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
        handleOuDelete:function(index,row){//组织表格内删除操作
            let self = this;
            this.ouData.splice(index,1);
            this.$axios.deletes('/api/services/app/ContactOuManagement/Delete',{id:row.id}).then(function(res){
                console.log(res);
                self.open('删除地址资料成功','el-icon-circle-check','successERP');
            }),function(res){
                self.open('删除地址资料失败','el-icon-error','faildERP');
            };
        },
        addColOu:function(){//组织增行
            let self = this;
            self.z++;
            let newCol = 'newCol'+self.z;
            self.zrows.newCol ={
                "groupId": 1,
                "contactId": self.createOuParams.contactId,
                "ouId": '',
                "transport_method_id": '',
                "is_default": true
            };
            self.ouData.unshift(self.zrows.newCol)
            self.addOuList.unshift(self.zrows.newCol)
        },    
        //-----------------------------------------------------------

        //---路由------open------------------------------------------
        back(){//点击新增跳转
            this.$store.state.url='/customer/customerList/default'
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
        //------------------------------------------------------
        
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

.customerBasicForm .tabZoo .erp_bt:first-child{
    margin-left: 0;
}
.customerBasicForm .nopadding{
    padding-top: 0;
}
.customerBasicForm .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.customerBasicForm .el-table td{
    padding: 3px 0;
}
.customerBasicForm .el-table__body{
    text-align: center;
}
.customerBasicForm .el-table .cell{
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
.input-bgw{
    background: white;
    text-align: center;
}
.input-bgp{
    background: #FAFAFA;
    text-align: center;
}
  </style>
  
