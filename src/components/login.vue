<template>
    <el-row class="loginWrapper" id="loginWrapper">
        
        <el-col class="leftDiv">
             <el-col :span="24">
                <el-col :span="10" class="ERP" :offset="1">
                    <span>恒康智能云</span>
                </el-col>
            </el-col>
        </el-col>
        <el-col class="loginForm">
           
            <div class="code">
                 <img src="../../static/image/login/QRcode.png">
            </div>
            <el-col :span="3" class="choose">
               <img src="../../static/image/login/setting.png" alt="设置"><span>设置</span>
            </el-col>
            <el-col :span="3" class="choose">
               <img src="../../static/image/login/language.png" alt="语言"><span>语言</span>
            </el-col>
            
                <el-col :span="24" class="formInput name">
                    <el-input placeholder="Admin" v-model="login.userNameOrEmailAddress"></el-input>
                </el-col>
                <el-col :span="24" class="formInput psw">
                   <el-input placeholder="123qwe" v-model="login.password"></el-input>
                </el-col>
                <el-col :span="24" class="formInput bt">
                   <button @click="loginAjax">登&nbsp;&nbsp;录</button> 
                </el-col>
                <el-col :span="24" class="formInput go">
                    <div class="operate">
                        <el-col :span="12" class="remember">
                            <i class="fa fa-check-circle" aria-hidden="true" :class="{check : ischecked}" @click="ischecked = !ischecked"></i>
                            <span @click="ischecked = !ischecked">记住密码</span>
                        </el-col>
                        <el-col :span="12" class="forget"><span @click="goRegister">忘记密码</span></el-col>
                    </div>
                   
                </el-col>
                <el-col :span="24" class="formInput thirdParty">
                    <div class="thirds">
                        <el-col :span="2" :offset="4">
                            <hr>
                        </el-col>  
                        <el-col :span="12">
                            <span>使用第三方账号登录</span>
                        </el-col> 
                        <el-col :span="2">
                            <hr>
                        </el-col>   
                    </div>    
                </el-col>
                <el-col class="formInput lg" :span="24">
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
  mounted:function(){//设置高度为全屏
            let body=document.getElementsByTagName('body')[0];
            let h=window.innerHeight;
            body.style.height=h+'px';
      window.onresize = function(){
            let height=window.innerHeight;
            body.style.height=height+'px';
     }
  },
  methods:{
      switch(url){
            this.$router.push(url);//点击切换路由
        },
      loginAjax:function(){
          let _this=this;
          //if(表单验证通过)发送ajax
          _this.$axios.posts('/api/TokenAuth/Authenticate',_this.login)
          .then(function (res) {
                //成功之后处理逻辑
                let flag=false;
                if(_this.$store.state.username){
                  _this.$store.state.temporaryLogin=_this.$store.state.username;
                }
                let temporaryLogin=_this.$store.state.temporaryLogin;
                if(temporaryLogin.length==0){//temporary为空
                    flag=true;
                }else{//temporary不为空
                    for(var i=0;i<temporaryLogin.length;i++){
                        if(temporaryLogin[i].name==_this.login.userNameOrEmailAddress){//相同用户登录
                            flag=false;
                            break;
                        }else{
                        flag=true;
                        }   
                    }
                }
                if(flag){
                    let pushItem={'name':_this.login.userNameOrEmailAddress,'accessToken':'Bearer '+res.result.accessToken};
                    temporaryLogin.push(pushItem);
                }
                // console.log('Bearer '+res.result.accessToken)
                window.sessionStorage.setItem('_ERP',JSON.stringify(temporaryLogin));
                _this.$store.commit('username');
                //_this.sessionStorage(_this.login.userNameOrEmailAddress,'Bearer '+res.result.accessToken);//sessionStorage
                _this.$store.state.alerts=true;
                window.localStorage.removeItem('ERP');
                _this.$store.state.url='/home';
                _this.switch('home');
                },function (res) {
                //失败之后处理逻辑
                // alert('用户名或密码错误')
                // _this.switch('/home');
                console.log(res);
            }) 
      },
      goRegister:function(){
          this.$router.push('/register');//点击切换路由
      }
   },
}
</script>
<style scoped>
    
    .loginWrapper{
        width: 100%;
        height: 100%;
        background-image: url(../../static/image/login/bg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .loginWrapper .leftDiv{
        position: relative;
        width: 51%;
        float: left;
        height: 100%;
        background-image: url(../../static/image/login/product.png);
        background-repeat: no-repeat;
        background-size: 70%;
        background-position: center;
    }
    .loginWrapper .loginForm{
        float: left;
        width: 49%;
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
        float: right;
        cursor: pointer;
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
    .loginWrapper .formInput{
        position: absolute;
    }
    .loginWrapper .formInput.name{
        bottom: 66%;
    }
    .loginWrapper .formInput.psw{
        bottom: 60%;
    }
    .loginWrapper .formInput.bt{
        bottom: 51%;
    }
    .loginWrapper .formInput.go{
        bottom: 47%;
    }
    .loginWrapper .formInput.thirdParty{
        bottom: 40%;
    }
    .loginWrapper .formInput.lg{
        bottom: 30%;
    }
     .loginWrapper .copyright{
        position: absolute;
        bottom: 6%;
    }
    .loginWrapper .formInput .el-input,
    .loginWrapper .formInput button,
    .loginWrapper .operate{
        width: 70%;
        position: relative;
        left: 15%;
    }

    .loginWrapper .formInput button{
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
        margin: auto;
        cursor: pointer;
    }
    .loginWrapper .formInput button:hover{
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
    }
    .loginWrapper .thirdParty .thirds{
        width: 40%;
        position: relative;
        margin: auto;
    }
    .loginWrapper .thirdLogo{
        width: 26%;
        margin: auto;
        overflow: hidden;
        position: relative;
        height: 58px    ;
    }
    .loginWrapper .circleLogin{
        width: 58px;
        height: 58px;
        background-color: #fff;
        border-radius: 50%;
        background-size: 55%;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        position: absolute;
    }
    
    .loginWrapper .circleLogin:first-child{
        margin-left: 0;
    }
    .weChat{
        background-image: url(../../static/image/login/wechat.png);
        left: 0;
        
    }
    .DD{
        background-image: url(../../static/image/login/DD.png);
        left: calc(50% - 29px);
    }
    .QQ{
        background-image: url(../../static/image/login/QQ.png);
        right: 0;
    }
    .loginWrapper .copyright p{
        font-size: 12px;
        color: #fff;
        text-align: center;
    }
</style>

