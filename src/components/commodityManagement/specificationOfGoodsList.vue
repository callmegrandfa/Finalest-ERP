<template>
    <div class="customer-infor-wrapper" style="float:left;background:#fff;width:100%;">
        <query :data="querychend" v-on:listquery="querylog" ></query>
        <div id="bgz">
        <el-row >
            <el-col :span="24" class="border-left" id="bg-white">
                <btm :date="bottonbox" v-on:listbtm="btmlog"> </btm>
                 <el-row>
                    <tree :datc="componyTree"></tree> 
                    <el-row class="watch pb10">
                        <el-col :span="24">
                            <el-table @selection-change="handleSelectionChange" :data="tableData" border style="width: 100%">
                                <el-table-column prop="date" label="序号" width="60">
                                </el-table-column>
                                <el-table-column type="selection" label="" width="60">
                                </el-table-column>
                                <el-table-column prop="address5" label="规格组编码">
                                </el-table-column>
                                <el-table-column prop="address" label="规格组名称">
                                    <template slot-scope="scope">
                                        <el-button type="text"   >{{tableData[scope.$index].address5}}</el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="address1" label="状态">
                                </el-table-column>
                                <el-table-column prop="address2" label="类目" width="100">
                                </el-table-column>
                                <el-table-column prop="address3" label="备注">
                                </el-table-column>
                                <el-table-column prop="address4" label="操作">
                                    <template slot-scope="scope">
                                        <el-button type="text" size="small"  >查看</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination style="margin-top:20px;"  class="text-right"  background layout="total, prev, pager, next"  :page-count="totalPage" >
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
                    url: '/specification/specificationOfGoodsDetails',
                   botton:[{
                    class: 'erp_bt bt_add',
                    imgsrc: '../../../static/image/common/bt_add.png',
                    text: '新增'
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
                }]},
                querychend:{
                    up:'',
                    demand:[{
                    must: '',
                    title: '商品规格组',
                    place: ''                
                },{
                    must: '',
                    title: '规格组名称',
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
                    title: '类目',
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
                    title: '启用状态',
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
                                address1: '已提交',
                                address2: '鞋服',
                                address3: '',
                                address4: '查看',
                                address5: '颜色',
                            }, {
                                 date: '2',
                                 name: '',
                                address: '2',
                                address1: '不通过',
                                address2: '鞋服',
                                address3: '',
                                address4: '查看',
                                address5: '尺码',
                            }, {
                               date: '3',
                                 name: '',
                                address: '3',
                                address1: '已反审',
                                address2: '鞋服',
                                address3: '',
                                address4: '查看',
                                address5: '男服',
                            }, {
                                date: '4',
                                 name: '',
                                address: '4',
                                address1: '通过',
                                address2: '鞋服',
                                address3: '',
                                address4: '查看',
                                address5: '女服',
                        }],

                    componyTree: [{
                        label: '商品规格组',
                        children: [{
                            label: '颜色',
                            
                        },
                        {
                            label: '尺码',
                            children: [{
                            label: '男服'
                            },{
                            label: '女服'
                            }]
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
                let ocate= document.getElementById('bgz')
                ocate.style.width="calc(100% - 275px)";
            },
            querylog:function(data){
                let _this=this;
                if(data){
                    let ocate= document.getElementById('bgz')
                    ocate.style.width="100%";
                    _this.bottonbox.botton.push({
                        class: 'erp_bt bt_auxiliary',
                        imgsrc: '../../../static/image/common/bt_stop.png',
                        text: '查询'
                    })
                }
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
.bg-white{
    background: white;
    border-radius: 3px;
}
.pl10{
    padding-left: 10px;
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
.border-left{
    border-left: 1px solid #E4E4E4;
}
#bgz{
    float: left;
    width: calc(100% - 275px);
    background-color: rgb(249,249,249);
}
.watch{
    float: left;
    width: calc(100% - 200px);
    background-color: #fff;
}
</style>

<style>

.el-checkbox__inner{
    width: 18px;
    height: 18px;
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
    left: 4px;
    position: absolute;
    top: -2px;
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
</style>