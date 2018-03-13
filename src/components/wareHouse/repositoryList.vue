<template>
  <div class="res-list">
      <el-row class="bg-white">
            <el-col :span="ifWidth?5:0" v-show="ifWidth">
                <el-row class="h48 pl15">
                    <el-col :span="18">
                        <i class="el-icon-search"></i>
                        <span>查询</span>
                    </el-col>
                    <el-col :span="5">
                        <span class="fs12 search_info_open" @click="closeLeft">-</span>
                    </el-col>
                </el-row>

                <el-row class="mt10"> 
                    <div class="bgcolor smallBgcolor">
                        <label>编号</label>
                        <el-input placeholder="" v-model="searchCode"></el-input>
                    </div> 
                </el-row>

                <el-row>
                    <div class="bgcolor smallBgcolor">
                        <label>名称</label>
                        <el-input placeholder="" v-model='searchName'></el-input>
                    </div> 
                </el-row>

                <el-row>
                    <div class="bgcolor smallBgcolor">
                        <label>业务地区</label>
                        <el-input placeholder="" v-model="searchArea"></el-input>
                    </div>
                </el-row>

                <el-row>
                    <div class="bgcolor smallBgcolor">
                        <label>仓库类型</label>
                        <el-select v-model="searchType" placeholder="">
                            <el-option v-for="item in stockType"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </el-row>

                <el-row style="text-align:center;">
                    <div class="bgcolor smallBgcolor">
                        <span class="search-btn" @click="searchList">查询</span>
                    </div>
                </el-row>
            </el-col>

            <el-col :span="ifWidth?19:24" class="border-left">
                <el-row class="h48">
                    <el-col :span="2" class="search-block"  v-show="!ifWidth">
                        <div style="display:inline-block;line-height:47px" @click="openLeft">
                            <img src="../../../static/image/common/search_btn.png">
                        </div>
                        <div style="display:inline-block;margin-left:2px;font-size:16px;" @click="openLeft">
                            <span>查询</span>
                        </div>
                        <div class="out-img" @click="openLeft">
                            <span>+</span>
                        </div>
                    </el-col>

                    <el-col :span="22" class="pt5">
                        <button class="erp_bt bt_add" @click="goDetail">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_add.png">
                            </div>
                            <span class="btDetail">新增</span>
                        </button>

                        <button @click="delRow" class="erp_bt bt_del">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_del.png">
                            </div>
                            <span class="btDetail">删除</span>
                        </button>

                        <button class="erp_bt bt_excel">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_excel.png">
                            </div>
                            <span class="btDetail">Excel</span>
                        </button>

                        <button class="erp_bt bt_auxiliary">
                            <div class="btImg">
                                <img src="../../../static/image/common/bt_auxiliary.png">
                            </div>
                            <span class="btDetail">辅助功能</span>
                        </button>
                    </el-col>
                    
                </el-row>

                <el-row class="pl10 pt10 pr10 pb10">
                    <el-col :span="24">
                        <el-table :data="allList" border @selection-change="handleSelectionChange" style="width: 100%" stripe>
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="ouId" label="所属组织" ></el-table-column>
                            <el-table-column prop="stockCode" label="仓库编码" ></el-table-column>
                            <el-table-column prop="stockName" label="仓库名称"></el-table-column>
                            <el-table-column prop="stockFullName" label="仓库全称"></el-table-column>
                            <el-table-column prop="stockTypeId" label="仓库类型">
                                <template slot-scope="scope">
                                    <el-input v-show="scope.row.status==0" :class="scope.$index%2==0?'bgw':'bgg'" v-model='stockType[0].label' disabled=""></el-input>
                                    <el-input v-show="scope.row.status==1" :class="scope.$index%2==0?'bgw':'bgg'" v-model='stockType[1].label' disabled=""></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column prop="opAreaId_AreaName" label="业务地区"></el-table-column>
                            <el-table-column prop="stockAddress" label="地址"></el-table-column>
                            <el-table-column prop="manager" label="负责人"></el-table-column>
                            
                            <el-table-column prop="status" label="状态">
                                <template slot-scope="scope">
                                    <el-input v-show="scope.row.status===''" :class="scope.$index%2==0?'bgw':'bgg'" v-model='status[0].label' disabled=""></el-input>
                                    <el-input v-show="scope.row.status===0" :class="scope.$index%2==0?'bgw':'bgg'" v-model='status[1].label' disabled=""></el-input>
                                    <el-input v-show="scope.row.status===1" :class="scope.$index%2==0?'bgw':'bgg'" v-model='status[2].label' disabled=""></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <!-- <span>{{scope.row}}</span> -->
                                    <!-- <el-button v-on:click="handleEdit(scope.$index)" type="text"  size="small">修改</el-button> -->
                                    <!-- <el-button v-show='scope.$index==ifSave' v-on:click="handleSave(scope.$index)" type="text" size="small">保存</el-button>  -->
                                    <el-button v-on:click="goModify(scope.row.id)" type="text" size="small">查看</el-button>
                                    <el-button v-on:click="handleDelete(scope.$index,scope.row.id)" type="text" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table> 
                    
                        <el-row>
                            <el-col :span='6'>
                                <div style="margin-top:20px;" class="ml10">
                                        记录<span>{{total}}</span>，当前第<span>{{page}}</span>页，共<span>{{totalPage}}</span>页
                                </div>
                                
                            </el-col>
                            <el-col :span="18">
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
        name:'repositoryList',
        
        created:function(){
            this.getAllList();
            
        },

        methods:{
            getAllList:function(){//获取所有仓库列表

                // ouId (integer, optional): 组织单元ID ,
                // stockCode (string, optional): 仓库编码 ,
                // stockName (string, optional): 仓库名称 ,
                // stockFullName (string, optional): 仓库全称 ,
                // opAreaId (integer, optional): 业务地区 ,
                // adAreaId (integer, optional): 行政地区 ,
                // stockTypeId (integer, optional): 仓库类型 ,
                // invTypeId (integer, optional): 库存分类 ,
                // fax (string, optional): 传真 ,
                // email (string, optional): 邮箱 ,
                // status (integer, optional): 启用状态 ,
                // manager (string, optional): 负责人 ,
                // phone (string, optional): 电话 ,
                // remark (string, optional): 备注 ,
                // id (integer, optional)

                let self = this;
                this.$axios.gets('/api/services/app/StockManagement/GetRepositoryList',{OuId:'1',Draw:'1',Start:(self.page-1)*self.eachPage,Length:self.eachPage}).then(function(res){
                    console.log(res);
                    self.allList = res.data;
                    self.total = res.total;
                    self.totalPage = Math.ceil(res.total/self.eachPage)
                },function(res){
                    console.log('err'+res)
                })
            },

            searchList:function(){//根据条件查找仓库信息
                let self = this;
                this.$axios.gets('/api/services/app/StockManagement/GetRepositoryList',{OuId:'1',StockCode:self.searchCode,StockName:self.searchName,AreaCode:self.searchArea,StockTypeId:self.searchType,Start:'0',Length:'100'}).then(function(res){
                    console.log(res);
                    self.queryList=res.data;
                    self.allList = self.queryList;
                    self.total = res.total;
                })
            },

            handleEdit:function(index){//表格内编辑操作
			this.isEdit=index;//当选中行的索引值与列表中索引值相同，则编辑！
            console.log(index)
            },

            handleDelete:function(index,id){//表格内删除操作
                let self = this;
                this.allList.splice(index,1);
                console.log(id)
                this.$axios.deletes('/api/services/app/StockManagement/DeleteRepository',{id:id}).then(function(res){
                    console.log(res);
                    self.open('删除仓库成功','el-icon-circle-check','successERP')
                }).then(function(){

                })
            },

            handleSelectionChange(val) {//点击复选框选中的数据
                this.multipleSelection = val;
            },

            handleCurrentChange:function(val){//获取当前页码
                this.pageIndex=val;
                console.log(val)
                this.page = val;
                this.getAllList();
            },     

            delRow(){
                let self=this;
                if(self.multipleSelection.length>0){//表格
                    for(let i=0;i<self.multipleSelection.length;i++){
                        self.$axios.deletes('/api/services/app/StockManagement/DeleteRepository',{id:self.multipleSelection[i].id})
                        .then(function(res){
                            self.getAllList();
                            self.open('删除成功','el-icon-circle-check','successERP');
                        },function(res){
                            self.open('删除失败','el-icon-error','faildERP');
                        })
                    }
                };
            },

            goDetail(){
                this.$store.state.url='/repository/repositoryData/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            goModify:function(id){
                console.log(id)
                this.$store.state.url='/repository/repositoryModify/'+id
                // this.$store.state.url='/repository/default/repositoryModify/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },

            open(tittle,iconClass,className) {
                this.$notify({
                position: 'bottom-right',
                iconClass:iconClass,
                title: tittle,
                showClose: false,
                duration: 3000,
                customClass:className
                });
            },
           closeLeft:function(){
               let self = this;
               self.ifWidth = false;
           },
           openLeft:function(){
               let self = this;
               self.ifWidth = true;
           },
        },
        data(){
            return{ 
                allList:[],//获取所有的列表数据
                total:'',//数据总条数
                queryList:[],//将查询回来的数据保存为数组形式
                multipleSelection: [],//复选框选中数据
                listById:'',//根据id获取的list
               xx:'156416',
                getAllParam:{
                    OuId:'1',//组织单元ID()
                    Draw:'1',
                    Start:'0',//偏移量
                    Length:'100',//长度
                },
                queryId:'',//需要查询的stockId
                    
                pageIndex:-1,//分页的当前页码
			    totalPage:0,//当前分页总数
                page:1,//当前页
                eachPage:10,//一页显示的数量

                searchCode:'',//查询编号
                searchName:'',//查询名称
                searchArea:'',//查询业务地区
                searchType:'',//仓库类型

                stockTypeId:'',//左侧搜索框的仓库类型值
                ifWidth:true,

                status: [{
                    value:"",
                    label: '全部'
                    }, {
                    value: 0,
                    label: '禁用'
                    }, {
                    value: 1,
                    label: '启用'
                 }],
                 stockType:[{
                    value:0,
                    label: '仓库'
                    }, {
                    value:1,
                    label: '店铺'
                    }],
            }
        },
    }
</script>

<style scoped>
.res-list{
    width: 100%;
    height: 100%;
    background:#EEF1F5;
}

.w0{
    width: 0px;
}

.w20{
    width: 20%;
}
.w80{
    width: 80%;
}
w100{
    width: 100%;
}

.bg-white{
    background:white;
    border-radius: 3px;
    font-size: 14px;
}
.ml10{
    margin-left: 10px;
}
.mr10{
    margin-right: 10px;
}
.mt10{
    margin-top: 10px;
}
.pt5{
    padding-top: 5px;
}
.pt10{
    padding-top: 10px;
}
.pl10{
    padding-left: 10px;
}
.pl15{
    padding-left: 15px;
}
.btn{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    background:rgba(130, 170, 252, 1);
    border-radius: 3px;
    color: white;
    width: 100%;
    text-align: center;
    cursor: pointer;
}
.rbtn{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    background:rgba(242, 242, 242, 1);
    border-radius: 3px;
    width: 100%;
    text-align: center;
    cursor: pointer;
}
.input-need{
    outline: none;
    border:none;
    width: 100%;
}
input:-ms-input-placeholder{
    color: rgba(0, 0, 0, 0.349019607843137);
}

input::-webkit-input-placeholder{
    color: rgba(0, 0, 0, 0.349019607843137);
}
.h48{
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #E4E4E4;
}
.fs12{
    font-size: 12px;
}
.search_info_open{
    display: inline-block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    border: 1px solid #E3E3E3;
    color: #cccccc;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    margin-left: 20px;
}
.border-left{
    border-left: 1px solid #E4E4E4;
    min-height: 380px;
}
</style>
<style>
.search-block{
    border-right:1px solid #E3E3E3;
    line-height:47px;
    text-align:center;
    cursor: pointer;
}
.out-img{
    display: inline-block;
    width: 16px;
}
.out-img span{
    display: block;
    background-image: url(../../../static/image/common/btn-circle.png);
    background-repeat: no-repeat;
    background-position: center;
    color: #E3E3E3;
}
.res-list .cell .el-input__inner{
    border:none;
    text-align:center;
    padding:0;
}
.res-list .bgw .el-input__inner{
    background-color:white;
}
.res-list .bgg .el-input__inner{
    background-color:#FAFAFA;
}
</style>
