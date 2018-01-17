<template>
   <ul class="slidUl menu" :class="{menuActive : $store.state.show}">
        <li class="one">
            <span class="menuIcon"><img src="../../static/image/siderbar/版本动态.png" alt="版本动态"></span>
            <a class="oneA" href="javascript:;">版本动态</a>
            <span class="versionInfo" :class="{infoActive : $store.state.show}">升级信息</span>
        </li>
        <li class="one" v-for="item in items">
            <span class="menuIcon"><img :src="item.src" alt="item.name"></span>
            <a class="oneA" href="javascript:;">{{item.name}}</a>
            <ul class="slidUl slid1">
                <li class="two" v-for="i in item.secondLevel">
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
    </ul>
</template>
<script>
export default {
  name: 'appsiderbar',
  data(){
    return{
        items:
        [
            {
                name:'常用功能',
                src:'../../static/image/siderbar/常用功能.png',
                secondLevel:[
                    {
                    name:'公共基础资料',
                    thirdInfo:[
                        {name:'业务组织(精简版)-详细',address:'detail'},
                        {name:'数据资料短',address:'shortData'},
                        {name:'数据资料长',address:'longData'},
                        {name:'数据资料中',address:'midData'},   
                        {name:'仓库数据列表',address:'repositoryList'},
                        {name:'仓库资料',address:'repositoryData'},
                        {name:'商品资料',address:'goodsData'},
                        {name:'店铺数据列表',address:'storeData'},   
                        {name:'店铺资料-基本信息',address:'storeBasicInfor'},
                        {name:'客户资料-基本信息',address:'customerBasicInfor'},
                        {name:'客户资料',address:'customerInfor'},
                        {name:'现货采购订单-订单列表',address:'orderList'}, 
                        {name:'现货采购订单-订单详情',address:'orderDetails'},
                        {name:'集团管理',address:'groupManager'},
                        {name:'供应商列表',address:'supplierList'},   
                        {name:'组织单元',address:'organization'},    
                    ]
                },{
                    name:'公共基础资料',
                },{
                    name:'公共基础资料',
                },{
                    name:'公共基础资料',
                }
                ,{
                    name:'公共基础资料',
                }]
            }, {
                name:'系统管理',
                src:'../../static/image/siderbar/系统管理.png',
                secondLevel:[
                    {
                    name:'公共基础资料',
                }, {
                    name:'公共基础资料',
                }]
            }, {
                name:'基础资料',
                src:'../../static/image/siderbar/基础资料.png',
            }, {
                name:'采购管理',
                src:'../../static/image/siderbar/采购管理.png',
            }, {
                name:'批发管理',
                src:'../../static/image/siderbar/批发管理.png',
            }, {
                name:'零售管理',
                src:'../../static/image/siderbar/零售管理.png',
            }, {
                name:'库存管理',
                src:'../../static/image/siderbar/库存管理.png',
            }, {
                name:'会员管理',
                src:'../../static/image/siderbar/会员管理.png',
            }, {
                name:'电商管理',
                src:'../../static/image/siderbar/电商管理.png',
            }, {
                name:'应收应付',
                src:'../../static/image/siderbar/应收应付.png',
            }]
        }
    },
    methods:{
        switch(){
            this.$router.push({path:this.$store.state.url})//点击切换路由
        },
        storageData(e){
            var flag=false;
            var isSame=false;
            var slidbarData=this.$store.state.slidbarData;//储存页签数组
            var name=e.target.getAttribute("menuname");
            var menuUrl=e.target.getAttribute("menuurl");
        
            if(slidbarData.length==0){//slidbarData为空
                flag=true;
            }else{//slidbarData不为空
                for(var i=0;i<slidbarData.length;i++){
                    if(slidbarData[i].name==name){//相同页签
                        flag=false;
                        isSame=false;
                        break;
                    }else{
                      flag=true;
                      isSame=true; 
                    }   
                }
            }
            
            var pushItem={'name':name,'url':menuUrl,'params':'default'};
            this.$store.state.url='/'+menuUrl+'/'+'default';//储存当前url
            var isSwitch=true;
            //  if(slidbarData.length>=10){
            //     if(isSame){
            //         var r=confirm("您选择打开的窗口已达到10个，如需继续添加新的窗口，默认关闭第一个窗口");
            //         if (r==true)
            //         {
            //             slidbarData.shift();
            //             flag=true;
            //         }else{
            //             flag=false;
            //             isSwitch=false;
            //         }
            //     }else{
                    
            //     }
                
            // }

            if(flag){
                 slidbarData.push(pushItem);
            }
            if(isSwitch){
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
    position: absolute;
    left: 235px;
    top:0px;
    transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -o-transition: all 0.5s; 
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
    z-index:2;
    left: 0;
    float: left;
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
.slid1{
    background-color: #415c84;
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
.menu .one:hover,.menu .three:hover{
    background: #415c84;
    color: #e4e9f2;
    box-shadow: 0 4px 0 #3b4758;
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
.menu li.two:hover .slid2{
    display: block;
    max-height: 460px;
    overflow-y: scroll;
    overflow-x:hidden;
}

.slid2{
    cursor: pointer;
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
.slid2::-webkit-scrollbar {
    width:10px;
    height:10px;
}
.slid2::-webkit-scrollbar-button    {
    background-color:#414e61;
}
.slid2::-webkit-scrollbar-track     {
    background:#414e61;
}
.slid2::-webkit-scrollbar-thumb{
    background:#000;
    border-radius:4px;
}
.slid2::-webkit-scrollbar-corner {
    background:#414e61;
}
.slid2::-webkit-scrollbar-resizer  {
    background:#414e61;
}
</style>
