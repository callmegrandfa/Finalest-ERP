<template>
    <el-row>
        <el-col :span="5" class="bgcolor"><label>用户名</label><el-input placeholder="Admin" v-model="login.userNameOrEmailAddress"></el-input></el-col>
        <el-col :span="5" class="bgcolor"><label>密码</label><el-input placeholder="123qwe" v-model="login.password"></el-input></el-col>
        <el-checkbox v-model="login.rememberClient">记住我</el-checkbox>
        <button @click="loginAjax">登录</button> 
        <button @click="goRegister">注册</button> 
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
      switch(url){
            this.$router.push({path:url})//点击切换路由
        },
      loginAjax:function(){
          var _this=this;
          //if(表单验证通过)发送ajax
          this.$axios.posts('/api/TokenAuth/Authenticate',this.login)
          .then(function (res) {
                //成功之后处理逻辑
                _this.$store.state.accessToken='Bearer '+res.result.accessToken//vuex,store里面存入token
                //_this.$axios.setAuth(_this.$store.state.accessToken)
                _this.switch('/index')
                },function (res) {
                //失败之后处理逻辑
                console.log("error:"+res)
            }) 
      },
      goRegister:function(){
          this.switch('/register')
      }
   },
}
</script>

