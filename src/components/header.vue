<template>
    <header>
        <div class="page-logo">
            <a href="">
                <big>HKERP</big><br>
                <small>v2.0</small>
            </a> 
            <div class="menuBtn" @click="$store.commit('go')"></div>
        </div>
        <div class="search">
              <i class="fa fa-search"></i>  
              <input type="text" placeholder="请输入" v-model="filterText"> 
              <ul class="searchData" v-show="show">
                  <li @click="getValue" v-for="(i,index) in data" :key="index" :data="i">{{i}}</li>
              </ul>
        </div>
        <ul class="userInfo">
            <li class="icon">
                <a href="javascript:;"><i class="fa fa-question-circle"></i></a>
            </li>
            <li class="icon">
                <a href="javascript:;"><i class="fa fa-commenting-o"></i><span class="num">79</span></a>
            </li>
            <li class="user">
                <div class="imgWrap"><img src="../assets/logo.png" alt=""></div>
                <div class="username">
                    <span>lomen<i class="fa fa-angle-down"></i></span>   
                    <ul class="box">
                        <li><a>数据统计表</a></li>
                        <li><a>数据统计表</a></li>
                    </ul>     
                </div>
                
            </li>
        </ul>
    </header>
</template>
<script>
export default {
  name: 'appheader',
  data(){
      return{
        filterText: '',
        show:false,
        data:['系统管理','数据管理','人资管理','财务管理']
      }
  },
  watch:{
      filterText:function(val,oldval){
          
         this.show=true
        //   if(checkValue){//检测val值
        //       this.sendAjax();//发送ajax
        //       this.appendData=ajaxData;//ajax获取数据
        //   }
      }
  },
   methods: {
        getValue:function(e){
            this.filterText=e.target.getAttribute("data");
            this.show=false;
        },
        sendAjax:function(){
            console.log(11)
        },
        // ajaxGet:function(){
        // let self=this;  
        // self.axios.get('/user', {
        //     params: {
               
        //     }
        // })
        // .then(function (response) {//响应成功
        //     //this.restaurants=response.data;
        //     console.log(response);
        // })
        // .catch(function (error) {//响应失败
        //     console.log(error);
        // });
        // },
   }
  }
</script>
<style scoped>
@import"//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
header{
    position: fixed;
    width: 100%;
    height: 73px;
    background-color: #fff;
    z-index: 3;
}
header .page-logo{
    float: left;
    background-color: #33CCCC;
    width: 200px;
    height: 100%;
    position: relative;
}
header .page-logo a{
    width: 112px;
    cursor: pointer;
    height: 100%;
    display: block;
    color: #fff;
    text-align: center;
    text-decoration: none;  
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';    
}
header .page-logo a:hover,header .page-logo a:focus{
    text-decoration: none;
}
header .page-logo a big{
    top: 16px;
    left: 20px;
    position: absolute;
    font-weight: 700;
    font-size: 32px;
    display: block;
}
header .page-logo a small{
    top: 52px;
    left: 20px;
    position: absolute;
    font-weight: 400;
    font-size: 12px;
    display: block;
}
            
.page-logo .menuBtn{
    cursor: pointer;
    width: 20px;
    height: 20px;
    top: 23px;
    right: 23px;
    position: absolute;
    background-image: url(../assets/sidebar-toggler.png);
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 0.7;
    filter: alpha(opacity=70);
}
.page-logo .menuBtn:hover{
    opacity: 1;
    filter: alpha(opacity=100);
}

/* 搜索框 */
.search{
    width: 340px;
    margin-left: 30px;
    height: 40px;
    float: left;
    margin-top: 15px;
    background-color: #f2f2f2;
    /* border: 1px solid #f2f2f2; */
    border-radius: 40px;
    overflow: visible;
    position: relative;
}
.search>i{
    margin-left: 15px;
    cursor: pointer;
}
.search>input{
    height: 38px;
    border: none;
    background-color: #f2f2f2;
    outline: none;
    width: calc(100% - 60px)
}
.search .searchData{
    position: absolute;
    width: calc(100% - 60px);
    top: 40px;
    left: 30px;
}
.search .searchData li{
    line-height: 40px;
    padding-left: 10px;
    width: (100% - 10px);
    list-style: none;
    height: 40px;
    background-color: #fff;
    border-top: 1px solid #80808021;
}
.search .searchData li:first-child{
    border-top:none;
}
.search .searchData li:hover{
    background-color: #f2f2f2;
    border-top:none;
}
/*  */
.userInfo{
float: right;
width: 300px;
height: 100%;
}
.userInfo>li{
    float: left;
    list-style: none;
    width: 50px;
    height: 100%;
    position: relative;
}
.userInfo>li.user .username:hover .box{
    display: block;
}
.userInfo>li.user .username .box{
   width: 100px;
   position: absolute;
   list-style: none;
   right: 0;
   top: 73px; 
   display: none;
}
.userInfo>li.user .username .box li a{
    display: block;
    font-size: 13px;
    width: 100%;
    height: 35px;
    line-height: 35px;
    cursor: pointer;
    background-color: #fff;
    border-top: 1px solid #80808021;
}
.userInfo>li.user .username .box li:first-child a{
    border-top: none;
}
.userInfo>li.user .username .box li a:hover{
    background-color: #f2f2f2;
}
.userInfo>li.user{
    width: 120px;
    margin-left: 10px;
}
.userInfo>li.user .username{
    position: relative;
    cursor: pointer;
    float: left;
    height: 100%;
    width: calc(100% - 44px);
    text-align: center;
    overflow: visible;
}
.userInfo>li.user .username span{
    line-height: 61px;
}
.userInfo>li.user .username span i{
    margin-left: 10px;
    color: grey;
}
.userInfo>li.user .imgWrap{
    float: left;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-top: 12px;
}
.userInfo>li.user .imgWrap img{
    width: 44px;
    height: 44px;
}
.userInfo>li>a{
    display: block;
    width: 100%;
    height: 100%;
    color: #000;
    text-decoration: none;
    text-align: center;
    line-height: 70px;
    font-size: 25px;
    
}
.num{
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    font-size: 12px;
    line-height: 20px;
    top: 15px;
    right:0 ;
    color: #fff;
    border-radius: 50%;
    background-color:#33CCCC; 
}



</style>
