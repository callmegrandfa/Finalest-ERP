<template>
    <div class="customer-infor-wrapper" style="background:#fff;width:100%;float:left">
        <query :data="querychend"  v-on:listquery="querylog"></query>
        <div id="cp" style="float:left">
        <el-row style="">
            <el-col  class="border-left" :span="24" id="bg-white">
                <btm :date="bottonbox" v-on:listbtm="btmlog"> </btm>
                <tree :datc="componyTree"></tree>
                 <el-row class="table-width pt10 pr10 pb10" style="float:left">
                    <el-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24" class="ml10">
                         <el-table :data="tableData" border style="width: 100%" class="text-center">
                            <el-table-column prop="date" label="序号" width="60">
                                
                            </el-table-column>
                            <el-table-column  prop="name" label="" width="50">
                                <template slot-scope="scope">
                                    <el-checkbox  ></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column prop="address" label="属性编码">
                            </el-table-column>
                            <el-table-column prop="address2" label="属性名称">
                                <template slot-scope="scope">
                                    <el-button type="text"    >{{tableData[scope.$index].address2}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column prop="address3" label="状态" width="">
                            </el-table-column>
                            <el-table-column prop="address4" label="控件类型">
                            </el-table-column>
                            <el-table-column prop="address5" label="显示顺序">
                            </el-table-column>
                            <el-table-column prop="address6" label="必填" width="">
                                <template slot-scope="scope">
                                    <el-checkbox  ></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column prop="address7" label="备注" width="">
                            </el-table-column> 
                            <el-table-column prop="address8" label="操作" width="">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="modify(scope.row)"  >查看</el-button>
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
                    url: '/commodity/commodityPropertyDetails',
                   botton:[{
                    class: 'erp_bt bt_add',
                    imgsrc: '../../../static/image/common/bt_add.png',
                    text: '新增'
                },{
                    class: 'erp_bt bt_del',
                    imgsrc: '../../../static/image/common/bt_del.png',
                    text: '删除'
                },{
                    class: 'erp_bt bt_audit',
                    imgsrc: '../../../static/image/common/bt_audit.png',
                    text: '审核'
                },{
                    class: 'erp_bt bt_in',
                    imgsrc: '../../../static/image/common/bt_in.png',
                    text: '导入'
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
                demand:[{
                    must: '',
                    title: '属性编码',
                    place: '请录入单号'                
                },{
                    must: '',
                    title: '属性名称',
                    place: '请录入单号'                 
                },{
                    must: '',
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
                    must: '',
                    title: '必填',
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
                                 date:'0',
                                 name: '1',
                                address: '1',
                                address2: '材质',
                                address3: '已启用',
                                address4: '下拉',
                                address5: '1',
                                address6: '',
                                address7: '改姓可',
                                address8: '',
                            }, {
                                 date:'0', 
                                name: '1',
                                address: '1.1',
                                address2: '材质',
                                address3: '已停用',
                                address4: '日期',
                                address5: '2',
                                address6: '好用',
                               
                                address7: '好用',
                                address8: '',
                            }, {
                                 date:'',
                                name: '1',
                                address: '1.2',
                                address2: '洗涤方式',
                                address3: '已启用',
                                address4: '手工录入',
                                address5: '3',
                                address6: '',
                                
                                address7: '不好用',
                                address8: '',
                            }, {
                                 date:'0',
                                name: '1',
                                address: '2',
                                address2: '款式',
                                address3: '已停用',
                                address4: '关联档案',
                                
                                address5: '4',
                                address6: '',
                                address7: '',
                                address8: '',
                        }],

                    componyTree: [{
                        label: '商品属性',
                        children: [{
                            label: '材质',
                            children: [{
                            // label: '材质',
                            label: '洗涤方式'
                            }
                            ],
                        },
                            {
                             label: '款式',
                             children: [{
                            
                            }] 
                            }],
                        

                        
                        }],
                pageIndex:1,//分页的当前页码
                totalPage:0,//当前分页总数
                oneItem:10,//每页有多少条信息
                multipleSelection: [],//复选框选中数据
                page:1,//当前页
                treeCheck:[],
                isClick:[],
                load:true,
                totalItem:0,//总共有多少条消息
                tableLoading:true,
                treeLoading:true,
                Sorting:'',//table搜索
            }
        },
        created:function(){
            this.datashop();
            this.loadTableData();
        },
        mounted:function(){   
            let content1=document.getElementById('bg-white');//设置高度为全屏
            let height1=window.innerHeight-123;
            content1.style.minHeight=height1+'px';
        },
        methods:{
            modify(row){
                this.$store.state.url='/commodity/commodityPropertyDetails/'+row.address5;
                this.$router.push({path:this.$store.state.url});
            },
            btmlog:function(data){
                let oleftBox=document.getElementById('left-box');
                oleftBox.style.display="block";
                let ocate= document.getElementById('cp')
                ocate.style.width="calc(100% - 275px)";
            },
            querylog:function(data){
                let _this=this;
                if(data){
                    let ocate= document.getElementById('cp')
                    ocate.style.width="100%";
                    _this.bottonbox.botton.push({
                        class: 'erp_bt bt_auxiliary',
                        imgsrc: '../../../static/image/common/bt_stop.png',
                        text: '查询'
                    })
                }
            },
            loadTableData(){
                let _this=this;
                _this.tableLoading=true;
                _this.$axios.gets('/api/services/app/ModuleManagement/GetAll',{SkipCount:(_this.page-1)*_this.oneItem,MaxResultCount:_this.oneItem,Sorting:_this.Sorting}).then(function(res){
                    console.log(res)
                })
            },
            datashop(){
                for(var i=0;i<this.tableData.length;i++){
                    this.tableData[i].date=i+1;
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
.ml10{
    margin-left: 10px;
}
.pt10{
    padding-top: 10px;
}
.border-left{
    border-left: 1px solid #E4E4E4;
}
#cp{
    width: calc(100% - 275px);
}
.table-width{
    width: calc(100% - 200px);
}
</style>

<style>
.el-checkbox__inner{
    width: 16px ;
    height: 16px ;
    background: #f4f4f5 ;
}
.el-checkbox__inner::after{
    left: 4px ;
    top: -2px ;
}
</style>