<template>
    <el-row class="loginWrapper">
        <el-col :span="11" :offset="13">1</el-col>
        <!-- <el-col :span="5" class="bgcolor"><label>用户名</label><el-input placeholder="Admin" v-model="login.userNameOrEmailAddress"></el-input></el-col>
        <el-col :span="5" class="bgcolor"><label>密码</label><el-input placeholder="123qwe" v-model="login.password"></el-input></el-col>
        <el-checkbox v-model="login.rememberClient">记住我</el-checkbox>
        <button @click="loginAjax">登录</button> 
        <button @click="goRegister">注册</button>  -->
    </el-row>
</template>
<script>
export default {
  data(){
      return{
          login:{
              userNameOrEmailAddress:'admin',
              password:'123qwe',
              rememberClient:true,
          }
      }
  },
  methods:{
      setCookie(c_name,value,expiredays){
        var exdate=new Date();
        exdate.setDate(exdate.getDate()+expiredays);
        document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
        },
      switch(url){
            this.$router.push({path:url});//点击切换路由
        },
      loginAjax:function(){
          var _this=this;
          //if(表单验证通过)发送ajax
          _this.$axios.posts('/api/TokenAuth/Authenticate',this.login)
          .then(function (res) {
                //成功之后处理逻辑
                //console.log(res);
                _this.$store.state.username=_this.login.userNameOrEmailAddress;//vuex,store里面存入userNameOrEmailAddress
                _this.$store.state.accessToken='Bearer '+res.result.accessToken;//vuex,store里面存入token
                _this.setCookie(_this.$store.state.username,_this.$store.state.accessToken,'30');//设置cookie过期时间30天
                _this.switch('/home');
                },function (res) {
                //失败之后处理逻辑
                // alert('用户名或密码错误')
                console.log(res);
            }) 
      },
      goRegister:function(){
          this.switch('/register');
      }
   },
}
</script>
<style scoped>
    .loginWrapper{
        width: 100%;
        height: 974px;
    }
</style>

