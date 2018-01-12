<template>
    <div class="content-wrapper" :class="{contentActive : $store.state.show}">
         <div class="routerContain">
            <button class="goLeft"><i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i></button>
            <div class="homePage"> <router-link to="/home">首页</router-link></div>
            <div class="window">
                <ul class="routerBox">
                    <li v-for="(i,index) in count" :key="index" class="routerBtn addBtn">
                        <router-link :to="{name:i.url,params:{id:i.params}}">{{i.name}}</router-link>
                        <span class="close" :menuurl="i.url" @click="close" :name="i.name" :index="index">×</span>
                    </li>
                </ul>
            </div>
            <button class="goRight"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button>
            <div class="goClose"><span>关闭操作<i class="fa fa-angle-up" aria-hidden="true"></i></span></div>
        </div>    
        <div class="content">
            <keep-alive>
            <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>
<script>
export default {
  name: 'appcontent',
  computed: {
    count () {
      return this.$store.state.slidbarData;//获取最新的页签数组
    }
  },
  methods:{
      close:function(e){
          var nowIndex=e.target.getAttribute('index');//close元素上面绑定的index
          var elClose=document.getElementsByClassName('close');
          var elA=document.querySelectorAll('.addBtn a');
          var slidbarData=this.$store.state.slidbarData;//储存页签数组
          var index;
          var previousIndex;//
         for(var i=0;i<elClose.length;i++){//获取点击关闭按钮时，点击的多项在元素.close数组里的下标
            // var indexArray=elClose[i].getAttribute("index");
             if(elClose[i].getAttribute("index")==nowIndex){
                 previousIndex=i-1;
                 index=i;
             }
         }
        
         if(previousIndex>=0&&this.hasClass(elA[index],'active')){//判断前一个路由按钮index是否存在，判断当前路由按钮是否激活
                 var url='/'+elClose[previousIndex].getAttribute('menuurl')+'/default';
                 this.$router.push({path:url})
         }else if(previousIndex==-1&&this.hasClass(elA[0],'active')){
             this.$router.push({path:'/home'})
         }
          slidbarData.splice(nowIndex,1);//储存页签数组里删除当前页签  
      },
      hasClass:function(obj, cls){
        var obj_class = obj.className,//获取 class 内容.
        obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
        var x = 0;
        for(x in obj_class_lst) {
            if(obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
            return true;
            }
        }
        return false;
      }
  }
}
</script>
<style  scoped>
.goLeft,.goRight{
     width: 50px;
     height: 43px;
     border: none;
     outline: none;
     background-color: #C9D1D1;
     color: #797979;
     font-size: 25px;
     cursor: pointer;
}
.goRight{
    margin-right: 1px;
}  
.homePage{
    height: 100%;
    background-color: #C9D1D1;
}
.homePage a{
    display: block;
    width: 50px;
    text-decoration: none;
    height: 100%;
    font-size: 12px;
    text-align: center;
    line-height: 43px;
    color: #333333;
}
.goClose{
    width: 86px;
    height: 43px;
    font-size: 12px;
    color: #333333;
    text-align: center;
    line-height: 43px;
    background-color: #C9D1D1;
    cursor: pointer;
}
.goLeft,
.homePage,
.window,
.goRight,
.goClose{
    float: left;
}
.content-wrapper{
    transition: width 0.5s,padding-left 0.5s;
    -moz-transition: width 0.5s,padding-left 0.5s;
    -webkit-transition: width 0.5s,padding-left 0.5s;
    -o-transition: width 0.5s,padding-left 0.5s; 
    background-color: #414e61;
    float: left;  
    width: calc(100% - 200px);
    padding-left: 235px;
}
.contentActive{
    width: 100%;
    padding-left:50px;
}
.content{
    padding: 15px;
    background-color:#eef1f5; 
    min-height:851px ;
    width: 100%;
}
.routerContain{
    position: relative;
    height: 43px;
    background-color: #eef1f5;
}
.window{
    overflow: hidden;
    width: calc(100% - 277px);
    height: 100%;
    background-color: #C9D1D1;
    margin-left: 1px;
}
.window .routerBox{
    height: 100%;
}

.window .routerBox .routerBtn{
    height: 100%;
    position: relative;
    display: inline-block;
    list-style: none;
}


.window .routerBox .routerBtn .close{
    display: block;
    position: absolute;
    top: 5px;
    right: 0;
    color: #000;;
    font-size: 12px;
    cursor: pointer;
}
.window .routerBox .routerBtn a{
    margin-top: 3px;
    height: 40px;
    padding: 0 15px;
    line-height: 40px;
    margin-right: 0;
    display: block;
    background-color: #C9D1D1;
    color: #333333;
    font-size: 12px;
    text-decoration: none;
}

.window .routerBox .routerBtn a.active{
    color: #33CCCC;
    background-color: #eef1f5;
}
.homePage a.active{
     color: #33CCCC;
    background-color: #eef1f5;
}

</style>
