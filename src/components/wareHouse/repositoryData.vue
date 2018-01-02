<template>
  <div class="data-wrapper">
      <el-row class="bg-white pl10 pt10 pb10">
          <el-col :span="2">
              <span class="btn">保存新增</span>
          </el-col>
          <el-col :span="2" class="ml15">
              <span class="btn">保存</span>
          </el-col>
          <el-col :span="2" class="ml15">
              <span class="btn">辅助功能</span>
          </el-col>
      </el-row>

      <el-row class="ft12 pt10 pl10 pr10">
          <el-col :span="5" class="bg-white br3 h30">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>所属组织</span>
                  </el-col>
                  <el-col :span="10">
                      <el-dropdown>
                            <span class="el-dropdown-link ft12">
                                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                            </el-dropdown-menu>
                       </el-dropdown>
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="bg-white br3 h30 ml10">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>编码</span>
                  </el-col>
                  <el-col :span="10">
                      <input class="input-need" type="text" placeholder="请录入编码">
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="bg-white br3 h30 ml10">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>名称</span>
                  </el-col>
                  <el-col :span="10">
                      <input class="input-need" type="text" placeholder="请录入名称">
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="bg-white br3 h30 ml10">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>简称</span>
                  </el-col>
                  <el-col :span="10">
                      <input class="input-need" type="text" placeholder="无">
                  </el-col>
              </el-row>
          </el-col>
      </el-row>

      <el-row class="ft12 pt10 pl10 pr10">
          <el-col :span="5" class="bg-white br3 h30">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>助记码</span>
                  </el-col>
                  <el-col :span="10">
                      <input class="input-need" type="text" placeholder="PO123456789">
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="bg-white br3 h30 ml10">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>仓库</span>
                  </el-col>
                  <el-col :span="10">
                      <el-dropdown>
                            <span class="el-dropdown-link ft12">
                                请录入仓库类型<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>仓库1</el-dropdown-item>
                                <el-dropdown-item>仓库2</el-dropdown-item>
                                <el-dropdown-item>仓库3</el-dropdown-item>
                                <el-dropdown-item disabled>仓库4</el-dropdown-item>
                                <el-dropdown-item divided>仓库5</el-dropdown-item>
                            </el-dropdown-menu>
                       </el-dropdown>
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="bg-white br3 h30 ml10">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>库存分类</span>
                  </el-col>
                  <el-col :span="10">
                      <input class="input-need" type="text" placeholder="请录入库存分类">
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="bg-white br3 h30 ml10">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>业务地区</span>
                  </el-col>
                  <el-col :span="10">
                      <input class="input-need" type="text" placeholder="无">
                  </el-col>
              </el-row>
          </el-col>
      </el-row>

      <el-row class="ft12 pt10 pl10 pr10">
          <el-col :span="5" class="bg-white br3 h30">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>行政地区</span>
                  </el-col>
                  <el-col :span="10">
                      <el-dropdown>
                            <span class="el-dropdown-link ft12">
                                广州总部<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>四川总部</el-dropdown-item>
                                <el-dropdown-item>上海总部</el-dropdown-item>
                                <el-dropdown-item>北京总部</el-dropdown-item>
                                <el-dropdown-item>深圳总部</el-dropdown-item>
                                <el-dropdown-item>联合国总部</el-dropdown-item>
                            </el-dropdown-menu>
                       </el-dropdown>
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="bg-white br3 h30 ml10">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>负责人</span>
                  </el-col>
                  <el-col :span="10">
                      <input class="input-need" type="text" placeholder="请录入手工单号">
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="bg-white br3 h30 ml10">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>电话</span>
                  </el-col>
                  <el-col :span="10">
                      <input class="input-need" type="text" placeholder="请选择仓库">
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="bg-white br3 h30 ml10">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>Email</span>
                  </el-col>
                  <el-col :span="10">
                      <input class="input-need" type="text" placeholder="无">
                  </el-col>
              </el-row>
          </el-col>
      </el-row>

      <el-row class="ft12 pt10 pl10 pr10">
          <el-col :span="5" class="bg-white br3 h30">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>传真</span>
                  </el-col>
                  <el-col :span="10">
                      <input class="input-need" type="text" placeholder="PO1235656">
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="bg-white br3 h30 ml10">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>地址</span>
                  </el-col>
                  <el-col :span="10">
                      <input class="input-need" type="text" placeholder="请录入手工单号">
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="10" class="bg-white br3 h30 ml10">
              <el-row>
                  <el-col :span="4" class="pl10">
                      <span>备注</span>
                  </el-col>
                  <el-col :span="18">
                      <input class="input-need" type="text" placeholder="请录入备注">
                  </el-col>
              </el-row>
          </el-col>
      </el-row>

      <el-row class="ft12 pl10 pr10 pt10 br3">
          <el-col :span='24' class="bg-white pt10 pl10 pb10 bb1">
              <span class="header-title">送货信息</span>
          </el-col>
          <el-col :span='24' class="bg-white pl10 pr10 pt10 pb10 bb1">
              <el-table :data="tableData" border style="width: 100%" stripe>
                    <el-table-column prop="organization" label="联系人" ></el-table-column>
                    <el-table-column prop="houseCode" label="手机" ></el-table-column>
                    <el-table-column prop="houseName" label="电话"></el-table-column>
                    <el-table-column prop="houseCall" label="送货地址"></el-table-column>
                    <el-table-column prop="houseType" label="运输方式"></el-table-column>
                    <el-table-column prop="businessArea" label="物流公司"></el-table-column>
                    <el-table-column prop="ifAllow" label="默认">
                        <template scope="scope">
                            <el-checkbox v-model="tableData[scope.$index].ifAllow" ></el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column prop="remark" label="备注"></el-table-column>
              </el-table> 
          </el-col>
      </el-row>

      <el-row class="ft12 pl10 pr10 pt10 br3">
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

                        <el-col :span="10">
                            <input class="input-need" type="text" placeholder="请录入创建人">
                        </el-col>
                    </el-row>
                  </el-col>

                  <el-col :span="5" class="bg-white br3 h35 b1 ml10">
                    <el-row>
                        <el-col :span="8" class="pl10">
                            <span>创建时间</span>
                        </el-col>

                        <el-col :span="10">
                            <input class="input-need" type="text" placeholder="请录入创建时间">
                        </el-col>
                    </el-row>
                  </el-col>

                  <el-col :span="5" class="bg-white br3 h35 b1 ml10">
                    <el-row>
                        <el-col :span="8" class="pl10">
                            <span>修改人</span>
                        </el-col>

                        <el-col :span="10">
                            <input class="input-need" type="text" placeholder="请录入修改人">
                        </el-col>
                    </el-row>
                  </el-col>

                  <el-col :span="5" class="bg-white br3 h35 b1 ml10">
                    <el-row>
                        <el-col :span="8" class="pl10">
                            <span>修改时间</span>
                        </el-col>

                        <el-col :span="10">
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
        data(){
            return {
                tableData: [{
				contacts: '1',
				phone: 'A001',
				phoneNum: '哈哈',
                sendType:'空运',
                company:'顺丰',
                address:'地址',
                ifAllow:true,
				remark:'备注'
				}, {
				    contacts: '1',
                    phone: 'A001',
                    phoneNum: '哈哈',
                    sendType:'空运',
                    company:'顺丰',
                    address:'地址',
                    ifAllow:true,
                    remark:'备注'
				}, {
				    contacts: '1',
                    phone: 'A001',
                    phoneNum: '哈哈',
                    sendType:'空运',
                    company:'顺丰',
                    address:'地址',
                    ifAllow:true,
                    remark:'备注'
				}, {
				    contacts: '1',
                    phone: 'A001',
                    phoneNum: '哈哈',
                    sendType:'空运',
                    company:'顺丰',
                    address:'地址',
                    ifAllow:true,
                    remark:'备注'
				}, {
				    contacts: '1',
                    phone: 'A001',
                    phoneNum: '哈哈',
                    sendType:'空运',
                    company:'顺丰',
                    address:'地址',
                    ifAllow:true,
                    remark:'备注'
				}, {
				    contacts: '1',
                    phone: 'A001',
                    phoneNum: '哈哈',
                    sendType:'空运',
                    company:'顺丰',
                    address:'地址',
                    ifAllow:true,
                    remark:'备注'
				}, {
				    contacts: '1',
                    phone: 'A001',
                    phoneNum: '哈哈',
                    sendType:'空运',
                    company:'顺丰',
                    address:'地址',
                    ifAllow:true,
                    remark:'备注'
				}, {
				    contacts: '1',
                    phone: 'A001',
                    phoneNum: '哈哈',
                    sendType:'空运',
                    company:'顺丰',
                    address:'地址',
                    ifAllow:true,
                    remark:'备注'
				}, {
				    contacts: '1',
				phone: 'A001',
				phoneNum: '哈哈',
                sendType:'空运',
                company:'顺丰',
                address:'地址',
                ifAllow:true,
				remark:'备注'
				}],
            }
        },
    }
</script>

<style>
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
    color: rgba(0, 0, 0, 0.349019607843137);
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
    height: 30px;
    line-height: 30px;
}
.h35{
    height: 35px;
    line-height: 35px;
}
.input-need{
    border:none;
    outline: none;
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
</style>

