<template>
  <div class="data-list-container">
      <el-row>
          <el-col :span="5" class="bg-white">
              <el-row class="height35">
                  <el-col :span='4'>
                      <span>编码</span>
                  </el-col>
                  <el-col :span='20'>
                      <input v-model='queryId'
                             type="text" 
                             placeholder="请录入编码" 
                             class="input-need">
                  </el-col>
              </el-row>
          </el-col>
          <el-col :span="5" class="ml10 bg-white">
              <el-row  class="height35">
                  <el-col :span='4'>
                      <span>名称</span>
                  </el-col>
                  <el-col :span='20'>
                      <input type="text" placeholder="请录入名称" class="input-need">
                  </el-col>
              </el-row>
          </el-col>
          <el-col :span="5" class="ml10 bg-white">
              <el-row  class="height35">
                  <el-col :span='6'>
                      <span>业务地区</span>
                  </el-col>
                  <el-col :span='18'>
                      <input type="text" placeholder="请录入编码" class="input-need">
                  </el-col>
              </el-row>
          </el-col>
          <el-col :span="5" class="ml10 bg-white">
              <el-row  class="height35">
                  <el-col :span='6'>
                      <span>仓库类型</span>
                  </el-col>
                  <el-col :span='18'>
                      <input type="text" placeholder="请录入编码" class="input-need">
                  </el-col>
              </el-row>
          </el-col>
          <el-col :span="2" class="ml10">
              <span class="search-btn" style="cursor:pointer;" @click="getStockListById">查询</span>
          </el-col>
      </el-row>

      <div class="bg-white mr10 mt10 pt10">
          <el-row>
                    <button class="erp_bt bt_add" @click="goDetail">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_add.png">
                        </div>
                        <span class="btDetail">新增</span>
                    </button>
              
                    <button class="erp_bt bt_print">
                        <div class="btImg">
                            <img src="../../../static/image/common/bt_print.png">
                        </div>
                        <span class="btDetail">打印</span>
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
              
          </el-row>

          <el-row class="pt10">
              <el-col :span="24">
                  <el-table :data="allList" border style="width: 100%" stripe>
                    <el-table-column prop="ouId" label="业务组织" ></el-table-column>
                    <el-table-column prop="stockCode" label="仓库编码" ></el-table-column>
                    <el-table-column prop="stockFullName" label="仓库名称"></el-table-column>
                    <el-table-column prop="stockName" label="仓库简称"></el-table-column>
                    <el-table-column prop="stockTypeId" label="仓库类型"></el-table-column>
                    <el-table-column prop="opAreaId" label="业务地区"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                    <el-table-column prop="manager" label="负责人"></el-table-column>
                    <el-table-column prop="ifAllow" label="允许使用">
                        <template slot-scope="scope">
                            <el-checkbox v-model="allList[scope.$index].ifAllow" ></el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column label=" ">
                        <template slot-scope="scope">
                            <el-button v-on:click="goModify(scope.row.id)" type="text" size="small">查看</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <!-- <span>{{scope.row}}</span> -->
                            <!-- <el-button v-on:click="handleEdit(scope.$index)" type="text"  size="small">修改</el-button> -->
                            <!-- <el-button v-show='scope.$index==ifSave' v-on:click="handleSave(scope.$index)" type="text" size="small">保存</el-button>  -->
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
      </div>
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

                //  getAllParam:{
                //     OuId:'1',//组织单元ID()
                //     Draw:'1',
                //     Start:'0',//偏移量
                //     Length:'100',//长度
                // }

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

            getStockListById:function(){//根据stockID查找仓库信息

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
                this.$axios.posts('/api/services/app/StockManagement/QueryRepositoryDetail',{id:self.queryId}).then(function(res){
                    console.log(res);
                    self.queryList.push(res.result);
                    self.allList = self.queryList;
                })
            },

            searchListById:function(){//根据Id获取列表
                let self = this;
                this.$axios.gets('/api/services/app/StockAddressManagement/Get',{params:{Id:1}}).then(function(res){
                // console.log(res);

                self.listById = res.result;
              })
            },

            handleEdit:function(index){//表格内编辑操作
			this.isEdit=index;//当选中行的索引值与列表中索引值相同，则编辑！
            console.log(index)
            },

            handleDelete:function(index,id){//表格内删除操作
                this.allList.splice(index,1);
                console.log(id)
                this.$axios.deletes('/api/services/app/StockManagement/DeleteRepository',{id:id}).then(function(res){
                console.log(res);
                self.open('删除仓库成功','el-icon-circle-check','successERP')
              }).then(function(){

              })
            },

            handleCurrentChange:function(val){//获取当前页码
                this.pageIndex=val;
                console.log(val)
                this.page = val;
                this.getAllList();
            },

            deleteRepository:function(){//删除仓库
                this.$axios.deletes('/api/services/app/StockManagement/DeleteRepository',self.deleteId).then(function(res){
                // console.log(res);
              })
            },        

            goDetail(){
                this.$store.state.url='/repository/default/repositoryData/default'
                this.$router.push({path:this.$store.state.url})//点击切换路由
            },
            goModify:function(id){
                console.log(id)
                this.$store.state.url='/repository/default/repositoryModify/'+id
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
           
        },
        data(){
            return{ 
                allList:[],//获取所有的列表数据
                total:'',//数据总条数
                queryList:[],//将查询回来的数据保存为数组形式
               
                listById:'',//根据id获取的list
               
                getAllParam:{
                    OuId:'1',//组织单元ID()
                    Draw:'1',
                    Start:'0',//偏移量
                    Length:'100',//长度
                },
                queryId:'',//需要查询的stockId
                    
                pageIndex:-1,//分页的当前页码
			    totalPage:20,//当前分页总数
                page:1,//当前页
                eachPage:10,//一页显示的数量
            }
        },
    }
</script>

<style scoped>
.data-list-container{
    width: 100%;
    height: 100%;
    background:#EEF1F5;
}
.search-btn{
    display: inline-block;
    height: 30px;
    width: 91px;
    text-align: center;
    border-radius: 3px;
    line-height: 30px;
    color: white;
     background:rgba(130, 170, 252, 1);
}
.bg-white{
    background:white;
    border-radius: 3px;
    font-size: 14px;
}
.height35{
    height: 35px;
    line-height: 35px;
    color: rgba(0, 0, 0, 0.349019607843137);
    padding-left:10px;
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
.pt10{
    padding-top: 10px;
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
</style>
<style>
/* 重写checkbox */
.data-list-container .el-checkbox__inner{
    width: 24px;
    height: 24px;
    border-radius:50% !important; 
}
.data-list-container .el-checkbox__inner::after{
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
.data-list-container .el-table th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    padding: 5px 0;
    text-align: center;
    background-color: #ececec;
}
.data-list-container .el-table td{
    padding: 3px 0;
}
.data-list-container .el-table__body{
    text-align: center;
}
/* 重写el-pagination样式 */
.data-list-container .text-right{
    text-align: right;
}
.mt-10{
    margin-top: 10px;
}
</style>
