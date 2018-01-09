<template>
  <button @click="goLogin">注册</button>
</template>
<script>
export default {
  methods:{
       switch(url){
            this.$router.push({path:url})//点击切换路由
        },
      goLogin:function(){
          //this.switch('/login');
          var _this=this;
          //if(表单验证通过)发送ajax
          _this.$axios.posts('/api/services/app/User/ChangeLanguage',{
        
 
  languageName: "英语"

          })
          .then(function (res) {
                //成功之后处理逻辑
                console.log(res);
                
                },function (res) {
                //失败之后处理逻辑
                // alert('用户名或密码错误')
                console.log(res);
            }) 
       
      }
  }
}
</script>
