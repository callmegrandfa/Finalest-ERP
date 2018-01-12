<template>
    <el-row class="loginWrapper">
        
        <el-col class="leftDiv">
             <el-col :span="24">
                <el-col :span="10" class="ERP" :offset="1">
                    <span>恒康智能云</span>
                </el-col>
            </el-col>
            <el-col :span="24">
                <el-col :span="22" class="product" :offset="1"></el-col>
            </el-col>
        </el-col>
        <el-col class="loginForm">
           
            <div class="code">
                 <img src="../../static/image/login/QRcode.png">
            </div>
            
            <el-col :span="3" :offset="15" class="choose">
               <img src="../../static/image/login/language.png" alt="语言"><span>语言</span>
            </el-col>
            <el-col :span="3" :offset="1" class="choose">
               <img src="../../static/image/login/setting.png" alt="设置"><span>设置</span>
            </el-col>
             <el-col :span="24" class="formInputs">
                <el-col :span="16" :offset="4" class="formInput">
                    <el-input placeholder="Admin" v-model="login.userNameOrEmailAddress"></el-input>
                </el-col>
                <el-col :span="16" :offset="4" class="formInput">
                   <el-input placeholder="123qwe" v-model="login.password"></el-input>
                </el-col>
                <el-col :span="16" :offset="4" class="formInput">
                   <button @click="loginAjax">登&nbsp;&nbsp;录</button> 
                </el-col>
                <el-col :span="16" :offset="4" class="formInput">
                   <el-col :span="12" class="remember">
                        <i class="fa fa-check-circle" aria-hidden="true" :class="{check : ischecked}" @click="ischecked = !ischecked"></i>
                        <span @click="ischecked = !ischecked">记住密码</span></el-col>
                   <el-col :span="12" class="forget"><span @click="goRegister">忘记密码</span></el-col>
                </el-col>
                <el-col :span="10" :offset="7" class="formInput thirdParty">
                     <el-col :span="2" :offset="3">
                        <hr>
                     </el-col>  
                     <el-col :span="12" :offset="1">
                        <span>使用第三方账号登录</span>
                     </el-col> 
                     <el-col :span="2" :offset="1">
                        <hr>
                     </el-col>    
                </el-col>
                <el-col class="formInput" :span="24">
                    <div class="thirdLogo">
                        <div class="circleLogin weChat" alt="微信"></div>
                        <div class="circleLogin DD" alt="钉钉"></div>
                        <div class="circleLogin QQ" alt="QQ"></div>
                    </div>    
                </el-col>
                <el-col :span="24" class="copyright">
                    <p>版权制作 广州恒康信息科技有限公司</p>
                </el-col>
            </el-col>
        </el-col>
    </el-row>
</template>
<script>
export default {
  data(){
      return{
          ischecked:false,
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
                // console.log(res);
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
        background-image: url(../../static/image/login/bg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .loginWrapper .leftDiv{
        width: calc(100% - 872.2px);
    }
    .loginWrapper .loginForm{
        width: 872.2px;
        height: 100%;
        background-repeat: no-repeat;
        background-position: right bottom;
        background-color: #0000006e;
        -moz-user-select:none;
        -webkit-user-select:none;
        user-select:none;
        z-index: 99;
        position: relative;
    }
    .loginWrapper .code{
        overflow: hidden;
        position: absolute;
        right: 0;
        bottom: 0;
        width: 94px;
        height: 95px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: right bottom;
        background-image: url(../../static/image/login/code.png)
    }
    .loginWrapper .code img{
        position: relative;
        right: 0;
        bottom: 0;
    }
    .loginWrapper .loginForm .choose{
        cursor: pointer;
        margin-top: 20px;
    }
    .loginWrapper .loginForm .choose span{
        font-size: 16px;
        color: #fff;
        font-weight: 400;
        line-height: 15px;
    }
    .loginWrapper .loginForm .choose img{
        vertical-align: sub;
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
    .loginWrapper .ERP{
        margin-top: 40px;
        position: relative;
        height: 54px;
        width: 124px;
        background-image: url(../../static/image/login/ERP.png);
        background-repeat: no-repeat;
        background-size: contain;
    }
    .loginWrapper .ERP span{
        color: #fff;
        font-size: 12px;
        position: absolute;
        bottom: 0;
        right: -30px;
    }
    .loginWrapper .product{
        height: 370px;
        background-image: url(../../static/image/login/product.png);
        background-repeat: no-repeat;
        background-size: 70%;
        background-position: center;
        margin-top: 150px;
    }
    .loginWrapper .formInputs{
       margin-top: 200px;
    }
    .loginWrapper .formInputs .formInput{
       margin-bottom: 15px;
    }
    .loginWrapper .formInputs .formInput button{
        margin-top: 15px;
        -webkit-appearance: none;
        background-color: #3cc;
        color: #fff!important;
        border-radius: 4px;
        border: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 1;
        outline: 0;
        padding: 0 15px;
        -webkit-transition: background-color .2s cubic-bezier(.645,.045,.355,1);
        transition: background-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
        cursor: pointer;
    }
    .loginWrapper .formInputs .formInput button:hover{
        background-color: #20e4e4;
    }
    .loginWrapper .remember{
        color: #fff;
    }
    .loginWrapper .remember i{
        vertical-align: middle;
        font-size: 20px;
        cursor: pointer;
    }
    .loginWrapper .remember span,.loginWrapper .forget span{
        font-size: 12px;
        cursor: pointer;    
    }
    .loginWrapper .forget{
        color: #fff;
        text-align: right;
    }
    .loginWrapper .check{
       
        color: #20e4e4;
    }
    .loginWrapper .thirdParty{
        color: #fff;
        text-align: center;
        margin-top: 30px;
    }
    .loginWrapper .thirdLogo{
        width: 242px;
        margin: auto;
        margin-top: 18px;
        overflow: hidden;
    }
    .loginWrapper .circleLogin{
        float: left;
        width: 58px;
        height: 58px;
        background-color: #fff;
        border-radius: 50%;
        background-size: 55%;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        margin-left:34px;
    }
    
    .loginWrapper .circleLogin:first-child{
        margin-left: 0;
    }
    .weChat{
        background-image: url(../../static/image/login/wechat.png)
    }
    .DD{
        background-image: url(../../static/image/login/DD.png)
    }
    .QQ{
        background-image: url(../../static/image/login/QQ.png)
    }
    .loginWrapper .copyright{
        margin-top: 250px;
    }
    .loginWrapper .copyright p{
        font-size: 12px;
        color: #fff;
        text-align: center;
    }
</style>

