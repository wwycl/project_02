<template>
  <div class="login-container">
    <div class="w">
      <header>
        <!-- logo模块 -->
        <div class="logo">
          <a href="index.html"><img src="@/assets/logo1.png" alt="#"></a>
        </div>
      </header>
      <div class="registerarea">
        <div class="head">
          <h2>用户登录</h2>
          <h3>我还没有账号，去 <router-link to="/register" style="color:red">注册</router-link>
          </h3>
        </div>
        <!-- 表单部分 -->
        <div class="reg_form">
          <form id="form1">
            <ul>
              <li>
                <label for="">用户名:</label><input type="text" class="inp" v-model.trim="username" />
                <!-- <span class="error"><i class="error_icon"></i>用户名不正确，请重新输入</span> -->
              </li>
              <!-- <li>
                <label for="">短信验证码:</label><input type="text" class="inp">
                <span class="correct"><i class="correct_icon"></i>验证码格式不正确，请重新输入</span>
              </li> -->
              <li>
                <label for="">登录密码:</label><input type="password" class="inp" v-model.trim="password" />
                <!-- <span class="error"><i class="error_icon"></i>密码格式不正确，请重新输入</span> -->
              </li>
              <li class="safe">安全程度 <em class="ruo">弱</em> <em class="zhong">中</em> <em class="qiang">强</em>
              </li>
              <li class="xieyi">
                <input type="checkbox" name="" id=""> 同意协议并登录<a href="#" class="skyblue">《知晓用户协议》</a>
              </li>
              <li><input type="submit" value="登录" class="btn" @click.prevent="initLoginApi"></li>
            </ul>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>



<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async initLoginApi() {
      let data = {
        username: this.username,
        password: this.password,
      }
      const { data: res } = await axios.post('http://127.0.0.1/api/login', qs.stringify(data))
      console.log(res)
      if (res.status === 0) {
        alert('登录成功')
        // 储存 token 值
        localStorage.setItem('token', res.token)
        // 成功之后跳转到主页
        this.$router.push('/home')
      } else {
        alert('登录失败!')
      }
    },
  },
}
</script>




<style lang="less" scoped>
.skyblue {
  color: #28a3ef;
}
.w {
  width: 1200px;
  margin: 0 auto;
}
header {
  height: 104px;
  border-bottom: 2px solid #c81523;
}
.logo {
  padding-top: 15px;
}
.registerarea {
  height: 512px;
  border: 1px solid #ccc;
  margin-top: 20px;
  background-image: url('@/assets/R-C.jfif');
}
.registerarea .head {
  height: 43px;
  line-height: 43px;
  padding: 0 20px;
}
.registerarea .head h2 {
  float: left;
}
.registerarea .head h3 {
  float: right;
}
.reg_form {
  width: 600px;
  margin: 50px auto 0;
}
.reg_form ul li label {
  display: inline-block;
  width: 88px;
  text-align: right;
  margin-right: 10px;
}
.reg_form ul li .inp {
  width: 242px;
  height: 37px;
  border: 1px solid #ccc;
}
.error {
  color: crimson;
}
.correct {
  color: green;
}
.error_icon {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  // background: url(../images/error.png);
  margin-top: -2px;
}
.correct_icon {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  // background: url(../images/correct.png);
  margin-top: -2px;
}
.reg_form ul li {
  margin-bottom: 20px;
}
.safe {
  padding-left: 173px;
}
.safe em {
  padding: 0 12px;
  color: white;
}
.safe .ruo {
  background-color: red;
}
.safe .zhong {
  background-color: rgb(111, 231, 95);
}
.safe .qiang {
  background-color: yellow;
}
.xieyi {
  padding-left: 125px;
}
.xieyi input {
  vertical-align: middle;
}
.btn {
  background-color: #c81523;
  color: white;
  padding: 8px 70px;
  margin: 25px 125px;
  font-size: 14px;
}
</style>