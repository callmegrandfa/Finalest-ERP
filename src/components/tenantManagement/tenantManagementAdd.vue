<template>
    <div class="tenant-manager-wrapper">
        <el-row class="bg-white tenant">
            

            <el-col :span='24'>
                <btm :date="bottonbox" v-on:listbtm="btmlog"> </btm>
                <textbox :data="textboxipt"></textbox>
                <el-row><el-col :span="24" class="ml10"><h4 class="ml10"> 集团信息</h4></el-col></el-row>
                <textbox :data="textboxipt1"></textbox>
                 <el-row class="bm-pd10 mt10" style=" background: rgb(249,249,249);">
                   
                    <template>
                      <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="功能" name="first">
                            <btm :date="bottonbox1" v-on:listbtm="btmlog"> </btm>
                            <el-row class="pl10 pt10 pr10 pb10" style=" background: rgb(249,249,249);">
                                <el-col :span="24">
                                    <el-table :data="tableData1" @selection-change="handleSelectionChange" border style="width: 100%">
                                    <el-table-column type="selection" label="序号" width="60">
                                    </el-table-column>
                                    <el-table-column prop="sequenceNumber" label="" width="60">
                                    </el-table-column>
                                    <el-table-column prop="AttributeEncoding" label="子系统">
                                    </el-table-column>
                                    </el-table-column>
                                    <el-table-column prop="startUsing" label="数据类型">
                                    </el-table-column>
                                    <el-table-column prop="startUsing1" label="开单库配置">
                                    </el-table-column>
                                    <el-table-column prop="startUsing2" label="查询库配置">
                                    </el-table-column>
                                    <el-table-column prop="startUsing3" label="状态">
                                    </el-table-column>
                                    <el-table-column prop="startUsing4" label="备注">
                                    </el-table-column>
                                    <el-table-column prop="startUsing5" label="操作" width="60">
                                        <template slot-scope="scope">
                                            <el-button type="text" size="small" @click=""  >删除</el-button>
                                        </template>
                                    </el-table-column>
                                  </el-table>    
                                </el-col>
                            </el-row>
                            <btm :date="bottonbox2" v-on:listbtm="btmlog"> </btm>
                            <el-row class="pl10 pt10 pr10 pb10" style=" background: rgb(249,249,249);">
                                <el-col :span="24">
                                    <el-table :data="tableData1" @selection-change="handleSelectionChange" border style="width: 100%">
                                    <el-table-column type="selection" label="序号" width="60">
                                    </el-table-column>
                                    <el-table-column prop="sequenceNumber" label="" width="60">
                                    </el-table-column>
                                    <el-table-column prop="AttributeEncoding" label="功能模块">
                                    </el-table-column>
                                    <el-table-column prop="startUsing" label="用户时间">
                                    </el-table-column>
                                    <el-table-column prop="startUsing" label="失效时间">
                                    </el-table-column>
                                    <el-table-column prop="startUsing5" label="操作" width="60">
                                        <template slot-scope="scope">
                                            <el-button type="text" size="small" @click=""  >删除</el-button>
                                        </template>
                                    </el-table-column>
                                  </el-table>    
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                        <el-tab-pane label="商品" name="second">
                            <tree :datc="componyTree"></tree>
                            <el-row class="table-width" style="float:left">
                                <el-col :span="24">
                                    <h4 class="h4-title">商品属性</h4>
                                    <el-table :data="tableData1" @selection-change="handleSelectionChange" border style="width: 100%">
                                    <el-table-column type="selection" label="" width="60">
                                    </el-table-column>
                                    <el-table-column prop="sequenceNumber" label="序号" width="60">
                                    </el-table-column>
                                    <el-table-column prop="AttributeEncoding" label="属性编码">
                                    </el-table-column>
                                    <el-table-column prop="startUsing" label="属性名称">
                                    </el-table-column>
                                    <el-table-column prop="startUsing" label="启用">
                                    </el-table-column>
                                    <el-table-column prop="startUsing5" label="操作" width="60">
                                        <template slot-scope="scope">
                                            <el-button type="text" size="small" @click=""  >删除</el-button>
                                        </template>
                                    </el-table-column>
                                  </el-table>
                                  <h4 class="h4-title">商品规格</h4>
                                    <el-table :data="tableData1" @selection-change="handleSelectionChange" border style="width: 100%">
                                    <el-table-column type="selection" label="" width="60">
                                    </el-table-column>
                                    <el-table-column prop="sequenceNumber" label="序号" width="60">
                                    </el-table-column>
                                    <el-table-column prop="AttributeEncoding" label="编码">
                                    </el-table-column>
                                    <el-table-column prop="startUsing" label="名称">
                                    </el-table-column>
                                    <el-table-column prop="startUsing" label="启用">
                                    </el-table-column>
                                    <el-table-column prop="startUsing5" label="操作" width="60">
                                        <template slot-scope="scope">
                                            <el-button type="text" size="small" @click=""  >删除</el-button>
                                        </template>
                                    </el-table-column>
                                  </el-table>
                                </el-col>
                            </el-row>
                        </el-tab-pane>
                        <!--  -->
                        <el-tab-pane label="业务组织及用户" name="fourth">
                            <el-collapse-transition> 
                                <div v-show="ifShow2"> 
                                    <el-row class="pl10 pt10 pr10 pb10" style=" background: rgb(249,249,249);">
                                        <el-col :span="24">
                                            <h4 class="h4-title">业务组织</h4>
                                            <el-table :data="tableData4" @selection-change="handleSelectionChange" border style="width: 100%">
                                            <el-table-column type="selection" label="" width="60">
                                            </el-table-column>
                                            <el-table-column prop="sequenceNumber" label="" width="60">
                                            </el-table-column>
                                            <el-table-column prop="sequenceNumber" label="组织编码" >
                                            </el-table-column>
                                            <el-table-column prop="AttributeEncoding" label="组织名称">
                                            </el-table-column>
                                            <el-table-column prop="startUsing" label="公司">
                                            </el-table-column>
                                            <el-table-column prop="startUsing1" label="业务">
                                            </el-table-column>
                                            <el-table-column prop="startUsing2" label="财务">
                                            </el-table-column>
                                            <el-table-column prop="startUsing2" label="备注">
                                            </el-table-column>
                                            <el-table-column prop="startUsing2" label="操作">
                                                <template slot-scope="scope">
                                                    <el-button type="text" size="small" @click=""  >删除</el-button>
                                                </template>
                                            </el-table-column>
                                            </el-table>
                                            <h4 class="h4-title">商品规格</h4>
                                            <el-table :data="tableData4" @selection-change="handleSelectionChange" border style="width: 100%">
                                            <el-table-column type="selection" label="" width="60">
                                            </el-table-column>
                                            <el-table-column prop="sequenceNumber" label="序号" width="60">
                                            </el-table-column>
                                            <el-table-column prop="sequenceNumber" label="姓名" >
                                            </el-table-column>
                                            <el-table-column prop="AttributeEncoding" label="手机">
                                            </el-table-column>
                                            <el-table-column prop="startUsing" label="绑定类型">
                                            </el-table-column>
                                            <el-table-column prop="startUsing1" label="注册用户">
                                            </el-table-column>
                                            <el-table-column prop="startUsing2" label="备注">
                                            </el-table-column>
                                            <el-table-column prop="startUsing2" label="操作">
                                                <template slot-scope="scope">
                                                    <el-button type="text" size="small" @click=""  >删除</el-button>
                                                </template>
                                            </el-table-column>
                                            </el-table>    
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-collapse-transition>
                        </el-tab-pane>

                      </el-tabs>
                    </template>
                </el-row>
                    </el-col>
                </el-row>

            </el-col>
        </el-row>
        
    </div>
</template>

<script>
import Btm from '../../base/btm/btm'
import Textbox from '../../base/textbox/textbox'
import Tree from '../../base/tree/tree'
    export default{
        name:'userList',
        data(){
            return {
                    componyTree: [{
                        label: '商品规格组',
                        children: [{
                            label: '颜色',
                            },
                            {
                             label: '尺码',
                             children: [{
                            
                            label: '男服',
                            
                            
                            },{label: '女服'}] 
                            }],
                        }],
                 tableData1: [{
                      sequenceNumber: '1',
                      AttributeEncoding: '20171012',
                      attributeName: '',
                      startUsing: '',
                      startUsing1: '红',
                      startUsing2: 'X',
                      startUsing3: '件',
                      startUsing4: '',
                      startUsing5: '',
                      startUsing6: '',
                      startUsing7: '',
                      startUsing8: '',
                      startUsing9: '',
                      startUsing10: '',
                    }, {
                      sequenceNumber: '2',
                      AttributeEncoding: '20171013',
                      attributeName: '',
                      startUsing: '',
                      startUsing1: '红',
                      startUsing2: 'M',
                      startUsing3: '件',
                      startUsing4: '',
                      startUsing5: '',
                      startUsing6: '',
                      startUsing7: '',
                      startUsing8: '',
                      startUsing9: '',
                      startUsing10: '',
                    }, {
                      sequenceNumber: '3',
                      AttributeEncoding: '20171112',
                      attributeName: '',
                      startUsing: '',
                      startUsing1: '绿',
                      startUsing2: 'X',
                      startUsing3: '箱',
                      startUsing4: '',
                      startUsing5: '',
                      startUsing6: '',
                      startUsing7: '',
                      startUsing8: '',
                      startUsing9: '',
                      startUsing10: '',
                    },{
                      sequenceNumber: '4',
                      AttributeEncoding: '20171113',
                      attributeName: '',
                      startUsing: '',
                      startUsing1: '绿',
                      startUsing2: 'M',
                      startUsing3: '箱',
                      startUsing4: '',
                      startUsing5: '',
                      startUsing6: '',
                      startUsing7: '',
                      startUsing8: '',
                      startUsing9: '',
                      startUsing10: '',
                    },], 
                    tableData4: [{
                      sequenceNumber: '1',
                      AttributeEncoding: '20171012',
                      attributeName: '20171012',
                      startUsing: '20171012',
                      startUsing1: '20171012',
                      startUsing2: '',
                    }, {
                      sequenceNumber: '2',
                      AttributeEncoding: '20171013',
                      attributeName: '20171013',
                      startUsing: '20171013',
                      startUsing1: '20171013',
                      startUsing2: '',
                    }, {
                      sequenceNumber: '3',
                      AttributeEncoding: '20171112',
                      attributeName: '20171112',
                      startUsing: '20171112',
                      startUsing1: '20171112',
                      startUsing2: '',
                    }, {
                      sequenceNumber: '4',
                      AttributeEncoding: '20171113',
                      attributeName: '20171113',
                      startUsing: '20171113',
                      startUsing1: '20171113',
                      startUsing2: '',
                    }],
                    textboxipt2:[{
                    must: '',
                    title: '品类',
                    place: ''                
                },{
                    must: '',
                    title: '系列',
                    place: ''                 
                },{
                    must: '',
                    title: '性别',
                    options:[{
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
                    }]                
                },{
                    must: '',
                    title: '季节',
                    options:[{
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
                    }]                
                },{
                    must: '',
                    title: '年份',
                    place: ''                 
                },{
                    must: '',
                    title: '其他属性',
                    place: ''                 
                }],
                activeName: 'second',
                try:{
                "groupId": 2,
                "stockId": 1,
                "addressId": 8,
                "completeAddress": "str33ing",
                "transportMethodId": 1,
                "contactPerson": "stri55ng",
                "phone": "18200326666",
                "logisticsCompany": "str55ing",
                "isDefault": true,
                "remark": "st54ring"
                },
                ifShow2:true,
                textboxipt:[{
                    must: '',
                    title: '租户编码',
                    place: '请输入菜单编码',
                    input:''                
                },{
                    must: '',
                    title: '租户名称',
                    input:'',
                    options:[{
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
                    }]                
                },{
                    must: '',
                    title: '手机号',
                    place: '',
                    input:''                 
                },{
                    must: '',
                    title: '注册时间',
                    input:'',
                    options:[{
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
                    }]                
                },{
                    must: '',
                    title: '行政区域',
                    place: '' ,
                    input:''                
                },{
                    must: '',
                    title: '地址',
                    input:'',
                    options:[{
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
                    }]                
                },{
                    must: '',
                    title: '备注',
                    place: '',
                    input:''                 
                }],
                textboxipt1:[{
                    must: '',
                    title: '集团编码',
                    place: '',
                    input:''                
                },{
                    must: '',
                    title: '集团名称',
                    input:'',
                    options:[{
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
                    }]                
                },{
                    must: '',
                    title: '本位币种',
                    place: '',
                    input:''                 
                },{
                    must: '',
                    title: '会计制度',
                    input:'',
                    options:[{
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
                    }]                
                },{
                    must: '',
                    title: '启用年月',
                    place: '' ,
                    input:''                
                },{
                    must: '',
                    title: '状态',
                    input:'',
                    options:[{
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
                    }]                
                },{
                    must: '',
                    title: '收费',
                    place: '',
                    input:''                 
                },{
                    must: '',
                    title: '会计制度',
                    input:'',
                    options:[{
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
                    }]                
                }],
                bottonbox:{
                    url: '/tenant/tenantManagement',
                   botton:[{
                    class: 'erp_bt bt_back',
                    imgsrc: '../../../static/image/common/bt_back.png',
                    text: '返回'
                },{
                    class: 'erp_bt bt_add',
                    imgsrc: '../../../static/image/common/bt_add.png',
                    text: '新增'
                },{
                    class: 'erp_bt bt_save',
                    imgsrc: '../../../static/image/common/bt_save.png',
                    text: '保存'
                },{
                    class: 'erp_bt bt_excel',
                    imgsrc: '../../../static/image/common/bt_excel.png',
                    text: 'Excel'
                },{
                    class: 'erp_bt bt_print',
                    imgsrc: '../../../static/image/common/bt_modify.png',
                    text: '打印'
                },{
                    class: 'erp_bt bt_version',
                    imgsrc: '../../../static/image/common/bt_start.png',
                    text: '启用'
                },{
                    class: 'erp_bt bt_auxiliary',
                    imgsrc: '../../../static/image/common/bt_stop.png',
                    text: '停用'
                },{
                    class: 'erp_bt bt_save',
                    imgsrc: false,
                    text: '注册集团'
                }]},
                bottonbox1:{
                    url: '/tenant/tenantManagementAdd',
                   botton:[{
                    class: 'erp_bt bt_save',
                    imgsrc: '../../../static/image/common/increment.png',
                    text: '增行'
                },{
                    class: 'erp_bt bt_interposition',
                    imgsrc: '../../../static/image/common/interposition.png',
                    text: '插行'
                },{
                    class: 'erp_bt bt_eraseline',
                    imgsrc: '../../../static/image/common/eraseline.png',
                    text: '删行'
                },{
                    class: 'erp_bt bt_excel',
                    imgsrc: '../../../static/image/common/bt_excel.png',
                    text: 'Excel'
                },{
                    class: 'erp_bt bt_auxiliary',
                    imgsrc: '../../../static/image/common/bt_auxiliary.png',
                    text: '辅助功能'
                }]},
                bottonbox2:{
                    url: '/tenant/tenantManagementAdd',
                   botton:[{
                    class: 'erp_bt bt_excel',
                    imgsrc: false,
                    text: '功能增补'
                },{
                    class: 'erp_bt bt_auxiliary',
                    imgsrc: false,
                    text: '功能延期'
                }]},
                value: '',

                    pageIndex:-1,//分页的当前页码
			        totalPage:20,//当前分页总数
            }
        },
        created:function(){
            
            
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            },
            btmlog:function(data){
                               
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            switch(){
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            handleSelectionChange(val) {//点击复选框选中的数据
            },
            storageData(e){//点击新增跳转
                var flag=false;
                var slidbarData=this.$store.state.slidbarData;//储存页签数组
                let name = '用户资料-列表';
                if(slidbarData.length==0){//slidbarData为空
                    flag=true;
                }else{//slidbarData不为空
                    for(var i=0;i<slidbarData.length;i++){
                        if(slidbarData[i].name==name){//相同页签
                            flag=false;
                            break;
                        }else{
                        flag=true;
                        }
                    }
                }
                //var pushItem={'name':name,'url':menuUrl+'/'+idparam};
                var pushItem={'name':'用户资料-列表','url':'userDataList','params':'default'}
                this.$store.state.url='/userDataList/default';//储存当前url
                if(flag){
                    slidbarData.push(pushItem);
                }
        
                this.switch();
                
            },

        },
        components:{
            Btm,
            Textbox,
            Tree
        }
    }
</script>

<style scoped>
.h4-title{
    background-color: #fff;
    padding: 20px 0 20px 15px;
}
.table-width{
    width: calc(100% - 200px);
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
.tenant .el-tabs__nav-scroll{
    margin-left: 20px;
}
/* 重写checkbox */
.tenant-manager-wrapper .el-checkbox__inner{
    width: 24px;
    height: 24px;
    border-radius:50% !important; 
}
.tenant-manager-wrapper .el-checkbox__inner::after{
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
.tenant-manager-wrapper .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.tenant-manager-wrapper .el-table td{
    padding: 3px 0;
}
.tenant-manager-wrapper .el-table__body{
    text-align: center;
}
/* 重写el-pagination样式 */
</style>