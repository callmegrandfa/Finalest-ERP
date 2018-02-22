<template>
   <ul class="slidUl menu" :class="{menuActive : $store.state.show}">
        <li class="one">
            <span class="menuIcon"><img src="../../static/image/siderbar/版本动态.png" alt="版本动态"></span>
            <a class="oneA" href="javascript:;">版本动态</a>
            <span class="versionInfo" :class="{infoActive : $store.state.show}">升级信息</span>
        </li>
        <li class="one" @mouseenter="enter1">
            <span class="menuIcon"><img src="../../static/image/siderbar/常用功能.png"></span>
            <a class="oneA" href="javascript:;">测试</a>
            <ul class="slidUl slid1">
                <li class="two" v-for="i in secondLevel1" @mouseenter="enter2">
                    <a href="javascript:;">{{i.name}}</a>
                    <diV class="triangle"></diV>
                    <ul class="slidUl slid2" >
                        <li class="three" v-for="it in i.thirdInfo">
                            <a href="javascript:;" :menuUrl="it.address" :menuname="it.name" @click="storageData">{{it.name}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="one" @mouseenter="enter1">
            <span class="menuIcon"><img src="../../static/image/login/setting.png"></span>
            <a class="oneA" href="javascript:;">系统管理</a>
            <ul class="slidUl slid1">
                <li class="two" v-for="i in secondLevel2" @mouseenter="enter2">
                    <a href="javascript:;">{{i.name}}</a>
                    <diV class="triangle"></diV>
                    <ul class="slidUl slid2" >
                        <li class="three" v-for="it in i.thirdInfo">
                            <a href="javascript:;" :menuUrl="it.address" :menuname="it.name" @click="storageData">{{it.name}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="one" @mouseenter="enter1">
            <span class="menuIcon"><img src="../../static/image/siderbar/基础资料.png"></span>
            <a class="oneA" href="javascript:;">基础资料</a>
            <ul class="slidUl slid1">
                <li class="two" v-for="i in secondLevel3" @mouseenter="enter2">
                    <a href="javascript:;">{{i.name}}</a>
                    <diV class="triangle"></diV>
                    <ul class="slidUl slid2" >
                        <li class="three" v-for="it in i.thirdInfo">
                            <a href="javascript:;" :menuUrl="it.address" :menuname="it.name" @click="storageData">{{it.name}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="one">
            <span class="menuIcon"><img src="../../static/image/siderbar/采购管理.png"></span>
            <a class="oneA" href="javascript:;">采购管理</a>
            <ul class="slidUl slid1">
                <li class="two" v-for="i in secondLevel4">
                    <a href="javascript:;">{{i.name}}</a>
                    <diV class="triangle"></diV>
                    <ul class="slidUl slid2" >
                        <li class="three" v-for="it in i.thirdInfo">
                            <a href="javascript:;" :menuUrl="it.address" :menuname="it.name" @click="storageData">{{it.name}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="one" >
            <span class="menuIcon"><img src="../../static/image/siderbar/批发管理.png"></span>
            <a class="oneA" href="javascript:;">批发管理</a>
            <ul class="slidUl slid1">
                <li class="two" v-for="i in secondLevel5">
                    <a href="javascript:;">{{i.name}}</a>
                    <diV class="triangle"></diV>
                    <ul class="slidUl slid2" >
                        <li class="three" v-for="it in i.thirdInfo">
                            <a href="javascript:;" :menuUrl="it.address" :menuname="it.name" @click="storageData">{{it.name}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="one">
            <span class="menuIcon"><img src="../../static/image/siderbar/零售管理.png"></span>
            <a class="oneA" href="javascript:;">零售管理</a>
            <ul class="slidUl slid1">
                <li class="two" v-for="i in secondLevel6">
                    <a href="javascript:;">{{i.name}}</a>
                    <diV class="triangle"></diV>
                    <ul class="slidUl slid2" >
                        <li class="three" v-for="it in i.thirdInfo">
                            <a href="javascript:;" :menuUrl="it.address" :menuname="it.name" @click="storageData">{{it.name}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="one">
            <span class="menuIcon"><img src="../../static/image/siderbar/库存管理.png"></span>
            <a class="oneA" href="javascript:;">库存管理</a>
            <ul class="slidUl slid1">
                <li class="two" v-for="i in secondLevel7">
                    <a href="javascript:;">{{i.name}}</a>
                    <diV class="triangle"></diV>
                    <ul class="slidUl slid2" >
                        <li class="three" v-for="it in i.thirdInfo">
                            <a href="javascript:;" :menuUrl="it.address" :menuname="it.name" @click="storageData">{{it.name}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="one">
            <span class="menuIcon"><img src="../../static/image/siderbar/会员管理.png"></span>
            <a class="oneA" href="javascript:;">会员管理</a>
            <ul class="slidUl slid1">
                <li class="two" v-for="i in secondLevel8">
                    <a href="javascript:;">{{i.name}}</a>
                    <diV class="triangle"></diV>
                    <ul class="slidUl slid2" >
                        <li class="three" v-for="it in i.thirdInfo">
                            <a href="javascript:;" :menuUrl="it.address" :menuname="it.name" @click="storageData">{{it.name}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="one">
            <span class="menuIcon"><img src="../../static/image/siderbar/电商管理.png"></span>
            <a class="oneA" href="javascript:;">电商管理</a>
            <ul class="slidUl slid1">
                <li class="two" v-for="i in secondLevel9">
                    <a href="javascript:;">{{i.name}}</a>
                    <diV class="triangle"></diV>
                    <ul class="slidUl slid2" >
                        <li class="three" v-for="it in i.thirdInfo">
                            <a href="javascript:;" :menuUrl="it.address" :menuname="it.name" @click="storageData">{{it.name}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li class="one">
            <span class="menuIcon"><img src="../../static/image/siderbar/应收应付.png"></span>
            <a class="oneA" href="javascript:;">应收应付</a>
            <ul class="slidUl slid1">
                <li class="two" v-for="i in secondLevel10">
                    <a href="javascript:;">{{i.name}}</a>
                    <diV class="triangle"></diV>
                    <ul class="slidUl slid2" >
                        <li class="three" v-for="it in i.thirdInfo">
                            <a href="javascript:;" :menuUrl="it.address" :menuname="it.name" @click="storageData">{{it.name}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <!-- <li class="one" v-for="item in items" :menuId="item.id">
            <span class="menuIcon" :parentId="item.parentId" :menuname="item.name" :menuUrl="item.url" @click="storageData"><i :class="item.icon"></i></span>
            <a class="oneA" href="javascript:;" :parentId="item.parentId" :menuname="item.name" :menuUrl="item.url" @click="storageData">{{item.name}}</a>
            <ul class="slidUl slid1">
                <li class="two" v-for="i in item.items">
                    <span class="menuIcon" :parentId="item.parentId" :menuname="item.name" :menuUrl="item.url" @click="storageData"><i :class="i.icon"></i></span>
                    <a href="javascript:;" :parentId="item.parentId" :menuname="item.name" :menuUrl="item.url" @click="storageData">{{i.name}}</a>
                    <diV class="triangle"></diV>
                    <ul class="slidUl slid2" >
                        <li class="three" v-for="it in i.items">
                            <span class="menuIcon" :parentId="item.parentId" :menuname="item.name" :menuUrl="item.url" @click="storageData"><i :class="i.icon"></i></span>
                            <a href="javascript:;" :menuId="it.id" :parentId="it.parentId" :menuUrl="it.url" :menuname="it.name" @click="storageData">{{it.name}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </li> -->
    </ul>
</template>
<script>
export default {
  name: 'appsiderbar',
  data(){
    return{
        secondLevel1:[{
                name:'租户管理',
                thirdInfo:[
                    {name:'租户管理',address:'tenantManagement'},
                    {name:'租户管理-添加',address:'tenantManagementAdd'},
                ]
            },{
                name:'集团管理',
                thirdInfo:[
                    {name:'集团管理',address:'groupManage'},
                    {name:'组织管理',address:'OuManage'},
                ]
            },{
                name:'菜单管理',
                thirdInfo:[
                    {name:'菜单管理',address:'menu'},
                ]
            },{
                name:'用户组',
                thirdInfo:[
                    {name:'用户组-列表',address:'userList'},
                    {name:'用户资料-列表',address:'userDataList'},
                    {name:'用户资料-详细',address:'userInfoDetail'},
                ]
            },{
                name:'采购管理',
                thirdInfo:[
                     {name:'采购管理列表',address:'order'}, 
                ]
            },{
                name:'客户资料',
                thirdInfo:[
                    {name:'客户资料',address:'customer'},
                ]
            },{
                name:'币种资料',
                thirdInfo:[
                    {name:'币种资料',address:'currency'},
                ]
            },{
                name:'会计期间',
                thirdInfo:[
                    {name:'会计期间',address:'account'},
                ]
            },{
                name:'单据模板',
                thirdInfo:[
                     {name:'单据开单模板',address:'bill'}, 
                ]
            },{
                name:'仓库资料',
                thirdInfo:[
                     {name:'仓库资料',address:'repository'}, 
                ]
            },{
                name:'业务地区',
                thirdInfo:[
                    {name:'业务地区管理',address:'businessArea'},
                ]
            },
            {
                name:'商品属性',
                thirdInfo:[
                    {name:'商品属性列表',address:'commodity'},   
                    {name:'商品规格列表',address:'commercial'},
                    {name:'商品类目列表',address:'commodityleimu'},
                    {name:'类目属性规格列表',address:'Property'},
                    {name:'计量单位',address:'unitOfMeasurement'},
                    {name:'商品品牌',address:'commodityBrand'},
                    {name:'商品类目',address:'commodityClassHeading'},
                    {name:'商品属性',address:'commodityAttribute'},
                    {name:'商品规格',address:'specificationOfGoods'},
                    {name:'商品规格组',address:'specification'},
                    {name:'类目属性规格(平台)列表',address:'classPropertyList'},
                    {name:'商品档案',address:'Record'},
                ]
            }
            ],
        secondLevel2:[{
            name:'基础资料',
            thirdInfo:[
            ]}],
        secondLevel3:[{
        name:'基础资料',
        thirdInfo:[ 
        ]}],
        secondLevel4:[{
        name:'基础资料',
        thirdInfo:[
        ]}],
        secondLevel5:[{
        name:'基础资料',
        thirdInfo:[      
        ]}],
        secondLevel6:[{
        name:'基础资料',
        thirdInfo:[  
        ]}],
        secondLevel7:[],
        secondLevel8:[{
        name:'基础资料',
        thirdInfo:[   
        ]}],
        secondLevel9:[{
        name:'基础资料',
        thirdInfo:[    
        ]}],
        secondLevel10:[{
        name:'基础资料',
        thirdInfo:[ 
        ]}],
        items:[{   
            },{
                name:'部门资料',
                thirdInfo:[
                     {name:'部门资料',address:'department'}, 
                ]
            }],
            childNodes:[],//菜单数据
        // items:
        // [
        //     {
        //         name:'常用功能',
        //         src:'../../static/image/siderbar/常用功能.png',
        //         secondLevel:[
        //             {
        //             name:'基础资料',
        //             thirdInfo:[      
        //                 {name:'业务组织(精简版)-详细',address:'detail'},                 
        //                 {name:'数据资料短',address:'shortData'},
        //                 {name:'数据资料长',address:'longData'},
        //                 {name:'数据资料中',address:'midData'},   
        //                 {name:'仓库数据列表',address:'repositoryList'},
        //                 {name:'仓库资料',address:'repositoryData'},
        //                 {name:'商品资料',address:'goodsData'},
        //                 {name:'店铺数据列表',address:'storeData'},   
        //                 {name:'店铺资料-基本信息',address:'storeBasicInfor'},
        //                 {name:'客户资料-基本信息',address:'customerBasicInfor'},
        //                 {name:'客户资料',address:'customerInfor'},
        //                 {name:'现货采购订单-订单列表',address:'orderList'}, 
        //                 {name:'现货采购订单-订单详情',address:'orderDetails'},
        //                 {name:'集团管理',address:'OuManage'},
        //                 {name:'供应商列表',address:'supplierList'},
        //             ]
        //         },{
        //             name:'基础资料',
        //             thirdInfo:[
        //             ]
        //         },{
        //             name:'租户管理',
        //             thirdInfo:[
        //             ]
        //         },{
        //             name:'集团管理',
        //              thirdInfo:[
        //                 {name:'集团管理',address:'OuManage'},
        //                 {name:'业务组织(精简版)-详细',address:'detail'},
        //             ]
        //         },{
        //             name:'用户组',
        //             thirdInfo:[
        //                 {name:'用户资料-详细',address:'userInfoDetail'},
        //             ]
        //         }
        //         ,{
        //             name:'采购管理',
        //             thirdInfo:[
        //             ]
        //         },{
        //             name:'客户资料',
        //             thirdInfo:[
        //             ]
        //         },{
        //             name:'单据模板',
        //             thirdInfo:[
        //                 {name:'列表资料',address:'orderDetails'},
        //                 {name:'单据-主多从模板',address:'orderList'},
        //             ]
        //         }]
        //     }, {
        //         name:'系统管理',
        //         src:'../../static/image/siderbar/系统管理.png',
        //         secondLevel:[
        //             {
        //             name:'公共基础资料',
        //         }, {
        //             name:'公共基础资料',
        //         }]
        //     }, {
        //         name:'基础资料',
        //         src:'../../static/image/siderbar/基础资料.png',
        //     }, {
        //         name:'采购管理',
        //         src:'../../static/image/siderbar/采购管理.png',
        //     }, {
        //         name:'批发管理',
        //         src:'../../static/image/siderbar/批发管理.png',
        //     }, {
        //         name:'零售管理',
        //         src:'../../static/image/siderbar/零售管理.png',
        //     }, {
        //         name:'库存管理',
        //         src:'../../static/image/siderbar/库存管理.png',
        //     }, {
        //         name:'会员管理',
        //         src:'../../static/image/siderbar/会员管理.png',
        //     }, {
        //         name:'电商管理',
        //         src:'../../static/image/siderbar/电商管理.png',
        //     }, {
        //         name:'应收应付',
        //         src:'../../static/image/siderbar/应收应付.png',
        //     }]
        }
        
    },
    created:function(){
        let _this=this;
        // _this.$axios.gets('/api/services/app/Navigation/GetAllNavigationsForTree')
        // .then(function(res){
        //     _this.items=res.result.items;
        //     console.log(res);
        // },function(res){

        // })
        
    },
    mounted:function(){
        let _this=this;
        _this.$store.state.slidbarHeight=$(window).height();
        $('.menu').css({height:_this.$store.state.slidbarHeight-43+'px'})
        if($('.menu').height()<$('.menu').children('.one').length*50){
            $('.menu').css({overflowY:'scroll'})
        }else{
            $('.menu').css({overflowY:'hidden'})
        }
    },
    methods:{
        enter1:function(){
            let _this=this;     
             $('.slid1').each(function(){
                $(this).css({
                    height:_this.$store.state.slidbarHeight-93+'px'
                })
                if($(this).height()<$(this).children('.two').length*50){
                    $(this).css({overflowY:'scroll'})
                }else{
                    $(this).css({overflowY:'hidden'})
                }
            })
        },
        enter2: function(){
            let _this=this;
            $('.slid2').each(function(x){
                $(this).css({
                    height:_this.$store.state.slidbarHeight-93+'px'
                })
                if($(this).height()<$(this).children('.three').length*50){
                    $(this).css({width:'470px'})
                }else{
                    $(this).css({width:'235px'})
                }
            })
        },
        switch(){
            this.$router.push({name:this.$store.state.url,params:{id:'default'}})//点击切换路由
        },
        storageData(e){
            if(e.target.getAttribute("menuurl")&&e.target.getAttribute("menuurl")!=''){
                var flag=false;
                if(this.$store.state.slidbarData){
                    this.$store.state.temporary=this.$store.state.slidbarData;
                }
                var temporary=this.$store.state.temporary;
                var name=e.target.getAttribute("menuname");
                var menuUrl=e.target.getAttribute("menuurl");
                if(temporary.length==0){//temporary为空
                    flag=true;
                }else{//temporary不为空
                    for(var i=0;i<temporary.length;i++){
                        if(temporary[i].name==name){//相同页签
                            flag=false;
                            break;
                        }else{
                        flag=true;
                        }   
                    }
                }
                var pushItem={'name':name,'url':menuUrl};
                this.$store.state.url=menuUrl;//储存当前url在router里的name
                // this.$store.state.url='/'+menuUrl+'/'+'default';//储存当前url
                if(flag){
                    temporary.push(pushItem);
                    // let closeItem=this.$store.state.closeItem;
                    // if(closeItem.length>0){
                    //     for(let i=0;i<closeItem.length;i++){
                    //         if(closeItem[i]==menuUrl){
                    //             closeItem.splice(i,1)
                    //         }
                    //     }
                    // }
                }
                window.localStorage.setItem('ERP',JSON.stringify(temporary));

                
                 
                this.switch();
            }
        }     
    }
}
</script>

<style  scoped>

.slidUl{
    font-family: 'microsoft yahei';
    width: 235px;
    height: auto;
    background-color: #414e61;
    display: none;
}
.slidUl:not(.slid2){
    transition: width 0.5s;
    -moz-transition: width 0.5s;
    -webkit-transition: width 0.5s;
    -o-transition: width 0.5s; 
}
.menuIcon{
    display: block;
    width: 50px;
    height: 50px;
    float: left;
    text-align: center;
    cursor: pointer;
}

.menuIcon img{
    max-width: 20px;
    max-height: 20px;
    margin: 0 auto;
    vertical-align: middle;
}
.menu{
    display: block;
    width: 235px;
    top: 50px;
    z-index:1000;
    left: 0;
    position: fixed;
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s; 
}
.menuActive{
    width: 50px;
}
.menuActive .slid1{
    left: 50px;
}
.menuActive .slid1 .slid2{
    left: 285px;
}
.slid1{
    transition: left 0.5s;
    -moz-transition: left 0.5s;
    -webkit-transition: left 0.5s;
    -o-transition: left 0.5s; 
    left: 235px;
    background-color: #415c84;
    position: fixed;
    top:93px;
}
.slid2{
    transition: left 0.5s;
    -moz-transition: left 0.5s;
    -webkit-transition: left 0.5s;
    -o-transition: left 0.5s;
    cursor: pointer;
    left: 470px;
    position: fixed;
    top:93px;
}

.menu li{
    list-style: none; 
    width: 100%;
    height: 50px;
    text-align: left;
    line-height: 46px;
    position: relative;
}
.menu .one{
    border-bottom:1px solid #26344b; 
}
.one:first-child{
    height: 43px;
}
.one:first-child .menuIcon{
    height: 43px;
}
.one:first-child .menuIcon img{
    width: 26px;
    height: 21px;
}
.one .versionInfo{
    z-index: 1000;
    font-size: 12px;
    color: #fff;
    background-color:#f66;
    display: block;
    position: absolute;
    width: 60px;
    height: 20px;
    border-radius: 10px;
    text-align: center;
    line-height: 20px;
    top: 5px;
    left: 150px;
    overflow: hidden;
    cursor: pointer;
     transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s,;
}

.infoActive{
    left: 26px!important;
    width: 30px!important;
}
.menu .one:hover{
    background: #415c84;
    box-shadow: 0 4px 0 #3b4758;
}
.menu .one:hover>a{
    color: #33cbcb;
}
    
.menu .two{
    position: relative;
}
.slid1 li a{
    display: block;
    height: 100%;
    width:calc(100% - 20px);
    padding-left: 20px;
    font-size: 12px;
    color: #c3cee0;
    text-decoration: none;
}
.oneA{
    color: #c3cee0;
    text-decoration: none;
    font-size: 12px;
    display: block;
    width:calc(100% - 50px);
    height: 100%; 
    padding-left: 0;
    float: left;
    overflow: hidden;
}
.menu li:hover{
    text-decoration: none;
}
  
.menu li.one:hover .slid1{
    display: block;
}
.menu li.two:hover>a{
    color: #33cbcb;
}
.menu li.two:hover .slid2{
    display: block;
    width: 235px;
}
.menu li.two:hover .slid2 li{
    width: 235px;
    float: left;
}
.menu li.three:hover>a{
    color: #33cbcb;
}


/* 三角形 */
.menu .two:hover .triangle{
    display: block;
}
.triangle{
    display: none;
    position: absolute;
    right: 0;
    top:calc(50% - 10px);
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 10px solid #414e61;
    border-bottom: 10px solid transparent;
}
.menu::-webkit-scrollbar {
    display: none;
    width:10px;
    height:10px;
}
.menu::-webkit-scrollbar-button    {
    background-color:#414e61;
}
.menu::-webkit-scrollbar-track     {
    background:#414e61;
}
.menu::-webkit-scrollbar-thumb{
    background:#000;
    border-radius:4px;
}
.menu::-webkit-scrollbar-corner {
    background:#414e61;
}
.menu::-webkit-scrollbar-resizer  {
    background:#414e61;
}

.slid1::-webkit-scrollbar {
    display: none;
    width:10px;
    height:10px;
}
.slid1::-webkit-scrollbar-button    {
    background-color:#414e61;
}
.slid1::-webkit-scrollbar-track     {
    background:#414e61;
}
.slid1::-webkit-scrollbar-thumb{
    background:#000;
    border-radius:4px;
}
.slid1::-webkit-scrollbar-corner {
    background:#414e61;
}
.slid1::-webkit-scrollbar-resizer  {
    background:#414e61;
}
</style>
