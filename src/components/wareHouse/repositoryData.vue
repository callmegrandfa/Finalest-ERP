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

      <el-row class="ft12 pt10 pr10">
          <el-col :span="5" class="bg-white br3 h30">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>所属组织</span>
                  </el-col>
                  <el-col :span="15">
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

          <el-col :span="5" class="bg-white br3 h30 ml10">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>编码</span>
                  </el-col>
                  <el-col :span="15">
                      <input class="input-need" type="text" placeholder="请录入编码">
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="bg-white br3 h30 ml10">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>名称</span>
                  </el-col>
                  <el-col :span="15">
                      <input class="input-need" type="text" placeholder="请录入名称">
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="bg-white br3 h30 ml10">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>简称</span>
                  </el-col>
                  <el-col :span="15">
                      <input class="input-need" type="text" placeholder="无">
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="2" :offset="1" class="toggle-btn">
              <span @click='ifShow = !ifShow'>收起</span>
              <i class="el-icon-arrow-up"></i>
          </el-col>

      </el-row>

      <el-row class="ft12 pt10 pr10">
          <el-col :span="5" class="bg-white br3 h30">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>助记码</span>
                  </el-col>
                  <el-col :span="15">
                      <input class="input-need" type="text" placeholder="PO123456789">
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="bg-white br3 h30 ml10">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>仓库</span>
                  </el-col>
                  <el-col :span="15">
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

          <el-col :span="5" class="bg-white br3 h30 ml10">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>库存分类</span>
                  </el-col>
                  <el-col :span="15">
                      <input class="input-need" type="text" placeholder="请录入库存分类">
                  </el-col>
              </el-row>
          </el-col>

          <el-col :span="5" class="bg-white br3 h30 ml10">
              <el-row>
                  <el-col :span="8" class="pl10">
                      <span>业务地区</span>
                  </el-col>
                  <el-col :span="15">
                      <input class="input-need" type="text" placeholder="无">
                  </el-col>
              </el-row>
          </el-col>
      </el-row>

      <el-collapse-transition>
            <div v-show="ifShow">
                <el-row class="ft12 pt10 pr10">
                    <el-col :span="5" class="bg-white br3 h30">
                        <el-row>
                            <el-col :span="8" class="pl10">
                                <span>行政地区</span>
                            </el-col>
                            <el-col :span="15">
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

                    <el-col :span="5" class="bg-white br3 h30 ml10">
                        <el-row>
                            <el-col :span="8" class="pl10">
                                <span>负责人</span>
                            </el-col>
                            <el-col :span="15">
                                <input class="input-need" type="text" placeholder="请录入手工单号">
                            </el-col>
                        </el-row>
                    </el-col>

                    <el-col :span="5" class="bg-white br3 h30 ml10">
                        <el-row>
                            <el-col :span="8" class="pl10">
                                <span>电话</span>
                            </el-col>
                            <el-col :span="15">
                                <input class="input-need" type="text" placeholder="请选择仓库">
                            </el-col>
                        </el-row>
                    </el-col>

                    <el-col :span="5" class="bg-white br3 h30 ml10">
                        <el-row>
                            <el-col :span="8" class="pl10">
                                <span>Email</span>
                            </el-col>
                            <el-col :span="15">
                                <input class="input-need" type="text" placeholder="无">
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>

                <el-row class="ft12 pt10 pr10">
                    <el-col :span="5" class="bg-white br3 h30">
                        <el-row>
                            <el-col :span="8" class="pl10">
                                <span>传真</span>
                            </el-col>
                            <el-col :span="15">
                                <input class="input-need" type="text" placeholder="PO1235656">
                            </el-col>
                        </el-row>
                    </el-col>

                    <el-col :span="5" class="bg-white br3 h30 ml10">
                        <el-row>
                            <el-col :span="8" class="pl10">
                                <span>地址</span>
                            </el-col>
                            <el-col :span="15">
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
            </div>
      </el-collapse-transition>
    
      <el-row class="ft12 pr10 pt10 br3">
          <el-col :span='24' class="bg-white pt10 pl10 pb10 bb1">
              <span class="header-title">送货信息</span>
          </el-col>
          <el-col :span='24' class="bg-white pl10 pr10 pt10 pb10 bb1">
              <el-table :data="tableData" border style="width: 100%" stripe>
                    <el-table-column prop="contacts" label="联系人" ></el-table-column>
                    <el-table-column prop="phone" label="手机" ></el-table-column>
                    <el-table-column prop="phoneNum" label="电话"></el-table-column>
                    <el-table-column prop="address" label="送货地址"></el-table-column>
                    <el-table-column prop="sendType" label="运输方式"></el-table-column>
                    <el-table-column prop="company" label="物流公司"></el-table-column>
                    <el-table-column prop="ifAllow" label="默认">
                        <template slot-scope="scope">
                            <el-checkbox v-model="tableData[scope.$index].ifAllow" ></el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column prop="remark" label="备注"></el-table-column>
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
                ifShow:true,
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
.toggle-btn{
    cursor: pointer;
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
.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
    border-radius: 50%;
}

.data-wrapper .text-right{
    text-align: right;
}
.mt-10{
    margin-top: 10px;
}
.data-wrapper .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 130px;
}
.data-wrapper .el-input--suffix .el-input__inner{
    padding-right: 0;
} 

</style>


