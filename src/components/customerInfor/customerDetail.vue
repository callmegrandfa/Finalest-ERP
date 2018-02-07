<template>
 <div class="customerBasicForm">
     <el-row>
         <el-col :span="24"  class="fixed">
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
                    <el-select v-model="createContactParams.ouId" placeholder="请选择所属组织">
                        <el-option v-for="item in ou" :key="item.ou" :label="item.label" :value="item.ou"></el-option>
                    </el-select>
                </div> 


                <div class="bgcolor">
                    <label>编码</label>
                    <el-input v-model="createContactParams.contact" placeholder="请录入编码"></el-input>
                </div>


                <div class="bgcolor">
                    <label>名称</label>
                    <el-input v-model="createContactParams.contactName" placeholder="请录入名称"></el-input>
                </div>


                <div class="bgcolor">
                    <label>全称</label>
                    <el-input v-model="createContactParams.contactFullName" placeholder="请录入全称"></el-input>
                </div>

                <div class="bgcolor">
                    <label>助记码</label>
                    <el-input v-model="createContactParams.mnemonic" placeholder="请录入助记码"></el-input>
                </div>
                    
                <div class="bgcolor">
                    <label>客户分类</label>
                    <el-select v-model="createContactParams.contactClassId" placeholder="请选择客户类型">
                        <el-option v-for="item in customerType" :key="item.valueCustomerType" :label="item.label" :value="item.valueCustomerType"></el-option>
                    </el-select>
                </div>
                             
                <div class="bgcolor">
                    <label>客户性质</label>
                    <el-select v-model="createContactParams.contactWorkPropertyId" placeholder="请选择客户性质">
                        <el-option v-for="item in customerNature" :key="item.valueNature" :label="item.label" :value="item.valueNature"></el-option>
                    </el-select>
                </div>

                <div class="bgcolor">
                    <label>客户等级</label>
                    <el-select v-model="createContactParams.contactGradeId" placeholder="请选择客户登记">
                        <el-option v-for="item in customerGrade" :key="item.valueGrade" :label="item.label" :value="item.valueGrade"></el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>客户类型</label>
                    <el-select>
                        <el-option v-for="item in sort" :key="item.valueSort" :label="item.label" :value="item.valueSort"></el-option>
                    </el-select>
                </div>   
                <div class="bgcolor">
                    <label>对应财务组织</label>
                    <el-select v-model="createContactParams.ficaOuId" placeholder="请选择财务组织">
                        <el-option v-for="item in ficaOu" :key="item.valueFinance" :label="item.label" :value="item.valueFinance"></el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>纳税登记号</label>
                    <el-input v-model="createContactParams.taxCode" placeholder="请录入登记号"></el-input>
                </div>
                <div class="bgcolor">
                    <label>业务地区区号</label>
                    <el-select v-model="createContactParams.opAreaId">
                        <el-option v-for="item in opArea" :key="item.valueAreaBusiness" :label="item.label" :value="item.valueAreaBusiness"></el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>国家/地区</label>
                    <el-select>
                        <el-option v-for="item in country" :key="item.valueCountry" :label="item.label" :value="item.valueCountry"></el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>行政地区</label>
                    <el-select v-model="createContactParams.adAreaId" placeholder="请选择行政区域">
                        <el-option v-for="item in adArea" :key="item.adArea" :label="item.label" :value="item.adArea"></el-option>
                    </el-select>
                </div>
                <div class="bgcolor">
                    <label>法人代表</label>
                    <el-input v-model="createContactParams.legalPerson" placeholder="请录入法人代表"></el-input>
                </div>

                <div class="bgcolor">
                    <label>注册地址</label>
                    <el-input v-model="createContactParams.regAddress" placeholder="请录入注册地址"></el-input>
                </div>

                <div class="bgcolor">
                    <label>负责人</label>
                    <el-input v-model="createContactParams.manager" placeholder="请填写负责人"></el-input>
                </div>
                
                <div class="bgcolor">
                    <label>电话</label>
                    <el-input v-model="createContactParams.phone" placeholder="请填写电话"></el-input>
                </div>
                
                <div class="bgcolor">
                    <label>备注</label>
                    <el-input v-model="createContactParams.remark" placeholder="备注"></el-input>
                </div>
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
                            <span class="btDetail">新增</span>
                        </button>

                        <button class="erp_bt bt_excel mb10">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_excel.png">
                            </div>
                            <span class="btDetail">Excel</span>
                        </button>

                        <button class="erp_bt bt_del">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_del.png">
                            </div>
                            <span class="btDetail">删除</span>
                        </button>

                        <button class="erp_bt bt_auxiliary">
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
                                        @change='handleAddressChange(scope.$index,scope.row)'
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="completeAddress" label="供货地址" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.addressType" 
                                        type="text"    
                                        @change='handleAddressChange(scope.$index,scope.row)'
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="completeAddress" label="省" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.completeAddress" 
                                        type="text"    
                                        @change='handleAddressChange(scope.$index,scope.row)'
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="id" label="市" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.id" 
                                        type="text"    
                                        @change='handleAddressChange(scope.$index,scope.row)'
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="phone" label="区" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.phone" 
                                        type="text"    
                                        @change='handleAddressChange(scope.$index,scope.row)'
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="contactPerson" label="联系人" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.contactPerson" 
                                        type="text"    
                                        @change='handleAddressChange(scope.$index,scope.row)'
                                        v-on:click="handleAddressEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="contactPerson" label="联系电话" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.contactPerson" 
                                        type="text"    
                                        @change='handleAddressChange(scope.$index,scope.row)'
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
                                    <el-button v-on:click="handleAddressDelete(scope.$index)" type="text" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>

                    <el-tab-pane label="使用组织" name="organization" class="getPadding" style="z-index:-1000">
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
                            <el-table-column prop="addressType" label="地址类型" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.addressType" 
                                        type="text"    
                                        @change='handleOuChange(scope.$index,scope.row)'
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="completeAddress" label="供货地址" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.addressType" 
                                        type="text"    
                                        @change='handleOuChange(scope.$index,scope.row)'
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="completeAddress" label="省" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.completeAddress" 
                                        type="text"    
                                        @change='handleOuChange(scope.$index,scope.row)'
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/>  
                                </template>
                            </el-table-column>

                            <el-table-column prop="id" label="市" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.id" 
                                        type="text"    
                                        @change='handleOuChange(scope.$index,scope.row)'
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/>  
                                </template>
                            </el-table-column>

                            <el-table-column prop="phone" label="区" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.phone" 
                                        type="text"    
                                        @change='handleOuChange(scope.$index,scope.row)'
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="contactPerson" label="联系人" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.contactPerson" 
                                        type="text"    
                                        @change='handleOuChange(scope.$index,scope.row)'
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/>  
                                </template>
                            </el-table-column>

                            <el-table-column prop="contactPerson" label="联系电话" width="180">
                                <template slot-scope="scope">
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.contactPerson" 
                                        type="text"    
                                        @change='handleOuChange(scope.$index,scope.row)'
                                        v-on:click="handleOuEdit(scope.$index,scope.row)"/> 
                                </template>
                            </el-table-column>

                            <el-table-column prop="ifDefault" label="默认">
                                <template slot-scope="scope">
                                    <el-checkbox v-model="ouData[scope.$index].ifDefault"></el-checkbox>
                                </template>
                            </el-table-column>

                            <el-table-column label='操作'>
                                <template slot-scope="scope" >
                                    <el-button v-on:click="handleOuDelete(scope.$index)" type="text" size="small">删除</el-button>
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
            <div class="bgcolor"><label>创建人</label><el-input v-model="auditInformation.createName" placeholder="创建人" disabled="disabled"></el-input></div>
            <div class="bgcolor"><label>创建时间</label><el-date-picker v-model="auditInformation.createTime" type="date" placeholder="创建时间" disabled="disabled"></el-date-picker></div>
            <div class="bgcolor"><label>修改人</label><el-input v-model="auditInformation.modifyName" placeholder="修改人" disabled="disabled"></el-input></div>
            <div class="bgcolor"><label>修改时间</label><el-date-picker v-model="auditInformation.modifyTime" type="date" placeholder="修改时间" disabled="disabled"></el-date-picker></el-input></div>
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
            showCompany:false,//初始默认公司计信息状态展开  
            auditInformation:{//审计信息
                createName:"",
                createTime:"",
                modifyName:"",
                modifyTime:"",
                startTime:"",
                finishTime:"",
                finishName:"",
            },

            ou: [{//所属组织
                    ou:'1',
                    label: '恒康'
                }, {
                    ou:'2',
                    label: '恒大'
                }, {
                    ou:'3',
                    label: '361度'
                }],

            customerType:[{//客户类型
                valueCustomerType:'1',
                label: '选项1'
            }, {
                valueCustomerType:'2',
                label:'选项2' 
            }, {
                valueCustomerType:'3',
                label:'选项3' 
            }],

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

            customerGrade:[{//客户等级
                valueGrade:'1',
                label: '选项1'
            }, {
                valueGrade:'2',
                label: '选项2'
            }, {
                valueGrade:'3',
                label: '选项3'
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
            
            ficaOu :[{//对应财务组织
                valueFinance:'1',
                label: '选项1'
            }, {
                valueFinance:'2',
                label: '选项2'
            }, {
                valueFinance:'3',
                label: '选项3'
            }],

            opArea:[{//业务地区
                valueAreaBusiness:'1',
                label: '选项1'
            }, {
                valueAreaBusiness:'2',
                label: '选项2'
            }, {
                valueAreaBusiness:'3',
                label: '选项3'
            }],

            country :[{//国家/地区
                valueCountry:'1',
                label: '选项1'
            }, {
                valueCountry:'2',
                label: '选项2'
            }, {
                valueCountry:'3',
                label: '选项3'
            }],
            adArea :[{//行政地区
                adArea:'1',
                label: '选项1'
            }, {
                adArea:'2',
                label: '选项2'
            }, {
                adArea:'3',
                label: '选项3'
            }],
            activeName: 'bank',//tabs标签页默认激活name
            supplier:true,//同为供应商
            credit :true,//信用管理

            createContactParams:{//创建客户资料参数
                'groupId':1,//集团Id
                'ouId':'',//组织单元id
                'contact':'',//供应商编码
                'contactName':'',//客户名称
                'contactFullName':'',//供应商全称
                'mnemonic':'',//助记码
                'contactClassId':'',//客户分类
                'contactWorkPropertyId':'',//客户性质
                'contactGradeId':'',//客户/供应商等级ID,
                'isSupplier':0,//是否为供应商
                'isCustomer':0,//是否客户
                'ficaOuId':'',//财务组织单元 ID
                'taxCode':'',//纳税登记号
                'opAreaId':'',//业务地区
                'adAreaId':'',//行政地区
                'legalPerson':'',//法人代表
                'regAddress':'',// 注册地址
                'manager':'',//负责人
                'phone':'',//电话
                'remark':'',//备注
                'creditMgt':true,//信用管理
                },

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
                "addressId": '',
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
            bankData:[],//银行数据列表，开始为空
            updataBankList:[],//需要修改的银行信息
            addBankList:[],//需要添加的银行信息

            addressData:[],//地址数据列表，开始为空
            updataAddressList:[],//修改的银行信息
            addAddressList:[],//需要添加的地址信息

            ouData:[],//组织数据列表，开始为空
            updataOuList:[],//修改的组织信息
            addOuList:[],//需要添加的组织信息

            x:0,
            y:0,
            z:0,
            xrows:[],
            yrows:[],
            zrows:[],
            backId:'',
            customerData:'',//根据id获得的客户信息
        }
    },
    methods:{
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
        handleOuDelete:function(index){//地址表格内删除操作
            let self = this;
            self.ouData.splice(index,1);
            self.addOuList.splice(index,1);
            // this.$axios.deletes('/api/services/app/ContactAddressManagement/Delete',{id:row.id}).then(function(res){
            //     console.log(res);
            //     self.open('删除地址资料成功','el-icon-circle-check','successERP');
            // }),function(res){
            //     self.open('删除地址资料失败','el-icon-error','faildERP');
            // };
        },
        //------------------------------------------------------------

        //---控制跳转------------------------------------------------
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
        //----------------------------------------------------------
        
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
.customerBasicForm .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}

  </style>
  
