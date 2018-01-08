<template>
  <div class="organization ">
      <el-container>
        <el-header>
            <!-- 按钮组 -->
            <el-row>
                <el-button type="primary">新增</el-button>
                <el-button type="primary">保存</el-button>
                <el-button type="primary">保存并新增</el-button>
                <el-button type="primary">辅助功能</el-button>
            </el-row>
        </el-header>
        <!-- 主体信息部分 -->
        <el-main class="organization-forum">
            <!-- 基础信息 -->
            <el-row>
                <el-col class="organization-forum-title" :span="2">
                    <h4>基础信息</h4>
                </el-col>
                <el-col :span="20">
                    <el-row :gutter="15">
                        <el-col :xs="12" :sm="6" :md="6" :lg="5">
                            <el-input placeholder="恒康科技" v-model="input3" size="medium">
                                <template slot="prepend">集团编码</template>
                            </el-input>
                        </el-col>
                        <el-col :xs="12" :sm="6" :md="6" :lg="5">
                            <el-input placeholder="30" v-model="input3" size="medium">
                                <template slot="prepend">集团名称</template>
                            </el-input>
                        </el-col>
                        <el-col :xs="12" :sm="6" :md="6" :lg="5">
                            <el-input placeholder="lomen" v-model="input3" size="medium">
                                <template slot="prepend">集团全称</template>
                            </el-input>
                        </el-col>
                        <el-col :xs="12" :sm="6" :md="6" :lg="5">
                            <el-input placeholder="请输入助记码" v-model="input3" size="medium">
                                <template slot="prepend">助记码</template>
                            </el-input>
                        </el-col>
                    </el-row>
                    <el-row :gutter="15">
                        <el-col :xs="12" :sm="6" :md="6" :lg="5">
                            <div class="el-input el-input--medium el-input-group el-input-group--prepend">
                                <label class="label-title">启用月份	&nbsp&nbsp</label>
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :xs="12" :sm="6" :md="6" :lg="5">
                            <div class="el-input el-input--medium el-input-group el-input-group--prepend">
                            <label class="label-title">本位币种	&nbsp&nbsp</label>
                            <el-select v-model="value" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                            </div>
                        </el-col>
                        <el-col :xs="12" :sm="6" :md="6" :lg="5">
                            <div class="el-input el-input--medium el-input-group el-input-group--prepend">
                            <label class="label-title">所属公司	&nbsp&nbsp</label>
                            <el-select v-model="value" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                            </div>
                        </el-col>
                        <el-col :xs="12" :sm="6" :md="6" :lg="5">
                            <el-input placeholder="请输入助记码" v-model="input3" size="medium">
                                <template slot="prepend">联系人</template>
                            </el-input>
                        </el-col>
                    </el-row>
                    <!-- 折叠区域 -->
                    <el-row :gutter="15">
                        <el-col :xs="12" :sm="6" :md="6" :lg="5">
                            <el-input placeholder="请输入助记码" v-model="input3" size="medium">
                                <template slot="prepend">电话</template>
                            </el-input>
                        </el-col>
                        <el-col :xs="12" :sm="6" :md="6" :lg="5">
                            <el-input placeholder="请输入助记码" v-model="input3" size="medium">
                                <template slot="prepend">地址</template>
                            </el-input>
                        </el-col>
                        <el-col :xs="12" :sm="6" :md="6" :lg="5">
                           <el-input placeholder="请输入助记码" v-model="input3" size="medium">
                                <template slot="prepend">备注</template>
                            </el-input>
                        </el-col>
                        <el-col :xs="12" :sm="6" :md="6" :lg="5">
                            <div class="el-input el-input--medium el-input-group el-input-group--prepend">
                                <label class="label-title">启用状态	&nbsp&nbsp</label>
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                </el-select>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="2">收起</el-col>
            </el-row>
            <!-- 组织类型 -->
            <el-row >
                <el-col class="organization-forum-title" :span="2">
                    <h4>组织类型</h4>
                </el-col>
                <el-col :span="22">
                    <el-checkbox-group v-model="checkedCities">
                        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                </el-col>
            </el-row>
            <!-- 基础信息 -->
            <el-row>
                <el-col class="organization-forum-title" :span="2">
                    <h4>基础类型</h4>
                </el-col>
                <el-col :span="20">
                    <el-row :gutter="15">
                        <el-col :xs="12" :sm="6" :md="6" :lg="5">
                            <el-input placeholder="恒康科技" v-model="input3" size="medium">
                                <template slot="prepend">版本号</template>
                            </el-input>
                        </el-col>
                        <el-col :xs="12" :sm="6" :md="6" :lg="5">
                            <div class="el-input el-input--medium el-input-group el-input-group--prepend">
                                <label class="label-title">版本开始日期</label>
                                <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
                            </div>
                        </el-col>
                        <el-col :xs="12" :sm="6" :md="6" :lg="5">
                            <div class="el-input el-input--medium el-input-group el-input-group--prepend">
                                <label class="label-title">版本结束日期</label>
                                <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-main>
        <!-- tab面板 -->
        <el-main class="oranization-panle bg-white no-padding">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="公司" name="first">
                    <el-row class="mt-10">
                        <el-col :span="24">
                            <el-checkbox v-model="checked">集团公司</el-checkbox>
                            <el-checkbox v-model="checked">是否启用</el-checkbox>
                        </el-col>
                    </el-row>
                    <el-row :gutter="15">
                        <el-col :xs="12" :sm="6" :md="6" :lg="5">
                            <el-input placeholder="lomen" v-model="input3" size="medium">
                                <template slot="prepend">上级公司</template>
                            </el-input>
                        </el-col>
                        <el-col :xs="12" :sm="6" :md="6" :lg="5">
                            <el-input placeholder="请输入助记码" v-model="input3" size="medium">
                                <template slot="prepend">法人代表</template>
                            </el-input>
                        </el-col>
                    </el-row>
                    <!-- 分割线 -->
                    <div class="dividing-line"></div>
                    <!-- 审计信息 -->
                    <el-main class="no-padding">
                        <el-row>
                            <el-col :span="22">
                                <h4>审计信息</h4>
                            </el-col>
                            <el-col :span="2">收起</el-col>
                        </el-row>
                        <el-row :gutter="15">
                            <el-col :xs="12" :sm="6" :md="6" :lg="5">
                                <el-input placeholder="恒康科技" v-model="input3" size="medium">
                                    <template slot="prepend">集团编码</template>
                                </el-input>
                            </el-col>
                            <el-col :xs="12" :sm="6" :md="6" :lg="5">
                                <el-input placeholder="30" v-model="input3" size="medium">
                                    <template slot="prepend">集团名称</template>
                                </el-input>
                            </el-col>
                            <el-col :xs="12" :sm="6" :md="6" :lg="5">
                                <el-input placeholder="lomen" v-model="input3" size="medium">
                                    <template slot="prepend">集团全称</template>
                                </el-input>
                            </el-col>
                            <el-col :xs="12" :sm="6" :md="6" :lg="5">
                                <el-input placeholder="请输入助记码" v-model="input3" size="medium">
                                    <template slot="prepend">助记码</template>
                                </el-input>
                            </el-col> 
                        </el-row>
                        <!-- 折叠区域 -->
                        <el-row :gutter="15">
                            <el-col :xs="12" :sm="6" :md="6" :lg="5">
                                <div class="el-input el-input--medium el-input-group el-input-group--prepend border-input">
                                    <label class="label-title">启用月份	&nbsp&nbsp</label>
                                    <el-select v-model="value" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :xs="12" :sm="6" :md="6" :lg="5">
                                <div class="el-input el-input--medium el-input-group el-input-group--prepend border-input">
                                    <label class="label-title">本位币种	&nbsp&nbsp</label>
                                    <el-select v-model="value" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :xs="12" :sm="6" :md="6" :lg="5">
                                <div class="el-input el-input--medium el-input-group el-input-group--prepend border-input">
                                    <label class="label-title">所属公司	&nbsp&nbsp</label>
                                    <el-select v-model="value" placeholder="请选择">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :xs="12" :sm="6" :md="6" :lg="5">
                                <el-input placeholder="请输入助记码" v-model="input3" size="medium">
                                    <template slot="prepend">联系人</template>
                                </el-input>
                            </el-col>
                        </el-row>
                    </el-main>
                </el-tab-pane>
                <el-tab-pane label="业务" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="财务" name="third">角色管理</el-tab-pane>
            </el-tabs>
        </el-main>
      </el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        checkedCities: ['公司', '业务'],
        cities: ['公司', '业务', '财务'],
        value1:'',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.mt-10{
    margin-top: 10px;
}
.fl{float: left}
.fr{float: right}
.text-center{
  text-align: center;
}
.bg-white{
  background: #fff;
}
.el-col{
   margin-bottom: 20px;
   overflow: hidden;
}
.no-padding{
    padding: 0px;
}
/* 头部无边框输入框 */
.organization-forum .el-input-group__prepend,.organization-forum .el-input__inner{
  background: #fff;
  border:none;
}
/* 输入框无圆角 */
.organization-forum .el-input__inner{
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
}
.label-title{
    padding: 0 20px;
    width: 1px;
    color: #909399;
    background: #fff;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border-radius: 4px;
    white-space: nowrap;
}
/* checkbox */
.el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #fff;
    z-index: 1;
    -webkit-transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
    transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
}
.el-checkbox__inner::after {
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
    width: 5px;
    -webkit-transition: -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms, -webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms,-webkit-transform .15s cubic-bezier(.71,-.46,.88,.6) 50ms;
    -webkit-transform-origin: center;
    transform-origin: center;
}
/* tab面板 */
.organization .el-tabs__nav,.organization .el-tab-pane{
    padding-left: 20px;
}
.organization .el-tabs__active-bar{
    left: 20px;
}
.border-input{
    border: 1px solid #f2f2f2;
    border-radius: 3px;
}
/* 底部有边框输入框 */
.oranization-panle .el-input__inner{
    border: 1px solid #dcdfe6;
    border-left: none;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
}
</style>
