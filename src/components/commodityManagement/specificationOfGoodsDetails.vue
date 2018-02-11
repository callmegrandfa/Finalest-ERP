<template>
    <div class="group-management-wrapper">
        <el-row class="bg-white">

            <el-col :span='24' class="border-left">
                <el-row class="h48 pt5">
                    <button class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
                    <button class="erp_bt bt_modify"><div class="btImg"><img src="../../../static/image/common/bt_modify.png"></div><span class="btDetail">修改</span></button>
                    <button class="erp_bt bt_save"><div class="btImg"><img src="../../../static/image/common/bt_save.png"></div><span class="btDetail">保存</span></button>

                    <button class="erp_bt bt_save_add"><div class="btImg"><img src="../../../static/image/common/bt_save_add.png"></div><span class="btDetail">保存并新增</span></button>
                    <button class="erp_bt bt_add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
                    <button class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
                    <button class="erp_bt bt_version"><div class="btImg"><img src="../../../static/image/common/bt_start.png"></div><span class="btDetail">启用</span></button>                   
                </el-row>

                <el-row class="pl10 pr10">
                    <el-col :span="6">
                        <el-row>
                            <el-col :span="8">
                                <div class="bgcolor smallBgcolor" style="margin-top:20px">
                                        <label ><small>*</small>规格组编码</label>
                               </div>
                            </el-col>
                            <el-col :span="15">
                                <div class="smallBgcolor" style="margin-top:20px">
                                <el-input placeholder=""></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="6">
                        <el-row>
                            <el-col :span="8">
                                <div class="bgcolor smallBgcolor" style="margin-top:20px">
                                        <label ><small>*</small>规格组名称</label>
                               </div>
                            </el-col>
                            <el-col :span="15">
                                <div class="smallBgcolor" style="margin-top:20px">
                                <el-input placeholder=""></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="6">
                        <el-row>
                            <el-col :span="8">
                                <div class="bgcolor smallBgcolor" style="margin-top:20px">
                                        <label ><small>*</small>类目</label>
                               </div>
                            </el-col>
                            <el-col :span="15">
                                <div class="smallBgcolor" style="margin-top:20px">
                                <el-input placeholder=""></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="6">
                        <el-row>
                            <el-col :span="8">
                                <div class="bgcolor smallBgcolor" style="margin-top:20px">
                                        <label><small>*</small>状态</label>
                               </div>
                            </el-col>
                            <el-col :span="15">
                                <div class="bgcolor smallBgcolor" style="margin-top:20px">
                                    <el-select  v-model="value" >
                                    <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>

                                    </el-select>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row class="pl10  pr10">
                    <el-col :span="6">
                        <el-row>
                            <el-col :span="8">
                                <div class="bgcolor smallBgcolor">
                                        <label ><small>*</small>备注</label>
                               </div>
                            </el-col>
                            <el-col :span="15" >
                                <div class="smallBgcolor" style="width:650px;">
                                <el-input placeholder=""></el-input>
                                </div>
                            </el-col>
                        </el-row> 
                    </el-col>
                </el-row>
                <el-row class="pl10 pr10">

                    <el-col :span="4" style="margin-left:80px">
                        <div class="bgcolor smallBgcolor">
                            <el-radio v-model="radio" label="1">服务类（虚拟）</el-radio>
                        </div>
                    </el-col>
                </el-row>
                    <el-row class="bm-pd10">

                            <el-col :span="12">
                                <span class="shop-title">
                                    商品规格
                                </span>
                            </el-col>
                            <el-col :span="12" >
                                <span class="shop-sq" @click="ifShow = !ifShow" >收起<i class="el-icon-arrow-down" @click="ifShow = !ifShow" :class="{rotate : !ifShow}" style="width:15px;height:15px;margin-left:10px;color:#888;"></i></span>
                            </el-col>
                        </el-row>
                    <el-collapse-transition>
                        <div v-show="ifShow">
                        <el-row class="pl10 pr10 pb10">
                            <el-col :span="12">
                                <div class="left">
                                    
                                    <el-button type="success"><i class="el-icon-plus" style="margin-right:5px;"></i>选取</el-button>
                                </div> 
                            </el-col>
                            <el-col :xl="6" :lg="8" :md="10" :sm="11" :xs="11" style="float:right">
                                <div class="right">
                                    <el-input placeholder="" v-model="input4">
                                    <template slot="append">查询</template>
                                  </el-input> 
                                </div>
                            </el-col>
                        </el-row>
                        <div class="pl10 pr10">
                            <el-table :data="tableData" border style="width: 100%" class="text-center ">
                            <el-table-column prop="sequenceNumber" label="序号" width="60">
                            </el-table-column>
                            <el-table-column prop="AttributeEncoding" label="编码">
                            </el-table-column>
                            <el-table-column prop="attributeName" label="名称">
                            </el-table-column>
                            <el-table-column prop="startUsing" label="备注">
                                <template scope="scope">
                                    <el-checkbox  ></el-checkbox>
                                </template>
                            </el-table-column>
                          </el-table> 
                        </div>
                        
                        </div>
                    </el-collapse-transition>
                <el-row class="pl10 pr10 pt10 pb10">
                    <el-col :span="24">
                        <h4>审计信息</h4>
                    </el-col>
                    <el-col :span="6">
                        <el-row>
                            <el-col :span="8">
                                <div class="bgcolor smallBgcolor" style="margin-top:20px">
                                        <label >创建人</label>
                               </div>
                            </el-col>
                            <el-col :span="15">
                                <div class="smallBgcolor" style="margin-top:20px">
                                <el-input placeholder=""></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="6">
                        <el-row>
                            <el-col :span="8">
                                <div class="bgcolor smallBgcolor" style="margin-top:20px">
                                        <label >创建时间</label>
                               </div>
                            </el-col>
                            <el-col :span="15">
                                <div class="smallBgcolor" style="margin-top:20px">
                                <el-input placeholder=""></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="6">
                        <el-row>
                            <el-col :span="8">
                                <div class="bgcolor smallBgcolor" style="margin-top:20px">
                                        <label >修改人</label>
                               </div>
                            </el-col>
                            <el-col :span="15">
                                <div class="smallBgcolor" style="margin-top:20px">
                                <el-input placeholder=""></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="6">
                        <el-row>
                            <el-col :span="8">
                                <div class="bgcolor smallBgcolor" style="margin-top:20px">
                                        <label >修改时间</label>
                               </div>
                            </el-col>
                            <el-col :span="15">
                                <div class="smallBgcolor" style="margin-top:20px">
                                <el-input placeholder=""></el-input>
                                </div>
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
        name:'customerInfor',
        data(){
            return{
                ifShow:true,
                ifShow1:true,
                input4:'',
                radio:'1',
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
                      sequenceNumber: '1',
                      AttributeEncoding: '01',
                      attributeName: '类别',
                      startUsing: '',
                      sequenceNumber1: '1',
                      AttributeEncoding1: 'color',
                      attributeName1: '颜色',

                    }, {
                      sequenceNumber: '2',
                      AttributeEncoding: '02',
                      attributeName: '系列',
                      startUsing: '',
                      sequenceNumber1: '2',
                      AttributeEncoding1: 'size',
                      attributeName1: '尺码',

                    }, {
                      sequenceNumber: '3',
                      AttributeEncoding: '03',
                      attributeName: '项目',
                      startUsing: '',
                      sequenceNumber1: '3',
                      AttributeEncoding1: 'spec',
                      attributeName1: '型号',

                    }],
            }
        }
        
 }   
</script>

<style scoped>
.smallBgcolor .el-select{
    width: 100% !important ;
    margin-left: 10px;
}
.bgcolor label{
    width: 100% !important ;
    margin-right: 0; 
}
.smallBgcolor .el-input--suffix{
    width: 100% !important ;
}
.smallBgcolor .el-input{
    width: 100% !important ;
    margin-left: 10px;
}

.bgcolor{
    overflow:  visible; 
}
.bt_save{
    background-color: rgb(0,204,255);
}
.bt_save_add{
    background-color: rgb(22,155,213);
}
.store-data-wrapper{
    width: 100%;
    height: auto;
}
.bg-white{
    background: white;
    border-radius: 3px;
}
.input-need{
    outline: none;
    border:none;
    width: 100%;
    height: 28px;
}
.h48{
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #E4E4E4;
}
.mt5{
    margin-top: 5px;
}
.mt10{
    margin-top: 10px;
}
.mt20{
    margin-top: 20px;
}

.ml10{
    margin-left: 10px;
}
.pl10{
    padding-left: 10px;
}
.pl15{
    padding-left: 15px;
}
.pt10{
    padding-top: 10px;
}
.pt5{
    padding-top: 5px;
}
.pt20{
    padding-top: 20px;
}
.pb10{
    padding-bottom: 10px;
}
.pr10{
    padding-right: 10px;
}
.h30{
    height: 30px;
    line-height: 30px;
}
.fs14{
    font-size: 14px;
    color: rgba(0, 0, 0, 0.349019607843137);
}
.fs12{
    font-size: 12px;
}
.border1{
    border: 1px solid #999999;
    border-radius: 3px;
}
.border-left{
    border-left: 1px solid #E4E4E4;
}
.btn{
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: rgba(130, 170, 252, 1);
    color: white;
    border-radius: 3px;
    cursor: pointer;
}
.rbtn{
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: rgba(242, 242, 242, 1);
    border-radius: 3px;
    cursor: pointer;
}
.search-btn{
    font-size: 12px;
    display: inline-block;
    width: 87px;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    background: #4A6997;
    color: white;
    cursor: pointer;
}
.open{
    display: inline-block;
    width: 49px;
    height: 22px;
    line-height: 22px;
    border: 1px solid #cccccc;
    color: #cccccc;
    text-align: center;
    cursor: pointer;
}
</style>

<style>
.bm-pd10{
    border-bottom: 1px solid #e4e4e4;
    margin: 10px 0;
}
.shop-sq{
    float: right;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    color: #000;
    cursor: pointer;
}
.shop-title{
        float: left;
    height: 40px;
    line-height: 40px;
    margin: 0;
    cursor: pointer;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 3px solid rgb(51,204,204);
    color: #000;
    padding: 0 20px;
}
.tenant-management-wrapper .el-input input{
    border:none;
    height: 30px;
    line-height: 30px;
    padding-left: 0;
}
/* 重写checkbox */
.tenant-management-wrapper .el-checkbox__inner{
    width: 24px;
    height: 24px;
    border-radius:50% !important; 
}
.tenant-management-wrapper .el-checkbox__inner::after{
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
.group-management-wrapper .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.group-management-wrapper .el-table td{
    padding: 3px 0;
}
.group-management-wrapper .el-table__body{
    text-align: center;
}
</style>