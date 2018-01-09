<template>
<!-- 集团管理-组织单元 -->
 <div class="detailForm">
     <el-row>
         <el-col :span="24">
            <el-col :span='2' class="ml10"><span class="btn" @click="saveAjax">保存</span></el-col>
            <el-col :span='2' class="ml10"><span class="btn">取消</span></el-col>
        </el-col>
     </el-row>
     <el-row>
            <!--公司信息  -->
        <el-col :span="2">     
            <h4>公司信息</h4>
        </el-col> 
        <el-col :span="20" :class="{slidup : showCompany}" class="down"> 
        
    
        <el-col :span="5" class="bgcolor">
            <label>编码</label>
            <el-input v-model="companyInformation.node" :disabled="true"></el-input>
        </el-col> 
    
    
        <el-col :span="5" class="bgcolor">
                <label>名称</label>
            <el-input v-model="companyInformation.handNum" placeholder="请录入手工单号"></el-input>
        </el-col>
    
    
        <el-col :span="5" class="bgcolor">
            <label>全称</label>
            <el-input v-model="companyInformation.warehouse" placeholder="请选择仓库"></el-input>
        </el-col>
    
    
        <el-col :span="5" class="bgcolor">
            <label>上级业务单元</label>
            <el-select v-model="valueHigherUnit">
                <el-option v-for="item in higherUnit" :key="item.valueHigherUnit" :label="item.label" :value="item.valueHigherUnit">
                </el-option>
            </el-select>
        </el-col>

        <el-col :span="5" class="bgcolor"><label><small>*</small>启用月份</label><el-date-picker v-model="companyInformation.month" type="month" placeholder="请选择月份"></el-date-picker></el-col>
          
        <el-col :span="5" class="bgcolor">
            <label>本位币种</label>
            <el-select v-model="valueMoney">
                <el-option v-for="item in money" :key="item.valueMoney" :label="item.label" :value="item.valueMoney">
                </el-option>
            </el-select>
        </el-col>
            
            
            
        <el-col :span="5" class="bgcolor">
            <label>所属公司</label>
            <el-select v-model="valueCompany">
                <el-option v-for="item in company" :key="item.valueCompany" :label="item.label" :value="item.valueCompany">
                </el-option>
            </el-select>
        </el-col>
        <el-col :span="5" class="bgcolor"><label>联系人</label><el-input v-model="companyInformation.contacts" placeholder="请填入联系人"></el-input></el-col>
        <el-col :span="5" class="bgcolor"><label>电话</label><el-input v-model="companyInformation.phone" placeholder="请填入电话"></el-input></el-col>
        <el-col :span="5" class="bgcolor"><label>地址</label><el-input v-model="companyInformation.address" placeholder="请填入地址"></el-input></el-col>
        <el-col :span="5" class="bgcolor"><label>备注</label><el-input v-model="companyInformation.remarks" placeholder="备注"></el-input></el-col>
            
        <el-col :span="5" class="bgcolor">
            <label>启用状态</label>
            <el-select v-model="valueState">
                <el-option v-for="item in state" :key="item.valueState" :label="item.label" :value="item.valueState">
                </el-option>
            </el-select>
        </el-col>
                        
               
        </el-col>
    <el-col :span="2">   
        <a class="upBtn" @click="showCompany = !showCompany">
            收起<span class="el-icon-arrow-down"></span>
        </a>
    </el-col>                                                                            
</el-row>
    
    <!--组织类型  -->
    <el-row>
        <el-col :span="2"> <h4>组织类型</h4></el-col>
        <el-col :span="20"> 
            <el-col :span="6"> 
       
                   
                        <el-checkbox v-model="count.isCheckCompany" @change="checkCompany">公司</el-checkbox>
                        
                
                        <el-checkbox v-model="count.isCheckFinance" @change="checkFinance">财务</el-checkbox>
                    
                
                        <el-checkbox v-model="count.isCheckBusiness" @change="checkBusiness">业务</el-checkbox>
                                                
           
            </el-col>              
        </el-col>           
 </el-row> 
    <!--基础信息  -->  
    <el-row> 
        <el-col :span="2"><h4>基础信息</h4></el-col>
       <el-col :span="20">
            <el-col :span="5" class="bgcolor"><label>版本号</label><el-input v-model="basicInformation.version" placeholder="备注" :disabled="true"></el-input></el-col>
            <el-col :span="5" class="bgcolor"><label><small>*</small>版本开始日期</label><el-date-picker v-model="basicInformation.start" type="date" placeholder="请录入开始日期"></el-date-picker></el-col>
            <el-col :span="5" class="bgcolor"><label><small>*</small>版本结束日期</label><el-date-picker v-model="basicInformation.finish" type="date" placeholder="请录入结束日期"></el-date-picker></el-col>
       </el-col> 
   </el-row>  
    <!-- 公司业务财务bootTab标签页 -->
    <el-row>
         
    <div class="tabZoo">
        <el-col :span="24">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="公司" name="company" v-if="count.isCheckCompany">
                     <el-col :span="24">
                          <div class="companyInfo">
                            <el-col :span="24">
                                <el-col :span="5"  class="getPadding">
                                
                                    <el-checkbox v-model="group">集团公司</el-checkbox>
                                    
                            
                                    <el-checkbox v-model="isUse">是否启用</el-checkbox>
                                        
                                </el-col> 
                            </el-col>
                            <el-col :span="22"  class="getPadding">
                                <el-col :span="5" class="bgcolor"><label>上级公司</label><el-input v-model="company.higher" placeholder="请选择上级公司"></el-input></el-col>
                                <el-col :span="5" class="bgcolor"><label>法人代表</label><el-input v-model="company.representative" placeholder="请输入法人代表"></el-input></el-col>
                            </el-col>
                            <el-col :span="22" class="getPadding">
                                <h4>审计信息</h4>
                                <div :class="{slidUp : showInformation}" class="down">
                                    <el-col :span="5" class="bgcolor"><label>创建人</label><el-input v-model="auditInformation.createName" :disabled="true"></el-input></el-col>
                                    <el-col :span="5" class="bgcolor"><label>创建时间</label><el-input v-model="auditInformation.createTime" :disabled="true"></el-input></el-col>
                                    <el-col :span="5" class="bgcolor"><label>修改人</label><el-input v-model="auditInformation.modifyName" :disabled="true"></el-input></el-col>
                                    <el-col :span="5" class="bgcolor"><label>修改时间</label><el-input v-model="auditInformation.modifyTime" :disabled="true"></el-input></el-col>
                                    <el-col :span="5" class="bgcolor"><label>启用日期</label><el-input v-model="auditInformation.startTime" :disabled="true"></el-input></el-col>
                                    <el-col :span="5" class="bgcolor"><label>封存日期</label><el-input v-model="auditInformation.finishTime" :disabled="true"></el-input></el-col>
                                    <el-col :span="5" class="bgcolor"><label>封存人</label><el-input v-model="auditInformation.finishName" :disabled="true"></el-input></el-col>    
                                </div>                                  
                            </el-col>
                    
                         <el-col :span="2">
                            <a class="upBtn" @click="showInformation = !showInformation">
                                收起<span class="el-icon-arrow-down"></span>
                            </a>
                         </el-col>  
                         </div>
                     </el-col>   
                </el-tab-pane>
                <el-tab-pane label="财务" name="finance" v-if="count.isCheckFinance">财务</el-tab-pane>
                <el-tab-pane label="业务" name="business" v-if="count.isCheckBusiness">业务</el-tab-pane>
    
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
            activeName: 'company',
            basicInformation:{//基础信息
                version:'sts11s',
                start:'2017.11.11',
                finish:'',
            },
            companyInformation:{//公司信息
                node:"PO1711060111111-002",
                month:'',
                handNum:'',
                warehouse:'',
                contacts:"",
                phone:"123456",
                address:"",
                remarks:"",
            },
            auditInformation:{//审计信息
                    createName:"张三",
                    createTime:"2001.12.12",
                    modifyName:"李四",
                    modifyTime:"2001.12.12",
                    startTime:"2001.12.12",
                    finishTime:"2001.12.12",
                    finishName:"李",
            },
            company:{//公司
                higher:"恒康",
                representative:"lioman",    
            },  
            ischeck:{isCheckCompany:true,//公司复选框初始选种状态
                    isCheckFinance:false,//财务复选框初始选种状态
                    isCheckBusiness:false}//业务复选框初始选种状态 
            ,
            
            group:true,//集团公司复选框初始选种状态
            isUse:false,//是否启用复选框初始选种状态

            showInformation:false,//初始默认审计信息状态展开
            showCompany:false,//初始默认公司计信息状态展开  
            valueHigherUnit: '无',//初始上级单元
            valueMoney:'请选择本位币种',//初始本位币种
            valueCompany:'请选择所属公司',//初始所属公司
            valueState:'启用',//初始启用状态 
        
            higherUnit: [{//上级单元数据
                valueHigherUnit: '选项1',
                label: '361度'
            }, {
                valueHigherUnit: '选项2',
                label: '恒康'
            }, {
                valueHigherUnit: '选项3',
                label: '红旗连锁'
            }],
            money: [{//本位币种
                valueMoney:'选项1',
                label: 'RMB'
            }, {
                valueMoney:'选项2',
                label: '美元'
            }, {
                valueMoney:'选项3',
                label: '英镑'
            },{
                valueMoney:'选项4',
                label: '日元'
            }, {
                valueMoney:'选项5',
                label: '韩元'
            }, {
                valueMoney:'选项6',
                label: '越南盾'
            },{
                valueMoney:'选项7',
                label: '泰铢'
            }, {
                valueMoney:'选项8',
                label: '港币'
            }, {
                valueMoney:'选项9',
                label: '银元'
            }],
            company: [{ //   所属公司数据
                valueCompany:'选项1',
                label: '恒康'
            }, {
                valueCompany:'选项2',
                label: '361度'
            }, {
                valueCompany:'选项3',
                label: '红旗连锁'
            }],
            state: [{ //启用状态数据
                valueState:'选项1',
                label: '启用'
            }, {
                valueState:'选项2',
                label: '停用'
            }]          
        }
    },
    created:function(){//.detailForm实例被创建之后调用ajaxGet函数
   
           this.$axios.posts('/api/services/app/GroupManagement/Create',{
              
  "groupCode": "1",
  "groupName": "2",
  "groupFullname": "123",
  "mnemonic": "r",
  "areaId": 0,
  "accountPeriodId": 0,
  "currencyID": "123",
  "industry": "12",
  "phone": "123",
  "fax": "stri123g",
  "address": "123",
  "remark": "1",
  "status": 0

           }).then(function (res) {
                //成功之后处理逻辑
                console.log(res)
                },function (res) {
                //失败之后处理逻辑
                console.log(res)
                });
        },

    watch:{
        ischeck: {
        handler: function (val, oldVal) { 
            var x=val.isCheckCompany || val.isCheckFinance
            if(val.isCheckCompany || val.isCheckFinance || val.isCheckBusiness){}else{
                this.ischeck.isCheckCompany=true;
                this.activeName='company';
            } },
        deep: true,
        immediate: true
        },
    }, 
    computed:{
        count () {
            return this.ischeck;
            }
    },       
    methods:{
         handleClick(tab, event) {
            console.log(tab, event);
        },
        checkFinance:function(e){
            
            if(e){//选中财务
                this.count.isCheckCompany=true;
                this.activeName='finance';
            }else{
                this.activeName='company';
            }
        },
        checkCompany:function(e){
            if(e){//选中公司
                this.activeName='company';
            }else{
                this.activeName='business';
                if(this.count.isCheckFinance){
                     this.count.isCheckFinance=false;
                }
            }
        },
        checkBusiness:function(e){ 
            if(e){//选中业务
                this.activeName='business';
            }else{
                if(this.count.isCheckFinance){
                    this.activeName='finance';
                }else if(!this.count.isCheckFinance&&this.count.isCheckCompany){
                    this.activeName='company';
                }
            }
        },
        saveAjax:function(){
            let _this=this;
            _this.$axios.posts('/api/services/app/GroupManagement/Create',{
              
  "groupCode": "1",
  "groupName": "2",
  "groupFullname": "123",
  "mnemonic": "r",
  "areaId": 0,
  "accountPeriodId": 0,
  "currencyID": "123",
  "industry": "12",
  "phone": "123",
  "fax": "stri123g",
  "address": "123",
  "remark": "1",
  "status": 0

           }).then(function (res) {
                //成功之后处理逻辑
                console.log(res)
                },function (res) {
                //失败之后处理逻辑
                console.log(res)
                });
        },

        }

    })        
    
  </script>

  <style>
  .detailForm .down{
    overflow: hidden;
    transition: max-height 0.5s;
    -moz-transition: max-height 0.5s;
    -webkit-transition: max-height 0.5s;
    -o-transition: max-height 0.5s; 
    max-height:  900px;
  }
  .detailForm .slidup{
       max-height: 90px;
  }
  .detailForm .slidUp{
      max-height: 45px;
  }

    .detailForm .el-button--primary{
        background-color: #82AAFC;
        border: none;
    }

  .detailForm .el-row{
      margin-bottom: 15px;
  }


  .detailForm .companyInfo>.el-col:first-child,
  .detailForm .companyInfo .el-col h4{
      margin-bottom: 15px;
  }
  .detailForm .upBtn{
      font-size: 12px;
      color: #BCBCBC;
      cursor: pointer;
  }
  .detailForm .upBtn .el-icon-arrow-down{
      margin-left: 5px;
  }
 .detailForm .tabZoo{
     overflow: hidden;
     background-color: #fff;
 }
 .detailForm .tabZoo .bgcolor{
     border: 1px solid #BCBCBC;
     border-radius: 4px;
 }
 .detailForm .tabZoo .getPadding,.tabZoo .el-tabs__nav-scroll{
     padding: 0 20px;
 }
 .detailForm .tabZoo .el-tabs__active-bar{
     width: 28px!important;
 }
.detailForm .btn{
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
.detailForm .ml10{
   margin-left: 10px;
}
 
  </style>
  
