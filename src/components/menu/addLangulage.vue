<template>
    <div class="langulage">
        <el-row>
            <el-col :span="24">
                <button @click="goBack" class="goBack"><i class="fa fa-angle-left" aria-hidden="true"></i> </button>
                <span class="pageName">语言列表（管理菜单的语言包）</span>
                <button class="erp_bt bt_add f_right" @click="addNew"><div class="btImg"><img src="../../../static/image/common/bt_add.png"></div><span class="btDetail">创建新的语言</span></button>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24" class="pd_15">
                <el-table :data="tableData" border style="width: 100%" stripe>
                    <el-table-column type="selection"></el-table-column>
                    <el-table-column prop="num" label="名字" ></el-table-column>
                    <el-table-column prop="userCode" label="代码"></el-table-column>
                    <el-table-column prop="userName" label="默认"></el-table-column>
                    <el-table-column prop="userGroup" label="创建时间"></el-table-column>
                    <el-table-column prop="group" label="启用状态（是/否）"></el-table-column>
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
                    num:'中文',
                    userCode:'cn',
                    userName:'是',
                    userGroup:'2018-1-1',
                    group:'是'
                    },{
                    num:'中文',
                    userCode:'cn',
                    userName:'是',
                    userGroup:'2018-1-1',
                    group:'是'
                    },{
                    num:'中文',
                    userCode:'cn',
                    userName:'是',
                    userGroup:'2018-1-1',
                    group:'是'
                    }, ],

                    pageIndex:-1,//分页的当前页码
			        totalPage:20,//当前分页总数
            }
        },
        created:function(){
            
            
        },
        methods:{
           handleCurrentChange(val) {//页码改变
                 let _this=this;
            }, 
            modify(row){

            },
            del(row){

            },
            goBack(){
                this.$store.state.url='/menu/menuDetail/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            addNew(){
                let _this=this;
                _this.$axios.posts('/api/services/app/Language/CreateOrUpdateLanguage',{
                    "language": {
                        "id": 0,
                        "name": "中文",
                        "icon": "fa",
                        "isEnabled": true
                    }
                    }).then(function(res){
                            console.log(res)
                    },function(res){
                        
                    })
            
            }
        },
    }
</script>

<style scoped>
.pd_15{
    padding: 0 15px;
}
.goBack{
     border: none;
     background-color: transparent; 
     color: #dcdcdc;
     font-size: 25px;
     cursor: pointer;
     display: block;
     float: left;
     height: 31px;
     width: 32px;
 }
 .pageName{
     display: block;
     float: left;
     height: 31px;
     line-height: 31px;
     font-family: 'microsoft yahei';
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
 }
 .f_right{
     float: right;
     margin-right: 10px;
     border-radius: 3px;
 }
 .f_right:hover{
    background-color: #354052;
}
.store-data-wrapper{
    width: 100%;
    height: auto;
}
.bg-white{
    background: white;
    border-radius: 3px;
}
.langulage .el-row{
    background-color: #fff;
    padding-top: 15px;
  }
 .langulage .goBack{
     border: none;
     background-color: transparent; 
     color: #dcdcdc;
     font-size: 25px;
     cursor: pointer;
     display: block;
     float: left;
     height: 31px;
     width: 32px;
 }
 .langulage .bgcolor.moreWidth{
     width: 505px;
 }
  .langulage .bgcolor.moreWidth .el-input{
      width: 423px;
  }
 .langulage .pageName{
     display: block;
     float: left;
     height: 31px;
     line-height: 31px;
     font-family: 'microsoft yahei';
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
 }
 .langulage .el-row:first-child{
   padding: 7px 0;
   border-bottom: 1px solid #e4e4e4;
  }
  .langulage .bgcolor .isGive{
    display: block;
    float: left;
    height: 100%;
    line-height: 35px;
  }
.langulage .bgcolor.longWidth{
    width: 100%;
    height:auto;
  }
 .langulage .bgcolor.longWidth .el-textarea{
   width: 423px;
   font-size: 12px;
 } 
 
 .langulage .bgcolor.longWidth .addZoo{
   float: left;
   width: calc(100% - 82px)
 }
.langulage .bgcolor.longWidth .add{
    display: block;
    width: 35px;
    height: 35px;
    border-radius: 3px;
    background-color: #c7c7c7;
    color: #fff;
    text-align: center;
    line-height: 35px;
    text-decoration: none;
    font-size: 23px;
    font-weight: bold;
    margin-bottom: 10px;
}
.langulage .bgcolor.longWidth .add:hover{
    background-color: #354052;
}
.langulage .bgcolor.longWidth .addRole{
  display: inline-block;
  width: 66px;
  height: 35px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  margin-right: 10px;
  cursor: pointer;
  position: relative;
}
.langulage .bgcolor.longWidth .addRole i{
  position: absolute;
  right: -4px;
  top: -4px;
  color: #cccccc;
}
.langulage .bgcolor.longWidth .addRole:hover i{
  color:#f66;
}
</style>

<style>
.langulage .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.langulage .el-table td{
    padding: 3px 0;
}
.langulage .el-table__body{
    text-align: center;
}
</style>


