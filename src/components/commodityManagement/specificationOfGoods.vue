<template>
    <div class="customer-infor-wrapper" style="float:left;background:#fff;width:100%;">
        <query :data="querychend" v-on:listquery="querylog" ></query>
        <div id="bgl">
            <el-row >
                <el-col :span="24" class="border-left" id="bg-white">
                    <btm :date="bottonbox" v-on:listbtm="btmlog"> </btm>
                     <el-row>
                        <tree :datc="componyTree"></tree> 
                        <el-row class="watch pb10">
                            <el-col :span="24" >
                                <el-table :data="tableData" @selection-change="handleSelectionChange" border style="width: 100%">
                                    <el-table-column prop="date" label="序号" width="60">
                                    </el-table-column>
                                    <el-table-column type="selection" label="" width="50">
                                    </el-table-column>
                                    <el-table-column prop="address" label="规格值编码">
                                    </el-table-column>
                                    <el-table-column prop="address1" label="规格值名称">
                                    </el-table-column>
                                    <el-table-column prop="address2" label="备注" width="100">
                                    </el-table-column>
                                    <el-table-column prop="address3" label="创建人">
                                    </el-table-column>
                                    <el-table-column prop="address4" label="创建时间">
                                    </el-table-column>
                                    <el-table-column prop="address5" label="修改人" width="100">
                                    </el-table-column>
                                    <el-table-column prop="address6" label="修改时间" width="">
                                    </el-table-column>
                                    <el-table-column prop="address7" label="操作" width="">
                                        <template slot-scope="scope">
                                            <el-button type="text" size="small"  >删除</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            

                            <el-pagination
                             style="margin-top:20px;" 
                             class="text-right" 
                             background layout="total, prev, pager, next" 
                             
                             :page-count="totalPage" >
                             </el-pagination>   
                        </el-col>
                        </el-row> 
                    </el-row>

                </el-col>
            </el-row> 
        </div>
    </div>
</template>

<script>
import Query from '../../base/query/query'
import Btm from '../../base/btm/btm'
import Tree from '../../base/tree/tree'
    export default{
        name:'customerInfor',
        data(){
            return {
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
                bottonbox:{
                    url: '/commodityleimu/CommodityCategoriesDetails',
                   botton:[{
                    class: 'erp_bt bt_add',
                    imgsrc: '../../../static/image/common/bt_add.png',
                    text: '新增'
                },{
                    class: 'erp_bt bt_auxiliary',
                    imgsrc: 'img src="../../../static/image/common/u470.png',
                    text: '取消'
                },{
                    class: 'erp_bt bt_save',
                    imgsrc: '../../../static/image/common/bt_save.png',
                    text: '保存'
                },{
                    class: 'erp_bt bt_del',
                    imgsrc: '../../../static/image/common/bt_del.png',
                    text: '删除'
                },{
                    class: 'erp_bt bt_out',
                    imgsrc: '../../../static/image/common/bt_inOut.png',
                    text: '导出'
                },{
                    class: 'erp_bt bt_version',
                    imgsrc: '../../../static/image/common/bt_start.png',
                    text: '启用'
                },{
                    class: 'erp_bt bt_auxiliary',
                    imgsrc: '../../../static/image/common/bt_stop.png',
                    text: '停用'
                }]},
                querychend:{
                    up:'',
                    demand:[{
                    must: '',
                    title: '规格编码',
                    place: ''                
                },{
                    must: '',
                    title: '规格名称',
                    place: ''                 
                },{
                    must: '*',
                    title: '控件类型',
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
                    must: '*',
                    title: '状态',
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
                }]},
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
                                 date: '1',
                                 name: '',
                                address: '1',
                                address1: '机洗',
                                address2: '机洗',
                                address3: '',
                                address4: '',
                                address5: '',
                                address6: '',
                                address7: '删行'
                            }, {
                                date: '2',
                                 name: '',
                                address: '2',
                                address1: '手洗',
                                address2: '手洗',
                                address3: '',
                                address4: '',
                                address5: '',
                                address6: '',
                                address7: '删行'
                            }, {
                                date: '3',
                                 name: '',
                                address: '3',
                                address1: '混合洗',
                                address2: '混合洗',
                                address3: '',
                                address4: '',
                                address5: '',
                                address6: '',
                                address7: '删行'
                            }],

                    componyTree: [{
                        label: '商品规格',
                        children: [{
                            label: '颜色',
                            
                        },{
                           label: '尺码',
                        },{
                           label: '型号',
                        }]
                         
                        }],

                    pageIndex:-1,//分页的当前页码
              totalPage:100,//当前分页总数
            }
        },
        created:function(){       
            
        },
        mounted:function(){   
            let content1=document.getElementById('bg-white');//设置高度为全屏
            let height1=window.innerHeight-123;
            content1.style.minHeight=height1+'px';
        },
        methods:{
            handleSelectionChange(val) {//点击复选框选中的数据
            },
            btmlog:function(data){
                let oleftBox=document.getElementById('left-box');
                oleftBox.style.display="block";
                let ocate= document.getElementById('bgj')
                ocate.style.width="calc(100% - 275px)";
            },
            querylog:function(data){
                let _this=this;
                if(data){
                    let ocate= document.getElementById('bgj')
                    ocate.style.width="100%";
                    _this.bottonbox.botton.push({
                        class: 'erp_bt bt_auxiliary',
                        imgsrc: '../../../static/image/common/bt_stop.png',
                        text: '查询'
                    })
                }
            },
            packUp(){
                let oleftBox=document.getElementById('left-box');
                let Re=document.getElementById('refer');
                let obgl=document.getElementById('bgl');
                oleftBox.style.display="none";
                obgl.style.width="100%";
                Re.style.display="block";
            },
            refer(){
                let oleftBox=document.getElementById('left-box');
                let Re=document.getElementById('refer');
                let obgl=document.getElementById('bgl');
                obgl.style.width="calc(100% - 275px)";
                oleftBox.style.display="block";
                Re.style.display="none";
            }, 

        },
        components:{
            Query,
            Btm,
            Tree
        }
    }
</script>

<style scoped>
.erp_bt{
    padding: 0 8px !important;    
}
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
.bt_audit{
    background-color: rgb(225,153,51);
}
.bt_in{
    background-color: rgb(130,170,252);
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
.el-checkbox__inner{
    width: 16px;
    height: 16px;
    background: #f4f4f5;
}
.el-checkbox__inner::after{
    left: 4px;
    top: -2px;
}

.tree{
    float: left;
    width: 200px;
}
.watch{
    float: left;
    width: calc(100% - 200px);
    background-color: #fff;
}
#bgl{
    width: calc(100% - 275px);
    float: left;
    background-color: rgb(249,249,249);
}
.bgcolor{
    width: 100%;
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