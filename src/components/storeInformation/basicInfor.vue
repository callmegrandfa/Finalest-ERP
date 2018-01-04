<template>
 <div class="basicForm">
     <el-row>
         <el-col :span="24"> 
             <div class="operationBtn">
                <el-col :span='2' class="ml10"><span class="btn">新增</span></el-col>
                <el-col :span='2' class="ml10"><span class="btn">修改</span></el-col>
                <el-col :span='2' class="ml10"><span class="btn">保存</span></el-col>
                <el-col :span='2' class="ml10"><span class="btn">取消</span></el-col>
                <el-col :span='2' class="ml10"><span class="btn">查询</span></el-col>
                <el-col :span='2' class="ml10"><span class="btn">打印</span></el-col>
                <el-col :span='2' class="ml10"><span class="btn">启用/停用</span></el-col>
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
                <label>简称</label>
                <el-select v-model="valueAbbreviation">
                    <el-option v-for="item in abbreviation" :key="item.valueAbbreviation" :label="item.label" :value="item.valueAbbreviation"></el-option>
                </el-select>
            </el-col>

            <el-col :span="5" class="bgcolor">
                <label>助记码</label>
                <el-input v-model="data.mnemonicCode" placeholder="请录入助记码"></el-input>
            </el-col>
                


            <el-col :span="5" class="bgcolor">
                <label>店铺类型</label>
                <el-select v-model="valueShopType">
                    <el-option v-for="item in shopType" :key="item.valueShopType" :label="item.label" :value="item.valueShopType"></el-option>
                </el-select>
            </el-col>
            
            
            
            <el-col :span="5" class="bgcolor">
                <label>店铺性质</label>
                <el-select v-model="valueNature">
                    <el-option v-for="item in nature" :key="item.valueNature" :label="item.label" :value="item.valueNature"></el-option>
                </el-select>
            </el-col>
            <el-col :span="5" class="bgcolor">
                <label>店铺等级</label>
                <el-select v-model="valueGrade">
                    <el-option v-for="item in grade" :key="item.valueGrade" :label="item.label" :value="item.valueGrade"></el-option>
                </el-select>
            </el-col>
            <el-col :span="5" class="bgcolor">
                <label>对应仓库</label>
                <el-select v-model="valueWarehouse">
                    <el-option v-for="item in warehouse" :key="item.valueWarehouse" :label="item.label" :value="item.valueWarehouse"></el-option>
                </el-select>
            </el-col>   
            <el-col :span="5" class="bgcolor">
                <label>业务地区</label>
                <el-select v-model="valueAreaBusiness">
                    <el-option v-for="item in areaBusiness" :key="item.valueAreaBusiness" :label="item.label" :value="item.valueAreaBusiness"></el-option>
                </el-select>
            </el-col>
            <el-col :span="5" class="bgcolor">
                <label>行政地区</label>
                <el-select v-model="valueAreaAdministrative">
                    <el-option v-for="item in areaAdministrative" :key="item.valueAreaAdministrative" :label="item.label" :value="item.valueAreaAdministrative"></el-option>
                </el-select>
            </el-col>
            <el-col :span="5" class="bgcolor">
                <label>开店日期</label>
                <el-date-picker v-model="data.openData" type="date" placeholder="选择日期"></el-date-picker>
            </el-col>
            <el-col :span="5" class="bgcolor">
                <label>主营品牌</label>
                <el-select v-model="valueBrand">
                    <el-option v-for="item in brand" :key="item.valueBrand" :label="item.label" :value="item.valueBrand">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="5" class="bgcolor"><label>负责人</label><el-input v-model="data.chargePerson" placeholder="请填写负责人"></el-input></el-col>
            <el-col :span="5" class="bgcolor"><label>电话</label><el-input v-model="data.telephone" placeholder="请填写电话"></el-input></el-col> 
            <el-col :span="5" class="bgcolor">
            <label>商圈</label>
                <el-select v-model="valueTradingArea">
                    <el-option v-for="item in tradingArea" :key="item.valueTradingArea" :label="item.label" :value="item.valueTradingArea">
                    </el-option>
                </el-select>
            </el-col> 
            <el-col :span="5" class="bgcolor"><label>店铺地址</label><el-input v-model="data.address" placeholder="请填入商铺地址"></el-input></el-col>
            <el-col :span="5" class="bgcolor"><label>经度</label><el-input v-model="data.longitude" placeholder="经度"></el-input></el-col> 
            <el-col :span="10" class="bgcolor moreWidth"><label>纬度</label><el-input v-model="data.latitude" placeholder="纬度"></el-input></el-col>  
            <el-col :span="10" class="bgcolor noColor moreWidth"><el-checkbox v-model="isUse">允许使用</el-checkbox></el-col>   
            <el-col :span="10" class="bgcolor moreWidth"><label>备注</label><el-input v-model="data.remarks" placeholder="备注"></el-input></el-col>   
        </el-col>
        <el-col :span="2">   
            <a class="upBtn" @click="showCompany = !showCompany">
                收起<span class="el-icon-arrow-down"></span>
            </a>
        </el-col>                                                                            
</el-row>
    

    <!-- 公司业务财务bootTab标签页 -->
    <el-row> 
        <div class="tabZoo">
            <el-col :span="24">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="经营品牌" name="brand" class="getPadding">
                        <el-table :data="tableData" stripe border style="width: 100%">
                            <el-table-column prop="businessBrand" label="经营品牌" width="180"></el-table-column>
                            <el-table-column prop="shopGrade" label="品牌店铺等级" width="180"></el-table-column>
                            <el-table-column prop="salesLevel" label="品牌销售等级" width="180"></el-table-column>
                            <el-table-column prop="newGrade" label="品牌新品等级" width="180"></el-table-column>
                            <el-table-column prop="remarks" label="备注" width="180"></el-table-column>
                            <el-table-column prop="creationTime" label="创建时间" width="180"></el-table-column>
                            <el-table-column prop="founder" label="创建人" width="180"></el-table-column>
                            <el-table-column ></el-table-column>
                        </el-table>
                        <el-col :span="22" class="auditInformation">
                            <h4>审计信息</h4>
                            <div>
                                <el-col :span="5" class="bgcolor"><label>创建人</label><el-input v-model="auditInformation.createName" placeholder="请录入创建人"></el-input></el-col>
                                <el-col :span="5" class="bgcolor"><label>创建时间</label><el-date-picker v-model="auditInformation.createTime" type="date" placeholder="选择创建时间"></el-date-picker></el-col>
                                <el-col :span="5" class="bgcolor"><label>修改人</label><el-input v-model="auditInformation.modifyName" placeholder="请录入修改人"></el-input></el-col>
                                <el-col :span="5" class="bgcolor"><label>修改时间</label><el-date-picker v-model="auditInformation.modifyTime" type="date" placeholder="选择修改时间"></el-date-picker></el-input></el-col>
                                <el-col :span="5" class="bgcolor"><label>启用日期</label><el-date-picker v-model="auditInformation.startTime" type="date" placeholder="选择启用日期"></el-date-picker></el-col>
                                <el-col :span="5" class="bgcolor"><label>封存日期</label><el-date-picker v-model="auditInformation.finishTime" type="date" placeholder="选择封存日期"></el-date-picker></el-col>
                                <el-col :span="5" class="bgcolor"><label>封存人</label><el-input v-model="auditInformation.finishName" placeholder="请录入封存人"></el-input></el-col>    
                            </div>                                 
                        </el-col>
                    </el-tab-pane>
                    <el-tab-pane label="联系人" name="contacts">联系人</el-tab-pane>
                    <el-tab-pane label="网店" name="shop">网店</el-tab-pane>
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
                businessBrand: '三叶',
                shopGrade: '4',
                salesLevel: '4',
                newGrade:'5',
                remarks:'销量好',
                creationTime:'',
                founder:'李四'
                }, {
                businessBrand: '三叶',
                shopGrade: '4',
                salesLevel: '4',
                newGrade:'5',
                remarks:'销量好',
                creationTime:'',
                founder:'李四'
                },{
                businessBrand: '三叶',
                shopGrade: '4',
                salesLevel: '4',
                newGrade:'5',
                remarks:'销量好',
                creationTime:'',
                founder:'李四'
                },{
                businessBrand: '三叶',
                shopGrade: '4',
                salesLevel: '4',
                newGrade:'5',
                remarks:'销量好',
                creationTime:'',
                founder:'李四'
                },],
            auditInformation:{//审计信息
                createName:"张三",
                createTime:"2001.12.12",
                modifyName:"李四",
                modifyTime:"2001.12.12",
                startTime:"2001.12.12",
                finishTime:"2001.12.12",
                finishName:"李",
            },
            data:{
                code:'',//编码
                name:'',//名称
                mnemonicCode:'PO1711060111111',//助记码
                chargePerson:'',//负责人
                telephone:'',//电话
                address:'',//店铺地址
                longitude:'',//经度
                latitude:'',//纬度
                remarks:'',//备注
                openData:'',//开店日期
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
            abbreviation: [{//简称
                valueAbbreviation:'选项1',
                label: '1'
            }, {
                valueAbbreviation:'选项2',
                label: '2'
            }, {
                valueAbbreviation:'选项3',
                label: '3'
            }],
            shopType:[{//店铺类型
                valueShopType:'选项1',
                label: '1'
            }, {
                valueShopType:'选项2',
                label: '2'
            }, {
                valueShopType:'选项3',
                label: '3'
            }],
            nature:[{//店铺性质
                valueNature:'选项1',
                label: '1'
            }, {
                valueNature:'选项2',
                label: '2'
            }, {
                valueNature:'选项3',
                label: '3'
            }],
            grade:[{//店铺等级
                valueGrade:'选项1',
                label: '1'
            }, {
                valueGrade:'选项2',
                label: '2'
            }, {
                valueGrade:'选项3',
                label: '3'
            }],
            warehouse:[{//对应仓库
                valueWarehouse:'选项1',
                label: '1'
            }, {
                valueWarehouse:'选项2',
                label: '2'
            }, {
                valueWarehouse:'选项3',
                label: '3'
            }],
            areaBusiness :[{//业务地区
                valueAreaBusiness:'选项1',
                label: '1'
            }, {
                valueAreaBusiness:'选项2',
                label: '2'
            }, {
                valueAreaBusiness:'选项3',
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
            openData:[{//开店日期
                valueOpenData:'选项1',
                label: '1'
            }, {
                valueOpenData:'选项2',
                label: '2'
            }, {
                valueOpenData:'选项3',
                label: '3'
            }],
            brand:[{//主营品牌
                valueBrand:'选项1',
                label: '1'
            }, {
                valueBrand:'选项2',
                label: '2'
            }, {
                valueBrand:'选项3',
                label: '3'
            }],
            tradingArea:[{//商圈
                valueTradingArea:'选项1',
                label: '1'
            }, {
                valueTradingArea:'选项2',
                label: '2'
            }, {
                valueTradingArea:'选项3',
                label: '3'
            }],
            activeName: 'brand',//tabs标签页默认激活name
            

            
            isUse:true,//是否允许使用

            showCompany:false,//初始默认公司计信息状态展开  
            valueOrganization: '请选择组织',//所属组织
            valueAbbreviation:'请选择简称',//简称
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
/* 日期控件 */
 .basicForm .el-input__prefix{
     right: 0;
     left: auto;
 }
 .basicForm .el-input__prefix i{
     line-height: 30px;
 }
  .basicForm .el-date-editor input{
      padding: 0 15px;
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
  
