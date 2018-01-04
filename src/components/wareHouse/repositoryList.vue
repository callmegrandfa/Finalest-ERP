<template>
  <div class="data-list-container">
      <el-row>
          <el-col :span="5" class="bg-white">
              <el-row class="height35">
                  <el-col :span='4'>
                      <span>编码</span>
                  </el-col>
                  <el-col :span='20'>
                      <input type="text" placeholder="请录入编码" class="input-need">
                  </el-col>
              </el-row>
          </el-col>
          <el-col :span="5" class="ml10 bg-white">
              <el-row  class="height35">
                  <el-col :span='4'>
                      <span>名称</span>
                  </el-col>
                  <el-col :span='20'>
                      <input type="text" placeholder="请录入名称" class="input-need">
                  </el-col>
              </el-row>
          </el-col>
          <el-col :span="5" class="ml10 bg-white">
              <el-row  class="height35">
                  <el-col :span='6'>
                      <span>业务地区</span>
                  </el-col>
                  <el-col :span='18'>
                      <input type="text" placeholder="请录入编码" class="input-need">
                  </el-col>
              </el-row>
          </el-col>
          <el-col :span="5" class="ml10 bg-white">
              <el-row  class="height35">
                  <el-col :span='6'>
                      <span>仓库类型</span>
                  </el-col>
                  <el-col :span='18'>
                      <input type="text" placeholder="请录入编码" class="input-need">
                  </el-col>
              </el-row>
          </el-col>
          <el-col :span="2" class="ml10">
              <span class="search-btn">查询</span>
          </el-col>
      </el-row>

      <div class="bg-white mr10 mt10 pt10">
          <el-row>
              <el-col :span='2' class="ml10 ">
                  <span class="btn">新增</span>
              </el-col>
              <el-col :span='2' class="ml10">
                  <span class="btn">修改</span>
              </el-col>
              <el-col :span='2' class="ml10">
                  <span class="btn">辅助功能</span>
              </el-col>
              <el-col :span='2' :offset="12">
                  <span class="rbtn">打印</span>
              </el-col>
              <el-col :span='2' class="ml10">
                  <span class="rbtn">Excel</span>
              </el-col>
          </el-row>

          <el-row class="pt10">
              <el-col :span="24">
                  <el-table :data="tableData" border style="width: 100%" stripe>
                    <el-table-column prop="organization" label="业务组织" ></el-table-column>
                    <el-table-column prop="houseCode" label="仓库编码" ></el-table-column>
                    <el-table-column prop="houseName" label="仓库名称"></el-table-column>
                    <el-table-column prop="houseCall" label="仓库简称"></el-table-column>
                    <el-table-column prop="houseType" label="仓库类型"></el-table-column>
                    <el-table-column prop="businessArea" label="业务地区"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                    <el-table-column prop="people" label="负责人"></el-table-column>
                    <el-table-column prop="ifAllow" label="允许使用">
                        <template slot-scope="scope">
                            <el-checkbox v-model="tableData[scope.$index].ifAllow" ></el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column prop="updateDate" label="   "></el-table-column>
                  </el-table> 
              </el-col>
          </el-row>
      </div>
  </div>
</template>

<script>
    export default{
        name:'repositoryList',
        data(){
            return{
                tableData: [{
				organization: '1',
				a:'序号',
				houseCode: 'A001',
				houseName: '哈哈',
                houseCall:'12',
                houseType:'type',
                businessArea:'业务地区',
                address:'地址',
                people:'负责人',
                ifAllow:true,
				updateDate:'2017.12.20'
				}, {
				    organization: '2',
				    houseCode: 'A002',
				    houseName: '哈哈',
				    houseCall:'faf',
                    houseType:'type',
                    businessArea:'业务地区',
                    address:'地址',
                    people:'负责人',
				    ifAllow:false,
				    updateDate:'2017.12.20'
				}, {
				    organization: '3',
				    houseCode: 'A003',
				    houseName: '哈哈',
                    houseCall:'faf',
                    houseType:'type',
                    businessArea:'业务地区',
                    address:'地址',
                    people:'负责人',
				    ifAllow:false,
				    updateDate:'2017.12.20'
				}, {
				    organization: '4',
				    houseCode: 'A004',
				    houseName: '哈哈',
                    houseCall:'fasdg',
                    houseType:'type',
                    businessArea:'业务地区',
                    address:'地址',
                    people:'负责人',
				    ifAllow:true,
				    updateDate:'2017.12.20'
				}, {
				    organization: '5',
				    houseCode: 'A005',
				    houseName: '哈哈',
                    houseCall:'fasdg',
                    houseType:'type',
                    businessArea:'业务地区',
                    address:'地址',
                    people:'负责人',
				    ifAllow:true,
				    updateDate:'2017.12.20'
				}, {
				    organization: '6',
				    houseCode: 'A006',
				    houseName: '哈哈',
                    houseCall:'fasdg',
                    houseType:'type',
                    businessArea:'业务地区',
                    address:'地址',
                    people:'负责人',
				    ifAllow:true,
				    updateDate:'2017.12.20'
				}, {
				    organization: '7',
				    houseCode: 'A007',
				    houseName: '哈哈',
                    houseCall:'fasdg',
                    houseType:'type',
                    businessArea:'业务地区',
                    address:'地址',
                    people:'负责人',
				    ifAllow:true,
				    updateDate:'2017.12.20'
				}, {
				    organization: '8',
				    houseCode: 'A008',
				    houseName: '哈哈',
                    houseCall:'fasdg',
                    houseType:'type',
                    businessArea:'业务地区',
                    address:'地址',
                    people:'负责人',
				    ifAllow:true,
				    updateDate:'2017.12.20'
				}, {
				    organization: '9',
				    houseCode: 'A009',
				    houseName: '哈哈',
                    houseCall:'fasdg',
                    houseType:'type',
                    businessArea:'业务地区',
                    address:'地址',
                    people:'负责人',
				    ifAllow:true,
				    updateDate:'2017.12.20'
				}],
            }
        },
    }
</script>

<style scoped>
.data-list-container{
    width: 100%;
    height: 100%;
    background:#EEF1F5;
    padding-top: 15px;
}
.search-btn{
    display: inline-block;
    height: 30px;
    width: 91px;
    text-align: center;
    border-radius: 3px;
    line-height: 30px;
    color: white;
     background:rgba(130, 170, 252, 1);
}
.bg-white{
    background:white;
    border-radius: 3px;
    font-size: 14px;
}
.height35{
    height: 35px;
    line-height: 35px;
    color: rgba(0, 0, 0, 0.349019607843137);
    padding-left:10px;
}
.ml10{
    margin-left: 10px;
}
.mr10{
    margin-right: 10px;
}
.mt10{
    margin-top: 10px;
}
.pt10{
    padding-top: 10px;
}
.btn{
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
.rbtn{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    background:rgba(242, 242, 242, 1);
    border-radius: 3px;
    width: 100%;
    text-align: center;
    cursor: pointer;
}
.input-need{
    outline: none;
    border:none;
    width: 100%;
}
</style>
<style>
/* 重写checkbox */
.el-checkbox__inner{
    width: 24px;
    height: 24px;
    border-radius:50% !important; 
}
.el-checkbox__inner::after{
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
.el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.el-table td{
    padding: 3px 0;
}
.el-table__body{
    text-align: center;
}
/* 重写el-pagination样式 */
.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
    border-radius: 50%;
}

.text-right{
    text-align: right;
}
.mt-10{
    margin-top: 10px;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 130px;
}
.el-input--suffix .el-input__inner{
    padding-right: 0;
} 
</style>
