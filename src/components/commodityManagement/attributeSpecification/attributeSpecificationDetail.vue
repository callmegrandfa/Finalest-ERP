<template>
    <div class="at-sp-detail">
        <el-row class="bg-white h48 pt5">

            <button class="erp_bt bt_out">
                <div class="btImg">
                    <img src="../../../../static/image/common/bt_inOut.png">
                </div>
                <span class="btDetail">导出</span>
            </button>

            <button class="erp_bt bt_start">
                <div class="btImg">
                    <img src="../../../../static/image/common/bt_start.png">
                </div>
                <span class="btDetail">启用</span>
            </button>

            <button class="erp_bt bt_stop">
                <div class="btImg">
                    <img src="../../../../static/image/common/bt_stop.png">
                </div>
                <span class="btDetail">停用</span>
            </button>

            <button class="erp_bt bt_save" @click="save">
                <div class="btImg">
                    <img src="../../../../static/image/common/bt_save.png">
                </div>
                <span class="btDetail">保存</span>
            </button>

            <button class="erp_bt bt_cancel">
                <div class="btImg">
                    <img src="../../../../static/image/common/bt_cancel.png">
                </div>
                <span class="btDetail">取消</span>
            </button>
        </el-row>   
        <el-row class="bg-white">
            <el-col :span="5">
                <vue-scroll :ops='$store.state.option'>
                    <el-tree v-loading="treeLoading" 
                        :data="componyTree"
                        :default-expanded-keys="expandId"
                        :props="defaultProps"
                        node-key="id"
                        :render-content="renderContent"
                        ref="tree"
                        :expand-on-click-node="false"
                        @node-click="nodeClick">
                    </el-tree>
                </vue-scroll>
            </el-col>
            <el-col :span="19" class="bg-gray">
                <el-row class="section-one bg-gray-in pl10">
                    <el-row>
                        <div class="bgcolor">
                            <label>商品类目</label>
                            <!-- <span>{{$store.state.option}}</span> -->
                            <el-input placeholder=""
                                      :disabled="true"></el-input>
                        </div>

                        <div class="bgcolor">
                            <el-checkbox v-model="ifInherit">规格属性继承到子类目</el-checkbox>
                        </div>
                    </el-row>
                    <el-row>
                        <div class="bgcolor">
                            <el-checkbox v-model="ifOne">唯一码管理</el-checkbox>
                        </div>

                        <div class="bgcolor">
                            <el-checkbox v-model="ifBatch">批次管理</el-checkbox>
                        </div>

                        <div class="bgcolor">
                            <el-checkbox v-model="ifPeriod">保质期管理</el-checkbox>
                        </div>
                    </el-row>
                </el-row>

                <el-row class="section-two pl10">
                    <el-col :span='24' class="mb10 pl10">
                        <span class="header-title">商品属性</span>
                        <div class="choose-add" @click="dialogAttributeShow">
                            <img src="../../../../static/image/common/bt_add_white.png">
                            <span class='choose-text'>选取</span>
                        </div>
                    </el-col>
                    <el-col :span="24">
                        <el-table :data="attributeData" stripe border style="width: 100%" class="all-table">
                            <el-table-column prop="sex" label=" " width="180">
                                
                            </el-table-column>

                            <el-table-column prop="contactPerson" label="属性编码" width="180">
                                <!-- <template slot-scope="scope">
                                    <img v-show='redAr.indexOf(scope.row)>=0' class="abimg" src="../../../static/image/content/redremind.png"/>
                                    <input class="input-need" 
                                        :class="[scope.$index%2==0?'input-bgw':'input-bgp']" 
                                        v-model="scope.row.contactPerson" 
                                        type="text"
                                        @change="handleChange(scope.$index,scope.row)"/> 
                                </template> -->
                            </el-table-column>

                            <el-table-column prop="sex" label="属性名称" width="180">
                                
                            </el-table-column>

                            <el-table-column prop="position" label="启用" width="180">
                                
                            </el-table-column>

                            <el-table-column label='操作'>
                                <template slot-scope="scope" >
                                    <el-button @click="handleDelete(scope.$index,scope.row,1)" type="text" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>  

        <!-- 属性弹出层 开始 -->
        <el-dialog :visible.sync="dislogAttribute" title="商品属性" class="transfer_dialog">
            <el-col :span="24">
                <el-col :span="11" class="transfer_warapper">
                    <el-col :span="24" class="transfer_header">
                        <span>已选</span>
                        <div class="transfer_search" @keyup.enter="searchLeftAttribute">
                            <el-input placeholder="搜索..."
                                      v-model="searchLeftAtt"
                                      class="search_input">
                                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                            </el-input>
                        </div>    
                    </el-col>    
                    <el-col :span="24" class="transfer_table">
                        <el-table :data="attributeChooseData" border style="width: 100%" stripe @selection-change="leftChoose" ref="roleTableLeft">
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="propertyCode" label="属性编码"></el-table-column>
                            <el-table-column prop="propertyName" label="属性名称"></el-table-column>
                            <el-table-column prop="statusTValue" label="状态"></el-table-column>
                        </el-table>   
                    </el-col>
                    <el-col :span="24" class="transfer_footer">
                        <el-col :span="18">
                            <span>共{{totalPageLeftAtt}}页</span>
                        </el-col>
                        <el-col :span="6">
                            <!-- <el-button class="el_transfer" :disabled="leftDownBtnUser" @click="pageDownLeftUser" type="primary" icon="el-icon-arrow-left" round></el-button> -->
                            <!-- <el-button class="el_transfer" :disabled="leftAddBtnUser" @click="pageAddLeftUser" type="primary" icon="el-icon-arrow-right" round></el-button> -->
                        </el-col>
                    </el-col>
                </el-col>

                <el-col :span="2" class="transfer_btns">
                    <el-col :span="24" class="transfer_btn_wrapper">
                        <el-button class="el_transfer" :disabled="if_r_to_l_att" @click="goLeftAtt" type="primary" icon="el-icon-arrow-left" round></el-button>
                        <el-button class="el_transfer" :disabled="if_l_to_r_att" @click="goRightAtt" type="primary" icon="el-icon-arrow-right" round></el-button>
                    </el-col>
                </el-col>

                <el-col :span="11" class="transfer_warapper">
                    <el-col :span="24" class="transfer_header">
                        <span>可选</span>
                        <div class="transfer_search"  @keyup.enter="searchRightAttribute">
                            <el-input placeholder="搜索..."
                                      v-model="searchRightAtt"
                                      class="search_input">
                                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                            </el-input>
                        </div>
                    </el-col>    
                    <el-col :span="24" class="transfer_table">
                        <el-table :data="attRightOnePageData" border style="width: 100%" stripe @selection-change="rightChoose" ref="roleTabRight">
                            <el-table-column type="selection"></el-table-column>
                            <el-table-column prop="propertyCode" label="属性编码"></el-table-column>
                            <el-table-column prop="propertyName" label="属性名称"></el-table-column>
                            <el-table-column prop="statusTValue" label="状态"></el-table-column>
                        </el-table>  
                        
                    </el-col>
                    <el-col :span="24" class="transfer_footer">
                        <el-col :span="18">
                            <span>共{{totalPageRightAtt}}页</span>
                        </el-col>
                        <el-col :span="6">
                            <el-button class="el_transfer" :disabled="rightDownBtnAttr" @click="pageDownRightAttr" type="primary" icon="el-icon-arrow-left" round></el-button>
                            <el-button class="el_transfer" :disabled="rightBackBtnAttr" @click="pageBackRightAttr" type="primary" icon="el-icon-arrow-right" round></el-button>
                        </el-col>
                    </el-col>
                </el-col>
            </el-col>
            <span slot="footer">
                <!-- <button class="transfer_footer_btn transfer_confirm" @click="dialogUserConfirmUser">确 认</button> -->
                <!-- <button class="transfer_footer_btn" @click="cancelPushUser">取 消</button> -->
            </span>
        </el-dialog>
        <!-- 属性弹出层 结束 -->
    </div>
</template>

<script>
export default({
    name:'attributeSpecificationDetail',
    created () {
        let self = this;
        self.loadTree();
        self.loadAttribute();
    },
    watch: {
        attributeAllData:{
            handler:function(val,oldVal){
                let self = this;
                // if(val.length!=oldVal.length){
                if(self.attributeAllData.length<=self.onePageShow){
                    self.attRightOnePageData = self.attributeAllData;
                }else{
                    self.attRightOnePageData = [];
                    for(let i = (self.rightPageIndex-1)*self.onePageShow;i<self.rightPageIndex*self.onePageShow;i++){
                        // console.log(self.rightPageIndex-1)
                        // self.attRightOnePageData = [];
                        self.attRightOnePageData.push(self.attributeAllData[i])
                        // console.log(self.attRightOnePageData)
                    }
                }
                // }
            },
            deep: true,
        }
    },
    data() {
        return{
            ifInherit:false,//继承规格属性到子类目
            ifOne:false,//唯一码管理
            ifBatch:false,//批次管理
            ifPeriod:false,//保质期管理
            treeLoading:false,
            //---左侧树形--------
            componyTree:  [],
            defaultProps: {
                children: 'childNodes',
                label: 'categoryName',
                id:'id'
            },
            expandId:[],
            //-------------------

            //---商品属性弹框-----
            onePageShow:10,
            dislogAttribute:false,
            attributeData:[],//生成的属性表格数据

            attributeChooseData:[],//弹窗内左侧表格总数据
            attributeAllData:[],//弹窗内右侧表格总数据

            attRightOnePageData:[],//弹窗内左侧表格一页数据
            attLeftOnePageData:[],//弹窗内左侧表格一页数据

            rightPageIndex:1,//右侧弹窗当前页下标
            leftPageIndex:1,//左侧弹窗当前页下标

            searchLeftAtt:'',//左侧搜索框值
            searchRightAtt:'',//右侧搜索框值

            totalPageLeftAtt:1,//左侧总页数
            totalPageRightAtt:1,//右侧总页数

            multipleSelection:[],//右侧选中数据
            multipleSelectionLeft:[],//左侧选中数据

            if_r_to_l_att:true,//右传左按钮
            if_l_to_r_att:true,//左传右按钮
            //-------------------
        }
    },
    methods:{
        //---加载树形数据-------------
        loadTree:function(){
            let self=this;
            self.treeLoading=true;
            self.$axios.gets('/api/services/app/CategoryManagement/GetCategoryTree').then(function(res){
                console.log(res)
                self.componyTree = res;
                self.expandId = self.defauleExpandTree(res,'id')
                self.treeLoading=false;
            },function(res){
                self.treeLoading=false;
            })
        },
        
        //-------------------------

        //---弹窗内右侧表格数据------
        loadAttribute:function(){//商品属性
            let self = this;
            self.$axios.gets('/api/services/app/PropertyManagement/GetAll',{SkipCount:'0',MaxResultCount:'100'}).then(function(res){
                console.log(res);
                self.attributeAllData = res.result.items;
                self.totalPageRightAtt = Math.ceil(res.result.totalCount/self.onePageShow);
                // for(let i =0;i<self.rightPageIndex*self.onePageShow;i++){
                    // console.log(self.totalPageRightAtt)
                    // self.attRightOnePageData.push(self.attributeAllData[i])
                // }
                
            },function(res){
                console.log('err'+res)
            });
        },
        //-------------------------

        //---保存------------------
        save:function(){

        },
        //------------------------

        //---弹框显示隐藏----------
        dialogAttributeShow:function(){
            let self = this;
            self.dislogAttribute = true;
        },
        //------------------------

        //---弹框搜索--------------
        searchLeftAttribute:function(){

        },
        searchRightAttribute:function(){

        },
        //------------------------

        //---弹窗内多选------------
        leftChoose:function(val){
            let self = this;
            self.multipleSelectionLeft = val;
            if(self.multipleSelectionLeft.length>0){
                self.if_l_to_r_att= false;
            }else{
                self.if_l_to_r_att= true;
            }
        },
        rightChoose:function(val){
            let self = this;
            self.multipleSelection = val;
            if(self.multipleSelection.length>0){
                self.if_r_to_l_att= false;
            }else{
                self.if_r_to_l_att = true;
            }
            // console.log(this.multipleSelection)
        },
        //------------------------

        //---数据穿梭-------------
        goLeftAtt:function(){
            
            let self = this;
            // self.rightPageIndex++;
            for(let i in self.multipleSelection){
                self.attributeChooseData.push(self.multipleSelection[i])
            }
            
            let x = [];
            for(let i in self.attributeAllData){
                let flag = true;
                for(let j in self.multipleSelection){
                    if(self.attributeAllData[i].id == self.multipleSelection[j].id){
                        flag = false;
                    }
                }

                if(flag){
                    x.push(self.attributeAllData[i])
                }
            }
            //  console.log(x)
            self.attributeAllData = x;
            self.if_r_to_l_att = true;
            self.totalPageRightAtt = Math.ceil(self.attributeAllData.length/self.onePageShow);
            
        },
        goRightAtt:function(){

        },
        //-----------------------

        //---翻页----------------
        pageDownRightAttr:function(){//属性的右侧向下翻页
            let self = this;
        },
        pageBackRightAttr:function(){//属性的左侧向下翻页
            let self = this;
        },
        //-----------------------

        //------------------------
        renderContent(h, { node, data, store }){//商品类目
            // console.log(data)
            if(typeof(data.childNodes)!='undefined' && data.childNodes!=null && data.childNodes.length>0){
                return (
                    <span class="el-tree-node__label" data-id={data.id}>
                    <i aria-hidden="true" class="preNode fa fa-folder-open" style="color:#f1c40f;margin-right:5px"></i>
                        {data.categoryName}
                    </span>
                );
            }else{
                return (
                    <span class="el-tree-node__label" data-id={data.id}>
                    <i class="preNode fa fa-file" aria-hidden="true" style="color:#f1c40f;margin-right:5px"></i>
                        {data.categoryName}
                    </span>
                );
            }
        },
        //------------------------
        //---树通用---------------
        defauleExpandTree(data,key){
            if(typeof(data[0])!='undefined'
            && data[0]!=null 
            && typeof(data[0][key])!='undefined'
            && data[0][key]!=null
            && data[0][key]!=''){
                return [data[0][key]]
            }
        },
        nodeClick:function(){

        },
        //------------------------
        
    },

    
})
</script>

<style>
.bg-white{
    background: white;
    border-radius: 3px;
}
.bg-gray{
    background:#EDF0F4;
}
.bg-gray-in{
    background:#F9F9F9;
}
.h48{
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #E4E4E4;
}
.pt5{
    padding-top: 5px;
}
.pl10{
    padding-left:10px;
}
.section-one{
    padding: 10px;
}
.at-sp-detail .bgcolor{
    margin-bottom:0px;
    /* width:200px; */
}
.at-sp-detail .bgcolor>label{
    width: 50px;
}
.section-two{
    padding-top: 5px;
}
.header-title{
    font-size: 16px;
    display: inline-block;
    border-bottom: 2px solid #00CACA;
    padding: 5px 1px;
    float: left;
}
.choose-add{
    background:#00CACA;
    display: inline-block;
    padding:2px 10px;
    border-radius: 3px;
    line-height: 25px;
    margin-top: 4px;
    float: left;
    margin-left: 10px;
    cursor: pointer;
}
.choose-add img{
    display: inline-block;
    /* height: 25px; */
    float: left;
    margin-top: 5px;
}
.choose-text{
    color: white;
    display: inline-block;
    /* height:25px; */
    font-size: 12px;
    float: left;
    margin-left: 10px;
}
</style>


  
