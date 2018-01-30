<template>
    <div class="user-list-wrapper">
        <el-row class="bg-white">
            <el-col :span='24'>
                <el-row class="h48 pt5">
                    <button class="erp_bt bt_back"><div class="btImg"><img src="../../../static/image/common/bt_back.png"></div><span class="btDetail">返回</span></button>
                    <button class="erp_bt bt_add" @click="add"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">新增</span></button>
                    <button class="erp_bt bt_del"><div class="btImg"><img src="../../../static/image/common/bt_del.png"></div><span class="btDetail">删除</span></button>
                    <button class="erp_bt bt_start"><div class="btImg"><img src="../../../static/image/common/bt_start.png"></div><span class="btDetail">启用</span></button>
                    <button class="erp_bt bt_stop"><div class="btImg"><img src="../../../static/image/common/bt_stop.png"></div><span class="btDetail">停用</span></button>                  
                    <button class="erp_bt bt_out"><div class="btImg"><img src="../../../static/image/common/bt_inOut.png"></div><span class="btDetail">导出</span></button>
                </el-row>

                <el-row class="pl10 pt10 pr10 pb10">
                    <el-col :span="24">
                        <el-table :data="tableData" border style="width: 100%" stripe>
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="num" label="系统" ></el-table-column>
                            <el-table-column prop="userCode" label="模块代码"></el-table-column>
                            <el-table-column prop="userName" label="用户名称"></el-table-column>
                            <el-table-column prop="userGroup" label="模块名称"></el-table-column>
                            <el-table-column prop="group" label="web地址"></el-table-column>
                            <el-table-column prop="idType" label="上级菜单"></el-table-column>
                            <el-table-column prop="language" label="状态"></el-table-column>
                            <el-table-column label="操作">
                                 <template slot-scope="scope">
                                    <el-button type="text" size="small"  @click="modify(scope.row)" >修改</el-button>
                                    <el-button type="text" size="small"  @click="del(scope.row)" >删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>

                        <el-row>
                            <el-col :span='10'>
                                <span style="display:inline-block;margin-top:20px;">记录 40，当前第 1 页，共 4 页</span>
                            </el-col>
                            <el-col :span='14'>
                                <el-pagination style="margin-top:20px;" class="text-right" background layout="total, prev, pager, next"  :page-count="totalPage" v-on:current-change="handleCurrentChange"></el-pagination>
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
        name:'userList',
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
                    ifAction:'',
                    num:'',
                    userCode:'',
                    userName:'',
                    userGroup:'',
                    group:'',
                    idType:'',
                    language:'',
                    certainType:'',
                    status:'',
                    failDate:'',
                    role:'',
                    },{
                    ifAction:'',
                    num:'',
                    userCode:'',
                    userName:'',
                    userGroup:'',
                    group:'',
                    idType:'',
                    language:'',
                    certainType:'',
                    status:'',
                    failDate:'',
                    role:'',
                    },{
                    ifAction:'',
                    num:'',
                    userCode:'',
                    userName:'',
                    userGroup:'',
                    group:'',
                    idType:'',
                    language:'',
                    certainType:'',
                    status:'',
                    failDate:'',
                    role:'',
                    },],

                    pageIndex:-1,//分页的当前页码
			        totalPage:20,//当前分页总数
            }
        },
        created:function(){
            
            
        },
        methods:{
            add(){
                this.$store.state.url='/menu/menuDetail/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
           handleCurrentChange(val) {//页码改变
                 let _this=this;
            }, 
            modify(row){

            },
            del(row){

            },
        },
    }
</script>

<style scoped>
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
</style>

<style>
.user-list-wrapper .el-input input{
    border:none;
    height: 30px;
    line-height: 30px;
    padding-left: 0;
}
/* 重写checkbox */
.user-list-wrapper .el-checkbox__inner{
    width: 24px;
    height: 24px;
    border-radius:50% !important; 
}
.user-list-wrapper .el-checkbox__inner::after{
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
.user-list-wrapper .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.user-list-wrapper .el-table td{
    padding: 3px 0;
}
.user-list-wrapper .el-table__body{
    text-align: center;
}
/* 重写el-pagination样式 */
</style>