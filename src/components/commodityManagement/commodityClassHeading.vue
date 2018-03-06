<template>
    <div class="customer-infor-wrapper" style="float:left;background:#fff;width:100%;">
        <query :data="querychend" v-on:listquery="querylog" ></query>  
        <div id="bgj">
            <el-row >
                <el-col :span="24" class="border-left" id="bg-white" style="background-color:rgb(249,249,249)">
                    <btm :date="bottonbox" v-on:listbtm="btmlog"> </btm>
                     <el-row>
                        <el-tree oncontextmenu="return false" ondragstart="return false"  onbeforecopy="return false" style="-moz-user-select: none"
                             :data="classTree"
                             :props="defaultProps"
                             node-key="id"
                             default-expand-all
                             ref="tree"
                             :expand-on-click-node="false"
                             :filter-node-method="filterNode">
                        </el-tree>
                        <el-row class="biao pb10" style="background:#fff">
                            <el-col :span="24" >
                                <el-table :data="tableData" @selection-change="handleSelectionChange" border style="width: 100%">
                                    <el-table-column prop="date" label="序号" width="60">
                                    </el-table-column>
                                    <el-table-column type="selection" label="" width="50">
                                    </el-table-column>
                                    <el-table-column prop="address" label="上级类目">
                                    </el-table-column>
                                    <el-table-column prop="address1" label="类目编码">
                                    </el-table-column>
                                    <el-table-column prop="address2" label="类目名称" width="">
                                    </el-table-column>
                                    <el-table-column prop="address3" label="状态">
                                    </el-table-column>
                                    <el-table-column prop="address4" label="助记码">
                                    </el-table-column>
                                    <el-table-column prop="address5" label="服务类" width="80">
                                        <template slot-scope="scope">
                                            <el-checkbox  ></el-checkbox>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="address6" label="系统默认" width="80">
                                        <template slot-scope="scope">
                                            <el-checkbox  ></el-checkbox>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="address7" label="备注" width="">
                                    </el-table-column>
                                    <el-table-column prop="address8" label="创建人" width="">
                                    </el-table-column>
                                    <el-table-column prop="address9" label="创建时间" width="100">
                                    </el-table-column>
                                    <el-table-column prop="address10" label="修改人" width="">
                                    </el-table-column>
                                    <el-table-column prop="address11" label="修改时间" width="100">
                                    </el-table-column>
                                    <el-table-column prop="address12" label="删除" width="">
                                        <template slot-scope="scope">
                                            <el-button type="text" size="small"  >删除</el-button>
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
                querychend:{
                    up:'',
                    demand:[{
                    must: '',
                    title: '商品类目',
                    place: ''                
                },{
                    must: '*',
                    title: '服务类(虚拟)',
                    place: '1223'                 
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
                bottonbox:{
                    url: '/commodityleimu/CommodityCategoriesDetails',
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
                classTree:  [//类目tree
                    // {areaName:'根目录',id:'0',items:[]},
                ],
                defaultProps: {
                    children: 'items',
                    label: 'areaName',
                    id:'id'
                },
                tableData: [{
                                 date: '1',
                                 name: '1',
                                address: '商品类目',
                                address1: '1',
                                address2: '鞋服',
                                address3: '已启用',
                                address4: '1',
                                address5: '',
                                address6: '',
                                address7: '',
                                address8: '张三',
                                address9: '2018.02.02',
                                address10: '张三',
                                address11: '2018.02.02',
                                address12: '删除',
                            }, {
                                 date: '2',
                                 name: '1',
                                address: '商品类目',
                                address1: '2',
                                address2: '母婴',
                                address3: '已停用',
                                address4: '2',
                                address5: '',
                                address6: '',
                                address7: '',
                                address8: '张三',
                                address9: '2018.02.02',
                                address10: '张三',
                                address11: '2018.02.02',
                                address12: '删除',
                            }, {
                                 date: '3',
                                 name: '1',
                                address: '宝贝食品',
                                address1: '3',
                                address2: '儿童玩具',
                                address3: '已启用',
                                address4: '3',
                                address5: '',
                                address6: '',
                                address7: '',
                                address8: '张三',
                                address9: '2018.02.02',
                                address10: '张三',
                                address11: '2018.02.02',
                                address12: '删除',
                            },],

                    componyTree: [{
                        label: '商品类目',
                        children: [{
                            label: '鞋服',  
                        },
                        {
                            label: '母婴',  
                        },
                        {
                        label: '宝宝食品',
                            children: [{
                               label: '儿童玩具',  
                            },
                            {
                               label: '美容',  
                            },
                            {
                               label: '服务',  
                            }] 
                        }],
                        }],

                    pageIndex:-1,//分页的当前页码
              totalPage:100,//当前分页总数
            }
        },
        mounted:function(){   
            let content1=document.getElementById('bg-white');//设置高度为全屏
            let height1=window.innerHeight-123;
            content1.style.minHeight=height1+'px';
        },
        created:function(){       
           this.loadTree();
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

        },
        loadTree(){//获取tree data
                let _this=this;
                _this.treeLoading=true;
                _this.$axios.gets('/api/services/app/AreaManagement/GetAllDataTree',{AreaType:_this.AreaType})
                .then(function(res){
                    console.log(res)
                    _this.componyTree=res.result
                    _this.treeLoading=false;
                    _this.loadIcon();
               },function(res){
                   _this.treeLoading=false;
               })
            },
        loadIcon(){
            let _this=this;
            _this.$nextTick(function () {
                $('.preNode').remove();   
                $('.el-tree-node__label').each(function(){
                    if($(this).parent('.el-tree-node__content').next('.el-tree-node__children').text()==''){
                        $(this).prepend('<i class="preNode fa fa-file" aria-hidden="true" style="color:#f1c40f;margin-right:5px"></i>')
                    }else{
                        $(this).prepend('<i aria-hidden="true" class="preNode fa fa-folder-open" style="color:#f1c40f;margin-right:5px"></i>')
                    }
                })
            })
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
.biao{
    float: left;
    width: calc(100% - 200px)
}
#bgj{
    float: left;
    width: calc(100% - 275px);
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
</style>